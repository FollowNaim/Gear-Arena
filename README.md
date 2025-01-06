# GearArena 🏋️‍♂️🎯⚽

**Empowering Athletes with the Best Sports Gear**

GearArena is a modern e-commerce platform offering a wide range of high-quality sports equipment and apparel. Designed for sports enthusiasts and professionals, GearArena ensures a seamless shopping experience with a responsive interface, dynamic product management, and cutting-edge design.

## 🌐 Live Site

Explore the live site: [GearArena](https://gear-arena.vercel.app/)

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
  - Server: [Vercel](https://geararena-server.vercel.ap/)

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

## 🏗️ Deployment

- **Client**: [Vercel](https://gear-arena.vercel.app/)
- **Server**: [Vercel](https://geararena-server.vercel.ap/)

## 🤝 Contribution

We welcome contributions to improve GearArena! Here's how you can get involved:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

---

**Thank you for choosing GearArena—where every athlete finds their gear! 🏅**
