"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface ChatMessage {
  id: string;
  role: "bot" | "user";
  text: string;
  timestamp: Date;
  products?: Product[];
}

// ---------------------------------------------------------------------------
// Keyword maps
// ---------------------------------------------------------------------------

const KEYWORD_MAP: Record<string, string[]> = {
  "elektromanyetik-debimetreler": [
    "debimetre",
    "debi",
    "akis",
    "akış",
    "flow",
    "flowmeter",
    "elektromanyetik",
    "faraday",
    "debi olcum",
    "debi ölçüm",
    "расходомер",
    "流量计",
    "caudalímetro",
  ],
  "manyetik-bypass-seviye-gostergeleri": [
    "bypass",
    "seviye gostergesi",
    "seviye göstergesi",
    "manyetik bypass",
    "flap",
    "şamandıra",
    "samandira",
    "tank seviye",
    "уровнемер",
    "液位计",
  ],
  "basinc-transmitterleri": [
    "basinc",
    "basınç",
    "pressure",
    "transmitter",
    "manometre",
    "diferansiyel",
    "давление",
    "压力",
    "presión",
  ],
  "sicaklik-sensorleri": [
    "sicaklik",
    "sıcaklık",
    "temperature",
    "pt100",
    "pt1000",
    "termokupl",
    "thermocouple",
    "rtd",
    "температура",
    "温度",
    "temperatura",
  ],
  "seviye-sensorleri": [
    "seviye",
    "level",
    "ultrasonik",
    "ultrasonic",
    "kapasitif",
    "capacitive",
    "seviye sensoru",
    "seviye sensörü",
    "уровень",
    "液位",
    "nivel",
  ],
  "proses-kontrol-cihazlari": [
    "kontrol",
    "pid",
    "kontrolor",
    "kontrolör",
    "datalogger",
    "sinyal",
    "signal",
    "donusturucu",
    "dönüştürücü",
    "контроль",
    "控制",
    "control",
  ],
  "aktuatorler-ve-vanalar": [
    "vana",
    "valve",
    "aktuator",
    "aktüatör",
    "actuator",
    "pnomatik",
    "pnömatik",
    "pneumatic",
    "kuresel",
    "küresel",
    "elektrikli aktuator",
    "клапан",
    "阀门",
    "válvula",
  ],
};

const PRICE_KEYWORDS = [
  "fiyat",
  "fiyatı",
  "price",
  "ucret",
  "ücret",
  "maliyet",
  "cost",
  "كم",
  "سعر",
  "цена",
  "价格",
  "precio",
  "ne kadar",
  "kaç tl",
  "kaç lira",
];

const GREETING_PATTERNS = [
  // Turkish
  "merhaba",
  "selam",
  "iyi günler",
  "iyi gunler",
  "meraba",
  "naber",
  "nasılsın",
  "nasilsin",
  "hey",
  "sa",
  "selamun",
  // English
  "hello",
  "hi",
  "hey",
  "good morning",
  "good evening",
  "howdy",
  "greetings",
  // Arabic
  "مرحبا",
  "السلام",
  "اهلا",
  "أهلا",
  // Russian
  "привет",
  "здравствуйте",
  "добрый",
  // Chinese
  "你好",
  "您好",
  // Azerbaijani
  "salam",
  "necəsən",
  "necesin",
  // Spanish
  "hola",
  "buenos",
  "buenas",
];

const SUPPORT_KEYWORDS = [
  "destek",
  "yardim",
  "yardım",
  "support",
  "help",
  "iletisim",
  "iletişim",
  "telefon",
  "email",
  "arama",
  "помощь",
  "帮助",
  "ayuda",
  "مساعدة",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function generateId(): string {
  return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/İ/g, "i")
    .replace(/I/g, "ı")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/Ğ/g, "g")
    .replace(/Ü/g, "u")
    .replace(/Ş/g, "s")
    .replace(/Ö/g, "o")
    .replace(/Ç/g, "c")
    .trim();
}

function matchesAny(input: string, keywords: string[]): boolean {
  const normalizedInput = normalize(input);
  return keywords.some((kw) => normalizedInput.includes(normalize(kw)));
}

function searchProducts(query: string): Product[] {
  const normalizedQuery = normalize(query);
  const tokens = normalizedQuery.split(/\s+/).filter((t) => t.length > 2);

  // 1. Category keyword match
  const matchedCategorySlugs: string[] = [];
  for (const [slug, keywords] of Object.entries(KEYWORD_MAP)) {
    if (matchesAny(query, keywords)) {
      matchedCategorySlugs.push(slug);
    }
  }

  if (matchedCategorySlugs.length > 0) {
    return products.filter((p) =>
      matchedCategorySlugs.includes(p.categorySlug)
    );
  }

  // 2. Direct text search across product fields
  const scored = products.map((product) => {
    let score = 0;
    const fields = [
      product.name,
      product.category,
      product.shortDescription,
      product.description,
      ...Object.keys(product.specs),
      ...Object.values(product.specs),
    ];
    const combined = normalize(fields.join(" "));

    for (const token of tokens) {
      if (combined.includes(token)) {
        score += 1;
      }
      // Bonus for name match
      if (normalize(product.name).includes(token)) {
        score += 3;
      }
    }
    return { product, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((s) => s.product);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ChatBot() {
  const { exchangeRate } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: generateId(),
          role: "bot",
          text: "Merhaba! Meoflow ürün danışmanıyım. Size nasıl yardımcı olabilirim?\n\nAşağıdaki seçeneklerden birini seçebilir veya doğrudan sorunuzu yazabilirsiniz.",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  // Notification pulse after 5 seconds if chat never opened
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && messages.length === 0) {
        setHasUnread(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen, messages.length]);

  const addBotMessage = useCallback(
    (text: string, matchedProducts?: Product[]) => {
      setIsTyping(true);
      const delay = Math.min(400 + text.length * 3, 1200);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: generateId(),
            role: "bot",
            text,
            timestamp: new Date(),
            products: matchedProducts,
          },
        ]);
        setIsTyping(false);
        if (!isOpen) setHasUnread(true);
      }, delay);
    },
    [isOpen]
  );

  const processMessage = useCallback(
    (userText: string) => {
      // Check greetings
      if (matchesAny(userText, GREETING_PATTERNS) && userText.trim().split(/\s+/).length <= 4) {
        addBotMessage(
          "Merhaba! Meoflow'a hoş geldiniz. Size endüstriyel ölçüm ve kontrol ekipmanları konusunda yardımcı olabilirim.\n\nHangi konuda bilgi almak istersiniz?"
        );
        return;
      }

      // Check support requests
      if (matchesAny(userText, SUPPORT_KEYWORDS)) {
        addBotMessage(
          "Teknik destek ekibimize ulaşabilirsiniz:\n\n" +
            "Telefon: +90 (212) 000 00 00\n" +
            "E-posta: info@meoflow.com\n" +
            "İletişim sayfamız: /iletisim\n\n" +
            "Çalışma saatleri: Pazartesi-Cuma 09:00-18:00\n\n" +
            "Ayrıca aşağıdaki butonlardan ürün kategorilerimizi inceleyebilirsiniz."
        );
        return;
      }

      // Check price queries
      if (matchesAny(userText, PRICE_KEYWORDS)) {
        // Check if a specific product category is also mentioned
        const matchedProducts = searchProducts(userText);
        if (matchedProducts.length > 0) {
          const priceRange = matchedProducts.map(
            (p) => p.basePrice * exchangeRate
          );
          const minPrice = Math.min(...priceRange);
          const maxPrice = Math.max(...priceRange);
          addBotMessage(
            `Bu kategorideki ürünlerimizin fiyat aralığı:\n${minPrice.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL - ${maxPrice.toLocaleString("tr-TR", { maximumFractionDigits: 0 })} TL\n\nGüncel döviz kuru: 1 USD = ${exchangeRate.toFixed(2)} TL\n\nDetaylı fiyat ve teknik bilgi için ürün sayfalarını inceleyebilirsiniz:`,
            matchedProducts
          );
        } else {
          addBotMessage(
            `Fiyat bilgisi için ürün kategorimizi belirtebilirsiniz. Örneğin "debimetre fiyat" veya "basınç transmitter fiyat" yazabilirsiniz.\n\nGüncel döviz kuru: 1 USD = ${exchangeRate.toFixed(2)} TL\n\nTüm ürünlerimizi incelemek için: /urunler`
          );
        }
        return;
      }

      // General product search
      const matchedProducts = searchProducts(userText);
      if (matchedProducts.length > 0) {
        const categoryNames = [
          ...new Set(matchedProducts.map((p) => p.category)),
        ];
        addBotMessage(
          `"${userText}" ile ilgili ${matchedProducts.length} ürün buldum (${categoryNames.join(", ")}):`,
          matchedProducts
        );
      } else {
        // No results - suggest categories
        addBotMessage(
          "Maalesef aramanızla eşleşen bir ürün bulamadım. Aşağıdaki kategorilerden birini inceleyebilirsiniz:\n\n" +
            categories.map((c) => `${c.icon} ${c.name}`).join("\n") +
            "\n\nVeya teknik destek için iletişim sayfamızı ziyaret edebilirsiniz: /iletisim"
        );
      }
    },
    [addBotMessage, exchangeRate]
  );

  const handleSend = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: generateId(),
      role: "user",
      text: trimmed,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    processMessage(trimmed);
  }, [input, processMessage]);

  const handleQuickAction = useCallback(
    (action: string) => {
      const userMsg: ChatMessage = {
        id: generateId(),
        role: "user",
        text: action,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMsg]);
      processMessage(action);
    },
    [processMessage]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  // ------ Quick action buttons configuration ------
  const quickActions = [
    { label: "Debimetre Seçimi", query: "Debimetre Seçimi" },
    { label: "Seviye Ölçüm", query: "Seviye Ölçüm" },
    { label: "Fiyat Bilgisi", query: "Fiyat Bilgisi" },
    { label: "Teknik Destek", query: "Teknik Destek" },
  ];

  return (
    <>
      {/* ---- Chat Panel ---- */}
      <div
        className={`fixed bottom-20 right-4 z-50 w-[calc(100vw-2rem)] sm:w-96 sm:max-w-sm transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0 pointer-events-auto"
            : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-h-[min(32rem,calc(100vh-10rem))]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight">
                  Meoflow Asistan
                </h3>
                <p className="text-primary-200 text-xs">
                  Ürün danışmanı
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Sohbeti kapat"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50/50 min-h-0">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-primary-600 text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-md"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <p
                      className={`text-[10px] mt-1.5 ${
                        msg.role === "user"
                          ? "text-primary-200"
                          : "text-gray-400"
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>

                {/* Product cards */}
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-2 space-y-2 ml-0">
                    {msg.products.slice(0, 5).map((product) => (
                      <Link
                        key={product.id}
                        href={`/urunler/${product.slug}`}
                        className="block bg-white border border-gray-100 rounded-xl p-3 hover:border-primary-300 hover:shadow-md transition-all group"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center shrink-0 group-hover:bg-primary-100 transition-colors">
                            <svg
                              className="w-5 h-5 text-primary-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                              />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-gray-800 truncate group-hover:text-primary-700 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-[10px] text-gray-500 mt-0.5 truncate">
                              {product.category}
                            </p>
                            <div className="flex items-baseline gap-1.5 mt-1">
                              <span className="text-xs font-bold text-primary-700">
                                {(
                                  product.basePrice * exchangeRate
                                ).toLocaleString("tr-TR", {
                                  maximumFractionDigits: 0,
                                })}{" "}
                                TL
                              </span>
                              <span className="text-[10px] text-gray-400">
                                (${product.basePrice})
                              </span>
                            </div>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-300 group-hover:text-primary-500 transition-colors shrink-0 mt-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m8.25 4.5 7.5 7.5-7.5 7.5"
                            />
                          </svg>
                        </div>
                      </Link>
                    ))}
                    {msg.products.length > 5 && (
                      <p className="text-[11px] text-gray-500 text-center py-1">
                        +{msg.products.length - 5} ürün daha...{" "}
                        <Link
                          href="/urunler"
                          className="text-primary-600 hover:underline"
                        >
                          Tümünü gör
                        </Link>
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick actions - show only when there are few messages */}
          {messages.length <= 2 && !isTyping && (
            <div className="px-4 py-2 border-t border-gray-100 bg-white shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.query)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full border border-primary-200 text-primary-700 bg-primary-50 hover:bg-primary-100 hover:border-primary-300 transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input area */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Bir soru yazın..."
                className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/30 focus:border-primary-400 transition-all"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="shrink-0 w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center hover:bg-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Gönder"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-400 text-center mt-2">
              Meoflow Ürün Danışmanı &middot; 7/24 aktif
            </p>
          </div>
        </div>
      </div>

      {/* ---- Floating Button ---- */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? "bg-gray-700 hover:bg-gray-800 rotate-0"
            : "bg-primary-600 hover:bg-primary-700 hover:scale-105"
        }`}
        aria-label={isOpen ? "Sohbeti kapat" : "Sohbeti aç"}
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
            />
          </svg>
        )}

        {/* Unread notification dot */}
        {hasUnread && !isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full border-2 border-white badge-pulse" />
        )}
      </button>
    </>
  );
}
