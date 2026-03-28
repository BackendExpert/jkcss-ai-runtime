const STYLE_TAG_ID = "ai-css-runtime-styles";
let styleTag = null;
let styleCache = {};
let classCache = new Set();

// Built-in API URL
const API_URL = "https://server-css.vercel.app/api/css/get-styles";

// Load mapping from API (cached)
async function loadCSSMapping() {
    if (Object.keys(styleCache).length > 0) return styleCache;

    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data?.Status === "Success" && data?.Result) {
            styleCache = data.Result;
        }

        return styleCache;
    } catch (err) {
        console.error("[AI-CSS] Failed to fetch CSS mapping:", err);
        return {};
    }
}

// ✅ SMART PHRASE MATCHING (FIXED)
function combineCSS(instructionStr, mapping) {
    const input = instructionStr.toLowerCase();
    let cssText = "";

    // Sort keys: longest first (important for phrases)
    const keys = Object.keys(mapping).sort((a, b) => b.length - a.length);

    let remaining = input;

    keys.forEach(key => {
        if (remaining.includes(key)) {
            cssText += mapping[key];

            // Remove matched part to avoid smaller overlaps
            remaining = remaining.replace(key, " ");
        }
    });

    return cssText;
}

// Inject CSS into <style>
function injectStyle(className, css) {
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = STYLE_TAG_ID;
        document.head.appendChild(styleTag);
    }

    if (classCache.has(className)) return;

    styleTag.innerHTML += `
.${className} { ${css} }
`;

    classCache.add(className);
}

// Apply styles to elements
async function scanAIClasses() {
    const mapping = await loadCSSMapping();
    if (!mapping || Object.keys(mapping).length === 0) return;

    const elements = document.querySelectorAll("[aiclass]");

    elements.forEach(el => {
        const instructionStr = el.getAttribute("aiclass");
        if (!instructionStr) return;

        const css = combineCSS(instructionStr, mapping);
        if (!css) return;

        const className =
            "ai_" + instructionStr.toLowerCase().replace(/\s+/g, "_");

        injectStyle(className, css);
        el.classList.add(className);
    });
}

//////////////////////////////////////////////////////////
// ✅ AUTO RUN (React + Dynamic DOM SUPPORT)
//////////////////////////////////////////////////////////

// Run initially
setTimeout(scanAIClasses, 0);
setTimeout(scanAIClasses, 500);
setTimeout(scanAIClasses, 1000);

// Watch for DOM changes (React, Vue, dynamic UI)
const observer = new MutationObserver(() => {
    scanAIClasses();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["aiclass"]
});

// Export for manual use
export default scanAIClasses;