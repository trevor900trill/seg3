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
              <p className="text-[#f5f1e8]/70">info@outreachtours.com</p>
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
            {status === 'success' && <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>}
            {status === 'error' && <p className="text-red-500 text-sm mt-2">Failed to send message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
