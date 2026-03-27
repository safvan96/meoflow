import { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { notFound } from "next/navigation";
import CategoryPageContent from "./CategoryPageContent";

// Generate static params for all category slugs
export function generateStaticParams() {
  return categories.map((cat) => ({
    category: cat.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    return {
      title: "Kategori Bulunamadı",
    };
  }

  return {
    title: `${cat.name} | Meoflow`,
    description: cat.description,
    keywords: [
      cat.name,
      "endüstriyel ölçüm",
      "kontrol ekipmanları",
      "meoflow",
      ...cat.name.split(" "),
    ],
    openGraph: {
      title: `${cat.name} - Meoflow`,
      description: cat.description,
      type: "website",
      locale: "tr_TR",
      siteName: "Meoflow",
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    notFound();
  }

  const categoryProducts = products.filter(
    (p) => p.categorySlug === category
  );

  // JSON-LD structured data for the category
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: cat.name,
    description: cat.description,
    url: `https://meoflow.com/urunler/kategori/${cat.slug}`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Product",
          name: p.name,
          description: p.shortDescription,
          url: `https://meoflow.com/urunler/${p.slug}`,
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: p.basePrice,
            availability: p.inStock
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          },
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryPageContent
        category={cat}
        products={categoryProducts}
        allCategories={categories}
      />
    </>
  );
}
