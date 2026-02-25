import { Sprout } from "lucide-react";
import { Card } from "./Card";

interface SoilSensorProps {
  moistureLevel: number; // 0-100
}

export function SoilSensor({ moistureLevel }: SoilSensorProps) {
  const getStatus = (level: number) => {
    if (level < 30) return { label: "Dry", color: "text-red-400" };
    if (level < 60) return { label: "Moist", color: "text-green-400" };
    return { label: "Wet", color: "text-blue-400" };
  };

  const status = getStatus(moistureLevel);

  return (
    <Card title="Soil Moisture" icon={Sprout}>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-4xl font-bold text-zinc-100">
            {moistureLevel}%
          </div>
          <div className={`font-medium mt-1 ${status.color}`}>
            {status.label}
          </div>
        </div>
        <div className="h-24 w-8 bg-zinc-800 rounded-full overflow-hidden relative border border-zinc-700">
          <div
            className="absolute bottom-0 left-0 right-0 bg-green-500 transition-all duration-1000 ease-out"
            style={{ height: `${moistureLevel}%` }}
          />
        </div>
      </div>
      <div className="mt-4 w-full bg-zinc-800 rounded-full h-2">
        <div
          className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          style={{ width: `${moistureLevel}%` }}
        />
      </div>
    </Card>
  );
}
