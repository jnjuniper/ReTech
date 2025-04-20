-- Radera gamla produkter
DELETE FROM products;

-- Återställ auto-increment
DELETE FROM sqlite_sequence WHERE name='products';

-- Lägg till nya teknikprodukter
INSERT INTO products (image, productName, productDescription, brand, SKU, price)
VALUES 
('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg', 'MacBook Pro 13"', 'MacBook Pro 13" från 2020 med M1-processor, 8GB RAM och 256GB SSD. I mycket gott skick med endast mindre slitage.', 'Apple', 'MAC001', 8999),
('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-purple-select-2021?wid=940&hei=1112&fmt=png-alpha', 'iPhone 12', 'iPhone 12 med 128GB lagring. Små repor på baksidan men fungerar perfekt. Batterihälsa 87%.', 'Apple', 'IPH001', 4999),
('https://images.samsung.com/is/image/samsung/p6pim/se/galaxy-s21/gallery/se-galaxy-s21-5g-g991-371133-sm-g991bzadeue-368338324', 'Samsung Galaxy S21', 'Samsung Galaxy S21 i färgen Phantom Gray. 128GB lagring, nytt batteri. I mycket bra skick.', 'Samsung', 'SAM001', 3999),
('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=png-alpha', 'iPad Air 4', 'iPad Air 4th gen med 64GB lagring. Space Gray. Liten repa i ena hörnet men i övrigt i mycket bra skick.', 'Apple', 'IPAD001', 4499),
('https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9310/general/xps-13-9310-silver-black-interior-mu-v2.jpg', 'Dell XPS 13', 'Dell XPS 13 från 2021 med Intel i7, 16GB RAM och 512GB SSD. I mycket bra skick, knappt använd.', 'Dell', 'DELL001', 7499),
('https://www.soundguys.com/wp-content/uploads/2020/09/Sony-WH-1000XM4-ANC-Headphones.jpg', 'Sony WH-1000XM4', 'Sony brusreducerande hörlurar. Knappt använda med original förpackning och tillbehör.', 'Sony', 'SONY001', 1999),
('https://www.lenovo.com/medias/lenovo-laptops-thinkpad-x1-carbon-gen-9-hero.png?context=bWFzdGVyfHJvb3R8MjY0NjU4fGltYWdlL3BuZ3xoZmMvaDFmLzE0MTMzNDMwNDI2NjU0LnBuZ3xlZGIzYTNjYjA1YmI0NjI5ZWJiM2QyYjRmMzEzMDU0NjdmNmRkMjFjYjNkYzk0ZDUxYWIwYjU5MTFjNWU1YTYx', 'Lenovo ThinkPad X1', 'Lenovo ThinkPad X1 Carbon Gen 8 med Intel i5, 16GB RAM och 256GB SSD. Perfekt för kontorsarbete.', 'Lenovo', 'LEN001', 6499),
('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MWP22?wid=2000&hei=2000&fmt=jpeg', 'Apple AirPods Pro', 'Apple AirPods Pro med brusreducering. Helt rena och desinficerade. Batteritid ca 4 timmar.', 'Apple', 'AIR001', 1299),
('https://resource.logitechg.com/w_692,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/mx-master-3/mx-master-3-gallery-1.png', 'Logitech MX Master 3', 'Logitech MX Master 3 mus. Fungerar perfekt, lätta användningsspår.', 'Logitech', 'LOG001', 599),
('https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LTvb?ver=3a58', 'Microsoft Surface Pro 7', 'Surface Pro 7 med Intel i5, 8GB RAM och 256GB SSD. Tangentbord ingår.', 'Microsoft', 'MS001', 5499),
('https://lh3.googleusercontent.com/LvpVFVCG8a8ZiNSfq8voXPRVNlrRW3J-V9PpHbiivUQp-4SaQQRslf2JSJMDPFERnTU_RmK4t5S_LS8u68jiWFJgCnIK2b80=rw-e365-w1440', 'Google Pixel 6', 'Google Pixel 6 med 128GB lagring. I mycket bra skick, inga repor. Originalförpackning medföljer.', 'Google', 'GP001', 3499),
('https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MG2E3ref_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400', 'Apple Watch Series 6', 'Apple Watch Series 6 44mm GPS. Små repor på boetten men i fullt fungerande skick.', 'Apple', 'AW001', 2499);

-- Uppdatera slug-värden baserat på produktnamn
UPDATE products SET slug = LOWER(REPLACE(productName, ' ', '-'));