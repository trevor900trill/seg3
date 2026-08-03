import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[#2c3031]/80 z-0"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#bba373] via-transparent to-transparent z-0"></div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <span className="text-[#bba373] tracking-[0.2em] text-sm md:text-base uppercase font-bold mb-4 block">Kenya – Community</span>
          <h1 className="text-5xl md:text-7xl font-serif text-[#f5f1e8] mb-6 leading-tight">A 10-Day Wildlife Conservation Trek</h1>
          <p className="text-[#f5f1e8]/90 text-xl md:text-2xl font-serif italic mb-10 max-w-2xl mx-auto leading-relaxed">
            Every Step Restores Land, Uplifts Communities, and Transforms Lives.
          </p>
          <a href="#contact" className="inline-block mt-4 bg-[#bba373] text-[#2c3031] hover:bg-[#a68f61] transition-all px-8 py-3 tracking-widest uppercase text-sm font-semibold shadow-lg">
            Explore This Journey
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white border-b border-[#bba373]/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2c3031] mb-8">A conservation-based expedition with real, measurable outcomes.</h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            The Kenya Community Wildlife Conservation Trek is designed for travellers who crave authentic wilderness, hands-on conservation, and deep cultural exchange — without compromising safety, dignity, or purpose.
          </p>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-24 px-6 bg-[#f5f1e8]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-[#bba373] mb-12">You'll Experience:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Trek through the vast Laikipia landscapes",
              "Work with rangers on conservation projects",
              "Plant trees, repair fencing & monitor wildlife",
              "Live and learn with Samburu host families",
              "Experience a cultural feast, storytelling, and shared rituals",
              "Explore the savannah on guided drives",
              "Receive verified impact outputs at D+30"
            ].map((exp, idx) => (
              <div key={idx} className="bg-white p-6 rounded shadow-sm border border-[#bba373]/10 flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#bba373] flex items-center justify-center shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#2c3031] font-medium leading-relaxed">{exp}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-serif italic text-[#2c3031]">"This is conservation that honours people, wildlife, and the land equally."</h3>
          </div>
        </div>
      </section>

      {/* The Journey Arc */}
      <section className="py-24 px-6 bg-[#2c3031] text-[#f5f1e8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[#bba373] mb-16">The Journey Arc</h2>
          <div className="space-y-8">
            {[
              { day: "Day 1", title: "Orientation — Nairobi", desc: "Arrival, welcome briefing, and group orientation at a curated Nairobi boutique hotel." },
              { day: "Day 2 - 6", title: "Laikipia Trek & Conservation Projects", desc: "Five days of trekking between wilderness camps, with hands-on conservation work as the core of each day." },
              { day: "Day 7", title: "Samburu Community Immersion", desc: "A full day hosted by a Samburu community—homestay insights, shared meals, storytelling, and understanding their role as custodians of the land." },
              { day: "Day 8", title: "Reflection Retreat", desc: "A dedicated day at a private conservancy lodge for guided reflection, journaling, and a cultural blessing ceremony to integrate the experience." },
              { day: "Day 10", title: "Return To Nairobi", desc: "Return to Nairobi for a final celebration dinner and departures, equipped with your personal impact story." }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-[#bba373]/30 pb-8 last:border-0 last:pb-0">
                <span className="text-[#bba373] text-sm tracking-widest uppercase font-bold block mb-2">{item.day}</span>
                <h3 className="text-2xl font-serif text-white mb-3">{item.title}</h3>
                <p className="text-[#f5f1e8]/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes This Extraordinary */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-center text-[#2c3031] mb-16">What Makes This Expedition Extraordinary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: "Trekking Across Laikipia", desc: "Walk through one of Kenya’s most pristine conservation areas — vast savannahs, red earth, acacia-dotted plains, and endless views." },
              { title: "Hands-On Conservation Work", desc: "Tree planting, habitat recovery, fence repair, wildlife observation — your work directly supports community-led conservation." },
              { title: "Reflection Retreat", desc: "Time in nature to process your work, connect deeply, and discover personal insight." },
              { title: "Adventure & Wildlife", desc: "Wildlife encounters, wide-open bushland, and guided exploration in a region rich with elephant, giraffe, zebra, and predator movement." }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="text-5xl font-serif text-[#bba373]/30 font-bold leading-none select-none">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-[#2c3031] mb-3">{feature.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Impact */}
      <section className="bg-[#bba373] text-[#2c3031] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">The Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            {[
              { num: "200+", label: "Trees Planted" },
              { num: "2-3 KM", label: "Of fencing repaired" },
              { num: "5–10", label: "Hectares Restored" },
              { num: "50+", label: "Samburu households engaged" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/20 p-6 rounded-lg backdrop-blur-sm border border-[#2c3031]/10">
                <h3 className="text-4xl font-serif font-bold text-[#2c3031] mb-2">{stat.num}</h3>
                <p className="text-sm tracking-wide font-semibold text-[#2c3031]/80 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#1a1c1d] text-[#f5f1e8] p-8 md:p-12 rounded-lg max-w-3xl mx-auto shadow-xl text-center">
            <h3 className="text-2xl font-serif text-[#bba373] mb-6">Verified Deliverables</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm tracking-wider uppercase font-semibold">Impact Certificate</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm tracking-wider uppercase font-semibold">NGO Report</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm tracking-wider uppercase font-semibold">Before/After Imagery</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm tracking-wider uppercase font-semibold">Verified KPIs</span>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
