import { Product } from "@/types";

export const products: Product[] = [
  // ===== ELEKTROMANYETİK DEBİMETRELER =====
  {
    id: "emd-001",
    slug: "standart-elektromanyetik-debimetre",
    name: "Standart Seri Elektromanyetik Debimetre",
    category: "Elektromanyetik Debimetreler",
    categorySlug: "elektromanyetik-debimetreler",
    shortDescription:
      "Endüstriyel su ve atık su uygulamaları için ekonomik ve güvenilir debi ölçümü.",
    description: `Standart Seri Elektromanyetik Debimetre, Faraday'ın elektromanyetik indüksiyon yasasına dayalı olarak çalışan, iletken sıvıların debisini yüksek hassasiyetle ölçen endüstriyel bir cihazdır.

Hareketli parça içermediğinden basınç kaybı minimum düzeydedir ve bakım maliyetleri son derece düşüktür. DN15'ten DN300'e kadar geniş çap seçenekleri ile su arıtma tesislerinden endüstriyel proseslere kadar her alanda kullanılabilir.

Kompakt ve ayrık (remote) montaj seçenekleri mevcuttur. IP65/IP68 koruma sınıfı sayesinde zorlu ortam koşullarına dayanıklıdır. 4-20mA analog çıkış, pulse çıkış ve RS485 Modbus haberleşme desteği sunar.`,
    specs: {
      "Ölçüm Çapı": "DN15 - DN300",
      Hassasiyet: "±%0.5",
      "Akışkan Sıcaklığı": "-10°C ~ +120°C",
      "Çalışma Basıncı": "1.6 MPa (standart)",
      "Koruma Sınıfı": "IP65 / IP68",
      Çıkış: "4-20mA, Pulse, RS485",
      "Gövde Malzeme": "Karbon Çelik / SS304",
      "Astar Malzeme": "PTFE / Kauçuk",
      Besleme: "220VAC / 24VDC",
      "İletkenlik Gereksinimi": "≥5 μS/cm",
    },
    basePrice: 485,
    image: "/images/products/emd-standart.svg",
    images: ["/images/products/emd-standart.svg"],
    inStock: true,
    badge: "En Çok Satan",
    featured: true,
  },
  {
    id: "emd-002",
    slug: "gidaya-uygun-elektromanyetik-debimetre",
    name: "Gıdaya Uygun Elektromanyetik Debimetre",
    category: "Elektromanyetik Debimetreler",
    categorySlug: "elektromanyetik-debimetreler",
    shortDescription:
      "Gıda ve ilaç endüstrisi için hijyenik tasarımlı, PTFE astarlı debimetre.",
    description: `Gıdaya Uygun Elektromanyetik Debimetre, gıda, içecek ve ilaç endüstrisinin hijyen standartlarına uygun olarak tasarlanmıştır. Tri-clamp bağlantı seçeneği ve cilalı iç yüzey ile bakteri üremesini engelleyen yapıdadır.

SS316L paslanmaz çelik gövde ve PTFE astar kullanılarak üretilir. CIP (Cleaning in Place) temizleme proseslerine uygundur. FDA onaylı malzemeler kullanılmaktadır.`,
    specs: {
      "Ölçüm Çapı": "DN10 - DN150",
      Hassasiyet: "±%0.3",
      "Akışkan Sıcaklığı": "-10°C ~ +150°C",
      "Koruma Sınıfı": "IP67",
      Bağlantı: "Tri-clamp / DIN11851",
      "Gövde Malzeme": "SS316L",
      Sertifika: "FDA, 3-A Sanitary",
      Çıkış: "4-20mA, Pulse, RS485",
    },
    basePrice: 780,
    image: "/images/products/emd-food.svg",
    images: ["/images/products/emd-food.svg"],
    inStock: true,
    featured: true,
  },
  {
    id: "emd-003",
    slug: "minyatur-elektromanyetik-debimetre",
    name: "Minyatür Elektromanyetik Debimetre",
    category: "Elektromanyetik Debimetreler",
    categorySlug: "elektromanyetik-debimetreler",
    shortDescription:
      "Küçük boru çapları için kompakt tasarımlı, hassas debi ölçüm cihazı.",
    description: `Minyatür Elektromanyetik Debimetre, DN3'ten DN25'e kadar küçük çaplı boru hatlarında hassas debi ölçümü sağlar. Kompakt yapısı sayesinde dar alanlarda kolayca monte edilebilir.

Laboratuvar uygulamaları, kimyasal dozajlama sistemleri ve küçük ölçekli prosesler için idealdir. Yüksek hassasiyetli elektrotlar ve gelişmiş sinyal işleme teknolojisi ile düşük akış hızlarında bile güvenilir ölçüm sunar.`,
    specs: {
      "Ölçüm Çapı": "DN3 - DN25",
      Hassasiyet: "±%0.5",
      "Akışkan Sıcaklığı": "-10°C ~ +80°C",
      "Çalışma Basıncı": "1.6 MPa",
      "Koruma Sınıfı": "IP65",
      Çıkış: "4-20mA, Pulse",
      Besleme: "24VDC",
    },
    basePrice: 395,
    image: "/images/products/emd-mini.svg",
    images: ["/images/products/emd-mini.svg"],
    inStock: true,
  },
  {
    id: "emd-004",
    slug: "tasmali-elektromanyetik-debimetre",
    name: "Taşmalı (Insertion) Elektromanyetik Debimetre",
    category: "Elektromanyetik Debimetreler",
    categorySlug: "elektromanyetik-debimetreler",
    shortDescription:
      "Büyük çaplı borularda ekonomik debi ölçümü için daldırma tipi debimetre.",
    description: `Taşmalı Elektromanyetik Debimetre, DN200 ve üzeri büyük çaplı boru hatlarında ekonomik debi ölçüm çözümü sunar. Boru hattını kesmeden, sadece bir delik açarak montaj yapılabilir.

Mevcut boru hatlarına kolayca entegre edilir, hat durdurma gerektirmez. Su dağıtım şebekeleri, sulama kanalları ve büyük çaplı proses hatları için idealdir.`,
    specs: {
      "Ölçüm Çapı": "DN200 - DN3000",
      Hassasiyet: "±%1.5",
      "Akışkan Sıcaklığı": "-10°C ~ +120°C",
      "Koruma Sınıfı": "IP68",
      Çıkış: "4-20mA, Pulse, RS485",
      "Montaj Tipi": "Hot-tap / Daldırma",
    },
    basePrice: 620,
    image: "/images/products/emd-insertion.svg",
    images: ["/images/products/emd-insertion.svg"],
    inStock: true,
  },
  {
    id: "emd-005",
    slug: "ex-proof-elektromanyetik-debimetre",
    name: "Ex-Proof Elektromanyetik Debimetre",
    category: "Elektromanyetik Debimetreler",
    categorySlug: "elektromanyetik-debimetreler",
    shortDescription:
      "Patlayıcı ortamlar için ATEX sertifikalı elektromanyetik debimetre.",
    description: `Ex-Proof Elektromanyetik Debimetre, patlayıcı atmosfer riskinin bulunduğu ortamlarda güvenli debi ölçümü sağlamak üzere tasarlanmıştır. ATEX ve IECEx sertifikalıdır.

Petrokimya tesisleri, rafineri, boya ve solvent üretim tesisleri gibi yanıcı ve patlayıcı sıvıların bulunduğu ortamlarda güvenle kullanılabilir. Zone 1 ve Zone 2 patlama riski olan alanlarda çalışabilir.`,
    specs: {
      "Ölçüm Çapı": "DN15 - DN300",
      Hassasiyet: "±%0.5",
      "Patlama Koruma": "Ex d IIB T4 Gb",
      Sertifika: "ATEX, IECEx",
      "Koruma Sınıfı": "IP67",
      Çıkış: "4-20mA, HART, RS485",
      "Gövde Malzeme": "SS304 / SS316L",
    },
    basePrice: 1250,
    image: "/images/products/emd-exproof.svg",
    images: ["/images/products/emd-exproof.svg"],
    inStock: true,
    badge: "Sertifikalı",
  },

  // ===== MANYETİK BYPASS SEVİYE GÖSTERGELERİ =====
  {
    id: "mbp-001",
    slug: "standart-manyetik-bypass-seviye-gostergesi",
    name: "VSG Standart Manyetik Bypass Seviye Göstergesi",
    category: "Manyetik Bypass Seviye Göstergeleri",
    categorySlug: "manyetik-bypass-seviye-gostergeleri",
    shortDescription:
      "Endüstriyel tanklar için standart manyetik flap tipi seviye göstergesi.",
    description: `VSG Standart Manyetik Bypass Seviye Göstergesi, birleşik kaplar prensibine dayalı olarak çalışan mekanik seviye ölçüm cihazıdır. Tank yan yüzeyine monte edilen bypass tüpü içindeki mıknatıslı şamandıra, sıvı seviyesiyle birlikte hareket eder.

Şamandıranın hareketi, tüpün dış yüzeyindeki manyetik flapları etkiler: sıvı seviyesi yükselirken beyaz flaplar kırmızıya döner, seviye düşerken kırmızı flaplar tekrar beyaza döner. Bu sayede tank seviyesi dışarıdan net bir şekilde görülür.

Elektrik gerektirmez, bakım maliyeti minimumdur. Opsiyonel olarak 4-20mA transmitter veya limit switch eklenebilir.`,
    specs: {
      "Ölçüm Aralığı": "300mm - 6000mm",
      "Çalışma Basıncı": "Maks. 10 MPa",
      "Çalışma Sıcaklığı": "-40°C ~ +350°C",
      "Bağlantı Flanşı": "DN20 / PN16-40",
      "Gövde Malzeme": "SS304 / SS316L / PP",
      "Şamandıra Malzeme": "SS304 / SS316L / Titanium",
      "Flap Renk": "Kırmızı / Beyaz",
      "Proses Bağlantı": "Flanşlı (DIN/ANSI)",
    },
    basePrice: 520,
    image: "/images/products/mbp-standart.svg",
    images: ["/images/products/mbp-standart.svg"],
    inStock: true,
    badge: "Popüler",
    featured: true,
  },
  {
    id: "mbp-002",
    slug: "kazan-tip-manyetik-bypass-seviye-gostergesi",
    name: "Kazan Tip Manyetik Bypass Seviye Göstergesi",
    category: "Manyetik Bypass Seviye Göstergeleri",
    categorySlug: "manyetik-bypass-seviye-gostergeleri",
    shortDescription:
      "Yüksek sıcaklık ve basınç koşullarına dayanıklı kazan tipi seviye göstergesi.",
    description: `Kazan Tip Manyetik Bypass Seviye Göstergesi, buhar kazanları ve yüksek basınçlı tanklar için özel olarak tasarlanmıştır. 350°C sıcaklık ve 25 MPa basınca kadar dayanıklıdır.

Enerji santrallerinde buhar kazanlarında, kimya tesislerinde reaktörlerde ve yüksek basınçlı depolama tanklarında güvenle kullanılır. Ağır hizmet tipi flanşlar ve güçlendirilmiş gövde yapısı ile uzun ömürlüdür.`,
    specs: {
      "Ölçüm Aralığı": "500mm - 5000mm",
      "Çalışma Basıncı": "Maks. 25 MPa",
      "Çalışma Sıcaklığı": "-40°C ~ +350°C",
      "Bağlantı Flanşı": "DN25 / PN40-160",
      "Gövde Malzeme": "SS316L / Duplex SS",
      Sertifika: "CE, PED",
    },
    basePrice: 890,
    image: "/images/products/mbp-kazan.svg",
    images: ["/images/products/mbp-kazan.svg"],
    inStock: true,
    featured: true,
  },
  {
    id: "mbp-003",
    slug: "ex-proof-manyetik-bypass-seviye-gostergesi",
    name: "Ex-Proof Manyetik Bypass Seviye Göstergesi",
    category: "Manyetik Bypass Seviye Göstergeleri",
    categorySlug: "manyetik-bypass-seviye-gostergeleri",
    shortDescription:
      "Patlayıcı ortamlar için ATEX sertifikalı manyetik seviye göstergesi.",
    description: `Ex-Proof Manyetik Bypass Seviye Göstergesi, yanıcı ve patlayıcı sıvıların bulunduğu ortamlarda güvenli seviye ölçümü sağlar. ATEX sertifikalı transmitter ve switch opsiyonları ile donatılabilir.

Petrokimya tesisleri, rafineri depolama tankları, LPG/LNG terminalleri gibi tehlikeli alanlarda kullanıma uygundur. Ex-proof limit switchler ile alarm ve kontrol fonksiyonları sağlar.`,
    specs: {
      "Ölçüm Aralığı": "300mm - 6000mm",
      "Çalışma Basıncı": "Maks. 16 MPa",
      "Çalışma Sıcaklığı": "-196°C ~ +350°C",
      "Patlama Koruma": "Ex d IIB T4",
      Sertifika: "ATEX, IECEx",
      "Gövde Malzeme": "SS316L",
    },
    basePrice: 1150,
    image: "/images/products/mbp-exproof.svg",
    images: ["/images/products/mbp-exproof.svg"],
    inStock: true,
    badge: "ATEX",
  },
  {
    id: "mbp-004",
    slug: "pp-manyetik-bypass-seviye-gostergesi",
    name: "PP (Polipropilen) Manyetik Bypass Seviye Göstergesi",
    category: "Manyetik Bypass Seviye Göstergeleri",
    categorySlug: "manyetik-bypass-seviye-gostergeleri",
    shortDescription:
      "Korozif sıvılar için polipropilen gövdeli manyetik seviye göstergesi.",
    description: `PP Manyetik Bypass Seviye Göstergesi, asit, alkali ve diğer korozif sıvıların seviye ölçümü için polipropilen malzemeden üretilmiştir. Kimya endüstrisinde yaygın olarak kullanılır.

Hafif yapısı, korozyon dayanımı ve ekonomik fiyatı ile asit depolama tankları, nötralizasyon havuzları ve kimyasal proseslerde ideal çözümdür.`,
    specs: {
      "Ölçüm Aralığı": "300mm - 3000mm",
      "Çalışma Basıncı": "Maks. 0.6 MPa",
      "Çalışma Sıcaklığı": "0°C ~ +100°C",
      "Gövde Malzeme": "PP (Polipropilen)",
      "Şamandıra Malzeme": "PP / PVDF",
      "Bağlantı Tipi": "Flanşlı / Dişli",
    },
    basePrice: 380,
    image: "/images/products/mbp-pp.svg",
    images: ["/images/products/mbp-pp.svg"],
    inStock: true,
  },

  // ===== BASINÇ TRANSMİTTERLERİ =====
  {
    id: "bt-001",
    slug: "endustriyel-basinc-transmitteri",
    name: "Endüstriyel Basınç Transmitteri",
    category: "Basınç Transmitterleri",
    categorySlug: "basinc-transmitterleri",
    shortDescription:
      "Genel endüstriyel uygulamalar için yüksek hassasiyetli basınç ölçüm cihazı.",
    description: `Endüstriyel Basınç Transmitteri, proses basıncını 4-20mA standart sinyal olarak iletir. Piezorezistif sensör teknolojisi ile uzun ömürlü ve güvenilir ölçüm sağlar.

Geniş ölçüm aralığı seçenekleri (0-0.1 bar ile 0-600 bar arası) ile her türlü endüstriyel uygulamaya uygundur. Kompakt yapısı ve kolay montajı ile hızla devreye alınır.`,
    specs: {
      "Ölçüm Aralığı": "0~0.1 bar ... 0~600 bar",
      Hassasiyet: "±%0.25",
      Çıkış: "4-20mA / 0-10V",
      Besleme: "12-36VDC",
      "Proses Bağlantı": "G1/2\" / G1/4\" / M20x1.5",
      "Koruma Sınıfı": "IP65",
      "Gövde Malzeme": "SS316L",
    },
    basePrice: 145,
    image: "/images/products/bt-standard.svg",
    images: ["/images/products/bt-standard.svg"],
    inStock: true,
    featured: true,
  },
  {
    id: "bt-002",
    slug: "diferansiyel-basinc-transmitteri",
    name: "Diferansiyel Basınç Transmitteri",
    category: "Basınç Transmitterleri",
    categorySlug: "basinc-transmitterleri",
    shortDescription:
      "İki nokta arası basınç farkı ölçümü için diferansiyel transmitter.",
    description: `Diferansiyel Basınç Transmitteri, iki proses noktası arasındaki basınç farkını ölçer. Filtre ve eşanjör kirliliği tespiti, debi ölçümü ve tank seviye ölçümü gibi uygulamalarda kullanılır.

Yüksek statik basınca karşı dayanıklı, silikon yağı dolu sensör yapısı ile aşırı basınçlara karşı korumalıdır.`,
    specs: {
      "Ölçüm Aralığı": "0~25 mbar ... 0~40 bar",
      Hassasiyet: "±%0.075",
      Çıkış: "4-20mA, HART",
      "Statik Basınç": "Maks. 32 MPa",
      "Proses Bağlantı": "1/2\" NPT Flanşlı",
      "Gövde Malzeme": "SS316L",
    },
    basePrice: 385,
    image: "/images/products/bt-diff.svg",
    images: ["/images/products/bt-diff.svg"],
    inStock: true,
  },
  {
    id: "bt-003",
    slug: "dijital-manometre",
    name: "Dijital Manometre",
    category: "Basınç Transmitterleri",
    categorySlug: "basinc-transmitterleri",
    shortDescription:
      "LCD ekranlı, pil ile çalışan dijital basınç göstergesi.",
    description: `Dijital Manometre, basınç değerini yerinde dijital olarak gösteren kompakt bir cihazdır. Pil ile çalıştığından elektrik bağlantısı gerektirmez. Ekran aydınlatmalı LCD gösterge ile karanlık ortamlarda da okunabilir.

Bar, PSI, kPa, MPa ve mmHg gibi farklı birim seçenekleri sunar. Min/Max değer kayıt fonksiyonu ile proses takibini kolaylaştırır.`,
    specs: {
      "Ölçüm Aralığı": "0~0.1 bar ... 0~1000 bar",
      Hassasiyet: "±%0.5",
      Ekran: "LCD, 5 dijit",
      Besleme: "3V Lityum Pil (CR2032)",
      "Pil Ömrü": "~2 yıl",
      "Proses Bağlantı": "G1/4\" / G1/2\"",
      "Koruma Sınıfı": "IP65",
    },
    basePrice: 95,
    image: "/images/products/bt-digital.svg",
    images: ["/images/products/bt-digital.svg"],
    inStock: true,
  },

  // ===== SICAKLIK SENSÖRLERİ =====
  {
    id: "ss-001",
    slug: "pt100-sicaklik-sensoru",
    name: "PT100 Rezistans Termometre",
    category: "Sıcaklık Sensörleri",
    categorySlug: "sicaklik-sensorleri",
    shortDescription:
      "Platin direnç tipi hassas sıcaklık ölçüm sensörü. -200°C ile +600°C arası.",
    description: `PT100 Rezistans Termometre, platin direncin sıcaklıkla orantılı değişim prensibine dayanan yüksek hassasiyetli sıcaklık sensörüdür. 0°C'de 100Ω direnç değerine sahiptir.

Gıda, ilaç, kimya ve enerji sektörlerinde yaygın olarak kullanılır. 2, 3 ve 4 telli bağlantı seçenekleri mevcuttur. Kılıf malzemesi ve uzunluğu uygulamaya göre özelleştirilebilir.`,
    specs: {
      "Ölçüm Aralığı": "-200°C ~ +600°C",
      Hassasiyet: "Class A / Class B (IEC 60751)",
      "Sensör Tipi": "PT100 / PT1000",
      "Kılıf Malzeme": "SS316L / Inconel",
      "Kılıf Çapı": "Ø3mm ~ Ø12mm",
      Bağlantı: "2/3/4 Telli",
      "Proses Bağlantı": "G1/2\" / Termowell",
    },
    basePrice: 45,
    image: "/images/products/ss-pt100.svg",
    images: ["/images/products/ss-pt100.svg"],
    inStock: true,
  },
  {
    id: "ss-002",
    slug: "k-tipi-termokupl",
    name: "K Tipi Termokupl",
    category: "Sıcaklık Sensörleri",
    categorySlug: "sicaklik-sensorleri",
    shortDescription:
      "Geniş sıcaklık aralığı için genel amaçlı K tipi termokupl sensör.",
    description: `K Tipi Termokupl (Nikel-Krom / Nikel-Alümel), en yaygın kullanılan termokupl tipidir. -200°C ile +1260°C arası geniş ölçüm aralığı sunar.

Fırın, kazan, baca gazı ve genel endüstriyel sıcaklık ölçümlerinde tercih edilir. Farklı kılıf uzunlukları ve bağlantı tipleri ile uygulamaya özel çözümler sunar.`,
    specs: {
      "Ölçüm Aralığı": "-200°C ~ +1260°C",
      Hassasiyet: "Class 1 / Class 2 (IEC 60584)",
      "Termoeleman Tipi": "K (NiCr-NiAl)",
      "Kılıf Malzeme": "SS310S / Inconel 600",
      "Kılıf Çapı": "Ø3mm ~ Ø12mm",
      "Proses Bağlantı": "G1/2\" / Bayonet / Termowell",
    },
    basePrice: 35,
    image: "/images/products/ss-thermocouple.svg",
    images: ["/images/products/ss-thermocouple.svg"],
    inStock: true,
  },
  {
    id: "ss-003",
    slug: "sicaklik-transmitteri",
    name: "Programlanabilir Sıcaklık Transmitteri",
    category: "Sıcaklık Sensörleri",
    categorySlug: "sicaklik-sensorleri",
    shortDescription:
      "2 telli izoleli, PT100/termokupl girişli sıcaklık transmitteri.",
    description: `Programlanabilir Sıcaklık Transmitteri, sensör kafasına monte edilen kompakt bir dönüştürücüdür. PT100 veya termokupl sinyalini 4-20mA standart sinyale çevirir.

USB veya HART protokolü ile kolayca yapılandırılabilir. İzoleli tasarımı sayesinde gürültülü ortamlarda bile güvenilir sinyal iletimi sağlar.`,
    specs: {
      Giriş: "PT100, PT1000, K/J/T/E/N/S/R Termokupl",
      Çıkış: "4-20mA (2 telli)",
      Hassasiyet: "±%0.1",
      Besleme: "8-36VDC",
      İzolasyon: "1500VDC",
      "Montaj Tipi": "Sensör kafası / DIN Ray",
    },
    basePrice: 65,
    image: "/images/products/ss-transmitter.svg",
    images: ["/images/products/ss-transmitter.svg"],
    inStock: true,
  },

  // ===== SEVİYE SENSÖRLERİ =====
  {
    id: "svs-001",
    slug: "ultrasonik-seviye-sensoru",
    name: "Ultrasonik Seviye Sensörü",
    category: "Seviye Sensörleri",
    categorySlug: "seviye-sensorleri",
    shortDescription:
      "Temassız ultrasonik dalga ile hassas seviye ölçüm sensörü.",
    description: `Ultrasonik Seviye Sensörü, ses dalgaları göndererek sıvı veya katı yüzeyinden yansıyan sinyalin geri dönüş süresini ölçerek seviye belirler. Temassız çalıştığından aşındırıcı ve kirli ortamlarda idealdir.

Su depoları, atık su havuzları, silo ve bunkerlar gibi çeşitli uygulamalarda kullanılır. Dahili sıcaklık kompanzasyonu ile mevsimsel değişimlerden etkilenmez.`,
    specs: {
      "Ölçüm Aralığı": "0.3m ~ 15m",
      Hassasiyet: "±%0.25",
      Çıkış: "4-20mA / RS485",
      Frekans: "40kHz",
      "Kör Bölge": "0.3m",
      "Koruma Sınıfı": "IP67",
      "Gövde Malzeme": "PVDF / PP",
      Besleme: "24VDC",
    },
    basePrice: 210,
    image: "/images/products/svs-ultrasonic.svg",
    images: ["/images/products/svs-ultrasonic.svg"],
    inStock: true,
    featured: true,
  },
  {
    id: "svs-002",
    slug: "kapasitif-seviye-salteri",
    name: "Kapasitif Seviye Şalteri",
    category: "Seviye Sensörleri",
    categorySlug: "seviye-sensorleri",
    shortDescription:
      "Sıvı ve katı malzemelerde nokta seviye algılama için kapasitif switch.",
    description: `Kapasitif Seviye Şalteri, ortamın dielektrik sabitindeki değişimi algılayarak seviye belirleme yapar. Sıvılar, tozlar, granüller ve yapışkan malzemelerde çalışabilir.

Hareketli parça içermez, bakım gerektirmez. Alarm, pompa kontrolü ve dozajlama sistemlerinde güvenilir nokta seviye bilgisi sağlar.`,
    specs: {
      "Algılama Maddesi": "Sıvı, toz, granül",
      "Çalışma Sıcaklığı": "-40°C ~ +200°C",
      "Çalışma Basıncı": "Maks. 4 MPa",
      Çıkış: "PNP/NPN veya Röle",
      "Proses Bağlantı": "G3/4\" / G1\" / Flanşlı",
      "Koruma Sınıfı": "IP67",
      Besleme: "10-36VDC / 220VAC",
    },
    basePrice: 85,
    image: "/images/products/svs-capacitive.svg",
    images: ["/images/products/svs-capacitive.svg"],
    inStock: true,
  },
  {
    id: "svs-003",
    slug: "samandirali-seviye-sensoru",
    name: "Şamandıralı Seviye Sensörü",
    category: "Seviye Sensörleri",
    categorySlug: "seviye-sensorleri",
    shortDescription:
      "Mekanik şamandıra prensibiyle çalışan ekonomik seviye switch.",
    description: `Şamandıralı Seviye Sensörü, sıvı seviyesiyle hareket eden şamandıranın manyetik anahtarı (reed switch) tetiklemesiyle çalışır. Basit, ekonomik ve güvenilir bir seviye algılama çözümüdür.

Su depoları, yağ tankları, pompa kontrolü ve alarm sistemlerinde yaygın olarak kullanılır. Farklı montaj pozisyonları (yandan, üstten, tabandan) mevcuttur.`,
    specs: {
      "Anahtarlama Kapasitesi": "Maks. 1A / 200VDC",
      "Çalışma Sıcaklığı": "-20°C ~ +120°C",
      "Çalışma Basıncı": "Maks. 1 MPa",
      Çıkış: "NO / NC Reed Switch",
      "Gövde Malzeme": "SS304 / PP",
      "Kablo Uzunluğu": "1m ~ 20m",
      "Koruma Sınıfı": "IP68",
    },
    basePrice: 28,
    image: "/images/products/svs-float.svg",
    images: ["/images/products/svs-float.svg"],
    inStock: true,
  },

  // ===== PROSES KONTROL CİHAZLARI =====
  {
    id: "pk-001",
    slug: "pid-sicaklik-kontrolor",
    name: "PID Sıcaklık Kontrolör",
    category: "Proses Kontrol Cihazları",
    categorySlug: "proses-kontrol-cihazlari",
    shortDescription:
      "Auto-tune PID kontrol, çoklu giriş tipi, alarm çıkışlı sıcaklık kontrolör.",
    description: `PID Sıcaklık Kontrolör, endüstriyel sıcaklık kontrolü için tasarlanmış gelişmiş bir kontrol cihazıdır. Auto-tune fonksiyonu ile PID parametrelerini otomatik olarak ayarlar.

Fırın, enjeksiyon makinesi, ekstruder, kurutma fırını gibi uygulamalarda hassas sıcaklık kontrolü sağlar. Çoklu alarm fonksiyonu ve iletişim desteği mevcuttur.`,
    specs: {
      Giriş: "TC (K,J,S,R,E,T,N), RTD (PT100), mV, mA",
      Çıkış: "Röle / SSR / 4-20mA",
      "Kontrol Modu": "PID, ON/OFF, Manuel",
      Hassasiyet: "±%0.3",
      Besleme: "100-240VAC",
      Ekran: "Çift satır LED gösterge",
      "Panel Kesiti": "48x48mm / 48x96mm / 96x96mm",
      Haberleşme: "RS485 Modbus RTU (opsiyonel)",
    },
    basePrice: 75,
    image: "/images/products/pk-pid.svg",
    images: ["/images/products/pk-pid.svg"],
    inStock: true,
  },
  {
    id: "pk-002",
    slug: "sinyal-donusturucu",
    name: "Üniversal Sinyal Dönüştürücü",
    category: "Proses Kontrol Cihazları",
    categorySlug: "proses-kontrol-cihazlari",
    shortDescription:
      "mA, mV, TC, RTD sinyallerini dönüştüren izoleli sinyal çevirici.",
    description: `Üniversal Sinyal Dönüştürücü, farklı endüstriyel sinyalleri birbirine dönüştüren izoleli bir cihazdır. 4-20mA, 0-10V, termokupl ve RTD sinyallerini istenen çıkış formatına çevirir.

DIN ray montajlı kompakt tasarımı ile panolarda az yer kaplar. 3-port izolasyon ile gürültü ve toprak döngülerinden korunma sağlar.`,
    specs: {
      Giriş: "4-20mA, 0-10V, TC, RTD, mV",
      Çıkış: "4-20mA, 0-10V, 0-5V",
      İzolasyon: "3-port, 3000VDC",
      Hassasiyet: "±%0.1",
      "Tepki Süresi": "<100ms",
      Montaj: "DIN ray (35mm)",
      Besleme: "24VDC / 220VAC",
    },
    basePrice: 55,
    image: "/images/products/pk-converter.svg",
    images: ["/images/products/pk-converter.svg"],
    inStock: true,
  },
  {
    id: "pk-003",
    slug: "kablosuz-sicaklik-datalogger",
    name: "Kablosuz Sıcaklık ve Nem Datalogger",
    category: "Proses Kontrol Cihazları",
    categorySlug: "proses-kontrol-cihazlari",
    shortDescription:
      "WiFi bağlantılı, bulut tabanlı sıcaklık ve nem kayıt cihazı.",
    description: `Kablosuz Sıcaklık ve Nem Datalogger, ortam koşullarını sürekli izleyip bulut platformuna kaydeden IoT cihazıdır. WiFi üzerinden verileri gerçek zamanlı olarak aktarır.

Soğuk zincir takibi, depo izleme, laboratuvar ve temiz oda uygulamalarında kullanılır. Mobil uygulama ve web panel ile her yerden izleme imkanı sunar. Alarm eşik değerleri aşıldığında SMS ve e-posta bildirimi gönderir.`,
    specs: {
      "Sıcaklık Aralığı": "-40°C ~ +85°C",
      "Nem Aralığı": "%0 ~ %100 RH",
      "Sıcaklık Hassasiyeti": "±0.3°C",
      "Nem Hassasiyeti": "±%2 RH",
      Bağlantı: "WiFi 802.11 b/g/n",
      "Kayıt Kapasitesi": "32.000 veri noktası",
      Besleme: "USB şarjlı Li-ion pil",
      "Pil Ömrü": "~6 ay",
      Ekran: "LCD",
    },
    basePrice: 120,
    image: "/images/products/pk-datalogger.svg",
    images: ["/images/products/pk-datalogger.svg"],
    inStock: true,
  },

  // ===== AKTÜATÖRLER VE VANALAR =====
  {
    id: "av-001",
    slug: "pnomatik-aktuator",
    name: "Pnömatik Aktüatör",
    category: "Aktüatörler ve Vanalar",
    categorySlug: "aktuatorler-ve-vanalar",
    shortDescription:
      "Çift etkili ve yaylı geri dönüşlü pnömatik vana aktüatörü.",
    description: `Pnömatik Aktüatör, basınçlı hava ile çalışarak vanaları açıp kapatan mekanik tahrik elemanıdır. Çift etkili (Double Acting) ve yaylı geri dönüşlü (Spring Return) modelleri mevcuttur.

Kompakt alüminyum gövde, yüksek tork çıkışı ve ISO 5211 bağlantı standardı ile tüm endüstriyel vanalara uyumludur. Solenoid valf, limit switch box ve pozisyoner gibi aksesuarlarla donatılabilir.`,
    specs: {
      Tork: "12 Nm ~ 9000 Nm",
      "Hava Basıncı": "2-8 bar",
      "Çalışma Sıcaklığı": "-20°C ~ +80°C",
      Bağlantı: "ISO 5211",
      "Gövde Malzeme": "Alüminyum Alaşım",
      Çıkış: "Limit switch (opsiyonel)",
      "Dönüş Açısı": "0-90° (çeyrek tur)",
    },
    basePrice: 135,
    image: "/images/products/av-pneumatic.svg",
    images: ["/images/products/av-pneumatic.svg"],
    inStock: true,
  },
  {
    id: "av-002",
    slug: "kuresel-vana-3-parcali",
    name: "3 Parçalı Paslanmaz Küresel Vana",
    category: "Aktüatörler ve Vanalar",
    categorySlug: "aktuatorler-ve-vanalar",
    shortDescription:
      "Tam geçişli, 3 parçalı SS316 küresel vana, aktüatör montajına uygun.",
    description: `3 Parçalı Paslanmaz Küresel Vana, hat üzerinde sökülüp takılabilen, iç elemanları yerinde değiştirilebilen pratik bir vana tasarımıdır. Tam geçişli (full bore) yapısı ile minimum basınç kaybı sağlar.

SS316 gövde ve PTFE sızdırmazlık elemanları ile geniş bir kimyasal uyumluluk sunar. ISO 5211 üst flanş ile aktüatör montajına hazırdır. Gıda, kimya ve su arıtma proseslerinde yaygın olarak kullanılır.`,
    specs: {
      "Boru Çapı": "DN15 ~ DN100 (1/2\" ~ 4\")",
      "Çalışma Basıncı": "PN63 (1000 PSI WOG)",
      "Çalışma Sıcaklığı": "-20°C ~ +200°C",
      "Gövde Malzeme": "SS304 / SS316",
      "Sızdırmazlık": "PTFE / RPTFE",
      Bağlantı: "Dişli (BSP/NPT) / Butt-weld / Tri-clamp",
      Standart: "ISO 5211 üst flanş",
    },
    basePrice: 68,
    image: "/images/products/av-ballvalve.svg",
    images: ["/images/products/av-ballvalve.svg"],
    inStock: true,
  },
  {
    id: "av-003",
    slug: "elektrikli-aktuator",
    name: "Elektrikli Vana Aktüatörü",
    category: "Aktüatörler ve Vanalar",
    categorySlug: "aktuatorler-ve-vanalar",
    shortDescription:
      "On/Off ve oransal kontrol için elektrik motorlu vana aktüatörü.",
    description: `Elektrikli Vana Aktüatörü, elektrik motoru ile vanaları kontrol eden otomatik tahrik sistemidir. On/Off ve oransal (modulating) kontrol modları mevcuttur.

Hava hattı bulunmayan yerlerde pnömatik aktüatörlere alternatif olarak kullanılır. 4-20mA veya 0-10V sinyal ile oransal pozisyon kontrolü sağlar. Manual override fonksiyonu ile elektrik kesintisinde elle müdahale imkanı sunar.`,
    specs: {
      Tork: "40 Nm ~ 2500 Nm",
      Besleme: "24VDC / 220VAC",
      "Kontrol Sinyali": "4-20mA / 0-10V (oransal)",
      "Çalışma Sıcaklığı": "-20°C ~ +70°C",
      "Koruma Sınıfı": "IP67",
      "Dönüş Süresi": "15-60 saniye",
      Bağlantı: "ISO 5211",
    },
    basePrice: 245,
    image: "/images/products/av-electric.svg",
    images: ["/images/products/av-electric.svg"],
    inStock: true,
  },
];
