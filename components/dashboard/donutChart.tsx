import { motion } from "framer-motion";

const techStack = [
  { name: 'JavaScript / React', amount: 45 },
  { name: 'Python / Data Science', amount: 25 },
  { name: 'Node.js / Backend', amount: 20 },
  { name: 'SQL / Databases', amount: 15 },
  { name: 'UI/UX (Figma)', amount: 10 },
];

const colors = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export function DonutChartComponent() {
  // Calculate cumulative percentages for the donut
  let cumulative = 0;
  const segments = techStack.map(item => {
    const start = cumulative;
    cumulative += item.amount;
    return {
      ...item,
      start,
      end: cumulative,
    };
  });

  // Convert to radians
  const toRadians = (percent: number) => (percent / 100) * 2 * Math.PI;
  
  // Calculate SVG paths
  const size = 200;
  const center = size / 2;
  const radius = 80;
  const holeRadius = 40;

  const getPath = (startPercent: number, endPercent: number) => {
    const start = toRadians(startPercent) - Math.PI / 2;
    const end = toRadians(endPercent) - Math.PI / 2;
    
    const x1 = center + radius * Math.cos(start);
    const y1 = center + radius * Math.sin(start);
    const x2 = center + radius * Math.cos(end);
    const y2 = center + radius * Math.sin(end);
    
    const x3 = center + holeRadius * Math.cos(end);
    const y3 = center + holeRadius * Math.sin(end);
    const x4 = center + holeRadius * Math.cos(start);
    const y4 = center + holeRadius * Math.sin(start);
    
    const largeArc = end - start > Math.PI ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${holeRadius} ${holeRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  return (
  <div className="flex flex-col items-center justify-center p-6 bg-[#1E293B] rounded-xl border border-white/10 shadow-2xl">
      <h3 className="text-[#E2E8F0] font-medium mb-6 text-center">Tech Stack Distribution</h3>
      
      <div className="relative w-full flex justify-center">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {segments.map((item, index) => (
            <motion.path
              key={item.name}
              d={getPath(item.start, item.end)}
              fill={colors[index]}
              stroke="#1E293B"
              strokeWidth="2"
            
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
             
              whileHover={{ 
                scale: 1.05, 
                filter: "brightness(1.2)",
                transition: { duration: 0.2 } 
              }}
            />
          ))}
         
          <motion.circle 
            cx="100" cy="100" r="40" 
            fill="#1E293B"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          />
        </svg>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-8 w-full">
        {techStack.map((item, index) => (
          <motion.div 
            key={item.name} 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <span 
              className="w-3 h-3 rounded-full shadow-[0_0_8px_rgba(139,92,246,0.5)]" 
              style={{ backgroundColor: colors[index] }}
            />
            <span className="text-[11px] text-[#E2E8F0] font-medium">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}