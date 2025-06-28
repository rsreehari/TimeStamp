# Deployment Guide

## Option 1: Deploy to Render (Recommended - Free)

1. Go to [render.com](https://render.com) and sign up
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository: `https://github.com/rsreehari/Timestamp`
4. Configure:
   - **Name**: `timestamp-microservice`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. Click "Create Web Service"
6. Wait for deployment (usually 2-3 minutes)
7. Your app will be available at: `https://your-app-name.onrender.com`

## Option 2: Deploy to Railway (Free)

1. Go to [railway.app](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository: `rsreehari/Timestamp`
4. Railway will automatically detect it's a Node.js app
5. Wait for deployment
6. Your app will be available at the provided URL

## Option 3: Deploy to Heroku (Free tier discontinued)

If you have a Heroku account:
1. Install Heroku CLI
2. Run: `heroku create your-app-name`
3. Run: `git push heroku main`
4. Your app will be at: `https://your-app-name.herokuapp.com`

## Option 4: Deploy to Vercel (Free)

1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect and deploy
5. Your app will be available at the provided URL

## Testing Your Deployment

Once deployed, test these URLs:
- `https://your-app-url.com/` (should show the UI)
- `https://your-app-url.com/December%2015,%202015`
- `https://your-app-url.com/1450137600`

## Troubleshooting

If the deployed version doesn't match your local version:
1. Check if the deployment platform is using the latest commit
2. Clear browser cache and hard refresh (Ctrl+F5)
3. Wait a few minutes for deployment to complete
4. Check deployment logs for any errors 