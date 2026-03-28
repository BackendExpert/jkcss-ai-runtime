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

