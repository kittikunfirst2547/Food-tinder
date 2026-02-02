export interface Restaurant {
  id: string;
  name: string;
  distance: number; // in km
  rating: number;
  address: string;
  image: string;
  lat: number; // latitude
  lng: number; // longitude
}

export interface FoodItem {
  id: string;
  name: string;
  image: string;
  category: string;
  restaurant: Restaurant;
}
