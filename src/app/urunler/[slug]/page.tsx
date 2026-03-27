import { Metadata } from "next";
import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailContent from "./ProductDetailContent";

// Generate static params for all product slugs
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: `${product.name} | Meoflow`,
    description: product.shortDescription,
    keywords: [
      product.name,
      product.category,
      "endüstriyel ölçüm",
      "meoflow",
      ...Object.values(product.specs).slice(0, 5),
    ],
    openGraph: {
      title: `${product.name} - Meoflow`,
      description: product.shortDescription,
      type: "website",
      locale: "tr_TR",
      siteName: "Meoflow",
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  );

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDescription,
    image: `https://meoflow.com${product.image}`,
    brand: {
      "@type": "Brand",
      name: "Meoflow",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: product.basePrice,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Meoflow",
      },
    },
    category: product.category,
    additionalProperty: Object.entries(product.specs).map(([key, value]) => ({
      "@type": "PropertyValue",
      name: key,
      value: value,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailContent
        product={product}
        relatedProducts={relatedProducts}
      />
    </>
  );
}
