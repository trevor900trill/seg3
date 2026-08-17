"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="bg-[#2c3031] text-[#f5f1e8] py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-serif text-[#bba373] mb-6">Join The Expedition</h2>
          <p className="text-[#f5f1e8]/80 text-lg mb-8 leading-relaxed">
            Interested in exploring this journey? Contact the Outreach Tours Impact Desk for availability, cohort design, and a private briefing.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-2xl text-[#bba373]">Karen Village</h4>
              <p className="text-[#f5f1e8]/70">Nairobi, Kenya<br/>In-person by appointment</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-[#bba373]">Call Us</h4>
              <p className="text-[#f5f1e8]/70">0703175869</p>
            </div>
            <div>
              <h4 className="font-serif text-2xl text-[#bba373]">Email Us</h4>
              <p className="text-[#f5f1e8]/70">legacy@outreachtours.com</p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-[#1a1c1d] p-8 rounded-lg shadow-2xl border border-[#bba373]/20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#bba373]" htmlFor="name">Full Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border-b border-[#f5f1e8]/20 bg-transparent text-[#f5f1e8] focus:outline-none focus:border-[#bba373] transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#bba373]" htmlFor="email">Email Address</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border-b border-[#f5f1e8]/20 bg-transparent text-[#f5f1e8] focus:outline-none focus:border-[#bba373] transition-colors" placeholder="Your Email" />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-[#bba373]" htmlFor="message">Your Questions</label>
              <textarea id="message" rows={4} value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border-b border-[#f5f1e8]/20 bg-transparent text-[#f5f1e8] focus:outline-none focus:border-[#bba373] transition-colors resize-none" placeholder="Tell us about your group or interest in this trek..."></textarea>
            </div>
            <button type="submit" disabled={status === 'loading'} className="mt-6 bg-[#bba373] text-[#2c3031] font-bold py-4 px-8 rounded hover:bg-[#a68f61] transition-colors text-lg shadow-lg disabled:opacity-50">
              {status === 'loading' ? 'Sending...' : 'Request Briefing'}
            </button>
            {status === 'success' && (
              <div className="mt-4 p-4 rounded-lg bg-[#bba373]/10 border border-[#bba373]/40 text-[#f5f1e8] flex items-center gap-3 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#bba373]/20 flex items-center justify-center text-[#bba373] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-[#bba373]">Expedition Inquiry Received</h5>
                  <p className="text-xs text-[#f5f1e8]/80">Thank you for reaching out. Our team will connect with you shortly.</p>
                </div>
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-4 rounded-lg bg-red-900/20 border border-red-500/40 text-[#f5f1e8] flex items-center gap-3 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-red-400">Submission Failed</h5>
                  <p className="text-xs text-[#f5f1e8]/80">An error occurred while sending your request. Please try again.</p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
