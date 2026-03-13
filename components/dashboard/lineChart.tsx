"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const chartdata = [
{ date: "Oct 25", Commits: 10 },
  { date: "Nov 25", Commits: 22 },
  { date: "Dec 25", Commits: 18 },
  { date: "Jan 26", Commits: 25 },
  { date: "Feb 26", Commits: 35 },
  { date: "Mar 26", Commits: 50 },
];

export function LineChartComponent() {
  return (
    <div className="bg-[#1E293B] p-6 rounded-lg border border-white/10 shadow-2xl">
      <h3 className="text-[#E2E8F0] text-lg font-medium">
        GitHub Contribution Activity
      </h3>
      <div className="h-72 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartdata}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis 
              dataKey="date" 
              stroke="#94A3B8"
              tick={{ fill: '#94A3B8' }}
            />
            <YAxis 
              stroke="#94A3B8"
              tick={{ fill: '#94A3B8' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1E293B',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem',
                color: '#E2E8F0'
              }}
            />
            <Legend wrapperStyle={{ color: '#E2E8F0' }} />
            <Line 
              type="monotone" 
              dataKey="Commits" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6', strokeWidth: 2 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 text-xs text-slate-400 italic">
       Monthly contribution activity tracking
      </div>
    </div>
  );
}