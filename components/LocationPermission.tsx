"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Loader2, AlertCircle } from "lucide-react";

interface LocationPermissionProps {
  isOpen: boolean;
  onLocationGranted: (coords: GeolocationCoordinates) => void;
  onSkip: () => void;
}

export function LocationPermission({
  isOpen,
  onLocationGranted,
  onSkip,
}: LocationPermissionProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const requestLocation = async () => {
    setIsLoading(true);
    setError(null);

    if (!navigator.geolocation) {
      setError("เบราว์เซอร์ไม่รองรับการระบุตำแหน่ง");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLoading(false);
        onLocationGranted(position.coords);
      },
      (err) => {
        setIsLoading(false);
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setError("คุณปฏิเสธการเข้าถึงตำแหน่ง");
            break;
          case err.POSITION_UNAVAILABLE:
            setError("ไม่สามารถระบุตำแหน่งได้");
            break;
          case err.TIMEOUT:
            setError("หมดเวลาในการระบุตำแหน่ง");
            break;
          default:
            setError("เกิดข้อผิดพลาดในการระบุตำแหน่ง");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      },
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-sm overflow-hidden rounded-3xl bg-zinc-900"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20"
              >
                <MapPin className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white">หาร้านใกล้คุณ</h2>
              <p className="mt-2 text-blue-100">
                เปิดใช้งาน Location เพื่อแนะนำร้านที่ใกล้ที่สุด
              </p>
            </div>

            {/* Content */}
            <div className="p-6">
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 flex items-center gap-2 rounded-xl bg-red-500/10 p-3 text-red-400"
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={requestLocation}
                disabled={isLoading}
                className="mb-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-4 font-medium text-white shadow-lg shadow-blue-500/30 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    กำลังค้นหาตำแหน่ง...
                  </>
                ) : (
                  <>
                    <MapPin className="h-5 w-5" />
                    เปิดใช้งาน Location
                  </>
                )}
              </motion.button>

              <button
                onClick={onSkip}
                className="w-full rounded-xl bg-zinc-800 px-4 py-3 font-medium text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
              >
                ข้าม ใช้ร้านแนะนำ
              </button>

              <p className="mt-4 text-center text-xs text-zinc-500">
                เราจะใช้ตำแหน่งของคุณเพื่อหาร้านใกล้เคียงเท่านั้น
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
