const express = require("express");
const Database = require("better-sqlite3");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 8000;

const db = new Database("./db/db.db", {
  verbose: console.log,
});

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/api/products", (req, res) => {
  const searchTerm = req.query.search || "";

  const select = db.prepare(`
        SELECT id, image, productName, productDescription, brand, SKU, price, slug 
        FROM products
        WHERE productName LIKE ?
    `);

  const products = select.all(`%${searchTerm}%`);

  res.json(products);
});
app.get("/api/products/:slug", (req, res) => {
  const { slug } = req.params;
  const select = db.prepare(`
        SELECT id, image, productName, productDescription, brand, SKU, price, slug
        FROM products 
        WHERE slug = ?
    `);
  const product = select.get(slug);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

app.get("/api/similar-products/:slug", (req, res) => {
  const { slug } = req.params;
  const product = db
    .prepare("SELECT brand FROM products WHERE slug = ?")
    .get(slug);
  if (product) {
    const selectSimilar = db.prepare(`
            SELECT id, image, productName, productDescription, brand, SKU, price, slug
            FROM products 
            WHERE brand = ? AND slug != ? 
            LIMIT 3
        `);
    const similarProducts = selectSimilar.all(product.brand, slug);
    res.json(similarProducts);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});
app.get("/api/heroImages", (req, res) => {
  const select = db.prepare(
    "SELECT id, image, altText, imageDescription FROM heroImages"
  );

  const heroImages = select.all();

  res.json(heroImages);
});

app.get("/api/spots", (req, res) => {
  const select = db.prepare("SELECT id, image, altText, title FROM spots");
  const spots = select.all();
  res.json(spots);
});

app.post("/api/products", (req, res) => {
  const { image, productName, productDescription, brand, sku, price } =
    req.body;
  const product = { image, productName, productDescription, brand, sku, price };

  const insert = db.prepare(`
        INSERT INTO products (
        image,
        productName,
        productDescription,
        brand,
        sku,
        price
        ) VALUES (
            @image,
            @productName,
            @productDescription,
            @brand,
            @sku,
            @price 
        )`);

  insert.run(product);

  res.status(201).send();
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
