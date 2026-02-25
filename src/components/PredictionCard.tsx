import { CalendarClock, Droplet } from "lucide-react";
import { Card } from "./Card";

interface PredictionProps {
  nextIrrigation: Date;
  durationMinutes: number;
  waterAmountLiters: number;
}

export function PredictionCard({ nextIrrigation, durationMinutes, waterAmountLiters }: PredictionProps) {
  const timeString = nextIrrigation.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = nextIrrigation.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });

  // Calculate time remaining roughly
  const now = new Date();
  const diffMs = nextIrrigation.getTime() - now.getTime();
  const diffHrs = Math.round(diffMs / (1000 * 60 * 60));

  return (
    <Card title="Next Irrigation Cycle" icon={CalendarClock}>
      <div className="space-y-6">
        <div>
          <div className="text-sm text-zinc-500 mb-1">Scheduled for</div>
          <div className="text-2xl font-bold text-zinc-100">{timeString}</div>
          <div className="text-sm text-zinc-400">{dateString}</div>
          <div className="text-xs text-green-400 font-medium mt-2 bg-green-500/10 inline-block px-2 py-1 rounded border border-green-500/20">
            in approx {diffHrs} hours
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
          <div>
            <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Duration</div>
            <div className="font-semibold text-zinc-200">{durationMinutes} min</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Volume</div>
            <div className="flex items-center gap-1 font-semibold text-zinc-200">
              <Droplet className="w-3 h-3 text-blue-400 fill-blue-400" />
              {waterAmountLiters} L
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
