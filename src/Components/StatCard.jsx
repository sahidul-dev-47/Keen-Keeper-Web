export default function StatCard({ label, value, colorClass }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-5 text-center">
      <p className={`text-3xl font-bold ${colorClass}`}>{value}</p>
      <p className="text-xs text-gray-400 mt-1 italic">{label}</p>
    </div>
  );
}