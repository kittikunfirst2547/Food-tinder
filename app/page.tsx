"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FoodCard, SwipeButtons } from "@/components/FoodCard";
import { ProgressBar } from "@/components/ProgressBar";
import { ResultModal } from "@/components/ResultModal";
import {
  CategorySelection,
  FoodCategory,
} from "@/components/CategorySelection";
import { LocationPermission } from "@/components/LocationPermission";
import { NearbyRestaurants } from "@/components/NearbyRestaurants";
import { getFoodsByCategory, getNearbyRestaurants } from "@/data/foods";
import { FoodItem, Restaurant } from "@/types/food";
import { Utensils, ArrowLeft } from "lucide-react";

const REQUIRED_SWIPES = 5;

interface NearbyRestaurant extends Restaurant {
  foodName: string;
  foodImage: string;
}

type AppState = "category" | "swiping" | "result" | "location" | "nearby";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("category");
  const [selectedCategory, setSelectedCategory] = useState<FoodCategory | null>(
    null,
  );
  const [foods, setFoods] = useState<FoodItem[]>([]);
  const [likedFoods, setLikedFoods] = useState<FoodItem[]>([]);
  const [swipeCount, setSwipeCount] = useState(0);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [nearbyRestaurants, setNearbyRestaurants] = useState<
    NearbyRestaurant[]
  >([]);
  const [userCoords, setUserCoords] = useState<GeolocationCoordinates | null>(
    null,
  );

  const currentFood = foods[foods.length - 1];
  const nextFood = foods[foods.length - 2];

  const handleCategorySelect = (category: FoodCategory) => {
    setSelectedCategory(category);
    setFoods(getFoodsByCategory(category));
    setLikedFoods([]);
    setSwipeCount(0);
    setAppState("swiping");
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setFoods([]);
    setLikedFoods([]);
    setSwipeCount(0);
    setSelectedFood(null);
    setNearbyRestaurants([]);
    setAppState("category");
  };

  const handleSwipe = useCallback(
    (direction: "left" | "right") => {
      if (!currentFood) return;

      // Remove current card
      setFoods((prev) => prev.slice(0, -1));
      setSwipeCount((prev) => prev + 1);

      if (direction === "right") {
        // Check if already at max likes (5)
        if (likedFoods.length >= REQUIRED_SWIPES) {
          return; // Can't like more
        }

        const newLikedFoods = [...likedFoods, currentFood];
        setLikedFoods(newLikedFoods);

        // Check if reached 5 likes
        if (newLikedFoods.length >= REQUIRED_SWIPES) {
          // Pick a random food from all liked foods
          const randomIndex = Math.floor(Math.random() * newLikedFoods.length);
          setSelectedFood(newLikedFoods[randomIndex]);
          setTimeout(() => setAppState("result"), 500);
        }
      }
    },
    [currentFood, likedFoods],
  );

  const handleResultClose = () => {
    // After closing result modal, ask for location
    setAppState("location");
  };

  const handleLocationGranted = (coords: GeolocationCoordinates) => {
    setUserCoords(coords);
    if (selectedFood) {
      const restaurants = getNearbyRestaurants(
        selectedFood,
        coords.latitude,
        coords.longitude,
      );
      setNearbyRestaurants(restaurants);
    }
    setAppState("nearby");
  };

  const handleLocationSkip = () => {
    // Use default restaurants without location
    if (selectedFood) {
      const restaurants = getNearbyRestaurants(selectedFood);
      setNearbyRestaurants(restaurants);
    }
    setAppState("nearby");
  };

  const handleRestart = () => {
    if (selectedCategory) {
      setFoods(getFoodsByCategory(selectedCategory));
    }
    setLikedFoods([]);
    setSwipeCount(0);
    setSelectedFood(null);
    setNearbyRestaurants([]);
    setUserCoords(null);
    setAppState("swiping");
  };

  // Show category selection if no category selected
  if (appState === "category") {
    return <CategorySelection onSelect={handleCategorySelect} />;
  }

  const isEmpty = foods.length === 0;
  const noLikes = swipeCount >= REQUIRED_SWIPES && likedFoods.length === 0;

  const getCategoryName = () => {
    switch (selectedCategory) {
      case "main":
        return "อาหารหลัก 🍛";
      case "snack":
        return "ของกินเล่น 🍿";
      case "drink":
        return "เครื่องดื่ม 🧋";
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center px-4 py-6">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 w-full max-w-md"
      >
        <motion.button
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBack}
          className="mb-4 flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>เปลี่ยนประเภท</span>
        </motion.button>

        <div className="text-center">
          <motion.div
            className="mb-2 flex items-center justify-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Utensils className="h-7 w-7 text-emerald-400" />
            </motion.div>
            <h1 className="animate-gradient-text text-2xl font-bold">
              Food Tinder
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-zinc-500"
          >
            {getCategoryName()} • ปัดขวาถ้าน่ากิน
          </motion.p>
        </div>
      </motion.header>

      {/* Progress - จำนวนที่กดถูกใจ */}
      <div className="mb-6 w-full max-w-md">
        <ProgressBar
          current={likedFoods.length}
          total={REQUIRED_SWIPES}
          liked={likedFoods.length}
        />
      </div>

      {/* Card Stack */}
      <div className="relative mb-6 h-[55vh] w-full max-w-md">
        {isEmpty || noLikes ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <div className="mb-4 text-6xl">{noLikes ? "😢" : "🍽️"}</div>
            <h2 className="mb-2 text-xl font-semibold text-white">
              {noLikes ? "ไม่มีเมนูที่ถูกใจเลย..." : "หมดเมนูแล้ว!"}
            </h2>
            <p className="mb-4 text-zinc-400">
              {noLikes ? "ลองใจกว้างขึ้นหน่อยนะ 😄" : "ยังไม่ถูกใจมึงอีกหรอ?"}
            </p>
            <button
              onClick={handleRestart}
              className="rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-6 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 transition-transform hover:scale-105"
            >
              เริ่มใหม่
            </button>
          </div>
        ) : (
          <AnimatePresence>
            {nextFood && (
              <FoodCard
                key={nextFood.id}
                food={nextFood}
                onSwipe={() => {}}
                isTop={false}
              />
            )}
            {currentFood && (
              <FoodCard
                key={currentFood.id}
                food={currentFood}
                onSwipe={handleSwipe}
                isTop={true}
              />
            )}
          </AnimatePresence>
        )}
      </div>

      {/* Swipe Buttons */}
      {!isEmpty && !noLikes && appState === "swiping" && (
        <SwipeButtons onSwipe={handleSwipe} />
      )}

      {/* Result Modal */}
      <ResultModal
        isOpen={appState === "result"}
        selectedFood={selectedFood}
        likedFoods={likedFoods}
        onClose={handleResultClose}
        onRestart={handleRestart}
      />

      {/* Location Permission */}
      <LocationPermission
        isOpen={appState === "location"}
        onLocationGranted={handleLocationGranted}
        onSkip={handleLocationSkip}
      />

      {/* Nearby Restaurants */}
      <NearbyRestaurants
        isOpen={appState === "nearby"}
        selectedFood={selectedFood}
        restaurants={nearbyRestaurants}
        onClose={() => setAppState("nearby")}
        onRestart={handleRestart}
      />

      {/* Footer hint */}
      {appState === "swiping" && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-auto pt-4 text-center text-xs text-zinc-600"
        >
          กดถูกใจ ❤️ ครบ {REQUIRED_SWIPES} เมนู แล้วระบบจะสุ่มให้! 🎲
        </motion.p>
      )}
    </div>
  );
}
