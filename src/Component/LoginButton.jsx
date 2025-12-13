
import { FaGoogle } from "react-icons/fa";


const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export default function LoginButton() {
  const googleLogin = () => {
    const redirectUri = "http://localhost:5173/auth/google/callback";
    const url =
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      new URLSearchParams({
        client_id: GOOGLE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: "code",
        scope: "openid email profile",
        access_type: "offline",
        prompt: "consent",
      });
    window.location.href = url;
  };

  return (
    <button
      onClick={googleLogin}
      className="px-5 py-3 bg-blue-600 text-white rounded-lg cursor-pointer"
    >
      Login with Google <FaGoogle className="float-end mt-1 ml-2" />
    </button>
  );
}
