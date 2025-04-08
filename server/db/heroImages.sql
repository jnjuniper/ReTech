CREATE TABLE heroImages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    image TEXT,
    altText TEXT NOT NULL
);

INSERT INTO heroImages (image, altText) 
VALUES 
('https://thermory.com/wp-content/uploads/2022/04/walls-stp-15x90-alder-benches-shp-28x90-alder-thermory.jpg','Picture of a Sauna'),
('https://media.architecturaldigest.com/photos/623379e77dadd8c1b1bd7bbe/master/w_1600%2Cc_limit/GettyImages-1065865774.jpg','Picture of another Sauna');
