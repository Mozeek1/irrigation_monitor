import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface CardProps {
  title: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export function Card({ title, icon: Icon, children, className }: CardProps) {
  return (
    <div className={cn("bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-800", className)}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-zinc-400 font-medium text-sm uppercase tracking-wider">{title}</h3>
        {Icon && <Icon className="w-5 h-5 text-zinc-500" />}
      </div>
      {children}
    </div>
  );
}
