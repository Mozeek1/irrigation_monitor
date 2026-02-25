import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CloudRain } from "lucide-react";
import { Card } from "./Card";

interface RainfallData {
  day: string;
  amount: number;
}

interface RainfallChartProps {
  data: RainfallData[];
}

export function RainfallChart({ data }: RainfallChartProps) {
  return (
    <Card title="Historical Rainfall" icon={CloudRain} className="col-span-1 md:col-span-2 lg:col-span-3">
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#27272a" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#71717a', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#71717a', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: '#27272a' }}
              contentStyle={{ 
                backgroundColor: '#18181b', 
                borderRadius: '8px', 
                border: '1px solid #27272a', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
                color: '#f4f4f5'
              }}
            />
            <Bar 
              dataKey="amount" 
              fill="#22c55e" 
              radius={[4, 4, 0, 0]} 
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
