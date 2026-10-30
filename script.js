// ============================================================
//  PERSONALISASI: ubah semuanya di objek CONFIG ini ♡
//  Teks, tanggal, foto, timeline, surat, semuanya dirender dari sini.
// ============================================================
const CONFIG = {
  name: "Olell",
  fullName: "Aurel Zahra Almira",
  age: 17,

  // Format YYYY-MM-DD. Kosongkan relationshipStart kalau belum mau ditampilkan.
  birthday: "2026-10-31",
  relationshipStart: "2023-03-19",

  // Taruh file foto di assets/photos/ dengan nama yang sama seperti di bawah.
  cover: { src: "assets/photos/cover.jpg", caption: "my favorite view ♡", glyph: "♡" },
  gallery: [
    { src: "assets/photos/photo-01.jpg", caption: "hari yang lebih baik karena kamu", glyph: "♡" },
    { src: "assets/photos/photo-02.jpg", caption: "cewekku yang cantik ♡", glyph: "✿" },
    { src: "assets/photos/photo-03.jpg", caption: "satu untuk camera roll", glyph: "♡" },
    { src: "assets/photos/photo-04.jpg", caption: "satu hal yang kamu bisa ledekin aku", glyph: "☼" },
    { src: "assets/photos/photo-05.jpg", caption: "Miles & Gwenn", glyph: "✧" },
    { src: "assets/photos/photo-06.jpg", caption: "satu momen favorit lagi", glyph: "♡" },
  ],

  // Ganti judul, tanggal, dan cerita sesuai kenangan kalian.
  timeline: [
    { glyph: "♡", date: "19 Maret 2023", title: "Hari kita jadian", text: "Kencan pertama kita, dan kamu jadi Anya sementara aku jadi Damian. Dari hari itu cerita kita dimulai." },
    { glyph: "✿", date: "Kenangan kecil", title: "Salah satu hari favoritku", text: "Momen sederhana yang jadi istimewa karena ada kamu. Inget ga? Pas kita hujan hujanan abis pulang dari curug, nyanyi ""Love Story"" diatas motor berdua atau pas kita cosplay bareng, semua hal hal sederhana itu bisa buat aku bahagia dan bikin hari hari aku berwarna, itu karna kamuu Sayangggg Dedee olelll munyuuuu Gumushhhhh" },
    { glyph: "✧", date: "31 Oktober 2026", title: "Tujuh belas tahun kamu", text: "Hari ini kamu genap 17. Masih banyak halaman yang belum kita tulis, semoga kita punya banyak lagi." },
  ],

  reasons: [
    // 17 kata-kata, satu untuk tiap tahun. No. 1-10 dari kamu, no. 11-17 tambahan dariku (ganti kalau mau).
    "Sayang, aku mungkin tidak memberitahumu ini setiap hari, tapi kamu sangat berarti buat Pyas.",
    "Kamu adalah hal terbaik yang terjadi kepadaku.",
    "Aku mencintaimu bukan karena siapa kamu. Tapi, juga karena menjadi apa diriku saat bersamamu.",
    "Kamu nggak sempurna, tapi kamu segalanya buatku. Hanya kamu yang bikin aku senyaman ini.",
    "Kamu adalah salah satu hal baik yang selalu kusyukuri dalam hidupku.",
    "Cintaku padamu tak terbatas. Bersamamu, hidupku sempurna.",
    "You are my World.",
    "You are my Everything.",
    "You are my Princess.",
    "You make my world become colorful.",
    "Terima kasih sudah memilih aku, sejak kencan pertama kita sebagai Anya dan Damian sampai hari ini.",
    "Di mataku kamu selalu yang paling cantik, apa pun yang kamu pakai.",
    "Kamu bikin hari-hari biasa terasa seperti hari spesial.",
    "Tujuh belas tahun kamu di dunia ini, dan aku bersyukur jadi bagian dari ceritanya.",
    "Tawa kamu adalah suara favoritku.",
    "Aku bangga sama kamu, bahkan untuk hal-hal kecil yang kamu anggap biasa.",
    "Semoga aku bisa terus jadi tempat yang nyaman buat kamu.",
  ],

  letter: {
    greeting: "Untuk Olell,",
    paragraphs: [
      "Happy birthday, sayangku. ♡",
      "Hari ini adalah hari tentang kamu, seseorang yang punya tempat spesial di hidupku. Aku harap di umur yang baru ini, kamu ketemu banyak alasan buat bahagia, makin dekat sama hal-hal yang kamu impikan, dan selalu ingat betapa berharganya diri kamu.",
      "Terima kasih sudah jadi bagian dari cerita aku. Dari momen receh yang bikin ketawa sampai hal-hal kecil yang mungkin kelihatannya biasa, semuanya punya tempat sendiri di ingatanku karena ada kamu di dalamnya.",
      "Aku nggak bisa janji setiap hari akan sempurna, tapi aku berharap kita terus belajar memahami satu sama lain, saling mendukung, dan menciptakan lebih banyak kenangan yang suatu hari nanti bisa kita lihat lagi sambil bilang, “ih, inget nggak waktu itu?”",
      "Semoga dunia memperlakukan kamu dengan lembut. Semoga kamu selalu punya ruang untuk tumbuh, bermimpi, dan menjadi diri kamu sendiri. Dan kalau hidup lagi terasa terlalu berat, ingat bahwa kamu pantas dapat banyak cinta dan bahagia.",
      "Selamat ulang tahun, cewekku yang cantik. Halaman kecil ini pengingat bahwa kamu disayang, dirayakan, dan dihargai. ♡",
    ],
    signOff: "always cheering for you,",
    signName: "Pyasssss MunyYuuuuu",
  },

  surprise: {
    title: "Harapanku untuk kamu, Olell.",
    paragraphs: [
      "Semoga babak baru ini membawa pagi yang lembut, tawa yang riuh, hal-hal kecil yang cantik, mimpi yang jadi nyata, dan seribu alasan untuk tersenyum. Kamu pantas dapat bahagia yang paling manis.",
    ],
    final: "Dan sedikit egois, aku berharap bisa ada di samping kamu untuk banyak dari semuanya itu. ♡",
  },
};

// ============================================================
//  Di bawah ini kode aplikasinya. Biasanya nggak perlu diubah.
// ============================================================
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function $(sel, root) { return (root || document).querySelector(sel); }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  // ---- isi nama ke semua elemen data-bind ----
  document.querySelectorAll("[data-bind]").forEach(function (n) {
    var v = CONFIG[n.getAttribute("data-bind")];
    if (v) n.textContent = v;
  });

  // ---- foto dengan placeholder otomatis ----
  function photo(item, alt) {
    var wrap = el("div", "photo");
    var ph = el("div", "photo-placeholder");
    ph.append(el("span", "ph-glyph", item.glyph || "♡"), el("strong", null, "tambah foto"), el("small", null, item.src.split("/").pop()));
    var img = new Image();
    img.alt = alt;
    img.hidden = true;
    img.addEventListener("load", function () { img.hidden = false; ph.hidden = true; });
    img.addEventListener("error", function () { img.hidden = true; ph.hidden = false; });
    img.src = item.src;
    wrap.append(img, ph);
    return wrap;
  }
  function polaroid(item, alt) {
    var fig = el("figure", "polaroid");
    fig.append(photo(item, alt), el("figcaption", null, item.caption));
    return fig;
  }

  $("#cover").append(polaroid(CONFIG.cover, "Foto favorit kalian"));
  var gallery = $("#gallery");
  CONFIG.gallery.forEach(function (g, i) { gallery.append(polaroid(g, "Kenangan kalian " + (i + 1))); });

  // ---- timeline ----
  var tl = $("#timeline");
  CONFIG.timeline.forEach(function (t) {
    var item = el("article", "t-item");
    item.append(el("span", "t-dot", t.glyph), el("div", "t-date", t.date), el("h3", null, t.title), el("p", null, t.text));
    tl.append(item);
  });

  // ---- surat ----
  var body = $("#letterBody");
  var L = CONFIG.letter;
  body.append(el("h3", null, L.greeting));
  L.paragraphs.forEach(function (p) { body.append(el("p", null, p)); });
  var sign = el("p", "sign", L.signOff);
  sign.append(el("span", null, L.signName));
  body.append(sign);

  var openBtn = $("#openLetter"), paper = $("#letterPaper"), openLabel = $("#openLetterLabel");
  openBtn.addEventListener("click", function () {
    var opening = paper.hidden;
    paper.hidden = !opening;
    openBtn.setAttribute("aria-expanded", String(opening));
    openLabel.textContent = opening ? "tutup suratmu" : "ketuk untuk buka suratmu";
    if (opening) paper.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  });

  // ---- tanggal footer & hitung mundur ulang tahun ----
  var bday = new Date(CONFIG.birthday + "T00:00:00");
  if (!isNaN(bday.getTime())) {
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    $("#footerDate").textContent = bday.getDate() + " " + months[bday.getMonth()] + " " + bday.getFullYear() + " ✿ kenangan favorit selamanya";
    var cd = $("#countdown");
    var diff = bday - new Date();
    if (diff > 0) {
      var days = Math.ceil(diff / 86400000);
      cd.textContent = days === 1 ? "besok hari spesialmu" : days + " hari lagi menuju hari spesialmu";
      cd.hidden = false;
    } else if (diff > -86400000) {
      cd.textContent = "hari ini hari kamu ♡";
      cd.hidden = false;
    }
  }

  // ---- counter hari jadian ----
  var counter = $("#relationshipCounter");
  function unit(n, label) {
    var d = el("div");
    d.append(el("strong", null, n), el("span", null, label));
    return d;
  }
  function hint(textBefore, code, textAfter) {
    var d = el("div", "hint", textBefore);
    d.append(el("code", null, code), document.createTextNode(textAfter));
    return d;
  }
  function updateCounter() {
    counter.replaceChildren();
    if (!CONFIG.relationshipStart) {
      counter.append(hint("isi tanggal jadian di ", "relationshipStart", " pada script.js ♡"));
      return;
    }
    var start = new Date(CONFIG.relationshipStart + "T00:00:00");
    var now = new Date();
    if (isNaN(start.getTime()) || start > now) {
      counter.append(hint("cek lagi format tanggal di ", "relationshipStart", " (YYYY-MM-DD) ♡"));
      return;
    }
    var ms = now - start;
    counter.append(
      unit(Math.floor(ms / 86400000).toLocaleString("id-ID"), "hari"),
      unit(String(Math.floor((ms % 86400000) / 3600000)), "jam"),
      unit(String(Math.floor((ms % 3600000) / 60000)), "menit")
    );
  }
  updateCounter();
  setInterval(updateCounter, 30000);

  // ---- hati yang meletup ----
  var glyphs = ["♡", "♥", "✿", "❀", "✦"];
  function burst(x, y, n) {
    if (reduce) return;
    for (var i = 0; i < n; i++) {
      (function () {
        var s = el("span", "pop", glyphs[Math.floor(Math.random() * glyphs.length)]);
        s.style.left = x + "px";
        s.style.top = y + "px";
        s.style.fontSize = (14 + Math.random() * 16) + "px";
        document.body.appendChild(s);
        var dx = (Math.random() - 0.5) * 240, dy = -(60 + Math.random() * 160), rot = (Math.random() - 0.5) * 120;
        var a = s.animate([
          { transform: "translate(0,0) rotate(0deg)", opacity: 1 },
          { transform: "translate(" + dx + "px," + dy + "px) rotate(" + rot + "deg)", opacity: 1, offset: 0.6 },
          { transform: "translate(" + dx * 1.1 + "px," + (dy + 120) + "px) rotate(" + rot * 1.4 + "deg)", opacity: 0 }
        ], { duration: 1400 + Math.random() * 700, easing: "cubic-bezier(.2,.7,.4,1)" });
        a.onfinish = function () { s.remove(); };
      })();
    }
  }
  function centerOf(node) {
    var r = node.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  // ---- kue ----
  var cake = $("#cake"), blow = $("#blow"), wishLine = $("#wishLine"), out = false;
  blow.addEventListener("click", function () {
    out = !out;
    cake.classList.toggle("out", out);
    if (out) {
      wishLine.textContent = "Yay! Semoga semua yang kamu minta tadi jadi kenyataan, " + CONFIG.name + ".";
      blow.textContent = "Nyalain lagi";
      var c = centerOf(cake);
      burst(c.x, c.y - 30, 18);
    } else {
      wishLine.textContent = "Lilinnya masih nyala. Tekan tombolnya kalau sudah siap.";
      blow.textContent = "Tiup lilin";
    }
  });

  // ---- kartu alasan ----
  var idx = 0, card = $("#card"), cardText = $("#cardText"), count = $("#count");
  function showCard(i, animate) {
    var n = CONFIG.reasons.length;
    idx = (i + n) % n;
    function apply() {
      cardText.textContent = CONFIG.reasons[idx];
      count.textContent = (idx + 1) + " / " + n;
      card.classList.remove("swap");
    }
    if (!animate || reduce) { apply(); return; }
    card.classList.add("swap");
    setTimeout(apply, 220);
  }
  $("#next").addEventListener("click", function () { showCard(idx + 1, true); });
  $("#prev").addEventListener("click", function () { showCard(idx - 1, true); });
  showCard(0, false);

  // ---- kejutan terakhir ----
  var sBtn = $("#surpriseButton"), sMsg = $("#surpriseMessage");
  var S = CONFIG.surprise;
  sMsg.append(el("div", "big-heart", "♡"), el("h3", null, S.title));
  S.paragraphs.forEach(function (p) { sMsg.append(el("p", null, p)); });
  sMsg.append(el("p", "final", S.final));
  sBtn.addEventListener("click", function () {
    var opening = sMsg.hidden;
    sMsg.hidden = !opening;
    sBtn.setAttribute("aria-expanded", String(opening));
    sBtn.textContent = opening ? "kamu sangat disayang ♡" : "satu kejutan terakhir ♡";
    if (opening) {
      var c = centerOf(sBtn);
      burst(c.x, c.y, 28);
      sMsg.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
    }
  });

  // ---- musik ----
  var music = $("#backgroundMusic"), musicBtn = $("#musicToggle"), musicLabel = $("#musicLabel");
  function musicMissing() {
    musicLabel.textContent = "lagu belum ada";
    setTimeout(function () { musicLabel.textContent = "play our song"; }, 2500);
  }
  musicBtn.addEventListener("click", function () {
    if (music.paused) {
      var p = music.play();
      if (p && p.then) {
        p.then(function () { musicLabel.textContent = "pause our song"; }, musicMissing);
      } else {
        musicLabel.textContent = "pause our song";
      }
    } else {
      music.pause();
      musicLabel.textContent = "play our song";
    }
  });
  music.addEventListener("ended", function () { musicLabel.textContent = "play our song"; });

  // Ketukan pertama pada "buka kejutannya" sekaligus memulai musik (browser baru mengizinkan suara setelah ada sentuhan).
  var startBtn = $("#startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", function () {
      if (!music.paused) return;
      var p = music.play();
      if (p && p.then) p.then(function () { musicLabel.textContent = "pause our song"; }, function () {});
    }, { once: true });
  }

  // ---- video: placeholder tetap tampil sampai video benar-benar termuat ----
  var video = $("#memoryVideo"), filmPh = $("#filmPlaceholder");
  var source = video.querySelector("source");
  video.addEventListener("loadeddata", function () { filmPh.hidden = true; });
  video.addEventListener("error", function () { filmPh.hidden = false; });
  if (source) source.addEventListener("error", function () { filmPh.hidden = false; });
  if (video.readyState >= 2) filmPh.hidden = true;
})();
