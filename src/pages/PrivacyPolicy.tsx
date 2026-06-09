import React from 'react';

export function PrivacyPolicy() {
  return (
    <div className="pt-24 pb-16 bg-[#07090D] min-h-screen text-white/80">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 tracking-tight">
          Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Policy</span>
        </h1>
        
        <div className="space-y-8 bg-[#11141A] p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
          <p className="text-sm text-white/50">Last Updated: October 2024</p>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us when you create an account, make a purchase, sign up for our newsletter, or contact customer support. This may include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Name, email address, and phone number</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely through our payment partners)</li>
              <li>Child age preferences (optional, for personalized recommendations)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Process your orders and shipments</li>
              <li>Send order confirmations and updates</li>
              <li>Respond to your customer service inquiries</li>
              <li>Provide personalized product recommendations through our AI Engine</li>
              <li>Send promotional offers and newsletters (if opted in)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Data Protection & Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your personal information. Your payment data is encrypted and never stored on our servers directly. Our database systems, including our AI personalization modules, are strictly ring-fenced to prevent unauthorized access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Children's Privacy</h2>
            <p className="leading-relaxed">
              Our website is designed for parents and adults purchasing toys. We do not knowingly collect personal information directly from children under the age of 13. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
