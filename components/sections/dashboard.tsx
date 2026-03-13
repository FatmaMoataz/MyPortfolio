import { BarChartComponent } from '../dashboard/barChart'
import { CardComponent } from '../dashboard/card'
import { DonutChartComponent } from '../dashboard/donutChart'
import { LineChartComponent } from '../dashboard/lineChart'
import { TableComponent } from '../dashboard/table'
import { motion } from 'framer-motion'

export default function dashboard() {
  return (
<motion.div id='dashboard' className='w-full px-10 py-24'>
          <motion.h1 
           initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center text-white">
        My <span className="text-[#8b5cf6]">Dashboard</span>
      </motion.h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <CardComponent/>
        <BarChartComponent/>
        <DonutChartComponent/>
        <LineChartComponent/>
    </div>
    <div className="my-2"> <TableComponent/></div>
</motion.div>
  )
}
