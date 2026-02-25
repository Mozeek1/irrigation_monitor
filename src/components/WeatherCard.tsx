import { CloudRain, Leaf, Wind } from "lucide-react";
import { Card } from "./Card";

export function WeatherCard() {
  return (
    <Card title="Weather Forecast" icon={CloudRain} className="h-full">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-800">
          <div className="flex items-center gap-3">
            <CloudRain className="w-8 h-8 text-blue-400" />
            <div>
              <div className="font-medium text-zinc-100">Today</div>
              <div className="text-xs text-zinc-400">Light Rain</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-zinc-100">22°</div>
            <div className="text-xs text-zinc-400">60% Precip</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 hover:bg-zinc-800/30 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <Wind className="w-8 h-8 text-zinc-600" />
            <div>
              <div className="font-medium text-zinc-200">Tomorrow</div>
              <div className="text-xs text-zinc-500">Windy</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-zinc-200">24°</div>
            <div className="text-xs text-zinc-500">10% Precip</div>
          </div>
        </div>

        <div className="flex items-center justify-between p-3 hover:bg-zinc-800/30 rounded-lg transition-colors">
          <div className="flex items-center gap-3">
            <Leaf className="w-8 h-8 text-green-500" />
            <div>
              <div className="font-medium text-zinc-200">Wednesday</div>
              <div className="text-xs text-zinc-500">Sunny</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold text-zinc-200">26°</div>
            <div className="text-xs text-zinc-500">0% Precip</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
