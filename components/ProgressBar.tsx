"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  liked: number;
}

export function ProgressBar({ current, total, liked }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-md">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-zinc-400">
          ปัดไปแล้ว <span className="font-semibold text-white">{current}</span>{" "}
          / {total} เมนู
        </span>
        <span className="text-emerald-400">
          ❤️ น่ากิน: <span className="font-semibold">{liked}</span>
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
