import { NextResponse } from "next/server";

const TCMB_URL = "https://www.tcmb.gov.tr/kurlar/today.xml";

function calculateFallbackRate(): number {
  const startDate = new Date("2026-01-01").getTime();
  const now = Date.now();
  const daysSinceStart = Math.floor(
    (now - startDate) / (1000 * 60 * 60 * 24)
  );
  return parseFloat(
    (38.5 * Math.pow(1 + 0.015 / 30, daysSinceStart)).toFixed(2)
  );
}

export async function GET() {
  try {
    const response = await fetch(TCMB_URL, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/xml" },
    });

    if (!response.ok) {
      throw new Error(`TCMB responded with ${response.status}`);
    }

    const xmlText = await response.text();

    // Parse USD selling rate from TCMB XML
    const usdMatch = xmlText.match(
      /<Currency[^>]*Kod="USD"[^>]*>[\s\S]*?<ForexSelling>([\d.,]+)<\/ForexSelling>/
    );

    if (!usdMatch?.[1]) {
      throw new Error("Could not parse USD rate from TCMB XML");
    }

    // TCMB uses dot as decimal separator in XML
    const rateString = usdMatch[1].replace(",", ".");
    const rate = parseFloat(rateString);

    if (isNaN(rate) || rate <= 0) {
      throw new Error("Invalid rate value");
    }

    return NextResponse.json({
      rate: parseFloat(rate.toFixed(4)),
      source: "TCMB",
      date: new Date().toISOString().split("T")[0],
    });
  } catch {
    const fallbackRate = calculateFallbackRate();
    return NextResponse.json({
      rate: fallbackRate,
      source: "tahmini",
      date: new Date().toISOString().split("T")[0],
    });
  }
}
