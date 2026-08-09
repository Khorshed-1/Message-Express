// ==================== Configuration ====================
const CONFIG = {
  WA_NUMBER: "201550564589",
  SLIDE_INTERVAL: 5000,
  SCROLL_THRESHOLD: 300,
  HEADER_SCROLL_THRESHOLD: 100,
};

// ==================== State Management ====================
const state = {
  slideIndex: 0,
  selectedCompany: "",
  lastScrollY: window.scrollY,
};

// ==================== Initialize on DOM Load ====================
document.addEventListener("DOMContentLoaded", function () {
  initSlider();
  initScrollEvents();
  initContactForm();
  initSmoothScroll();
  initTrackingSystem();
  initMobileMenu();
  initHeaderScroll();
  initFormValidation();
  logWelcome();
});

// ==================== Hero Slider ====================
function initSlider() {
  const slides = document.querySelectorAll(".slide");
  if (slides.length === 0) return;

  setInterval(() => {
    slides[state.slideIndex]?.classList.remove("active");
    state.slideIndex = (state.slideIndex + 1) % slides.length;
    slides[state.slideIndex]?.classList.add("active");
  }, CONFIG.SLIDE_INTERVAL);
}

// ==================== Mobile Menu ====================
function initMobileMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navMenu = document.querySelector("nav ul");

  if (!menuToggle || !navMenu) return;

  // Toggle menu on button click
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navMenu.classList.toggle("active");
    const isExpanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", isExpanded);

    // Animate hamburger icon
    const spans = menuToggle.querySelectorAll("span");
    if (isExpanded) {
      spans[0].style.transform = "rotate(45deg) translateY(8px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translateY(-8px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });

  // Close menu when clicking on a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");

      // Reset hamburger icon
      const spans = menuToggle.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");

      // Reset hamburger icon
      const spans = menuToggle.querySelectorAll("span");
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  });
}

// ==================== Header Scroll Effect ====================
function initHeaderScroll() {
  const header = document.querySelector("header");
  if (!header) return;

  const handleScroll = throttle(() => {
    const currentScrollY = window.scrollY;

    // Add scrolled class for styling
    header.classList.toggle("scrolled", currentScrollY > 50);

    // Hide/show header based on scroll direction
    if (
      currentScrollY > state.lastScrollY &&
      currentScrollY > CONFIG.HEADER_SCROLL_THRESHOLD
    ) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    state.lastScrollY = currentScrollY;
  }, 100);

  window.addEventListener("scroll", handleScroll, { passive: true });
}

// ==================== Tracking System ====================
function initTrackingSystem() {
  document.addEventListener("click", function (event) {
    const wrapper = document.querySelector(".custom-select-wrapper");
    const optionsList = document.getElementById("options-list");

    if (wrapper && optionsList && !wrapper.contains(event.target)) {
      optionsList.style.display = "none";
    }
  });
}

function toggleOptions() {
  const list = document.getElementById("options-list");
  const button = document.querySelector(".custom-select");

  if (!list || !button) return;

  const isVisible = list.style.display === "block";
  list.style.display = isVisible ? "none" : "block";
  button.setAttribute("aria-expanded", !isVisible);
}

function selectCompany(name, logo) {
  state.selectedCompany = name;

  const selectedLogo = document.getElementById("selected-logo");
  if (selectedLogo) {
    selectedLogo.src = logo;
    selectedLogo.alt = `شعار ${name}`;
  }

  const optionsList = document.getElementById("options-list");
  if (optionsList) optionsList.style.display = "none";

  const trackingInput = document.getElementById("trackingInput");
  if (trackingInput) trackingInput.style.display = "block";

  // Focus on tracking number input
  const trackingNumberInput = document.getElementById("trackingNumber");
  if (trackingNumberInput) {
    setTimeout(() => trackingNumberInput.focus(), 100);
  }
}

function trackShipment() {
  const trackingNumberInput = document.getElementById("trackingNumber");
  if (!trackingNumberInput) return;

  const trackingNumber = trackingNumberInput.value.trim();

  if (!trackingNumber) {
    showNotification("الرجاء إدخال رقم التتبع", "error");
    trackingNumberInput.focus();
    return;
  }

  const trackingUrls = {
    DHL: `https://mydhl.express.dhl/eg/en/tracking.html#/results?id=${trackingNumber}`,
    UPS: `https://www.ups.com/track?loc=en_US&requester=ST&tracknum=${trackingNumber}`,
    FedEx: `https://www.fedex.com/fedextrack/?trknbr=${trackingNumber}`,
    Aramex: `https://www.aramex.com/in/en/track/shipments?ShipmentNumber=${trackingNumber}`,
    SkyNet: `https://www.skynet.net/tracking_public?skybill=${trackingNumber}`,
  };

  if (trackingUrls[state.selectedCompany]) {
    window.open(
      trackingUrls[state.selectedCompany],
      "_blank",
      "noopener,noreferrer",
    );
    trackingNumberInput.value = "";
  } else {
    showNotification("الرجاء اختيار شركة الشحن أولاً", "error");
  }
}

// ==================== WhatsApp Quote Form ====================
function sendWhatsAppQuote() {
  const form = document.getElementById("quoteForm");
  if (!form) return;

  const formData = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    shipType: form.shipType.value,
    weight: form.weight.value.trim(),
    from: form.from.value.trim(),
    to: form.to.value.trim(),
    desc: form.desc.value.trim(),
  };

  // Validate required fields
  if (
    !formData.name ||
    !formData.phone ||
    !formData.shipType ||
    !formData.from ||
    !formData.to
  ) {
    showNotification("الرجاء ملء جميع الحقول المطلوبة", "error");
    return;
  }

  // Validate phone number (Egyptian format)
  if (!isValidPhone(formData.phone)) {
    showNotification("الرجاء إدخال رقم هاتف صحيح", "error");
    return;
  }

  // Build WhatsApp message
  const message = `مرحبا، أريد عرض سعر للشحن:

📝 الاسم: ${formData.name}
📞 الهاتف: ${formData.phone}
✈️ نوع الشحن: ${formData.shipType}
📦 من: ${formData.from}
📍 إلى: ${formData.to}
⚖️ الوزن: ${formData.weight || "غير محدد"}
📋 الوصف: ${formData.desc || "لا يوجد"}`;

  const waURL = `https://wa.me/${CONFIG.WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waURL, "_blank", "noopener,noreferrer");

  // Reset form
  form.reset();
  showNotification("سيتم فتح واتساب الآن. شكراً لثقتك!", "success");
}

// ==================== Contact Form Handler ====================
function initContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: event.target.name.value.trim(),
      email: event.target.email.value.trim(),
      phone: event.target.phone.value.trim(),
      message: event.target.message.value.trim(),
    };

    // Validate
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      showNotification("الرجاء ملء جميع الحقول", "error");
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification("الرجاء إدخال بريد إلكتروني صحيح", "error");
      return;
    }

    // Show success message
    const successMsg = document.getElementById("successMessage");
    if (successMsg) {
      successMsg.classList.add("show");
      setTimeout(() => successMsg.classList.remove("show"), 5000);
    }

    // Reset form
    event.target.reset();

    console.log("Form data:", formData);

    // TODO: Send to server
    // sendToServer(formData);
  });
}

// ==================== Form Validation ====================
function initFormValidation() {
  // Real-time validation for email fields
  document.querySelectorAll('input[type="email"]').forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value && !isValidEmail(this.value)) {
        this.style.borderColor = "#d32f2f";
        showNotification("الرجاء إدخال بريد إلكتروني صحيح", "error");
      } else {
        this.style.borderColor = "";
      }
    });
  });

  // Real-time validation for phone fields
  document.querySelectorAll('input[type="tel"]').forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.value && !isValidPhone(this.value)) {
        this.style.borderColor = "#d32f2f";
        showNotification("الرجاء إدخال رقم هاتف صحيح", "error");
      } else {
        this.style.borderColor = "";
      }
    });
  });
}

// ==================== Smooth Scroll ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href === "#" || !href) return;

      e.preventDefault();

      const targetSection = document.querySelector(href);
      if (!targetSection) return;

      const header = document.querySelector("header");
      const headerHeight = header?.offsetHeight || 0;
      const targetPosition = targetSection.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}

// ==================== Scroll Events ====================
function initScrollEvents() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (!scrollTopBtn) return;

  const handleScroll = throttle(() => {
    scrollTopBtn.classList.toggle(
      "show",
      window.scrollY > CONFIG.SCROLL_THRESHOLD,
    );
  }, 100);

  window.addEventListener("scroll", handleScroll, { passive: true });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// ==================== Utility Functions ====================
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Egyptian phone numbers: 01xxxxxxxxx (11 digits)
  const phoneRegex = /^(01)[0-9]{9}$/;
  return phoneRegex.test(phone.replace(/[\s-]/g, ""));
}

function showNotification(message, type = "info") {
  // Simple alert for now - can be replaced with custom notification
  alert(message);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// ==================== Lazy Loading Images ====================
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ==================== Console Welcome ====================
function logWelcome() {
  const styles = [
    "color: #0baf05",
    "font-size: 20px",
    "font-weight: bold",
    "text-shadow: 2px 2px 4px rgba(0,0,0,0.2)",
  ].join(";");

  console.log("%c🚚 مرحباً بك في Message Express للشحن الدولي", styles);
  console.log(
    "%c✨ تم تطوير الموقع باحترافية عالية",
    "color: #003399; font-size: 14px;",
  );
  console.log(
    "%c📞 للاستفسار: +20 155 056 4589",
    "color: #555; font-size: 12px;",
  );
}

// ==================== Performance Monitoring ====================
if ("PerformanceObserver" in window) {
  try {
    const perfObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.loadTime > 3000) {
          console.warn(`Slow resource detected: ${entry.name}`);
        }
      });
    });
    perfObserver.observe({ entryTypes: ["resource"] });
  } catch (e) {
    // Silently fail if not supported
  }
}

// ==================== Service Worker Registration ====================
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Uncomment when you have a service worker file
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('Service Worker registration failed'));
  });
}

// ==================== Error Handling ====================
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
  // TODO: Send to error tracking service
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  // TODO: Send to error tracking service
});
