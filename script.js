$(document).ready(function () {
  // **🔹 Preload Effect (Blur & Opacity)**
  setTimeout(() => {
    requestAnimationFrame(() => {
      $("#mainContent").css({ opacity: "1", filter: "blur(0px)" });
    });
  }, 4000);

  // **🔹 Slider Configuration**
  let itemActive = 0;
  let items = $(".slider .list .item");
  let thumbnails = $(".thumbnail .item");
  let countItem = items.length;
  let refreshInterval = setInterval(nextSlide, 5000);

  function showSlider() {
    $(".slider .list .item, .thumbnail .item").removeClass("active");
    items.eq(itemActive).addClass("active");
    thumbnails.eq(itemActive).addClass("active");
    clearInterval(refreshInterval);
    refreshInterval = setInterval(nextSlide, 5000);
  }

  function nextSlide() {
    itemActive = (itemActive + 1) % countItem;
    showSlider();
  }

  function prevSlide() {
    itemActive = (itemActive - 1 + countItem) % countItem;
    showSlider();
  }

  $("#next").click(nextSlide);
  $("#prev").click(prevSlide);
  thumbnails.click(function () {
    itemActive = $(this).index();
    showSlider();
  });

  // **🔹 Navbar Scroll Effect**
  $(window).scroll(function () {
    $("#navbar").toggleClass("scrolled py-0", $(this).scrollTop() > 50);
  });

  // **🔹 Navbar Responsive Toggle**
  $("#menu-btn").click(function () {
    $("#mobile-menu").toggleClass("hidden block");
  });

  $(".scroll-link").on("click", function (e) {
    e.preventDefault();
    let target = $($(this).attr("href"));
    if (target.length) {
      window.scrollTo({ top: target.offset().top, behavior: "smooth" });
    }
  });

  // **🔹 Our Team Modal**
  $(".open-modal").click(function () {
    $("#" + $(this).data("modal")).fadeIn();
  });

  $(".close-modal").click(function () {
    $(this).closest(".member-modal").fadeOut();
  });

  $(window).click(function (e) {
    $(".member-modal").each(function () {
      if (e.target === this) $(this).fadeOut();
    });
  });

  // **🔹 Kartu Wisata (Buka Link di Tab Baru)**
  $(".card button").click(function (event) {
    event.stopPropagation();
    let link = $(this).closest(".card").data("link");
    if (link) window.open(link, "_blank");
  });

  // **🔹 Translate Button**
  let currentLang = "id";
  $(".translate").click(function () {
    currentLang = currentLang === "en" ? "id" : "en";
    $(this).text(currentLang.toUpperCase()).toggleClass("btn-id btn-en");
    $("[data-en]").each(function () {
      $(this).text($(this).data(currentLang));
    });
  });

  // **🔹 Buka Halaman Baru (Dibatasi agar lebih aman)**
  window.bukaTabBaruwayang = function () {
    window.open("wayang.html", "_blank");
  };

  window.bukaTabBarubatik = function () {
    window.open("batik.html", "_blank");
  };

  // **🔹 Floating Action Button (FAB) Menu**
  $(".fab-menu").click(function (e) {
    e.stopPropagation();
    $(".nav-links").toggleClass("show");
  });

  // **🔹 Tutup navbar kalau klik di luar menu**
  $(document).click(function (e) {
    if (!$(e.target).closest(".fab-menu, .nav-links").length) {
      $(".nav-links").removeClass("show");
    }
  });
});

document.querySelectorAll(".open-modal").forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

document.querySelectorAll(".close-modal").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".member-modal").style.display = "none";
  });
});

window.addEventListener("click", function (e) {
  document.querySelectorAll(".member-modal").forEach((modal) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.getElementById("langBtn").addEventListener("click", function () {
  this.classList.toggle("active");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.opacity = 0;
    document.getElementById("loading-screen").style.transition =
      "opacity 1s ease-in-out";

    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").style.display = "block";
      document.getElementById("content").classList.add("show");
    }, 1000);
  }, 3000);
});
