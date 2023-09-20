# Követelmény specifikáció

## I.Áttekintés

Új szoftver vagy alkalmazás fejlesztésénél, az egyik legfontosabb lépés a tesztelés. Ennek folyamán előfordulhat, hogy nagy mennyiségű adatra van szükségünk, annak érdekében, hogy meggyőződhessünk alkalmazásunk hibátlan működéséről. Ezt valahogy megkell oldanunk anélkül, hogy valódi emberek információit használjuk fel. Itt jön képbe csapatunk *Random User Generator* programja.

A program célja lehetővé tenni a fejlesztők és tesztelők számára, hogy létrehozhassanak nagy mennyiségű valósnak tűnő felhasználói adatot. Segítségével hatékonyabban lehet tesztelni a projekteket, anélkül, hogy adatvédelmi kockázatok miatt kellene aggódni. Ezáltal a fejlesztők gyorsabban dolgozhatnak, valamint biztosak lehetnek abban, hogy a generált információk nem kapcsolódnak valós személyekhez.

## II.Jelenlegi helyzet

Jelenleg a fejlesztőknek és tesztelőknek szembe kell nézniük azzal a problémával, hogy sok esetben nincsen elég megfelelő adat projektjeik teszteléséhez. Adatvédelmi problémák merülhetnek fel és a valós személyek adatainak felhasználása **kockázatos** lehet. Ezen kívül tesztelés során gyakran van szükség több különféle adatmintára gyorsan. A manuálisan generált adatok pedig időigényesek, sokszor nem hozzák a megfelelő eredményt, ezzel is értékes időt és energiát elvéve a fejlesztő csapattól.