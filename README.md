# Justin Schwertmann - Portfolio & Resume

A modern, responsive portfolio and resume website built with VitePress and Vuetify, showcasing my projects, skills, and professional experience as a Software Engineer.

## 🌐 Live Site

Visit my portfolio at: [https://justin.schwertmann.me](https://justin.schwertmann.me)

## ✨ Features

- **Modern Tech Stack**: Built with VitePress 1.x and Vuetify 3.x
- **Dark Theme**: Material Design 3-inspired dark theme for optimal viewing
- **Responsive Design**: Fully responsive layout that works on all devices
- **Project Showcase**: Interactive project cards with images, descriptions, and technology tags
- **Interactive Resume**: Detailed professional experience and skills presentation
- **Fast & Optimized**: Leverages VitePress's static site generation for blazing-fast performance

## 🚀 Projects Featured

- **SmallWorlds** - A reimagined game client using ActionScript and TypeScript
- **Talking Pictures** - Senior capstone project for photo storytelling (iOS/Android)
- **Splotus Website** - Modern web presence for a health services organization
- **Playlist Generator** - PHP-based music playlist management system

## 🛠️ Technologies Used

### Frontend
- Vue.js 3.4+
- VitePress 1.2+
- Vuetify 3.6+
- Material Design Icons
- TypeScript

### Styling
- CSS3 with custom Material 3 design tokens
- Vuetify component library
- Responsive design principles

### Build & Deploy
- Vite
- GitHub Actions (CI/CD)
- Tailscale (secure deployment)

## 📦 Project Structure

```
Portfolio/
├── vue-portfolio/              # Main VitePress portfolio site
│   ├── docs/
│   │   ├── .vitepress/
│   │   │   ├── config.mts      # VitePress configuration
│   │   │   └── theme/          # Custom theme & styling
│   │   │       ├── index.ts    # Theme entry point with Vuetify
│   │   │       └── custom.css  # Custom CSS (gradient title, etc.)
│   │   ├── index.md            # Homepage
│   │   ├── portfolio.md        # Projects showcase
│   │   ├── resume.md           # Professional resume
│   │   └── public/             # Static assets (images, PDFs)
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/justhecool/portfolio.git
cd portfolio/vue-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run docs:dev
```

4. Visit `http://localhost:5173` in your browser

### Build for Production

```bash
npm run docs:build
```

The built site will be in `docs/.vitepress/dist/`

### Preview Production Build

```bash
npm run docs:preview
```

## 🎨 Customization

### Changing Colors

Edit the Vuetify theme configuration in `docs/.vitepress/theme/index.ts`:

```typescript
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#YOUR_COLOR',
          secondary: '#YOUR_COLOR',
          // ... more colors
        }
      }
    }
  }
})
```

### Adding Projects

Add new project cards to `docs/portfolio.md` following the existing Vuetify card structure.

### Updating Resume

Edit `docs/resume.md` with your own experience, education, and skills.

## 🔧 Configuration

Key configuration files:
- `docs/.vitepress/config.mts` - VitePress site configuration
- `docs/.vitepress/theme/index.ts` - Vuetify and theme setup
- `docs/.vitepress/theme/custom.css` - Custom styling

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📫 Contact

- **Email**: [justin@schwertmann.me](mailto:justin@schwertmann.me)
- **LinkedIn**: [justin-schwertmann](https://www.linkedin.com/in/justin-schwertmann/)
- **GitHub**: [@justhecool](https://github.com/justhecool)

## 🙏 Acknowledgments

- [VitePress](https://vitepress.dev/) - The static site generator powering this portfolio
- [Vuetify](https://vuetifyjs.com/) - Material Design component framework
- [Material Design 3](https://m3.material.io/) - Design inspiration

---

Built with ❤️ by Justin Schwertmann