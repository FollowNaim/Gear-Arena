# GearArena 🏋️‍♂️🎯⚽

**Empowering Athletes with the Best Sports Gear**

GearArena is a modern e-commerce platform offering a wide range of high-quality sports equipment and apparel. Designed for sports enthusiasts and professionals, GearArena ensures a seamless shopping experience with a responsive interface, dynamic product management, and cutting-edge design.

## 🌐 Live Site

Explore the live site: [GearArena](https://gear-arena.vercel.app/)

## Showcase

<img src='https://i.ibb.co.com/92dshjV/01.jpg'/>

## 🚀 Features

- **Modern Design**: Built with **ShadCN** components for an intuitive and clean UI.
- **Responsive Across Devices**: Fully optimized for mobile, tablet, and desktop users.
- **Secure Authentication**: Login and registration with Firebase, including Google authentication.
- **Product Management**: Add, update, and delete sports equipment effortlessly.
- **Dynamic Sorting**: Sort products by price (ascending/descending) for easy navigation.
- **Dark/Light Mode**: Customize your theme preference.
- **Interactive Animations**: Enhanced visuals using React Awesome Reveal and Lottie React.
- **Error-Free Reloads**: No redirect issues on private routes after reloads.

## 🛠️ Technologies Used

- **Frontend**: React, TailwindCSS, ShadCN Components, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: Firebase Authentication
- **Hosting**:
  - Client: [Vercel](https://gear-arena.vercel.app//)
  - Server: [Vercel](https://geararena-server.vercel.app/)

## 📋 Pages Overview

### 1. **Home Page**

- **Banner/Slider**: Dynamic sliders showcasing sports gear.
- **Our Brand Values**: Note about our brand values and why we are special.
- **Featured Products**: Highlights six top-selling items.
- **Why Choose Us**: Information about our speciality and why you should choose us.
- **We're on World Wide**: Statics and detailed information about our world wide work.
- **Theme Toggle**: Switch between dark and light modes.

### 2. **All Equipment Page**

- Table view of all products with essential details (name, category, price, etc.).
- **View Details** button for in-depth product information.

### 3. **Add Equipment Page (Private)**

- A secure form to add new products, including fields like:
  - **Name**, **Category**, **Price**, **Stock**, **Customization Options**, and much more.

### 4. **My Equipment Page (Private)**

- Displays items added by the logged-in user.
- Includes **Update** and **Delete** functionality with a confirmation modal.

### 5. **View Details Page (Private)**

- Beautifully designed page showing all details of a selected product.

### 6. **Update Equipment Page (Private)**

- Pre-filled form for easy editing of existing product details.

### 7. **Authentication Pages**

- **Login**: Secure login via Email/Google.
- **Register**: Name, Email, Photo URL, Password with awesome realtime validation.

### 8. **404 Error Page**

- Custom-designed page for non-existent routes.

## 🔐 Environment Variables

Sensitive credentials like Firebase config and MongoDB keys are securely stored in `.env` files.

## 🌟 Unique Highlights

- Built using **ShadCN** for a professional and unique design.
- Meaningful and relevant content—no use of "Lorem ipsum" text.
- Smooth navigation with persistent login states on private routes.
- Custom Toast/Sweet Alerts for success/error messages.
- Hosted seamlessly using Netlify and Vercel.

---

## 📦 Dependencies

- **@radix-ui/react-accordion**: ^1.2.2 – A Radix UI component for creating collapsible accordion sections.
- **@radix-ui/react-avatar**: ^1.1.2 – A Radix UI component for displaying user avatars.
- **@radix-ui/react-checkbox**: ^1.1.3 – A Radix UI component for checkboxes.
- **@radix-ui/react-dropdown-menu**: ^2.1.4 – A Radix UI component for dropdown menus.
- **@radix-ui/react-label**: ^2.1.0 – A Radix UI component for form labels.
- **@radix-ui/react-select**: ^2.1.2 – A Radix UI component for select dropdowns.
- **@radix-ui/react-slot**: ^1.1.0 – A utility for dynamic component slots.
- **autoprefixer**: ^10.4.20 – A PostCSS plugin for adding vendor prefixes automatically.
- **class-variance-authority**: ^0.7.1 – Utility for managing className variants in React.
- **clsx**: ^2.1.1 – Utility for conditionally constructing className strings.
- **firebase**: ^11.0.2 – Google Firebase JavaScript SDK for app development.
- **framer-motion**: ^11.13.1 – A motion library for React animations.
- **hamburger-react**: ^2.5.1 – A React component for a hamburger menu button.
- **lottie-react**: ^2.4.0 – A React library for rendering Lottie animations.
- **lucide-react**: ^0.464.0 – A React icon library with consistent, beautiful icons.
- **postcss**: ^8.4.49 – A tool for transforming CSS with plugins.
- **react**: ^18.3.1 – A JavaScript library for building user interfaces.
- **react-awesome-reveal**: ^4.2.14 – A library for animated scrollable components.
- **react-dom**: ^18.3.1 – React library for working with the DOM.
- **react-helmet-async**: ^2.0.5 – A library for managing document head tags asynchronously.
- **react-hot-toast**: ^2.4.1 – A React library for toast notifications.
- **react-icons**: ^5.4.0 – A React icon library with a wide variety of icons.
- **react-router-dom**: ^7.0.2 – A library for declarative routing in React applications.
- **react-tooltip**: ^5.28.0 – A React component for tooltips.
- **sweetalert2**: ^11.14.5 – A modern, responsive, and customizable JavaScript alert library.
- **swiper**: ^11.1.15 – A modern slider library for web and mobile.
- **tailwind-merge**: ^2.5.5 – Utility for merging Tailwind CSS class strings.
- **tailwindcss**: ^3.4.17 – A utility-first CSS framework.
- **tailwindcss-animate**: ^1.0.7 – Animation utilities for Tailwind CSS.

---

## 📦 Dev Dependencies

- **@eslint/js**: ^9.15.0 – ESLint core JavaScript functionality.
- **@types/react**: ^18.3.12 – TypeScript definitions for React.
- **@types/react-dom**: ^18.3.1 – TypeScript definitions for React DOM.
- **@vitejs/plugin-react**: ^4.3.4 – Vite plugin for React integration.
- **eslint**: ^9.15.0 – A tool for identifying and fixing JavaScript issues.
- **eslint-plugin-react**: ^7.37.2 – ESLint plugin for React best practices.
- **eslint-plugin-react-hooks**: ^5.0.0 – ESLint rules for React hooks.
- **eslint-plugin-react-refresh**: ^0.4.14 – ESLint plugin for React Fast Refresh.
- **globals**: ^15.12.0 – Global variable definitions for ESLint.
- **vite**: ^6.0.1 – A next-generation frontend build tool.

---

## 🔧 How to Run

1. **Clone the repository.**

```bash
   git clone https://github.com/FollowNaim/Gear-Arena
   cd Gear-Arena
```

2. **Install Dependencies**

```bash
npm install
```

3. **Setup Environment Variables**

- create .env.local in the root directory.
- create a firebase project and add config here
- firebase config will look like

```bash
VITE_Projectid
VITE_apikey
```

like this.

4. ** Run the application**

```bash
npm run dev
```

5. **Access the app**

- Open http://localhost:5173 in your browser.

---

## 🛠️ Deployment

- Hosted on Netlify or Vercel for a fast and reliable experience.
- Firebase Authentication requires authorized domains to ensure secure access.

---

## 🤝 Contribution

We welcome contributions to improve GearArena! Here's how you can get involved:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

**Thank you for choosing GearArena—where every athlete finds their gear! 🏅**
