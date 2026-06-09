import React from 'react';

export function TermsOfService() {
  return (
    <div className="pt-24 pb-16 bg-[#07090D] min-h-screen text-white/80">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-8 tracking-tight">
          Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Service</span>
        </h1>
        
        <div className="space-y-8 bg-[#11141A] p-8 md:p-10 rounded-2xl border border-white/5 shadow-xl">
          <p className="text-sm text-white/50">Last Updated: October 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the TOYVERSE website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">2. Use License</h2>
            <p className="leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on TOYVERSE's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">3. Product Descriptions and Pricing</h2>
            <p className="leading-relaxed">
              We strive to display product colors, descriptions, and pricing as accurately as possible. However, we do not warrant that product descriptions or other content is exactly accurate, complete, reliable, current, or error-free. Prices are subject to change without notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">4. User Accounts</h2>
            <p className="leading-relaxed">
              When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding your password.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white">5. AI Features Disclaimer</h2>
            <p className="leading-relaxed">
              Our platform utilizes AI-driven recommendations and local delivery estimations. While we strive for accuracy, these systems are predictive and subject to algorithmic variances. We are not liable for slight deviations in delivery zone estimates or subjective product recommendations.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
