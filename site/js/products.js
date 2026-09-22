// Məhsul kataloqu — bütün səhifələr bu datadan render olunur.
// Şəkillər və əsas məlumatlar (ad, qiymət, rəng nümunələri) Stitch dizaynından götürülüb.
// "// DOLDURULUB" ilə işarələnmiş sahələr dizaynda yox idi — real data ilə əvəz edin.
//
// Sahələr:
//   id        — URL-də istifadə olunur (product.html?id=...)
//   category  — FRERES.categories açarı
//   price / oldPrice — ₼, oldPrice varsa məhsul "endirimli" sayılır
//   badge     — kartdakı etiket: { text, tone: "primary" | "dark" }
//   colors    — { name, hex, filter } ; filter = kataloq filtrindəki rəng qrupu (Qara, Krem, ...)
//   sizes     — { size, soldOut }
//   material  — kataloq filtrindəki material (Şifon, İpək, Kətan, Pambıq, Trikotaj)
//   added     — "Ən yenilər" sıralaması üçün (böyük = yeni)
//   sold      — "Ən çox satılan" sıralaması üçün
//   newArrival / bestseller — ana səhifə bölmələri (massivdəki sıra ilə)
window.FRERES = window.FRERES || {};

FRERES.categories = {
  "donlar":        { label: "Donlar",          description: "Bakı butikinin zərif kəsimli, gündəlik və ziyafət donları kolleksiyası." },
  "bluzlar":       { label: "Bluzlar",         description: "Gündəlik və xüsusi günlər üçün zərif bluz və köynəklər." }, // DOLDURULUB
  "salvarlar":     { label: "Şalvarlar",       description: "Klassik və müasir kəsimli şalvarlar." }, // DOLDURULUB
  "ust-geyim":     { label: "Üst geyim",       description: "Plaş, pencək, jaket və sviterlər — payız üçün hazır." }, // DOLDURULUB
  "hicab":         { label: "Hicab geyimləri", description: "Zərif və rahat hicab geyimləri." }, // DOLDURULUB
  "boyuk-olculer": { label: "Böyük ölçülər",   description: "Böyük ölçülərdə zərif və rahat modellər." }, // DOLDURULUB
  "aksesuarlar":   { label: "Aksesuarlar",     description: "Obrazı tamamlayan çanta və aksesuarlar." } // DOLDURULUB
};

// Tipik geyim ölçüləri (DOLDURULUB — dizaynda yalnız çiçəkli don üçün ölçü var idi)
function sz(list, soldOut) {
  soldOut = soldOut || [];
  return list.map(function (s) { return { size: s, soldOut: soldOut.indexOf(s) !== -1 }; });
}
var STD = ["XS", "S", "M", "L", "XL", "XXL"];

FRERES.products = [
  // ---------- Ana səhifə: "Yeni gələnlər" ----------
  {
    id: "kemerli-xendek-plas",
    name: "Kəmərli xəndək plaş",
    category: "ust-geyim",
    price: 119, oldPrice: 169,
    badge: { text: "-30%", tone: "primary" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbeRDQNCg3RBVK098UUqAIqG3WcHs19fXp-POXNFHNUccYWZSMVQAg3tzWwqv9A7omPp4zEupdOuUphMCbvB3Di9hkmCBBule6cbr5NqJziAnMDSdxL4twMK_Ry0QUA6CGkvtqCOuHAY4E22YOQc7d5jw7AjzO-xsWQ4fW7k0cf1EmN7-eLlkHyQM-f_fEtsRA7MrjUsI3ME7lpVptzy7X6Nh9a_O5jsAKZFN7PbkRxC_wn-aVEjte",
    colors: [{ name: "Qum bej", hex: "#D7C4B7", filter: "Bej" }, { name: "Qara", hex: "#1B1C1C", filter: "Qara" }], // DOLDURULUB
    sizes: sz(STD, ["XXL"]), // DOLDURULUB
    material: "Pambıq", // DOLDURULUB
    rating: 4.7, reviews: 36, sku: "FR-3120", // DOLDURULUB
    added: 20, sold: 60, newArrival: true
  },
  {
    id: "midi-don-cicekli",
    name: "Midi don, çiçəkli",
    category: "donlar",
    price: 59, oldPrice: 85,
    badge: { text: "-30%", tone: "primary" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ivUUmPdMf4bqYrZ6mKyu8Mpj43HpwhV4xmzemGAPEgDYXYBwx-RLtZs8b2eoiMG4zcwyK3Go9WoQPtNqj3Kle9AV76armO5N1a4r2GjNCR_PDAhr8hTRmamTAeGPp-kbQMoPxHb7Bc4PKld0ZKQzi2bG27659MacRWrkqmYv3ILsMnnlOu9qAOEu60O2tXv1b1k8E_0m8YrVEyrMrWF16sz7IHWb1SusfK_M2mPRCDCCUTJCVUqV",
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmVo96u6m2TNC7NGg_TIfS69ksjoRv66ItkxEpUiVc4AMDnrweioFwXx_fsD3nWFuxscfJAGmMqD1PIdG8rRM8FcgeV27cCX8WEoWfAmg138U6VXY6mMs_gLV7j3OytWx_CuUY0FWhI_oQnI4Lo27d9KTJQdvkdxht8qMfJUdGV24mx6onBUErxWXHYicvTNKoXAmyVkGkxu7OOhqOb7zRyIqFyolcnvPKiuMmCggReRI4kAE3FGag",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBz3eqHdHRy6WmogtB48DSkLeOv5F3VqryHgfqIV9LbzXkhoifVb-3U_OP6rVj902Z6uDwDzGVspi_PxpqKVPlpvjmieuViXhofRaGrUbeglTC6tISB1ZwjviTkD_Mbmc4j7ChT4ucL3Lrk1W_Tc9HFxZhrAcmUjPR-WI17MDGQGOagn4nvg6DGvNvYjAGQ8NhsAEdxucv2SB-w0aa9qPmNNXmw9tzeNV8VUbeXX8qVC_3hMVuQoTEs",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3W69ussOcbiBSCA9PSlnRMb-vt2nsjoa64b5wqEeSWH8PdcD3ix2vKdEHIHrVdCtO5PhXMTgYXfvBrlqVp_pCPR-bcleNeL-6CPqc9wjcd9SaiplqJeJ0squ8FzLtJLnj3Ee9e-2xazlJFb9UWp6FTZ1PIIsV2pKL0o4MZDOx9EOwWZKqByk54dKdSNL0ffYc1bm4Ynfo894gHjlAztnreixfzsNg95umumD05e4QGn37hY_N7sre",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxAAIzdqDDco4ggg-3J2WjpDQ__zBxDfWjK2ccuN8zVoZTxoHq9TPK_p5vdLFYl-ZU_t8wBrVhc8YW4jCZpuD-tP5hWVEDImAm-4VV53yjWtYch-OOceHm3cZ7QnVSiYGBiTcCfowIXl-HXC1XQA7wEhIUzXTDGTnxWfG0mxhMnQuSxLY22mxfDlvxVKGELHWuFDkO_t4UC77VrmuuWx1ROe6TpsPLjMpfk4YpOiqNSVmy3yWplULr"
    ],
    colors: [
      { name: "Tozlu Çəhrayı", hex: "#B5646E", filter: "Dumanlı çəhrayı" },
      { name: "Zərif Mavi", hex: "#8CA4B8", filter: "Göy" },
      { name: "Qaymaqlı Bej", hex: "#E3DAC9", filter: "Bej" }
    ],
    sizes: sz(STD, ["XL"]),
    material: "Şifon",
    rating: 4.8, reviews: 42, sku: "FR-4091",
    fitNote: "S (36)",
    description: "Zərif şifon parça, astarlı, V-yaxalıq və elastik kəmərli bel. Gündəlik gəzintilər və xüsusi ziyafətlər üçün ideal seçimdir.",
    bullets: [
      "Nəfəsalan, dərini tərlətməyən yüngül toxuma",
      "Dizdən aşağı midi uzunluq",
      "Qol uclarında incə büzmə detalları",
      "İçlik astar sayəsində iç göstərmir"
    ],
    care: "100% viskoza/şifon. 30°C həssas yuma, ağardıcıdan istifadə etməyin.",
    added: 19, sold: 150, newArrival: true
  },
  {
    id: "kasmir-sviter",
    name: "Kaşmir toxunma sviter",
    category: "ust-geyim",
    price: 49,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYXlmh6eBPyCo9cknNAyA2zmuxpQvW3WwRESepwgekvYHzXUd4UVBu7kDSug91-9YXqH71aNGbin5nrj7_QVlnTE4vghdPAs9KwrIkMBUKVby_3vRMnak6GnsrzxpF2HZezIAZQaru8nKS455T26itUx2vjfOLZrlPn2urKE-Do01UlC2degNlwZ0uVDkLQ2nHEic2Q8krGZq3LCKOXnM5z-0W0ajh1ILAqzPEVXpY91CembCzcOQn",
    colors: [{ name: "Bej", hex: "#D7C4B7", filter: "Bej" }, { name: "Krem", hex: "#F5F2EB", filter: "Krem" }], // DOLDURULUB
    sizes: sz(["S", "M", "L", "XL"]), // DOLDURULUB
    material: "Trikotaj", // DOLDURULUB
    rating: 4.6, reviews: 21, sku: "FR-3305", // DOLDURULUB
    added: 18, sold: 70, newArrival: true
  },
  {
    id: "klassik-enli-salvar",
    name: "Klassik enli balaq şalvar",
    category: "salvarlar",
    price: 65,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdyGAooCs9vJSDjDmH_gjhoLcr-qto39AbnN7tVoejAa58C-DX2HOxSKgoie79XhUsxVmhxwP5y7JbK2v11Ludhyv-tdwnd8AdElXu0ZpwWAGA8V3-lnKOEzHLyBu5J4bJuJvZW9DlG4EPGea_Fw_wlzbZhMheYtNkT1ljSIPkIVdcTqtSX60pTi6RzjRHMU_hTtXEw9CpffvhKvt-TN19pHTPwjX6bT1dhCX9ffUa0x0-7cVkQrlM",
    colors: [{ name: "Espresso", hex: "#4B3621", filter: "Qara" }, { name: "Bej", hex: "#D7C4B7", filter: "Bej" }], // DOLDURULUB
    sizes: sz(STD, ["XS"]), // DOLDURULUB
    material: "Pambıq", // DOLDURULUB
    rating: 4.7, reviews: 29, sku: "FR-2210", // DOLDURULUB
    added: 17, sold: 55, newArrival: true
  },

  // ---------- Ana səhifə: "Ən çox satılanlar" ----------
  {
    id: "zerif-ziyafet-donu",
    name: "Zərif ziyafət donu",
    category: "donlar",
    price: 89,
    badge: { text: "Top Seçim", tone: "dark" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC56lP_smGifuq1grtO7RKAh4rwPDZShL1c0xiLwjFYyM2Zy-kluHTDncamF9E-0ynZ92BrT3MahRUVCKGSBXCeFRaZEjdx7bIY-jaEm1Wgwu9G11aqpTTTyD6CcvE0dL6uKXDrK2--OKe_nq7qg8OSqAebsG82g5-oMYqlpKE_Nh063ioR1Irj2yCJNkgfQVFU9YVIbEVARzYsChi58rUxMWeIT8mbyiOesVqs1G894XwNGKT13XyP",
    colors: [{ name: "Tünd qırmızı", hex: "#6B1D2F", filter: "Tünd Qırmızı" }, { name: "Qara", hex: "#1B1C1C", filter: "Qara" }], // DOLDURULUB
    sizes: sz(STD), // DOLDURULUB
    material: "İpək", // DOLDURULUB
    rating: 4.9, reviews: 128, sku: "FR-4102",
    added: 8, sold: 400, bestseller: true
  },
  {
    id: "atlas-ipek-koynek",
    name: "Atlas ipək köynək",
    category: "bluzlar",
    price: 45,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAO8pjCLfMlN7gftMEhbGaXP48mc5cOld_0QM_oGudwP05CYLq0jZKQD7RryLK2eDL2xcG7R8zw23d2FBKRIxXV7CtPfz5yfABkft94A1a4x5JtmzoUoZwqsqqR3lZOKyRlybjXHV22ZYjlEymMC6eoooPa0Xg6j-hHW1PKxXXaFJiaKvyxbmgNoX11Ctn8R0Q5U9rGCOtvQ2Xz36fVsRtzEGhBPYiY_0is9rfT3jg2-Wd6k_zgIbNj",
    colors: [{ name: "Şampan", hex: "#F7E7CE", filter: "Krem" }, { name: "Qara", hex: "#1B1C1C", filter: "Qara" }], // DOLDURULUB
    sizes: sz(["XS", "S", "M", "L", "XL"]), // DOLDURULUB
    material: "İpək", // DOLDURULUB
    rating: 4.9, reviews: 94, sku: "FR-1504",
    added: 7, sold: 320, bestseller: true
  },
  {
    id: "yun-pencek",
    name: "Yün pencək",
    category: "ust-geyim",
    price: 95,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4BTH_UeqReku3FZWbFFWZNV8nLE7x7mUWn0QgFehAmRu92RrJ0GCEKS05GwIKTPmJk3Kjowdz4BeXLuQNvncLkH9vXHaOu6DNlZLLlJ9Dae9kbgDJCEkpIJB-luj7mZ_Si6x2epIcQzQO_UmVklqmj-00iryLDjt_n7_nJ0K4n5_PX_TGeZ_Gco19TtUHhrqU3L09xK81UOXmsNZig4kBeqgYxqCs8wKhshg4CaL4EC7I89VkV_mp",
    colors: [{ name: "Yulaf", hex: "#D7C4B7", filter: "Bej" }], // DOLDURULUB
    sizes: sz(["S", "M", "L", "XL"], ["S"]), // DOLDURULUB
    material: "Trikotaj", // DOLDURULUB
    rating: 4.9, reviews: 67, sku: "FR-3207",
    added: 6, sold: 260, bestseller: true
  },
  {
    id: "oversize-jaket",
    name: "Oversize jaket",
    category: "ust-geyim",
    price: 55,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9W18LA5nZ3kHmzkGf4GCGHrk4Q0ykx10CngFjPkUuNbjaypKBun2e3VaXZ5H5-PZWO9jQ0LHrQV4kPanZgtwdWan5JCuAkel-C71uFgRXMbXlEhmNiAS-EKdJ00o2O5EY0AfNj1gK1PBUiheIv8Gz9nVuRxWjgYssSL4BOPkZh_vADZuL_XioVeRUBhhEm9NTLgK1wjljFMKNneMBtkiOK92lGTguB-VROSHRv-IcpWLFhXe3-6Uv",
    colors: [{ name: "Dumanlı çəhrayı", hex: "#D4A5A5", filter: "Dumanlı çəhrayı" }, { name: "Krem", hex: "#F5F2EB", filter: "Krem" }], // DOLDURULUB
    sizes: sz(["S", "M", "L"]), // DOLDURULUB
    material: "Trikotaj", // DOLDURULUB
    rating: 4.9, reviews: 82, sku: "FR-3211",
    added: 5, sold: 290, bestseller: true
  },

  // ---------- Kataloq (Donlar) ----------
  {
    id: "ziyafet-maksi-donu",
    name: "Ziyafət maksi donu",
    category: "donlar",
    price: 110,
    badge: { text: "Yeni", tone: "dark" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwe6jk3V9C5bWpqv7FMNH2l5MMY6TT4taN8vnExwIBUy93-RUbrwstoBLf-0EyzYWj0A5mhPoCsIkSBv8IPLRwXDVb43Rhh06G-toSLji1rUVt1YnZUx8Eog8lGWJwx0iKlio3Fgh4m4MGZk6fz2qdEYsN7v9DjUZFXEFpL6CTQZhi2JvylH7JGOiIDEdi-4mjflP6OU0l9_x6SemA0hUkGdwncef_pAZ1e8vzCp6CupEz737p8FPs",
    colors: [
      { name: "Zümrüd", hex: "#005F41", filter: "Zümrüd" },
      { name: "Tünd qırmızı", hex: "#670D22", filter: "Tünd Qırmızı" },
      { name: "Göy", hex: "#18233C", filter: "Göy" }
    ],
    sizes: sz(STD, ["XXL"]), // DOLDURULUB
    material: "İpək", // DOLDURULUB
    rating: 4.8, reviews: 18, sku: "FR-4110", // DOLDURULUB
    added: 21, sold: 40
  },
  {
    id: "katan-yay-donu",
    name: "Kətan yay donu",
    category: "donlar",
    price: 49, oldPrice: 70,
    badge: { text: "-30%", tone: "primary" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEIRfFtqa1d_YvWKFG7q4J4J_1_b6lC_uUFF2n52cLSRQnu5XpMSFN5-9yNbYk30PXZjXjPxYn5lfkxk2dZ01mTRtYIMc9IdKTO-HgUfwbnYq2hweCbnnxIfgvv3eDGeNB4iAU8TehYQQf6ac-jmVHyGhEvj6YPEIvoGXlwOLfqxEQyL1159ZXxgALBuW_Tz0-xYKWlsvvlnEAKGcqXOV9C-7svHV8C0BtqZkAiBuwndasIfJ7pYfj",
    colors: [
      { name: "Bej", hex: "#E3DAC9", filter: "Bej" },
      { name: "Zeytun", hex: "#556B2F", filter: "Zümrüd" },
      { name: "Ağ", hex: "#FFFFFF", filter: "Krem" }
    ],
    sizes: sz(["XS", "S", "M", "L", "XL"]), // DOLDURULUB
    material: "Kətan", // DOLDURULUB
    rating: 4.6, reviews: 25, sku: "FR-4115", // DOLDURULUB
    added: 12, sold: 120
  },
  {
    id: "atlas-koynek-don",
    name: "Atlas zərif köynək-don",
    category: "donlar",
    price: 65,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvIam4mPWZcKs6H0yChKRivh4clNQrpA59WKr-YlneIG-whxtWOi2XJW3aqrZCMEWG5kaCr0-vjO5rPvGG69InP_Owf5eNOYPO_eZE49lg1-dGSd_tD-0ITFCHmISursGQdSSPsAXRIznEajFKmF50UX53jD9S3rNYuY6hXm4e4CmgS8smFHT7D8LpqAkkLWDIRVAIpn2X2ntB4A0uVkLLRSP7ARRzrBAA4ERp-Ffsxh_v62Jui4OE",
    colors: [
      { name: "Şampan", hex: "#F7E7CE", filter: "Krem" },
      { name: "Dumanlı çəhrayı", hex: "#D4A5A5", filter: "Dumanlı çəhrayı" }
    ],
    sizes: sz(["XS", "S", "M", "L"]), // DOLDURULUB
    material: "İpək", // DOLDURULUB
    rating: 4.7, reviews: 14, sku: "FR-4118", // DOLDURULUB
    added: 14, sold: 90
  },
  {
    id: "qircinli-ziyafet-donu",
    name: "Qırçınlı ziyafət donu",
    category: "donlar",
    price: 95, oldPrice: 135,
    badge: { text: "-30%", tone: "primary" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9l0pZDp8YEijhxBjMUWh3XxBt7UJcKbs5_HlJHJqEr1BDENbGEJZFvSZDATBktYRT47GObXJUJTo-Tf1eC5w2rvLlx6dtxmjc3peZ0YlFzYiPDzW091RQ122cUZIn2EgdRF9T9QDciSXA8uQ2VRm9yWxCjFbINRp-8aHWY-osbxZLpFqZY3MFGe5HVTq56GlA4aRVn4cHZf5we2he03FhdAiEcmL8KTzJfD_8Xc7pYSCufYZDmyiT",
    colors: [
      { name: "Qara", hex: "#1B1C1C", filter: "Qara" },
      { name: "Qırmızı", hex: "#A81C26", filter: "Tünd Qırmızı" }
    ],
    sizes: sz(["S", "M", "L", "XL"], ["L"]), // DOLDURULUB
    material: "Şifon", // DOLDURULUB
    rating: 4.8, reviews: 31, sku: "FR-4121", // DOLDURULUB
    added: 11, sold: 180
  },
  {
    id: "gundelik-trikotaj-don",
    name: "Gündəlik trikotaj don",
    category: "donlar",
    price: 39,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzut6LdOs8ouOFCJ9QqdvAI0dCsDhtJe_SuXRSF-C9tmJ6-8Crvj2F7vuvrxTgkEBSSdXY_lKCHe8PJUNUcISnP4EF32n4UbYJDj4-mh58vrxDGR-dDQ5p4fpU6jGWNBd5wwaggSiTIoEKwmCBujUu8A5g0FpIeBDy6735vUVe_zv4dQApWX-KWCl55NLUTXteg0_bMBl9Mv7de_rxBVemckee--zIWLiIHugcp3a_qTgc3lJjkce4",
    colors: [
      { name: "Kamel", hex: "#C19A6B", filter: "Bej" },
      { name: "Antrasit", hex: "#383E42", filter: "Qara" }
    ],
    sizes: sz(["XS", "S", "M", "L", "XL"]), // DOLDURULUB
    material: "Trikotaj", // DOLDURULUB
    rating: 4.5, reviews: 40, sku: "FR-4125", // DOLDURULUB
    added: 10, sold: 210
  },

  // ---------- Məhsul səhifəsi: "Bunlar da xoşunuza gələ bilər" ----------
  {
    id: "klassik-bej-jaket",
    name: "Klassik Bej Jaket",
    category: "ust-geyim",
    price: 89,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBctQ01QVEA2Jt37eg877TGFfaW4DcGhgwVXes2W9xAVvx7LXK2VHR6wRHlignVqK29K4k3vDdIJd_HlesC42sdMTcb5gYRnAjY29yQs87lHYuoM5tCyhAqwdcCy-XPpAbdmjCgCD-Dcf9eF2sWywigKFGSAcVrt0rhDZQd54qg_UkPrm-DsyNvuilG2Dbnl6Qn_h495AVRyJT72O8OgClU3DYfGwr2_GhoXqD2ZiInimEzrqkExEUK",
    colors: [{ name: "Qum bej", hex: "#D7C4B7", filter: "Bej" }], // DOLDURULUB
    sizes: sz(["S", "M", "L", "XL"]), // DOLDURULUB
    material: "Pambıq", // DOLDURULUB
    rating: 4.7, reviews: 19, sku: "FR-3220", // DOLDURULUB
    added: 9, sold: 100
  },
  {
    id: "deri-mini-canta",
    name: "Dəri Mini Çanta",
    category: "aksesuarlar",
    price: 45, oldPrice: 65,
    badge: { text: "Hit", tone: "dark" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyjxiYsTE_JgmaRoCSpBujJEC1GIm9_MgVb4tKZL9z_qcwuw_27yR_m_nBpz1neczzxxE7ktBLRDoz7vZrpe4QWLj9EOiIlMKJjQfkqrQk-cmi7KYDSZIkyiDBW6Wz1KLIdJ5_QEX8ZM0w-fXcXxnpMMmYvbCkUQdl9UDCvQwp4it6q_vwzdzXd610FxvlxClsk-1CfNJ1x2yOTaATBBFf_vS-Bxz1oiJzydsUr34F-_GC51gghP0e",
    colors: [{ name: "Karamel", hex: "#A47148", filter: "Bej" }, { name: "Qara", hex: "#1B1C1C", filter: "Qara" }], // DOLDURULUB
    sizes: sz(["Standart"]), // DOLDURULUB
    material: "Dəri", // DOLDURULUB
    rating: 4.8, reviews: 52, sku: "FR-9001", // DOLDURULUB
    added: 4, sold: 240
  },
  {
    id: "ipek-ziyafet-bluzu",
    name: "İpək Ziyafət Bluzu",
    category: "bluzlar",
    price: 39,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA56Zb08fbHfgBst1dO_ySTVt-X1MYFj-K2ZiiC21d6xINjxp6mpeTraTJOrqX7sWBWlP4bQw0s5pQigG9NhVNHVcOTs6O1TNvTyz6rpzNp69h9oKS6l87AfEvr_3w1-x6VZMc8yyVf_3_qOi3gzCI_jaQdvA_v_eH7nvt7izfE7yx-JRzTk2r7x9W7hQab5dHI43PYlzsw9qy_vbaHq0Vo0S40vxf0VhFlo1fp2Utl8grw7bQNjapp",
    colors: [{ name: "Fil sümüyü", hex: "#F5F2EB", filter: "Krem" }], // DOLDURULUB
    sizes: sz(["XS", "S", "M", "L"]), // DOLDURULUB
    material: "İpək", // DOLDURULUB
    rating: 4.6, reviews: 12, sku: "FR-1510", // DOLDURULUB
    added: 13, sold: 85
  },

  // ---------- Səbət səhifəsindən ----------
  {
    id: "klassik-katan-bluz",
    name: "Klassik kətan bluz",
    category: "bluzlar",
    price: 35,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZORnsWO7TmFzVsv3ArUNSikCvoPGW8KdGK4Tpe97WMnkGBiYl9onOQ_nI8WNv__Jnxv2flT3o34oXCA__BEx_7yAO8-jMdpstKSAMw_ANZzRHKvi0X1_iZuMIteQKsg0Et_PZs-HcEAfm-Tm-gkMyYFek5cwVJvKzwP0RGHXMAvvuPZLN_2SVYcS7FduouFU_lH-w9DSsxbtvmYm-JyKb8FDQ3hzNESikasD4_Ay2haDvxL2mpYk6",
    colors: [{ name: "Süd rəngi", hex: "#FFF8E7", filter: "Krem" }, { name: "Bej", hex: "#E3DAC9", filter: "Bej" }], // DOLDURULUB
    sizes: sz(["XS", "S", "M", "L", "XL"]), // DOLDURULUB
    material: "Kətan", // DOLDURULUB
    rating: 4.5, reviews: 23, sku: "FR-1502", // DOLDURULUB
    added: 3, sold: 130
  },

  // ---------- PLACEHOLDER: Hicab geyimləri ----------
  // Dizaynda bu kateqoriyanın məhsulu yox idi. Şəkillər Stitch-dəki mövcud URL-lərdir.
  {
    id: "ipek-abaya",
    name: "İpək abaya, tünd bej", // PLACEHOLDER
    category: "hicab",
    price: 129, // PLACEHOLDER
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHEI_ZuKlZGVdV4ij2Cc0y-WLqBNXWPDfbjsPPumd12mBlZ47Jn4FLgT7e3i3xzMAZ0DOUXrfhPN0L-X90UgluXdCYfcgCVAk4CVy2mpueRAy2vFAZ9hgjHvxMNkmse9HTvbhao4fkVMmmtA4voHBjoXNYxzSuK21wB89LikWCCE87PWLHz66HMRWGPxVsPv4c_Ey4Xn2W4NeoW6dFtio2L0Cmk6LGYEGznhZpHdVRc0Mz0AE6S4Ux",
    colors: [{ name: "Tünd bej", hex: "#8B7D6B", filter: "Bej" }, { name: "Qara", hex: "#1B1C1C", filter: "Qara" }], // PLACEHOLDER
    sizes: sz(["S", "M", "L", "XL"]), // PLACEHOLDER
    material: "İpək", // PLACEHOLDER
    rating: 4.8, reviews: 9, sku: "FR-6001", // PLACEHOLDER
    added: 16, sold: 45
  },
  {
    id: "ipek-uzun-don-hicab",
    name: "Uzun ipək don, qapalı", // PLACEHOLDER
    category: "hicab",
    price: 99, oldPrice: 140, // PLACEHOLDER
    badge: { text: "-30%", tone: "primary" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGAcPP2SWQoEEy7jknf1DQRRuIGBS4Qy1opQJWzIa5_fx-x622wmDsWERWgz0ACczVWS14CC4kVOhY1naT80jvYFCMiGL_RAiEyumKCfhWllJvqP1naKyIw1bnhg5p6DUXqoMKFXuglg7JiK_dZhJ-AKaClzNuzsyd-r6IgTDhs7oSQCN3y-ssWWZNqZyNHQboroseBk46zNfiT9puTDughMCWikjednX8NifGf5KzzTIMuoJgqd8-",
    colors: [{ name: "Krem", hex: "#F5F2EB", filter: "Krem" }, { name: "Zümrüd", hex: "#0E5D3F", filter: "Zümrüd" }], // PLACEHOLDER
    sizes: sz(["S", "M", "L", "XL"], ["S"]), // PLACEHOLDER
    material: "İpək", // PLACEHOLDER
    rating: 4.7, reviews: 6, sku: "FR-6002", // PLACEHOLDER
    added: 15, sold: 30
  },

  // ---------- PLACEHOLDER: Böyük ölçülər ----------
  {
    id: "katan-zerf-don-boyuk",
    name: "Kətan zərf don", // PLACEHOLDER
    category: "boyuk-olculer",
    price: 75, // PLACEHOLDER
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBltx-cEdASxyOVPodEmnN9INZ1W7_iU6Z9zY_K6wGE9m_wyomVZoED1zgPFuSVQZHFY45gXHtrQpQYUorSn8qB0dw6OGbu61ZR52VPd6hyr1NOjZXXKgjk7Og0pDegLY_NQdo6tZ1VZ5JQzdADfazN6eixrhO6D_Vae6c3pS0OYcRiPJ7EkLPZ81qzBCRmy9YJn9poj_wtv0y1cSf4RJNjR9pntiatM42J2SLCZ6Q0RnlwNdaHEjwx",
    colors: [{ name: "Terrakota", hex: "#B5654A", filter: "Tünd Qırmızı" }, { name: "Bej", hex: "#E3DAC9", filter: "Bej" }], // PLACEHOLDER
    sizes: sz(["XL", "XXL", "3XL"]), // PLACEHOLDER
    material: "Kətan", // PLACEHOLDER
    rating: 4.8, reviews: 11, sku: "FR-7001", // PLACEHOLDER
    added: 2, sold: 65
  },
  {
    id: "buzmeli-salvar-boyuk",
    name: "Büzməli şalvar", // PLACEHOLDER
    category: "boyuk-olculer",
    price: 59, oldPrice: 85, // PLACEHOLDER
    badge: { text: "-30%", tone: "primary" },
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDU9TJfK83TjjcUGGvAr1uT5ivJoeIn1aSNMo2iSBWEDRmrgJCZZuga8tAsdFZZyIaNYEvJrIn2_qzD16JsnvNOvTYs8Gh3PN9lACf4RLyJsxE3bfm_NJTM4-5BHBdM4RbzrSrtRrpFFhSzoLz1xkMoyxA9Rpj_ojccekghkChwNAuJ71rphYtTiNYRSZWz2dl5Bgu_7EZ1XuYtNWY-voZP9QGkviV9Ht73RaD17BO5e51xfZkYqyLc",
    colors: [{ name: "Qara", hex: "#1B1C1C", filter: "Qara" }, { name: "Göy", hex: "#1C2841", filter: "Göy" }], // PLACEHOLDER
    sizes: sz(["XL", "XXL", "3XL"], ["3XL"]), // PLACEHOLDER
    material: "Pambıq", // PLACEHOLDER
    rating: 4.6, reviews: 8, sku: "FR-7002", // PLACEHOLDER
    added: 1, sold: 50
  }
];

FRERES.getProduct = function (id) {
  for (var i = 0; i < FRERES.products.length; i++) {
    if (FRERES.products[i].id === id) return FRERES.products[i];
  }
  return null;
};

// Hər məhsulda qalereya və mətn sahələri olsun deyə boşluqları doldururuq.
FRERES.products.forEach(function (p) {
  if (!p.images || !p.images.length) p.images = [p.img];
  if (!p.description) p.description = p.name + " — " + FRERES.config.brandName + " kolleksiyasından. Rahat kəsim və keyfiyyətli parça."; // DOLDURULUB
  if (!p.care) p.care = "Material: " + p.material + ". 30°C həssas yuma, ağardıcıdan istifadə etməyin."; // DOLDURULUB
});
