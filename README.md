# 3D GeoInfo and SDSC 2027, Rabat

Static one-page website for the 22nd International 3D GeoInfo Conference and the 11th International
Smart Data and Smart Cities Conference (SDSC), Rabat, Morocco, 4–8 October 2027, hosted by IAV Hassan II.

## Design

The page is laid out like a surveyor's drawing set. Each section is a numbered sheet with a title strip:
sheet number, title and one real fact. The hero shows Bab Oudaya, the gate of the Kasbah of the Udayas,
as a schematic 3D city model; visitors can switch it between LoD0 (footprint), LoD1 (blocks) and LoD2
(battlements and arch).

- Type: Newsreader for reading, IBM Plex Mono for dates, times, figures and labels.
- Colour: deep green `#0B2A1D` as ink, IAV green `#007136` for line work, IAV red `#B41C1B` only for
  the river line in the drawing, the rule above the title block and the logo.
- Sheets: 01 hero, 02 About, 03 Call for papers, 04 Programme, 05 People, 06 Coming to Rabat,
  07 Registration, 08 Partners. Contact is in the footer.

Writing rules used on the page: plain sentences, no "·" separators, no dashes as punctuation (en dashes only
inside ranges such as 4–8), no stock phrases, no star shapes or star characters.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The page and its prose. The logo and the gate drawing are inline SVG. |
| `assets/data/site.js` | All structured content: dates, deadlines, topics, people, programme, hotels, fees, sponsorship, organisations, past editions. Edit this first. |
| `assets/css/main.css` | Layout and styling. |
| `assets/js/main.js` | Fills the page from `site.js`, the level-of-detail buttons, day tabs and header behaviour. |
| `assets/img/logo.svg`, `logo-dark.svg` | Official logo for pale and dark backgrounds. The lettering is converted to outlines, so no font is needed. |
| `assets/img/favicon.svg` | The mark alone, for the browser tab. |
| `assets/img/hero-bg.jpg` | Venue photo shown in the Rabat sheet. Alternates: `hero-alt-*.jpg`. |
| `assets/vendor/` | Bootstrap 5.3.3, served locally. |

## Preview

Double-click `index.html`, or run `python -m http.server 8080` in this folder and open http://localhost:8080.

## Updating content

Open `assets/data/site.js`, change the values and reload. Keep the JavaScript syntax: strings in quotes,
items separated by commas.

- Chairs and keynotes: while every name is "To be announced" (or the keynote list is empty), the page
  shows one sentence instead of empty cards. Add real names and they appear as a list, with an optional
  `photo`.
- Committees: fill `organisingCommittee` and `scientificCommittee` with `{ name, affiliation }`.
- Programme: one object per day; an item can have `where` or a `rooms` list.
- ConfTool and e-mail: `event.conftool` and `event.email` feed every button and address on the page.

## Provisional values

Deadlines, fees and sponsorship prices were seeded from the Sofia 2026 edition shifted by one year. The page
states this once above each table. The ConfTool address and the contact e-mail are placeholders. Hotel
distances are approximate. The About text says this is the first time the series comes to Africa; confirm
this before publishing.

## Photo credits (Wikimedia Commons)

| File | Subject | Author | Licence |
|------|---------|--------|---------|
| `hero-bg.jpg` | Mausoleum of Mohammed V with the Mohammed VI Tower | Petar Milošević | CC BY-SA 4.0 |
| `hero-alt-hassan-tower.jpg` | Hassan Tower | Grace Tankard | CC BY 2.0 |
| `hero-alt-kasbah.jpg` | Kasbah of the Udayas and the Bouregreg estuary | Seth767 | CC BY-SA 4.0 |

## Deployment

Any static host works: the university web server, or GitHub Pages from the root folder. There is no
server-side code.

## Previous editions consulted

- Sofia 2026: https://conference.gate-ai.eu/GeoSofia2026/
- Kashiwa 2025: https://www.csis.u-tokyo.ac.jp/3d_geoinfo_sdsc_2025/overview.html
- Vigo 2024: https://3dgeoinfoeg-ice.webs.uvigo.es/
- Athens 2024: https://tudelft3d.github.io/sdsc2024/
- Munich 2023: https://www.3dgeoinfo.org/3dgeoinfo/
- Sydney 2022: https://www.sdsc3dgeoinfo.unsw.edu.au/
