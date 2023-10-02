# Rendszerterv

## I. A Rendszer Célja

A rendszerterv célja, hogy létrehozza a "Random User Generator" webes alkalmazást, amely lehetővé teszi felhasználók számára valósághű felhasználói adatok generálását. Az alkalmazás segítségével a fejlesztők és tesztelők hatékonyabban tesztelhetik és fejleszthetik projektjeiket anélkül, hogy valós személyek adatait használnák fel.

## II. Projektterv

### Projektszerepkörök és Felelősségek

- **Projektvezető:**

  - Felelős a projekt koordinációjáért és a határidők betartásáért.
  - Irányítja a fejlesztők és tesztelők munkáját.
  - Projektvezető neve: [Takács Zoltán]

- **Fejlesztők:**

  - Az alkalmazás fejlesztéséért és karbantartásáért felelős személyek.
  - Frontend és backend fejlesztők egyaránt.
  - Fejlesztők nevei:
    1. Pongó Petra - Frontend fejlesztő
    2. Mázik Milán - Frontend fejlesztő
    3. Takács Zoltán - Backend fejlesztő

- **Tesztelők:**
  - Az alkalmazás teszteléséért és hibák felderítéséért felelős személyek.
  - Tesztelők nevei:
    1. [Mázik Milán]
    2. [Pongó Petra]
    3. [Takács Zoltán]

### Projektmunkások és Felelősségeik

- **Frontend fejlesztők:**

  - Az alkalmazás felhasználói felületének kialakítása és fejlesztése.
  - Frontend fejlesztők nevei:
    1. Pongó Petra
    2. Mázik Mián

- **Backend fejlesztők:**
  - Az alkalmazás háttérlogikájának fejlesztése és adatkezelése.
  - Backend fejlesztők nevei:
    1. Mázik Milán

### Ütemterv

A projekt ütemtervét a következő mérföldkövek határozzák meg:

1. **Projektterv elkészítése** - 2023.09.20
2. **Funkcionális specifikáció készítése** - 2023.09.23
3. **Követelményspecifikáció készítése** - 2023.09.23
4. **Rendszerterv készítése** - 2023.09.29
5. **Fejlesztési fázis kezdete** - 2023.09.29
6. **Alkalmazás tesztelése** - 2024.10.04
7. **Alkalmazás kiadása** - 2024.10.06

## III. Üzleti Folyamatok Modellje

### Üzleti Szereplők

- **Fejlesztők**
- **Tesztelők**
- **Projektvezető**

### Üzleti Folyamatok

1. **Adatgenerálás**
   - Fejlesztők és tesztelők generálnak valósághű felhasználói adatokat az alkalmazás segítségével.
2. **Adatok Testreszabása**
   - Felhasználók testre szabhatják a generált adatokat, például nemzetiség, korcsoport vagy hobbik alapján.
3. **Adatok Exportálása**
   - Felhasználók exportálják az adatokat különböző formátumokban (CSV, JSON, SQL stb.).
4. **Adatok Megjelenítése**
   - Felhasználók megtekinthetik a generált adatokat a webes felületen.
5. **Adatok Mentése**
   - Felhasználók menthetik a generált adatokat egyedi projekt mappákba a későbbi hozzáférés és használat céljából.

## IV. Követelmények

### Funkcionális Követelmények

- Az alkalmazásnak képesnek kell lennie valósághű felhasználói adatok generálására.
- Felhasználóknak lehetőségük kell lennie az adatok testreszabására több szempont alapján.
- Az alkalmazásnak támogatnia kell az adatok exportálását különböző formátumokban (CSV, JSON, SQL stb.).
- Az alkalmazásnak lehetővé kell tennie a generált adatok megjelenítését a webes felületen.
- Felhasználóknak lehetőségük kell adni az adatok mentésére projekt mappákba.

### Nem Funkcionális Követelmények

- Az alkalmazásnak gyorsnak és megbízhatónak kell lennie.
- Az alkalmazásnak felhasználóbarátnak kell lennie és egyszerűen kezelhetőnek kell lennie.
- Az alkalmazásnak biztonságosnak kell lennie, és védenie kell az érzékeny felhasználói adatokat.
- Az alkalmazásnak skálázhatónak kell lennie, hogy megbirkózzon a növekvő felhasználói igényekkel.

## V. Rendszerarchitektúra

### Alkalmazás Komponensei

- **Frontend réteg:** A felhasználói felület megjelenítése és a felhasználói interakciók kezelése.
- **Backend réteg:** Az alkalmazás üzleti logikájának és adatkezelésének kezelése.
- **Adatbázis:** Felhasználói adatok tárolása és kezelése.

### Technológiai Stack

- **Frontend:** HTML, CSS, JavaScript, React
- **Backend:** Node.js, Express.js
- **Adatbázis:** MongoDB
- **Webes Szerver:** Nginx
- **Biztonság:** SSL/TLS titkosítás, JWT autentikáció

## VI. Adatmodell

Az adatmodell tartalmazza a felhasználói adatok struktúráját, beleértve a nevet, címet, emailt, telefonszámot stb.

## VII. Felhasználói Felület

Az alkalmazás felhasználói felülete egyszerű és intuitív lesz. A felület tartalmazni fogja a következő fő funkciókat:

- Adatgenerálás és testreszabás opciók.
- Exportálási lehetőségek különböző formátumokban.
- Az exportált adatok megtekintése.
- Adatok mentése projekt mappákba.
- Beállítások kezelése.

## VIII. Teszt Terv

A tesztelés az alkalmazás fejlesztésének létfontosságú része, amely segít azonosítani a potenciális hibákat és biztosítja a szoftver minőségét. A teszteket a fejlesztők hajtják végre, és a fejlesztés különböző szakaszaiban valósulnak meg.A tesztelés az alkalmazás fejlesztésének létfontosságú része, amely segít azonosítani a potenciális hibákat és biztosítja a szoftver minőségét. A teszteket a fejlesztők hajtják végre, és a fejlesztés különböző szakaszaiban valósulnak meg.
### Tesztelési Fázisok

1. **Modul Tesztek:** A fejlesztők modul teszteket hajtanak végre minden egyes komponensre és funkcióra, amint az elkészül. Ezek a tesztek a kódban található apró hibák azonosítását és javítását célozzák meg.

2. **Integrációs Tesztek:** Miután a különálló modulok elkészültek, az integrációs tesztek célja azok együttes működésének ellenőrzése. Ellenőrizni fogjuk, hogy az egyes komponensek közötti kommunikáció és adatcsere zökkenőmentesen működik-e.

3. **Rendszer Tesztek:** Ebben a fázisban az alkalmazás egészét teszteljük, és ellenőrizzük annak megfelelőségét a specifikációknak. A rendszer teljes funkcionalitását és teljesítményét ellenőrizzük.3. **Rendszer Tesztek:** Ebben a fázisban az alkalmazás egészét teszteljük, és ellenőrizzük annak megfelelőségét a specifikációknak. A rendszer teljes funkcionalitását és teljesítményét ellenőrizzük.
### Alpha Teszt

Az alpha teszt a fejlesztő csapat részvételével zajlik le, és annak célja az alkalmazás funkcióinak alapos ellenőrzése. Az alábbiak szerint folyik majd:

- **Funkcionális Teszt:** Ellenőrizzük az alkalmazás minden funkcióját, és győződjünk meg róla, hogy a tervezett működésnek megfelelően működik-e.
- **Böngésző Kompatibilitás Teszt:** Teszteljük az alkalmazás különböző böngészőkben történő megjelenését és működését, például Chrome, Firefox, Safari, Edge.
- **Teljesítmény Teszt:** Az alkalmazás teljesítményét és válaszidejét ellenőrizzük különböző terhelési szinteken.
- **Adatbiztonsági Teszt:** Ellenőrizzük az alkalmazás által kezelt adatok biztonságát és az esetleges sebezhetőségeket.

### Béta Teszt

A béta teszt az alkalmazás korlátozott nyilvános elérhetőségét jelenti, és valódi felhasználók vesznek részt. A béta teszt fő célja az alkalmazás teljesítményének és megbízhatóságának további ellenőrzése valós körülmények között. A béta teszt során a következőket fogjuk elvégezni:

- **Felhasználói Visszajelzések Gyűjtése:** Az elsődleges cél az, hogy a valós felhasználók visszajelzéseket adjanak az alkalmazásról és az esetleges hibákról.
- **Teljesítmény Figyelése:** Monitorozzuk az alkalmazás teljesítményét és stabilitását valós időben.
- **Adatok Biztonságának Ellenőrzése:** Biztosítjuk, hogy a felhasználói adatok továbbra is biztonságban legyenek.

A béta teszt eredményei alapján döntünk majd az alkalmazás végleges kiadásáról és a szükséges hibajavításokról. Az alkalmazás hivatalosan is elérhető lesz a nagyközönség számára.

A tesztelési fázisok és tesztek kidolgozása során az összes tesztelési tevékenység dokumentálásra kerül, és a hibák azonnal jelentésre kerülnek és javításra kerülnek.

## IX. Karbantartási Terv

A weboldal folyamatos üzemeltetése és karbantartása létfontosságú annak érdekében, hogy biztosítsuk a zavartalan működést és a felhasználók elégedettségét. A karbantartási terv a következő tevékenységeket foglalja magában: