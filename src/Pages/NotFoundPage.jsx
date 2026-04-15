import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-24">
      <h1 className="text-8xl font-bold text-green-brand mb-3">404</h1>
      <p className="text-gray-400 text-lg mb-6">
        Oops — this page doesn't exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-green-300 text-black font-semibold px-6 py-2.5 rounded-lg hover:bg-green-700 transition-colors"
      >
        Go Home
      </button>
    </div>
  );
}