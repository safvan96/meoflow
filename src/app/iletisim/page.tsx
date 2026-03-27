import { Metadata } from "next";
import ContactFormClient from "./ContactFormClient";

export const metadata: Metadata = {
  title: "Iletisim | Meoflow",
  description:
    "Meoflow ile iletisime gecin. Endustriyel olcum ve kontrol ekipmanlari hakkinda teknik destek, fiyat teklifi ve siparis icin bize ulasin.",
  openGraph: {
    title: "Iletisim | Meoflow Endustriyel Olcum",
    description:
      "Teknik destek, fiyat teklifi ve siparis icin bizimle iletisime gecin.",
  },
};

export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="hero-gradient text-white py-14 md:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Bizimle Iletisime Gecin
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto">
            Teknik destek, fiyat teklifi veya genel sorulariniz icin
            asagidaki formu doldurabilir veya dogrudan bize ulasabilirsiniz.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactFormClient />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Iletisim Bilgileri
              </h3>
              <div className="space-y-4">
                <ContactInfoItem
                  iconPath="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  label="Adres"
                  value="Istanbul, Turkiye"
                />
                <ContactInfoItem
                  iconPath="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  label="Telefon"
                  value="+90 (212) 555 00 00"
                />
                <ContactInfoItem
                  iconPath="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  label="E-posta"
                  value="info@meoflow.com"
                />
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-5">
                Calisma Saatleri
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pazartesi - Cuma</span>
                  <span className="font-medium text-gray-900">
                    09:00 - 18:00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Cumartesi</span>
                  <span className="font-medium text-gray-900">
                    09:00 - 14:00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Pazar</span>
                  <span className="font-medium text-red-500">Kapali</span>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl border border-primary-200 h-48 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-10 h-10 text-primary-400 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                  />
                </svg>
                <span className="text-sm text-primary-600 font-medium">
                  Harita
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInfoItem({
  iconPath,
  label,
  value,
}: {
  iconPath: string;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <div>
        <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
          {label}
        </div>
        <div className="text-sm text-gray-900 font-medium mt-0.5">{value}</div>
      </div>
    </div>
  );
}
