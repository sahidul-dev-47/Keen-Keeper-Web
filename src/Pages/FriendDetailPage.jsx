import { useParams, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import toast from "react-hot-toast";
import friends from "../data/friends.json";
import StatusBadge from "../Components/StatusBadge";
import { addTimelineEntry } from "../utils/timeline";

export default function FriendDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const friend = friends.find((f) => f.id === Number(id));

  const logCheckin = useCallback((type) => {
    const label = type.charAt(0).toUpperCase() + type.slice(1);
    const timestamp = Date.now();
    const formattedDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    addTimelineEntry({
      id: timestamp,
      type,
      title: `${label} with ${friend?.name}`,
      date: formattedDate,
    });

    toast(`✅ ${label} logged with ${friend?.name}!`);
  }, [friend]);

  if (!friend) {
    return (
      <div className="text-center py-20">
        <h2 className="text-6xl font-bold text-green-brand mb-2">404</h2>
        <p className="text-gray-400 mb-4">Friend not found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-green-brand text-white px-6 py-2 rounded-lg hover:bg-green-light transition-colors"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1.5 text-green-brand font-semibold text-sm mb-5 hover:underline"
      >
        ← Back to Friends
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left Side: Profile & Separate Buttons */}
        <div className="flex flex-col gap-4">
          
          {/* 1. Profile Info Card (Image, Bio, Status) */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 text-center shadow-sm">
            <img
              src={friend.picture}
              alt={friend.name}
              className="w-24 h-24 rounded-full object-cover object-top mx-auto mb-4 border-4 border-green-pale"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(friend.name)}&background=1e5c3a&color=fff`;
              }}
            />
            <h2 className="text-xl font-bold mb-2">{friend.name}</h2>
            
            <div className="flex flex-col items-center gap-2 mb-3">
              <StatusBadge status={friend.status} />
              <div className="flex flex-wrap justify-center gap-1">
                {friend.tags.map((t) => (
                  <span key={t} className="bg-green-50 text-green-700 text-[10px] font-bold uppercase px-3 py-0.5 rounded-full border border-green-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-400 italic mb-2">"{friend.bio}"</p>
            <p className="text-sm text-green-light">{friend.email}</p>
          </div>

          {/* 2. Individual Buttons (Each with its own background) */}
          <button className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-stone-200 text-stone-600 rounded-2xl font-medium shadow-sm hover:bg-stone-50 transition-colors">
            <span>⏰</span> Snooze 2 Weeks
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-4 bg-white border border-stone-200 text-stone-600 rounded-2xl font-medium shadow-sm hover:bg-stone-50 transition-colors">
            <span>📦</span> Archive
          </button>

          <button className="w-full flex items-center justify-center gap-2 py-4 bg-stone-50 border border-stone-100 text-stone-600 rounded-2xl font-medium shadow-sm hover:bg-stone-100 transition-colors">
            <span>🗑️</span> Delete
          </button>
        </div>

        {/* Right Side: Stats & Quick Check-In */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Days Since Contact", value: friend.days_since_contact },
              { label: "Goal (Days)", value: friend.goal },
              { label: "Next Due", value: friend.next_due_date },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-stone-200 rounded-xl p-4 text-center shadow-sm">
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <p className="text-2xl font-bold text-green-brand">{value}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-green-brand text-sm">Relationship Goal</h3>
              <button className="border border-stone-200 text-gray-400 text-xs px-3 py-1 rounded-md hover:bg-stone-50 transition-colors">
                Edit
              </button>
            </div>
            <p className="text-sm text-gray-400 italic">Connect every {friend.goal} days</p>
          </div>

          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm">
            <h3 className="font-bold text-green-brand text-sm mb-3">Quick Check-In</h3>
            <div className="flex gap-3">
              {[
                { type: "call", icon: "📞", label: "Call" },
                { type: "text", icon: "💬", label: "Text" },
                { type: "video", icon: "🎥", label: "Video" },
              ].map(({ type, icon, label }) => (
                <button
                  key={type}
                  onClick={() => logCheckin(type)}
                  className="flex-1 flex flex-col items-center justify-center gap-2 py-6 bg-stone-50 border border-stone-100 rounded-xl text-sm font-medium hover:bg-green-brand hover:text-black transition-all duration-200"
                >
                  <span className="text-xl">{icon}</span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}