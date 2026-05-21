// MAJ — Studio / Journal / Press / Contact pages + fullscreen Menu.
// All bilingual EN/AR. Editorial typography, generous spacing.

// ─── Studio ─────────────────────────────────────────────────
window.PageStudio = ({ lang }) => {
  const isAr = lang === "ar";
  return (
    <div className="page page-enter" style={{ direction: isAr ? "rtl" : "ltr", fontFamily: isAr ? "var(--ar)" : "var(--sans)" }}>
      <div className="page__eyebrow">{isAr ? "المكتب — ٢٠١٤ ← ٢٠٢٦" : "Studio — 2014 → 2026"}</div>
      <h1 className="page__title lg">
        {isAr
          ? "نحن نبني النصف الهادئ من المدينة."
          : "We design the quiet half of a city."}
      </h1>

      <div className="page__intro">
        <div>
          {isAr
            ? "مكتب MAJ هو ممارسة معمارية تعمل بين الرياض ودبي والقاهرة. تأسست عام ٢٠١٤، وتعمل عبر مشاريع ثقافية ومدنية وبنية تحتية. نتعامل مع كل مشروع كسؤال حول المناخ والطقوس والحياة العامة."
            : "MAJ is an architecture office working between Riyadh, Dubai and Cairo. Founded in 2014 and active across cultural, civic and infrastructural projects, we approach each commission as a question about climate, ritual and the public realm."}
        </div>
        <div>
          {isAr
            ? "بدلاً من البحث عن أسلوب موحَّد، نسعى إلى لغة محلية لكل موقع: مواد قريبة، إيقاعات يومية، وخدمات هادئة تتيح للحياة أن تنشأ من تلقاء نفسها."
            : "Rather than a signature style, we look for a local language at each site — close materials, daily rhythms, and quiet services that let life arise on its own terms."}
        </div>
      </div>

      <section className="studio-section">
        <div>
          <div className="label">§ 01</div>
          <span className="num">{isAr ? "الممارسة" : "Practice"}</span>
        </div>
        <div>
          <h3>{isAr
            ? "تركّز ممارستنا على أبنية تستضيف الحياة العامة قبل أن تُمثلها."
            : "Our practice centres on buildings that host public life before they represent it."}
          </h3>
          <p>{isAr
            ? "نعمل عبر أربع مقاسات: الجناح، البناية، الحي، والمنطقة. وفي كل مقياس، نبدأ من المناخ والموقع، ونبني نموذجاً ورقياً مادياً قبل أي رسم رقمي."
            : "We work across four scales — the pavilion, the building, the block and the district. At every scale we begin from climate and site, building a physical paper model before any digital drawing."}
          </p>
          <p>{isAr
            ? "نُنجز ٤ إلى ٦ مشاريع مكتملة كل عام، يُختار كلٌّ منها بعناية بحيث يضيف إلى أطروحة المكتب."
            : "We complete four to six projects each year, each chosen so it adds to the office's thesis."}
          </p>
        </div>
      </section>

      <section className="studio-section">
        <div>
          <div className="label">§ 02</div>
          <span className="num">{isAr ? "الفريق" : "People"}</span>
        </div>
        <div>
          <h3>{isAr ? "ثمانية وثلاثون شخصاً عبر ثلاثة استوديوهات." : "Thirty-eight people across three studios."}</h3>
          <div className="team-grid" style={{ direction: "ltr" }}>
            {[
              ["Majed Al-Otaibi", "Founding Partner", "2014"],
              ["Lina Hadi",       "Partner · Design", "2017"],
              ["Yusuf Tan",        "Partner · Build",  "2019"],
              ["Rana El-Sayed",    "Director · Cultural", "2018"],
              ["Karim Wassef",     "Director · Civic",    "2020"],
              ["Nora Park",        "Head of Research",    "2021"],
              ["Hassan Al-Riyami", "Head of Make",        "2019"],
              ["Aya Mahmoud",      "Senior Architect",    "2022"],
            ].map(([n,r,y],i)=>(
              <div className="row-t" key={i}>
                <div className="name">{n}</div>
                <div className="role">{r}</div>
                <div className="since">SINCE {y}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section">
        <div>
          <div className="label">§ 03</div>
          <span className="num">{isAr ? "تقدير" : "Recognition"}</span>
        </div>
        <div>
          <h3>{isAr ? "أربعة جوائز في ٢٠٢٦، وأحد عشر إجمالاً." : "Four awards in 2026, eleven in total."}</h3>
          <div className="awards-list">
            {[
              ["2026", "Saline Reserve",         "Dezeen Awards — Longlist", "AWARD"],
              ["2026", "Mirror Pavilion",        "Aga Khan Award — Shortlist", "SHORT"],
              ["2026", "Stratum Library",        "WAF — Cultural Finalist",    "FIN"],
              ["2025", "Quartz Apartments",      "MENA Architecture Awards",   "WIN"],
              ["2024", "Black Salt Mosque",      "Religious Building of the Year", "WIN"],
              ["2023", "Hollow Garden House",    "Wallpaper* Best New House",  "WIN"],
              ["2022", "Studio Practice",        "Architectural Review — Office to Watch", "WIN"],
            ].map(([y,t,by,k],i)=>(
              <div className="row-a" key={i}>
                <div className="y">{y}</div>
                <div className="title-a">{t}</div>
                <div className="by">{by}</div>
                <div className="num">{k}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="studio-section">
        <div>
          <div className="label">§ 04</div>
          <span className="num">{isAr ? "الخدمات" : "Services"}</span>
        </div>
        <div>
          <h3>{isAr
            ? "نقود المشاريع من السؤال الأول حتى التسليم."
            : "We lead projects from the first question to handover."}
          </h3>
          <p>{isAr
            ? "تشمل خدماتنا: الدراسات التمهيدية، التصميم المعماري الكامل، التصميم الداخلي، تصميم المشهد، إدارة التراخيص، ومتابعة الإنشاء."
            : "Our scope covers feasibility studies, full architectural design, interior design, landscape, permitting, and construction administration."}
          </p>
          <p>{isAr
            ? "نتعاون باستمرار مع مكاتب الهندسة الإنشائية والميكانيكية والإضاءة والمناظر الطبيعية — كل مشروع له هيئة استشارية مكرّسة له."
            : "We collaborate routinely with structural, MEP, lighting and landscape consultants — every project has its own dedicated advisory team."}
          </p>
        </div>
      </section>
    </div>
  );
};

// ─── Journal ────────────────────────────────────────────────
window.PageJournal = ({ lang }) => {
  const isAr = lang === "ar";
  const articles = [
    { n:"01", d:"05 / 2026", t: isAr ? "خمسة كتب نضعها بجانبنا" : "Five books we keep beside the desk",  k:"Reading",     read:"6 min" },
    { n:"02", d:"04 / 2026", t: isAr ? "كيف نقرأ الموقع في الأيام الأولى" : "Reading a site in the first three days", k:"Method", read:"9 min" },
    { n:"03", d:"03 / 2026", t: isAr ? "محاضرة في كوبنهاجن: العمارة كبنية تحتية" : "Lecture in Copenhagen: architecture as infrastructure", k:"Talks", read:"video" },
    { n:"04", d:"02 / 2026", t: isAr ? "ثلاث أفنية، وثلاث طرق لتبريد المدينة" : "Three courtyards and three ways to cool a city", k:"Climate", read:"7 min" },
    { n:"05", d:"01 / 2026", t: isAr ? "ملاحظات من رحلة العُلا" : "Notes from a journey through AlUla", k:"Field",  read:"12 min" },
    { n:"06", d:"12 / 2025", t: isAr ? "السطح الخامس: لماذا تهم الأسطح" : "The fifth elevation: why roofs matter", k:"Essay", read:"5 min" },
    { n:"07", d:"11 / 2025", t: isAr ? "كيف نختار حجراً" : "How we choose a stone", k:"Material", read:"4 min" },
    { n:"08", d:"10 / 2025", t: isAr ? "ست ساعات في ورشة الخشب" : "Six hours in the timber workshop", k:"Make", read:"8 min" },
    { n:"09", d:"09 / 2025", t: isAr ? "محاضرة في الجامعة الأمريكية في القاهرة" : "Lecture at AUC, Cairo", k:"Talks", read:"video" },
  ];
  return (
    <div className="page page-enter" style={{ direction: isAr ? "rtl" : "ltr", fontFamily: isAr ? "var(--ar)" : "var(--sans)" }}>
      <div className="page__eyebrow">{isAr ? "اليوميات — ١١ مقالاً" : "Journal — 11 entries"}</div>
      <h1 className="page__title">{isAr ? "ملاحظات هادئة بين المشاريع." : "Quiet notes between projects."}</h1>

      <div className="journal-feature">
        <div className="feat-img" />
        <div>
          <div className="meta">{isAr ? "مميز · ٠٥ / ٢٠٢٦ · مقال" : "Featured · 05 / 2026 · Essay"}</div>
          <h3>{isAr ? "العمارة كصيانة هادئة للأرض." : "Architecture as the quiet maintenance of land."}</h3>
          <p>{isAr
            ? "في خمسة مواقع متعاقبة، اكتشفنا أن أصعب عمل ليس ابتكار شكل جديد، بل صيانة ما هو موجود — جدار قديم، نخلة، طريق فيضان، ضوء الفجر."
            : "Across five consecutive sites we found the hardest work isn't inventing a new form — it's maintaining what is already there: an old wall, a palm, a flood path, dawn light."}
          </p>
          <a className="page__h2" style={{textDecoration:"underline", cursor:"pointer"}}>{isAr ? "اقرأ المقال →" : "Read the essay →"}</a>
        </div>
      </div>

      <div className="journal-list">
        {articles.map((a,i)=>(
          <div className="row-j" key={i}>
            <div className="num">{a.n}</div>
            <div className="date">{a.d}</div>
            <div className="title-j">{a.t}</div>
            <div className="topic">{a.k}</div>
            <div className="read">{a.read}</div>
            <div className="arrow">→</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ─── Press ──────────────────────────────────────────────────
window.PagePress = ({ lang }) => {
  const isAr = lang === "ar";
  const press = [
    { n:"01", d:"05 / 26", pub:"Dezeen",              t: isAr ? "بيت الحديقة المجوف هو واحد من ١٠ أعمال هذا العام" : "Hollow Garden House named one of the ten houses of the year" },
    { n:"02", d:"04 / 26", pub:"Wallpaper*",          t: isAr ? "خمسة أصوات عربية تعيد تشكيل العمارة المعاصرة" : "Five Arab voices reshaping contemporary architecture" },
    { n:"03", d:"03 / 26", pub:"Architectural Review",t: isAr ? "MAJ: مكتب يستحق المراقبة" : "MAJ: an office to watch" },
    { n:"04", d:"02 / 26", pub:"Domus",               t: isAr ? "جناح المرآة: نهاية الفصل المسرحي للأجنحة" : "Mirror Pavilion: the end of the pavilion as theatre" },
    { n:"05", d:"01 / 26", pub:"Frame",               t: isAr ? "محادثة مع لينا حادي وماجد العتيبي" : "In conversation with Lina Hadi and Majed Al-Otaibi" },
    { n:"06", d:"12 / 25", pub:"Architectural Record",t: isAr ? "مكتبة الطبقات: قراءة طبقات الزمن" : "Stratum Library: reading the layers of time" },
    { n:"07", d:"11 / 25", pub:"AD Middle East",      t: isAr ? "شقق الكوارتز: السكن المعاصر في الكويت" : "Quartz Apartments: contemporary living in Kuwait" },
    { n:"08", d:"10 / 25", pub:"The Plan",            t: isAr ? "مسجد الملح الأسود: الحدّ والظل" : "Black Salt Mosque: edge and shadow" },
    { n:"09", d:"08 / 25", pub:"Mark Magazine",       t: isAr ? "المحادثة: عمارة الواحات في وقت الجفاف" : "Conversation: oasis architecture in a time of drought" },
    { n:"10", d:"06 / 25", pub:"Designboom",          t: isAr ? "جولة في الاستوديو الجديد في الرياض" : "Inside the new Riyadh studio" },
  ];
  return (
    <div className="page page-enter" style={{ direction: isAr ? "rtl" : "ltr", fontFamily: isAr ? "var(--ar)" : "var(--sans)" }}>
      <div className="page__eyebrow">{isAr ? "صحافة — ٢٠٢٥ ← ٢٠٢٦" : "Press — 2025 → 2026"}</div>
      <h1 className="page__title">
        {isAr ? "ما يُكتب عنّا في مكان آخر." : "What is written about us, elsewhere."}
      </h1>

      <div className="press-list">
        {press.map((p,i)=>(
          <div className="row-p" key={i}>
            <div className="num">{p.n}</div>
            <div className="date">{p.d}</div>
            <div className="pub">{p.pub}</div>
            <div className="title-p">{p.t}</div>
            <div className="ext">{isAr ? "اقرأ ↗" : "READ ↗"}</div>
          </div>
        ))}
      </div>

      <section style={{ marginTop: 96, paddingTop: 48, borderTop: "1px solid var(--line)" }}>
        <div className="page__h2">{isAr ? "للصحافة" : "For the press"}</div>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", maxWidth: 640 }}>
          {isAr
            ? "ملفات الصور، البيانات الصحفية، وطلبات المقابلات — تواصلوا مع مكتبنا في الرياض."
            : "Image kits, press releases and interview requests — please contact our Riyadh office."}
        </p>
        <a href="mailto:press@maj.studio" style={{ display:"inline-block", marginTop:18, fontSize:18, fontWeight:500, color:"var(--ink)", textDecoration:"underline" }}>press@maj.studio</a>
      </section>
    </div>
  );
};

// ─── Contact ────────────────────────────────────────────────
window.PageContact = ({ lang }) => {
  const isAr = lang === "ar";
  const cities = [
    {
      city: isAr ? "الرياض" : "Riyadh",
      addr: isAr ? "حي السفارات، شارع الأمير تركي بن عبدالعزيز،\nمبنى ٤، الطابق الثالث، ١١٤٩١." : "Diplomatic Quarter, Prince Turki bin Abdulaziz St.,\nBuilding 4, 3rd floor, 11491.",
      ar:   isAr ? "المكتب الرئيسي · تأسس ٢٠١٤" : "الرياض · المكتب الرئيسي",
      hours: isAr ? "الأحد ← الخميس · ٩ ص ← ٦ م" : "Sun → Thu · 9 → 18",
      tel:   "+966 11 482 9100"
    },
    {
      city: isAr ? "دبي" : "Dubai",
      addr: isAr ? "DIFC، البرج ٢، الطابق ٢١،\nفي مركز دبي المالي العالمي." : "DIFC, Gate Avenue, Tower 2, Level 21,\nDubai International Financial Centre.",
      ar:   isAr ? "تأسس ٢٠١٩" : "دبي",
      hours: isAr ? "الأحد ← الخميس · ٩ ص ← ٦ م" : "Sun → Thu · 9 → 18",
      tel:   "+971 4 282 3300"
    },
    {
      city: isAr ? "القاهرة" : "Cairo",
      addr: isAr ? "الزمالك، شارع شجرة الدر،\nالمبنى ١٢، الطابق الأرضي." : "Zamalek, Shagaret Eldorr Street,\nBuilding 12, Ground floor.",
      ar:   isAr ? "تأسس ٢٠٢٢" : "القاهرة",
      hours: isAr ? "السبت ← الخميس · ١٠ ص ← ٧ م" : "Sat → Thu · 10 → 19",
      tel:   "+20 2 2735 8800"
    },
  ];
  return (
    <div className="page page-enter" style={{ direction: isAr ? "rtl" : "ltr", fontFamily: isAr ? "var(--ar)" : "var(--sans)" }}>
      <div className="page__eyebrow">{isAr ? "تواصل — ثلاثة استوديوهات" : "Contact — three studios"}</div>
      <h1 className="page__title">
        {isAr ? "تعالوا، اجلسوا، تحدّثوا." : "Come, sit down, talk."}
      </h1>

      <div className="contact-grid">
        {cities.map((c,i)=>(
          <div className="contact-card" key={i}>
            <h3 className="city">{c.city}</h3>
            <p className="addr" style={{ whiteSpace: "pre-line" }}>{c.addr}</p>
            <div className="line">{c.hours}</div>
            <div className="line">{c.tel}</div>
            <div className="ar">{c.ar}</div>
          </div>
        ))}
      </div>

      <div className="contact-channels">
        <div>
          <h4>{isAr ? "استفسارات عامة" : "General inquiries"}</h4>
          <a href="mailto:hello@maj.studio">hello@maj.studio</a>
          <p>{isAr ? "نرد عادةً في يوم العمل التالي." : "We usually reply within one working day."}</p>
        </div>
        <div>
          <h4>{isAr ? "مشاريع جديدة" : "New projects"}</h4>
          <a href="mailto:work@maj.studio">work@maj.studio</a>
          <p>{isAr ? "نقبل مشاريع جديدة بعد محادثة قصيرة وزيارة موقع." : "We accept new commissions after a short conversation and a site visit."}</p>
        </div>
        <div>
          <h4>{isAr ? "الانضمام إلينا" : "Join us"}</h4>
          <a href="mailto:careers@maj.studio">careers@maj.studio</a>
          <p>{isAr ? "نوظّف على مدار العام. الملف الشخصي + مجلد أعمال ٥-٧ مشاريع." : "We hire year-round. Send a CV and a 5–7 project portfolio."}</p>
        </div>
      </div>
    </div>
  );
};

// ─── Side-panel Menu ────────────────────────────────────────
window.MainMenu = ({ open, page, lang, onNavigate, onClose }) => {
  const isAr = lang === "ar";
  const pages = [
    { k:"work",    en:"Work",    ar:"أعمال",  meta: isAr ? "٢٤ مشروعاً" : "24 projects" },
    { k:"studio",  en:"Studio",  ar:"المكتب", meta: isAr ? "ثلاثة استوديوهات" : "Three studios" },
    { k:"journal", en:"Journal", ar:"يوميات", meta: isAr ? "١١ مقالاً" : "11 entries" },
    { k:"press",   en:"Press",   ar:"صحافة",  meta: isAr ? "صحافة" : "Press" },
    { k:"contact", en:"Contact", ar:"تواصل",  meta: isAr ? "ثلاث مدن" : "Three cities" },
  ];
  return (
    <>
      <div className={`menu-backdrop ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`menu ${open ? "open" : ""}`} role="dialog" aria-hidden={!open}
             style={{ direction: isAr ? "rtl" : "ltr" }}>
        <button className="menu__close" onClick={onClose} aria-label="Close menu">
          <span>{isAr ? "إغلاق" : "Close"}</span>
          <span className="x" />
        </button>

        <div className="menu__cols">
          <div className="menu__col">
            <h5>{isAr ? "نظرة عامة" : "Index"}</h5>
            {pages.map(p => (
              <a key={p.k}
                 onClick={() => onNavigate(p.k)}
                 style={{
                   fontFamily: isAr ? "var(--ar)" : "var(--sans)",
                   color: page === p.k ? "var(--ink)" : undefined,
                 }}>
                {p[lang]} <small>{p.meta}</small>
              </a>
            ))}
          </div>

          <div className="menu__col">
            <h5>{isAr ? "مختارات" : "Selected work"}</h5>
            {window.MAJ_PORTFOLIO.slice(0,5).map(p => (
              <a key={p.id}
                 className="small"
                 onClick={() => onNavigate("work")}
                 style={{ fontFamily: isAr ? "var(--ar)" : "var(--sans)" }}>
                {isAr ? p.ar : p.title} · <span style={{color:"var(--mid)"}}>{p.year}</span>
              </a>
            ))}
          </div>

          <div className="menu__col">
            <h5>{isAr ? "ثلاثة استوديوهات" : "Three studios"}</h5>
            <div className="meta">
              RIYADH<br/>
              DUBAI<br/>
              CAIRO<br/><br/>
              hello@maj.studio<br/>
              +966 11 482 9100
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
