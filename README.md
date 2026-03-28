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
npm install ai-css-runtime

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

