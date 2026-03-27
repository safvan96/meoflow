"use client";

import { useState } from "react";

const steps = [
  {
    label: "Siparis Alindi",
    description: "Siparisiz basariyla alindi ve onaylandi.",
    icon: "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  },
  {
    label: "Hazirlaniyor",
    description: "Urunleriniz depomuzda hazirlanmaktadir.",
    icon: "M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
  },
  {
    label: "Kargoya Verildi",
    description: "Paketiniz kargo firmasina teslim edildi.",
    icon: "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  },
  {
    label: "Dagitimda",
    description: "Paketiniz dagitim surecindedir, bugun teslim edilecektir.",
    icon: "M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z",
  },
  {
    label: "Teslim Edildi",
    description: "Paketiniz basariyla teslim edilmistir. Iyi gunlerde kullanin!",
    icon: "M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z",
  },
];

function hashTrackingNumber(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    const char = value.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

export default function KargoTakipPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [searched, setSearched] = useState(false);
  const [searchedNumber, setSearchedNumber] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingNumber.trim()) return;

    const hash = hashTrackingNumber(trackingNumber.trim());
    // Generate a step between 0 and 4 based on the hash
    const step = hash % 5;
    setCurrentStep(step);
    setSearched(true);
    setSearchedNumber(trackingNumber.trim());
  };

  const generateDate = (daysAgo: number) => {
    const d = new Date();
    d.setDate(d.getDate() - daysAgo);
    return d.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-gradient text-white py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Kargo Takip
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Siparis numaranizi girerek kargonuzun guncel durumunu
            ogrenebilirsiniz.
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Siparis veya takip numarasi girin..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-gray-50 hover:bg-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shrink-0"
            >
              Sorgula
            </button>
          </form>
        </div>
      </section>

      {/* Results */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {!searched ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-primary-50 text-primary-400 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Kargo Durumunuzu Sorgulaysin
            </h3>
            <p className="text-sm text-gray-500">
              Yukaridaki alana siparis numaranizi girerek kargonuzun guncel
              durumunu gorebilirsiniz.
            </p>
          </div>
        ) : currentStep !== null ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            {/* Order Info Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8 pb-6 border-b border-gray-100">
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                  Takip Numarasi
                </div>
                <div className="text-lg font-bold text-gray-900 mt-1">
                  {searchedNumber}
                </div>
              </div>
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                  currentStep === 4
                    ? "bg-green-100 text-green-700"
                    : "bg-primary-100 text-primary-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    currentStep === 4 ? "bg-green-500" : "bg-primary-500 animate-pulse"
                  }`}
                />
                {currentStep === 4 ? "Teslim Edildi" : "Devam Ediyor"}
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {steps.map((step, idx) => {
                const isCompleted = idx <= currentStep;
                const isCurrent = idx === currentStep;
                const isLast = idx === steps.length - 1;

                return (
                  <div key={step.label} className="flex gap-4">
                    {/* Timeline Line + Dot */}
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 transition-all ${
                          isCurrent
                            ? "bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-200"
                            : isCompleted
                            ? "bg-primary-100 border-primary-300 text-primary-600"
                            : "bg-gray-100 border-gray-200 text-gray-400"
                        }`}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d={step.icon}
                          />
                        </svg>
                      </div>
                      {!isLast && (
                        <div
                          className={`w-0.5 h-16 ${
                            isCompleted && idx < currentStep
                              ? "bg-primary-300"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-8 ${!isLast ? "" : ""}`}>
                      <h4
                        className={`font-semibold ${
                          isCurrent
                            ? "text-primary-700"
                            : isCompleted
                            ? "text-gray-900"
                            : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </h4>
                      <p
                        className={`text-sm mt-0.5 ${
                          isCompleted ? "text-gray-500" : "text-gray-300"
                        }`}
                      >
                        {step.description}
                      </p>
                      {isCompleted && (
                        <span className="text-xs text-gray-400 mt-1 inline-block">
                          {generateDate(
                            (currentStep - idx) * 1 + (isCurrent ? 0 : 1)
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Info Note */}
            <div className="mt-6 p-4 bg-primary-50 rounded-xl border border-primary-100">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-primary-500 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                <div className="text-sm text-primary-700">
                  Kargonuzla ilgili bir sorun yasarsaniz{" "}
                  <span className="font-semibold">+90 (212) 555 00 00</span>{" "}
                  numarasindan bize ulasabilirsiniz.
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
