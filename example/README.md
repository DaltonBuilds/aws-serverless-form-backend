# Demo Frontend

A minimal Next.js application that demonstrates the AWS serverless form backend architecture using **mock responses**.

## 🎯 Purpose

This demo runs entirely in the browser and on Vercel - **no AWS backend required**. It shows what the user experience would be like and explains what happens behind the scenes when the real infrastructure is deployed.

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DaltonBuilds/aws-serverless-form-backend/tree/main/example)

Set environment variable:
- `NEXT_PUBLIC_DEMO_MODE=true`

## 🎨 Features

- ✅ Modern, responsive UI with Tailwind CSS
- ✅ Form validation with React Hook Form + Zod
- ✅ Mock API responses that explain the architecture
- ✅ Educational flow diagram showing what happens in production
- ✅ Mobile-friendly design

## 📝 Note

This is a **demonstration only**. To deploy the real backend:
1. Follow the main README.md deployment guide
2. Set `NEXT_PUBLIC_DEMO_MODE=false`
3. Configure AWS API Gateway URL
4. Add Cloudflare Turnstile site key
