# Deploying to Hostinger

## Prerequisites
1. A Hostinger hosting account
2. Access to Hostinger control panel
3. Your production build files (located in the `dist` folder)

## Deployment Steps

### 1. Build Your Project
Your project is already built and the files are in the `dist` directory.

### 2. Upload to Hostinger
1. Log in to your Hostinger control panel
2. Navigate to File Manager or use FTP credentials
3. Upload all contents from your `dist` folder to the `public_html` directory

### 3. Configure Domain Settings
1. Go to your domain settings in Hostinger
2. Point your domain to the `public_html` directory

### 4. Configure Server for React Router
Create or modify the `.htaccess` file in your `public_html` directory with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. SSL Configuration
1. Enable SSL in Hostinger control panel
2. Force HTTPS redirect if needed

### 6. Test Your Deployment
1. Visit your domain
2. Test all routes and features
3. Check browser console for any errors

## Troubleshooting
- If routes don't work, verify the `.htaccess` configuration
- For 404 errors, ensure all files were uploaded correctly
- For asset loading issues, check the paths in your build files