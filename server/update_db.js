const Database = require("better-sqlite3");
const db = new Database("./db/db.db", { verbose: console.log });

// Radera alla produkter
db.prepare("DELETE FROM products").run();

// Återställ auto-increment
db.prepare("DELETE FROM sqlite_sequence WHERE name='products'").run();

// Lägg till nya produkter med pålitliga platshållarbilder
const insertProduct = db.prepare(`
  INSERT INTO products (image, productName, productDescription, brand, SKU, price)
  VALUES (?, ?, ?, ?, ?, ?)
`);

const products = [
  [
    "https://files.refurbed.com/ii/apple-macbook-pro-2020-133-tb-1648101668.jpg",
    'MacBook Pro 13"',
    'MacBook Pro 13" från 2020 med M1-processor, 8GB RAM och 256GB SSD. I mycket gott skick med endast mindre slitage.',
    "Apple",
    "MAC001",
    8999,
  ],
  [
    "https://inrego.commerce.services/data/product/700f590/apple-apple-iphone-12_4.png",
    "iPhone 12",
    "iPhone 12 med 128GB lagring. Små repor på baksidan men fungerar perfekt. Batterihälsa 87%.",
    "Apple",
    "IPH001",
    4999,
  ],
  [
    "https://inrego.commerce.services/data/product/1000w/samsung-samsung-galaxy-s21-5g_11.png",
    "Samsung Galaxy S21",
    "Samsung Galaxy S21 i färgen Phantom Gray. 128GB lagring, nytt batteri. I mycket bra skick.",
    "Samsung",
    "SAM001",
    3999,
  ],
  [
    "https://www.proshop.se/Images/915x900/3054991_6fc632ab36fa.png",
    "iPad Air 4",
    "iPad Air 4th gen med 64GB lagring. Space Gray. Liten repa i ena hörnet men i övrigt i mycket bra skick.",
    "Apple",
    "IPAD001",
    4499,
  ],
  [
    "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/9345/media-gallery/touch/gray/notebook-xps-13-9345-t-gray-gallery-5.psd?fmt=pjpg&pscan=auto&scl=1&wid=3509&hei=2082&qlt=100,1&resMode=sharp2&size=3509,2082&chrss=full&imwidth=5000",
    "Dell XPS 13",
    "Dell XPS 13 från 2021 med Intel i7, 16GB RAM och 512GB SSD. I mycket bra skick, knappt använd.",
    "Dell",
    "DELL001",
    7499,
  ],
  [
    "https://www.sony.se/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320",
    "Sony WH-1000XM4",
    "Sony brusreducerande hörlurar. Knappt använda med original förpackning och tillbehör.",
    "Sony",
    "SONY001",
    1999,
  ],
  [
    "https://media.elkjop.com/assets/image/dv_web_D1800010021082983",
    "Lenovo ThinkPad X1",
    "Lenovo ThinkPad X1 Carbon Gen 8 med Intel i5, 16GB RAM och 256GB SSD. Perfekt för kontorsarbete.",
    "Lenovo",
    "LEN001",
    6499,
  ],
  [
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    "Apple AirPods Pro",
    "Apple AirPods Pro med brusreducering. Helt rena och desinficerade. Batteritid ca 4 timmar.",
    "Apple",
    "AIR001",
    1299,
  ],
  [
    "https://www.kjell.com/globalassets/productimages/852244_65123.jpg?ref=52AF5FBB7B&format=jpg&w=960&h=960&mode=pad",
    "Logitech MX Master 3",
    "Logitech MX Master 3 mus. Fungerar perfekt, lätta användningsspår.",
    "Logitech",
    "LOG001",
    599,
  ],
  [
    "https://files.refurbed.com/ii/microsoft-surface-pro-7-1035g4-1657711121.jpg",
    "Microsoft Surface Pro 7",
    "Surface Pro 7 med Intel i5, 8GB RAM och 256GB SSD. Tangentbord ingår.",
    "Microsoft",
    "MS001",
    5499,
  ],
  [
    "https://mobilfastfix.se/wp-content/uploads/2024/03/google-pixel-6-pro.jpg",
    "Google Pixel 6",
    "Google Pixel 6 med 128GB lagring. I mycket bra skick, inga repor. Originalförpackning medföljer.",
    "Google",
    "GP001",
    3499,
  ],
  [
    "https://www.klockmagasinet.com/media/catalog/product/a/p/apple_watch_nike_series_6_cellular_44mm_space_gray_aluminum_anthracite_sport_band_34r_screen__usen.jpg?width=700&height=700&store=kk_se&image-type=image",
    "Apple Watch Series 6",
    "Apple Watch Series 6 44mm GPS. Små repor på boetten men i fullt fungerande skick.",
    "Apple",
    "AW001",
    2499,
  ],
];

// Utför insättningar i en transaktion
const transaction = db.transaction(() => {
  for (const product of products) {
    insertProduct.run(...product);
  }
});

transaction();

// Uppdatera slug-värden baserat på produktnamn
db.prepare(
  "UPDATE products SET slug = LOWER(REPLACE(productName, ' ', '-'))"
).run();

console.log("Databasen har uppdaterats med teknikprodukter.");

// Stäng databasen
db.close();
