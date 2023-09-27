# Funkcionális specifikáció

## I. Bevezetés

A Random User Generator egy webes alkalmazás, amely lehetővé teszi felhasználók számára, hogy valósághű felhasználói adatokat generáljanak. Az alkalmazás célja, hogy segítse a fejlesztőket és tesztelőket projektjeik hatékonyabb tesztelésében és fejlesztésében anélkül, hogy valós személyek személyes adatait használnák fel. A program számos funkciót kínál, amelyek lehetővé teszik az adatok testreszabását és különböző formátumokban történő exportálását.

## II. Jelenlegi helyzet

Jelenleg a fejlesztőknek és tesztelőknek szembe kell nézniük azzal a problémával, hogy sok esetben nincsen elég megfelelő adat projektjeik teszteléséhez. Adatvédelmi problémák merülhetnek fel és a valós személyek adatainak felhasználása **kockázatos** lehet. Ezen kívül tesztelés során gyakran van szükség több különféle adatmintára gyorsan. A manuálisan generált adatok pedig időigényesek, sokszor nem hozzák a megfelelő eredményt, ezzel is értékes időt és energiát elvéve a fejlesztő csapattól.

## III. Vágyálomrendszer leírása

A Random User Generator program célja az egyszerű és hatékony módja annak, hogy felhasználók széles skáláját generálhassuk a tesztelés és fejlesztés során. A rendszernek el kell készítenie a felhasználók által megadott preferenciák alapján a felhasználóneveket, és biztosítania kell azokat a felhasználók számára.

A program továbbá lehetőséget nyújt majd arra is, hogy az adatokat különböző formátumokban exportálhassuk, például CSV, JSON vagy SQL formában, így egyszerűen integrálhatóvá válik a különböző fejlesztési és tesztelési folyamatokba.

## IV. Funkcionális követelmények

### 1. Felhasználói adatok generálása

- A program képes valósághű felhasználói adatokat generálni, amelyek magukban foglalják a következő információkat:
  - Teljes név
  - E-mail cím
  - Nemzetiség
  - Profilkép
  - Jövőben hozzáadható opciók pl.: telefonszám, lakcím stb.

### 2. Adatok testreszabása

- A felhasználók lehetőséget kapnak az adatok testreszabására az alábbi szempontok alapján:
  - Nemzetiség kiválasztása
  - Jövőben hozzáadható opciók pl.: nem kiválasztása, korcsoport kiválaasztása, hobbik, foglalkozás stb.

### 3. Adatok exportálása

- Az alkalmazás lehetővé teszi az adatok exportálását különböző formátumokban:
  - CSV (Comma Separated Values): Táblázatos formátumban történő export.
  - JSON (JavaScript Object Notation): Struktúrált adatok exportálása.
  - SQL (Structured Query Language): Adatbázisba történő export.

### 4. Adatok megjelenítése

- Az alkalmazás lehetővé teszi a generált felhasználói adatok megtekintését a webes felületen, mielőtt azokat exportálják vagy használják.

### 5. Adatok mentesése

- A felhasználók menthetik vagy elmenthetik a generált adatokat egyedi projekt mappákba a későbbi hozzáférés és használat céljából.

### 6. Nyelvi beállítások (opcionális)

- Az alkalmazás támogatja a különböző nyelvek kiválasztását, hogy a felhasználók nyelvi preferenciáiknak megfelelően használhassák.

### 7. Bejelentkezés (opcionális)

- Az alkalmazás lehetőséget nyújthat a felhasználóknak a bejelentkezésre, hogy mentse és nyomon kövesse előző generált adatokat.

## V. Nem funkcionális követelmények

### 1. Gyors és hatékony működés

- Az adatok generálása, testreszabása és exportálása gyorsnak és hatékonynak kell lennie, hogy a felhasználók időt spóroljanak a projektjük fejlesztésében és tesztelésében.

### 2. Adatbiztonság

- Az alkalmazásnak biztosítania kell az adatok biztonságos tárolását és kezelését. A felhasználók személyes adatait megfelelően kell védeni és az adatvédelmi előírásoknak megfelelően kell kezelni.

### 3. GDPR és CCPA megfelelés

- Az alkalmazásnak meg kell felelnie a GDPR és a CCPA adatvédelmi szabályozásoknak, különösen akkor, ha olyan felhasználók használják, akik az Európai Unióban vagy Kaliforniában tartózkodnak.

## VI. Követelménylista

### Elengedhetetlen funkciók

- A program képes valósághű felhasználói adatok generálására.
- A felhasználók képesek az adatok testreszabására több kritérium alapján.
- Az alkalmazás támogatja az adatok exportálását különböző formátumokban (CSV, JSON, SQL stb.).
- Az alkalmazás lehetővé teszi a generált adatok megjelenítését a webes felületen.
- Jövőben hozzáadható: generált adatok mappába való mentése, különböző nyelvi beállítások, bejelentkezési opció.

### Opcionális funkciók

- Az adatok gyors generálása és exportálása
- Az alkalmazás biztonságosan kezeli az adatokat

## VII. Forgatókönyvek

A felhasználó felkeersi a Random User Generator webhelyet, majd kiválasztja a generálandó adatok kritériumait, például nemzetiség és elindítja az adatgenerálást.
A felhasználó kiválasztja az "Adatok Exportálása" opciót, majd kiválasztja a kívánt export formátumot, például CSV vagy JSON. Az alkalmazás exportálja az adatokat a választott formátumban, és a felhasználó letöltheti azokat.

![Felépítés](/Abrak/Üzleti_modell_terv.png)

##VIII. Képernyő tervek

![Képernyő tervek](/Abrak/látványterv.png)

## IX. Jelenlegi üzleti folyamatok modellje

Jelenleg a legtöbb fejlsztő és tesztelő manuálisan előállított adatot használ programjaik tesztelése során. Ez lassú, adatvédelmi kockázatai vannak, valamint sokszor nincs is elég megfelelő adat a teszteléshez.
