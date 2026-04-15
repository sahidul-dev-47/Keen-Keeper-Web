import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

export default function FriendCard({ friend }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/friends/${friend.id}`)}
      className="bg-white border py-8 border-stone-200 rounded-xl overflow-hidden cursor-pointer
                 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg flex justify-center items-center flex-col space-y-3"
    >
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-20 h-20 object-cover object-top rounded-full mx-auto"
        onError={(e) => {
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            friend.name
          )}&background=1e5c3a&color=fff`;
        }}
      />

       <p className="font-bold text-sm text-gray-900 mb-0.5">
          {friend.name}
        </p>

        <p className="text-xs text-gray-400 mb-2 italic">
          {friend.days_since_contact}d ago
        </p>

         {friend.tags.map((tag) => (
            <span
              key={tag}
              className="bg-green-100 text-gray-500 text-xs px-2 py-0.5 rounded-full italic"
            >
              {tag}
            </span>
          ))}

        <StatusBadge status={friend.status} />
    </div>
  );
}