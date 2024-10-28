const products = [
  // Mobile Category
  {
    id: 1,
    name: "Samsung Galaxy S21",
    category: "Mobile",
    brand: "Samsung",
    price: "70000",
  },
  {
    id: 2,
    name: "iPhone 13",
    category: "Mobile",
    brand: "Apple",
    price: "85000",
  },
  {
    id: 3,
    name: "OnePlus 9",
    category: "Mobile",
    brand: "OnePlus",
    price: "60000",
  },
  {
    id: 4,
    name: "Xiaomi Redmi Note 10",
    category: "Mobile",
    brand: "Xiaomi",
    price: "15000",
  },
  {
    id: 5,
    name: "Walton Primo X5",
    category: "Mobile",
    brand: "Walton",
    price: "12000",
  },

  // Television Category
  {
    id: 6,
    name: "Samsung QLED 55 Inch",
    category: "Television",
    brand: "Samsung",
    price: "120000",
  },
  {
    id: 7,
    name: "Sony Bravia 50 Inch",
    category: "Television",
    brand: "Sony",
    price: "100000",
  },
  {
    id: 8,
    name: "LG OLED 55 Inch",
    category: "Television",
    brand: "LG",
    price: "135000",
  },
  {
    id: 9,
    name: "Walton LED 32 Inch",
    category: "Television",
    brand: "Walton",
    price: "18000",
  },
  {
    id: 10,
    name: "Xiaomi Mi TV 4A",
    category: "Television",
    brand: "Xiaomi",
    price: "25000",
  },

  // Laptop Category
  {
    id: 11,
    name: "MacBook Air M1",
    category: "Laptop",
    brand: "Apple",
    price: "95000",
  },
  {
    id: 12,
    name: "Dell XPS 13",
    category: "Laptop",
    brand: "Dell",
    price: "120000",
  },
  {
    id: 13,
    name: "HP Pavilion 15",
    category: "Laptop",
    brand: "HP",
    price: "65000",
  },
  {
    id: 14,
    name: "Asus ROG Zephyrus",
    category: "Laptop",
    brand: "Asus",
    price: "150000",
  },
  {
    id: 15,
    name: "Samsung Galaxy Book",
    category: "Laptop",
    brand: "Samsung",
    price: "85000",
  },

  // Camera Category
  {
    id: 16,
    name: "Canon EOS 1500D",
    category: "Camera",
    brand: "Canon",
    price: "40000",
  },
  {
    id: 17,
    name: "Sony Alpha A6400",
    category: "Camera",
    brand: "Sony",
    price: "75000",
  },
  {
    id: 18,
    name: "Nikon D3500",
    category: "Camera",
    brand: "Nikon",
    price: "45000",
  },
  {
    id: 19,
    name: "Panasonic Lumix G7",
    category: "Camera",
    brand: "Panasonic",
    price: "60000",
  },
  {
    id: 20,
    name: "Samsung NX3000",
    category: "Camera",
    brand: "Samsung",
    price: "30000",
  },

  // Home Appliance Category
  {
    id: 21,
    name: "Samsung Microwave Oven",
    category: "Home Appliance",
    brand: "Samsung",
    price: "14000",
  },
  {
    id: 22,
    name: "Philips Air Fryer HD9220",
    category: "Home Appliance",
    brand: "Philips",
    price: "15000",
  },
  {
    id: 23,
    name: "LG Refrigerator 240L",
    category: "Home Appliance",
    brand: "LG",
    price: "45000",
  },
  {
    id: 24,
    name: "Whirlpool Washing Machine",
    category: "Home Appliance",
    brand: "Whirlpool",
    price: "35000",
  },
  {
    id: 25,
    name: "Walton Rice Cooker",
    category: "Home Appliance",
    brand: "Walton",
    price: "2000",
  },
];

const brands = products.map((product) => product.brand);
const categories = products.map((product) => product.category);
const chipProducts = products.filter((product) => product.price <= 14000);
const damiProducts = products.filter((product) => product.price > 120000);
const findProduct = products.find((product) => product.price > 120000);
products.forEach((product) => console.log(product.brand));

console.log(findProduct);
