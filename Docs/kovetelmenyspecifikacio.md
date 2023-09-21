# Követelmény specifikáció

## I.Áttekintés

Új szoftver vagy alkalmazás fejlesztésénél, az egyik legfontosabb lépés a tesztelés. Ennek folyamán előfordulhat, hogy nagy mennyiségű adatra van szükségünk, annak érdekében, hogy meggyőződhessünk alkalmazásunk hibátlan működéséről. Ezt valahogy megkell oldanunk anélkül, hogy valódi emberek információit használjuk fel. Itt jön képbe csapatunk _Random User Generator_ programja.

A program célja lehetővé tenni a fejlesztők és tesztelők számára, hogy létrehozhassanak nagy mennyiségű valósnak tűnő felhasználói adatot. Segítségével hatékonyabban lehet tesztelni a projekteket, anélkül, hogy adatvédelmi kockázatok miatt kellene aggódni. Ezáltal a fejlesztők gyorsabban dolgozhatnak, valamint biztosak lehetnek abban, hogy a generált információk nem kapcsolódnak valós személyekhez.

## II.Jelenlegi helyzet

Jelenleg a fejlesztőknek és tesztelőknek szembe kell nézniük azzal a problémával, hogy sok esetben nincsen elég megfelelő adat projektjeik teszteléséhez. Adatvédelmi problémák merülhetnek fel és a valós személyek adatainak felhasználása **kockázatos** lehet. Ezen kívül tesztelés során gyakran van szükség több különféle adatmintára gyorsan. A manuálisan generált adatok pedig időigényesek, sokszor nem hozzák a megfelelő eredményt, ezzel is értékes időt és energiát elvéve a fejlesztő csapattól.

### III. Vágyálomrendszer leírása

A _Random User Generator_ program célja az egyszerű és hatékony módja annak, hogy felhasználók széles skáláját generálhassuk a tesztelés és fejlesztés során. A program képes lesz automatikusan előállítani a valódi felhasználókat utánozó adatokat, amelyek reálisak és változatosak, beleértve a neveket, e-mail címeket, telefonszámokat, lakcímeket, és egyéb fontos információkat. További cél, hogy a felhasználók könnyedén testre szabhassák a generált adatokat az adott projekt igényeinek megfelelően, például országok, nemek vagy korcsoportok alapján.

A program továbbá lehetőséget nyújt majd arra is, hogy az adatokat különböző formátumokban exportálhassuk, például CSV, JSON vagy SQL formában, így egyszerűen integrálhatóvá válik a különböző fejlesztési és tesztelési folyamatokba.
