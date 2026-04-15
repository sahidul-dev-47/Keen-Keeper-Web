import { useState, useEffect } from "react";
import friends from "../data/friends.json";
import FriendCard from "../Components/FriendCard";
import StatCard from "../Components/StatCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import ventor from "../assets/Vector.svg";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => {
      setData(friends);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  const counts = {
    total: friends.length,
    overdue: friends.filter(f => f.status === "overdue").length,
    almost: friends.filter(f => f.status === "almost due").length,
    ontrack: friends.filter(f => f.status === "on-track").length,
  };

  return (
    <>
      <div className="bg-linear-to-br from-green-brand to-green-light text-white rounded-2xl text-center px-8 py-14 mb-8 relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-2 tracking-tight text-black">Friends to keep close in your life</h1>
          <p className="text-gray-500 font-medium mb-6 text-sm max-w-xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.
          </p>
          <button className="bg-green-900 flex flex-row items-center justify-center gap-2 mx-auto text-green-brand font-bold px-6 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150">
             <img className="w-4 h-4" src={ventor} alt="" /> <span>Add a Friend</span> 
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total Friends" value={counts.total} colorClass="text-blue-600" />
        <StatCard label="Overdue" value={counts.overdue} colorClass="text-red-600" />
        <StatCard label="Almost Due" value={counts.almost} colorClass="text-yellow-600" />
        <StatCard label="On Track" value={counts.ontrack} colorClass="text-emerald-600" />
      </div>

      <h2 className="text-xl font-bold text-green-brand mb-4">Your Friends</h2>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map(f => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </div>
      )}
    </>
  );
}