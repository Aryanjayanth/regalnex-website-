# GitHub Repository Setup Guide

## Prerequisites
1. Git installed on your computer
2. GitHub account
3. Your React project files

## Setup Steps

### 1. Initialize Git Repository (if not already done)
```bash
git init
```

### 2. Configure Git (if not already done)
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### 3. Create .gitignore (already exists in your project)
Your .gitignore file should include:
```
node_modules/
dist/
.env
.env.local
.DS_Store
```

### 4. Create New Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the '+' icon and select 'New repository'
3. Name your repository (e.g., 'regal-nex')
4. Choose public or private
5. Don't initialize with README (since you have existing code)
6. Click 'Create repository'

### 5. Add Files to Git
```bash
git add .
```

### 6. Commit Files
```bash
git commit -m "Initial commit"
```

### 7. Link to GitHub Repository
```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
```

### 8. Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## Important Notes
- Make sure sensitive data (API keys, credentials) are in .env file and not committed
- Regular development workflow:
  ```bash
  git add .
  git commit -m "Your commit message"
  git push
  ```

## Troubleshooting
- If push fails, try: `git pull origin main` first
- For authentication issues, use GitHub personal access tokens
- For large files, consider using Git LFS

## GitHub Pages Deployment
### 1. Configure vite.config.ts
Add base URL for GitHub Pages:
```typescript
export default defineConfig({
  base: '/YOUR-REPO-NAME/',
  // ... other config
})
```

### 2. Build the Project
```bash
npm run build
```

### 3. Deploy to GitHub Pages
1. Go to your repository settings
2. Navigate to 'Pages' section
3. Under 'Source', select 'GitHub Actions'
4. Choose 'Static HTML' workflow
5. Commit and push the workflow file

Your site will be available at: https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/