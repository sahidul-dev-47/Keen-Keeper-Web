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

     
    </div>
  );
}