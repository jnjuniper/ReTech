
CREATE TABLE spots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    altText TEXT NOT NULL,
    title TEXT
);

INSERT INTO spots (image, altText, title)
VALUES
('https://lh3.googleusercontent.com/MWyVtcMTB5gYP2znpC1hnCX35-MNhUvxoeWSpBowzCdfZkzCfI1PXjcFMC-Aejx8ouHBLT9wZBWda-xpazwBtTBF1X1d8kTaIA','Trevlig-stund','Träredskap'),
('https://thermory.com/wp-content/uploads/2022/04/Sauna-by-Thermory_thermo_radiata_pine_Estonia_photos-Elvo-Jakobson_web.jpg-1-1600x1067.jpg','bastu-stenar','Termometrar'),
('https://www.betteryou.se/pub_images/original/Bad_13.png','Oljor','Tillbehör');