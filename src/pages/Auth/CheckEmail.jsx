
export default function CheckEmail() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800">
          📧 Please check your email!
        </h2>
        <p className="mt-2 text-gray-600">
          We have sent a verification link to your email address.
        </p>

        <a
          href="/login"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}