# 🇦🇩 Catalan Learning App

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Zustand](https://img.shields.io/badge/Zustand-State_Management-brown?style=for-the-badge)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-purple?style=for-the-badge)

A highly interactive, gamified web application for learning Catalan (from Spanish). Built with modern web technologies, this app takes users on a comprehensive journey from absolute beginner (A1) to advanced proficiency (C1).

## ✨ Features

- 📚 **Comprehensive Curriculum**: Over 1,500 unique learning scenarios spanning CEFR levels A1, A2, B1, B2, and C1.
- 🗣️ **Interactive Practice Modes**: 
  - **Writing Mode**: Translate and construct sentences with instant feedback.
  - **Talking Mode**: Practice pronunciation and speaking using browser-based speech recognition.
- 🎮 **Gamification System**: Track your progress, earn XP, manage your lives, and unlock progressively harder tiers.
- 📖 **Vocabulary Hub**: A fully indexed, categorized vocabulary dictionary with text-to-speech pronunciation support.
- 🎨 **Modern, Beautiful UI**: Built with responsive design, glassmorphism aesthetics, fluid micro-animations (Framer Motion), and professional iconography (Lucide).
- 🌍 **Bilingual Interface**: Seamlessly toggle the app's interface between Spanish and Catalan.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: Vanilla CSS (CSS Variables & custom design system) + Tailwind CSS (via PostCSS)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd catalan-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open the app**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to start learning!

## 📁 Project Structure

```text
├── src/
│   ├── app/                 # Next.js App Router (Pages & Layouts)
│   ├── components/          # Reusable React components (UI, interactive modes)
│   ├── data/                # Curriculum data (A1-C1 scenarios, vocabulary)
│   ├── lib/                 # Utility functions and i18n
│   └── store/               # Zustand global state management
├── scripts/                 # Data population and utility scripts
├── public/                  # Static assets
└── package.json             # Dependencies and scripts
```

## 🧠 Learning Methodology

The curriculum is structured into CEFR tiers (A1 to C1). Each tier contains multiple thematic sections (e.g., Greetings, At the Doctor, Argumentative Connectors). Every section features exactly 20 unique, non-repeating scenarios designed to test both writing comprehension and speaking ability, complete with contextual hints and explanation notes for false friends.

## 📄 License

This project is open-source and available under the MIT License.
