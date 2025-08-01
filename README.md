# Technicolor Hearts Website

A modern, static website for the electronic music project Technicolor Hearts. This site has been converted from WordPress PHP to static HTML/CSS/JS for deployment on GitHub Pages.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Modern JavaScript**: Vanilla JS with no external dependencies
- **Optimized Performance**: Consolidated CSS, efficient image loading, and clean code
- **Accessibility**: Semantic HTML, keyboard navigation, and screen reader support
- **Cross-browser Compatible**: Works on all modern browsers

## File Structure

```
├── index.html              # Main homepage
├── about.html              # About page
├── 404.html               # Custom 404 error page
├── android-chrome-192x192.png  # Favicon
├── assets/
│   ├── css/
│   │   └── style.css      # All styles consolidated here
│   ├── js/
│   │   └── main.js        # All JavaScript functionality
│   └── images/            # Local image assets
├── epk/                   # Electronic Press Kit folder
└── README.md              # This file
```

## Technologies Used

- **HTML5**: Semantic markup with modern standards
- **CSS3**: Custom properties, Grid, Flexbox, and responsive design
- **Vanilla JavaScript**: No external libraries or frameworks
- **Adobe Typekit**: Custom fonts (Bungee, TrebuchetMS)

## Removed Dependencies

The following outdated technologies were removed during modernization:
- Bootstrap 4.4.1
- jQuery 3.4.1
- Popper.js
- PHP WordPress functions
- Deprecated HTML tags (`<center>`, table-based layouts)

## Features Implemented

### Navigation
- Mobile-responsive hamburger menu
- Smooth scrolling to page sections
- Keyboard navigation support

### Interactive Elements
- Image hover effects for social media icons
- Form validation for email signup
- Responsive video embeds
- Progressive image loading

### Styling
- Modern CSS architecture
- Consistent color scheme and typography
- Responsive breakpoints for all devices
- CSS custom properties for maintainability

## Deployment

This site is ready for deployment on:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

### GitHub Pages Setup
1. Push code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main` or `gh-pages`)
4. Site will be available at `https://username.github.io/repository-name`

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Optimizations

- Consolidated CSS (reduced from multiple files)
- Efficient JavaScript loading
- Optimized image delivery
- Minimal external dependencies
- Clean, semantic HTML structure

## Maintenance

The site uses modern web standards and should require minimal maintenance. All styles are in `assets/css/style.css` and all JavaScript is in `assets/js/main.js` for easy updates.

## Contact

For questions about this website, contact: hello@technicolorhearts.com

---

© 2020 Technicolor Hearts. All rights reserved.
