## 📦 JavaScript Modules – Full Notes

### 🔹 What Are Modules?

* **Modules** in JavaScript are files that contain code which is **self-contained and reusable**.
* Help **encapsulate logic**, avoid polluting the global namespace, and manage dependencies efficiently.

---

## 1. 🔰 Why Use Modules?

* Promote **code reusability**.
* Enable **separation of concerns**.
* Help in **maintaining** and **scaling** codebases.
* Prevent **naming conflicts** (each module has its own scope).

---

## 2. 📁 Types of Modules in JavaScript

| Type                                 | Syntax                            | Environment                          |
| ------------------------------------ | --------------------------------- | ------------------------------------ |
| ES Modules (ESM)                     | `import` / `export`               | Modern Browsers, Node.js (from v14+) |
| CommonJS (CJS)                       | `require()` / `module.exports`    | Node.js (default pre-v14)            |
| UMD (Universal Module Definition)    | Works in both browser and Node.js | Libraries                            |
| AMD (Asynchronous Module Definition) | `define()`                        | Browser (e.g., RequireJS)            |

---

## 3. ✨ ES Modules (ESM)

### ➕ Exporting

```js
// utils.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

OR

```js
// utils.js
const subtract = (a, b) => a - b;
export default subtract;
```

### ➕ Export All at Once

```js
// utils.js
const divide = (a, b) => a / b;
const mod = (a, b) => a % b;
export { divide, mod };
```

### ➖ Importing

```js
// app.js
import { add, multiply } from './utils.js';
import subtract from './utils.js';
```

### 🔀 Rename While Importing

```js
import { add as addition } from './utils.js';
```

---

## 4. 📦 CommonJS (Node.js)

### ➕ Export

```js
// utils.js
const add = (a, b) => a + b;
module.exports = { add };
```

### ➖ Import

```js
// app.js
const { add } = require('./utils');
```

> ⚠️ `require` is **synchronous** and only works in Node.js (unless bundled).

---

## 5. 🏗 Module Scope

* Variables/functions declared in a module are **not global**.
* Each module has its own **module scope**.

---

## 6. 📄 Default vs Named Exports

| Feature            | Named Export             | Default Export            |
| ------------------ | ------------------------ | ------------------------- |
| Syntax             | `export const foo = ...` | `export default foo`      |
| Import Syntax      | `import { foo }`         | `import foo`              |
| Multiple per file? | ✅                        | ❌                         |
| Use-case           | Multiple exports         | One main thing per module |

---

## 7. 🌍 Top-Level `await` (in ESM)

```js
// Only in modules
const data = await fetch('/api/data').then(res => res.json());
```

> ✅ Works only in **ES Modules** and not in CommonJS.

---

## 8. ⚙ How to Use Modules in Browser

```html
<script type="module" src="main.js"></script>
```

> 🚨 Modules are **deferred by default** and follow **CORS rules**.

---

## 9. 🌐 Modules in Node.js

* Use `.mjs` extension **or**
* Set `"type": "module"` in `package.json`.

```json
{
  "type": "module"
}
```

---

## 10. 🔗 Dynamic Imports (Code Splitting)

```js
// Load a module dynamically
const module = await import('./math.js');
module.add(2, 3);
```

> ✅ Useful for **lazy loading**, **conditional loading**, etc.

---

## 11. 📦 Bundlers & Tools

| Tool            | Role                                   |
| --------------- | -------------------------------------- |
| **Webpack**     | Bundles multiple modules into one      |
| **Rollup**      | Tree-shaking + ES Modules              |
| **Parcel/Vite** | Fast bundling with ESM support         |
| **Babel**       | Transpiles modern JS to older versions |

---

## 12. 🔍 Tree Shaking

* **Eliminates unused exports** from final bundle.
* Only works with **ES Modules**, not CommonJS.

---

## 13. ✅ Best Practices

* Use **ES Modules** for new projects.
* Stick to **one default export** per file (if used).
* Use **descriptive filenames** (`mathUtils.js`, `authService.js`).
* Keep **modules small and focused**.

---

## 14. 🧠 Advanced Concepts

| Concept                    | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| **Module Resolution**      | How the engine locates a module (`node_modules`, file paths) |
| **Circular Dependencies**  | Two modules depend on each other. Try to refactor to avoid.  |
| **Named Exports Conflict** | Same name used in multiple modules—can alias during import.  |
| **Side Effects**           | A module runs code when imported (e.g., global setup)        |