# soco-portfolio (Jekyll theme)
A clean, portfolio-first theme with Projects collection, Skills from data, SEO, sitemap, dark/light tokens.

## Install (local path)
1. Copy this folder next to your Jekyll site.
2. In your site's `_config.yml` set:
   ```yaml
   theme: soco-portfolio
   title: Your Name
   tagline: Developer · DevOps · etc.
   github_username: yourgithub
   plugins: [jekyll-seo-tag, jekyll-sitemap]
   collections:
     projects:
       output: true
   ```
3. Ensure your site's Gemfile includes `gem "jekyll-seo-tag"` and `gem "jekyll-sitemap"`.

## Content model
- Create `_projects/` with markdown files using the `project` layout:
  ```markdown
  ---
  layout: project
  title: Stock Analysis API
  stack: [FastAPI, PostgreSQL, Docker]
  featured: true
  links:
    - {label: GitHub, url: "https://github.com/..." }
  ---
  Short pitch for the project...
  ```
-
## Pages
- Set `index.md` front matter to use the home layout:
  ```yaml
  ---
  layout: home
  title: Your Name
  tagline: Backend · DevOps · Cloud
  ---
  ```

## Dev setup
1. Install dependencies:
   ```bash
   bundle install
   ```
2. Run Jekyll:
   ```bash
   bundle exec jekyll serve
   ```  