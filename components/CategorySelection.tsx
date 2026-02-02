"use client";

import { motion } from "framer-motion";
import { Utensils, Cookie, Coffee } from "lucide-react";

export type FoodCategory = "main" | "snack" | "drink";

interface CategoryOption {
  id: FoodCategory;
  name: string;
  icon: React.ReactNode;
  emoji: string;
  description: string;
  gradient: string;
}

const categories: CategoryOption[] = [
  {
    id: "main",
    name: "อาหารหลัก",
    icon: <Utensils className="h-8 w-8" />,
    emoji: "🍛",
    description: "ข้าว ก๋วยเตี๋ยว อาหารจานเดียว",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "snack",
    name: "ของกินเล่น",
    icon: <Cookie className="h-8 w-8" />,
    emoji: "🍿",
    description: "ขนม ของทานเล่น ของว่าง",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    id: "drink",
    name: "เครื่องดื่ม",
    icon: <Coffee className="h-8 w-8" />,
    emoji: "🧋",
    description: "ชา กาแฟ น้ำผลไม้ สมูทตี้",
    gradient: "from-cyan-500 to-blue-500",
  },
];

interface CategorySelectionProps {
  onSelect: (category: FoodCategory) => void;
}

export function CategorySelection({ onSelect }: CategorySelectionProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-zinc-950 px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <h1 className="mb-2 text-4xl font-bold">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            วันนี้อยากกินอะไร?
          </span>
        </h1>
        <p className="text-zinc-500">เลือกประเภทอาหารที่ต้องการ</p>
      </motion.div>

      {/* Category Cards */}
      <div className="flex w-full max-w-md flex-col gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 10 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(category.id)}
            className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-6 text-left transition-all hover:bg-zinc-800"
          >
            {/* Gradient Background on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 transition-opacity group-hover:opacity-10`}
            />

            <div className="relative flex items-center gap-4">
              {/* Icon */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-r ${category.gradient} text-white shadow-lg`}
              >
                <span className="text-3xl">{category.emoji}</span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <h2 className="mb-1 text-xl font-bold text-white">
                  {category.name}
                </h2>
                <p className="text-sm text-zinc-400">{category.description}</p>
              </div>

              {/* Arrow */}
              <motion.div
                className="text-zinc-600 transition-colors group-hover:text-white"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center text-sm text-zinc-600"
      >
        ✨ เลือกแล้วปัดเพื่อหาร้านที่ใช่!
      </motion.p>
    </div>
  );
}
