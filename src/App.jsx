import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import {
  ALL_ITEMS, HERO_STATS, DELIVERY_AREAS, LOGO_URL,
  EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY,
  zoeticLogo,
} from "./data.js";

// ── INTERSECTION OBSERVER HOOK ────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── WHATSAPP ──────────────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = "2348134325676";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello%20Zamar%20Healthy%20Foods!%20I%20would%20like%20to%20place%20an%20order.`;

// ── SVG SOCIAL ICONS ──────────────────────────────────────────────────────────
const SOCIAL_ICONS = [
  {
    label: "Instagram",
    href: "http://instagram.com/zamarmealsanddrinks",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "http://facebook.com/@zamarmealsanddrinks",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "http://tiktok.com/@zamarmealsanddrinks",
    svg: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ),
  },
];

// ── PAYMENT ACCOUNT DETAILS ───────────────────────────────────────────────────
const PAYMENT_INFO = {
  bankName:      "Opay",
  accountNumber: "8134325676",       
  accountName:   "Bukola Folasade 'Keyede",
};

// ── ORDER SUMMARY + PAYMENT BOX ───────────────────────────────────────────────
function OrderSummary({ selected }) {
  const [copied, setCopied] = useState(false);

  const total = selected.reduce((sum, item) => {
    const num = parseInt(item.price.replace(/[^\d]/g, ""), 10);
    return sum + (isNaN(num) ? 0 : num);
  }, 0);

  const handleCopy = () => {
    navigator.clipboard.writeText(PAYMENT_INFO.accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (selected.length === 0) return null;

  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1.5px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      padding: "20px 24px",
      marginBottom: "24px",
    }}>
      {/* Order breakdown */}
      <p style={{ color: "#FF6B00", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", marginBottom: "12px", textTransform: "uppercase" }}>
        Order Summary
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
        {selected.map(item => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)" }}>
            <span>{item.name}</span>
            <span style={{ color: item.color, fontWeight: 600 }}>{item.price}</span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>Total</span>
        <span style={{ color: "#FF6B00", fontWeight: 800, fontSize: "1.25rem" }}>
          ₦{total.toLocaleString()}
        </span>
      </div>

      {/* Payment details */}
      <div style={{
        background: "linear-gradient(135deg, rgba(39,174,96,0.12), rgba(39,174,96,0.06))",
        border: "1.5px solid rgba(39,174,96,0.25)",
        borderRadius: "12px",
        padding: "16px 18px",
      }}>
        <p style={{ color: "#27AE60", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>
          💳 Payment Details
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.88rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Bank</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{PAYMENT_INFO.bankName}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Account No.</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.05em" }}>
                {PAYMENT_INFO.accountNumber}
              </span>
              <button
                type="button"
                onClick={handleCopy}
                style={{
                  background: copied ? "rgba(39,174,96,0.3)" : "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "6px",
                  color: copied ? "#27AE60" : "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  padding: "3px 8px",
                  transition: "all 0.2s",
                }}
              >
                {copied ? "✓ Copied!" : "Copy"}
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Account Name</span>
            <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{PAYMENT_INFO.accountName}</span>
          </div>
        </div>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: "12px", lineHeight: 1.5 }}>
          Please transfer <strong style={{ color: "#FF6B00" }}>₦{total.toLocaleString()}</strong> and send your payment receipt after placing your order. Your order will be confirmed once payment is received.
        </p>
      </div>
    </div>
  );
}

// ── MENU CARD ─────────────────────────────────────────────────────────────────
function MenuCard({ item, selected, onToggle, delay = 0 }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`menu-card ${visible ? "menu-card--visible" : "menu-card--hidden"}`}
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: selected ? `${item.color}55` : undefined,
      }}
      onClick={() => onToggle(item)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="menu-card__img-wrap">
        <img
          src={item.img}
          alt={item.name}
          className="menu-card__img"
          loading="lazy"
          onError={e => {
            e.target.parentNode.style.background = "#1a1a1a";
            e.target.style.display = "none";
          }}
        />
        <div className="menu-card__overlay" />
        {item.tag && (
          <span className="menu-card__tag" style={{ background: `${item.color}dd` }}>
            {item.tag}
          </span>
        )}
        {selected && (
          <div
            className="menu-card__check"
            style={{
              background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
              boxShadow: `0 4px 16px ${item.color}80`,
            }}
          >
            ✓
          </div>
        )}
        <div className="menu-card__price-badge">{item.price}</div>
      </div>

      {/* Body */}
      <div className="menu-card__body">
        <div className="menu-card__name-row">
          <div className="menu-card__name">{item.name}</div>
          <div className="menu-card__price">{item.price}</div>
        </div>
        <div className="menu-card__desc">{item.desc}</div>
        <div className="menu-card__footer">
          <span className="menu-card__category" style={{ color: item.color }}>
            {item.category}
          </span>
          <span
            className="menu-card__select"
            style={{ color: selected ? item.color : "rgba(255,255,255,0.25)" }}
          >
            {selected ? "● Added" : "+ Select"}
          </span>
        </div>
      </div>
    </div>
  );
}

// ── SECTION TITLE ─────────────────────────────────────────────────────────────
function SectionTitle({ children, sub, accent = "#FF6B00" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={`section-title ${visible ? "section-title--visible" : "section-title--hidden"}`}
    >
      {sub && (
        <p className="section-title__eyebrow" style={{ color: accent }}>{sub}</p>
      )}
      <h2 className="section-title__h2">{children}</h2>
      <div className="section-title__rule" style={{ "--accent": accent }}>
        <div className="section-title__line-l" />
        <div className="section-title__dot" style={{ background: accent, boxShadow: `0 0 10px ${accent}` }} />
        <div className="section-title__line-r" />
      </div>
    </div>
  );
}

// ── FIELD WRAPPER ─────────────────────────────────────────────────────────────
function Field({ label, error, req, children }) {
  return (
    <div className="field">
      <label className="field__label">
        {label}
        {req && <span className="field__req">*</span>}
      </label>
      {children}
      {error && <span className="field__err">{error}</span>}
    </div>
  );
}

// ── FORM DIVIDER ──────────────────────────────────────────────────────────────
function Divider({ label }) {
  return (
    <div className="form-divider">
      <div className="form-divider__line" />
      <span className="form-divider__label">{label}</span>
      <div className="form-divider__line" />
    </div>
  );
}

// ── SUCCESS SCREEN ────────────────────────────────────────────────────────────
function SuccessScreen({ onReset }) {
  return (
    <div className="success">
      <div className="success__icon-wrap">
        <div className="success__icon">✅</div>
        <div className="success__ring-1" />
        <div className="success__ring-2" />
      </div>
      <h3 className="success__title">Order Received! 🎉</h3>
      <p className="success__body">
        Your order has been sent to{" "}
        <strong style={{ color: "#FF6B00" }}>Zamar Meals Healthy Foods</strong>. We will
        contact you shortly to confirm details and arrange delivery.
      </p>
      <p className="success__email">📧 zamarmeals@gmail.com</p>
      <button className="success__btn" onClick={onReset}>
        Place Another Order
      </button>
    </div>
  );
}

// ── HERO ORBS CONFIG ──────────────────────────────────────────────────────────
const HERO_ORBS = [
  { w: 750, h: 750, bg: "radial-gradient(circle,#FF6B00,transparent 70%)", style: { top: -280, right: -230 }, animation: "orbMove1 9s ease-in-out infinite",  opacity: 0.15 },
  { w: 550, h: 550, bg: "radial-gradient(circle,#4CAF50,transparent 70%)", style: { bottom: -180, left: -130 }, animation: "orbMove2 11s ease-in-out infinite", opacity: 0.12 },
  { w: 380, h: 380, bg: "radial-gradient(circle,#E8B400,transparent 70%)", style: { top: "38%", left: "18%" },  animation: "orbMove3 14s ease-in-out infinite", opacity: 0.09 },
];

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [menuTab, setMenuTab]       = useState("Food");
  const [selected, setSelected]     = useState([]);
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submitStatus, setSubmit]   = useState(null);
  const [errors, setErrors]         = useState({});
  const [form, setForm] = useState({
    customerName: "", customerPhone: "", customerEmail: "",
    recipientName: "", recipientPhone: "",
    deliveryAddress: "", deliveryArea: "", instructions: "",
  });

  const menuRef  = useRef(null);
  const orderRef = useRef(null);
  const topRef   = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const toggleItem = useCallback((item) => {
    setSelected(prev =>
      prev.find(i => i.id === item.id)
        ? prev.filter(i => i.id !== item.id)
        : [...prev, item]
    );
  }, []);

  const currentItems = ALL_ITEMS.filter(i => i.category === menuTab);

  const ic = (err) => `form-input${err ? " form-input--error" : ""}`;
  const sc = (err) => `form-select${err ? " form-select--error" : ""}`;

  const validate = () => {
    const e = {};
    if (!form.customerName.trim())    e.customerName    = "Required";
    if (!form.customerPhone.trim())   e.customerPhone   = "Required";
    if (!form.deliveryAddress.trim()) e.deliveryAddress = "Required";
    if (!form.deliveryArea.trim())    e.deliveryArea    = "Required";
    if (selected.length === 0)        e.items           = "Select at least one item";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmit("sending");

    const total = selected.reduce((sum, item) => {
      const num = parseInt(item.price.replace(/[^\d]/g, ""), 10);
      return sum + (isNaN(num) ? 0 : num);
    }, 0);

    const orderText = selected
      .map(i => `• ${i.name} — ${i.price} (${i.category})`)
      .join("\n");

    const params = {
      customer_name:        form.customerName,
      customer_phone:       form.customerPhone,
      customer_email:       form.customerEmail || "N/A",
      recipient_name:       form.recipientName  || form.customerName,
      recipient_phone:      form.recipientPhone || form.customerPhone,
      delivery_address:     form.deliveryAddress,
      delivery_area:        form.deliveryArea,
      order_items:          orderText,
      order_total:          `₦${total.toLocaleString()}`,
      special_instructions: form.instructions || "None",
      to_email:             "zamarhealthyfoods@gmail.com",
    };

    try {
      if (!window.emailjs) {
        await new Promise((res, rej) => {
          const s = document.createElement("script");
          s.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
          s.onload = res; s.onerror = rej;
          document.head.appendChild(s);
        });
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
      }
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong sending your order. Please call us directly.");
      setSubmit(null);
      return;
    }

    setSubmit("success");
  };

  const resetForm = () => {
    setSubmit(null); setSelected([]); setErrors({});
    setForm({
      customerName: "", customerPhone: "", customerEmail: "",
      recipientName: "", recipientPhone: "",
      deliveryAddress: "", deliveryArea: "", instructions: "",
    });
  };

  const f = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }));

  return (
    <div className="app">

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
        <div className="nav__inner">
          <button className="nav__logo-btn" onClick={() => scrollTo(topRef)}>
            <img
              src={LOGO_URL} alt="Zamar"
              className="nav__logo"
              onError={e => e.target.style.display = "none"}
            />
          </button>

          <div className="nav__links">
            {[["HOME", topRef], ["MENU", menuRef], ["ABOUT", orderRef], ["ORDER", orderRef]].map(([label, ref]) => (
              <button key={label} className="nav__link" onClick={() => scrollTo(ref)}>
                {label}
              </button>
            ))}
          </div>

          <button className="nav__cta" onClick={() => scrollTo(orderRef)}>
            ORDER NOW
          </button>

          <button className="nav__mobile-btn" onClick={() => setMobileOpen(o => !o)}>
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="nav__mobile-menu">
            {[["HOME", topRef], ["MENU", menuRef], ["ABOUT", orderRef], ["ORDER", orderRef], ["ORDER NOW", orderRef]].map(([label, ref]) => (
              <button key={label} className="nav__mobile-item" onClick={() => scrollTo(ref)}>
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section ref={topRef} className="hero">
        <div className="hero__bg-overlay" />
        <div className="hero__vignette" />
        <div className="hero__scroll-label">
          <div className="hero__scroll-line" />
          <span>SCROLL</span>
        </div>
        <div className="hero__center-dot">
          <div className="hero__center-dot-inner" />
        </div>
        <div className="hero__content">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-dash" />
            <span className="hero__eyebrow-text">FRESH · NATURAL · DELICIOUS</span>
          </div>
          <h1 className="hero__title">
            Signature<br />
            <em className="hero__title-italic">Meals &amp;</em>
            <em className="hero__title-italic">Juices</em>
          </h1>
          <p className="hero__sub">
            Authentic Nigerian flavors, vibrant fresh juices, and nourishing
            smoothies — crafted with love and served with pride.
          </p>
          <div className="hero__cta-row">
            <button className="hero__btn-primary" onClick={() => scrollTo(menuRef)}>
              EXPLORE MEALS
            </button>
            <button className="hero__btn-secondary" onClick={() => scrollTo(menuRef)}>
              FRESH JUICES
            </button>
          </div>
        </div>
      </section>

      {/* ── ZOETIC BRAND BANNER ── */}
      <div style={{
        background: "linear-gradient(135deg, rgba(255,107,0,0.08), rgba(255,107,0,0.03))",
        borderTop: "1px solid rgba(255,107,0,0.15)",
        borderBottom: "1px solid rgba(255,107,0,0.15)",
        padding: "18px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        flexWrap: "wrap",
        textAlign: "center",
      }}>
        <img
          src={zoeticLogo}
          alt="Zoetic Foods & Drinks"
          style={{ height: "52px", objectFit: "contain" }}
          onError={e => e.target.style.display = "none"}
        />
        <p style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "0.9rem",
          margin: 0,
          lineHeight: 1.5,
        }}>
          <strong style={{ color: "#FF6B00" }}>Zamar Meals</strong> is a brand of{" "}
          <strong style={{ color: "#fff" }}>Zoetic Foods &amp; Drinks</strong>
          {" "}— taste · nourish · energize
        </p>
      </div>

      {/* ── MENU ── */}
      <section ref={menuRef} className="menu-section">
        <SectionTitle sub="What We Serve" accent="#FF6B00">
          Our Full Menu
        </SectionTitle>

        <div className="menu-tabs">
          {[["Food", "🍽 Foods"], ["Juice", "🥤 Juices"], ["Smoothie", "🥤 Smoothies"]].map(([tab, label]) => (
            <button
              key={tab}
              className={`menu-tab ${menuTab === tab ? "menu-tab--active" : "menu-tab--inactive"}`}
              onClick={() => setMenuTab(tab)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="card-grid">
          {currentItems.map((item, i) => (
            <MenuCard
              key={item.id}
              item={item}
              delay={i * 45}
              selected={!!selected.find(s => s.id === item.id)}
              onToggle={toggleItem}
            />
          ))}
        </div>

        {selected.length > 0 && (
          <div className="cart-bar">
            <div>
              <span className="cart-bar__label">
                {selected.length} item{selected.length !== 1 ? "s" : ""} in your order
              </span>
              <div className="cart-bar__chips">
                {selected.map(i => (
                  <span
                    key={i.id}
                    className="cart-bar__chip"
                    onClick={() => toggleItem(i)}
                    style={{ background: `${i.color}1a`, border: `1px solid ${i.color}44` }}
                  >
                    {i.name} ×
                  </span>
                ))}
              </div>
            </div>
            <button className="cart-bar__proceed" onClick={() => scrollTo(orderRef)}>
              Proceed to Order →
            </button>
          </div>
        )}
      </section>

      {/* ── ORDER FORM ── */}
      <section ref={orderRef} className="order-section">
        <div className="order-inner">
          <SectionTitle sub="Ready to Eat?" accent="#27AE60">
            Place Your Order
          </SectionTitle>

          {submitStatus === "success" ? (
            <SuccessScreen onReset={resetForm} />
          ) : (
            <form className="order-form" onSubmit={handleSubmit}>

              {/* Selected Items */}
              <div
                className="selected-box"
                style={{ border: `1.5px solid ${errors.items ? "#FF5555" : "rgba(255,255,255,0.06)"}` }}
              >
                <div className="selected-box__header">
                  <span className="selected-box__label">
                    Selected Items
                    {errors.items && (
                      <span className="selected-box__err">⚠ {errors.items}</span>
                    )}
                  </span>
                  <button
                    type="button"
                    className="selected-box__browse"
                    onClick={() => scrollTo(menuRef)}
                  >
                    + Browse Menu
                  </button>
                </div>
                {selected.length === 0 ? (
                  <p className="selected-box__empty">
                    No items selected — browse the menu and tap to add
                  </p>
                ) : (
                  <div className="selected-box__chips">
                    {selected.map(i => (
                      <span
                        key={i.id}
                        className="selected-chip"
                        onClick={() => toggleItem(i)}
                        style={{ background: `${i.color}1a`, border: `1px solid ${i.color}44` }}
                      >
                        {i.name} <span className="selected-chip__x">×</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* ── ORDER SUMMARY + PAYMENT ── */}
              <OrderSummary selected={selected} />

              <Divider label="Your Contact" />

              <div className="form-row">
                <Field label="Your Name" req error={errors.customerName}>
                  <input
                    type="text" placeholder="e.g. Amina Bello"
                    value={form.customerName} onChange={f("customerName")}
                    className={ic(errors.customerName)}
                  />
                </Field>
                <Field label="Your Phone" req error={errors.customerPhone}>
                  <input
                    type="tel" placeholder="+234 800 000 0000"
                    value={form.customerPhone} onChange={f("customerPhone")}
                    className={ic(errors.customerPhone)}
                  />
                </Field>
              </div>

              <Field label="Your Email (optional)">
                <input
                  type="email" placeholder="you@example.com"
                  value={form.customerEmail} onChange={f("customerEmail")}
                  className="form-input"
                />
              </Field>

              <Divider label="Recipient (if different)" />

              <div className="recipient-box">
                <p className="recipient-box__hint">Leave blank if you are the recipient</p>
                <div className="form-row">
                  <Field label="Recipient Name">
                    <input
                      type="text" placeholder="e.g. Emeka Johnson"
                      value={form.recipientName} onChange={f("recipientName")}
                      className="form-input"
                    />
                  </Field>
                  <Field label="Recipient Phone">
                    <input
                      type="tel" placeholder="+234 800 000 0000"
                      value={form.recipientPhone} onChange={f("recipientPhone")}
                      className="form-input"
                    />
                  </Field>
                </div>
              </div>

              <Divider label="Delivery Details" />

              <Field label="Full Delivery Address" req error={errors.deliveryAddress}>
                <input
                  type="text"
                  placeholder="e.g. 14 Adewale Street, Surulere, Lagos"
                  value={form.deliveryAddress} onChange={f("deliveryAddress")}
                  className={ic(errors.deliveryAddress)}
                />
              </Field>

              <Field label="Area / Zone" req error={errors.deliveryArea}>
                <select
                  value={form.deliveryArea} onChange={f("deliveryArea")}
                  className={sc(errors.deliveryArea)}
                >
                  <option value="">Select your area…</option>
                  {DELIVERY_AREAS.map(area => (
                    <option key={area} value={area}>{area}</option>
                  ))}
                </select>
              </Field>

              <Field label="Special Instructions (optional)">
                <textarea
                  rows={3}
                  placeholder="Dietary requirements, spice level, delivery time preference, gate code…"
                  value={form.instructions} onChange={f("instructions")}
                  className="form-textarea"
                />
              </Field>

              <button
                type="submit"
                className="submit-btn"
                disabled={submitStatus === "sending"}
              >
                {submitStatus === "sending" ? (
                  <><span className="spinner" /> Sending your order…</>
                ) : "🚀 Send My Order"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__grid">
            <div>
              <img
                src={LOGO_URL} alt="Zamar"
                className="footer__logo"
                onError={e => e.target.style.display = "none"}
              />
              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.72rem", margin: "6px 0 8px", letterSpacing: "0.05em" }}>
                A brand of Zoetic Foods &amp; Drinks
              </p>
              <p className="footer__tagline">
                Real food, real nourishment. Premium Nigerian cuisine and fresh wholesome
                drinks — made with love every day.
              </p>
            </div>
            <div>
              <h4 className="footer__heading">Contact</h4>
              {[
                ["📧", "zamarmeals@gmail.com", null],
                ["📍", "Lagos, Nigeria", null],
                ["🕘", "Mon – Sat: 8:00 AM – 8:00 PM", null],
                ["💬", "+234 813 432 5676", WHATSAPP_URL],
              ].map(([icon, val, href]) => (
                <div key={val} className="footer__contact-item">
                  <span style={{ fontSize: "1rem", flexShrink: 0 }}>{icon}</span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", textDecoration: "none", fontWeight: 700 }}>{val}</a>
                  ) : (
                    <span>{val}</span>
                  )}
                </div>
              ))}
            </div>
            <div>
              <h4 className="footer__heading">Follow Us</h4>
              <div className="footer__social-row">
                {SOCIAL_ICONS.map(({ label, svg, href }) => (
                  <a key={label} href={href || "#"} target="_blank" rel="noopener noreferrer" className="social-btn" title={label}>{svg}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span className="footer__copy">
              © {new Date().getFullYear()} Zamar Meals — A Brand of Zoetic Foods &amp; Drinks. All rights reserved.
            </span>
            <span className="footer__made">Made with ❤️ </span>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        title="Chat with us on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="whatsapp-float__label">Chat with us</span>
      </a>

    </div>
  );
}