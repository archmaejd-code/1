// MAJ Portfolio — main app
// Loader sequence → grid → expand-on-click → gallery cycle → wheel-to-close.

const { useState, useEffect, useRef, useCallback, useLayoutEffect } = React;

const FILTERS = [
  { k: "all",     en: "All",            ar: "الكل" },
  { k: "cult",    en: "Cultural",       ar: "ثقافي" },
  { k: "res",     en: "Residential",    ar: "سكني" },
  { k: "infra",   en: "Infrastructure", ar: "بنية" },
  { k: "edu",     en: "Education",      ar: "تعليم" },
  { k: "rel",     en: "Religious",      ar: "ديني" },
  { k: "hosp",    en: "Hospitality",    ar: "ضيافة" },
];

const matchFilter = (p, k) => {
  if (k === "all") return true;
  if (k === "cult")  return /cult/i.test(p.type);
  if (k === "res")   return /resid/i.test(p.type);
  if (k === "infra") return /infra/i.test(p.type);
  if (k === "edu")   return /educ/i.test(p.type);
  if (k === "rel")   return /relig/i.test(p.type);
  if (k === "hosp")  return /hospi/i.test(p.type);
  return true;
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tone": "light",
  "lang": "en",
  "headline": "Architecture as quiet infrastructure for public life."
}/*EDITMODE-END*/;

// ─── Project Row ─────────────────────────────────────────────
const ProjectRow = ({ p, active, expanded, frameIdx, lang, onOpen, onNextFrame }) => {
  const Mono = window.MAJ_MONOS[p.mono];
  const title = lang === "ar" ? p.ar : p.title;
  const loc   = lang === "ar" ? p.locAr : p.loc;
  const desc  = lang === "ar" ? p.descAr : p.desc;

  const frame = p.frames[frameIdx % p.frames.length];
  const isUrlLike = /^(https?:|\/|\.\/|images\/)/i.test(frame) || /\.(jpe?g|png|webp|avif|gif)$/i.test(frame);
  const imageStyle = {
    backgroundImage: isUrlLike ? `url("${frame}")` : frame,
  };

  return (
    <article
      data-pid={p.id}
      className={`row ${active ? "active" : ""}`}
      onClick={(e) => {
        if (!expanded) onOpen(p.id, e.currentTarget);
      }}
    >
      <div className="row__info" style={{
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: "end",
        fontFamily: lang === "ar" ? "var(--ar)" : "var(--sans)",
      }}>
        <div className="row__mono">{Mono}</div>
        <div className="row__title">{title}</div>
        {lang === "en" && <div className="row__ar">{p.ar}</div>}
        <div className="row__loc">{loc}</div>

        {active && expanded && (
          <>
            <div className="info-meta">
              <div>
                <span className="k">{lang === "ar" ? "السنة" : "Year"}</span>
                <span className="v">{p.year}</span>
              </div>
              <div>
                <span className="k">{lang === "ar" ? "النوع" : "Type"}</span>
                <span className="v">{p.type}</span>
              </div>
              <div>
                <span className="k">{lang === "ar" ? "المساحة" : "Size"}</span>
                <span className="v">{p.area}</span>
              </div>
              <div>
                <span className="k">{lang === "ar" ? "الحالة" : "Status"}</span>
                <span className="v">{p.status}</span>
              </div>
            </div>
            <div className="info-share">
              <button title="Mail">✉</button>
              <button title="Share">↗</button>
              <button title="Save">＋</button>
              <button title="Press">⎙</button>
            </div>
          </>
        )}
      </div>

      <div className="row__image" style={{ aspectRatio: "16 / 9" }}>
        <div className="img-inner" style={imageStyle} />

        {/* atmospheric overlay — abstract architectural silhouette */}
        <SilhouetteOverlay seed={p.id} active={active && expanded} />

        {active && expanded && (
          <>
            <button
              className="next-arrow"
              onClick={(e) => { e.stopPropagation(); onNextFrame(p.id); }}
              aria-label="Next image"
            >→</button>

            <div className="gallery-dots">
              {p.frames.map((_, i) => (
                <span key={i} className={i === (frameIdx % p.frames.length) ? "active" : ""} />
              ))}
            </div>
          </>
        )}
      </div>

      {active && expanded && (
        <div className="row__desc" style={{
          direction: lang === "ar" ? "rtl" : "ltr",
          fontFamily: lang === "ar" ? "var(--ar)" : "var(--sans)",
        }} onClick={(e) => e.stopPropagation()}>
          <p>{desc}</p>
          {lang === "en" && <span className="ar">{p.descAr}</span>}
        </div>
      )}
    </article>
  );
};

// Subtle architectural silhouette rendered as SVG over the gradient.
// Each project gets a unique simple form (NOT a copy of any real building).
const SilhouetteOverlay = ({ seed, active }) => {
  // Deterministic shape choice per project
  const shapes = {
    p01: <path d="M40 90 L40 38 L50 32 L50 88 M52 90 L52 32 L62 28 L62 88 M64 90 L64 24 L70 22 L70 90 Z" fill="rgba(0,0,0,.18)" />,
    p02: <g fill="rgba(0,0,0,.22)">
            <rect x="20" y="70" width="14" height="22" />
            <rect x="40" y="62" width="18" height="30" />
            <rect x="64" y="74" width="12" height="18" />
            <line x1="0" y1="92" x2="100" y2="92" stroke="rgba(0,0,0,.32)" strokeWidth="0.6" />
          </g>,
    p03: <g fill="rgba(0,0,0,.18)">
            <rect x="10" y="55" width="80" height="6" />
            <rect x="14" y="64" width="76" height="6" />
            <rect x="18" y="73" width="72" height="6" />
            <rect x="22" y="82" width="68" height="6" />
          </g>,
    p04: <g>
            <rect x="20" y="46" width="60" height="34" fill="rgba(255,255,255,.18)" />
            <rect x="20" y="80" width="60" height="2" fill="rgba(0,0,0,.4)" />
          </g>,
    p05: <path d="M0 92 C 20 60, 35 60, 50 78 S 80 80, 100 60 L100 100 L0 100 Z" fill="rgba(0,0,0,.22)" />,
    p06: <g>
            <rect x="34" y="40" width="32" height="52" fill="rgba(0,0,0,.55)" />
            <rect x="49" y="48" width="2" height="40" fill="rgba(255,255,255,.7)" />
          </g>,
    p07: <g fill="none" stroke="rgba(0,0,0,.25)" strokeWidth="1">
            <ellipse cx="50" cy="62" rx="40" ry="10" />
            <ellipse cx="50" cy="78" rx="40" ry="10" />
          </g>,
    p08: <g fill="rgba(0,0,0,.2)">
            <rect x="20" y="40" width="60" height="52" />
            <rect x="40" y="56" width="20" height="36" fill="rgba(255,255,255,.18)" />
          </g>,
  };
  const shape = shapes[seed] || null;
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMax slice"
      style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        opacity: active ? 0.92 : 0.7,
        transition: "opacity .5s linear",
        pointerEvents: "none",
      }}
    >
      {shape}
    </svg>
  );
};

// ─── Main App ────────────────────────────────────────────────
const App = () => {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [loaderDone, setLoaderDone] = useState(false);
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);
  const [frameByProject, setFrameByProject] = useState({});
  const [page, setPage] = useState("work");
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  const wheelLockRef = useRef(false);
  const flipRef = useRef(null); // { id, oldRect }
  const activeIdRef = useRef(null);
  const lenisRef = useRef(null);

  // Track latest activeId in a ref (so the wheel handler can read it without re-binding).
  useEffect(() => { activeIdRef.current = activeId; }, [activeId]);

  // Cinematic smooth scroll via Lenis (with custom-RAF fallback).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let cleanup = () => {};

    if (window.Lenis) {
      const content = el.querySelector(":scope > .scroll-content");
      if (!content) return;
      const lenis = new window.Lenis({
        wrapper: el,
        content: content,
        duration: 1.4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // ease-out-expo
        smoothWheel: true,
        smoothTouch: false,
        wheelMultiplier: 0.95,
        lerp: 0.085,
      });
      lenisRef.current = lenis;
      let rafId;
      // Velocity-driven scale/parallax state for the project grid.
      const breath = { scale: 1, offset: 0 };
      const work = () => document.querySelector(".work");

      const raf = (time) => {
        lenis.raf(time);
        // Compute target from current scroll velocity.
        const v = lenis.velocity || 0;
        const av = Math.abs(v);
        // 0 → 35 (frame px) maps to scale 1.0 → 0.97 and parallax up to 18px.
        const tScale  = 1 - Math.min(av / 35, 1) * 0.03;
        const tOffset = -Math.max(-1, Math.min(1, v / 35)) * 18;
        breath.scale  += (tScale  - breath.scale ) * 0.12;
        breath.offset += (tOffset - breath.offset) * 0.12;
        const w = work();
        if (w) {
          w.style.setProperty("--scroll-scale",  breath.scale.toFixed(4));
          w.style.setProperty("--scroll-offset", breath.offset.toFixed(2) + "px");
        }
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
      cleanup = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        lenisRef.current = null;
      };
    } else {
      // Fallback: custom lerp-based inertia
      const state = { target: el.scrollTop, current: el.scrollTop, raf: null, ignore: false };
      const clamp = () => {
        const max = Math.max(0, el.scrollHeight - el.clientHeight);
        state.target = Math.max(0, Math.min(max, state.target));
      };
      const tick = () => {
        const delta = state.target - state.current;
        state.current += delta * 0.095;
        if (Math.abs(delta) < 0.25) { state.current = state.target; state.raf = null; }
        else state.raf = requestAnimationFrame(tick);
        state.ignore = true;
        el.scrollTop = state.current;
        requestAnimationFrame(() => { state.ignore = false; });
      };
      const onWheel = (e) => {
        e.preventDefault();
        if (activeIdRef.current) return;
        state.target += e.deltaY * 0.85;
        clamp();
        if (state.raf === null) state.raf = requestAnimationFrame(tick);
      };
      const onScroll = () => {
        if (state.ignore || state.raf !== null) return;
        state.target = el.scrollTop;
        state.current = el.scrollTop;
      };
      el.lenisLikeScrollTo = (top) => {
        state.target = top; clamp();
        if (state.raf === null) state.raf = requestAnimationFrame(tick);
      };
      el.addEventListener("wheel", onWheel, { passive: false });
      el.addEventListener("scroll", onScroll, { passive: true });
      cleanup = () => {
        el.removeEventListener("wheel", onWheel);
        el.removeEventListener("scroll", onScroll);
        if (state.raf) cancelAnimationFrame(state.raf);
      };
    }
    return cleanup;
  }, []);

  // Stop Lenis from scrolling while a project is expanded (so wheel-to-close
  // fires without also moving the page).
  useEffect(() => {
    if (!lenisRef.current) return;
    // Layout changes when activeId changes — let Lenis recompute dimensions.
    requestAnimationFrame(() => { lenisRef.current?.resize?.(); });
    if (activeId) lenisRef.current.stop();
    else lenisRef.current.start();
  }, [activeId]);

  // Navigation between pages
  const navigate = useCallback((p) => {
    setActiveId(null);
    setMenuOpen(false);
    setPage(p);
    requestAnimationFrame(() => {
      lenisRef.current?.scrollTo(0, { immediate: true });
      lenisRef.current?.resize?.();
    });
  }, []);

  // Capture rect BEFORE state change, then play FLIP after layout.
  const runFlip = useCallback((id) => {
    if (!flipRef.current) return;
    const { oldImageRect, oldInfoRect } = flipRef.current;
    flipRef.current = null;
    const row = document.querySelector(`[data-pid="${id}"]`);
    if (!row) return;

    // ─── FLIP image (translate + scale) ───
    const imgEl = row.querySelector(".row__image");
    if (imgEl && oldImageRect) {
      const newRect = imgEl.getBoundingClientRect();
      const dx = oldImageRect.left - newRect.left;
      const dy = oldImageRect.top  - newRect.top;
      const sx = oldImageRect.width  / newRect.width;
      const sy = oldImageRect.height / newRect.height;
      if (!(Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx-1) < 0.01 && Math.abs(sy-1) < 0.01)) {
        imgEl.style.transition = "none";
        imgEl.style.transformOrigin = "0 0";
        imgEl.style.transform = `translate3d(${dx}px, ${dy}px, 0) scale(${sx}, ${sy})`;
        imgEl.getBoundingClientRect();
        requestAnimationFrame(() => {
          imgEl.classList.add("is-flipping");
          imgEl.style.transform = "";
          const onEnd = (ev) => {
            if (ev.target !== imgEl || ev.propertyName !== "transform") return;
            imgEl.classList.remove("is-flipping");
            imgEl.style.transition = "";
            imgEl.style.transform = "";
            imgEl.style.transformOrigin = "";
            imgEl.removeEventListener("transitionend", onEnd);
          };
          imgEl.addEventListener("transitionend", onEnd);
        });
      }
    }

    // ─── FLIP info (translate only — text stays readable) ───
    const infoEl = row.querySelector(".row__info");
    if (infoEl && oldInfoRect) {
      const newRect = infoEl.getBoundingClientRect();
      const dx = oldInfoRect.left - newRect.left;
      const dy = oldInfoRect.top  - newRect.top;
      if (Math.abs(dx) >= 1 || Math.abs(dy) >= 1) {
        infoEl.style.transition = "none";
        infoEl.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
        infoEl.getBoundingClientRect();
        requestAnimationFrame(() => {
          infoEl.style.transition = `transform var(--dur-flip) var(--ease-cine)`;
          infoEl.style.transform = "";
          const onEnd = (ev) => {
            if (ev.target !== infoEl || ev.propertyName !== "transform") return;
            infoEl.style.transition = "";
            infoEl.style.transform = "";
            infoEl.removeEventListener("transitionend", onEnd);
          };
          infoEl.addEventListener("transitionend", onEnd);
        });
      }
    }
  }, []);

  const openProject = useCallback((id, rowEl) => {
    const imgEl  = rowEl?.querySelector(".row__image") || document.querySelector(`[data-pid="${id}"] .row__image`);
    const infoEl = rowEl?.querySelector(".row__info")  || document.querySelector(`[data-pid="${id}"] .row__info`);
    flipRef.current = {
      id,
      oldImageRect: imgEl?.getBoundingClientRect(),
      oldInfoRect:  infoEl?.getBoundingClientRect(),
    };
    setActiveId(id);
  }, []);

  const closeProject = useCallback(() => {
    const imgEl  = document.querySelector(`.row.active .row__image`);
    const infoEl = document.querySelector(`.row.active .row__info`);
    if (imgEl && activeId) {
      flipRef.current = {
        id: activeId,
        oldImageRect: imgEl.getBoundingClientRect(),
        oldInfoRect:  infoEl?.getBoundingClientRect(),
      };
    }
    setActiveId(null);
  }, [activeId]);

  // After every layout commit, if a FLIP is pending, play it.
  useLayoutEffect(() => {
    if (!flipRef.current) return;
    runFlip(flipRef.current.id);
  }, [activeId, runFlip]);

  // Parallax distance per row, based on offset from the active project.
  useEffect(() => {
    const rows = [...document.querySelectorAll(".work .row")];
    if (!activeId) {
      rows.forEach(r => r.style.removeProperty("--dist"));
      return;
    }
    const activeIdx = rows.findIndex(r => r.dataset.pid === activeId);
    if (activeIdx < 0) return;
    rows.forEach((r, i) => {
      if (i === activeIdx) {
        r.style.removeProperty("--dist");
      } else {
        // Rows above slide up, rows below slide down (subtle parting).
        r.style.setProperty("--dist", String(i - activeIdx));
      }
    });
  }, [activeId]);

  // Loader timing
  useEffect(() => {
    const t1 = setTimeout(() => setLoaderDone(true), 2200);
    return () => clearTimeout(t1);
  }, []);

  // Apply tone
  useEffect(() => {
    document.documentElement.setAttribute("data-tone", t.tone);
  }, [t.tone]);

  // When expanding: scroll the active row to top of viewport.
  // When closing: don't move (return to the same scroll position).
  useEffect(() => {
    if (!activeId || !scrollRef.current) return;
    const rowEl = document.querySelector(`[data-pid="${activeId}"]`);
    if (!rowEl) return;
    const scrollEl = scrollRef.current;
    const containerRect = scrollEl.getBoundingClientRect();
    const rowRect = rowEl.getBoundingClientRect();
    const offset = rowRect.top - containerRect.top;
    if (Math.abs(offset) < 4) return;

    if (lenisRef.current) {
      const target = lenisRef.current.scroll + offset;
      // Lenis is .stop()'ed because activeId is set — bypass that briefly.
      lenisRef.current.start();
      lenisRef.current.scrollTo(target, { duration: 1.2, easing: t => 1 - Math.pow(1 - t, 4), force: true });
      // Stop again after animation completes (so wheel-to-close still works)
      setTimeout(() => { if (activeIdRef.current) lenisRef.current?.stop(); }, 1300);
    } else if (scrollEl.lenisLikeScrollTo) {
      scrollEl.lenisLikeScrollTo(scrollEl.scrollTop + offset);
    } else {
      scrollEl.scrollBy({ top: offset, behavior: "smooth" });
    }
  }, [activeId]);

  // Wheel-to-close (user described: scrolling middle-mouse closes the open one)
  useEffect(() => {
    if (!activeId) return;
    const onWheel = (e) => {
      if (wheelLockRef.current) return;
      // Any significant scroll while expanded → close
      if (Math.abs(e.deltaY) > 12) {
        wheelLockRef.current = true;
        closeProject();
        setTimeout(() => { wheelLockRef.current = false; }, 1100);
      }
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeId, closeProject]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && activeId) closeProject();
      if (e.key === "ArrowRight" && activeId) {
        setFrameByProject(s => ({ ...s, [activeId]: (s[activeId] || 0) + 1 }));
      }
      if (e.key === "ArrowLeft" && activeId) {
        setFrameByProject(s => ({ ...s, [activeId]: (s[activeId] || 0) - 1 + 1000 }));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, closeProject]);

  const lang = t.lang;
  const projects = window.MAJ_PORTFOLIO.filter(p => matchFilter(p, filter));

  return (
    <>
      <div className={`loader ${loaderDone ? "done" : ""}`}>
        <div className="loader__mask" />
        <div
          className="loader__logo"
          onClick={() => loaderDone && setMenuOpen(true)}
          style={{ cursor: loaderDone ? "pointer" : "default" }}
          role={loaderDone ? "button" : undefined}
          aria-label={loaderDone ? "Open menu" : undefined}
        >
          <span className="logo__mark">
            <span className="logo__label">MAJ</span>
            <span className="logo__lines" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
          </span>
          <small>ARCHITECTURE · EST. 2014</small>
        </div>
      </div>

      <div className="app">
        <nav className="nav">
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {/* Logo lives in .loader__logo and is the menu trigger — burger removed */}
          </div>

          <div className="nav__center">
            {[
              {k:"work",    en:"Work",    ar:"أعمال"},
              {k:"studio",  en:"Studio",  ar:"المكتب"},
              {k:"journal", en:"Journal", ar:"يوميات"},
              {k:"press",   en:"Press",   ar:"صحافة"},
              {k:"contact", en:"Contact", ar:"تواصل"},
            ].map(item => (
              <a key={item.k}
                 className={page === item.k ? "active" : ""}
                 onClick={() => navigate(item.k)}
                 style={{ cursor: "pointer" }}>
                {item[lang]}
              </a>
            ))}
          </div>

          <div className="nav__right">
            {page === "work" && (
              <span className="search">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="7"/>
                  <line x1="16" y1="16" x2="21" y2="21" />
                </svg>
                <span>{filter === "all" ? (lang === "ar" ? "كل المشاريع" : "All projects") : FILTERS.find(f=>f.k===filter)?.[lang]}</span>
              </span>
            )}
            <span style={{ cursor: "pointer", color: t.lang === "ar" ? "var(--ink)" : "var(--mid)" }} onClick={() => setTweak("lang", "ar")}>ع</span>
            <span style={{ color: "var(--line)" }}>/</span>
            <span style={{ cursor: "pointer", color: t.lang === "en" ? "var(--ink)" : "var(--mid)" }} onClick={() => setTweak("lang", "en")}>EN</span>
          </div>
        </nav>

        {page === "work" && (
          <div className="filters">
            {FILTERS.map(f => (
              <button
                key={f.k}
                className={`chip ${filter === f.k ? "active" : ""}`}
                onClick={() => setFilter(f.k)}
              >
                {f[lang]}
              </button>
            ))}
          </div>
        )}

        <div className="scroll" ref={scrollRef} style={page !== "work" ? { top: 88 } : undefined}>
          <div className="scroll-content">
            {page === "work" && (
              <main className={`work ${activeId ? "expanded" : ""}`}>
                {projects.map(p => (
                  <ProjectRow
                    key={p.id}
                    p={p}
                    active={p.id === activeId}
                    expanded={!!activeId}
                    lang={lang}
                    frameIdx={frameByProject[p.id] || 0}
                    onOpen={openProject}
                    onNextFrame={(id) => setFrameByProject(s => ({ ...s, [id]: (s[id] || 0) + 1 }))}
                  />
                ))}
              </main>
            )}
            {page === "studio"  && <window.PageStudio  lang={lang} />}
            {page === "journal" && <window.PageJournal lang={lang} />}
            {page === "press"   && <window.PagePress   lang={lang} />}
            {page === "contact" && <window.PageContact lang={lang} />}
          </div>
        </div>

        <div className="stat">
          <span>RIYADH · 11:42</span>
          <span className="ar">١١:٤٢ — صافٍ</span>
        </div>
        <div className="stat-r">
          {activeId
            ? (lang === "ar" ? "اسحب أو اضغط ESC للعودة" : "Scroll or press ESC to close")
            : `${projects.length} ${lang === "ar" ? "مشروع" : "projects"}`}
        </div>

        {activeId && (
          <div className="close-hint">
            <span className="key">ESC</span>
            <span>{lang === "ar" ? "للعودة" : "back to all"}</span>
            <span style={{margin: "0 8px", color: "var(--line)"}}>·</span>
            <span className="key">→</span>
            <span>{lang === "ar" ? "الصورة التالية" : "next view"}</span>
          </div>
        )}
      </div>

      <window.MainMenu
        open={menuOpen}
        page={page}
        lang={lang}
        onNavigate={navigate}
        onClose={() => setMenuOpen(false)}
      />

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Tone">
          <div style={{display:"flex", gap:8}}>
            {[
              {k:"light", lbl:"Light", sw:"#ffffff"},
              {k:"dark",  lbl:"Dark",  sw:"#0c0c0b"},
              {k:"warm",  lbl:"Warm",  sw:"#e9e2d2"},
            ].map(opt => (
              <button key={opt.k}
                onClick={() => setTweak("tone", opt.k)}
                style={{
                  flex:1, display:"flex", flexDirection:"column", gap:6,
                  padding: 8,
                  background:"transparent",
                  border: `1.5px solid ${t.tone === opt.k ? "#111" : "rgba(0,0,0,.12)"}`,
                  borderRadius: 6, cursor:"pointer",
                  fontFamily:"ui-monospace, Menlo, monospace",
                  fontSize: 10, letterSpacing:".1em", textTransform:"uppercase",
                  color:"#111",
                }}>
                <div style={{height:24, background: opt.sw, border:"1px solid rgba(0,0,0,.08)", borderRadius:3}}/>
                {opt.lbl}
              </button>
            ))}
          </div>
        </window.TweakSection>
        <window.TweakSection title="Language">
          <window.TweakRadio
            value={t.lang}
            onChange={(v) => setTweak("lang", v)}
            options={[{value:"en", label:"English"}, {value:"ar", label:"العربية"}]}
          />
        </window.TweakSection>
        <window.TweakSection title="Headline">
          <window.TweakText
            value={t.headline}
            onChange={(v) => setTweak("headline", v)}
            multiline
            rows={3}
          />
        </window.TweakSection>
        <window.TweakSection title="Replay">
          <window.TweakButton onClick={() => { setLoaderDone(false); setTimeout(() => setLoaderDone(true), 2200); }}>
            Replay intro
          </window.TweakButton>
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
