import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PreloaderTestPage() {
  const navigate = useNavigate();

  function replay() {
    sessionStorage.removeItem("ds_loaded");
    window.location.href = "/";
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0A0A0B",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        fontFamily: "JetBrains Mono, monospace",
      }}
    >
      <p style={{ color: "#9CA1A8", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
        Preloader Test
      </p>
      <button
        onClick={replay}
        style={{
          background: "#E01B22",
          color: "#fff",
          border: "none",
          borderRadius: 999,
          padding: "14px 36px",
          fontFamily: "inherit",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        ▶ Replay Loading Screen
      </button>
      <button
        onClick={() => navigate("/")}
        style={{
          background: "transparent",
          color: "#8B9096",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999,
          padding: "12px 28px",
          fontFamily: "inherit",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        ← Back to site
      </button>
    </div>
  );
}
