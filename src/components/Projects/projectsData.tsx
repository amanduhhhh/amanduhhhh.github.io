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
        caption: "accessibility research",
      },
      { type: "image", src: sensa02, alt: "Sensa" },
      { type: "image", src: sensa03, alt: "Sensa" },
      { type: "image", src: sensa04, alt: "Sensa" },
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
    viewProject: "https://to-bike-to.streamlit.app",
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
    // --- example of a fully-populated project (edit / verify the placeholder fields) ---
    description: (
      <>
        Refyne is an AI-powered behavioral interview prep platform built at
        UofTHacks 12. It records your spoken answers, transcribes them with the
        Whisper API, and returns personalized, actionable feedback on structure,
        clarity, and delivery. The goal was to make interview practice feel like
        a real conversation rather than a checklist, so candidates can iterate
        on their storytelling and walk in confident!
      </>
    ),
    developedFor: "UofTHacks 12",
    role: ["Developer"], // TODO: verify / adjust
    specs: {
      frameworks: ["React", "Flask"],
      languages: ["JavaScript", "Python"],
      tools: ["Whisper API", "REST API"],
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
