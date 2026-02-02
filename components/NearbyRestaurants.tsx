"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FoodItem, Restaurant } from "@/types/food";
import Image from "next/image";
import {
  MapPin,
  Star,
  Navigation,
  RotateCcw,
  ExternalLink,
} from "lucide-react";

interface NearbyRestaurant extends Restaurant {
  foodName: string;
  foodImage: string;
}

interface NearbyRestaurantsProps {
  isOpen: boolean;
  selectedFood: FoodItem | null;
  restaurants: NearbyRestaurant[];
  onClose: () => void;
  onRestart: () => void;
}

export function NearbyRestaurants({
  isOpen,
  selectedFood,
  restaurants,
  onClose,
  onRestart,
}: NearbyRestaurantsProps) {
  if (!selectedFood) return null;

  const openGoogleMaps = (restaurant: NearbyRestaurant) => {
    const query = encodeURIComponent(
      `${restaurant.name} ${restaurant.address}`,
    );
    window.open(`https://www.google.com/maps/search/${query}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative my-8 w-full max-w-md overflow-hidden rounded-3xl bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mb-2 text-4xl"
              >
                📍
              </motion.div>
              <h2 className="text-xl font-bold text-white">
                ร้านใกล้คุณที่มี {selectedFood.name}
              </h2>
              <p className="mt-1 text-sm text-emerald-100">
                แนะนำ {restaurants.length} ร้าน เรียงตามระยะทาง
              </p>
            </div>

            {/* Restaurant List */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              <div className="space-y-4">
                {restaurants.map((restaurant, index) => (
                  <motion.div
                    key={restaurant.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="overflow-hidden rounded-2xl bg-zinc-800/50"
                  >
                    {/* Restaurant Image */}
                    <div className="relative h-32 w-full">
                      <Image
                        src={restaurant.foodImage}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                      {/* Ranking Badge */}
                      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-sm font-bold text-white shadow-lg">
                        {index + 1}
                      </div>

                      {/* Distance Badge */}
                      <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur-sm">
                        <Navigation className="h-3 w-3" />
                        {restaurant.distance} km
                      </div>
                    </div>

                    {/* Restaurant Info */}
                    <div className="p-4">
                      <div className="mb-2 flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-white">
                            {restaurant.name}
                          </h3>
                          <div className="flex items-center gap-1 text-sm text-zinc-400">
                            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                            <span>{restaurant.rating}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3 flex items-center gap-2 text-sm text-zinc-400">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="line-clamp-1">
                          {restaurant.address}
                        </span>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => openGoogleMaps(restaurant)}
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-700 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-600"
                      >
                        <ExternalLink className="h-4 w-4" />
                        ดูบน Google Maps
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-zinc-800 p-4">
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRestart}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-800 px-4 py-3 font-medium text-white transition-colors hover:bg-zinc-700"
                >
                  <RotateCcw className="h-5 w-5" />
                  เลือกใหม่
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
