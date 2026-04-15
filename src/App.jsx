import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";
import FriendDetailPage from "./Pages/FriendDetailPage";
import TimelinePage from "./Pages/TimelinePage";
import StatsPage from "./Pages/StatsPage";
import NotFoundPage from "./Pages/NotFoundPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-cream font-serif">
      <Toaster position="top-right" />
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/friends/:id" element={<FriendDetailPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />

     
    </div>
  );
}