# Contributing to UMKM Web Starter

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 🎯 How to Contribute

### Reporting Bugs

- Use GitHub Issues to report bugs
- Include steps to reproduce, expected behavior, and actual behavior
- Add screenshots if applicable
- Mention your browser and OS

### Suggesting Features

- Open a GitHub Issue with the "enhancement" label
- Describe the feature and why it would be useful
- Provide examples if possible

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 💻 Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/umkm-web-starter.git
cd umkm-web-starter

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests (when available)
npm test

# Build for production
npm run build
```

## 📝 Code Style

- Use TypeScript for all new code
- Follow existing code patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused
- Use the existing design tokens

## 🎨 Design Guidelines

- Follow the existing design system
- Use the provided color palette
- Maintain consistent spacing
- Ensure accessibility (WCAG 2.2 AA)
- Test on multiple screen sizes
- Respect `prefers-reduced-motion`

## 🧪 Testing

Before submitting a PR:

- [ ] Code builds without errors (`npm run build`)
- [ ] No TypeScript errors
- [ ] No console errors in browser
- [ ] Tested on mobile and desktop
- [ ] Accessibility checks pass
- [ ] Performance is not degraded

## 📚 Documentation

- Update README.md if needed
- Add JSDoc comments to new functions
- Document new components and their props
- Update customization guide if applicable

## 🤔 Questions?

Open a GitHub Issue or reach out via discussions.

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for helping make UMKM Web Starter better! 🙏
