import { useState, useEffect } from "react";
import { getTimeline } from "../utils/timeline";
import TimelineEntry from "../Components/TimelineEntry";

export default function TimelinePage() {
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    const data = getTimeline();
    const timer = setTimeout(() => {
      setEntries(data || []);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const filtered = entries.filter((e) => {
    const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || e.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <>
      <h1 className="text-2xl font-bold text-green-brand mb-5">Timeline</h1>

      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            placeholder="Filter timeline"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-12 py-3 bg-white border border-stone-200 rounded-md text-sm text-gray-800 focus:outline-none focus:border-green-brand shadow-sm transition-colors"
          />
          
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center border-l border-stone-200 pl-1">
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="bg-transparent border-none text-gray-400 text-[10px] uppercase font-bold cursor-pointer focus:ring-0 appearance-none pr-4"
              style={{ 
                backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239ca3af%22%20stroke-width%3D%223%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'right center', 
                backgroundSize: '10px' 
              }}
            >
              <option value="all">All</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Video</option>
            </select>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 bg-white border border-dashed border-stone-200 rounded-2xl">
          <div className="text-5xl mb-4">⏳</div>
          <p className="font-semibold text-stone-500">No interactions logged yet.</p>
          <p className="text-xs mt-2 px-10">
            Log a call or text from a friend's profile to see history here!
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map((entry) => (
            <TimelineEntry key={entry.id} entry={entry} />
          ))}
        </div>
      )}
    </>
  );
}