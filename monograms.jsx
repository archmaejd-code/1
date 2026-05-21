// MAJ — Original abstract project monograms.
// Each is a unique geometric mark; not derived from any third-party set.
// Drawn on a 24x24 viewbox; rendered white on the dark mono badge.

const M = (children) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
    {children}
  </svg>
);

window.MAJ_MONOS = {
  // Folded — two creases meeting at a point
  folded: M(<g stroke="currentColor" strokeWidth="1.6" strokeLinecap="square">
    <path d="M3 19 L12 4 L21 19" />
    <path d="M7 19 L12 12 L17 19" />
  </g>),

  // Saline — three pavilions on a horizon
  saline: M(<g stroke="currentColor" strokeWidth="1.6">
    <line x1="2" y1="17" x2="22" y2="17" />
    <rect x="4"  y="11" width="4" height="6" />
    <rect x="10" y="8"  width="4" height="9" />
    <rect x="16" y="13" width="4" height="4" />
  </g>),

  // Stratum — horizontal strata, offset
  stratum: M(<g stroke="currentColor" strokeWidth="1.7" strokeLinecap="square">
    <line x1="3"  y1="6"  x2="18" y2="6"  />
    <line x1="6"  y1="11" x2="21" y2="11" />
    <line x1="3"  y1="16" x2="14" y2="16" />
    <line x1="9"  y1="21" x2="21" y2="21" />
  </g>),

  // Mirror — circle inside square (reflection)
  mirror: M(<g stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" />
    <circle cx="12" cy="12" r="5.5" />
    <line x1="3" y1="12" x2="21" y2="12" strokeDasharray="1.5 1.5" />
  </g>),

  // Dune — slow ridge curve
  dune: M(<g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none">
    <path d="M3 18 C 6 8, 10 8, 12 14 S 18 16, 21 6" />
  </g>),

  // Salt — black square with a single light slot
  salt: M(<g>
    <rect x="3" y="3" width="18" height="18" fill="currentColor" />
    <line x1="12" y1="6" x2="12" y2="18" stroke="#0c0c0b" strokeWidth="1.8" />
  </g>),

  // Loop — figure-of-eight stacked
  loop: M(<g stroke="currentColor" strokeWidth="1.6" fill="none">
    <circle cx="12" cy="8" r="5" />
    <circle cx="12" cy="16" r="5" />
  </g>),

  // Hollow — square with cut-out core
  hollow: M(<g stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" />
    <rect x="9" y="9" width="6" height="6" />
  </g>),
};
