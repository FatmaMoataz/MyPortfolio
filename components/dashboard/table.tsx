

export const TableComponent = () => {
  const projects = [
    {
      name: "Graduation Project",
      tech: "React + NodeJs",
      status: "In Progress",
      color: "yellow",
    },
    {
      name: "FreshCart",
      tech: "React",
      status: "Completed",
      color: "green",
    },
    {
      name: "Portfolio",
      tech: "Next.js",
      status: "Completed",
      color: "green",
    },
  ];

  return (
      <div className="bg-[#1E293B] p-6 rounded-lg border border-white/10 shadow-xl">
      <h3 className="text-[#E2E8F0] text-lg font-medium mb-4">Recent Project Status</h3>
      
      {/* Header */}
      <div className="grid grid-cols-3 gap-4 p-3 border-b border-white/5 text-slate-400 text-sm mb-2">
        <div>Project Name</div>
        <div>Technology</div>
        <div className="text-right">Status</div>
      </div>
      
      {/* Rows with gap */}
      <div className="space-y-2">
        {projects.map((item) => (
          <div key={item.name} className="grid grid-cols-3 gap-4 p-3 bg-[#1E293B] hover:bg-white/5 rounded-lg transition-colors border border-white/5">
            <div className="text-white font-medium">{item.name}</div>
            <div>
              <span className="px-2 py-1 bg-[#8b5cf6]/10 text-[#8b5cf6] rounded text-xs border border-[#8b5cf6]/20">
                {item.tech}
              </span>
            </div>
<div className="text-right">
  <span className={`px-2 py-1 rounded text-xs capitalize font-medium
    ${item.color === 'green' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 
      item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' : 
      'bg-gray-500/20 text-gray-400 border border-gray-500/30'}`}>
    {item.status}
  </span>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};