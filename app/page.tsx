export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest border border-[#58a6ff]/20">
          Startup Finance Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Know Your Runway.<br />
          <span className="text-[#58a6ff]">Before It's Too Late.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your expenses, auto-categorize transactions, and get interactive burn rate charts with precise runway predictions — built for founders and CFOs.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-200"
        >
          Start Visualizing — $39/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card lock-in.</p>

        {/* Mock Dashboard Preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-xs text-[#8b949e]">BurnRate Dashboard</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[{label:'Monthly Burn',value:'$42,300',color:'text-red-400'},{label:'Runway',value:'14 months',color:'text-[#58a6ff]'},{label:'Cash Left',value:'$592,200',color:'text-green-400'}].map(s => (
              <div key={s.label} className="bg-[#0d1117] rounded-lg p-4 border border-[#30363d]">
                <p className="text-xs text-[#8b949e] mb-1">{s.label}</p>
                <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[{cat:'Payroll',pct:62,w:'w-[62%]'},{cat:'Infrastructure',pct:18,w:'w-[18%]'},{cat:'Marketing',pct:12,w:'w-[12%]'},{cat:'Other',pct:8,w:'w-[8%]'}].map(b => (
              <div key={b.cat} className="flex items-center gap-3">
                <span className="text-xs text-[#8b949e] w-28">{b.cat}</span>
                <div className="flex-1 bg-[#30363d] rounded-full h-2">
                  <div className={`bg-[#58a6ff] h-2 rounded-full ${b.w}`}></div>
                </div>
                <span className="text-xs text-[#c9d1d9] w-8 text-right">{b.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39<span className="text-xl text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to track burn</p>
          <ul className="text-left space-y-3 mb-8">
            {['CSV & bank import','Auto expense categorization','Interactive burn rate charts','Runway predictions','Unlimited transactions','Email alerts at runway milestones'].map(f => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {q:'How do I import my expenses?',a:'Upload a CSV export from your bank or accounting tool. We auto-detect columns and categorize transactions using smart rules.'},
            {q:'How is runway calculated?',a:'We use your average monthly burn over the last 3 months against your current cash balance to project runway, with trend-adjusted forecasts.'},
            {q:'Can I cancel anytime?',a:'Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked.'}
          ].map(({q,a}) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-6 text-center text-xs text-[#8b949e]">
        © {new Date().getFullYear()} BurnRate. Built for founders who ship fast.
      </footer>
    </main>
  )
}
