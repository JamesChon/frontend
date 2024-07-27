import p1_img from './product_1.jpg';
import p2_img from "./product_2.jpg";
import p3_img from "./product_3.jpg";
import p4_img from "./product_4.jpg";
import p5_img from "./product_5.jpg";
import p6_img from "./product_6.jpg";
import p7_img from "./product_7.jpg";
import p8_img from "./product_8.jpg";
import p9_img from "./product_9.jpg";
import p10_img from "./product_10.jpg";
import p11_img from "./product_11.jpg";
import p12_img from "./product_12.jpg";
import p13_img from "./product_13.jpg";
import p14_img from "./product_14.jpg";
import p15_img from "./product_15.jpg";
import p16_img from "./product_16.jpg";
import p17_img from "./product_17.jpg";
import p18_img from "./product_18.jpg";
import p19_img from "./product_19.jpg";
import p20_img from "./product_20.jpg";
import p21_img from "./product_21.jpg";
import p22_img from "./product_22.jpg";
import p23_img from "./product_23.jpg";
import p24_img from "./product_24.jpg";
import p25_img from "./product_25.jpg";
import p26_img from "./product_26.jpg";
import p27_img from "./product_27.jpg";
import p28_img from "./product_28.jpg";
import p29_img from "./product_29.jpg";
import p30_img from "./product_30.jpg";
import p31_img from "./product_31.jpg";
import p32_img from "./product_32.jpg";
import p33_img from "./product_33.jpg";
import p34_img from "./product_34.jpg";
import p35_img from "./product_35.jpg";
import p36_img from "./product_36.jpg";

let all_product = [
  {
    id: 1,
    name: "Stillen SuperCharger",
    category: "performance",
    image: p1_img,
    new_price: 7152.63,
    old_price: 8414.63,
  },
  {
    id: 2,
    name: "Tomei Full Titanium Cat-Back Exhaust",
    category: "performance",
    image: p2_img,
    new_price: 1190.0,
    old_price: 1290.0,
  },
  {
    id: 3,
    name: "Sparco L550 Steering Wheel",
    category: "specials",
    image: p3_img,
    new_price: 250.0,
    old_price: 275.0,
  },
  {
    id: 4,
    name: "VOLKRACING TE37 SONIC SL - Single",
    category: "specials",
    image: p4_img,
    new_price: 967.0,
    old_price: 919.0,
  },
  {
    id: 5,
    name: "BC Racing Type DR",
    category: "performance",
    image: p5_img,
    new_price: 1300.0,
    old_price: 1395.0,
  },
  {
    id: 6,
    name: "R35 GTR Fuel Injector",
    category: "performance",
    image: p6_img,
    new_price: 165.99,
    old_price: 185.99,
  },
  {
    id: 7,
    name: "Mishimoto Track-Ready Performance Aluminum Radiator",
    category: "performance",
    image: p7_img,
    new_price: 499.95,
    old_price: 509.95,
  },
  {
    id: 8,
    name: "Stillen Gen 3 Ultra Long Tube Dual Intake Kit W/ Oiled Filter",
    category: "performance",
    image: p8_img,
    new_price: 549.99,
    old_price: 589.99,
  },
  {
    id: 9,
    name: "NISMO 370Z Titanium Exhaust System",
    category: "oem",
    image: p9_img,
    new_price: 4903.57,
    old_price: 5403.57,
  },
  {
    id: 10,
    name: "OEM NISMO 370Z Wheels 2015+ - Single",
    category: "oem",
    image: p10_img,
    new_price: 800.0,
    old_price: 820.07,
  },
  {
    id: 11,
    name: "OEM NISMO 370Z Wheels 09-14 - Single",
    category: "oem",
    image: p11_img,
    new_price: 823.05,
    old_price: 793.05,
  },
  {
    id: 12,
    name: "OEM '15+ 370Z Red Accent / Stitched Steering Wheel - Nismo",
    category: "oem",
    image: p12_img,
    new_price: 1321.32,
    old_price: 1321.32,
  },
  {
    id: 13,
    name: "Brembo GT Monoblock 6-Piston Front Brake Caliper Upgrade",
    category: "performance",
    image: p13_img,
    new_price: 2295.0,
    old_price: 2595.0,
  },
  {
    id: 14,
    name: "HKS Hi-Power Cat Back Exhaust",
    category: "performance",
    image: p14_img,
    new_price: 1750.0,
    old_price: 1785.0,
  },
  {
    id: 15,
    name: "Wisefab Front Drift Angle Lock Kit",
    category: "performance",
    image: p15_img,
    new_price: 2850.0,
    old_price: 2800.0,
  },
  {
    id: 16,
    name: "EcuTek Performance Tuning Package",
    category: "specials",
    image: p16_img,
    new_price: 700.0,
    old_price: 750.0,
  },
  {
    id: 17,
    name: "Fast Intentions Long Tube Headers",
    category: "performance",
    image: p17_img,
    new_price: 1399.0,
    old_price: 1979.0,
  },
  {
    id: 18,
    name: "VIS Racing - AMS Style Carbon Fiber Hood",
    category: "specials",
    image: p18_img,
    new_price: 1222.0,
    old_price: 1498.0,
  },
  {
    id: 19,
    name: "VIS Racing - AMS Style Carbon Fiber Fenders",
    category: "specials",
    image: p19_img,
    new_price: 1320.0,
    old_price: 1120.0,
  },
  {
    id: 20,
    name: "NISMO LMGT4 Omori Spec Wheel - Single",
    category: "oem",
    image: p20_img,
    new_price: 995.45,
    old_price: 1142.45,
  },
  {
    id: 21,
    name: "Armytrix Valvetronic 3.5″ Exhaust System | Cicio Performance",
    category: "performance",
    image: p21_img,
    new_price: 8510.0,
    old_price: 9310.0,
  },
  {
    id: 22,
    name: "Morimoto XB LED Headlights - Pair",
    category: "specials",
    image: p22_img,
    new_price: 1365.0,
    old_price: 1465.0,
  },
  {
    id: 23,
    name: "Morimoto XB LED Tail Lights - Pair",
    category: "specials",
    image: p23_img,
    new_price: 1240.0,
    old_price: 1400.0,
  },
  {
    id: 24,
    name: "AAM Competition Twin Turbo Kit - Regular With Stage 2 Turbochargers",
    category: "performance",
    image: p24_img,
    new_price: 12495.0,
    old_price: 13195.0,
  },
  {
    id: 25,
    name: "Sparco Competition Racing Seat(Red) - Single",
    category: "specials",
    image: p25_img,
    new_price: 1250.0,
    old_price: 1195.0,
  },
  {
    id: 26,
    name: "NISMO Front Strut Tower Bar",
    category: "oem",
    image: p26_img,
    new_price: 429.9,
    old_price: 489.9,
  },
  {
    id: 27,
    name: "NISMO Oil Filler Cap",
    category: "oem",
    image: p27_img,
    new_price: 129.5,
    old_price: 109.5,
  },
  {
    id: 28,
    name: "NISMO Tire Valve Stem Cap Set - Red",
    category: "oem",
    image: p28_img,
    new_price: 25.0,
    old_price: 29.99,
  },
  {
    id: 29,
    name: "NGK Racing Spark Plugs",
    category: "specials",
    image: p29_img,
    new_price: 210.0,
    old_price: 240.0,
  },
  {
    id: 30,
    name: "NISMO Recaro Racing Seats",
    category: "oem",
    image: p30_img,
    new_price: 2199.0,
    old_price: 2499.5,
  },
  {
    id: 31,
    name: "NISMO Carbon Fiber Shift Knob",
    category: "oem",
    image: p31_img,
    new_price: 99.0,
    old_price: 94.0,
  },
  {
    id: 32,
    name: "NISMO Performance Oil Filter",
    category: "oem",
    image: p32_img,
    new_price: 41.43,
    old_price: 46.79,
  },
  {
    id: 33,
    name: "NISMO Competition Oil 2108E 0W-30 Motor Oil",
    category: "oem",
    image: p33_img,
    new_price: 88.91,
    old_price: 90.0,
  },
  {
    id: 34,
    name: "NISMO Snap-Back Cap",
    category: "specials",
    image: p34_img,
    new_price: 24.99,
    old_price: 30.0,
  },
  {
    id: 35,
    name: "NISMO T-Shirt",
    category: "specials",
    image: p35_img,
    new_price: 29.99,
    old_price: 35.0,
  },
  {
    id: 36,
    name: "NISMO Hoodie",
    category: "specials",
    image: p36_img,
    new_price: 64.99,
    old_price: 90.0,
  },
];

export default all_product;
