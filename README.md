# 🎨 JKCSS AI Runtime

> ✨ Write styles like **human language** — no classes, no Tailwind, no CSS files.

---

## 🚀 Features

| Feature | Description |
|--------|------------|
| 🧠 AI Style Parsing | Use natural phrases like `big padding box` |
| ⚡ Zero CSS Files | No need to write CSS manually |
| 🔥 Multi-word Support | Handles complex styles (`very soft box`, `glass feeling`) |
| ⚛️ React Ready | Works automatically with dynamic rendering |
| 👀 Auto DOM Watch | Detects new elements instantly |
| 📦 Lightweight | No heavy dependencies |

---

## 📦 Installation

```bash
npm install jkcss-ai-runtime

```

## 🛠 Usage

### 1️⃣ Import in your project

```js

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "jkcss-ai-runtime";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


```

- import `jkcss-ai-runtime` on your `main.jsx` file

### 2️⃣ Use aiclass 

```html

<div aiclass="indigo-500 big padding box">
  Hello World 🚀
</div>

```

## 🎯 Examples

| Input             | Output                            |
| ----------------- | --------------------------------- |
| `big padding box` | 📦 Large padded rounded container |
| `very soft box`   | ☁️ Smooth soft card UI            |
| `glass feeling`   | 🧊 Glassmorphism effect           |
| `touch to grow`   | 🖱 Hover scale animation          |
| `pill shaped`     | 💊 Rounded button                 |


## 💡 Advanced Example


```html

<div aiclass="indigo-500 very soft box touch to grow">
  Modern Card UI 😎
</div>

```

- ⚡ Background color
- ⚡ Padding + radius
- ⚡ Shadow
- ⚡ Hover animation

## 🧠 Supported Style Types

| Category        | Examples                             |
| --------------- | ------------------------------------ |
| 🎨 Colors       | `indigo-500`, `red`, `blue`          |
| 📦 Layout       | `big padding box`, `soft center box` |
| 🌫 Effects      | `glass feeling`, `blur box`          |
| 🌟 Shadows      | `light glow`, `floating panel`       |
| 🎭 UI Styles    | `friendly card`, `soft panel`        |
| 🖱 Interactions | `touch to grow`, `hover effects`     |


## ⚡ Performance

| Metric         | Value                             |
| -------------- | --------------------------------- |
| Style Matching | ⚡ Optimized (longest-first match) |
| DOM Updates    | 🔄 MutationObserver               |
| Cache          | 🧠 Smart caching enabled          |
| API Calls      | 📡 Only once                      |


## 🚧 Beta Status & The Future Vision

> ⚠️ This project is currently in Beta — and that’s just the beginning

### 🧪 Current State
- 🔹 Powered by a curated style API
- 🔹 Thousands of ready-to-use design patterns
- 🔹 Fast, lightweight, and production-ready



## 🤖 Coming Next: AI-Powered Styling

> 💡 Soon, AI CSS Runtime will evolve beyond predefined styles...


### 🚀 What This Means

| Today                 | Future                                   |
| --------------------- | ---------------------------------------- |
| Use predefined styles | 🧠 Generate **completely custom styles** |
| Limited by database   | ♾️ **Unlimited design possibilities**    |
| Static mapping        | ⚡ Real-time AI style generation          |
| Manual combinations   | 🎨 Describe UI like a human              |


### 🔮 Future Example

```html

<div aiclass="modern glass card with soft purple glow and smooth hover grow">

```

## 👉 AI will generate:

- 🔹 Custom colors 🎨
- 🔹 Shadows & lighting 🌟
- 🔹 Animations ⚡
- 🔹 Layout & spacing 📐

## ❤️ Early Support Matters

- Since this is in Beta, your feedback helps shape the future 🙌

- 👉 Try it
- 👉 Break it
- 👉 Suggest features

> Let’s build something revolutionary together 🚀


## ⚠️ Notes
- 🧾 Later styles override earlier ones (CSS rule)
- 🔤 Case-insensitive input
- 🚫 No need to modify API (works with large datasets)

## 🤝 Contributing

Pull requests are welcome!
Let’s build the future of styling together 💪

## 📜 License

MIT License

## ❤️ Author

Made with ❤️ Love by Jehan (BlackAlphaLabs)[https://www.blackalphalabs.com/] 🚀

## ⭐ Support

- If you like this project:

- 👉 Give it a star ⭐
- 👉 Share it 🔥
- 👉 Build something crazy with it 😎

### Use this when using this aiClass

```json

{
  "Status": "Success",
  "Result": {
    "red-50": "color:#fef2f2;",
    "red-100": "color:#fee2e2;",
    "red-200": "color:#fecaca;",
    "red-300": "color:#fca5a5;",
    "red-400": "color:#f87171;",
    "red-500": "color:#ef4444;",
    "red-600": "color:#dc2626;",
    "red-700": "color:#b91c1c;",
    "red-800": "color:#991b1b;",
    "red-900": "color:#7f1d1d;",
    "red-950": "color:#450a0a;",
    "orange-50": "color:#fff7ed;",
    "orange-100": "color:#ffedd5;",
    "orange-200": "color:#fed7aa;",
    "orange-300": "color:#fdba74;",
    "orange-400": "color:#fb923c;",
    "orange-500": "color:#f97316;",
    "orange-600": "color:#ea580c;",
    "orange-700": "color:#c2410c;",
    "orange-800": "color:#9a3412;",
    "orange-900": "color:#7c2d12;",
    "orange-950": "color:#431407;",
    "amber-50": "color:#fffbeb;",
    "amber-100": "color:#fef3c7;",
    "amber-200": "color:#fde68a;",
    "amber-300": "color:#fcd34d;",
    "amber-400": "color:#fbbf24;",
    "amber-500": "color:#f59e0b;",
    "amber-600": "color:#d97706;",
    "amber-700": "color:#b45309;",
    "amber-800": "color:#92400e;",
    "amber-900": "color:#78350f;",
    "amber-950": "color:#451a03;",
    "yellow-50": "color:#fefce8;",
    "yellow-100": "color:#fef9c3;",
    "yellow-200": "color:#fef08a;",
    "yellow-300": "color:#fde047;",
    "yellow-400": "color:#facc15;",
    "yellow-500": "color:#eab308;",
    "yellow-600": "color:#ca8a04;",
    "yellow-700": "color:#a16207;",
    "yellow-800": "color:#854d0e;",
    "yellow-900": "color:#713f12;",
    "yellow-950": "color:#422006;",
    "lime-50": "color:#f7fee7;",
    "lime-100": "color:#ecfccb;",
    "lime-200": "color:#d9f99d;",
    "lime-300": "color:#bef264;",
    "lime-400": "color:#a3e635;",
    "lime-500": "color:#84cc16;",
    "lime-600": "color:#65a30d;",
    "lime-700": "color:#4d7c0f;",
    "lime-800": "color:#3f6212;",
    "lime-900": "color:#365314;",
    "lime-950": "color:#1a2e05;",
    "green-50": "color:#f0fdf4;",
    "green-100": "color:#dcfce7;",
    "green-200": "color:#bbf7d0;",
    "green-300": "color:#86efac;",
    "green-400": "color:#4ade80;",
    "green-500": "color:#22c55e;",
    "green-600": "color:#16a34a;",
    "green-700": "color:#15803d;",
    "green-800": "color:#166534;",
    "green-900": "color:#14532d;",
    "green-950": "color:#052e16;",
    "emerald-50": "color:#ecfdf5;",
    "emerald-100": "color:#d1fae5;",
    "emerald-200": "color:#a7f3d0;",
    "emerald-300": "color:#6ee7b7;",
    "emerald-400": "color:#34d399;",
    "emerald-500": "color:#10b981;",
    "emerald-600": "color:#059669;",
    "emerald-700": "color:#047857;",
    "emerald-800": "color:#065f46;",
    "emerald-900": "color:#064e3b;",
    "emerald-950": "color:#022c22;",
    "teal-50": "color:#f0fdfa;",
    "teal-100": "color:#ccfbf1;",
    "teal-200": "color:#99f6e4;",
    "teal-300": "color:#5eead4;",
    "teal-400": "color:#2dd4bf;",
    "teal-500": "color:#14b8a6;",
    "teal-600": "color:#0d9488;",
    "teal-700": "color:#0f766e;",
    "teal-800": "color:#115e59;",
    "teal-900": "color:#134e4a;",
    "teal-950": "color:#042f2e;",
    "cyan-50": "color:#ecfeff;",
    "cyan-100": "color:#cffafe;",
    "cyan-200": "color:#a5f3fc;",
    "cyan-300": "color:#67e8f9;",
    "cyan-400": "color:#22d3ee;",
    "cyan-500": "color:#06b6d4;",
    "cyan-600": "color:#0891b2;",
    "cyan-700": "color:#0e7490;",
    "cyan-800": "color:#155e75;",
    "cyan-900": "color:#164e63;",
    "cyan-950": "color:#083344;",
    "sky-50": "color:#f0f9ff;",
    "sky-100": "color:#e0f2fe;",
    "sky-200": "color:#bae6fd;",
    "sky-300": "color:#7dd3fc;",
    "sky-400": "color:#38bdf8;",
    "sky-500": "color:#0ea5e9;",
    "sky-600": "color:#0284c7;",
    "sky-700": "color:#0369a1;",
    "sky-800": "color:#075985;",
    "sky-900": "color:#0c4a6e;",
    "sky-950": "color:#082f49;",
    "blue-50": "color:#eff6ff;",
    "blue-100": "color:#dbeafe;",
    "blue-200": "color:#bfdbfe;",
    "blue-300": "color:#93c5fd;",
    "blue-400": "color:#60a5fa;",
    "blue-500": "color:#3b82f6;",
    "blue-600": "color:#2563eb;",
    "blue-700": "color:#1d4ed8;",
    "blue-800": "color:#1e40af;",
    "blue-900": "color:#1e3a8a;",
    "blue-950": "color:#172554;",
    "indigo-50": "color:#eef2ff;",
    "indigo-100": "color:#e0e7ff;",
    "indigo-200": "color:#c7d2fe;",
    "indigo-300": "color:#a5b4fc;",
    "indigo-400": "color:#818cf8;",
    "indigo-500": "color:#6366f1;",
    "indigo-600": "color:#4f46e5;",
    "indigo-700": "color:#4338ca;",
    "indigo-800": "color:#3730a3;",
    "indigo-900": "color:#312e81;",
    "indigo-950": "color:#1e1b4b;",
    "violet-50": "color:#f5f3ff;",
    "violet-100": "color:#ede9fe;",
    "violet-200": "color:#ddd6fe;",
    "violet-300": "color:#c4b5fd;",
    "violet-400": "color:#a78bfa;",
    "violet-500": "color:#8b5cf6;",
    "violet-600": "color:#7c3aed;",
    "violet-700": "color:#6d28d9;",
    "violet-800": "color:#5b21b6;",
    "violet-900": "color:#4c1d95;",
    "violet-950": "color:#2e1065;",
    "purple-50": "color:#faf5ff;",
    "purple-100": "color:#f3e8ff;",
    "purple-200": "color:#e9d5ff;",
    "purple-300": "color:#d8b4fe;",
    "purple-400": "color:#c084fc;",
    "purple-500": "color:#a855f7;",
    "purple-600": "color:#9333ea;",
    "purple-700": "color:#7e22ce;",
    "purple-800": "color:#6b21a8;",
    "purple-900": "color:#581c87;",
    "purple-950": "color:#3b0764;",
    "fuchsia-50": "color:#fdf4ff;",
    "fuchsia-100": "color:#fae8ff;",
    "fuchsia-200": "color:#f5d0fe;",
    "fuchsia-300": "color:#f0abfc;",
    "fuchsia-400": "color:#e879f9;",
    "fuchsia-500": "color:#d946ef;",
    "fuchsia-600": "color:#c026d3;",
    "fuchsia-700": "color:#a21caf;",
    "fuchsia-800": "color:#86198f;",
    "fuchsia-900": "color:#701a75;",
    "fuchsia-950": "color:#4a044e;",
    "pink-50": "color:#fdf2f8;",
    "pink-100": "color:#fce7f3;",
    "pink-200": "color:#fbcfe8;",
    "pink-300": "color:#f9a8d4;",
    "pink-400": "color:#f472b6;",
    "pink-500": "color:#ec4899;",
    "pink-600": "color:#db2777;",
    "pink-700": "color:#be185d;",
    "pink-800": "color:#9d174d;",
    "pink-900": "color:#831843;",
    "pink-950": "color:#500724;",
    "rose-50": "color:#fff1f2;",
    "rose-100": "color:#ffe4e6;",
    "rose-200": "color:#fecdd3;",
    "rose-300": "color:#fda4af;",
    "rose-400": "color:#fb7185;",
    "rose-500": "color:#f43f5e;",
    "rose-600": "color:#e11d48;",
    "rose-700": "color:#be123c;",
    "rose-800": "color:#9f1239;",
    "rose-900": "color:#881337;",
    "rose-950": "color:#4c0519;",
    "slate-50": "color:#f8fafc;",
    "slate-100": "color:#f1f5f9;",
    "slate-200": "color:#e2e8f0;",
    "slate-300": "color:#cbd5e1;",
    "slate-400": "color:#94a3b8;",
    "slate-500": "color:#64748b;",
    "slate-600": "color:#475569;",
    "slate-700": "color:#334155;",
    "slate-800": "color:#1e293b;",
    "slate-900": "color:#0f172a;",
    "slate-950": "color:#020617;",
    "gray-50": "color:#f9fafb;",
    "gray-100": "color:#f3f4f6;",
    "gray-200": "color:#e5e7eb;",
    "gray-300": "color:#d1d5db;",
    "gray-400": "color:#9ca3af;",
    "gray-500": "color:#6b7280;",
    "gray-600": "color:#4b5563;",
    "gray-700": "color:#374151;",
    "gray-800": "color:#1f2937;",
    "gray-900": "color:#111827;",
    "gray-950": "color:#030712;",
    "zinc-50": "color:#fafafa;",
    "zinc-100": "color:#f4f4f5;",
    "zinc-200": "color:#e4e4e7;",
    "zinc-300": "color:#d4d4d8;",
    "zinc-400": "color:#a1a1aa;",
    "zinc-500": "color:#71717a;",
    "zinc-600": "color:#52525b;",
    "zinc-700": "color:#3f3f46;",
    "zinc-800": "color:#27272a;",
    "zinc-900": "color:#18181b;",
    "zinc-950": "color:#09090b;",
    "neutral-50": "color:#fafafa;",
    "neutral-100": "color:#f5f5f5;",
    "neutral-200": "color:#e5e5e5;",
    "neutral-300": "color:#d4d4d4;",
    "neutral-400": "color:#a3a3a3;",
    "neutral-500": "color:#737373;",
    "neutral-600": "color:#525252;",
    "neutral-700": "color:#404040;",
    "neutral-800": "color:#262626;",
    "neutral-900": "color:#171717;",
    "neutral-950": "color:#0a0a0a;",
    "stone-50": "color:#fafaf9;",
    "stone-100": "color:#f5f5f4;",
    "stone-200": "color:#e7e5e4;",
    "stone-300": "color:#d6d3d1;",
    "stone-400": "color:#a8a29e;",
    "stone-500": "color:#78716c;",
    "stone-600": "color:#57534e;",
    "stone-700": "color:#44403c;",
    "stone-800": "color:#292524;",
    "stone-900": "color:#1c1917;",
    "stone-950": "color:#0c0a09;",
    "taupe-50": "color:#a38b40;",
    "taupe-100": "color:#a9934d;",
    "taupe-200": "color:#af9a59;",
    "taupe-300": "color:#b5a266;",
    "taupe-400": "color:#bbaa73;",
    "taupe-500": "color:#c2b280;",
    "taupe-600": "color:#c8b98c;",
    "taupe-700": "color:#cec199;",
    "taupe-800": "color:#d4c9a6;",
    "taupe-900": "color:#dad0b2;",
    "taupe-950": "color:#e0d8bf;",
    "mauve-50": "color:#d088ff;",
    "mauve-100": "color:#d390ff;",
    "mauve-200": "color:#d698ff;",
    "mauve-300": "color:#d9a0ff;",
    "mauve-400": "color:#dca8ff;",
    "mauve-500": "color:#e0b0ff;",
    "mauve-600": "color:#e3b7ff;",
    "mauve-700": "color:#e6bfff;",
    "mauve-800": "color:#e9c7ff;",
    "mauve-900": "color:#eccfff;",
    "mauve-950": "color:#efd7ff;",
    "mist-50": "color:#b7d2ed;",
    "mist-100": "color:#bbd5ee;",
    "mist-200": "color:#c0d8ef;",
    "mist-300": "color:#c5dbf0;",
    "mist-400": "color:#cadef1;",
    "mist-500": "color:#cfe1f3;",
    "mist-600": "color:#d3e4f4;",
    "mist-700": "color:#d8e7f5;",
    "mist-800": "color:#ddeaf6;",
    "mist-900": "color:#e2edf7;",
    "mist-950": "color:#e7f0f9;",
    "olive-50": "color:#404000;",
    "olive-100": "color:#4d4d00;",
    "olive-200": "color:#595900;",
    "olive-300": "color:#666600;",
    "olive-400": "color:#737300;",
    "olive-500": "color:#808000;",
    "olive-600": "color:#8c8c19;",
    "olive-700": "color:#999933;",
    "olive-800": "color:#a6a64c;",
    "olive-900": "color:#b2b266;",
    "olive-950": "color:#bfbf7f;",
    "very soft box": "padding:16px;border-radius:16px;background:white;box-shadow:0 2px 8px rgba(0,0,0,0.12);",
    "little shadow box": "padding:12px;border-radius:10px;box-shadow:0 1px 4px rgba(0,0,0,0.18);",
    "round and clean": "border-radius:20px;padding:14px;background:#f9f9f9;",
    "glass feeling": "backdrop-filter:blur(12px);background:rgba(255,255,255,0.25);border-radius:14px;padding:12px;",
    "soft center box": "display:flex;justify-content:center;align-items:center;padding:14px;border-radius:10px;",
    "big padding box": "padding:24px;border-radius:12px;background:#fff;",
    "light glow": "box-shadow:0 0 12px rgba(255,255,255,0.4);border-radius:10px;padding:10px;",
    "slightly lifted": "box-shadow:0 6px 14px rgba(0,0,0,0.25);border-radius:12px;padding:16px;",
    "quiet border": "border:1px solid rgba(0,0,0,0.2);border-radius:8px;padding:10px;",
    "pill shaped": "border-radius:999px;padding:8px 20px;",
    "soft highlight": "background:rgba(255,255,0,0.2);padding:8px;border-radius:6px;",
    "subtle panel": "padding:18px;border-radius:10px;background:#f3f3f3;",
    "smooth touch": "transition:all 0.25s ease;border-radius:8px;padding:10px;",
    "touch to grow": "transition:0.2s;transform:scale(1);",
    "touch to grow:hover": "transform:scale(1.07);",
    "light blur box": "backdrop-filter:blur(8px);background:rgba(255,255,255,0.18);padding:14px;border-radius:16px;",
    "warm background": "background:#fff6e5;padding:14px;border-radius:10px;",
    "calm dark box": "background:#222;color:#f1f1f1;padding:16px;border-radius:10px;",
    "soft edge box": "border-radius:14px;padding:12px;background:#ececec;",
    "floating panel": "box-shadow:0 10px 26px rgba(0,0,0,0.3);padding:20px;border-radius:18px;",
    "tiny soft panel": "padding:6px;border-radius:6px;background:#fdfdfd;box-shadow:0 1px 3px rgba(0,0,0,0.08);",
    "gentle shadow feeling": "box-shadow:0 2px 6px rgba(0,0,0,0.12);padding:12px;border-radius:10px;",
    "soft glass panel": "backdrop-filter:blur(10px);background:rgba(255,255,255,0.2);border-radius:12px;padding:12px;",
    "friendly rounded box": "border-radius:14px;padding:14px;background:#fefefe;box-shadow:0 3px 10px rgba(0,0,0,0.15);",
    "lightly glowing box": "box-shadow:0 0 8px rgba(255,255,255,0.3);padding:12px;border-radius:12px;",
    "smooth floating card": "box-shadow:0 8px 20px rgba(0,0,0,0.25);padding:16px;border-radius:16px;",
    "calm soft corner": "border-radius:12px;padding:12px;background:#f7f7f7;",
    "soft pastel feeling": "background:#fef5f5;padding:14px;border-radius:12px;",
    "slight blur box": "backdrop-filter:blur(6px);background:rgba(255,255,255,0.15);padding:12px;border-radius:12px;",
    "tiny glow panel": "box-shadow:0 0 6px rgba(255,255,255,0.25);padding:8px;border-radius:10px;",
    "small gentle box": "padding:10px;border-radius:10px;background:#fcfcfc;box-shadow:0 1px 3px rgba(0,0,0,0.1);",
    "soft friendly card": "border-radius:14px;padding:16px;background:#fff;box-shadow:0 2px 10px rgba(0,0,0,0.12);",
    "warm light panel": "background:#fff9f0;padding:14px;border-radius:12px;",
    "slightly raised panel": "box-shadow:0 4px 12px rgba(0,0,0,0.18);padding:14px;border-radius:12px;",
    "little blur feeling": "backdrop-filter:blur(8px);background:rgba(255,255,255,0.2);padding:12px;border-radius:14px;",
    "soft floating box": "box-shadow:0 6px 16px rgba(0,0,0,0.2);padding:16px;border-radius:16px;",
    "soft cozy card": "padding:14px;border-radius:12px;background:#fdfdfd;box-shadow:0 2px 6px rgba(0,0,0,0.12);",
    "gentle panel": "padding:12px;border-radius:10px;background:#f8f8f8;box-shadow:0 1px 4px rgba(0,0,0,0.1);",
    "slight shadow card": "box-shadow:0 2px 6px rgba(0,0,0,0.15);padding:14px;border-radius:12px;",
    "soft calm box": "border-radius:12px;padding:12px;background:#fafafa;box-shadow:0 1px 4px rgba(0,0,0,0.08);",
    "tiny glass feeling": "backdrop-filter:blur(6px);background:rgba(255,255,255,0.12);padding:10px;border-radius:10px;",
    "light pastel box": "background:#fff8f8;padding:12px;border-radius:12px;",
    "gentle rounded feeling": "border-radius:14px;padding:14px;background:#fdfdfd;",
    "soft lifted panel": "box-shadow:0 5px 14px rgba(0,0,0,0.2);padding:16px;border-radius:14px;",
    "slightly warm box": "background:#fff7e8;padding:12px;border-radius:12px;",
    "soft friendly glow": "box-shadow:0 0 10px rgba(255,255,255,0.3);padding:12px;border-radius:12px;",
    "slightly foggy panel": "backdrop-filter:blur(10px);background:rgba(255,255,255,0.18);padding:14px;border-radius:14px;",
    "soft floating panel": "box-shadow:0 6px 18px rgba(0,0,0,0.22);padding:16px;border-radius:16px;",
    "calm pastel box": "background:#fef7f7;padding:14px;border-radius:12px;",
    "light foggy box": "backdrop-filter:blur(8px);background:rgba(255,255,255,0.2);padding:12px;border-radius:12px;",
    "little cozy corner": "border-radius:12px;padding:12px;background:#fafafa;box-shadow:0 1px 4px rgba(0,0,0,0.08);",
    "tiny floating panel": "box-shadow:0 4px 12px rgba(0,0,0,0.18);padding:14px;border-radius:14px;",
    "soft warm glow": "box-shadow:0 0 10px rgba(255,255,255,0.25);padding:12px;border-radius:12px;",
    "slightly rounded panel": "border-radius:12px;padding:12px;background:#f7f7f7;",
    "soft gentle glow": "box-shadow:0 0 8px rgba(255,255,255,0.2);padding:12px;border-radius:12px;",
    "tiny calm box": "padding:10px;border-radius:10px;background:#fcfcfc;box-shadow:0 1px 3px rgba(0,0,0,0.1);",
    "slightly foggy box": "backdrop-filter:blur(6px);background:rgba(255,255,255,0.15);padding:12px;border-radius:12px;",
    "soft light panel": "background:#fffdfd;padding:12px;border-radius:12px;",
    "calm friendly box": "border-radius:14px;padding:14px;background:#fefefe;box-shadow:0 2px 6px rgba(0,0,0,0.12);",
    "gentle floating box": "box-shadow:0 6px 16px rgba(0,0,0,0.2);padding:16px;border-radius:16px;",
    "slight warm glow": "box-shadow:0 0 12px rgba(255,255,255,0.3);padding:12px;border-radius:12px;",
    "tiny pastel panel": "background:#fff9f9;padding:12px;border-radius:12px;",
    "soft foggy feeling": "backdrop-filter:blur(8px);background:rgba(255,255,255,0.2);padding:12px;border-radius:12px;",
    "slightly soft box": "border-radius:12px;padding:12px;background:#fafafa;box-shadow:0 1px 4px rgba(0,0,0,0.08);",
    "tiny gentle panel": "padding:10px;border-radius:10px;background:#fdfdfd;box-shadow:0 1px 3px rgba(0,0,0,0.08);",
    "soft cozy feeling": "padding:12px;border-radius:12px;background:#fefefe;box-shadow:0 2px 6px rgba(0,0,0,0.12);",
    "light floating box": "box-shadow:0 4px 14px rgba(0,0,0,0.15);padding:14px;border-radius:14px;",
    "gentle foggy glow": "backdrop-filter:blur(10px);background:rgba(255,255,255,0.18);padding:14px;border-radius:14px;",
    "soft pastel glow": "box-shadow:0 0 10px rgba(255,255,255,0.25);padding:12px;border-radius:12px;",
    "slightly warm panel": "background:#fff8f0;padding:14px;border-radius:12px;",
    "tiny calm feeling": "padding:10px;border-radius:10px;background:#fcfcfc;box-shadow:0 1px 3px rgba(0,0,0,0.08);",
    "soft lifted feeling": "box-shadow:0 6px 18px rgba(0,0,0,0.22);padding:16px;border-radius:16px;",
    "slight cozy corner": "border-radius:12px;padding:12px;background:#fafafa;box-shadow:0 1px 4px rgba(0,0,0,0.08);",
    "tiny floating glow": "box-shadow:0 0 6px rgba(255,255,255,0.25);padding:10px;border-radius:10px;",
    "soft foggy glow": "backdrop-filter:blur(8px);background:rgba(255,255,255,0.2);padding:12px;border-radius:12px;",
    "slightly gentle box": "border-radius:12px;padding:12px;background:#f7f7f7;box-shadow:0 1px 4px rgba(0,0,0,0.08);",
    "tiny warm panel": "background:#fff7f0;padding:12px;border-radius:12px;",
    "soft friendly corner": "border-radius:14px;padding:14px;background:#fefefe;box-shadow:0 2px 6px rgba(0,0,0,0.12);",
    "slightly floating box": "box-shadow:0 4px 16px rgba(0,0,0,0.18);padding:14px;border-radius:14px;",
    "gentle warm glow": "box-shadow:0 0 10px rgba(255,255,255,0.3);padding:12px;border-radius:12px;",
    "tiny pastel feeling": "background:#fff8f8;padding:12px;border-radius:12px;",
    "soft foggy panel": "backdrop-filter:blur(6px);background:rgba(255,255,255,0.15);padding:12px;border-radius:12px;",
    "slightly cozy box": "padding:12px;border-radius:12px;background:#fafafa;box-shadow:0 1px 4px rgba(0,0,0,0.08);",
    "tiny gentle glow": "box-shadow:0 0 6px rgba(255,255,255,0.2);padding:10px;border-radius:10px;",
    "soft calm panel": "padding:12px;border-radius:12px;background:#fefefe;box-shadow:0 2px 6px rgba(0,0,0,0.12);",
    "light floating feeling": "box-shadow:0 4px 14px rgba(0,0,0,0.15);padding:14px;border-radius:14px;",
    "gentle foggy panel": "backdrop-filter:blur(10px);background:rgba(255,255,255,0.18);padding:14px;border-radius:14px;",
    "soft pastel panel": "box-shadow:0 0 10px rgba(255,255,255,0.25);padding:12px;border-radius:12px;",
    "slightly warm glow": "background:#fff8f0;padding:14px;border-radius:12px;"
  }
}


```