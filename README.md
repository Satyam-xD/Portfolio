# Satyam Katiyar - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a clean design, smooth animations, and excellent performance.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Dark/Light Mode**: Toggle between dark and light themes with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized animations
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **PWA Ready**: Web app manifest for potential PWA features

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Linting**: ESLint
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Satyam-xD/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build

To build for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Projects.jsx    # Projects section
│   ├── Contact.jsx     # Contact section
│   ├── Footer.jsx      # Footer
│   └── ScrollToTop.jsx # Scroll to top button
├── hooks/              # Custom React hooks
│   └── useTheme.js     # Theme management hook
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: "#0ea5e9",    // Main brand color
  dark: "#0f172a",       // Dark background
  light: "#f8fafc",      // Light background
}
```

### Content
Update the content in each component file to match your information.

### Styling
The project uses Tailwind CSS utility classes. You can customize the design by modifying the classes or adding custom CSS in `src/index.css`.

## 📱 Performance

- **Lazy Loading**: Components are lazy-loaded for better initial load time
- **Code Splitting**: Automatic code splitting with Vite
- **Optimized Images**: Use WebP format for better compression
- **Minified CSS**: Production builds include minified CSS
- **Tree Shaking**: Unused code is automatically removed

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast ratios

## 🔧 Development

### Linting
```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Fix auto-fixable linting errors
```

### Code Style
The project uses ESLint with React-specific rules. Make sure to follow the established patterns.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: [@Satyam-xD](https://github.com/Satyam-xD)
- **LinkedIn**: [Satyam Katiyar](https://www.linkedin.com/in/satyam-katiyar-139478327)

---

Made with ❤️ by Satyam Katiyar

