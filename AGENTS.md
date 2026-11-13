# AGENTS.md

## Project Overview

Konspekt — a Gatsby-based website for a research writing school. Products include courses on reading, note-taking, and systematic writing for researchers and businesses.

## Build & Development Commands

```bash
# Start local dev server (http://localhost:8000)
npm run develop

# Production build
npm run build

# Serve production build locally
npm run serve

# Run production build with API locally
npm run server

# Clean Gatsby cache
npm run clean
```

## Project Structure

```
src/
├── components/     # Reusable UI components (Hero, Pricing, FAQ, etc.)
├── pages/          # Page files (index.js, reading.js, writing-system.js, etc.)
├── pageData/       # Data files for pages (data.home.js, data.reading.js, etc.)
├── styles/         # Global styles (layout.css)
└── assets/         # Static assets
```

## Code Style

### Imports
```javascript
// React and styling first
import React, { useState } from "react";
import styled from "styled-components";

// Components barrel import
import { Hero, Pricing, Footer, Header } from "../components/index";

// Page data imports
import { hero, pricing, faq } from "../pageData/data.reading.js";

// Styles last
import "../styles/layout.css";
```

### Component Structure
```javascript
const PageName = () => {
  const [selectedTariff, setSelectedTariff] = useState('default-tariff');
  const handleClick = (tariffName) => setSelectedTariff(tariffName);

  return (
    <>
      <FirstScreen>
        <Header data={links} />
        <Hero data={hero} selectedTariff={selectedTariff} handleClick={handleClick} />
      </FirstScreen>
      <BasicSection pageData={section} grids={grids_3} />
      <Pricing id="pricing" pageData={pricing} selectedTariff={selectedTariff} handleClick={handleClick} />
      <Footer />
    </>
  );
};

export default PageName;
export const Head = () => <SEO title="..." description="..." />;
```

### Grid Layouts
```javascript
const grids_3 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "1 / 3 / 3 / 6"];
const grids_4 = ["1 / 1 / 1 / 3", "2 / 1 / 2 / 3", "3 / 1 / 3 / 3", "1 / 3 / 4 / 6"];
```

### Styled Components
```javascript
const FirstScreen = styled.div`
  height: 95dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
```

## Page Data Pattern

Each page has a data file in `src/pageData/` exporting objects:
- `hero` — title, description, buttonText, to
- `problem` — pain points with spanText for highlighting
- `audience` — target audience
- `pricing` — tariffs array with features, prices
- `faq` — questions and answers
- `contact`, `requestFormBuy`, `links`

## Tech Stack

- **Framework:** Gatsby 5
- **Styling:** styled-components
- **Forms:** react-hook-form
- **Hosting:** Render Web Service (`npm run build`, then `npm run server`; API at `/api/sendToSheets`)
- **Legacy:** Netlify functions still available for `ntl dev`
- **Delivery:** ZenClass platform

## Key Conventions

- Use `spanText` arrays in data files for highlighted text in components
- `grids` prop controls CSS grid areas for BasicSection
- Pages use consistent component ordering: Header → Hero → Content → Pricing → FAQ → Contact → Footer
- Always export `Head` for SEO meta tags
- Russian-language content; code comments in Russian or English
