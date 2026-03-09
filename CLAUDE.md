# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **al-folio** Jekyll theme for academic websites - a simple, clean, and responsive static site generator theme designed for academics, researchers, and labs. It's based on the [*folio] design and built with Jekyll, a Ruby-based static site generator.

### Key Technologies

- **Jekyll 4.x** - Static site generator (Ruby)
- **Liquid Templates** - Jekyll templating language (`.liquid` files)
- **SCSS** - Stylesheets with SASS preprocessing
- **Bootstrap 5** - CSS framework
- **Material Design Bootstrap (MDB)** - Additional UI components
- **Various JS Libraries** - MathJax (math), Chart.js, Mermaid, Leaflet, etc.

---

## Common Commands

### Local Development

```bash
# Install Ruby dependencies (first time setup)
bundle install

# Install Node.js dependencies (for Prettier)
npm install

# Start local development server (watch mode with live reload)
bundle exec jekyll serve

# Start server with specific host/port
bundle exec jekyll serve --host=0.0.0.0 --port=8080

# Build the site for production
bundle exec jekyll build

# Clean the generated site
bundle exec jekyll clean
```

### Code Quality

```bash
# Format code with Prettier
npx prettier --write .

# Check formatting
npx prettier --check .
```

### Docker Development (Alternative)

```bash
# Build and run Jekyll in Docker
docker-compose up

# For production build
docker-compose -f docker-compose-slim.yml up
```

---

## Architecture

### Directory Structure

```
├── _config.yml           # Main Jekyll configuration
├── Gemfile               # Ruby gem dependencies
├── package.json          # Node.js dependencies (Prettier)
│
├── _layouts/             # Jekyll page layouts
│   ├── about.liquid      # About/profile page layout
│   ├── bib.liquid        # Publications bibliography layout
│   ├── cv.liquid         # Curriculum vitae layout
│   ├── distill.liquid    # Distill.pub style blog post layout
│   ├── page.liquid       # Generic page layout
│   └── post.liquid      # Blog post layout
│
├── _includes/            # Reusable Liquid components
│   ├── head.liquid       # HTML head, meta tags, stylesheets
│   ├── header.liquid     # Site navigation header
│   ├── footer.liquid     # Site footer
│   ├── scripts.liquid    # Conditional script loading
│   └── [various]        # Feature-specific components
│
├── _sass/               # SCSS stylesheets
│   ├── _variables.scss   # Theme colors and variables
│   ├── _themes.scss      # Color theme definitions
│   └── [various]        # Component styles
│
├── _data/               # Data files (YAML)
│   ├── cv.yml           # CV/resume data (fallback to jsonresume)
│   ├── repositories.yml  # GitHub repos/users display data
│   ├── socials.yml      # Social media links
│   └── venues.yml       # Publication venues/conferences
│
├── _pages/              # Site pages
├── _posts/              # Blog posts (YYYY-MM-DD-title.md)
├── _projects/           # Project entries
├── _news/               # News/announcements
├── _bibliography/       # BibTeX files (publications)
│
├── _plugins/            # Custom Jekyll plugins (Ruby)
│
├── assets/              # Static assets
│   ├── css/             # Generated CSS
│   ├── js/              # JavaScript files
│   ├── img/             # Images (responsive WebP generation)
│   ├── pdf/             # PDF files (publications, etc.)
│   └── json/            # JSON data (resume.json for CV)
│
└── .github/workflows/   # CI/CD workflows (GitHub Actions)
```

### Content Model

#### Collections

1. **news** - News/announcements displayed on homepage
   - Location: `_news/announcement_*.md`
   - Front matter: `date`, `title`, `content`

2. **projects** - Portfolio projects
   - Location: `_projects/#_project.md`
   - Front matter: `title`, `description`, `image`, `url`, `repo`, `authors`

3. **posts** - Blog posts
   - Location: `_posts/YYYY-MM-DD-title.md`
   - Front matter: `title`, `date`, `tags`, `categories`, `toc`, etc.

#### Pages

Pages in `_pages/` define site sections (about, publications, cv, etc.) and use layouts from `_layouts/`.

### Configuration Flow

1. **Global config**: `_config.yml` defines site-wide settings, plugins, themes, and features
2. **Data loading**: `_data/*.yml` provides structured data for CV, social links, etc.
3. **Collections**: Defined in `_config.yml` under `collections` key
4. **Jekyll Scholar**: Processes BibTeX bibliography in `_bibliography/`
5. **Build process**: Liquid templates combine data + markdown + layouts → `_site/` (output)

### Key Features Toggle (in _config.yml)

- `enable_darkmode` - Light/dark theme switching
- `enable_math` - MathJax for LaTeX equations
- `enable_masonry` - Masonry layout for projects
- `enable_medium_zoom` - Image zoom feature
- `enable_tooltips` - Section title tooltips
- `search_enabled` - Site-wide search (Cmd+K)
- `imagemagick.enabled` - Responsive WebP image generation

---

## Important Patterns

### Conditional Script Loading

The `_includes/scripts.liquid` file conditionally loads JavaScript libraries based on page variables and site configuration. This is critical for performance - libraries are only loaded when needed.

Example conditions:
- `{% if page.mermaid and page.mermaid.enabled %}` - Load Mermaid only if page uses it
- `{% if site.enable_math %}` - Load MathJax globally if enabled
- `{% if page.toc and page.toc.sidebar %}` - Load sidebar TOC on pages with it

### Theme System

Colors are defined in `_sass/_variables.scss` and `_sass/_themes.scss`. The global theme color is set via `--global-theme-color` in `_sass/_themes.scss`. Available themes are imported from `_sass/_variables.scss`.

### CV Generation

Two methods for CV content:
1. **Primary**: `assets/json/resume.json` - JSON Resume format
2. **Fallback**: `_data/cv.yml` - YAML format (if JSON not found)

The `jekyll_get_json` plugin loads the JSON data into `site.data.resume`.

### Publications

Publications are generated from BibTeX files in `_bibliography/` using `jekyll-scholar`. The display is controlled by `_layouts/bib.liquid` and `_pages/publications.md`.

Custom BibTeX fields for metadata: `pdf`, `code`, `blog`, `poster`, `slides`, `video`, `selected`, `abstract`, etc.

---

## Development Notes

### Code Formatting

- Uses **Prettier** with `@shopify/prettier-plugin-liquid`
- Configured in `.prettierrc` and `.prettierignore`
- Print width: 150 characters

### Third-Party Libraries

Library versions and SRI hashes are defined in `_config.yml` under `third_party_libraries`. This enables integrity checks and version pinning for all external dependencies.

### Cache Busting

The `bust_file_cache` filter (from `_plugins/cache-bust.rb`) adds a cache-busting query parameter to asset URLs based on file modification time.

### Responsive Images

When `imagemagick.enabled: true`, images in `assets/img/` are automatically converted to multiple WebP sizes (480px, 800px, 1400px) for responsive loading.

---

## Deployment

- **GitHub Pages**: Automatic deployment on push to `main` branch via `.github/workflows/deploy.yml`
- **GitHub Actions**: Runs on `ubuntu-latest` with Ruby 3.3.5 and Python 3.13
- **Output directory**: `_site/` (Jekyll build output)
- **PurgeCSS**: Unused CSS is removed before deployment using `purgecss`

---

## Customization

To customize the site, primarily modify:
- `_config.yml` - Site settings, features, and configuration
- `_data/*.yml` - CV content, social links, etc.
- `_bibliography/*.bib` - Publications
- `_sass/_variables.scss` - Theme colors and variables
- `_pages/*.md` - Page content
