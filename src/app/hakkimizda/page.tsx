import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkimizda | Meoflow Endustriyel Olcum",
  description:
    "Meoflow, endustriyel olcum ve kontrol ekipmanlari alaninda uzman bir firmader. Debimetre, seviye gostergesi, basinc transmitteri ve sicaklik sensorleri konularinda guvenilir cozum ortaginiz.",
  openGraph: {
    title: "Hakkimizda | Meoflow Endustriyel Olcum",
    description:
      "Endustriyel olcum ve kontrol ekipmanlarinda guvenilir cozum ortaginiz.",
  },
};

const stats = [
  { value: "15+", label: "Yil Deneyim" },
  { value: "3.000+", label: "Tamamlanan Proje" },
  { value: "500+", label: "Mutlu Musteri" },
  { value: "25+", label: "Urun Cesidi" },
];

const values = [
  {
    title: "Kalite",
    description:
      "Uluslararasi standartlara uygun, sertifikalı urunler sunuyoruz. Her urun, fabrikada kalibrasyon testi yapilarak sevk edilir.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    title: "Hizli Teslimat",
    description:
      "Istanbul merkezli depomuzdan Turkiye geneline hizli kargo ile teslim ediyoruz. Stokta bulunan urunler ayni gun kargoya verilir.",
    icon: (
      <svg
        className="w-7 h-7"
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
    ),
  },
  {
    title: "Teknik Destek",
    description:
      "Uzman muhendislik ekibimiz, urun seciminden montaj ve devreye almaya kadar her asamada teknik destek saglar.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
    ),
  },
  {
    title: "Rekabetci Fiyat",
    description:
      "Dogrudan uretici partnerlerimiz sayesinde, en uygun fiyatlarla yuksek kaliteli urunleri sizlere ulastiriyoruz.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
      </svg>
    ),
  },
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-gradient text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
              Endustriyel Olcumde Guvenilir Cozum Ortaginiz
            </h1>
            <p className="text-lg md:text-xl text-primary-100 leading-relaxed">
              Meoflow olarak, endustriyel olcum ve kontrol ekipmanlari alaninda
              yillardir edindigimiz tecrube ile Turkiye genelinde hizmet
              vermekteyiz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-10 relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-8 text-center">
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Hikayemiz
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6">
              Endustrinin Nabzini Tutuyoruz
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Meoflow, endustriyel olcum ve kontrol ekipmanlari alaninda
                faaliyet gosteren, uzmanlasmis bir firmader. Kurulusumuzdan bu
                yana, su aritma tesislerinden petrokimya tesislerine, gida
                endustrisinden enerji santrallerine kadar pek cok farkli
                sektorde guvenilir cozumler sunmaktayiz.
              </p>
              <p>
                Elektromanyetik debimetreler, manyetik bypass seviye
                gostergeleri, basinc transmitterleri, sicaklik sensorleri ve
                proses kontrol cihazlari gibi genis bir urun yelpazesiyle
                musterilerimize tek noktadan tedarik avantaji sagliyoruz.
              </p>
              <p>
                Dogrudan uretici firmalarla kurudugumuz guclü is birlikleri
                sayesinde, uluslararasi kalite standartlarina sahip urunleri
                rekabetci fiyatlarla Turkiye pazarina sunuyoruz.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 rounded-2xl p-8 md:p-10">
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-primary-100">
                <h3 className="text-lg font-bold text-primary-900 mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Turkiye'nin endustriyel olcum ve kontrol ekipmanlari
                  alaninda en guvenilir tedarikci firmasi olmak, musterilerimize
                  en son teknolojiyi en uygun fiyatlarla sunmak.
                </p>
              </div>
              <div className="bg-white/80 rounded-xl p-6 shadow-sm border border-primary-100 mt-4">
                <h3 className="text-lg font-bold text-primary-900 mb-4">
                  Misyonumuz
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Endustriyel tesislerin verimli ve guvenli calismasi icin
                  ihtiyac duyduklari olcum ve kontrol ekipmanlarini, yuksek
                  kalite standartlarinda, hizli teslimat ve profesyonel teknik
                  destek ile saglamak.
                </p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200/40 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-200/40 rounded-full blur-2xl" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
              Avantajlarimiz
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
              Neden Meoflow?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-5 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serving Industries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider">
            Hizmet Alanlarimiz
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Hizmet Verdigimiz Sektorler
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Su Aritma", icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
            { name: "Petrokimya", icon: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" },
            { name: "Gida", icon: "M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Z" },
            { name: "Enerji", icon: "m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" },
            { name: "Kimya", icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" },
            { name: "HVAC", icon: "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" },
          ].map((sector) => (
            <div
              key={sector.name}
              className="flex flex-col items-center gap-3 p-5 bg-white rounded-xl border border-gray-100 hover:border-primary-200 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={sector.icon}
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 text-center">
                {sector.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-18 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Projeniz Icin Dogru Ekipmani Birlikte Belirleyelim
          </h2>
          <p className="text-primary-200 mb-8 max-w-lg mx-auto">
            Teknik ekibimiz, uygulamaniza en uygun olcum ve kontrol cozumunu
            belirlemenizde size yardimci olacaktir.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              Iletisime Gecin
            </Link>
            <Link
              href="/urunler"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors border border-primary-600"
            >
              Urunleri Inceleyin
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
