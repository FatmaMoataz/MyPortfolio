import { Card } from '@tremor/react';
import { motion } from 'framer-motion';

export function CardComponent() {
  const stats = [
    { name: "Total Projects", value: "50+" },
    { name: "Technologies", value: "25+"},
    { name: "Internships", value: "5+" },
    { name: "Hackathons", value: "1" },
  ];

  return (
    <div className='grid grid-cols-2 gap-2'>
      {stats.map((item) => (
<motion.div 
            whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          key={item.name}
          className='grid grid-col-2'
>
          <Card

          className="mx-auto bg-[#1E293B] border-none ring-1 ring-white/10 rounded-lg grid place-items-center p-6"
        >
          <p className="text-tremor-default text-slate-400">{item.name}</p>
          <p className="text-3xl text-white font-bold">{item.value}</p>
        </Card>
</motion.div>
      ))}
    </div>
  );
}