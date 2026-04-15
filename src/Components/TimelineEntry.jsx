const icons = { call: "📞", text: "💬", video: "🎥" };

const bgClass = {
  call: "bg-blue-100 text-blue-600",
  text: "bg-emerald-100 text-emerald-600",
  video: "bg-violet-100 text-violet-600",
};

export default function TimelineEntry({ entry }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl px-5 py-4 flex items-center gap-4">
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center text-base flex-shrink-0 ${
          bgClass[entry.type] || bgClass.call
        }`}
      >
        {icons[entry.type] || "📞"}
      </div>

      <div>
        <p className="font-semibold text-sm text-gray-900">
          {entry.title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {entry.date}
        </p>
      </div>
    </div>
  );
}