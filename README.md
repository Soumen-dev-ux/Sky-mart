# 🛒 SkyMart — Modern E-Commerce Platform

[![React](https://img.shields.io/badge/React-19.0-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**SkyMart** is a fast, responsive, modern e-commerce application built with **React 19**, **Vite**, and **Tailwind CSS**. It features full user authentication simulation, real-time search & filtering, interactive cart management, wishlist tracking, checkout flow, and order history visualization.

---

## ✨ Features

- 🔐 **User Authentication**: Integrated Sign In / Sign Up modal flow with active session state.
- 🔍 **Instant Search & Dynamic Filters**: Filter items by categories (Electronics, Fashion, Home, etc.) and search items in real-time.
- ⚡ **Sorting System**: Easily sort products by Price (Low to High, High to Low) and Customer Rating.
- 🛍️ **Interactive Cart Drawer**: Side drawer cart with live quantity updates, price calculation, and item removal.
- ❤️ **Wishlist System**: Save favorite products with instant wishlist drawer modal viewing.
- 📦 **Checkout & Order History**: Seamless checkout simulation with shipping details, payment selection, and instant order tracking in user account profile.
- 🔍 **Product Detail Modal**: Quick view modal for viewing high-res product photos, descriptions, and feature lists.
- 🔔 **Toast Notifications**: Non-intrusive toast messages for real-time user feedback on cart additions, wishlist updates, and checkout success.
- 📱 **Mobile Responsive**: Custom mobile navigation drawer and dynamic grid layouts for all screen sizes.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API (`ShopContext`)

---

## 📁 Project Architecture

```text
skymart/
├── public/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthPage.jsx         # Authentication screen (Login / Sign Up)
│   │   ├── common/
│   │   │   ├── ProductCard.jsx      # Reusable product card component
│   │   │   └── Toast.jsx            # Dynamic toast notification banner
│   │   ├── layout/
│   │   │   ├── Header.jsx           # Main navigation header with badges & search bar
│   │   │   ├── Footer.jsx           # Site footer with helpful links & branding
│   │   │   └── MobileMenu.jsx       # Mobile slide-out navigation menu
│   │   ├── modals/
│   │   │   ├── AccountModal.jsx     # User profile & order history modal
│   │   │   ├── CartDrawer.jsx       # Interactive slide-out cart drawer
│   │   │   ├── CheckoutModal.jsx    # Checkout flow with address & payment form
│   │   │   ├── ProductDetailModal.jsx # Detailed product quick-view modal
│   │   │   └── WishlistModal.jsx    # User wishlist modal view
│   │   └── sections/
│   │       ├── DealsSection.jsx     # Featured deals & promotional items
│   │       ├── Hero.jsx             # Hero banner with call-to-action
│   │       ├── ProductGrid.jsx      # Product listing container
│   │       ├── ShopSection.jsx      # Main shop section with filters & search
│   │       └── TrustBar.jsx         # Value proposition features bar
│   ├── context/
│   │   └── ShopContext.jsx          # Global app state (Cart, Wishlist, User, Orders)
│   ├── data/
│   │   └── products.js              # Mock product catalog data
│   ├── styles/
│   │   └── index.css                # Global CSS styles & Tailwind directives
│   ├── utils/
│   │   └── formatCurrency.js        # Currency formatting utility function
│   ├── App.jsx                      # Main application component
│   └── main.jsx                     # Application entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

Follow these steps to set up and run SkyMart locally on your machine.

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Soumen-dev-ux/Sky-mart.git
   cd Sky-mart
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the URL shown in your terminal).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| --- | --- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Builds the app for production to the `dist` folder. |
| `npm run preview` | Locally preview the production build. |

---
