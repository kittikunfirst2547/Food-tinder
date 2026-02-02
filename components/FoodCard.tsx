"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { FoodItem } from "@/types/food";
import Image from "next/image";
import { Heart, X } from "lucide-react";

interface FoodCardProps {
  food: FoodItem;
  onSwipe: (direction: "left" | "right") => void;
  isTop: boolean;
}

export function FoodCard({ food, onSwipe, isTop }: FoodCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-25, 25]);
  const opacity = useTransform(x, [-300, -100, 0, 100, 300], [0, 1, 1, 1, 0]);

  // Overlay indicators
  const likeOpacity = useTransform(x, [0, 100, 200], [0, 0.5, 1]);
  const nopeOpacity = useTransform(x, [-200, -100, 0], [1, 0.5, 0]);

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 100;
    if (info.offset.x > threshold) {
      onSwipe("right");
    } else if (info.offset.x < -threshold) {
      onSwipe("left");
    }
  };

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, rotate, opacity }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={handleDragEnd}
      initial={{ scale: isTop ? 1 : 0.95, y: isTop ? 0 : 10 }}
      animate={{ scale: isTop ? 1 : 0.95, y: isTop ? 0 : 10 }}
      exit={{
        x: x.get() > 0 ? 500 : -500,
        opacity: 0,
        transition: { duration: 0.3 },
      }}
    >
      {/* Card Container */}
      <div className="relative h-full w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl">
        {/* Food Image */}
        <div className="relative h-full w-full">
          <Image
            src={food.image}
            alt={food.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          {/* Like Indicator */}
          <motion.div
            className="absolute left-6 top-6 rotate-[-15deg] rounded-lg border-4 border-emerald-500 px-4 py-2"
            style={{ opacity: likeOpacity }}
          >
            <span className="text-3xl font-bold text-emerald-500">น่ากิน!</span>
          </motion.div>

          {/* Nope Indicator */}
          <motion.div
            className="absolute right-6 top-6 rotate-[15deg] rounded-lg border-4 border-rose-500 px-4 py-2"
            style={{ opacity: nopeOpacity }}
          >
            <span className="text-3xl font-bold text-rose-500">ไม่เอา</span>
          </motion.div>

          {/* Food Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h2 className="mb-2 text-3xl font-bold text-white drop-shadow-lg">
              {food.name}
            </h2>
            <p className="mb-1 text-lg text-zinc-300">{food.category}</p>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-lg">📍</span>
              <span>{food.restaurant.name}</span>
              <span className="text-emerald-400">
                • {food.restaurant.distance} km
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

interface SwipeButtonsProps {
  onSwipe: (direction: "left" | "right") => void;
}

export function SwipeButtons({ onSwipe }: SwipeButtonsProps) {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Dislike Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSwipe("left")}
        className="flex h-16 w-32 items-center justify-center gap-2 rounded-full bg-zinc-800 border-2 border-rose-500/50 transition-all hover:bg-rose-500/20 hover:border-rose-500"
      >
        <X className="h-6 w-6 text-rose-500" />
        <span className="font-semibold text-rose-500">ไม่เอา</span>
      </motion.button>

      {/* Like Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSwipe("right")}
        className="flex h-16 w-32 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/30 transition-all hover:shadow-emerald-500/50"
      >
        <Heart className="h-6 w-6 fill-white text-white" />
        <span className="font-semibold text-white">น่ากิน</span>
      </motion.button>
    </div>
  );
}
