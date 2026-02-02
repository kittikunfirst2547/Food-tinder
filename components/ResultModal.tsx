"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FoodItem } from "@/types/food";
import Image from "next/image";
import { MapPin, Star, Navigation, RotateCcw } from "lucide-react";

interface ResultModalProps {
  isOpen: boolean;
  selectedFood: FoodItem | null;
  likedFoods: FoodItem[];
  onClose: () => void;
  onRestart: () => void;
}

const CONFETTI_COLORS = ["#10b981", "#f59e0b", "#ef4444", "#3b82f6", "#8b5cf6"];

interface ConfettiData {
  left: number;
  rotate: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  color: string;
}

export function ResultModal({
  isOpen,
  selectedFood,
  likedFoods,
  onClose,
  onRestart,
}: ResultModalProps) {
  // Pre-compute random values once
  const confettiData = useMemo<ConfettiData[]>(() => {
    return [...Array(20)].map((_, i) => ({
      left: Math.random() * 100,
      rotate: Math.random() * 360,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 0.5,
      repeatDelay: Math.random() * 2,
      color: CONFETTI_COLORS[i % 5],
    }));
  }, []);

  if (!selectedFood) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Confetti Effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              {confettiData.map((confetti, i) => (
                <motion.div
                  key={i}
                  className="absolute h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: confetti.color,
                    left: `${confetti.left}%`,
                  }}
                  initial={{ y: -20, opacity: 1 }}
                  animate={{
                    y: 500,
                    opacity: 0,
                    rotate: confetti.rotate,
                  }}
                  transition={{
                    duration: confetti.duration,
                    delay: confetti.delay,
                    repeat: Infinity,
                    repeatDelay: confetti.repeatDelay,
                  }}
                />
              ))}
            </div>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-2 text-5xl"
              >
                🎉
              </motion.div>
              <h2 className="text-2xl font-bold text-white">
                วันนี้กินที่นี่!
              </h2>
              <p className="mt-1 text-emerald-100">
                ระบบสุ่มเลือกจาก {likedFoods.length} เมนูที่คุณชอบ
              </p>
            </div>

            {/* Selected Food */}
            <div className="p-6">
              <div className="relative mb-4 aspect-video overflow-hidden rounded-2xl">
                <Image
                  src={selectedFood.image}
                  alt={selectedFood.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              <h3 className="mb-2 text-2xl font-bold text-white">
                {selectedFood.name}
              </h3>
              <p className="mb-4 text-zinc-400">{selectedFood.category}</p>

              {/* Restaurant Info */}
              <div className="rounded-2xl bg-zinc-800/50 p-4">
                <div className="mb-3 flex items-start gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-xl">
                    <Image
                      src={selectedFood.restaurant.image}
                      alt={selectedFood.restaurant.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {selectedFood.restaurant.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span>{selectedFood.restaurant.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-400">
                  <MapPin className="h-4 w-4" />
                  <span>{selectedFood.restaurant.address}</span>
                </div>

                <div className="mt-2 flex items-center gap-2 text-sm text-emerald-400">
                  <Navigation className="h-4 w-4" />
                  <span>ห่างจากคุณ {selectedFood.restaurant.distance} กม.</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRestart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-800 px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  <RotateCcw className="h-5 w-5" />
                  เลือกใหม่
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 px-4 py-3 font-medium text-white shadow-lg shadow-emerald-500/30"
                >
                  <Navigation className="h-5 w-5" />
                  หาร้านใกล้ฉัน
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
