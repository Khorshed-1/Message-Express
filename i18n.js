/* ==========================================================================
   Message Express — Bilingual dictionary (AR default / EN secondary)
   --------------------------------------------------------------------------
   Both languages are written as ORIGINALS, not as translations of each other.
   Arabic = natural Egyptian business register.
   English = natural trade/logistics English.
   ========================================================================== */

const I18N = {
  ar: {
    /* ---------- Document / meta ---------- */
    "meta.title": "Message Express — شحن دولي صادر ووارد | رخصة بريد 64",
    "meta.description":
      "Message Express للشحن الدولي. شحن صادر جوي وبحري وبري من مصر إلى العالم، واستيراد وارد من الصين والإمارات وأمريكا وأوروبا مع تخليص جمركي وتوصيل حتى الباب. رخصة بريد رقم 64.",
    "meta.ogTitle": "Message Express — شحن دولي صادر ووارد",
    "meta.ogDescription":
      "شحن من مصر إلى العالم، واستيراد من الصين والإمارات وأمريكا وأوروبا مع تخليص جمركي وتوصيل حتى الباب.",

    /* ---------- Accessibility / chrome ---------- */
    "a11y.skipLink": "الانتقال إلى المحتوى الرئيسي",
    "a11y.mainNav": "القائمة الرئيسية",
    "a11y.openMenu": "فتح القائمة",
    "a11y.heroSlider": "عرض الصور الترويجية",
    "a11y.logoAlt": "شعار Message Express للشحن الدولي",
    "a11y.scrollTop": "العودة إلى الأعلى",
    "a11y.contactInfo": "معلومات الاتصال",
    "a11y.mapSection": "موقعنا على الخريطة",
    "a11y.mapTitle": "موقع Message Express على خرائط جوجل",

    /* ---------- Language switch ---------- */
    "lang.toggle": "English",
    "lang.toggleAria": "Switch to English",

    /* ---------- Navigation ---------- */
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.import": "الوارد",
    "nav.whyUs": "لماذا نحن",
    "nav.clients": "شركاؤنا",
    "nav.tracking": "تتبع الشحنة",
    "nav.quote": "عرض سعر",
    "nav.contact": "تواصل معنا",

    /* ---------- Hero ---------- */
    "hero.title": "Message Express للشحن الدولي",
    "hero.subtitle": "نشحن لك من مصر إلى العالم، ونستورد لك من العالم إلى مصر",
    "hero.cta": "احصل على عرض سعر الآن",
    "hero.slide1Alt": "شحنة جوية جاهزة للإقلاع",
    "hero.slide2Alt": "حاويات شحن بحري في الميناء",
    "hero.slide3Alt": "أسطول الشحن البري",
    "hero.slide4Alt": "خدمات الشحن الدولي",
    "hero.slide5Alt": "توصيل سريع حتى الباب",

    /* ---------- Services — shared ---------- */
    "services.title": "خدماتنا",
    "services.intro":
      "نغطي اتجاهي الشحن: الصادر من مصر إلى أي وجهة، والوارد من أهم أسواق العالم إلى باب منزلك أو مقر شركتك.",
    "services.quoteBtn": "اطلب عرض سعر",

    /* ---------- Services — Export ---------- */
    "services.export.label": "الصادر",
    "services.export.title": "الصادر — من مصر إلى العالم",
    "services.export.subtitle":
      "اختر وسيلة الشحن التي تناسب وزن بضاعتك وميزانيتك وموعد التسليم.",

    "services.air.title": "الشحن الجوي",
    "services.air.desc":
      "الخيار الأسرع، من 3 إلى 7 أيام حسب الوجهة، مع متابعة لحظية للشحنة حتى التسليم. مناسب للبضائع خفيفة الوزن وعالية القيمة والشحنات العاجلة.",
    "services.air.imgAlt": "الشحن الجوي السريع",
    "services.air.btnAria": "اطلب عرض سعر للشحن الجوي",

    "services.sea.title": "الشحن البحري",
    "services.sea.desc":
      "الأوفر للشحنات الكبيرة والثقيلة. حاويات كاملة (FCL) أو مجمّعة (LCL) مع تغليف محكم وتأمين على البضاعة عند الطلب.",
    "services.sea.imgAlt": "الشحن البحري الموثوق",
    "services.sea.btnAria": "اطلب عرض سعر للشحن البحري",

    "services.land.title": "الشحن البري",
    "services.land.desc":
      "تغطية للدول العربية ودول الجوار بمرونة في المواعيد وتكلفة أقل من الجوي. مناسب للشحنات المتوسطة والدورية.",
    "services.land.imgAlt": "الشحن البري السريع",
    "services.land.btnAria": "اطلب عرض سعر للشحن البري",

    /* ---------- Services — Import (الوارد) ---------- */
    "import.label": "الوارد",
    "import.title": "الوارد — من العالم إلى مصر",
    "import.subtitle":
      "نمنحك عنوان استلام في الخارج. اشترِ من أي متجر أو مورد، اشحن على عنواننا، ونتولى نحن الباقي: التجميع، الشحن، التخليص الجمركي، والتسليم حتى الباب.",
    "import.badge": "خدمة جديدة",

    "import.china.title": "الصين",
    "import.china.desc":
      "عنوان استلام في الصين يستقبل مشترياتك من 1688 و Taobao و Alibaba ومن الموردين مباشرة. نجمّع طرودك في شحنة واحدة لتوفير التكلفة، ثم نشحنها جواً أو بحراً إلى مصر.",
    "import.china.tag": "مثالي للتجار والموردين",

    "import.uae.title": "الإمارات",
    "import.uae.desc":
      "عنوان استلام في دبي لمشتريات نون وأمازون الإمارات والمتاجر والموردين المحليين. الأسرع من بين خطوطنا نظراً لقرب المسافة وكثافة الرحلات.",
    "import.uae.tag": "الأسرع وصولاً",

    "import.west.title": "أمريكا وأوروبا",
    "import.west.desc":
      "شحن مشتريات أمازون أمريكا إلى مصر، وشحن من دول أوروبا عبر وكيلنا Sky Net دون تحميلك مصاريف التخليص الجمركي.",
    "import.west.tag": "عبر وكيلنا Sky Net",

    "import.how.title": "كيف تستورد معنا؟",
    "import.how.step1.title": "اطلب عنوان الاستلام",
    "import.how.step1.desc":
      "راسلنا على واتساب وحدد الدولة التي ستشتري منها، فنرسل لك عنوان المستودع وبياناته كاملة.",
    "import.how.step2.title": "اشترِ واشحن إلى عنواننا",
    "import.how.step2.desc":
      "اشترِ من أي متجر أو مورد، واجعل عنوان التسليم هو عنوان مستودعنا. نبلغك فور استلام كل طرد.",
    "import.how.step3.title": "نجمّع ونشحن",
    "import.how.step3.desc":
      "ننتظر اكتمال طرودك ثم نجمّعها في شحنة واحدة لتقليل التكلفة، ونشحنها إلى مصر جواً أو بحراً.",
    "import.how.step4.title": "نخلّص ونسلّم",
    "import.how.step4.desc":
      "نتولى التخليص الجمركي بالكامل، ثم نسلّم الشحنة حتى باب منزلك أو مقر شركتك داخل مصر.",

    "import.included.title": "ما الذي يشمله الوارد؟",
    "import.included.1": "تخليص جمركي كامل بمعرفتنا",
    "import.included.2": "تجميع الطرود في شحنة واحدة (Consolidation)",
    "import.included.3": "تخزين مؤقت لحين اكتمال شحنتك",
    "import.included.4": "تقدير الرسوم الجمركية قبل الشحن",
    "import.included.5": "إرشادك للأصناف الممنوعة والمقيّدة قبل الشراء",
    "import.included.6": "توصيل حتى الباب في جميع محافظات مصر",

    "import.cta.title": "جاهز تبدأ أول شحنة وارد؟",
    "import.cta.desc":
      "أرسل لنا تفاصيل مشترياتك على واتساب ونرد عليك بعنوان الاستلام والتكلفة التقديرية.",
    "import.cta.btn": "اطلب عنوان الاستلام",

    /* ---------- Why us ---------- */
    "why.title": "لماذا تختار Message Express؟",
    "why.license.title": "رخصة بريد رقم 64",
    "why.license.desc":
      "مرخصون رسمياً من البريد المصري — تتعامل مع جهة معتمدة، لا وسيط.",
    "why.license.imgAlt": "رخصة بريد رقم 64",
    "why.global.title": "تغطية عالمية",
    "why.global.desc":
      "شبكة شركاء في كل القارات تغطي الصادر والوارد على حد سواء.",
    "why.price.title": "أسعار تنافسية",
    "why.price.desc": "سعر واضح من البداية، بدون رسوم مفاجئة عند التسليم.",
    "why.customs.title": "تخليص جمركي",
    "why.customs.desc":
      "نتولى التخليص بمعرفتنا في الصادر والوارد، ونخبرك بالرسوم مقدماً.",
    "why.tracking.title": "تتبع مباشر",
    "why.tracking.desc": "تعرف مكان شحنتك في كل مرحلة حتى لحظة التسليم.",
    "why.delivery.title": "توصيل حتى الباب",
    "why.delivery.desc":
      "لا تنتهي مهمتنا في الميناء — نوصل الشحنة إلى عنوانك مباشرة.",
    "why.support.title": "دعم 24/7",
    "why.support.desc": "فريق يرد عليك في أي وقت، وليس في ساعات العمل فقط.",

    /* ---------- Clients ---------- */
    "clients.title": "شركاؤنا في النجاح",
    "clients.subtitle": "نعمل مع أكبر شركات الشحن العالمية",
    "clients.dhlAlt": "شعار DHL",
    "clients.upsAlt": "شعار UPS",
    "clients.fedexAlt": "شعار FedEx",
    "clients.aramexAlt": "شعار Aramex",
    "clients.skynetAlt": "شعار SkyNet",

    /* ---------- Tracking ---------- */
    "tracking.title": "تتبع شحنتك",
    "tracking.subtitle": "اختر شركة الشحن ثم أدخل رقم التتبع",
    "tracking.selectAlt": "اختر شركة الشحن",
    "tracking.numberLabel": "رقم التتبع",
    "tracking.placeholder": "اكتب رقم التتبع هنا",
    "tracking.btn": "تتبع الشحنة",

    /* ---------- Quote form ---------- */
    "quote.title": "اطلب عرض سعر مجاني",
    "quote.subtitle": "املأ النموذج وسيتواصل معك فريقنا خلال 30 دقيقة",
    "quote.name": "الاسم الكامل",
    "quote.namePlaceholder": "اكتب اسمك",
    "quote.phone": "رقم الهاتف",
    "quote.phonePlaceholder": "01234567890",
    "quote.direction": "اتجاه الشحن",
    "quote.directionSelect": "اختر اتجاه الشحن",
    "quote.directionExport": "صادر — من مصر إلى الخارج",
    "quote.directionImport": "وارد — من الخارج إلى مصر",
    "quote.shipType": "وسيلة الشحن",
    "quote.shipTypeSelect": "اختر وسيلة الشحن",
    "quote.shipAir": "جوي",
    "quote.shipSea": "بحري",
    "quote.shipLand": "بري",
    "quote.shipAdvise": "غير متأكد — انصحوني",
    "quote.weight": "الوزن التقريبي",
    "quote.weightPlaceholder": "مثال: 25 كجم / 1 طن",
    "quote.from": "من",
    "quote.to": "إلى",
    "quote.cityCountry": "مدينة / دولة",
    "quote.desc": "وصف الشحنة",
    "quote.descPlaceholder": "نوع البضاعة، عدد الطرود، أي ملاحظات...",
    "quote.submit": "إرسال عبر واتساب",

    /* ---------- FAQ ---------- */
    "faq.title": "الأسئلة الشائعة",
    "faq.q1": "كم مدة الشحن؟",
    "faq.a1":
      "تختلف حسب الوسيلة والوجهة. الجوي عادة من 3 إلى 7 أيام، البحري من 15 إلى 45 يوماً، والبري يعتمد على المسافة. في الوارد تُضاف مدة التجميع والتخليص.",
    "faq.q2": "كيف أستورد من الصين أو الإمارات؟",
    "faq.a2":
      "راسلنا على واتساب فنرسل لك عنوان مستودعنا في الدولة التي ستشتري منها. اجعل هذا العنوان هو عنوان التسليم عند الشراء، ونتولى نحن التجميع والشحن والتخليص والتسليم حتى بابك.",
    "faq.q3": "هل تقدمون تخليص جمركي؟",
    "faq.a3":
      "نعم، تخليص كامل بمعرفتنا في الصادر والوارد حسب متطلبات بلد الوجهة. وفي الشحن إلى أوروبا عبر وكيلنا Sky Net لا يتحمل العميل مصاريف التخليص.",
    "faq.q4": "كم ستكون الرسوم الجمركية على شحنتي الواردة؟",
    "faq.a4":
      "تعتمد على نوع الصنف وقيمته وبلد المنشأ. أرسل لنا فاتورة الشراء أو رابط المنتج قبل الشحن، ونعطيك تقديراً للرسوم حتى تقرر على أساس واضح.",
    "faq.q5": "هل يمكن تتبع الشحنة؟",
    "faq.a5":
      "نعم، عبر رقم البوليصة من قسم التتبع في موقعنا، مع تحديث الحالة حتى التسليم النهائي.",
    "faq.q6": "ما المستندات المطلوبة؟",
    "faq.a6":
      "تختلف حسب نوع الشحنة والوجهة. للوارد التجاري غالباً فاتورة الشراء وبيان المحتويات. نرسل لك القائمة الدقيقة بعد استلام التفاصيل.",
    "faq.q7": "هل يوجد حد أدنى للوزن؟",
    "faq.a7":
      "لا. نقبل من الطرد الواحد وحتى الشحنات التجارية الكبيرة. أرسل الوزن والأبعاد على واتساب ونقترح عليك أنسب خيار.",
    "faq.q8": "كيف تُحسب تكلفة الشحن؟",
    "faq.a8":
      "على أساس الوزن الفعلي أو الحجمي أيهما أكبر، ووسيلة الشحن، والوجهة، وطبيعة البضاعة، بالإضافة إلى الخدمات الإضافية مثل التخليص والتوصيل.",

    /* ---------- Contact ---------- */
    "contact.title": "تواصل معنا",
    "contact.subtitle": "يسعدنا الرد على استفساراتكم طوال أيام الأسبوع",
    "contact.name": "الاسم الكامل",
    "contact.namePlaceholder": "اكتب اسمك هنا",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "رقم الهاتف",
    "contact.message": "رسالتك",
    "contact.messagePlaceholder": "اكتب رسالتك هنا...",
    "contact.send": "إرسال الرسالة",
    "contact.success": "شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.",

    "contact.addressTitle": "عنوان الشركة",
    "contact.addressLine1": "263 المحور المركزي، ميدان النجدة، الحي الثالث، أمام بي.تك",
    "contact.addressLine2": "6 أكتوبر، الجيزة، مصر",
    "contact.addressAria": "عنوان الشركة على الخريطة",
    "contact.phoneTitle": "رقم الهاتف",
    "contact.phoneAria": "اتصل بنا",
    "contact.whatsappTitle": "WhatsApp",
    "contact.whatsappDesc": "تواصل معنا مباشرة",
    "contact.whatsappAria": "تواصل عبر واتساب",
    "contact.facebookTitle": "Facebook",
    "contact.facebookDesc": "تابعنا على فيسبوك",
    "contact.facebookAria": "تابعنا على فيسبوك",

    /* ---------- Modal ---------- */
    "modal.closeAria": "إغلاق",
    "modal.soon.title": "صفحتنا على فيسبوك قيد التجهيز",
    "modal.soon.desc":
      "بنجهّزها بشكل يليق بيكم، وهتكون جاهزة قريب إن شاء الله. لحد ما تخلص، إحنا معاك على واتساب في أي وقت.",
    "modal.soon.whatsapp": "تواصل معنا على واتساب",
    "modal.soon.close": "تمام، شكراً",

    /* ---------- Footer ---------- */
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.license": "رخصة بريد رقم 64 | شحن دولي صادر ووارد",

    /* ---------- JS messages ---------- */
    "msg.enterTracking": "الرجاء إدخال رقم التتبع",
    "msg.selectCompany": "الرجاء اختيار شركة الشحن أولاً",
    "msg.fillRequired": "الرجاء ملء جميع الحقول المطلوبة",
    "msg.invalidPhone": "الرجاء إدخال رقم هاتف صحيح",
    "msg.invalidEmail": "الرجاء إدخال بريد إلكتروني صحيح",
    "msg.fillAll": "الرجاء ملء جميع الحقول",
    "msg.waOpening": "سيتم فتح واتساب الآن. شكراً لثقتك!",
    "msg.waGreeting": "مرحبا، أريد الاستفسار عن خدمات الشحن",
    "msg.waImport":
      "مرحبا، أريد الاستفسار عن خدمة الوارد وعنوان الاستلام في الخارج",
    "msg.waQuoteIntro": "مرحبا، أريد عرض سعر:",
    "msg.waName": "الاسم",
    "msg.waPhone": "الهاتف",
    "msg.waDirection": "اتجاه الشحن",
    "msg.waShipType": "وسيلة الشحن",
    "msg.waFrom": "من",
    "msg.waTo": "إلى",
    "msg.waWeight": "الوزن",
    "msg.waDesc": "الوصف",
    "msg.waNotSet": "غير محدد",
    "msg.waNone": "لا يوجد",
  },

  en: {
    /* ---------- Document / meta ---------- */
    "meta.title": "Message Express — Export & Import Freight | Postal Licence 64",
    "meta.description":
      "Message Express international freight. Air, sea and land export from Egypt worldwide, plus import from China, the UAE, the USA and Europe with full customs clearance and door delivery. Egyptian Postal Licence No. 64.",
    "meta.ogTitle": "Message Express — Export & Import Freight",
    "meta.ogDescription":
      "Ship from Egypt to anywhere, and import from China, the UAE, the USA and Europe with customs clearance and door-to-door delivery.",

    /* ---------- Accessibility / chrome ---------- */
    "a11y.skipLink": "Skip to main content",
    "a11y.mainNav": "Main navigation",
    "a11y.openMenu": "Open menu",
    "a11y.heroSlider": "Promotional image slider",
    "a11y.logoAlt": "Message Express international freight logo",
    "a11y.scrollTop": "Back to top",
    "a11y.contactInfo": "Contact information",
    "a11y.mapSection": "Our location on the map",
    "a11y.mapTitle": "Message Express location on Google Maps",

    /* ---------- Language switch ---------- */
    "lang.toggle": "العربية",
    "lang.toggleAria": "التبديل إلى العربية",

    /* ---------- Navigation ---------- */
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.import": "Import",
    "nav.whyUs": "Why Us",
    "nav.clients": "Partners",
    "nav.tracking": "Track",
    "nav.quote": "Get a Quote",
    "nav.contact": "Contact",

    /* ---------- Hero ---------- */
    "hero.title": "Message Express International Freight",
    "hero.subtitle":
      "We ship from Egypt to the world — and bring the world to your door in Egypt",
    "hero.cta": "Get a Quote Now",
    "hero.slide1Alt": "Air freight shipment ready for departure",
    "hero.slide2Alt": "Sea freight containers at port",
    "hero.slide3Alt": "Land freight fleet",
    "hero.slide4Alt": "International freight services",
    "hero.slide5Alt": "Fast door-to-door delivery",

    /* ---------- Services — shared ---------- */
    "services.title": "Our Services",
    "services.intro":
      "We handle both directions: export from Egypt to any destination, and import from the world's major sourcing markets straight to your home or business.",
    "services.quoteBtn": "Get a Quote",

    /* ---------- Services — Export ---------- */
    "services.export.label": "Export",
    "services.export.title": "Export — From Egypt to the World",
    "services.export.subtitle":
      "Pick the mode that fits your cargo weight, your budget and your deadline.",

    "services.air.title": "Air Freight",
    "services.air.desc":
      "The fastest option — 3 to 7 days depending on destination, with live tracking through to delivery. Best for lightweight, high-value and time-critical cargo.",
    "services.air.imgAlt": "Fast air freight",
    "services.air.btnAria": "Request an air freight quote",

    "services.sea.title": "Sea Freight",
    "services.sea.desc":
      "The most economical route for large or heavy cargo. Full container (FCL) or shared container (LCL), with secure packing and cargo insurance on request.",
    "services.sea.imgAlt": "Reliable sea freight",
    "services.sea.btnAria": "Request a sea freight quote",

    "services.land.title": "Land Freight",
    "services.land.desc":
      "Coverage across the Arab world and neighbouring markets, with flexible scheduling and lower cost than air. Well suited to mid-size and recurring shipments.",
    "services.land.imgAlt": "Fast land freight",
    "services.land.btnAria": "Request a land freight quote",

    /* ---------- Services — Import ---------- */
    "import.label": "Import",
    "import.title": "Import — From the World to Egypt",
    "import.subtitle":
      "We give you a receiving address abroad. Buy from any store or supplier, ship to our address, and we handle the rest: consolidation, freight, customs clearance and delivery to your door.",
    "import.badge": "New service",

    "import.china.title": "China",
    "import.china.desc":
      "A receiving address in China for your purchases from 1688, Taobao, Alibaba and direct suppliers. We consolidate your parcels into a single shipment to cut your cost, then ship by air or sea to Egypt.",
    "import.china.tag": "Built for traders and resellers",

    "import.uae.title": "UAE",
    "import.uae.desc":
      "A receiving address in Dubai for Noon, Amazon.ae, local retailers and suppliers. Our quickest lane, thanks to the short distance and frequent departures.",
    "import.uae.tag": "Fastest transit",

    "import.west.title": "USA & Europe",
    "import.west.desc":
      "Amazon US purchases shipped to Egypt, plus European origins via our agent Sky Net — with no customs clearance charges passed on to you.",
    "import.west.tag": "Via our agent Sky Net",

    "import.how.title": "How importing with us works",
    "import.how.step1.title": "Request your address",
    "import.how.step1.desc":
      "Message us on WhatsApp and tell us which country you're buying from. We send you the full warehouse address and details.",
    "import.how.step2.title": "Buy and ship to us",
    "import.how.step2.desc":
      "Order from any store or supplier and set our warehouse as the delivery address. We notify you as each parcel arrives.",
    "import.how.step3.title": "We consolidate and ship",
    "import.how.step3.desc":
      "Once your parcels are complete we combine them into one shipment to reduce cost, then ship to Egypt by air or sea.",
    "import.how.step4.title": "We clear and deliver",
    "import.how.step4.desc":
      "We handle customs clearance end to end, then deliver to your home or business anywhere in Egypt.",

    "import.included.title": "What import includes",
    "import.included.1": "Full customs clearance handled by us",
    "import.included.2": "Parcel consolidation into one shipment",
    "import.included.3": "Interim storage until your shipment is complete",
    "import.included.4": "Duty estimate before you ship",
    "import.included.5": "Guidance on prohibited and restricted items before you buy",
    "import.included.6": "Door delivery across all Egyptian governorates",

    "import.cta.title": "Ready to start your first import?",
    "import.cta.desc":
      "Send us your purchase details on WhatsApp and we'll reply with your receiving address and an estimated cost.",
    "import.cta.btn": "Request a Receiving Address",

    /* ---------- Why us ---------- */
    "why.title": "Why Choose Message Express?",
    "why.license.title": "Postal Licence No. 64",
    "why.license.desc":
      "Officially licensed by Egypt Post — you're dealing with an accredited operator, not a middleman.",
    "why.license.imgAlt": "Postal Licence number 64",
    "why.global.title": "Global Coverage",
    "why.global.desc":
      "A partner network across every continent, covering export and import alike.",
    "why.price.title": "Competitive Rates",
    "why.price.desc":
      "A clear price from the outset, with no surprise charges on delivery.",
    "why.customs.title": "Customs Clearance",
    "why.customs.desc":
      "We clear both export and import in-house, and tell you the duties up front.",
    "why.tracking.title": "Live Tracking",
    "why.tracking.desc":
      "Know exactly where your shipment is at every stage until it's handed over.",
    "why.delivery.title": "Door Delivery",
    "why.delivery.desc":
      "Our job doesn't end at the port — we deliver to your address.",
    "why.support.title": "24/7 Support",
    "why.support.desc":
      "A team that answers whenever you need them, not just during office hours.",

    /* ---------- Clients ---------- */
    "clients.title": "Our Partners",
    "clients.subtitle": "We work with the world's largest carriers",
    "clients.dhlAlt": "DHL logo",
    "clients.upsAlt": "UPS logo",
    "clients.fedexAlt": "FedEx logo",
    "clients.aramexAlt": "Aramex logo",
    "clients.skynetAlt": "SkyNet logo",

    /* ---------- Tracking ---------- */
    "tracking.title": "Track Your Shipment",
    "tracking.subtitle": "Choose your carrier, then enter your tracking number",
    "tracking.selectAlt": "Choose a carrier",
    "tracking.numberLabel": "Tracking number",
    "tracking.placeholder": "Enter your tracking number",
    "tracking.btn": "Track Shipment",

    /* ---------- Quote form ---------- */
    "quote.title": "Request a Free Quote",
    "quote.subtitle": "Fill in the form and our team will contact you within 30 minutes",
    "quote.name": "Full name",
    "quote.namePlaceholder": "Your name",
    "quote.phone": "Phone number",
    "quote.phonePlaceholder": "01234567890",
    "quote.direction": "Shipment direction",
    "quote.directionSelect": "Choose direction",
    "quote.directionExport": "Export — from Egypt abroad",
    "quote.directionImport": "Import — from abroad to Egypt",
    "quote.shipType": "Shipping mode",
    "quote.shipTypeSelect": "Choose a mode",
    "quote.shipAir": "Air",
    "quote.shipSea": "Sea",
    "quote.shipLand": "Land",
    "quote.shipAdvise": "Not sure — advise me",
    "quote.weight": "Approximate weight",
    "quote.weightPlaceholder": "e.g. 25 kg / 1 tonne",
    "quote.from": "From",
    "quote.to": "To",
    "quote.cityCountry": "City / country",
    "quote.desc": "Shipment description",
    "quote.descPlaceholder": "Goods type, number of parcels, any notes...",
    "quote.submit": "Send via WhatsApp",

    /* ---------- FAQ ---------- */
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How long does shipping take?",
    "faq.a1":
      "It depends on mode and destination. Air is typically 3–7 days, sea 15–45 days, and land varies with distance. For imports, add the consolidation and clearance time.",
    "faq.q2": "How do I import from China or the UAE?",
    "faq.a2":
      "Message us on WhatsApp and we'll send you our warehouse address in the country you're buying from. Use that as your delivery address at checkout, and we handle consolidation, freight, clearance and delivery to your door.",
    "faq.q3": "Do you handle customs clearance?",
    "faq.a3":
      "Yes — full in-house clearance for both export and import, according to the destination country's requirements. For shipments to Europe via our agent Sky Net, clearance charges are not passed on to the customer.",
    "faq.q4": "What customs duty will I pay on my import?",
    "faq.a4":
      "It depends on the item type, its value and country of origin. Send us the purchase invoice or product link before shipping and we'll give you a duty estimate so you can decide with full visibility.",
    "faq.q5": "Can I track my shipment?",
    "faq.a5":
      "Yes — through the tracking section on our site using your waybill number, with status updates through to final delivery.",
    "faq.q6": "What documents are required?",
    "faq.a6":
      "It varies by shipment type and destination. Commercial imports usually need the purchase invoice and a packing list. We'll send you the exact list once we have your details.",
    "faq.q7": "Is there a minimum weight?",
    "faq.a7":
      "No. We handle everything from a single parcel to large commercial consignments. Send us the weight and dimensions on WhatsApp and we'll recommend the best option.",
    "faq.q8": "How is shipping cost calculated?",
    "faq.a8":
      "On actual or volumetric weight, whichever is greater, plus shipping mode, destination and the nature of the goods — along with any extras such as clearance and delivery.",

    /* ---------- Contact ---------- */
    "contact.title": "Contact Us",
    "contact.subtitle": "We're happy to answer your questions any day of the week",
    "contact.name": "Full name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email address",
    "contact.phone": "Phone number",
    "contact.message": "Your message",
    "contact.messagePlaceholder": "Write your message here...",
    "contact.send": "Send Message",
    "contact.success": "Thank you for getting in touch. We'll reply as soon as possible.",

    "contact.addressTitle": "Office Address",
    "contact.addressLine1":
      "263 Al Mehwar Al Markazi, Al Nagda Square, Third District, opposite B.TECH",
    "contact.addressLine2": "6th of October, Giza, Egypt",
    "contact.addressAria": "Office address on the map",
    "contact.phoneTitle": "Phone",
    "contact.phoneAria": "Call us",
    "contact.whatsappTitle": "WhatsApp",
    "contact.whatsappDesc": "Message us directly",
    "contact.whatsappAria": "Contact us on WhatsApp",
    "contact.facebookTitle": "Facebook",
    "contact.facebookDesc": "Follow us on Facebook",
    "contact.facebookAria": "Follow us on Facebook",

    /* ---------- Modal ---------- */
    "modal.closeAria": "Close",
    "modal.soon.title": "Our Facebook page is on the way",
    "modal.soon.desc":
      "We're putting it together properly and it'll be live soon. In the meantime, we're on WhatsApp whenever you need us.",
    "modal.soon.whatsapp": "Message us on WhatsApp",
    "modal.soon.close": "Got it, thanks",

    /* ---------- Footer ---------- */
    "footer.rights": "All rights reserved",
    "footer.license": "Postal Licence No. 64 | Trusted export & import freight",

    /* ---------- JS messages ---------- */
    "msg.enterTracking": "Please enter a tracking number",
    "msg.selectCompany": "Please choose a carrier first",
    "msg.fillRequired": "Please fill in all required fields",
    "msg.invalidPhone": "Please enter a valid phone number",
    "msg.invalidEmail": "Please enter a valid email address",
    "msg.fillAll": "Please fill in all fields",
    "msg.waOpening": "WhatsApp will open now. Thank you!",
    "msg.waGreeting": "Hello, I'd like to ask about your shipping services",
    "msg.waImport":
      "Hello, I'd like to ask about your import service and the receiving address abroad",
    "msg.waQuoteIntro": "Hello, I'd like a quote:",
    "msg.waName": "Name",
    "msg.waPhone": "Phone",
    "msg.waDirection": "Direction",
    "msg.waShipType": "Mode",
    "msg.waFrom": "From",
    "msg.waTo": "To",
    "msg.waWeight": "Weight",
    "msg.waDesc": "Description",
    "msg.waNotSet": "Not specified",
    "msg.waNone": "None",
  },
};

/* ==========================================================================
   Runtime
   ========================================================================== */

const I18N_DEFAULT_LANG = "ar";
const I18N_STORAGE_KEY = "me_lang";

let currentLang = I18N_DEFAULT_LANG;

/** Look up a key in the active language, falling back to Arabic, then the key. */
function t(key, lang) {
  const l = lang || currentLang;
  return (I18N[l] && I18N[l][key]) || I18N.ar[key] || key;
}

/** Read the saved preference; Arabic stays the default for first-time visitors. */
function getSavedLang() {
  try {
    const saved = localStorage.getItem(I18N_STORAGE_KEY);
    if (saved === "ar" || saved === "en") return saved;
  } catch (e) {
    /* storage blocked — fall through to default */
  }
  return I18N_DEFAULT_LANG;
}

function saveLang(lang) {
  try {
    localStorage.setItem(I18N_STORAGE_KEY, lang);
  } catch (e) {
    /* non-fatal */
  }
}

/** Apply a language across the whole document. */
function applyLanguage(lang) {
  currentLang = I18N[lang] ? lang : I18N_DEFAULT_LANG;
  const isRTL = currentLang === "ar";

  const html = document.documentElement;
  html.setAttribute("lang", currentLang);
  html.setAttribute("dir", isRTL ? "rtl" : "ltr");

  // Text content
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });

  // Content that legitimately contains markup (e.g. a required asterisk)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });

  // Attributes
  const attrMap = {
    "data-i18n-placeholder": "placeholder",
    "data-i18n-aria-label": "aria-label",
    "data-i18n-title": "title",
    "data-i18n-alt": "alt",
    "data-i18n-content": "content",
  };
  Object.keys(attrMap).forEach((dataAttr) => {
    document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
      el.setAttribute(attrMap[dataAttr], t(el.getAttribute(dataAttr)));
    });
  });

  // Document title — each page declares its own key via
  // <html data-title-key="...">; the home page falls back to meta.title.
  document.title = t(html.getAttribute("data-title-key") || "meta.title");

  // WhatsApp deep links that carry a prefilled message
  document.querySelectorAll("[data-wa-message]").forEach((el) => {
    const base = el.getAttribute("data-wa-base");
    const msgKey = el.getAttribute("data-wa-message");
    if (base) el.setAttribute("href", `${base}?text=${encodeURIComponent(t(msgKey))}`);
  });

  // Toggle button label
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = t("lang.toggle");
    toggle.setAttribute("aria-label", t("lang.toggleAria"));
  }

  saveLang(currentLang);
  document.dispatchEvent(
    new CustomEvent("languagechange", { detail: { lang: currentLang } }),
  );
}

function toggleLanguage() {
  applyLanguage(currentLang === "ar" ? "en" : "ar");
}

function initI18n() {
  applyLanguage(getSavedLang());
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.addEventListener("click", toggleLanguage);
}

document.addEventListener("DOMContentLoaded", initI18n);
