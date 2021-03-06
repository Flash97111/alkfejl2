Készítette: Berecz Ádám
### help

- netstat -ao |find /i "listening"
- Taskkill /F /IM id
- npm install --save @angular/material @angular/cdk

# Feladat leírása
- A cél egy webes alkalmazás elkészítése, ahol a felhasználóknak regisztráció/bejelentkezés után lehetőségük van különböző éttermek és kínálatuk böngészésére, étel rendelésére, rendeléseik megtekintésére.
# Szerepkörök
### Vendég
 - Éttermek és kínálatuk böngészése
 - Regisztráció / bejelentkezés
### Felhasználó
 - Étel rendelése
 - Rendelések megtekintése / törlése
### Admin
 - Éttermek hozzáadása / törlése
 - Ételek hozzáadása / törlése
 - Felhasználók rendelésének megtekintése / törlése
 - Felhasználó törlése, jogosultságának módosítása
# Nem funkcionális követelmények
- Felhasználóbarát, könnyen áttekinthető elrendezés és kinézet
- Gyors működés
- Biztonságos működés
# Funkcionális követelmények
### Adatbázis

| Kapcsolatok |
| ------------- |
| *Restaurant **-1--N-** Order* |
| *User **-1--N-** Order*  |
| *Food **-1--N-** Order* |
| *Food **-N--N-** Restaurant* |

![alt text](https://github.com/Flash97111/alkfejl2/blob/master/img/db.png)

**USER**

| Oszlop | Tipus | Leiras |
| ------------- | ------------- | ------------- |
| ID  | int  | elsődleges kulcs |
| USERNAME  | varchar | felhasználónév |
| PASSWORD  | varchar | jelszó |
| ROLE | varchar | ROLE_USER vagy ROLE_ADMIN |
| TEL | varchar | telefonszám |
| ADDRESS | varchar | lakcím |

**RESTAURANT**

| Oszlop | Tipus | Leiras |
| ------------- | ------------- | ------------- |
| ID  | int  | elsődleges kulcs |
| NAME  | varchar | étterem neve |
| ADDRESS  | varchar | cím |
| TEL  | varchar | telefonszám |

**FOOD**

| Oszlop | Tipus | Leiras |
| ------------- | ------------- | ------------- |
| ID  | int  | elsődleges kulcs |
| NAME | varchar | név |
| PRICE | int | ár |
| DESCRIPTION | varchar | leírás |
| IMAGE | varchar | kép elérése |


**ORDER**

| Oszlop | Tipus | Leiras |
| ------------- | ------------- | ------------- |
| ID  | int  | elsődleges kulcs |
| RESTAURANT_ID  | int | étterem ID-ja |
| FOOD_ID | int | étel ID-ja |
| USER_ID | int | rendelő ID-ja |
| QTY | int | mennyiség |
| DATE | date | rendelés ideje |

### Használati esetek
![alt text](https://github.com/Flash97111/alkfejl2/blob/master/img/usecase.PNG)

### Végpontok
***ROLE_GUEST***

| Metódus | Request | Leírás |
| ------------- | ------------- | ------------- |
| GET  | / | Főoldal |
| GET  | /restaurants | Éttermek |
| GET  | /restaurants/{ID} | Adott étterem ételei |
| POST  | /login | Bejelentkezési adatok küldése |
| POST | /register | Regisztrációs adatok küldése |

***ROLE_USER***

| Metódus | Request | Leírás |
| ------------- | ------------- | ------------- |
| GET  | /orders/my/{username} | Saját rendelések |
| POST  | /restaurants/{ID} | Új rendelés |
| DELETE  | /orders/{orderID} | Adott ID-jú rendelés törlése |

***ROLE_ADMIN***

| Metódus | Request | Leírás |
| ------------- | ------------- | ------------- |
| GET  | /users | Felhasználók |
| GET  | /orders | Rendelések |
| PUT  | /users/admin/{ID} | Adott ID-jú felhasználó adminná tétele |
| PUT  | /users/{ID} | Adott ID-jú felhasználó admin jogának elvétele |
| POST  | /restaurants | Új étterem létrehozása |
| POST  | /foods | Új étel létrehozása |
| PUT  | /restaurants/{restaurantID} | Adott étel hozzáadása adott étteremhez |
| POST  | /restaurants/{restaurantID}/{foodID} | Adott étel törlése adott étteremből |
| DELETE | /restaurants/{ID}  | Adott ID-jú étterem törlése |
| DELETE | /foods/{ID}  | Adott ID-jú étel törlése |
| DELETE | /orders/{ID} | Adott ID-jú rendelés törlése |
| DELETE  | /users/{ID} | Adott ID-jú felhasználó törlése |
