// Brend və əlaqə məlumatları — bütün səhifələr buradan oxuyur.
window.FRERES = window.FRERES || {};

FRERES.config = {
  brandName: "FRERES",
  whatsapp: "994551006787",          // wa.me formatı: ölkə kodu + nömrə, boşluqsuz
  instagram: "freres.az",
  branches: [
    { name: "20 Yanvar", address: "Moskva prospekti" },
    { name: "28 May", address: "Puşkin küçəsi 13a" },
    { name: "Əhmədli", address: "Bakı kinoteatrı yaxınlığı" }
  ],
  workingHours: "Hər gün 10:00 – 21:00",
  // Ana səhifədəki "Endirim həftəsi" geri sayımının bitmə vaxtı (Bakı, UTC+4)
  promoEndsAt: "2026-10-01T23:59:59+04:00"
};

// Köməkçi dəyərlər (config-dən törənir, əl ilə dəyişməyə ehtiyac yoxdur)
(function (c) {
  var n = c.whatsapp;                 // 994551006787
  c.phoneTel = "+" + n;               // tel: linki üçün
  c.phoneDisplay = "+" + n.slice(0, 3) + " " + n.slice(3, 5) + " " + n.slice(5, 8) + " " + n.slice(8, 10) + " " + n.slice(10);
  c.whatsappUrl = "https://wa.me/" + n;
  c.instagramUrl = "https://instagram.com/" + c.instagram;
})(FRERES.config);
