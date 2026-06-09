# 🎈 Toy Shopee

![Toy Shopee Banner](https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

**Toy Shopee** is a magical, full-stack, and modern e-commerce web application specifically crafted for local toy stores. It brings joy to your fingertips by combining a delightful user interface with powerful business tools like WhatsApp integrations, AI recommendations, and loyalty programs.

Crafted with ❤️ by **Datta Sable** ([dattasble.com](https://dattasble.com)).

---

## ✨ Features

- **🪄 Magic Gift Wizard:** An interactive tool to find the perfect toy based on age, budget, and interests.
- **📱 WhatsApp Integration:** Direct one-click order notifications sent instantly to the store owner's WhatsApp, as well as a refer-and-earn sharing module.
- **💳 Frictionless Payments:** Integrated mock checkout with **UPI/QR Code** scanning, Cash on Delivery, and Credit/Debit Card options.
- **🎁 Loyalty & Referrals:** Built-in "Refer & Earn" system where users earn loyalty points to spend on free toys.
- **🎉 Festival Campaigns:** Dynamic banner sections for Diwali Mega Sales, Christmas drops, and Summer Vacations.
- **🛍️ Complete E-Commerce Flow:** Advanced product filtering, shopping cart, smart wishlists, and order history tracking.
- **🔐 Secure Authentication:** Google Sign-in powered by Firebase Authentication.
- **📍 Local Delivery Focus:** Curated delivery zones configured for local towns (like Badlapur) with targeted delivery timelines.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS (with highly customized utilitarian blob designs and glassmorphism)
- **State Management:** Zustand
- **Animations:** Framer Motion (motion/react)
- **Icons:** Lucide React
- **Backend & Database:** Firebase (Authentication, Firestore)
- **Routing:** React Router DOM

---

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- A Firebase Project (for Auth and Firestore)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/toy-shopee.git
   cd toy-shopee
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Firebase configuration details:
   ```env
   VITE_FIREBASE_API_KEY="your-api-key"
   VITE_FIREBASE_AUTH_DOMAIN="your-auth-domain"
   VITE_FIREBASE_PROJECT_ID="your-project-id"
   VITE_FIREBASE_STORAGE_BUCKET="your-storage-bucket"
   VITE_FIREBASE_MESSAGING_SENDER_ID="your-messaging-sender-id"
   VITE_FIREBASE_APP_ID="your-app-id"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open the App:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified by Vite).

---

## 📂 Project Structure

```plaintext
toy-shopee/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Layout, ProductCard)
│   ├── lib/              # Utilities, Firebase config, static catalog data
│   ├── pages/            # View-level components (Shop, Checkout, GiftFinder, etc.)
│   ├── store/            # Zustand global stores (auth, cart, wishlist)
│   ├── App.tsx           # Global routing matrix
│   └── index.css         # Tailwind initialization and global typography
├── public/               # Static assets
└── package.json          # Project dependencies & scripts
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check out the [issues page](../../issues).

---

## 📞 Contact

**Datta Sable**
- Website: [dattasble.com](https://dattasble.com)
- Email: [toyshopeebadlapur@gmail.com](mailto:toyshopeebadlapur@gmail.com)

---

> *"Bringing smiles to children, one toy at a time."*
