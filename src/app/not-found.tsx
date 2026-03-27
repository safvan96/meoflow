import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-primary-200">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-gray-800">
          Sayfa Bulunamadı
        </h2>
        <p className="mt-2 text-gray-500 max-w-md mx-auto">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200"
          >
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/urunler"
            className="px-6 py-3 border border-primary-200 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
          >
            Ürünleri İncele
          </Link>
        </div>
      </div>
    </div>
  );
}
