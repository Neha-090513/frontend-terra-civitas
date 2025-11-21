# ⚡ Terra Civitas – Web Dashboard 

> Modern React + TypeScript dashboard built with Vite, Tailwind CSS, and shadcn-ui

[![Vite](https://img.shields.io/badge/build-Vite-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/frontend-React-61DAFB.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-3178C6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/styles-TailwindCSS-38B2AC.svg)](https://tailwindcss.com/)
[![shadcn-ui](https://img.shields.io/badge/ui-shadcn--ui-000000.svg)](https://ui.shadcn.com/)

---

## 📋 Overview

This repository contains the **frontend application** for the Terra Civitas system..

The app is a **single-page application (SPA)** built with:

- **Vite** for fast dev/build  
- **React + TypeScript** for a robust component model  
- **Tailwind CSS** for styling  
- **shadcn-ui** for accessible, composable UI components  

Use it as a dashboard / control panel UI to integrate your backend.

---

## 🎯 Key Features

- ✅ **Vite-powered dev experience** – extremely fast HMR & builds  
- ✅ **Type-safe React codebase** using TypeScript  
- ✅ **Tailwind CSS** utility-based styling  
- ✅ **shadcn-ui components** for buttons, cards, dialogs, forms, etc.  
- ✅ **Ready for API integration** via fetch/axios/React Query  
- ✅ **Easy deployment** to Vercel, Netlify, GitHub Pages, or any static host  

---

## 🏗️ Project Structure

> This is a typical layout for  Vite + React + TypeScript + Tailwind + shadcn-ui project.  

```txt
<project-root>/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # shadcn-ui primitives
│   │   └── layout/          # Layout components (header, sidebar, etc.)
│   ├── pages/               # Top-level pages / views
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities, API clients, helpers
│   ├── styles/              # Global styles (if any)
│   ├── main.tsx             # React entry point
│   └── App.tsx              # Root app component / routing
├── public/                  # Static assets
├── index.html               # Vite HTML entry
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.cjs      # Tailwind config
├── postcss.config.cjs       # PostCSS config
├── package.json
└── README.md                # This file
---
```
## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm 

### Installation & Development

```bash
# 1. Clone the repository
git clone https://github.com/Neha-090513/frontend-terra-civitas.git
cd frontend-terra-civitas

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev


