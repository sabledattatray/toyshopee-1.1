import React from 'react';

export function ShippingPolicy() {
  return (
    <div className="pt-24 pb-16 bg-[#07090D] min-h-screen text-white/80">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 tracking-tight">
          Shipping <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Policy</span>
        </h1>
        
        <div className="space-y-8 bg-[#11141A] p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Order Processing Times</h2>
            <p className="leading-relaxed">
              All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Shipping Rates & Delivery Estimates</h2>
            <p className="leading-relaxed">
              Shipping charges for your order will be calculated and displayed at checkout.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-white/70">
              <li><strong>Standard Shipping:</strong> 3-5 business days - ₹99 (Free for orders over ₹999)</li>
              <li><strong>Express Delivery:</strong> 1-2 business days - ₹199</li>
              <li><strong>Same-Day Local Delivery:</strong> Within 12.5 KM zone - ₹299 (Order before 2 PM)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Shipment Confirmation & Order Tracking</h2>
            <p className="leading-relaxed">
              You will receive a Shipment Confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Damaged or Lost Packages</h2>
            <p className="leading-relaxed">
              TOYVERSE is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
