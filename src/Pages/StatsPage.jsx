import { useState, useEffect, useMemo } from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { getTimeline } from "../utils/timeline";

const COLORS = { call: "#2563eb", text: "#059669", video: "#7c3aed" };

export default function StatsPage() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const data = getTimeline();
    const timer = setTimeout(() => {
      setEntries(data || []);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const chartData = useMemo(() => {
    const counts = { call: 0, text: 0, video: 0 };
    entries.forEach((e) => {
      if (counts[e.type] !== undefined) counts[e.type]++;
    });

    return [
      { name: "Call", value: counts.call, color: COLORS.call },
      { name: "Text", value: counts.text, color: COLORS.text },
      { name: "Video", value: counts.video, color: COLORS.video },
    ].filter((d) => d.value > 0);
  }, [entries]);

  return (
    <>
      <h1 className="text-2xl font-bold text-green-brand mb-6">
        Friendship Analytics
      </h1>

      <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-sm">
        <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wider">
          By Interaction Type
        </p>

        {chartData.length === 0 ? (
          <div className="text-center py-20 bg-stone-50 rounded-xl border border-dashed border-stone-200">
            <p className="text-gray-400">No interactions logged yet.</p>
          </div>
        ) : (
          <div className="w-full flex justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={85}
                  outerRadius={125}
                  paddingAngle={8}
                  dataKey="value"
                  isAnimationActive={true}
                  animationBegin={0}
                  animationDuration={1500}
                  animationEasing="ease-out"
                  stroke="none"
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color} 
                      style={{ outline: 'none' }}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: "12px", 
                    border: "none", 
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)" 
                  }} 
                />
                <Legend 
                  verticalAlign="bottom" 
                  height={36} 
                  iconType="circle"
                  formatter={(value) => <span className="text-gray-600 font-medium px-2">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </>
  );
}