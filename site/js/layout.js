// Ortaq hissələr: header, bottom nav, footer, üzən WhatsApp düyməsi.
// Markup Stitch dizaynındakı ilə eynidir; brend/əlaqə məlumatları config.js-dən gəlir.
//
// İstifadə: elementin görünməli olduğu yerdə inline script:
//   <script>FRERES.layout.header({ variant: "main", title: "Əsas" })</script>
// Script özündən əvvəl HTML-i sinxron yerləşdirir (səhifə "atlamır").
window.FRERES = window.FRERES || {};

(function () {
  var C = FRERES.config;
  var esc = function (s) { return FRERES.esc(s); };

  function out(html) {
    var s = document.currentScript;
    if (s) s.insertAdjacentHTML("beforebegin", html);
    else document.body.insertAdjacentHTML("beforeend", html);
  }

  var BADGE = "absolute top-1.5 right-1.5 bg-primary text-on-primary text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-surface";
  var BRAND = '<a class="font-headline-sm text-headline-sm text-primary italic" href="index.html">' + esc(C.brandName) + "</a>";

  var cartLink =
    '<a aria-label="Səbət" class="w-11 h-11 flex items-center justify-center text-on-surface relative hover:text-primary active:opacity-70 transition-colors" data-path="cart" href="cart.html">' +
    '<span class="material-symbols-outlined text-[22px]">shopping_bag</span>' +
    '<span class="' + BADGE + '" data-badge="cart">0</span></a>';

  // variant "main"  — ana səhifə və kataloq (elan zolağı, axtarış, seçilmişlər)
  // variant "stack" — məhsul və səbət (geri düyməsi + başlıq)
  function header(opts) {
    if (opts.variant === "stack") {
      return out(
        '<header class="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="h-16 px-gutter flex items-center justify-between"><div class="flex items-center gap-space-xs">' +
        '<button aria-label="Geri" class="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary active:opacity-70 transition-colors" onclick="FRERES.layout.back()" type="button"><span class="material-symbols-outlined text-[24px]">arrow_back</span></button>' +
        BRAND +
        '<h1 class="font-title-md text-title-md text-on-surface tracking-tight truncate max-w-[190px]">' + esc(opts.title) + "</h1>" +
        '</div><div class="flex items-center gap-space-xs">' + cartLink + "</div></div></header>"
      );
    }
    out(
      '<header class="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div class="bg-surface-container-low h-9 px-gutter flex items-center justify-center text-center"><p class="font-label-sm text-label-sm text-on-surface uppercase tracking-wider truncate">Bakı daxili pulsuz çatdırılma 50 ₼-dan yuxarı sifarişlərə</p></div>' +
      '<div class="h-16 px-gutter flex items-center justify-between gap-space-sm"><div class="flex items-center gap-space-xs">' +
      '<a aria-label="Menyu" class="w-11 h-11 flex items-center justify-center text-on-surface active:opacity-70 transition-opacity" href="catalog.html"><span class="material-symbols-outlined text-[24px]">menu</span></a>' +
      BRAND +
      '</div><div class="flex items-center gap-space-xs">' +
      '<span class="font-title-md text-title-md text-on-surface uppercase tracking-wide hidden">' + esc(opts.title) + "</span>" +
      '<a aria-label="Axtarış" class="w-11 h-11 flex items-center justify-center text-on-surface hover:text-primary active:opacity-70 transition-colors" href="catalog.html"><span class="material-symbols-outlined text-[22px]">search</span></a>' +
      '<a aria-label="Seçilmişlər" class="w-11 h-11 flex items-center justify-center text-on-surface relative hover:text-primary active:opacity-70 transition-colors" data-path="favorites" href="catalog.html?fav=1"><span class="material-symbols-outlined text-[22px]">favorite</span><span class="' + BADGE + '" data-badge="fav">0</span></a>' +
      cartLink +
      "</div></div></header>"
    );
  }

  function footer() {
    var branchLine = C.branches.map(function (b) { return b.name; });
    branchLine = branchLine.slice(0, -1).join(", ") + " &amp; " + esc(branchLine[branchLine.length - 1]) + " filialları";
    out(
      '<footer class="w-full bg-surface-container-low mt-space-xl px-gutter py-space-lg text-on-surface-variant"><div class="flex flex-col gap-space-md"><div class="flex flex-col gap-space-xs"><h3 class="font-headline-sm text-headline-sm text-on-surface font-semibold">' + esc(C.brandName) + '</h3><p class="font-body-sm text-body-sm text-outline">Zərif qadın geyimləri və Caspian dəb kolleksiyası</p></div>' +
      '<div class="flex flex-col gap-space-xs font-body-sm text-body-sm pt-space-xs">' +
      '<div class="flex items-start gap-space-sm"><span class="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span><span>' + branchLine + "</span></div>" +
      '<div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-primary text-[18px]">schedule</span><span>' + esc(C.workingHours) + "</span></div>" +
      '<div class="flex items-center gap-space-sm"><span class="material-symbols-outlined text-primary text-[18px]">call</span><a class="text-on-surface font-medium underline-offset-4 hover:underline" href="tel:' + C.phoneTel + '">' + esc(C.phoneDisplay) + "</a></div></div>" +
      '<div class="flex items-center gap-space-md pt-space-xs">' +
      '<a class="flex items-center gap-1.5 text-on-surface font-label-md text-label-md hover:text-primary transition-colors" href="' + C.instagramUrl + '" rel="noopener" target="_blank"><span class="material-symbols-outlined text-[18px]">photo_camera</span><span>Instagram</span></a>' +
      '<a class="flex items-center gap-1.5 text-on-surface font-label-md text-label-md hover:text-primary transition-colors" href="https://tiktok.com" rel="noopener" target="_blank"><span class="material-symbols-outlined text-[18px]">play_circle</span><span>TikTok</span></a>' +
      '<a class="flex items-center gap-1.5 text-on-surface font-label-md text-label-md hover:text-primary transition-colors" href="' + C.whatsappUrl + '" rel="noopener" target="_blank"><span class="material-symbols-outlined text-[18px]">chat</span><span>WhatsApp</span></a></div>' +
      '<div class="flex items-center flex-wrap gap-space-sm pt-space-xs"><span class="px-2 py-1 bg-surface rounded text-[11px] font-semibold tracking-wider text-on-surface uppercase">Visa</span><span class="px-2 py-1 bg-surface rounded text-[11px] font-semibold tracking-wider text-on-surface uppercase">Mastercard</span><span class="px-2 py-1 bg-surface rounded text-[11px] font-semibold tracking-wider text-on-surface uppercase">Birkart</span><span class="px-2 py-1 bg-surface rounded text-[11px] font-semibold tracking-wider text-on-surface uppercase">Tamkart</span></div>' +
      '<div class="pt-space-sm text-center"><p class="font-label-sm text-label-sm text-outline">© ' + new Date().getFullYear() + " " + esc(C.brandName) + ". Bütün hüquqlar qorunur.</p></div></div></footer>"
    );
  }

  // "tab" — bottom nav olan səhifələr (bottom-24), "stack" — nav-sız səhifələr (bottom-6)
  function whatsappFab(variant) {
    out(
      '<a aria-label="WhatsApp ilə əlaqə" class="fixed ' + (variant === "stack" ? "bottom-6" : "bottom-24") + ' right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(37,211,102,0.45),0_2px_6px_-1px_rgba(0,0,0,0.1)] active:scale-95 transition-transform" href="' + C.whatsappUrl + '" rel="noopener" target="_blank"><span class="material-symbols-outlined text-[28px]">chat</span></a>'
    );
  }

  var NAV_ITEMS = [
    { path: "home", href: "index.html", icon: "cottage", label: "Əsas" },
    { path: "catalog", href: "catalog.html", icon: "styler", label: "Kataloq" },
    { path: "new-in", href: "catalog.html?sort=new", icon: "auto_awesome", label: "Yeni" },
    { path: "favorites", href: "catalog.html?fav=1", icon: "favorite", label: "Seçilmişlər" },
    { path: "cart", href: "cart.html", icon: "shopping_bag", label: "Səbət", badge: "cart" }
  ];

  function nav(active) {
    var items = NAV_ITEMS.map(function (it) {
      var on = it.path === active;
      var cls = "flex flex-col items-center justify-center min-w-[56px] h-12 " +
        (on ? "transition-colors text-primary font-semibold" : "text-on-surface-variant hover:text-on-surface transition-colors") +
        (it.badge ? " relative" : "");
      return '<a ' + (on ? 'aria-current="page" ' : "") + 'class="' + cls + '" data-path="' + it.path + '" href="' + it.href + '">' +
        '<span class="material-symbols-outlined text-[22px]">' + it.icon + "</span>" +
        '<span class="font-label-sm text-label-sm mt-0.5">' + it.label + "</span>" +
        (it.badge ? '<span class="absolute top-0 right-3 bg-primary text-on-primary text-[10px] font-semibold w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-surface" data-badge="' + it.badge + '">0</span>' : "") +
        "</a>";
    }).join("");
    out('<nav class="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold"><div class="flex justify-around items-center h-16 px-gutter-sm">' + items + "</div></nav>");
  }

  function refreshBadges() {
    var counts = { cart: FRERES.cart.count(), fav: FRERES.favs.count() };
    var els = document.querySelectorAll("[data-badge]");
    for (var i = 0; i < els.length; i++) {
      var n = counts[els[i].getAttribute("data-badge")] || 0;
      els[i].textContent = n > 9 ? "9+" : String(n);
      els[i].classList.toggle("hidden", n === 0);
    }
  }

  function back() {
    if (window.history.length > 1 && document.referrer) window.history.back();
    else window.location.href = "index.html";
  }

  window.addEventListener("freres:change", refreshBadges);
  document.addEventListener("DOMContentLoaded", refreshBadges);

  FRERES.layout = {
    header: header, footer: footer, nav: nav, whatsappFab: whatsappFab,
    refreshBadges: refreshBadges, back: back
  };
})();
