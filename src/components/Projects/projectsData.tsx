// Single source of truth for projects — powers both the /projects card grid and the
// /projects/:slug detail pages. Add a project by appending an object here and dropping
// its media in src/assets/projects/<slug>/.

import type { ReactNode } from "react";

// card thumbnails (per-project folders)
import sensaCard from "../../assets/projects/sensa/card.webp";
import toBikeToCard from "../../assets/projects/to-bike-to/card.webp";
import mosaicCard from "../../assets/projects/mosaic/card.webp";
import oublietteCard from "../../assets/projects/oubliette/card.webp";
import bargainBitesCard from "../../assets/projects/bargain-bites/card.webp";
import leCrochetCard from "../../assets/projects/le-crochet/card.webp";
import refyneCard from "../../assets/projects/refyne/card.webp";
import huffmanCard from "../../assets/projects/huffman-compression/card.webp";
import physicsCard from "../../assets/projects/physics-sim/card.webp";
import tihkoosueCard from "../../assets/projects/tihkoosue/card.webp";
import froggyJumpCard from "../../assets/projects/froggy-jump/card.webp";
import dashCard from "../../assets/projects/dash/card.webp";
// "portfolio" reuses the shared site logo (also used by Home/Logo) — left in place
import portfolioCard from "../../assets/images/logo.svg";

// refyne detail media
import refyne01 from "../../assets/projects/refyne/01.webp";
import refyne02 from "../../assets/projects/refyne/02.webp";
import refyne03 from "../../assets/projects/refyne/03.webp";

// to-bike-to detail media
import toBikeTo01 from "../../assets/projects/to-bike-to/01.webp";
import toBikeTo02 from "../../assets/projects/to-bike-to/02.webp";
import toBikeTo03 from "../../assets/projects/to-bike-to/03.webp";

// mosaic detail media
import mosaic01 from "../../assets/projects/mosaic/01.webp";
import mosaic02 from "../../assets/projects/mosaic/02.webp";
import mosaic03 from "../../assets/projects/mosaic/03.webp";

// oubliette detail media
import oubliette01 from "../../assets/projects/oubliette/01.webp";
import oublietteDemo from "../../assets/projects/oubliette/oubliette-demo-optimized.mp4";
import oublietteDemoPoster from "../../assets/projects/oubliette/oubliette-demo-poster.webp";

// bargain bites detail media
import bargainBites01 from "../../assets/projects/bargain-bites/01.webp";
import bargainBites02 from "../../assets/projects/bargain-bites/02.webp";
import bargainBites03 from "../../assets/projects/bargain-bites/03.webp";
import bargainBites04 from "../../assets/projects/bargain-bites/04.webp";

// le crochet detail media
import leCrochet01 from "../../assets/projects/le-crochet/01.webp";
import leCrochet02 from "../../assets/projects/le-crochet/02.webp";
import leCrochet03 from "../../assets/projects/le-crochet/03.webp";
import leCrochet04 from "../../assets/projects/le-crochet/04.webp";
import leCrochet05 from "../../assets/projects/le-crochet/05.webp";

// sensa detail media
import sensa01 from "../../assets/projects/sensa/01.webp";
import sensa02 from "../../assets/projects/sensa/02.webp";
import sensa03 from "../../assets/projects/sensa/03.webp";
import sensa04 from "../../assets/projects/sensa/04.webp";
import sensaDemo from "../../assets/projects/sensa/sensa-demo.mp4";
import sensaDemoPoster from "../../assets/projects/sensa/sensa-demo-poster.webp";

export interface ProjectMedia {
  type: "image" | "video" | "youtube";
  // image/video: an imported asset. youtube: the video ID only, e.g. the
  // "y-TNS84Umo4" from https://www.youtube.com/watch?v=y-TNS84Umo4
  src: string;
  poster?: string; // video poster frame
  alt?: string; // image alt text / iframe title
  caption?: string; // small caption shown beneath the media (and in the lightbox)
}

export interface Project {
  slug: string; // stable URL id
  title: string;
  date: string; // year, e.g. "2025"
  cardImage: string; // grid thumbnail
  cardBlurb: ReactNode; // short description shown on the grid card
  description?: ReactNode; // longer description for the detail page (falls back to cardBlurb)
  developedFor?: string; // "Personal" | "Ubisoft" | "AI4Good Lab" ...
  role?: string[];
  specs?: {
    frameworks?: string[];
    languages?: string[];
    tools?: string[];
  };
  media?: ProjectMedia[]; // right-side media on the detail page
  viewProject?: string; // external demo/live link
  viewRepo?: string; // source repo link
  related?: string[]; // slugs of related projects
}

export const projects: Project[] = [
  {
    slug: "sensa",
    title: "Sensa",
    date: "2026",
    cardImage: sensaCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">Figma, React PWA: </span>A privacy first
        progressive web app designed to help low-vision users manage menstrual
        health, featuring WCAG AAA accessible design, and entirely client-side
        fine-tuned EfficientNet models trained on ethical synthetic data.
      </>
    ),
    description: (
      <>
        Sensa is a privacy-first PWA that helps low-vision users track their
        menstrual and reproductive health.
        <br />
        <br />
        Accessible pregnancy-test datasets essentially don't exist (women's
        health research is badly under-resourced) so we built our own:
        generating synthetic test data with food colouring, and using COVID
        rapid tests as a proxy to train the pregnancy-test reading models.
        <br />
        <br />
        We hold privacy as our highest priority: no data every leaves the user's
        device, as all models are loaded as lightweight ONNX client-side, and
        users do not need to sign up or provide any personal information to use
        our application.
        <br />
        <br />I helped design and develop the UI to be accessible from the
        ground up, holding every colour pairing to the 7:1 WCAG AAA contrast
        ratio, using oversized touch targets, and making the full flow work with
        a screen reader.
      </>
    ),
    role: ["Designer", "Developer"],
    developedFor: "AI4Good Lab 2026",
    media: [
      {
        type: "video",
        src: sensaDemo,
        poster: sensaDemoPoster,
        alt: "Sensa demo",
      },
      {
        type: "image",
        src: sensa01,
        alt: "Sensa",
        caption: "Accessibility research",
      },
      { type: "image", src: sensa02, alt: "Sensa" , caption: "Mid-fi"},
      { type: "image", src: sensa03, alt: "Sensa" , caption: "Final assets"},
      { type: "image", src: sensa04, alt: "Sensa" , caption: "Hi-fi"},
    ],
    viewProject: "https://sensa-app.vercel.app",
    viewRepo: "https://github.com/amanduhhhh/sensa-deploy",
  },
  {
    slug: "to-bike-to",
    title: "To-bike-to",
    date: "2026",
    cardImage: toBikeToCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">Python, Pandas, Streamlit: </span>
        Real-time visualization of Toronto bike share stations with live
        availability data. Enter your address to find the nearest station with
        bikes available, then export your route to Google Maps.
      </>
    ),
    description: (
      <>
        To-bike-to uses Toronto Open Data to help people find nearby bike-share
        stations with real-time bike availability. I cleaned and normalized the
        station feed, mapped it onto an interactive Leaflet map, and used the
        Google Maps API to calculate routes from a user's address to the best
        available station.
        <br />
        <br />
        The app also lets users export the chosen route directly to Google Maps,
        so the planning flow can move from discovery to navigation without extra
        copying or searching.
        <br />
        <br />
        The hardest part was getting the API data into a reliable shape for
        real-time use: cleaning inconsistent fields, matching availability to
        station locations, and keeping the map useful even as the live feed
        changed.
      </>
    ),
    media: [
      {
        type: "image",
        src: toBikeTo01,
        alt: "To-bike-to station map",
      },
      {
        type: "image",
        src: toBikeTo02,
        alt: "To-bike-to route details",
      },
      {
        type: "image",
        src: toBikeTo03,
        alt: "Exported route to Google Maps",
        caption: "Exported route to Google Maps!",
      },
    ],
    specs: {
      frameworks: ["Streamlit"],
      languages: ["Python"],
      tools: ["Pandas", "NumPy"],
    },
    viewProject: "https://to-bike-to.streamlit.app",
    viewRepo: "https://github.com/amanduhhhh/tobiketo",
  },
  {
    slug: "mosaic",
    title: "Mosaic",
    date: "2025",
    cardImage: mosaicCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          Next.js, Typescript, FastAPI, LiteLLM:{" "}
        </span>
        AI co-pilot that turns natural-language prompts into live data
        dashboards, hot-swaps themes instantly, and streams hydrated components
        as layouts evolve.
      </>
    ),
    developedFor: "Hack Western 12",
    role: ["Developer", "Designer"],
    description: (
      <>
        Mosaic is an AI data dashboard co-pilot built around the idea that data
        interfaces should emerge from how people click, explore, and interact,
        not from forcing them to write the perfect text prompt. It lets users
        shape custom dashboards from live personal and public data sources, then
        adapt the interface as their curiosity changes.
        <br />
        <br />
        I developed the frontend/backend connection for streaming AI output with
        server-sent events, and designed the four hot-swappable themes,
        customization flow, and component blocks the AI uses to slot generated
        content into real UI pieces. The structure kept generated dashboards
        flexible for users while grounding the AI in reliable components and live
        data.
      </>
    ),
    specs: {
      frameworks: ["Next.js", "React", "FastAPI", "Tailwind CSS"],
      languages: ["TypeScript", "Python"],
      tools: [
        "LiteLLM",
        "morphdom",
        "Zustand",
      ],
    },
    media: [
      {
        type: "youtube",
        src: "vMlGH_3CMfQ",
        alt: "Mosaic demo",
      },
      {
        type: "image",
        src: mosaic01,
        alt: "Mosaic generated dashboard",
      },
      {
        type: "image",
        src: mosaic02,
        alt: "Mosaic dashboard theme options",
      },
      {
        type: "image",
        src: mosaic03,
        alt: "Mosaic generated component blocks",
      },
    ],
    viewProject: "https://devpost.com/software/mosaic-yh1a3p?_gl=1*oq30gs*_gcl_au*MjExOTc4Mzg1OS4xNzc5MTM3OTky*_ga*MTQwOTAwMTIzOS4xNzcwNTg0MDkw*_ga_0YHJK3Y10M*czE3ODQ1NzEwNTMkbzI4JGcxJHQxNzg0NTcxMDYwJGo1MyRsMCRoMA..",
    viewRepo: "https://github.com/amanduhhhh/Mosaic",
  },
  {
    slug: "oubliette",
    title: "Oubliette",
    date: "2025",
    cardImage: oublietteCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">C++, SFML: </span> You (Dogmog) dodge
        three AI hunters in a roguelike maze runner. A*, Dijkstra, and greedy
        BFS algorithms track you through procedural dungeons.
      </>
    ),
    description: (
      <>
        Oubliette is a roguelike maze runner that teaches pathfinding through
        gameplay instead of lectures. You play as Dogmog, searching a
        procedurally generated dungeon for a key and exit while three enemies
        chase you with different algorithms: A* as the balanced hunter, Dijkstra
        as the slower but exact tracker, and Best-First Search as the fast,
        greedy, chaotic pursuer.
        <br />
        <br />
        We built the game in C++ with SFML, using DFS maze generation with extra
        branching paths so each run has a guaranteed solution but still feels
        varied. Enemy speeds, spawn distances, round progression, and Ghost Mode
        power-ups were tuned around the different algorithms so the game stayed
        tense without becoming impossible.
      </>
    ),
    specs: {
      frameworks: ["SFML"],
      languages: ["C++"],
      tools: [
        "A*",
        "Dijkstra",
        "Best-First Search",
        "DFS Maze Generation",
      ],
    },
    media: [
      {
        type: "video",
        src: oublietteDemo,
        poster: oublietteDemoPoster,
        alt: "Oubliette gameplay demo",
      },
      {
        type: "image",
        src: oubliette01,
        alt: "Oubliette gameplay screenshot",
      },
    ],
    viewRepo: "https://github.com/amanduhhhh/Oubliette",
  },
  {
    slug: "bargain-bites",
    title: "Bargain Bites",
    date: "2025",
    cardImage: bargainBitesCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">Next.js, Typescript, Gemini API: </span>{" "}
        Save more. Eat better. We scrape your local flyers to formulate the
        perfect weekly grocery list, complete with meal plans and detailed
        recipes.
      </>
    ),
    description: (
      <>
        Bargain Bites turns scattered grocery flyer deals into practical weekly
        savings. Users enter their household size, budget, dietary needs,
        cooking comfort, and transportation limits, then the app generates a
        personalized meal plan and consolidated shopping list around the best
        available deals.
        <br />
        <br />
        I worked on a Next.js app that combines flyer scraping, JSON/PDF parsing,
        store mapping, and AI-assisted meal planning. The main challenge was
        normalizing messy retailer data, including inconsistent formats and
        shrinkflation differences, so recommendations stayed reliable,
        affordable, and realistic for each user's constraints.
      </>
    ),
    specs: {
      frameworks: ["Next.js", "React", "Prisma"],
      languages: ["TypeScript"],
      tools: [
        "MongoDB",
        "NextAuth",
        "Gemini API",
        "Auth0",
        "Google OAuth",
        "Vercel",
      ],
    },
    media: [
      {
        type: "image",
        src: bargainBites01,
        alt: "Bargain Bites onboarding screen",
      },
      {
        type: "image",
        src: bargainBites02,
        alt: "Bargain Bites preferences flow",
      },
      {
        type: "image",
        src: bargainBites03,
        alt: "Bargain Bites generated meal plan",
      },
      {
        type: "image",
        src: bargainBites04,
        alt: "Bargain Bites shopping list",
      },
    ],
    viewProject: "https://bargainbites-gamma.vercel.app",
  },
  {
    slug: "le-crochet",
    title: "Le Crochet",
    date: "2025",
    cardImage: leCrochetCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">Next.js, Typescript, Three.js: </span>{" "}
        Using CrocheTeX, our newly designed crochet markup language à la LaTeX,
        design, share, and monetize your 2D and 3D crochet patterns!
      </>
    ),
    description: (
      <>
        Le Crochet came from a very real crochet problem: I crochet a lot, and
        the most tedious part is often not knowing how a written pattern will
        actually look. Traditional instructions are hard to visualize, but I
        realized crochet notation already reads a lot like a programming
        language, so turning it into a DSL felt like the natural bridge between
        craft and code.
        <br />
        <br />
        We built CrocheTeX, a custom TypeScript compiler for writing, validating,
        and previewing crochet patterns in real time. The platform renders both
        2D symbol charts and interactive 3D stitch models with yarn flow, while
        an AI translation tool helps convert traditional written instructions
        into editable CrocheTeX patterns.
      </>
    ),
    specs: {
      frameworks: ["Next.js", "React", "Three.js", "Tailwind CSS"],
      languages: ["TypeScript", "CrocheTeX"],
      tools: [
        "React Three Fiber",
        "Monaco Editor",
        "Framer Motion",
        "NextAuth",
        "Google OAuth",
      ],
    },
    media: [
      {
        type: "image",
        src: leCrochet01,
        alt: "Le Crochet editor and pattern preview",
      },
      {
        type: "image",
        src: leCrochet02,
        alt: "Le Crochet CrocheTeX editor",
      },
      {
        type: "image",
        src: leCrochet03,
        alt: "Le Crochet 2D crochet chart",
      },
      {
        type: "image",
        src: leCrochet04,
        alt: "Le Crochet 3D stitch visualization",
      },
      {
        type: "image",
        src: leCrochet05,
        alt: "Le Crochet pattern customization screen",
      },
    ],
    viewProject: "https://le-crochet2.vercel.app",
  },
  {
    slug: "portfolio",
    title: "Portfolio Site",
    date: "2025",
    cardImage: portfolioCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">React, Vite, Typescript: </span>You're
        looking at it! Amanda Xi's portfolio project and latest sleep paralysis
        demon. Designed with Figma and Canva.
      </>
    ),
    viewRepo: "https://github.com/amanduhhhh/amanduhhhh.github.io",
  },
  {
    slug: "refyne",
    title: "Refyne",
    date: "2025",
    cardImage: refyneCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          React, Javascript, Python, Flask, Whisper API: (prompt engineering,
          REST API).
        </span>{" "}
        UoftHacks 12: AI-powered behavioral interview preparation platform that
        delivers personalized, actionable insights.
      </>
    ),
    description: (
      <>
        Refyne is an AI-powered behavioral interview prep platform built at
        UofTHacks 12. We wanted to create the soft-skills equivalent of tools
        like LeetCode: a place to practice storytelling, communication, and
        confidence with structured feedback instead of going into behavioral
        interviews underprepared.
        <br />
        <br />
        The app records spoken responses, transcribes them with Whisper, and
        combines AI feedback with audio-visual metrics like speaking pace,
        volume, and camera-based analysis. I worked on connecting the React/Vite
        frontend with the Flask/Python backend, where OpenCV and OpenAI-powered
        processing turned each practice session into scores, tips, and progress
        insights.
      </>
    ),
    developedFor: "UofTHacks 12",
    role: ["Developer"],
    specs: {
      frameworks: ["Vite", "React", "Flask"],
      languages: ["JavaScript", "Python"],
      tools: ["Whisper API", "OpenCV", "OpenAI API", "REST API"],
    },
    media: [
      { type: "youtube", src: "y-TNS84Umo4", alt: "Refyne demo" },
      {
        type: "image",
        src: refyne01,
        alt: "Refyne screenshot",
      },
      { type: "image", src: refyne02, alt: "Refyne screenshot" },
      { type: "image", src: refyne03, alt: "Refyne screenshot" },
    ],
    related: ["mosaic", "sensa"],
    viewProject: "https://dorahacks.io/buidl/21723",
  },
  {
    slug: "huffman-compression",
    title: "Huffman Compression",
    date: "2025",
    cardImage: huffmanCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          Java: (Data algorithms - BinaryTree, LinkedList, PriorityQueue from
          scratch).
        </span>{" "}
        Simple program to map character frequencies to a binary tree and encode
        files using Huffman Compression System.
      </>
    ),
    viewRepo: "https://github.com/amanduhhhh/Huffman-Compression",
  },
  {
    slug: "physics-sim",
    title: "Physics Sim",
    date: "2023",
    cardImage: physicsCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          Java, Swing: (animation, canva designs).
        </span>{" "}
        Visualize the concepts of kinematics, energy, and waves with an
        educational simulator. Edit variables and observe the effects.
      </>
    ),
    viewRepo: "https://github.com/amanduhhhh/Physics-Sim",
  },
  {
    slug: "tihkoosue",
    title: "Tihkoosue",
    date: "2023",
    cardImage: tihkoosueCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          (Java, Swing: sound design, collision mechanics, animation, file I/O).
        </span>{" "}
        Little penguin Tihkoosue is catching fish. Avoid the rotten ones, and
        catch special ones for power-ups. Track your high-score between
        sessions!
      </>
    ),
    viewRepo: "https://github.com/amanduhhhh/Tihkoosue",
  },
  {
    slug: "froggy-jump",
    title: "Froggy Jump!",
    date: "2022",
    cardImage: froggyJumpCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          Python, Pygame: (sound design, collision mechanics, animation,
          self-drawn sprites).
        </span>{" "}
        Play as a frog, jumping between logs and ascending towards the stars.
        Shoot down enemies with your nimble tongue!
      </>
    ),
    viewRepo: "https://github.com/amanduhhhh/FROGGY-JUMP",
  },
  {
    slug: "dash",
    title: "Dash!",
    date: "2022",
    cardImage: dashCard,
    cardBlurb: (
      <>
        <span className="highlighted-2">
          Python, Pygame: (sound design, collision mechanics, animation).
        </span>{" "}
        Become a fearless adventurer, dashing through fields of green. Jump to
        avoid trees and bushes, duck to avoid flying animals!
      </>
    ),
    viewRepo: "https://github.com/amanduhhhh/DASH-",
  },
];

export const getProject = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
