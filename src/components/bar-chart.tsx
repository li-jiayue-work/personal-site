"use client";

interface BarItem {
  label: string;
  value: number;
}

interface Props {
  data: BarItem[];
  className?: string;
}

export function BarChart({ data, className = "" }: Props) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <div className={`space-y-2 ${className}`}>
      {data.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <span className="w-20 sm:w-24 text-xs text-muted-foreground shrink-0 text-right truncate">
            {item.label}
          </span>
          <div className="flex-1 h-6 bg-accent rounded-sm overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-chart-2 rounded-sm transition-all duration-700"
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </div>
          <span className="w-12 text-xs font-mono text-muted-foreground shrink-0">
            {item.value.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
