# Követelmény specifikáció

## I.Áttekintés

Új szoftver vagy alkalmazás fejlesztésénél, az egyik legfontosabb lépés a tesztelés. Ennek folyamán előfordulhat, hogy nagy mennyiségű adatra van szükségünk, annak érdekében, hogy meggyőződhessünk alkalmazásunk hibátlan működéséről. Ezt valahogy megkell oldanunk anélkül, hogy valódi emberek információit használjuk fel. Itt jön képbe csapatunk _Random User Generator_ programja.

A program célja lehetővé tenni a fejlesztők és tesztelők számára, hogy létrehozhassanak nagy mennyiségű valósnak tűnő felhasználói adatot. Segítségével hatékonyabban lehet tesztelni a projekteket, anélkül, hogy adatvédelmi kockázatok miatt kellene aggódni. Ezáltal a fejlesztők gyorsabban dolgozhatnak, valamint biztosak lehetnek abban, hogy a generált információk nem kapcsolódnak valós személyekhez.

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

Az említett pályázatok, törvények, rendeletek, szabványok és ajánlások betartása kulcsfontosságú lesz a _Random User Generator_ program biztonságos és törvényes működése szempontjából. Az alkalmazásnak folyamatosan frissítve kell tartania a szükséges jogi és szabványi követelményeknek való megfelelést.
