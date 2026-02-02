import { FoodItem } from '@/types/food';
import { FoodCategory } from '@/components/CategorySelection';

// ========================================
// FASTFOOD CHAINS - ร้านจริง
// ========================================

// อาหารหลัก - Main Dishes from Fastfood Chains
const mainDishes: FoodItem[] = [
  // McDonald's
  {
    id: 'm1',
    name: 'บิ๊กแมค',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    category: 'เบอร์เกอร์',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm2',
    name: 'แมคสไปซี่',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=800&q=80',
    category: 'เบอร์เกอร์',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm3',
    name: 'ดับเบิ้ลชีสเบอร์เกอร์',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800&q=80',
    category: 'เบอร์เกอร์',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // KFC
  {
    id: 'm4',
    name: 'ไก่ทอด Original Recipe',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'kfc',
      name: 'KFC',
      distance: 0.6,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm5',
    name: 'ไก่ทอด Hot & Spicy',
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'kfc',
      name: 'KFC',
      distance: 0.6,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm6',
    name: 'ซิงเกอร์เบอร์เกอร์',
    image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=800&q=80',
    category: 'เบอร์เกอร์',
    restaurant: {
      id: 'kfc',
      name: 'KFC',
      distance: 0.6,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Burger King
  {
    id: 'm7',
    name: 'วอปเปอร์',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=800&q=80',
    category: 'เบอร์เกอร์',
    restaurant: {
      id: 'bk',
      name: 'Burger King',
      distance: 0.8,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm8',
    name: 'วอปเปอร์ จูเนียร์',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80',
    category: 'เบอร์เกอร์',
    restaurant: {
      id: 'bk',
      name: 'Burger King',
      distance: 0.8,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Pizza Hut
  {
    id: 'm9',
    name: 'พิซซ่าซูเปอร์ซูพรีม',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80',
    category: 'พิซซ่า',
    restaurant: {
      id: 'ph',
      name: 'Pizza Hut',
      distance: 1.0,
      rating: 4.0,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm10',
    name: 'พิซซ่าเปปเปอโรนี',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=800&q=80',
    category: 'พิซซ่า',
    restaurant: {
      id: 'ph',
      name: 'Pizza Hut',
      distance: 1.0,
      rating: 4.0,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm11',
    name: 'พิซซ่าฮาวายเอี้ยน',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=800&q=80',
    category: 'พิซซ่า',
    restaurant: {
      id: 'ph',
      name: 'Pizza Hut',
      distance: 1.0,
      rating: 4.0,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // The Pizza Company
  {
    id: 'm12',
    name: 'ทอมยำกุ้งพิซซ่า',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80',
    category: 'พิซซ่า',
    restaurant: {
      id: 'tpc',
      name: 'The Pizza Company',
      distance: 0.9,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // MK Restaurant
  {
    id: 'm13',
    name: 'ชุดสุกี้ MK Gold',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    category: 'สุกี้',
    restaurant: {
      id: 'mk',
      name: 'MK Restaurant',
      distance: 0.7,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Shabushi
  {
    id: 'm14',
    name: 'บุฟเฟ่ต์ชาบู',
    image: 'https://images.unsplash.com/photo-1547928576-b822bc410e94?w=800&q=80',
    category: 'ชาบู',
    restaurant: {
      id: 'shabushi',
      name: 'Shabushi',
      distance: 0.8,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Bonchon
  {
    id: 'm15',
    name: 'ไก่ทอดเกาหลี ซอสเผ็ด',
    image: 'https://images.unsplash.com/photo-1575932444877-5106bee2a599?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'bonchon',
      name: 'Bonchon',
      distance: 1.0,
      rating: 4.5,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm16',
    name: 'ไก่ทอดเกาหลี ซอสกระเทียม',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'bonchon',
      name: 'Bonchon',
      distance: 1.0,
      rating: 4.5,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Subway
  {
    id: 'm17',
    name: 'ซับเวย์เมลท์',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=800&q=80',
    category: 'แซนด์วิช',
    restaurant: {
      id: 'subway',
      name: 'Subway',
      distance: 0.6,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'm18',
    name: 'ไก่เทอริยากิ ซับเวย์',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=800&q=80',
    category: 'แซนด์วิช',
    restaurant: {
      id: 'subway',
      name: 'Subway',
      distance: 0.6,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Yoshinoya
  {
    id: 'm19',
    name: 'ข้าวหน้าเนื้อ Gyudon',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&q=80',
    category: 'อาหารญี่ปุ่น',
    restaurant: {
      id: 'yoshinoya',
      name: 'Yoshinoya',
      distance: 0.7,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Pepper Lunch
  {
    id: 'm20',
    name: 'บีฟเปปเปอร์ไรซ์',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    category: 'สเต็ก',
    restaurant: {
      id: 'pepperlunch',
      name: 'Pepper Lunch',
      distance: 0.9,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
];

// ของกินเล่น - Snacks from Fastfood Chains
const snacks: FoodItem[] = [
  // McDonald's Snacks
  {
    id: 's1',
    name: 'เฟรนช์ฟรายส์',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80',
    category: 'ของทอด',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's2',
    name: 'แมคนักเก็ต 6 ชิ้น',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's3',
    name: 'พายแอปเปิ้ล',
    image: 'https://images.unsplash.com/photo-1621743478914-cc8a86d7e7b5?w=800&q=80',
    category: 'ของหวาน',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // KFC Snacks
  {
    id: 's4',
    name: 'ป๊อปคอร์นชิกเก้น',
    image: 'https://images.unsplash.com/photo-1585325701165-351af914e3ba?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'kfc',
      name: 'KFC',
      distance: 0.6,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's5',
    name: 'ฮอทวิงส์',
    image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=800&q=80',
    category: 'ไก่ทอด',
    restaurant: {
      id: 'kfc',
      name: 'KFC',
      distance: 0.6,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's6',
    name: 'โคลสลอว์',
    image: 'https://images.unsplash.com/photo-1625938145744-533e80b4e241?w=800&q=80',
    category: 'สลัด',
    restaurant: {
      id: 'kfc',
      name: 'KFC',
      distance: 0.6,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Burger King
  {
    id: 's7',
    name: 'อัญเนียนริงส์',
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&q=80',
    category: 'ของทอด',
    restaurant: {
      id: 'bk',
      name: 'Burger King',
      distance: 0.8,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Mister Donut
  {
    id: 's8',
    name: 'โดนัทช็อกโกแลต',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80',
    category: 'ของหวาน',
    restaurant: {
      id: 'mrdonut',
      name: 'Mister Donut',
      distance: 0.4,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's9',
    name: 'โดนัทสตรอว์เบอร์รี่',
    image: 'https://images.unsplash.com/photo-1533910534207-90f31029a78e?w=800&q=80',
    category: 'ของหวาน',
    restaurant: {
      id: 'mrdonut',
      name: 'Mister Donut',
      distance: 0.4,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's10',
    name: 'ปอนเดอริง',
    image: 'https://images.unsplash.com/photo-1506224772180-d75b3efbe9be?w=800&q=80',
    category: 'ของหวาน',
    restaurant: {
      id: 'mrdonut',
      name: 'Mister Donut',
      distance: 0.4,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Krispy Kreme
  {
    id: 's11',
    name: 'Original Glazed',
    image: 'https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=800&q=80',
    category: 'ของหวาน',
    restaurant: {
      id: 'krispy',
      name: 'Krispy Kreme',
      distance: 1.2,
      rating: 4.5,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1527515545081-5db817172677?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Dairy Queen
  {
    id: 's12',
    name: 'บลิซซาร์ด ออริโอ',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80',
    category: 'ไอศกรีม',
    restaurant: {
      id: 'dq',
      name: 'Dairy Queen',
      distance: 0.7,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 's13',
    name: 'ซันเดย์ช็อกโกแลต',
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=800&q=80',
    category: 'ไอศกรีม',
    restaurant: {
      id: 'dq',
      name: 'Dairy Queen',
      distance: 0.7,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Swensen's
  {
    id: 's14',
    name: 'ซันเด สติกกี้ ชีสเค้ก',
    image: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&q=80',
    category: 'ไอศกรีม',
    restaurant: {
      id: 'swensens',
      name: "Swensen's",
      distance: 0.8,
      rating: 4.3,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
];

// เครื่องดื่ม - Drinks from Chains
const drinks: FoodItem[] = [
  // Starbucks
  {
    id: 'd1',
    name: 'คาราเมลมัคคิอาโต้',
    image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80',
    category: 'กาแฟ',
    restaurant: {
      id: 'starbucks',
      name: 'Starbucks',
      distance: 0.3,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd2',
    name: 'มอคค่า แฟรปปูชิโน่',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
    category: 'กาแฟ',
    restaurant: {
      id: 'starbucks',
      name: 'Starbucks',
      distance: 0.3,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd3',
    name: 'ชาเขียว แฟรปปูชิโน่',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80',
    category: 'ชา',
    restaurant: {
      id: 'starbucks',
      name: 'Starbucks',
      distance: 0.3,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Cafe Amazon
  {
    id: 'd4',
    name: 'อเมซอน คาปูชิโน่',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80',
    category: 'กาแฟ',
    restaurant: {
      id: 'amazon',
      name: 'Cafe Amazon',
      distance: 0.2,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd5',
    name: 'อเมริกาโน่เย็น',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80',
    category: 'กาแฟ',
    restaurant: {
      id: 'amazon',
      name: 'Cafe Amazon',
      distance: 0.2,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd6',
    name: 'โกโก้ปั่น',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=800&q=80',
    category: 'เครื่องดื่มปั่น',
    restaurant: {
      id: 'amazon',
      name: 'Cafe Amazon',
      distance: 0.2,
      rating: 4.1,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // ChaTraMue (ชาตรามือ)
  {
    id: 'd7',
    name: 'ชาเย็น',
    image: 'https://images.unsplash.com/photo-1556679343-c1306c6aa61e?w=800&q=80',
    category: 'ชา',
    restaurant: {
      id: 'chatramue',
      name: 'ชาตรามือ',
      distance: 0.4,
      rating: 4.5,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd8',
    name: 'ชาเขียวนมสด',
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=800&q=80',
    category: 'ชา',
    restaurant: {
      id: 'chatramue',
      name: 'ชาตรามือ',
      distance: 0.4,
      rating: 4.5,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Tiger Sugar
  {
    id: 'd9',
    name: 'Brown Sugar Boba Milk',
    image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=800&q=80',
    category: 'ชานม',
    restaurant: {
      id: 'tigersugar',
      name: 'Tiger Sugar',
      distance: 0.6,
      rating: 4.6,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1525803377221-eb7cbe8c8082?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd10',
    name: 'Black Sugar Pearl Milk Tea',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=800&q=80',
    category: 'ชานม',
    restaurant: {
      id: 'tigersugar',
      name: 'Tiger Sugar',
      distance: 0.6,
      rating: 4.6,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1525803377221-eb7cbe8c8082?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // Koi Thé
  {
    id: 'd11',
    name: 'Golden Bubble Milk Tea',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80',
    category: 'ชานม',
    restaurant: {
      id: 'koi',
      name: 'KOI Thé',
      distance: 0.7,
      rating: 4.4,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1525803377221-eb7cbe8c8082?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // After You
  {
    id: 'd12',
    name: 'Kakigori มะม่วง',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=800&q=80',
    category: 'น้ำแข็งไส',
    restaurant: {
      id: 'afteryou',
      name: 'After You',
      distance: 0.9,
      rating: 4.7,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  // McDonald's Drinks
  {
    id: 'd13',
    name: 'McFlurry ออริโอ',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80',
    category: 'ไอศกรีม',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
  {
    id: 'd14',
    name: 'โค้ก แมคโดนัลด์',
    image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=800&q=80',
    category: 'น้ำอัดลม',
    restaurant: {
      id: 'mcd',
      name: "McDonald's",
      distance: 0.5,
      rating: 4.2,
      address: 'สาขาใกล้คุณ',
      image: 'https://images.unsplash.com/photo-1619454016518-697bc231e7cb?w=400&q=80',
      lat: 0,
      lng: 0,
    },
  },
];

export function getFoodsByCategory(category: FoodCategory): FoodItem[] {
  switch (category) {
    case 'main':
      return [...mainDishes].sort(() => Math.random() - 0.5);
    case 'snack':
      return [...snacks].sort(() => Math.random() - 0.5);
    case 'drink':
      return [...drinks].sort(() => Math.random() - 0.5);
    default:
      return [];
  }
}

export const mockFoods: FoodItem[] = [...mainDishes, ...snacks, ...drinks];

// Haversine formula to calculate distance between two coordinates
function calculateDistance(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Generate random location near user
function generateNearbyCoords(
  userLat: number,
  userLng: number,
  maxDistanceKm: number
): { lat: number; lng: number } {
  const distance = Math.random() * Math.random() * maxDistanceKm;
  const angle = Math.random() * 2 * Math.PI;
  const latOffset = (distance * Math.cos(angle)) / 111;
  const lngOffset = (distance * Math.sin(angle)) / (111 * Math.cos((userLat * Math.PI) / 180));
  return {
    lat: userLat + latOffset,
    lng: userLng + lngOffset,
  };
}

// Get nearby restaurants based on selected food and user location
export function getNearbyRestaurants(
  selectedFood: FoodItem,
  userLat?: number,
  userLng?: number
) {
  const allFoods = mockFoods;

  if (userLat && userLng) {
    // Find other foods from the SAME restaurant chain
    const sameChainFoods = allFoods.filter(
      (food) => food.restaurant.id === selectedFood.restaurant.id && food.id !== selectedFood.id
    );

    // If same chain has other items, use those
    const relevantFoods = sameChainFoods.length > 0 ? sameChainFoods : allFoods.filter((food) => food.id !== selectedFood.id);

    const nearbyRestaurants = relevantFoods
      .slice(0, 5) // Take up to 5
      .map((food) => {
        const nearbyCoords = generateNearbyCoords(userLat, userLng, 2);
        const distance = calculateDistance(userLat, userLng, nearbyCoords.lat, nearbyCoords.lng);
        return {
          ...food.restaurant,
          foodName: food.name,
          foodImage: food.image,
          lat: nearbyCoords.lat,
          lng: nearbyCoords.lng,
          distance: Math.round(distance * 100) / 100,
        };
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);

    // Selected food's restaurant (closest)
    const selectedCoords = generateNearbyCoords(userLat, userLng, 0.5);
    const selectedDistance = calculateDistance(userLat, userLng, selectedCoords.lat, selectedCoords.lng);

    const allRestaurants = [
      {
        ...selectedFood.restaurant,
        foodName: selectedFood.name,
        foodImage: selectedFood.image,
        lat: selectedCoords.lat,
        lng: selectedCoords.lng,
        distance: Math.round(selectedDistance * 100) / 100,
      },
      ...nearbyRestaurants,
    ].sort((a, b) => a.distance - b.distance);

    return allRestaurants.slice(0, 3);
  }

  // Fallback without location
  const nearbyRestaurants = allFoods
    .filter((food) => food.id !== selectedFood.id)
    .map((food) => ({
      ...food.restaurant,
      foodName: food.name,
      foodImage: food.image,
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3);

  return [
    {
      ...selectedFood.restaurant,
      foodName: selectedFood.name,
      foodImage: selectedFood.image,
    },
    ...nearbyRestaurants.slice(0, 2),
  ].sort((a, b) => a.distance - b.distance);
}
