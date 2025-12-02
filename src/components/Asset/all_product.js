import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

// ✔ Random helper
const brands = ["nike", "adidas", "puma", "levis"];
const getBrand = () => brands[Math.floor(Math.random() * brands.length)];
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let all_product = [
  // WOMEN
  ...[
    p1_img, p2_img, p3_img, p4_img, p5_img, p6_img,
    p7_img, p8_img, p9_img, p10_img, p11_img, p12_img
  ].map((img, i) => ({
    id: i + 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: img,
    new_price: rand(400, 1200),
    old_price: rand(1200, 2000),
    brand: getBrand(),
    rating: rand(3, 5),
    freeDelivery: Math.random() < 0.5,
    isOffer: Math.random() < 0.4,
    colors: ["red", "blue", "green"],
    sizes: ["S", "M", "L"]
  })),

  // MEN
  ...[
    p13_img, p14_img, p15_img, p16_img, p17_img, p18_img,
    p19_img, p20_img, p21_img, p22_img, p23_img, p24_img
  ].map((img, i) => ({
    id: i + 13,
    name: "Men Green Solid Zippered Slim Fit Bomber Jacket",
    category: "men",
    image: img,
    new_price: rand(800, 2000),
    old_price: rand(1500, 3000),
    brand: getBrand(),
    rating: rand(3, 5),
    freeDelivery: Math.random() < 0.6,
    isOffer: Math.random() < 0.4,
    colors: ["black", "grey", "blue"],
    sizes: ["M", "L", "XL"]
  })),

  // KIDS
  ...[
    p25_img, p26_img, p27_img, p28_img, p29_img, p30_img,
    p31_img, p32_img, p33_img, p34_img, p35_img, p36_img
  ].map((img, i) => ({
    id: i + 25,
    name: "Boys Colorblocked Hooded Sweatshirt",
    category: "kids",
    image: img,
    new_price: rand(300, 900),
    old_price: rand(900, 1600),
    brand: getBrand(),
    rating: rand(3, 5),
    freeDelivery: Math.random() < 0.7,
    isOffer: Math.random() < 0.3,
    colors: ["yellow", "orange", "blue"],
    sizes: ["XS", "S", "M"]
  })),
];

export default all_product;
