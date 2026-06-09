import React from 'react';

export function ReturnsPolicy() {
  return (
    <div className="pt-24 pb-16 bg-[#07090D] min-h-screen text-white/80">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 tracking-tight">
          Returns & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Refunds</span>
        </h1>
        
        <div className="space-y-8 bg-[#11141A] p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Return Conditions</h2>
            <p className="leading-relaxed">
              We want you and your child to love your new toys. If you're not completely satisfied with your purchase, you can return it within 30 days of delivery.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Item must be unused and in the same condition that you received it.</li>
              <li>Item must be in the original packaging, unopened with all tags intact.</li>
              <li>A valid receipt or proof of purchase is required.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Refund Process</h2>
            <p className="leading-relaxed">
              Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item.
            </p>
            <p className="leading-relaxed">
              If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Non-Returnable Items</h2>
            <p className="leading-relaxed">
              For hygiene and safety reasons, the following items CANNOT be returned:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>Opened soft toys and plushies</li>
              <li>Teethers or pacifiers that have been removed from packaging</li>
              <li>Gift cards</li>
              <li>Downloadable software products or digital gift codes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Return Shipping</h2>
            <p className="leading-relaxed">
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
