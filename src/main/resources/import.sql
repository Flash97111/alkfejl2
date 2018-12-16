INSERT INTO `USER` (`USERNAME`, `ADDRESS`, `PASSWORD`, `PHONE`, `ROLE`) VALUES ('admin', 'Csapo u. 13', '$2a$04$aRYAGeJbvX20Cb26UPoPdeFiiuqIbhSwOObz7UU7.nRu3rbsCNVUu', '06301111111', 'ROLE_ADMIN');
INSERT INTO `USER` (`USERNAME`, `ADDRESS`, `PASSWORD`, `PHONE`, `ROLE`) VALUES ('user', 'Hatvan u. 22', '$2a$04$kC3QuGXSejTid5IHELpRru9yoPTbUNH1StCt.BHAg/XFn/lyRmw2C', '06302222222', 'ROLE_USER');


INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Rantott sajt', 'rizzsel, tartarmartassal', 'http://ocdn.eu/pulscms-transforms/1/KcHktkqTURBXy84NDFhNzU3YmJmOWY1Yjg0NzFjYTAwODQxNDAzM2M3OS5qcGVnkpUDACXNBFzNAnOTBc0DFM0BvA', 1390);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Rantott camembert', 'rizzsel, afonyamartassal', 'https://img-global.cpcdn.com/016_recipes/123e583e1562547c/751x532cq70/a-tokeletes-rantott-camembert-receptje-recept-foto.jpg', 1390);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Vega tal', 'rantott gomba, rantott karfiaol, salata, sult krumpli', 'https://i0.wp.com/pandabufe.hu/hirek/wp-content/uploads/2016/06/vega-ta%CC%81l.jpg?ssl=1', 2500);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Zoldborsofozelek', 'fasirttal', 'https://csaladireceptkonyv.hu/storage/images/recipes/31625.jpg', 1090);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Finomfozelek', 'sult virslivel', 'http://www.mindmegette.hu/images/13/O/20653_finomfozelek_sult_virslivel_n-201510170452.jpg', 1090);

INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Bolognai spagetti', '', 'http://www.mindmegette.hu/images/215/O/bolognai_spagetti.jpg', 1790);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Carbonara spagetti', '', 'http://www.mindmegette.hu/images/162/O/crop_201608250944_carbonara_spagetti.jpg', 1790);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Csirkes penne', '', 'https://www.nosalty.hu/files/imagecache/recept/recept_kepek/csirkespenne.jpg', 1890);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Pestos penne', 'cukkinivel', 'https://kep.cdn.indexvas.hu/1/0/1788/17889/178891/17889164_9b01b7f32c809380b7c70c011b1384e8_wm.jpg', 1990);

INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Margherita', 'bazsalikom, mozzarella', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/03/pizza-debrecen-margherita.jpg', 1290);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Salamino', 'mozzarella, szalami', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/03/pizza-debrecen-salamino.jpg', 1390);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Hawaii', 'ananasz, mozzarella, sonka', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/03/pizza-debrecen-hawaii.jpg', 1450);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Famosa', 'kukorica, mozzarella, sonka', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/03/pizza-debrecen-famosa.jpg', 1450);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Tonno', 'hagyma, mozzarella, tonhal', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/04/pizza-debrecen-tonno.jpg', 1590);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Bianco bacon', 'bacon, hagyma, sajt', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/03/pizza-debrecen-bianco-bacon.jpg', 1490);

INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Olaszos csirkemell', 'rizzsel', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/06/pizza-debrecen-olaszos-csirkemell.jpg', 2550);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Kakukkfuves csirkemell', 'burgonyapure, epermartas', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/06/pizza-debrecen-kakukkfuves-csirke.jpg', 2500);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Belszin steak', 'steak burgonya, salata', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/06/pizza-debrecen-belszin.jpg', 4850);
INSERT INTO `FOOD` (`NAME`, `DESCRIPTION`, `IMAGE`, `PRICE`) VALUES ('Baranycomb steak', 'fott burgonya, salata', 'http://flat-pizza-debrecen.hu/wp-content/uploads/2018/06/pizza-debrecen-barany.jpg', 3790);


INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('Debrecen, Csapo u. 30', 'Vega Etterem', '(30) 204 0600');
INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('Debrecen, Balmazujvarosi ut 1', 'Teszta Etterem', '(20) 800 7439');
INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('Debrecen, Boszormenyi ut 1', 'Pizzeria', '(52) 688 668');
INSERT INTO `RESTAURANT` (`ADDRESS`, `NAME`, `PHONE`) VALUES ('Debrecen, Piac u. 11-15', 'Grand Hotel Aranybika', '(20) 363 6121');

INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.15 11:25', 3, 1, 1, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.16 22:05', 1, 2, 1, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 2, 3, 2, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 3, 4, 2, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 1, 6, 3, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 4, 5, 3, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 2, 7, 4, 1);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 1, 8, 4, 2);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 5, 9, 3, 2);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 1, 11, 1, 2);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 1, 10, 2, 2);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 2, 2, 1, 2);
INSERT INTO `ORDERED` (`TIME`, `QTY`, `FOOD_ID`, `RESTAURANT_ID`, `USER_ID`) VALUES ('2018.12.20 12:15', 3, 3, 2, 2);

INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,1);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,2);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,3);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,4);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (1,5);

INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (2,6);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (2,7);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (2,8);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (2,9);

INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,10);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,11);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,12);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,13);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (3,14);

INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (4,8);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (4,9);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (4,15);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (4,16);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (4,17);
INSERT INTO `RESTAURANT_FOODS` (`RESTAURANTS_ID`, `FOODS_ID`) VALUES (4,18);
