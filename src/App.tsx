/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Leaf, Settings, Wind } from "lucide-react";
import { PumpControl } from "./components/PumpControl";
import { SoilSensor } from "./components/SoilSensor";
import { PredictionCard } from "./components/PredictionCard";
import { RainfallChart } from "./components/RainfallChart";
import { WeatherCard } from "./components/WeatherCard";

// Mock Data
const MOCK_RAINFALL_DATA = [
  { day: "Mon", amount: 12 },
  { day: "Tue", amount: 5 },
  { day: "Wed", amount: 0 },
  { day: "Thu", amount: 2 },
  { day: "Fri", amount: 18 },
  { day: "Sat", amount: 8 },
  { day: "Sun", amount: 4 },
];

export default function App() {
  const [soilMoisture, setSoilMoisture] = useState(42);
  const [pumpOn, setPumpOn] = useState(false);
  const [nextIrrigation, setNextIrrigation] = useState<Date>(new Date());

  // Simulate sensor updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSoilMoisture((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        return Math.min(Math.max(newValue, 0), 100);
      });
    }, 3000);

    // Set next irrigation to tomorrow at 6 AM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(6, 0, 0, 0);
    setNextIrrigation(tomorrow);

    return () => clearInterval(interval);
  }, []);

  const handlePumpToggle = () => {
    setPumpOn(!pumpOn);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-green-500/30">
      {/* Header */}
      <header className="bg-zinc-900/50 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-green-500/10 p-2 rounded-lg border border-green-500/20">
              <Leaf className="w-6 h-6 text-green-500" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight text-white">MCEN <span className="text-zinc-500 font-normal">Smart Irrigation</span></h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-zinc-400 bg-zinc-800/50 border border-zinc-800 px-3 py-1.5 rounded-full">
              <Wind className="w-4 h-4" />
              <span>24°C, Sunny</span>
            </div>
            <button className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-lg shadow-green-900/20">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Status Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-white">System Overview</h2>
          <p className="text-zinc-500">Monitoring Zone A • Last synced 2 mins ago</p>
        </div>

        {/* Top Row: Sensors & Control */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <SoilSensor moistureLevel={soilMoisture} />
          <PumpControl isOn={pumpOn} onToggle={handlePumpToggle} />
        </div>

        {/* Middle Row: Predictions & Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <PredictionCard 
            nextIrrigation={nextIrrigation}
            durationMinutes={45}
            waterAmountLiters={120}
          />
          <WeatherCard />
        </div>

        {/* Bottom Row: Charts */}
        <div className="w-full">
          <RainfallChart data={MOCK_RAINFALL_DATA} />
        </div>
      </main>
    </div>
  );
}

