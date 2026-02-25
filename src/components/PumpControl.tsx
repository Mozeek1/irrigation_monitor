import { Droplets, Power } from "lucide-react";
import { Card } from "./Card";
import { cn } from "../lib/utils";

interface PumpControlProps {
  isOn: boolean;
  onToggle: () => void;
}

export function PumpControl({ isOn, onToggle }: PumpControlProps) {
  return (
    <Card title="Pump Status" icon={Power}>
      <div className="flex flex-col items-center justify-center py-4">
        <button
          onClick={onToggle}
          className={cn(
            "relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg",
            isOn
              ? "bg-green-500 shadow-green-900/50 ring-4 ring-green-500/20"
              : "bg-zinc-800 shadow-black/20 ring-4 ring-zinc-800"
          )}
        >
          <Droplets
            className={cn(
              "w-10 h-10 transition-all duration-500",
              isOn ? "text-white scale-110" : "text-zinc-600 scale-100"
            )}
          />
        </button>
        <div className="mt-6 text-center">
          <div className="text-2xl font-semibold text-zinc-100">
            {isOn ? "Active" : "Idle"}
          </div>
          <p className="text-sm text-zinc-500 mt-1">
            {isOn ? "Watering in progress" : "System is in standby"}
          </p>
        </div>
      </div>
    </Card>
  );
}
