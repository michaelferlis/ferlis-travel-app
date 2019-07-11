
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);



CREATE TABLE "trips" (
    "id" SERIAL PRIMARY KEY,
    "trip_name" VARCHAR(100),
    "trip_comments" VARCHAR(1000)
    
);

INSERT ROW INTO "trip_days";


INSERT INTO "public"."trip_days" VALUES("id", "day", "city", "travel_information", "hotel", "restaurant_reservations", "day_comments", "trip_id");

CREATE TABLE "trip_days" (
    "id" SERIAL PRIMARY KEY,
    "day" DATE,
    "city" VARCHAR(60),
    "travel_information" VARCHAR(1000),
    "hotel" VARCHAR(1000),
    "restaurant_reservations" VARCHAR(1000),
    "day_comments" VARCHAR(1000),
--    "trip_name" VARCHAR (1000)
    "trip_id" integer REFERENCES "trips"
);

DROP TABLE "user", "trip_days", "user_trips", "trips";
DROP TABLE "trip_days", "trips";
DROP TABLE "user_trips";

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user_trips" (
    "id" SERIAL PRIMARY KEY,
    "trip_id" INT REFERENCES "trips",
    "user_id" integer REFERENCES "user"

    
);

INSERT INTO "trip_days" ("day", "city", "travel_information", "hotel", "restaurant_reservations", "day_comments", "trip_id")
Values ('8-27-2019', 'seattle', 'msp>sea', 'DL2622 8:45am', 'Marriott', 'Spinasse @ 8:30pm', '1');

INSERT INTO "trips" ("trip_name", "trip_comments")
Values('pacific northwest', 'Planning a trip in August 2019');

INSERT INTO "user" ("username", "password")
Values('michael', 'zoey');

INSERT INTO "user_trips" ("trip_name", "user_id")
Values('pacific northwest', '1');


SELECT * FROM "user_trips";

INSERT INTO "trip_days" ("day", "city", "travel_information", "hotel", "restaurant_reservations", "day_comments", "trip_id")
Values ('12-27-1988', 'insert city', 'insert travel', 'insert hotel', 'insert restaurant reservations', 'comments?', '2');


SELECT * FROM "trip_days";

SELECT * FROM "trips" JOIN "trip_days";

SELECT "species"."species_name", "class"."class_name" FROM "species" JOIN "class" ON "species"."class_id" = "class"."id";

SELECT * FROM "trip_days";
JOIN "trips" ON ;

SELECT * FROM "trips" JOIN "trip_days"
ON "trip_days"."trip_id" = "trips"."id";

SELECT * FROM "trips" WHERE "id"=$1 LIMIT 1;





SELECT * FROM "trips" JOIN "trip_days"
    ON "trip_days"."trip_id" = "trips"."id"
ORDER BY "day";


SELECT * FROM "trips";

SELECT * FROM "trip_days" WHERE "id" = 2;


UPDATE "trip_days"
    SET "day" = '01-12-1999', 
    "city" = 'city test', 
    "travel_information" = 3, 
    "hotel" = 4, 
    "restaurant_reservations" = 5, 
    "day_comments" = 6 
    WHERE id=38;
    
    UPDATE "trips"
    SET "complete" = 'true' 
    WHERE "id"= 30;
    
UPDATE "trips"
    SET "trip_name" = 'test name', 
    "trip_comments" = 'test comments' 
    WHERE id=27;


SELECT * FROM "trips"
JOIN "trip_days" ON "trip_days"."trip_id" = "trips"."id"
JOIN "user_trips" ON "user_trips"."trip_id" = "trips"."id"
JOIN "user" ON "user_trips"."user_id" = "user"."id"
WHERE "user_id" = 1 ORDER BY "day";

SELECT "trip_name", "trips"."id" AS "id", "user_id", "complete"  FROM "trips"

JOIN "user_trips" ON "user_trips"."trip_id" = "trips"."id"
JOIN "user" ON "user_trips"."user_id" = "user"."id"
WHERE "user_id" = 1 ORDER BY "trip_name";

SELECT * FROM "trips" ;


CREATE TABLE "user_trips" (
    "id" SERIAL PRIMARY KEY,
    "trip_id" INT REFERENCES "trips",
    "user_id" integer REFERENCES "user"

    
);



