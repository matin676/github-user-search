# 🔍 devfinder - Modern GitHub User Search

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deploy to Pages](https://github.com/matin676/github-user-search/actions/workflows/deploy.yml/badge.svg)](https://github.com/matin676/github-user-search/actions/workflows/deploy.yml)

A high-performance, premium GitHub user search application built with **React**, **Vite**, and **Framer Motion**. This project features a modern Glassmorphism UI, advanced data insights, and a modular architecture.

## ✨ Features

- **🌓 Dynamic Theming**: Seamless Light/Dark mode with system preference detection and persistence.
- **📊 Language Insights**: Visual distribution chart of a user's top programming languages.
- **📁 Top Repositories**: Instant view of the 6 most recently updated repositories.
- **📜 Search History**: Interactive chips for quick navigation between recent searches.
- **🎭 Premium UX**: Smooth animations, skeleton loaders, and Glassmorphism effects.
- **📱 Fully Responsive**: Optimized for all devices from mobile to ultra-wide displays.
- **⚡ Performance**: Parallel API fetching and intelligent LocalStorage caching.

## 🚀 Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: Vanilla CSS (Modern CSS Variables & Glassmorphism)
- **Deployment**: GitHub Actions & GitHub Pages

## 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/matin676/github-user-search.git
   cd github-user-search
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
src/
├── components/   # UI & Layout components
├── context/      # Theme & Global state
├── hooks/        # Custom hooks (e.g., useGithubUser)
├── services/     # API service layer
└── styles/       # Design system tokens
```

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by [Matin](https://github.com/matin676)
