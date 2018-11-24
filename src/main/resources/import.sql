INSERT INTO `USER` (`USERNAME`, `ADDRESS`, `PASSWORD`, `PHONE`, `ROLE`) VALUES ('admin', 'utca hazszam', '$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu', '06301111111', 'ROLE_ADMIN');
INSERT INTO `USER` (`USERNAME`, `ADDRESS`, `PASSWORD`, `PHONE`, `ROLE`) VALUES ('user', 'utca2 hazszam2', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', '06302222222', 'ROLE_USER');

INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Kaja1', 'KajaDesc1', 'Kep1', 1000);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Kaja2', 'KajaDesc2', 'Kep2', 2000);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Kaja3', 'KajaDesc3', 'Kep3', 3000);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Kaja4', 'KajaDesc4', 'Kep4', 4000);

INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('EtteremUtca1 EtteremHazszam1', 'Etterem1', 'telefon1');
INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('EtteremUtca2 EtteremHazszam2', 'Etterem2', 'telefon2');
INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('EtteremUtca3 EtteremHazszam3', 'Etterem3', 'telefon3');
INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('EtteremUtca4 EtteremHazszam4', 'Etterem4', 'telefon4');

INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES (CURRENT_TIMESTAMP, 3, 1, 1, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES (CURRENT_TIMESTAMP, 2, 2, 1, 2);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES (CURRENT_TIMESTAMP, 2, 3, 2, 2);

INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,1);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,2);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,3);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (2,3);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,1);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,3);