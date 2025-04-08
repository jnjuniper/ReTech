
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    productName TEXT NOT NULL,
    productDescription TEXT,
    brand TEXT,
    sku TEXT UNIQUE NOT NULL,
    price REAL NOT NULL,
    slug TEXT
);



UPDATE products
SET slug = LOWER(REPLACE(productName, ' ', '-'));


INSERT INTO products (image, productName, productDescription, brand, sku, price, slug) 
VALUES 
('https://piggabutiken-18eaa.kxcdn.com/6865-large_default/better-you-eterisk-olja-boswellia-10ml.jpg', 'Eterisk Olja Boswellia 10ml', 'Ekologisk boswellia/frankincenseolja (Boswellia Serrata) framställd genom destillering av blad. En olja perfekt för meditation som ger en avlappnande effekt vid aromaterapi. Bra för torr, mogen och oren hud.', 'Better You', 'OL1', 199, 'eterisk-olja-boswellia-10ml'),
('https://piggabutiken-18eaa.kxcdn.com/8287-large_default/rosolja-eko-eterisk-5-ml.jpg', 'Eterisk Olja Ros 5ml', '100% eterisk ekologisk rosolja från Rosa Damascena, som är en av de absolut finaste och exklusivaste rossorterna. Den har en rik, varm, söt och blommig doft.', 'Better You', 'OL2', 249, 'eterisk-olja-ros-5ml'),
('https://piggabutiken-18eaa.kxcdn.com/9431-large_default/eterisk-olja-bastu.jpg', 'Eterisk olja - Bastu', 'Sätt dig bekvämt och andas in den uppfriskande ångan. Låt de eteriska oljornas egenskaper verka medan du slappnar av och njuter av bastuns värme.', 'Better You', 'OL3', 149, 'eterisk-olja-bastu'),
('https://piggabutiken-18eaa.kxcdn.com/7693-large_default/better-you-eterisk-olja-sandeltra-5ml.jpg', 'Eterisk Olja Sandelträ 5ml', 'Ekologisk eterisk Sandelträolja (Santalum Album tree). Sandelträ har en djup, söt träig doft och är framställd genom destillering av trä. Sandelträolja är bra för aknebenägen hud samt kliande hud. Passar också som aftershave då den är antiseptisk och har en lätt sammandragande effekt.', 'Better You', 'OL4', 299, 'eterisk-olja-sandeltra-5ml'),
('https://axlings.se/app/uploads/2022/01/Sauna-Cap-Linen-Terry-natural-offwhite-691.jpg','Bastumössa', 'Bastumössa i linnefrotté, 60 % linne och 40 % bomull. Blöt bastumössan i kallt vatten för att hålla huvudet svalt i bastun. Eller bär den torr i utomhusjacuzzin. Eller gör en hårinpackning i en varm/fuktig mössa.', 'Natural', 'HAT1', 449, 'bastumossa'),
('https://axlings.se/app/uploads/2022/01/Sauna-Towel-Linen-Terry-natural-offwhite-681.jpg','Bastuhandduk', 'Bastuhandduk i linnefrotté, 60 % linne och 40 % bomull. Perfekt att ta med till en offentlig bastu för en mer bekväm och hygienisk sittupplevelse. Praktisk hängare. Även vacker som handduk!', 'Natural', 'CLOTH1', 299, 'bastuhandduk'),
('https://www.bastukallan.se/media/1857/bastukallan-basturuska-bjork.jpg?mode=pad&width=960&height=540&bgcolor=fff&format=webp&quality=60&rnd=131698331520000000', 'Basturuska Björk', 'Björkruskan avger en doft av björk och är oumbärlig för ett skönt bastubad. Den förhöjer känslan av renhet. Björkruskan ger massage och stimulerar blodcirkulationen.', 'SB Originals', 'MISC1', 149, 'basturuska-bjork'),
('https://www.bastukallan.se/media/2382/1-028-638-1-028-648-1-027-900-1-028-293-1-028-002-a-453-b-d-f-nl-i-e.jpg?mode=pad&width=960&height=540&bgcolor=fff&format=webp&quality=60&rnd=132452459620000000', 'Startpaket för bastun', 'Perfekt startpaket för din bastu! Innehåller bastustäva i trä med plastinsatt rymmer 4l, träskopa, termometer/hygrometer, sandur 15min och 5 st 10ml bastudofter innehållande apelsin, mint, citronmeliss, tall och eukalyptus.', 'SB Originals', 'MISC2', 1999, 'startpaket-for-bastun');
