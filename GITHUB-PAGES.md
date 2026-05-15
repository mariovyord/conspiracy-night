# GitHub Pages Deployment Guide

## Configuration Complete ✅

Your Conspiracy Night website is now configured for GitHub Pages deployment.

## What Was Changed

### 1. Astro Configuration (`astro.config.mjs`)
```javascript
export default defineConfig({
  site: 'https://mariovyord.github.io',
  base: '/conspiracy-night',
});
```

- **site**: Your GitHub Pages URL
- **base**: Repository name (ensures correct paths)

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on push to `main`
- Uses Node.js 22
- Builds static site to `dist/`
- Deploys to GitHub Pages

## Deployment Steps

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/mariovyord/conspiracy-night
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select: **GitHub Actions**
5. Save

### Step 2: Push Changes

The code is already committed and ready. The workflow will:
- ✅ Trigger on the next push to `main`
- ✅ Build the site
- ✅ Deploy to GitHub Pages
- ✅ Be accessible at: `https://mariovyord.github.io/conspiracy-night/`

### Step 3: Wait for Deployment

- First deployment takes ~2-3 minutes
- Check progress: **Actions** tab in GitHub
- Watch for green checkmark ✅

## Your Site URLs

Once deployed:

**Live Site**: https://mariovyord.github.io/conspiracy-night/

**Repository**: https://github.com/mariovyord/conspiracy-night

## Updating the Site

Every time you push to `main`:
1. GitHub Actions automatically runs
2. Site rebuilds with latest content
3. Deploys to GitHub Pages
4. Live in ~2-3 minutes

## Local Development

Continue developing locally:

```bash
# Development server
npm run dev

# Production build (test before pushing)
npm run build

# Preview production build locally
npm run preview
```

## Troubleshooting

### If deployment fails:

1. **Check Actions tab** for error messages
2. **Verify Node version**: Ensure workflow uses Node 22+
3. **Test locally**: Run `npm run build` to catch errors
4. **Check paths**: All internal links use relative paths

### If site shows 404:

1. **Verify base path**: Should be `/conspiracy-night`
2. **Check repository name**: Must match `base` in config
3. **Wait 5 minutes**: DNS/CDN can take time

### If CSS/assets don't load:

1. **Check base path**: Links should be relative or include base
2. **Review build output**: Check `dist/` folder structure
3. **Test preview locally**: `npm run preview` should work

## Files Changed

- ✅ `astro.config.mjs` - Added site and base config
- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `GITHUB-PAGES.md` - This guide

## Next Steps After Deployment

1. **Test the live site** at your GitHub Pages URL
2. **Share the link** with your partner for date night!
3. **Add more topics** - Push to `main` for auto-deployment
4. **Monitor analytics** (optional: add Google Analytics)
5. **Custom domain** (optional: configure in Settings > Pages)

## Custom Domain (Optional)

If you want to use your own domain:

1. Go to **Settings** > **Pages**
2. Enter your domain in **Custom domain**
3. Add DNS records (see GitHub docs)
4. Update `site` in `astro.config.mjs`

## Checking Deployment Status

After pushing:

```bash
# View recent commits
git log --oneline -5

# Check remote
git remote -v
```

Then visit:
- **Actions tab**: See build progress
- **Settings > Pages**: See deployment URL

---

## Ready to Deploy! 🚀

Everything is configured. Your next push to `main` will:
1. ✅ Trigger GitHub Actions
2. ✅ Build the site
3. ✅ Deploy to GitHub Pages
4. ✅ Go live at: https://mariovyord.github.io/conspiracy-night/

**Have fun sharing conspiracy theories with your wife!** 🕵️🔍🌙
