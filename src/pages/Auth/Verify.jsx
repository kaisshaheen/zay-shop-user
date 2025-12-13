import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Verify() {
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let signedUrl = params.get("url");

    if (!signedUrl) {
      setStatus("error");
      setMessage("Verification link is missing.");
      return;
    }

    // 🔥 Decode the Laravel API URL
    signedUrl = decodeURIComponent(signedUrl);
    
    console.log("Decoded:", signedUrl);

    async function verifyEmail() {
      try {
        const response = await fetch(signedUrl);

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage("Your email has been verified successfully!");
        } else {
          setStatus("error");
          setMessage(data.message || "Verification failed.");
        }
      } catch {
        setStatus("error");
        setMessage("Network error. Please try later.");
      }
    }

    verifyEmail();
  }, []);

  const color = {
    loading: "text-gray-500",
    success: "text-green-600",
    error: "text-red-600",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        
        {status === "loading" && (
          <h2 className={`text-xl font-semibold ${color.loading}`}>
            ⏳ Verifying your email...
          </h2>
        )}

        {status === "success" && (
          <h2 className={`text-xl font-semibold ${color.success}`}>
            ✅ {message}
          </h2>
        )}

        {status === "error" && (
          <h2 className={`text-xl font-semibold ${color.error}`}>
            ❌ {message}
          </h2>
        )}

        {status !== "loading" && (
          <Link
            to="/login"
            className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go to Login
          </Link>
        )}
      </div>
    </div>
  );
}