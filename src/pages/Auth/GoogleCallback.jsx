import { useEffect } from "react";

export default function GoogleCallback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code,
          redirect_uri: "http://localhost:5173/auth/google/callback",
        }),
      })
        .then(res => res.json())
        .then(data => {
          localStorage.setItem("token", data.token);
          window.location.href = "/";
        })
        .catch(console.error);
    }
  }, []);

  return <p>Signing in...</p>;
}
