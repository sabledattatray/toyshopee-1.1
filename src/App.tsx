/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Dashboard } from './pages/Dashboard';
import { GiftFinder } from './pages/GiftFinder';
import { Offers } from './pages/Offers';
import { Wishlist } from './pages/Wishlist';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { ShippingPolicy } from './pages/ShippingPolicy';
import { ReturnsPolicy } from './pages/ReturnsPolicy';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { Gallery } from './pages/Gallery';
import { Login } from './pages/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="categories" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="account" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="gift-finder" element={<GiftFinder />} />
          <Route path="offers" element={<Offers />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="shipping" element={<ShippingPolicy />} />
          <Route path="returns" element={<ReturnsPolicy />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
