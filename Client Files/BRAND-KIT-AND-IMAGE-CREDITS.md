# Hollow Creek Farm — Brand Kit & Image Reference
### Advanced Web Design · Partner Project · Student Asset Package

---

## How to Use This Document

This is your single source of truth for the Hollow Creek Farm project. It covers the brand identity (colors, fonts, logo rules) and provides required ALT text and source information for every image in the asset package.

All images in this package are AI-generated for educational use. They are licensed for this classroom project only and may not be used for commercial publication.

---

## 🎨 Color Palette

Use CSS custom properties in your stylesheet — never hardcode hex values in multiple places.

### Recommended CSS Setup

```css
:root {
  /* Primary brand colors */
  --color-forest:     #2C5F2E;   /* Dark green — headings, nav, primary buttons */
  --color-gold:       #D4A017;   /* Warm gold — accents, borders, icon highlights */
  --color-barn-red:   #8B2500;   /* Deep red — barn accent, secondary CTA */

  /* Neutral / background tones */
  --color-cream:      #FAF3E0;   /* Off-white — light section backgrounds */
  --color-parchment:  #EDE0C4;   /* Warm tan — card backgrounds, borders */
  --color-earth:      #4A3728;   /* Dark brown — body text, dark accents */

  /* Supporting greens */
  --color-meadow:     #5A7A3A;   /* Mid green — hover states, secondary elements */
  --color-sage:       #8FAF7E;   /* Light green — badges, muted tags */

  /* Font stacks */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'Lato', Arial, sans-serif;
}
```

### Full Palette Reference

| Name       | HEX       | RGB                  | Use                                        |
|------------|-----------|----------------------|--------------------------------------------|
| Forest     | `#2C5F2E` | rgb(44, 95, 46)      | Primary brand color, nav, headings, badges |
| Gold       | `#D4A017` | rgb(212, 160, 23)    | Accents, borders, icon fills, logo details |
| Barn Red   | `#8B2500` | rgb(139, 37, 0)      | Barn accent, secondary CTA, alert badges   |
| Cream      | `#FAF3E0` | rgb(250, 243, 224)   | Light section backgrounds                  |
| Parchment  | `#EDE0C4` | rgb(237, 224, 196)   | Card backgrounds, section dividers         |
| Earth      | `#4A3728` | rgb(74, 55, 40)      | Body text, dark accents                    |
| Meadow     | `#5A7A3A` | rgb(90, 122, 58)     | Hover states, secondary elements           |
| Sage       | `#8FAF7E` | rgb(143, 175, 126)   | Muted badges, subtle tags                  |

### Verified Accessible Color Combinations (WCAG AA)

| Text              | Background    | Ratio   | Pass? |
|-------------------|---------------|---------|-------|
| Cream `#FAF3E0`   | Forest `#2C5F2E` | 8.4:1  | ✅ AA |
| Cream `#FAF3E0`   | Earth `#4A3728`  | 9.1:1  | ✅ AA |
| Earth `#4A3728`   | Cream `#FAF3E0`  | 9.1:1  | ✅ AA |
| Earth `#4A3728`   | Parchment `#EDE0C4` | 6.2:1 | ✅ AA |
| Forest `#2C5F2E`  | Parchment `#EDE0C4` | 5.3:1 | ✅ AA |

> Check your own combinations at [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker). All body text must meet 4.5:1 minimum.

---

## ✏️ Typography

### Google Fonts Link (add to your `<head>` before your stylesheet)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Lato:wght@400;700&display=swap" rel="stylesheet">
```

### Font Roles

| Role            | Font             | Weights   | When to use                               |
|-----------------|------------------|-----------|-------------------------------------------|
| Headings / Hero | Playfair Display | 700       | All `h1`–`h3`, section titles, hero text  |
| Body / UI       | Lato             | 400, 700  | Paragraphs, nav links, buttons, captions  |
| Italic accent   | Playfair Display | 400 italic| Taglines, pull quotes, seasonal callouts  |

### Typographic Scale (Suggested)

```css
h1 { font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 700; color: var(--color-forest); }
h2 { font-family: var(--font-display); font-size: clamp(1.5rem, 3vw, 2.2rem); font-weight: 700; color: var(--color-forest); }
h3 { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--color-earth); }
p  { font-family: var(--font-body); font-size: 1rem; line-height: 1.8; color: var(--color-earth); }
```

---

## 🖼️ Logo Files

**Folder:** `assets/Logos/`

All logos are PNG files. Use them in `<img>` tags with descriptive `alt` text as shown below.

| File | Description | Best Use | ALT Text |
|------|-------------|----------|----------|
| `logo-main-full-color.png` | Primary logo — badge style with barn scene, sunflowers, and "Hollow Creek Farm" wordmark | Hero sections, about page, print materials | `Hollow Creek Farm logo featuring a red barn and sunflower illustration inside a circular badge design` |
| `logo-alt-badge-circular.png` | Alternate circular badge — simplified barn, rising sun, rolling fields, no sunflowers | Stickers, social avatars, secondary placements | `Hollow Creek Farm circular badge logo with red barn and rolling green fields` |
| `logo-monogram-hc-wheat.png` | HC monogram — green circle with wheat stalk flanking | Small placements, watermarks, packaging | `Hollow Creek Farm HC monogram mark inside a green circle with golden wheat stalks` |
| `logo-icon-sun-creek.png` | Abstract icon — sun rising over fields with creek | App icon, favicon source, modern placements | `Abstract Hollow Creek Farm icon showing a golden sun rising over green fields and a blue creek` |
| `logo-barn-laurel-mark.png` | Barn silhouette with laurel branches | Footer, stamps, merchandise, tags | `Hollow Creek Farm barn silhouette with green laurel branches on either side` |
| `icon-set-all-20.png` | Full icon sheet — 20 farm activity icons labeled | Reference sheet; extract individual icons as needed | `Hollow Creek Farm icon set showing 20 icons including barn, farm store, sunflower field, strawberry patch, blueberry patch, orchard, pumpkin patch, corn maze, hayride, animal barn, picnic area, event pavilion, restrooms, parking, entrance gate, pond, creek, shopping basket, location pin, and HC monogram` |

### Logo Usage Rules
- Always use `logo-main-full-color.png` on white or cream backgrounds
- Use `logo-barn-laurel-mark.png` or `logo-monogram-hc-wheat.png` on green/dark backgrounds
- Never stretch, recolor outside the brand palette, or add effects to logos
- Maintain clear space equal to the height of the "H" in "Hollow" on all sides

---

## 🌄 Hero Images

**Folder:** `assets/Hero Imgs/`

These wide landscape images are designed for full-width hero sections. All are illustrated/painterly style.

| File | Description | ALT Text |
|------|-------------|----------|
| `hero-barn-creek-sunflowers-sunrise.png` | Red barn at sunrise with a winding creek, sunflowers in foreground, rolling hills | `Illustrated sunrise view of the Hollow Creek Farm red barn with a winding creek and sunflowers in the foreground` |
| `hero-sunflower-field-path-to-barn.png` | Dirt path through a vast sunflower field leading to the red barn at golden hour | `A dirt path leads through rows of sunflowers toward the Hollow Creek Farm barn at golden hour` |
| `hero-fall-pumpkins-hayride-tractor.png` | Fall scene with pumpkins lining a dirt road, tractor with wagon in background, autumn trees | `Fall harvest scene at Hollow Creek Farm with orange pumpkins lining a dirt road and a tractor hayride in the distance` |
| `hero-farm-store-exterior-summer.png` | White farmhouse-style farm store with green metal roof, porch full of produce displays and sunflowers | `The Hollow Creek Farm store exterior in summer, a white farmhouse building with produce and flowers on the porch` |
| `hero-farm-to-table-dinner-pavilion-sunset.png` | Long dinner table set under a rustic pavilion with string lights, red barn and fields visible at sunset | `A farm-to-table dinner table set under a wooden pavilion at sunset with string lights and the Hollow Creek Farm barn in the background` |
| `hero-apple-orchard-creek-picnic-tables.png` | Apple orchard at golden hour with a basket of apples on a picnic table and a creek running through | `Golden hour view of the Hollow Creek Farm apple orchard with a winding creek and a basket of apples on a picnic table` |

---

## 📅 Events Photos

**Folder:** `assets/Events/`

These are photorealistic AI images of farm activities and events.

| File | Description | ALT Text |
|------|-------------|----------|
| `event-sunflower-upick-family-sunset.png` | Family picking sunflowers at golden hour, red barn and silo in background | `A family picks sunflowers at Hollow Creek Farm at sunset, with the red barn visible in the background` |
| `event-strawberry-upick-child-basket.png` | Young girl with a straw hat picking strawberries into a basket, family working rows behind her | `A young girl in a straw hat picks fresh strawberries into a basket at Hollow Creek Farm's U-Pick strawberry field` |
| `event-blueberry-upick-family-summer.png` | Family picking blueberries from tall bushes, rolling hills and trees in background | `A family picks blueberries at Hollow Creek Farm's U-Pick blueberry fields on a sunny summer afternoon` |
| `event-baby-animals-goats-chicks-spring.png` | Family crouching to pet baby goats and chicks near the barn at golden hour | `Children and a parent feed and pet baby goats and chicks outside the Hollow Creek Farm barn at sunset` |
| `event-corn-maze-entrance-family.png` | Wooden arch entrance to the corn maze with a wreath, two children walking in, tall corn on both sides | `Two children walk through the wooden arch entrance to the Hollow Creek Farm corn maze surrounded by tall corn stalks` |
| `event-pumpkin-patch-father-son-wagon.png` | Father and young son walking through the pumpkin patch pulling a red wagon loaded with pumpkins | `A father and son walk through the Hollow Creek Farm pumpkin patch pulling a red wagon full of orange pumpkins` |
| `event-hayride-tractor-wagon-sunset.png` | Crowd of families on a hay wagon being pulled by a green tractor at golden hour, barn visible in distance | `Families enjoy a hayride on a wooden wagon pulled by a green tractor at Hollow Creek Farm at sunset` |
| `event-apple-cider-pressing-family.png` | Farmer pressing apple cider with children watching, baskets of apples and jugs of cider on a table | `A farmer demonstrates apple cider pressing for two children at Hollow Creek Farm, with baskets of apples and jars of cider nearby` |
| `event-fall-harvest-festival-crowds.png` | Busy fall festival scene with pumpkins, hay bales, tents, crowds walking, and the barn in background | `Crowds enjoy the Hollow Creek Farm fall harvest festival surrounded by pumpkins, hay bales, and vendor tents` |
| `event-farm-to-table-dinner-string-lights.png` | Long outdoor dining tables decorated with sunflowers and candles, string lights and barn in background | `An outdoor farm-to-table dinner set up at Hollow Creek Farm with sunflower centerpieces, candles, and string lights above` |
| `event-holiday-market-barn-lights-winter.png` | Winter holiday market at night with the lit barn decorated in wreaths and lights, families shopping vendor stalls | `Families browse vendor stalls at the Hollow Creek Farm winter holiday market, with the barn decorated in wreaths and lights` |
| `event-christmas-tree-farm-choose-cut.png` | Snowy Christmas tree farm with families choosing trees, barn in background, wreath stand on right | `Families choose and cut Christmas trees at Hollow Creek Farm while snow dusts the ground and the red barn stands in the background` |

---

## 🖼️ Product Scenes (Seasonal)

**Folder:** `assets/productPhotos/`

These four illustrated wide-format images represent each season and are ideal for seasonal sections.

| File | Description | ALT Text |
|------|-------------|----------|
| `scene-spring-baby-goats-strawberry-field.png` | Spring scene with baby goats by a fence, strawberry field and blooming trees, barn in background | `Spring at Hollow Creek Farm with baby goats by a fence, a strawberry field in bloom, and flowering trees near the red barn` |
| `scene-summer-sunflowers-berry-baskets.png` | Summer sunflower field leading to the barn, baskets of strawberries and blueberries in foreground | `A sunflower field leads to the Hollow Creek Farm barn in summer with baskets of fresh strawberries and blueberries in the foreground` |
| `scene-fall-hayride-pumpkins-cornfield.png` | Fall scene with pumpkins lining a dirt road, hayride wagon in background, cornfield and autumn trees | `A fall harvest scene at Hollow Creek Farm with pumpkins, a hayride, and golden cornfields under autumn foliage` |
| `scene-winter-barn-holiday-lights-snow.png` | Snowy winter scene with the barn and farm store decorated in lights, wreaths, and Christmas trees | `Hollow Creek Farm in winter with the barn and store decorated in holiday lights, wreaths, and snow-dusted Christmas trees` |

---

## 🛒 Store Product Photos

**Folder:** `assets/productPhotos/`

These branded product photos show Hollow Creek Farm–labeled products.

| File | Description | ALT Text |
|------|-------------|----------|
| `product-fresh-eggs-dozen-carton.png` | Open egg carton with a dozen brown eggs and the Hollow Creek Farm label visible on the lid | `A dozen fresh brown eggs in a carton with the Hollow Creek Farm label showing a red barn and sunflowers` |
| `product-raw-honey-jar.png` | Glass jar of raw amber honey with a Hollow Creek Farm label, honey dipper resting beside it | `A jar of Hollow Creek Farm raw honey with a golden dripping honey dipper beside it` |
| `product-strawberry-preserves-jar.png` | Glass jar of strawberry preserves with Hollow Creek Farm label, fresh strawberries beside it | `A jar of Hollow Creek Farm strawberry preserves next to fresh red strawberries` |
| `product-blueberry-preserves-jar.png` | Glass jar of blueberry preserves with Hollow Creek Farm label, fresh blueberries beside it | `A jar of Hollow Creek Farm blueberry preserves with fresh blueberries and leaves beside it` |
| `product-fresh-apple-cider-jug.png` | Large plastic jug of fresh-pressed apple cider with Hollow Creek Farm label, apple and slice beside it | `A gallon jug of Hollow Creek Farm fresh-pressed apple cider with an apple and apple slice beside it` |
| `product-sourdough-bread-loaf.png` | Round sourdough bread loaf with a Hollow Creek Farm kraft paper band wrapped around it | `A rustic sourdough bread loaf wrapped with a Hollow Creek Farm paper band reading Farm Fresh and Locally Made` |
| `product-apple-pie-bakery.png` | Whole apple pie in a foil tin with a Hollow Creek Farm label band reading Apple Pie | `A golden-crusted apple pie in a foil tin with a Hollow Creek Farm label band reading Made with Farm Fresh Apples` |
| `product-seasonal-produce-basket.png` | Wicker basket filled with corn, tomatoes, peppers, cucumbers, and lettuce with a Hollow Creek Farm tag | `A wicker basket filled with seasonal produce including corn, tomatoes, peppers, and cucumbers with a Hollow Creek Farm Seasonal Produce Basket tag` |

---

## 📢 Call-to-Action Banners

**Folder:** `assets/Call-to-Action Banners/`

Wide-format banners with embedded text and branding. Use as section headers or promotional panels.

| File | Description | ALT Text |
|------|-------------|----------|
| `cta-plan-your-visit-entrance-gate.png` | "Plan Your Visit" banner with farm entrance gate and barn at sunset | `Hollow Creek Farm Plan Your Visit banner showing the farm entrance gate and red barn at sunset` |
| `cta-visit-farm-store-produce-display.png` | "Visit the Farm Store" banner with the logo and farm store exterior filled with produce | `Hollow Creek Farm Visit the Farm Store banner featuring the farm store exterior with fresh produce and flowers on display` |
| `cta-book-farm-to-table-dinner.png` | "Book a Farm-to-Table Dinner" banner with outdoor dining table and barn at sunset | `Hollow Creek Farm Book a Farm-to-Table Dinner banner with a candlelit outdoor dinner table and the barn glowing at sunset` |
| `cta-explore-corn-maze-fall.png` | "Explore the Corn Maze" banner with wooden maze entrance sign and tall corn stalks | `Hollow Creek Farm Explore the Corn Maze banner showing a wooden Corn Maze entrance sign and tall corn stalks in fall` |
| `cta-pick-your-own-pumpkins-fall.png` | "Pick Your Own Pumpkins" banner with pumpkin patch and barn in fall foliage | `Hollow Creek Farm Pick Your Own Pumpkins banner with rows of orange pumpkins and the barn surrounded by fall foliage` |
| `cta-shop-local-goods-farm-store.png` | "Shop Local Goods" banner with honey, preserves, eggs, bread, and pie on a farm table | `Hollow Creek Farm Shop Local Goods banner showing jars of honey and preserves, fresh eggs, bread, and pie on a rustic farm table` |
| `cta-join-harvest-weekend-festival.png` | "Join Us for Harvest Weekend" banner with festival crowds, pumpkins, and cider | `Hollow Creek Farm Join Us for Harvest Weekend banner with festival crowds, pumpkins, cider, and a rustic signboard` |

---

## 📸 Placeholder Photos

**Folder:** `assets/Placeholder Images/`

General farm photography for use anywhere on the site. These are not AI-illustrated — they're photorealistic and suitable for any content section.

| File | Description | ALT Text |
|------|-------------|----------|
| `photo-family-walking-sunflower-field.png` | Family of four walking through sunflower rows at sunset, barn visible in background | `A family of four walks hand-in-hand through the sunflower field at Hollow Creek Farm at sunset` |
| `photo-children-feeding-goats-fence.png` | Two young children smiling and feeding goats through a wooden fence | `Two children smile as they hand-feed goats through a wooden fence at Hollow Creek Farm` |
| `photo-farm-store-interior-jars-produce.png` | Warm rustic farm store interior with shelves of jams, honey, ciders, baked goods, and fresh apples | `The interior of the Hollow Creek Farm store with wooden shelves lined with jars of jams, honey, ciders, and fresh baked goods` |
| `photo-fresh-vegetables-basket-outdoor.png` | Wicker basket overflowing with fresh tomatoes, peppers, carrots, cucumbers, and lettuce outdoors | `A wicker basket overflowing with colorful fresh vegetables from Hollow Creek Farm including tomatoes, peppers, and cucumbers` |
| `photo-hayride-tractor-gravel-road-barn.png` | Group of adults and children on a hay wagon behind a green tractor on a gravel farm road | `A group of families rides a hay wagon pulled by a green tractor along a gravel road at Hollow Creek Farm` |
| `photo-farm-to-table-dinner-string-lights-barn.png` | Elegant outdoor farm dinner table with floral centerpieces and string lights, old barn in background | `An elegantly set outdoor farm dinner table with floral arrangements and candles under string lights at Hollow Creek Farm` |
| `photo-pumpkins-gourds-haybales-barn-door.png` | Pumpkins, gourds, and mums arranged in front of the red barn door with hay bales | `Dozens of orange pumpkins, colorful gourds, and orange mums arranged in front of the Hollow Creek Farm red barn door` |
| `photo-apple-cider-donuts-fall-table.png` | Apple cider in a pitcher and glasses alongside cinnamon sugar donuts on a fall farm table | `A pitcher of apple cider, glasses, and a plate of cinnamon sugar donuts on a wooden farm table` |
| `photo-wreaths-christmas-trees-winter-market.png` | Rows of wreaths on a rustic outdoor display bench with Christmas trees lined up for sale | `Fresh holiday wreaths displayed on a rustic bench beside rows of Christmas trees for sale at Hollow Creek Farm` |

---

## 📱 Social Media & Marketing Graphics

**Folder:** `assets/Social Media  Marketing Graphics/`

Pre-made branded promotional graphics. These already contain text and logos — do not place additional text over them.

| File | Description | ALT Text |
|------|-------------|----------|
| `social-fall-harvest-festival-square.png` | Square social graphic — Fall Harvest Festival announcement with logo, pumpkins, hay bales, and hayride | `Hollow Creek Farm Fall Harvest Festival promotional graphic with pumpkin patch, hayride, and corn maze details for October weekends` |
| `social-sunflower-days-now-blooming-square.png` | Square social graphic — Sunflower Days Now Blooming with U-Pick details | `Hollow Creek Farm Sunflower Days promotional graphic announcing the sunflower field is now blooming with U-Pick flowers available` |
| `social-holiday-market-weekend-story.png` | Vertical story-format graphic — Holiday Market Weekend in December with market and barn scene | `Hollow Creek Farm Holiday Market Weekend vertical promotional graphic for December with seasonal decor, farm goods, and handmade gifts` |
| `social-weekend-on-the-farm-square.png` | Square social graphic — Weekend on the Farm with activities list, farm store and hayride | `Hollow Creek Farm Weekend on the Farm promotional square graphic featuring sunflower days, hayrides, pumpkin patch, and farm store` |
| `social-farm-store-sale-square.png` | Square social graphic — Farm Store Sale with jars of honey, jams, preserves, and baked goods | `Hollow Creek Farm Store Sale promotional graphic featuring honey, strawberry jam, blueberry jam, peach preserves, and fresh baked goods` |
| `social-now-picking-berries-square.png` | Square social graphic — Now Picking Strawberries and Blueberries with berry baskets | `Hollow Creek Farm Now Picking promotional graphic announcing fresh strawberries and blueberries are ready for U-Pick` |

---

## 👨‍👩‍👧‍👦 Staff & Family Portraits

**Folder:** `assets/Staff  Family Portrait Style Graphics/`

Use these in the About / Our Story section to bring the Calloway family to life.

| File | Description | Suggested Use | ALT Text |
|------|-------------|---------------|----------|
| `family-calloway-full-group-barn.png` | Full Calloway family group photo in front of the barn at golden hour | Main About section family photo | `The Calloway family smiling together in front of the Hollow Creek Farm barn at sunset` |
| `family-bill-margaret-founders-fence.png` | Older couple (Bill and Margaret, the founders) by a wooden fence at golden hour | Founders / Our History subsection | `Bill and Margaret Calloway, founders of Hollow Creek Farm, smiling together by a wooden fence at golden hour` |
| `staff-tyler-meg-sam-harvesting.png` | Three adult siblings harvesting produce and arranging flowers near the barn | Meet the Team section | `Tyler, Meg, and Sam Calloway work together harvesting vegetables and arranging flowers near the Hollow Creek Farm barn` |
| `family-founders-vintage-sepia-1962.png` | Vintage sepia-tone photo of a young couple in front of the original barn and farm stand, circa 1962 | Heritage / History section | `A vintage sepia photograph of the original Calloway farm founders standing in front of the barn and farm stand, circa 1962` |
| `family-three-generations-circular-portraits.png` | Watercolor-style horizontal image with three circular portraits of the grandparents, parents, and young adult siblings over a creek and barn background | About page decorative element | `Three circular watercolor-framed portraits of the Calloway family's three generations set against a soft farm background` |
| `staff-dana-rob-farm-stand.png` | Dana and Rob (mid-generation owners) smiling behind a farm stand loaded with produce and jars | Meet the Owners subsection | `Dana and Rob Calloway smile behind the Hollow Creek Farm produce stand surrounded by fresh vegetables and preserved goods` |
| `family-full-dinner-table-barn-sunset.png` | Full extended family gathered around a long outdoor dinner table, barn visible at sunset | Farm-to-table or Events section | `The Calloway family gathers around an outdoor farm dinner table at sunset with fresh food and sunflowers at Hollow Creek Farm` |
| `staff-full-team-barn-exterior.png` | Full farm staff team photo — family plus additional staff in aprons — in front of the barn | Full Team section | `The full Hollow Creek Farm staff team posing together in front of the barn at sunset, including family members and farm employees` |
| `family-calloway-with-baby-animals-spring.png` | Family sitting in the spring grass feeding baby goats and holding chicks | Spring season section or About page | `The Calloway family sits in the spring grass feeding baby goats and holding chicks near the blooming Hollow Creek Farm` |
| `family-heritage-collage-past-present.png` | Composite collage image with a vintage black-and-white farm scene on the left, the founders in a center oval portrait, and modern adult children on the right | Our History section hero or timeline | `A heritage collage showing the original Hollow Creek Farm in a vintage black-and-white photo alongside a present-day portrait of the Calloway founders and their grown children` |

---

## 🗺️ Map

| File | Description | ALT Text |
|------|-------------|----------|
| `Map.png` | Farm location map (root of assets folder) | `Map showing the location of Hollow Creek Farm` |

---

## ✅ ALT Text Quick Rules

Before submitting, verify every image on your site:

- **Descriptive, not generic.** `alt="A family picking strawberries at Hollow Creek Farm"` ✅ · `alt="image"` ❌
- **Decorative images use `alt=""`** — if an image adds no content (purely visual texture), use an empty alt attribute so screen readers skip it
- **Don't start with "Image of…" or "Photo of…"** — screen readers already announce it's an image
- **CTA banners** — use the alt text from the table above; they contain embedded text so the alt must describe the message
- **Logo in nav** — use: `alt="Hollow Creek Farm logo"` (short is fine for repeated nav logos)

---

## ⚖️ Image Credits & Licensing

All images in this package were generated with AI tools (ChatGPT / DALL-E) for educational use in this classroom project.

| Folder | Tool | License |
|--------|------|---------|
| All images in all folders | ChatGPT / DALL-E (OpenAI) | Classroom use only — not for commercial publication |

**If you add your own images**, you must log them in your `image-credits.md` file with source URL and license. Acceptable additional sources:

| Source | URL | License |
|--------|-----|---------|
| Unsplash | unsplash.com | Free, no attribution required (but appreciated) |
| Pexels | pexels.com | Free, no attribution required |
| Pixabay | pixabay.com | Free, no attribution required |

**AI-generated images you create yourself** must be logged in `ai-log.md` with the tool name, prompt used, and date generated.

---

*Hollow Creek Farm Brand Kit · Classroom Use Only · Advanced Web Design*
