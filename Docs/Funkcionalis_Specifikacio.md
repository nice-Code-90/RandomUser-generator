# Funkcionális specifikáció

## I. Jelenlegi helyzet

Jelenleg a fejlesztőknek és tesztelőknek szembe kell nézniük azzal a problémával, hogy sok esetben nincsen elég megfelelő adat projektjeik teszteléséhez. Adatvédelmi problémák merülhetnek fel és a valós személyek adatainak felhasználása **kockázatos** lehet. Ezen kívül tesztelés során gyakran van szükség több különféle adatmintára gyorsan. A manuálisan generált adatok pedig időigényesek, sokszor nem hozzák a megfelelő eredményt, ezzel is értékes időt és energiát elvéve a fejlesztő csapattól.

### II. Vágyálomrendszer leírása

A Random User Generator program célja az egyszerű és hatékony módja annak, hogy felhasználók széles skáláját generálhassuk a tesztelés és fejlesztés során. A rendszernek el kell készítenie a felhasználók által megadott preferenciák alapján a felhasználóneveket, és biztosítania kell azokat a felhasználók számára.

A program továbbá lehetőséget nyújt majd arra is, hogy az adatokat különböző formátumokban exportálhassuk, például CSV, JSON vagy SQL formában, így egyszerűen integrálhatóvá válik a különböző fejlesztési és tesztelési folyamatokba.