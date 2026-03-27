import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "elektromanyetik-debimetre-secim-rehberi",
    title:
      "Elektromanyetik Debimetre Seçim Rehberi: Doğru Ürünü Nasıl Belirlersiniz?",
    excerpt:
      "Elektromanyetik debimetre alırken dikkat etmeniz gereken teknik kriterler, çap hesaplaması, astar malzeme seçimi ve uygulama bazlı öneriler.",
    content: `## Elektromanyetik Debimetre Nedir?

Elektromanyetik debimetre, Faraday'ın elektromanyetik indüksiyon yasasına dayalı olarak çalışan, iletken sıvıların akış hızını ve debisini ölçen endüstriyel bir cihazdır. İçerisinde hareketli parça bulunmadığından basınç kaybı minimumdur ve bakım maliyetleri oldukça düşüktür.

## Doğru Çapı Nasıl Seçersiniz?

Debimetre çap seçimi, uygulamanızdaki akış hızına bağlıdır. Optimum ölçüm performansı için akış hızının 1-3 m/s arasında olması önerilir. Boru çapından küçük bir debimetre seçerek akış hızını artırabilir ve ölçüm hassasiyetini yükseltebilirsiniz.

**Pratik formül:** Q = A × v
- Q: Debi (m³/h)
- A: Kesit alanı (m²)
- v: Akış hızı (m/s)

## Astar Malzeme Seçimi

| Astar Malzeme | Sıcaklık | Uygulama |
|---|---|---|
| PTFE | -40°C ~ +180°C | Asit, alkali, solvent |
| Kauçuk | -10°C ~ +80°C | Su, atık su |
| PFA | -40°C ~ +200°C | Yüksek saflıkta kimyasallar |
| Seramik | 0°C ~ +180°C | Aşındırıcı çamurlar |

## Elektrot Malzeme Seçimi

- **SS316L:** Genel amaçlı, su ve zayıf asitler
- **Hastelloy C:** Güçlü asitler ve oksitleyici ortamlar
- **Titanium:** Deniz suyu, klor çözeltileri
- **Tantal:** Hidroklorik asit, sıcak fosforik asit

## Montaj Dikkat Noktaları

1. Debimetrenin önünde en az 5D, arkasında 3D düz boru mesafesi bırakın (D = boru çapı)
2. Debimetreyi her zaman dolu boru garantisi olan noktaya monte edin
3. Topraklama halkalarını mutlaka kullanın
4. Sensörü pompanın emme tarafına değil, basma tarafına monte edin

## Hangi Model Size Uygun?

- **Standart model:** Su, atık su, genel endüstriyel uygulamalar
- **Gıda modeli:** Süt, meyve suyu, ilaç prosesleri
- **Minyatür model:** Dozajlama, laboratuvar
- **Taşmalı model:** DN200 üzeri büyük borular
- **Ex-proof model:** Petrokimya, yanıcı sıvılar

Doğru debimetre seçimi için uzman ekibimizle iletişime geçin.`,
    image: "/images/blog/flowmeter-guide.svg",
    date: "2026-03-15",
    author: "Meoflow Teknik Ekibi",
    tags: [
      "debimetre",
      "elektromanyetik",
      "akış ölçüm",
      "endüstriyel sensör",
    ],
    readTime: 8,
  },
  {
    slug: "manyetik-bypass-seviye-gostergesi-calisma-prensibi",
    title:
      "Manyetik Bypass Seviye Göstergesi: Çalışma Prensibi ve Avantajları",
    excerpt:
      "Manyetik bypass seviye göstergesinin çalışma prensibi, malzeme seçenekleri, montaj yöntemleri ve endüstriyel uygulamaları hakkında kapsamlı bilgi.",
    content: `## Manyetik Bypass Seviye Göstergesi Nedir?

Manyetik bypass seviye göstergesi, birleşik kaplar prensibine dayalı olarak çalışan mekanik bir seviye ölçüm cihazıdır. Tank yan yüzeyine monte edilen bir bypass tüpü içerisindeki mıknatıslı şamandıra, sıvı seviyesi ile birlikte hareket eder.

## Çalışma Prensibi

1. Bypass tüpü, alt ve üst noktalarından bağlantı flanşları ile tanka bağlanır
2. Tank içindeki sıvı seviyesi bypass tüpüne yansır (birleşik kaplar prensibi)
3. Tüp içindeki şamandıra, sıvı seviyesiyle birlikte yükselir veya alçalır
4. Şamandıranın içindeki güçlü mıknatıs, tüpün dışındaki manyetik flapları çevirir
5. Seviye yükselirken beyaz flaplar kırmızıya döner
6. Seviye düşerken kırmızı flaplar beyaza döner

## Avantajları

- **Elektrik gerektirmez:** Tamamen mekanik çalışma prensibi
- **Yüksek görünürlük:** Kırmızı-beyaz renk kontrastı
- **Geniş sıcaklık/basınç aralığı:** -196°C ~ +350°C, 25 MPa'ya kadar
- **Düşük bakım:** Hareketli parça sadece şamandıra
- **Uzaktan okuma:** 4-20mA transmitter opsiyonu

## Malzeme Seçim Tablosu

| Uygulama | Gövde | Şamandıra |
|---|---|---|
| Su, buhar | SS304 | SS304 |
| Asit, kimyasal | SS316L | SS316L/Titanium |
| Korozif ortam | PP | PP/PVDF |
| Yüksek basınç | Duplex SS | Duplex SS |
| Kriyojenik | SS316L | SS316L |

## Opsiyonel Aksesuarlar

- **4-20mA Transmitter:** Uzaktan seviye izleme
- **Limit Switch:** Alarm ve pompa kontrolü
- **LED Gösterge:** Gece görünürlüğü
- **Isı İzolasyonu:** Donma koruması

Manyetik bypass seviye göstergeleri, güvenilirlik ve düşük bakım avantajları ile endüstride en çok tercih edilen seviye ölçüm yöntemlerinden biridir.`,
    image: "/images/blog/magnetic-level.svg",
    date: "2026-03-10",
    author: "Meoflow Teknik Ekibi",
    tags: [
      "seviye göstergesi",
      "manyetik bypass",
      "tank seviye",
      "endüstriyel ölçüm",
    ],
    readTime: 7,
  },
  {
    slug: "endustriyel-basinc-olcum-yontemleri",
    title:
      "Endüstriyel Basınç Ölçüm Yöntemleri: Transmitter Seçiminde Dikkat Edilmesi Gerekenler",
    excerpt:
      "Basınç ölçüm teknolojileri, transmitter türleri, doğruluk sınıfları ve uygulama bazlı seçim kriterleri hakkında teknik rehber.",
    content: `## Basınç Ölçüm Teknolojileri

Endüstriyel basınç ölçümü, proses kontrolünün temel taşlarından biridir. Doğru basınç bilgisi, güvenli ve verimli üretim için vazgeçilmezdir.

### Piezorezistif Sensörler

En yaygın kullanılan basınç sensörü teknolojisidir. Silikon diyafram üzerindeki piezorezistif elemanlar, basınçla orantılı elektriksel sinyal üretir.

**Avantajları:**
- Yüksek hassasiyet (±%0.25'e kadar)
- Geniş ölçüm aralığı
- Kompakt boyut
- Ekonomik fiyat

### Kapasitif Sensörler

İki plaka arasındaki kapasitans değişimini ölçerek basınç belirler. Diferansiyel basınç ölçümlerinde tercih edilir.

**Avantajları:**
- Çok yüksek hassasiyet (±%0.075'e kadar)
- Uzun vadeli stabilite
- Düşük sıcaklık etkisi

## Basınç Türleri

- **Gauge (Bağıl) Basınç:** Atmosfer basıncına göre ölçüm
- **Absolut (Mutlak) Basınç:** Vakuma göre ölçüm
- **Diferansiyel Basınç:** İki nokta arası fark ölçümü

## Doğru Transmitter Seçimi

1. **Ölçüm aralığını belirleyin:** Normal çalışma basıncı, aralığın %25-%75'i arasında olmalı
2. **Proses sıcaklığını kontrol edin:** Yüksek sıcaklıklarda sıcaklık kompanzasyonlu model seçin
3. **Kimyasal uyumluluğu doğrulayın:** Diyafram malzemesi proses sıvısına uygun olmalı
4. **Çıkış sinyalini belirleyin:** 4-20mA, HART, Foundation Fieldbus

## Montaj Önerileri

- Transmitteri titreşimden uzak bir noktaya monte edin
- Buhar uygulamalarında sifon borusu kullanın
- Korozif ortamlarda diyafram seal kullanın
- Kablo girişlerini su almayacak şekilde sızdırmazlayın

Doğru basınç transmitteri seçimi, proses güvenliği ve ölçüm kalitesi için kritik öneme sahiptir.`,
    image: "/images/blog/pressure-measurement.svg",
    date: "2026-03-05",
    author: "Meoflow Teknik Ekibi",
    tags: [
      "basınç transmitter",
      "basınç ölçüm",
      "endüstriyel otomasyon",
      "proses kontrol",
    ],
    readTime: 6,
  },
  {
    slug: "sicaklik-sensoru-pt100-termokupl-farki",
    title: "PT100 ve Termokupl Arasındaki Farklar: Hangisini Seçmelisiniz?",
    excerpt:
      "PT100 rezistans termometre ve termokupl sensörler arasındaki teknik farklar, avantajlar, dezavantajlar ve uygulama bazlı seçim kriterleri.",
    content: `## Sıcaklık Ölçüm Sensörleri

Endüstriyel sıcaklık ölçümünde en yaygın kullanılan iki sensör tipi PT100 rezistans termometre ve termokupldur. Her ikisinin de kendine özgü avantajları vardır.

## PT100 Rezistans Termometre

PT100, platin telden yapılmış bir direnç sensörüdür. 0°C'de 100Ω direnç değerine sahiptir ve sıcaklıkla doğrusal olarak artar.

**Avantajları:**
- Yüksek hassasiyet (Class A: ±0.15°C @ 0°C)
- Mükemmel doğrusallık
- Uzun vadeli stabilite
- Geniş ölçüm aralığı (-200°C ~ +850°C)

**Dezavantajları:**
- Daha yavaş tepki süresi
- Titreşime hassas
- Daha pahalı

## Termokupl

İki farklı metalin birleşim noktasındaki Seebeck etkisine dayalı çalışır. Sıcaklık farkıyla orantılı bir gerilim üretir.

**Avantajları:**
- Çok geniş sıcaklık aralığı (-270°C ~ +1800°C)
- Hızlı tepki süresi
- Mekanik olarak dayanıklı
- Ekonomik fiyat
- Self-powered (dış besleme gerektirmez)

**Dezavantajları:**
- Daha düşük hassasiyet
- Soğuk birleşim kompanzasyonu gerekir
- Drift (sapma) sorunu

## Karşılaştırma Tablosu

| Özellik | PT100 | Termokupl (K) |
|---|---|---|
| Ölçüm Aralığı | -200 ~ +850°C | -200 ~ +1260°C |
| Hassasiyet | ±0.15°C | ±1.5°C |
| Tepki Süresi | Orta | Hızlı |
| Doğrusallık | Mükemmel | İyi |
| Fiyat | Orta-Yüksek | Düşük |
| Kablo Uzunluğu | Sınırlı | Uzun mesafe |

## Ne Zaman Hangisini Kullanmalı?

**PT100 seçin:**
- Hassas ölçüm gerektiğinde
- Laboratuvar uygulamalarında
- Gıda ve ilaç proseslerinde
- -200°C ~ +600°C arası

**Termokupl seçin:**
- 600°C üzeri sıcaklıklarda
- Hızlı tepki gerektiğinde
- Titreşimli ortamlarda
- Ekonomik çözüm arandığında

Her iki sensör tipi de doğru uygulamada mükemmel performans gösterir. Önemli olan ihtiyacınıza uygun olanı seçmektir.`,
    image: "/images/blog/temperature-sensors.svg",
    date: "2026-02-28",
    author: "Meoflow Teknik Ekibi",
    tags: [
      "PT100",
      "termokupl",
      "sıcaklık sensörü",
      "rezistans termometre",
    ],
    readTime: 7,
  },
  {
    slug: "endustriyel-otomasyon-seviye-olcum-teknolojileri",
    title:
      "Endüstriyel Otomasyon: Modern Seviye Ölçüm Teknolojileri Karşılaştırması",
    excerpt:
      "Ultrasonik, radar, kapasitif, hidrostatik ve manyetik seviye ölçüm teknolojilerinin karşılaştırması ve doğru teknoloji seçim kriterleri.",
    content: `## Seviye Ölçüm Teknolojileri

Tank ve depo seviye ölçümü, endüstriyel otomasyonun en temel uygulamalarından biridir. Farklı ortam koşulları ve uygulama gereksinimleri, farklı teknolojilerin tercih edilmesini gerektirir.

## 1. Ultrasonik Seviye Ölçüm

Ses dalgalarının yüzeyden yansıma süresini ölçerek seviye belirler.

**Uygun:** Su, atık su, kimyasal depolama
**Uygun değil:** Köpüklü, buğulu, yüksek sıcaklık

## 2. Radar Seviye Ölçüm

Mikrodalga sinyallerinin yansıma süresini ölçer. Temassız ve yüksek hassasiyetli.

**Uygun:** Her türlü sıvı ve katı, yüksek sıcaklık/basınç
**Dezavantaj:** Daha yüksek maliyet

## 3. Kapasitif Seviye Ölçüm

Ortamın dielektrik sabitindeki değişimi algılar.

**Uygun:** Tozlar, granüller, yapışkan sıvılar
**Uygun değil:** Düşük dielektrik sabiti

## 4. Hidrostatik Basınç ile Seviye

Sıvı sütununun oluşturduğu basıncı ölçerek seviye hesaplar.

**Uygun:** Açık/kapalı tanklar, kuyular
**Basit ve ekonomik çözüm**

## 5. Manyetik Bypass Gösterge

Şamandıralı mekanik gösterge, elektrik gerektirmez.

**Uygun:** Görsel izleme, yüksek basınç/sıcaklık
**Güvenilir ve bakımsız**

## Teknoloji Seçim Matrisi

| Kriter | Ultrasonik | Radar | Kapasitif | Hidrostatik | Manyetik |
|---|---|---|---|---|---|
| Maks. Sıcaklık | 80°C | 250°C | 200°C | 120°C | 350°C |
| Maks. Basınç | Atmosfer | 40 bar | 40 bar | 40 bar | 250 bar |
| Hassasiyet | ±2mm | ±1mm | ±%1 | ±%0.25 | ±10mm |
| Fiyat | Orta | Yüksek | Düşük | Düşük | Orta |
| Bakım | Az | Az | Orta | Orta | Çok az |

## Uygulama Bazlı Öneriler

- **Su arıtma:** Ultrasonik veya hidrostatik
- **Kimya tankları:** Radar veya manyetik bypass
- **Silo/bunker:** Radar veya kapasitif
- **Kazan:** Manyetik bypass (yüksek sıcaklık/basınç)
- **Soğuk depolama:** Kapasitif veya radar

Seviye ölçüm teknolojisi seçiminde ortam koşulları, hassasiyet gereksinimleri ve bütçe birlikte değerlendirilmelidir.`,
    image: "/images/blog/level-measurement.svg",
    date: "2026-02-20",
    author: "Meoflow Teknik Ekibi",
    tags: [
      "seviye ölçüm",
      "ultrasonik sensör",
      "radar seviye",
      "endüstriyel otomasyon",
    ],
    readTime: 9,
  },
  {
    slug: "su-aritma-tesislerinde-debi-olcum",
    title: "Su Arıtma Tesislerinde Debi Ölçümünün Önemi ve Yöntemleri",
    excerpt:
      "Su ve atık su arıtma tesislerinde kullanılan debi ölçüm yöntemleri, yasal gereklilikler ve doğru cihaz seçim kriterleri.",
    content: `## Su Arıtma ve Debi Ölçüm

Su arıtma tesisleri, insan sağlığı ve çevre koruma açısından kritik öneme sahip tesislerdir. Bu tesislerde debi ölçümü, hem proses kontrolü hem de yasal raporlama gereksinimleri için zorunludur.

## Neden Debi Ölçümü Önemli?

1. **Yasal zorunluluk:** Çevre mevzuatı gereği giriş ve çıkış debilerinin kayıt altına alınması
2. **Proses kontrolü:** Kimyasal dozajlama, çökeltme ve filtrasyon proseslerinin optimizasyonu
3. **Enerji verimliliği:** Pompa sistemlerinin optimize edilmesi
4. **Maliyet kontrolü:** Su kayıp/kaçak tespiti

## Kullanılan Debi Ölçüm Yöntemleri

### Elektromanyetik Debimetre

Su arıtma tesislerinde en yaygın kullanılan debi ölçüm yöntemidir.

**Avantajları:**
- Hareketli parça yok, düşük bakım
- Geniş çap aralığı (DN15 - DN3000)
- Yüksek hassasiyet (±%0.5)
- Atık su, çamur dahil her türlü su

### Ultrasonik Debimetre

Mevcut boru hatlarına müdahale etmeden ölçüm imkanı.

**Avantajları:**
- Boru kesmeden montaj (clamp-on)
- Büyük çaplarda ekonomik
- Bakım gerektirmez

## Montaj Noktaları

- Arıtma tesisi girişinde ham su ölçümü
- Çıkış hattında arıtılmış su ölçümü
- Geri devir hattında ölçüm
- Kimyasal dozajlama noktalarında ölçüm
- Çamur hattında ölçüm

## Dikkat Edilmesi Gerekenler

- Debimetreyi boru hattının en düşük noktasına monte etmeyin (hava birikimi)
- Atık su uygulamalarında kauçuk astarlı model tercih edin
- Topraklama halkalarını mutlaka kullanın
- Düzenli kalibrasyon yaptırın

Doğru debi ölçümü, su arıtma tesislerinin verimli çalışmasının temel şartıdır.`,
    image: "/images/blog/water-treatment.svg",
    date: "2026-02-15",
    author: "Meoflow Teknik Ekibi",
    tags: [
      "su arıtma",
      "debi ölçüm",
      "atık su",
      "çevre mühendisliği",
    ],
    readTime: 6,
  },
];
