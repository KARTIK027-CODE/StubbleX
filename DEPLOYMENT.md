# Deployment Guide for StubbleX

This guide will help you host your application for **free** and **permanently**.

Since your application uses a Next.js Frontend and a Python AI Backend (TensorFlow), we will use two specialized free hosting providers:

1.  **Frontend**: **Vercel** (Creators of Next.js, best performance).
2.  **Backend**: **Render** (Excellent support for Python/Docker/ML models).

---

## Prerequisites

Ensure your latest code is pushed to GitHub.
```bash
git add .
git commit -m "Prepare for deployment: Update CORS and API URLs"
git push origin main
```
*(If you are not on the main branch, make sure to push the branch you want to deploy)*

---

## Step 1: Deploy Backend (Render)

1.  Go to [dashboard.render.com](https://dashboard.render.com/) and create a free account.
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub account and select the **StubbleX** repository.
4.  Configure the service with the following settings:
    *   **Name**: `stubblex-backend` (or similar)
    *   **Region**: Closest to you (e.g., Singapore or Frankfurt)
    *   **Branch**: `main` (or your working branch)
    *   **Root Directory**: `backend`  <-- **IMPORTANT**
    *   **Runtime**: `Python 3`
    *   **Build Command**: `pip install -r requirements.txt`
    *   **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
    *   **Instance Type**: Free
5.  Scroll down to **Environment Variables** and add:
    *   `Key`: `USE_ML_MODEL`
    *   `Value`: `1` (To enable the AI)
    *   `Key`: `PYTHON_VERSION`
    *   `Value`: `3.9.0` (Recommended)
6.  Click **Create Web Service**.

**Wait for deployment to finish.**
Once deployed, copy the **onrender.com URL** (e.g., `https://stubblex-backend.onrender.com`). You will need this for the frontend.

---

## Step 2: Deploy Frontend (Vercel)

1.  Go to [vercel.com](https://vercel.com/) and create a free account.
2.  Click **Add New...** -> **Project**.
3.  Import the **StubbleX** repository.
4.  Configure the project:
    *   **Framework Preset**: Next.js (Default)
    *   **Root Directory**: `./` (Default)
5.  Expand **Environment Variables** and add:
    *   `Key`: `NEXT_PUBLIC_API_URL`
    *   `Value`: `https://stubblex-backend.onrender.com` (Paste the URL from Step 1)
    *   *Note: Do not add a trailing slash `/` at the end.*
6.  Click **Deploy**.

---

## Success!

Vercel will build your frontend and verify it. Once done, you will get a permanent URL (e.g., `agri-loop.vercel.app`).
Your app is now live!
- **Frontend** runs on Vercel's Edge Network.
- **Backend** runs on Render's Cloud.
