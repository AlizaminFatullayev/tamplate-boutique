// Səbət (sifariş siyahısı) və seçilmişlər — localStorage-da saxlanır.
// localStorage əlçatan deyilsə (gizli rejim, bloklanmış sayt datası) yaddaşda işləyir.
window.FRERES = window.FRERES || {};

(function () {
  var CART_KEY = "freres_cart";
  var FAV_KEY = "freres_favs";
  var memory = {};

  function read(key) {
    var raw = null;
    try { raw = window.localStorage.getItem(key); } catch (e) { raw = memory[key] || null; }
    if (!raw) return [];
    try {
      var v = JSON.parse(raw);
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }

  function write(key, value) {
    var raw = JSON.stringify(value);
    memory[key] = raw;
    try { window.localStorage.setItem(key, raw); } catch (e) { /* yaddaşda qalır */ }
    try { window.dispatchEvent(new CustomEvent("freres:change", { detail: { key: key } })); } catch (e) { }
  }

  function lineKey(id, size, color) { return id + "|" + size + "|" + color; }

  // Datada artıq olmayan məhsulları siyahıdan kənarlaşdırırıq
  function validItems() {
    return read(CART_KEY).filter(function (it) {
      return it && FRERES.getProduct(it.id) && it.qty > 0;
    });
  }

  var MAX_QTY = 10;

  FRERES.cart = {
    MAX_QTY: MAX_QTY,

    // [{ key, id, size, color, qty, product }]
    items: function () {
      return validItems().map(function (it) {
        return {
          key: lineKey(it.id, it.size, it.color),
          id: it.id, size: it.size, color: it.color, qty: it.qty,
          product: FRERES.getProduct(it.id)
        };
      });
    },

    add: function (id, size, color, qty) {
      qty = Math.max(1, parseInt(qty, 10) || 1);
      var list = validItems();
      var key = lineKey(id, size, color);
      var found = false;
      list.forEach(function (it) {
        if (lineKey(it.id, it.size, it.color) === key) {
          it.qty = Math.min(MAX_QTY, it.qty + qty);
          found = true;
        }
      });
      if (!found) list.push({ id: id, size: size, color: color, qty: Math.min(MAX_QTY, qty) });
      write(CART_KEY, list);
    },

    setQty: function (key, qty) {
      qty = Math.max(1, Math.min(MAX_QTY, qty));
      var list = validItems();
      list.forEach(function (it) {
        if (lineKey(it.id, it.size, it.color) === key) it.qty = qty;
      });
      write(CART_KEY, list);
    },

    remove: function (key) {
      write(CART_KEY, validItems().filter(function (it) {
        return lineKey(it.id, it.size, it.color) !== key;
      }));
    },

    count: function () {
      return validItems().reduce(function (s, it) { return s + it.qty; }, 0);
    },

    total: function () {
      return this.items().reduce(function (s, it) { return s + it.product.price * it.qty; }, 0);
    }
  };

  FRERES.favs = {
    list: function () {
      return read(FAV_KEY).filter(function (id) { return FRERES.getProduct(id); });
    },
    has: function (id) { return this.list().indexOf(id) !== -1; },
    toggle: function (id) {
      var l = this.list();
      var i = l.indexOf(id);
      if (i === -1) l.push(id); else l.splice(i, 1);
      write(FAV_KEY, l);
      return i === -1;
    },
    count: function () { return this.list().length; }
  };

  // Başqa tabda dəyişiklik olanda badge-lər yenilənsin
  window.addEventListener("storage", function (e) {
    if (e.key === CART_KEY || e.key === FAV_KEY) {
      try { window.dispatchEvent(new CustomEvent("freres:change", { detail: { key: e.key } })); } catch (err) { }
    }
  });

  // ---------- Ümumi köməkçilər ----------
  FRERES.money = function (n) {
    return (Math.round(n * 100) % 100 === 0 ? String(Math.round(n)) : n.toFixed(2)) + " ₼";
  };

  FRERES.esc = function (s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  };

  FRERES.firstAvailable = function (p) {
    var s = p.sizes.filter(function (x) { return !x.soldOut; })[0];
    return { size: s ? s.size : null, color: p.colors[0] ? p.colors[0].name : "" };
  };

  // ---------- WhatsApp sifariş mesajı ----------
  // lines: [{ product, size, color, qty }]
  FRERES.whatsappOrderMessage = function (lines) {
    var total = 0;
    var rows = lines.map(function (l, i) {
      var sum = l.product.price * l.qty;
      total += sum;
      return (i + 1) + ". " + l.product.name + " — ölçü " + l.size + ", rəng " + l.color + ", " + l.qty + " ədəd — " + FRERES.money(sum);
    });
    return "Salam! Saytdan bu məhsulları sifariş etmək istəyirəm:\n" + rows.join("\n") + "\nCəmi: " + FRERES.money(total);
  };

  FRERES.whatsappOrderUrl = function (lines) {
    return FRERES.config.whatsappUrl + "?text=" + encodeURIComponent(FRERES.whatsappOrderMessage(lines));
  };
})();
