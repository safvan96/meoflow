import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="url(#footerLogoGrad)"/>
                <path d="M6 24C6 14 14 8 20 8" stroke="#60a5fa" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M20 8C26 8 28 14 28 24" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="17" y1="24" x2="11" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="17" cy="24" r="2" fill="#60a5fa"/>
                <defs><linearGradient id="footerLogoGrad" x1="0" y1="0" x2="32" y2="32"><stop stopColor="#1e3a8a"/><stop offset="1" stopColor="#1d4ed8"/></linearGradient></defs>
              </svg>
              <div>
                <span className="text-lg font-bold text-white">meoflow</span>
                <p className="text-[9px] text-gray-500 tracking-[0.15em] uppercase">industrial measurement</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Endüstriyel ölçüm ve kontrol ekipmanlarında güvenilir çözüm ortağınız.
              Debimetre, seviye sensörü, basınç transmitteri ve proses kontrol cihazları.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ürünler</h3>
            <ul className="space-y-2.5">
              <FooterLink href="/urunler/kategori/elektromanyetik-debimetreler">Elektromanyetik Debimetreler</FooterLink>
              <FooterLink href="/urunler/kategori/manyetik-bypass-seviye-gostergeleri">Manyetik Bypass Göstergeler</FooterLink>
              <FooterLink href="/urunler/kategori/basinc-transmitterleri">Basınç Transmitterleri</FooterLink>
              <FooterLink href="/urunler/kategori/sicaklik-sensorleri">Sıcaklık Sensörleri</FooterLink>
              <FooterLink href="/urunler/kategori/seviye-sensorleri">Seviye Sensörleri</FooterLink>
              <FooterLink href="/urunler/kategori/proses-kontrol-cihazlari">Proses Kontrol</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Kurumsal</h3>
            <ul className="space-y-2.5">
              <FooterLink href="/hakkimizda">Hakkımızda</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/iletisim">İletişim</FooterLink>
              <FooterLink href="/kargo-takip">Kargo Takip</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">İletişim</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Istanbul, Türkiye
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                info@meoflow.com
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                +90 (212) 555 00 00
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Meoflow. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Fiyatlar KDV haricdir</span>
            <span>|</span>
            <span>Döviz kuru günlük güncellenir</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-sm text-gray-400 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
}
