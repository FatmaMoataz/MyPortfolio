import { BarChart } from '@tremor/react';

const chartdata = [
  {
    name: 'Frontend',
    'Project Count': 20,
  },
    {
    name: 'Data & ML',
    'Project Count': 9,
  },
  {
    name: 'Backend',
    'Project Count': 3,
  },
  {
    name: 'Fullstack',
    'Project Count': 3,
  },
{
    name: 'Flutter',
    'Project Count': 1,
  },
];

export const BarChartComponent = () => (
  <div className="bg-[#1E293B] p-6 rounded-lg border border-white/10 shadow-xl">
    <h3 className="text-white font-medium mb-4">Project Distribution by Domain</h3>
    <BarChart
      className="h-72 text-[#E2E8F0] fill-[#E2E8F0]"
      data={chartdata}
      index="name"
      categories={['Project Count']}
      colors={['#8B5CF6']}
      yAxisWidth={50}
      showAnimation={true}
      onValueChange={(v) => console.log(v)}
      tickGap={5}
    />
  </div>
);