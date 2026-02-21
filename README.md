# 🐾 Beauty Shop — Next.js + Zustand + Tailwind

A modern, high-performance E-commerce demonstration project built with **Next.js 16 (App Router)**, using **Zustand** for state management and **DummyJSON** as the data source.

## 🚀 Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **API:** [DummyJSON](https://dummyjson.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

-   [x] **Dynamic Catalog**: Products are fetched server-side for optimal SEO and performance.
-   [x] **Individual Product Pages**: Deep linking using dynamic routes `[id]`.
-   [x] **Advanced Cart System**:
    -   Smart "Add to Cart" logic (updates quantity instead of duplicating items).
    -   Quantity controls (+/-) within the cart.
    -   Real-time total price calculation.
-   [x] **Interactive Hero Section**: Highlighting featured products on the homepage.
-   [x] **Modern UI/UX**: Fully responsive design with glassmorphism effects and smooth transitions.
-   [x] **Contact Page**: Functional contact form UI and direct-action links (Phone/Email).

## 📦 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/alexlead/ecommerce-nextjs-project.git
    cd ecommerce-nextjs-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Visit [http://localhost:3000](http://localhost:3000) to see the result.

## 🛠 Project Structure

```text
src/
├── app/              # Routes, layouts, and server-side logic
├── components/       # UI Components (Layout, Product Cards, Cart UI)
├── services/         # API connection
├── store/            # Zustand state definitions (Cart store)
└── types/            # TypeScript interfaces/types
```

![App Screenshot](screenshot.png)