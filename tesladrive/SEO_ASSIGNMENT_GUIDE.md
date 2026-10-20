# TeslaDrive – College SEO Assignment & Deployment Guide

## 1. Project Overview
- **Website Name:** TeslaDrive
- **Brand Purpose:** Independent educational automotive blog analyzing Tesla electric vehicles, battery technology, charging networks, and ownership economics.
- **Academic Context:** Developed for a college course assignment on Search Engine Optimization (SEO), information architecture, and Answer Engine Optimization (AEO).
- **Mandatory Disclaimer:** *TeslaDrive is an independent educational blog and is not affiliated with, endorsed by, sponsored by, or an official website of Tesla, Inc. All trademarks belong to Tesla, Inc.*

---

## 2. 10-Article Keyword Matrix & URL Structure

| # | Exact URL Path | Primary Keyword | Related Keywords | Meta Title Target (~50-60 chars) |
|---|----------------|-----------------|------------------|-----------------------------------|
| 1 | `/blogs/what-is-tesla` | `Tesla` | `Tesla electric cars`, `Tesla company` | What Is Tesla? Complete Guide to the EV Company (2026) |
| 2 | `/blogs/tesla-model-3` | `Tesla Model 3` | `Tesla Model 3 range`, `Tesla Model 3 features` | Tesla Model 3: Features and Range Explained (2026) |
| 3 | `/blogs/tesla-model-y` | `Tesla Model Y` | `Tesla Model Y range`, `Tesla electric SUV` | Tesla Model Y: Features and Buying Guide (2026) |
| 4 | `/blogs/how-tesla-cars-work` | `how Tesla cars work` | `Tesla electric motor`, `Tesla battery system` | How Do Tesla Cars Work? Powertrain & Battery Guide |
| 5 | `/blogs/tesla-car-price` | `Tesla car price` | `Tesla Model 3 price`, `Tesla Model Y price` | How Much Does a Tesla Cost? (2026 Price & Ownership Guide) |
| 6 | `/blogs/tesla-charging-time` | `Tesla charging time` | `Tesla Supercharger`, `home charging Tesla` | How Long Does Tesla Charging Take? (Full Guide 2026) |
| 7 | `/blogs/tesla-autopilot` | `Tesla Autopilot` | `Tesla driver assistance`, `Tesla Full Self-Driving` | Tesla Autopilot: Features and Limitations (2026 Guide) |
| 8 | `/blogs/tesla-battery-life` | `Tesla battery life` | `Tesla battery degradation`, `Tesla battery replacement` | How Long Do Tesla Batteries Last? (Degradation Data 2026) |
| 9 | `/blogs/tesla-vs-petrol-cars` | `Tesla vs petrol cars` | `electric car vs petrol car`, `Tesla running costs` | Tesla vs Petrol Cars: Which Is Better? (2026 Analysis) |
| 10| `/blogs/future-of-tesla` | `future of Tesla` | `electric vehicle technology`, `Tesla innovation` | The Future of Tesla & Electric Vehicles (2026 Outlook) |

---

## 3. Image Asset Manifest & Replacement

All 10 required image files have been generated as local WebP assets in `public/images/`:

| Filename | Article | Suggested Alt Text |
|----------|---------|--------------------|
| `tesla-brand-guide.webp` | What Is Tesla? | Tesla electric car branding overview displaying clean vehicle lines and modern charging infrastructure |
| `tesla-model-3.webp` | Tesla Model 3 | Aerodynamic profile of a Tesla Model 3 electric sedan on a clean paved roadway |
| `tesla-model-y.webp` | Tesla Model Y | Side three-quarter view of a Tesla Model Y electric crossover utility vehicle in an urban setting |
| `tesla-electric-motor.webp` | How Cars Work | Schematic view of an electric motor rotor and inverter assembly in a modern EV chassis |
| `tesla-car-price.webp` | Car Price | Clean visualization of vehicle purchase budgeting, monthly costs, and clean energy incentives |
| `tesla-charging-station.webp` | Charging Time | Red and white Tesla Supercharger stall with charging cable connected to an electric vehicle port |
| `tesla-autopilot-dashboard.webp` | Autopilot | Tesla central display rendering computer vision bounding boxes around lane markings and vehicles |
| `tesla-battery-pack.webp` | Battery Life | Cutaway view of an electric vehicle structural battery pack showing cylindrical cells and liquid cooling channels |
| `electric-vs-petrol-car.webp` | Tesla vs Petrol | Comparative visualization comparing an electric vehicle motor layout with a traditional combustion engine powertrain |
| `future-electric-vehicles.webp` | Future of Tesla | Futuristic visual concept representing autonomous electric transportation and smart grid energy integration |

### How to Replace Images:
1. Download a royalty-free image from **Unsplash.com**, **Pexels.com**, or **Wikimedia Commons** (filter by Creative Commons / Public Domain).
2. Resize and crop the image to **1200 x 675 pixels** (16:9 aspect ratio).
3. Convert or save the image as a `.webp` file (using tools like Squoosh.app).
4. Save the file under `public/images/` with the exact filename listed in the table above.
5. The website automatically displays your updated photo without requiring any code edits.

---

## 4. How to Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TeslaDrive automotive SEO blog"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/tesladrive.git
   git push -u origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in.
   - Click **Add New...** > **Project**.
   - Select your `tesladrive` repository.
   - Framework Preset: **Vite** (detected automatically).
   - Click **Deploy**.

---

## 5. How to Update Your Production Base URL / Canonical Link

After deploying, Vercel gives you a live production URL (e.g. `https://tesladrive-xyz.vercel.app` or your custom domain).

To set your canonical URL:
- **Option A (Zero Code):** In your Vercel Dashboard, go to **Settings** > **Environment Variables**, add:
  - Name: `VITE_SITE_URL`
  - Value: `https://your-domain.vercel.app`
  - Redeploy.
- **Option B (In Code):** Open `src/config/site.ts` and set:
  ```ts
  baseUrl: "https://your-domain.vercel.app"
  ```
  Also update the URL in `public/robots.txt` and `public/sitemap.xml`.

---

## 6. Submitting to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. Click **Add Property** and select **URL prefix**, entering your Vercel URL (e.g. `https://your-domain.vercel.app`).
3. Choose the **HTML tag** verification method. Copy the meta tag Google provides and paste it into `<head>` inside `index.html`, or use DNS record verification.
4. Once verified, click **Sitemaps** in the left sidebar.
5. In **Add a new sitemap**, type `sitemap.xml` and click **Submit**.
6. Use the **URL Inspection** tool to inspect your homepage or any article (e.g. `/blogs/what-is-tesla`) and click **Test Live URL**.

*Note: Search engine indexing is not instantaneous; crawling typically takes a few days to a few weeks, and submitting a sitemap informs search engines of your pages but does not guarantee top rankings.*
