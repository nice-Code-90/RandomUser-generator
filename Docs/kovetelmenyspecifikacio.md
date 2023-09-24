# Követelmény specifikáció

## I.Áttekintés

Új szoftver vagy alkalmazás fejlesztésénél, az egyik legfontosabb lépés a tesztelés. Ennek folyamán előfordulhat, hogy nagy mennyiségű adatra van szükségünk, annak érdekében, hogy meggyőződhessünk alkalmazásunk hibátlan működéséről. Ezt valahogy megkell oldanunk anélkül, hogy valódi emberek információit használjuk fel. Itt jön képbe csapatunk _Random User Generator_ programja.

A program célja webes felületen lehetővé tenni a fejlesztők és tesztelők számára, hogy létrehozhassanak nagy mennyiségű valósnak tűnő felhasználói adatot. Segítségével hatékonyabban lehet tesztelni a projekteket, anélkül, hogy adatvédelmi kockázatok miatt kellene aggódni. Ezáltal a fejlesztők gyorsabban dolgozhatnak, valamint biztosak lehetnek abban, hogy a generált információk nem kapcsolódnak valós személyekhez.

## II.Jelenlegi helyzet

Jelenleg a fejlesztőknek és tesztelőknek szembe kell nézniük azzal a problémával, hogy sok esetben nincsen elég megfelelő adat projektjeik teszteléséhez. Adatvédelmi problémák merülhetnek fel és a valós személyek adatainak felhasználása **kockázatos** lehet. Ezen kívül tesztelés során gyakran van szükség több különféle adatmintára gyorsan. A manuálisan generált adatok pedig időigényesek, sokszor nem hozzák a megfelelő eredményt, ezzel is értékes időt és energiát elvéve a fejlesztő csapattól.

### III. Vágyálomrendszer leírása

A _Random User Generator_ program célja az egyszerű és hatékony módja annak, hogy felhasználók széles skáláját generálhassuk a tesztelés és fejlesztés során. A program képes lesz automatikusan előállítani a valódi felhasználókat utánozó adatokat, amelyek reálisak és változatosak, beleértve a neveket, e-mail címeket, telefonszámokat, lakcímeket, és egyéb fontos információkat. További cél, hogy a felhasználók könnyedén testre szabhassák a generált adatokat az adott projekt igényeinek megfelelően, például országok, nemek vagy korcsoportok alapján.

A program továbbá lehetőséget nyújt majd arra is, hogy az adatokat különböző formátumokban exportálhassuk, például CSV, JSON vagy SQL formában, így egyszerűen integrálhatóvá válik a különböző fejlesztési és tesztelési folyamatokba.

### IV. A rendszerre vonatkozó pályázat, törvények, rendeletek, szabványok és ajánlások felsorolása

A _Random User Generator_ program fejlesztése és üzemeltetése során szigorúan betartjuk az adatvédelemre vonatkozó szabályozásokat és sztenderdeket. Az alábbiakban felsoroljuk a rendszerre vonatkozó releváns pályázatokat, törvényeket, rendeleteket, szabványokat és ajánlásokat:

1. **GDPR (General Data Protection Regulation)**: Az Európai Unió adatvédelmi rendelete, amely meghatározza a személyes adatok kezelésére vonatkozó szabályokat és követelményeket. A _Random User Generator_ programnak teljes mértékben meg kell felelnie a GDPR előírásainak, és biztosítania kell az adatok biztonságos kezelését és tárolását.

2. **CCPA (California Consumer Privacy Act)**: Kalifornia állam adatvédelmi törvénye, amely szigorúbb szabályokat ír elő a személyes adatok kezelésére és az érintettek jogaira. A programnak szintén meg kell felelnie a CCPA követelményeinek, különösen akkor, ha olyan felhasználók használják, akik Kaliforniában tartózkodnak.

3. **CSV export szabványok**: A programnak támogatnia kell a CSV exportálást, és az exportált fájloknak meg kell felelniük a releváns CSV szabványoknak, például a CSV RFC 4180-nak.

4. **JSON export szabványok**: Ha a program JSON formátumban is lehetővé teszi az adatexportot, akkor az exportált JSON fájloknak meg kell felelniük a JSON formátum szabványainak.

5. **SQL adatbázis export**: Ha az alkalmazás SQL exportálást is támogat, akkor az SQL lekérdezéseknek meg kell felelniük az adott adatbázisrendszerek szabványainak, például az SQL-92 vagy SQL-99 szabványoknak.

6. **Szabványos eszközök használata a webes felületen**: HTML, JAVASCRIPT, CSS.

7. **Képek formátuma**: A képek elsősorban jpg,jpeg vagy png formátumban kell, hogy elérhetőek legyenek.

Az említett pályázatok, törvények, rendeletek, szabványok és ajánlások betartása kulcsfontosságú lesz a _Random User Generator_ program biztonságos és törvényes működése szempontjából. Az alkalmazásnak folyamatosan frissítve kell tartania a szükséges jogi és szabványi követelményeknek való megfelelést.

## V. Jelenlegi üzleti folyamatok modellje

### Jelenlegi Üzleti Folyamatok

A jelenlegi üzleti folyamatok áttekintése során az alábbi lépéseket követhetjük:

1. **Adatgyűjtés**: Az ügyfelek adatainak manuális gyűjtése és rögzítése.

2. **Adatellenőrzés**: Az összegyűjtött adatok ellenőrzése és validálása, hogy biztosítsuk az adatok helyességét.

3. **Adatmanipuláció**: Az adatok formázása és előkészítése a teszteléshez vagy az alkalmazás használatához.

4. **Adatexport**: Az adatok exportálása a kívánt formátumokban, például CSV vagy JSON.

![Jelenlegi üzleti folyamatok modellje](./Abrak/jelenlegi_helyzet.drawio.png)

## VI. Igényelt üzleti folyamatok modellje

### Igényelt Üzleti Folyamatok

A következő üzleti folyamatok szükségesek az új szoftver bevezetése során:

1. **Felhasználói adatok generálása**: A felhasználók által generált adatok előállítása a program segítségével.

2. **Adatok testreszabása**: A felhasználók képesek lesznek testre szabni a generált adatokat, például ország, nem vagy kor alapján.

3. **Adatexport**: Az adatok exportálása különböző formátumokban, például CSV, JSON vagy SQL.

## VII. Követelménylista

A követelménylista tartalmazza a programmal szemben támasztott követelményeket, például funkcionális és nem funkcionális követelményeket. A követelmények listája folyamatosan bővülhet a projekt fejlődése során.

### Funkcionális Követelmények

- A programnak képesnek kell lennie generálni valósághű felhasználói adatokat.
- A felhasználóknak lehetőségük kell kapniuk az adatok testreszabására.
- Az adatoknak exportálhatóknak kell lenniük különböző formátumokban (CSV, JSON, SQL stb.).
- Online megjelenés.

### Nem Funkcionális Követelmények

- Az adatok generálása és exportálása gyorsnak és hatékonynak kell lennie.
- A programnak biztosítania kell az adatok biztonságos tárolását és kezelését.
- A GDPR és a CCPA adatvédelmi szabályozásoknak megfelelő működés.

# VIII. Fogalomszótár

- CSV: CSV formátum, eredetileg Comma Separated Values. Tabulátor helyett vesszőt, pontosvesszőt, vagy más jelet is használhat.
- JSON: A JSON betűszó az angol JavaScript Object Notation rövidítése, egy egyszerű, ember által is olvasható szöveg alapú szabvány számítógépek közötti adatcserére. A JavaScript szkriptnyelvből alakult ki egyszerű adatstruktúrák és asszociatív tömbök reprezentálására.
- SQL: Az SQL, azaz Structured Query Language (strukturált lekérdezőnyelv) relációsadatbázis-kezelők lekérdezési nyelve.
- HTML: A HTML egy leíró nyelv, melyet weboldalak készítéséhez fejlesztettek ki, és mára már internetes szabvánnyá vált a W3C (World Wide Web Consortium) támogatásával.
- JAVASCRIPT: A JavaScript programozási nyelv egy objektumorientált, prototípus-alapú szkriptnyelv, amelyet weboldalakon elterjedten használnak.
- CSS: A CSS a számítástechnikában egy stílusleíró nyelv, mely a HTML vagy XHTML típusú strukturált dokumentumok megjelenését írja le. Ezenkívül használható bármilyen XML alapú dokumentum stílusának leírására is, mint például az SVG, XUL stb.