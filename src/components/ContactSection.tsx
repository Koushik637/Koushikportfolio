import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { MangaGutterNav } from './MangaGutterNav';

// EmailJS Configuration provided by user
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'OyVPNnTUTrihgI6qv';
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_o65972p';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_j5klliw';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    message: ''
  });
  const [questType, setQuestType] = useState('AI / ML Opportunity');
  const [isSending, setIsSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const email = "koushikanandam220@gmail.com";
  const location = "Hyderabad, India";

  const questTypes = [
    { id: 'AI / ML Opportunity', label: 'AI / ML Role', kanji: '採用' },
    { id: 'Full-Stack / Python Project', label: 'Python / Web Dev', kanji: '開発' },
    { id: 'Contract / Freelance', label: 'Contract Quest', kanji: '委託' },
    { id: 'Technical Collaboration', label: 'Collaboration', kanji: '協力' },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setErrorMessage(null);

    try {
      // Comprehensive template parameters matching all standard EmailJS configurations
      const templateParams = {
        to_name: 'Venkata Koushik Kumar Anandam',
        name: formData.name,
        from_name: formData.name,
        user_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        user_email: formData.email,
        quest_type: questType,
        subject: `[Quest Inquiry] ${questType} - ${formData.name}`,
        role_or_company: formData.roleOrCompany || 'Not specified',
        company: formData.roleOrCompany || 'Not specified',
        organization: formData.roleOrCompany || 'Not specified',
        message: formData.message,
        summary: `Type: ${questType} | Sender: ${formData.name} <${formData.email}> | Org: ${formData.roleOrCompany || 'None'}`,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', roleOrCompany: '', message: '' });
    } catch (err: unknown) {
      console.error('EmailJS transmission error:', err);
      const message =
        err && typeof err === 'object' && 'text' in err
          ? String((err as { text: string }).text)
          : err instanceof Error
          ? err.message
          : 'Transmission failed. Please check your network connection or email directly.';
      setErrorMessage(message);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0f16] border-b-4 border-[#252a37] relative overflow-hidden">
      {/* Background Screentone */}
      <div className="absolute inset-0 manga-screentone pointer-events-none opacity-30" />

      {/* Manga SFX Accent */}
      <div className="absolute top-10 right-10 pointer-events-none select-none hidden md:block">
        <span className="manga-sfx text-neutral-800 text-6xl font-black">
          シュッ
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-14 border-b-2 border-neutral-700 pb-5 text-center">
          <div className="inline-flex items-center gap-2 text-[#ff2a55] font-mono text-xs tracking-widest uppercase mb-1">
            <span className="w-2.5 h-2.5 bg-[#ff2a55]" />
            <span>FINAL CHAPTER // 最終章</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-manga tracking-wide text-white uppercase">
            START A NEW QUEST
          </h2>
          <p className="mt-3 text-base sm:text-lg font-sans text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Have a project, opportunity, or collaboration in mind? Let's connect.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordinates & Quick Actions (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#141722] border-2 border-neutral-700 shadow-[6px_6px_0px_#000] p-6 space-y-5">
              <div className="text-xs font-mono text-[#ff2a55] font-bold uppercase tracking-wider border-b border-neutral-800 pb-2">
                COMMUNICATION DISPATCH TERMINAL
              </div>

              {/* Email Block */}
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">DIRECT EMAIL</div>
                <div className="text-base font-mono font-bold text-white mt-1 break-all select-all">
                  {email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 bg-[#1e2230] hover:bg-[#ff2a55] hover:text-black text-xs font-mono text-neutral-300 transition-colors border border-neutral-700 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 font-bold">COPIED TO CLIPBOARD!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>COPY EMAIL ADDRESS</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Block */}
              <div>
                <div className="text-[11px] font-mono text-neutral-500 uppercase">LOCATION BASE</div>
                <div className="text-sm font-mono font-bold text-neutral-200 mt-1 flex items-center gap-1.5">
                  <MapPin size={15} className="text-[#00f0ff]" />
                  <span>{location}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-2 border-t border-neutral-800 space-y-2">
                <a
                  href={`mailto:${email}?subject=Collaboration%20Inquiry%20-%20AI%2FML%20Developer`}
                  className="w-full py-2.5 bg-[#ff2a55] hover:bg-[#e01f48] text-black font-manga text-lg tracking-wider font-bold transition-all shadow-[2px_2px_0px_#fff] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail size={16} />
                  <span>LAUNCH MAIL CLIENT</span>
                </a>

                {/* Social Connect Triggers (No invented URLs rule respected) */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={handleCopyEmail}
                    title="Connect directly via email for GitHub profile"
                    className="py-2 bg-[#1b1e2a] hover:bg-neutral-800 text-xs font-mono text-neutral-300 border border-neutral-700 transition-colors cursor-pointer text-center"
                  >
                    GITHUB (VIA EMAIL)
                  </button>
                  <button
                    onClick={handleCopyEmail}
                    title="Connect directly via email for LinkedIn profile"
                    className="py-2 bg-[#1b1e2a] hover:bg-neutral-800 text-xs font-mono text-neutral-300 border border-neutral-700 transition-colors cursor-pointer text-center"
                  >
                    LINKEDIN (VIA EMAIL)
                  </button>
                </div>
              </div>
            </div>

            {/* Recruiter Guarantee Card */}
            <div className="p-4 bg-[#141620] border-l-4 border-emerald-500 border-y border-r border-neutral-800 text-xs font-mono text-neutral-300 leading-relaxed">
              <span className="text-emerald-400 font-bold">RESPONSE EXPECTANCY: </span>
              Inquiries regarding full-time roles, internships, or AI/ML collaborations are prioritized and answered promptly.
            </div>
          </div>

          {/* Right Column: Manga Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#141722] border-2 border-neutral-700 shadow-[6px_6px_0px_#ff2a55] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-6">
              <div className="text-sm font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Send size={16} className="text-[#ff2a55]" />
                <span>SEND DIRECT DISPATCH MESSAGE</span>
              </div>
              <span className="text-[10px] font-mono text-neutral-400">
                ENCRYPTED // 伝送
              </span>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-[#0d0f16] border-2 border-emerald-500 shadow-[4px_4px_0px_#000]">
                <CheckCircle2 size={48} className="mx-auto text-emerald-400 animate-bounce" />
                <h3 className="font-manga text-2xl text-white tracking-wider">
                  QUEST TRANSMISSION DELIVERED!
                </h3>
                <p className="text-xs font-mono text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Your message has been dispatched successfully via EmailJS. Details have been routed directly to the recipient's Gmail inbox.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage(null);
                    }}
                    className="px-5 py-2.5 bg-[#1b1e2a] hover:bg-neutral-800 text-xs font-mono text-white border border-neutral-600 transition-colors cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION // 再送信
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                {errorMessage && (
                  <div className="p-3 bg-red-950/60 border border-red-500/80 text-red-200 flex items-start gap-2">
                    <AlertCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                    <div className="text-xs font-mono">
                      <span className="font-bold">TRANSMISSION NOTICE: </span>
                      {errorMessage}
                    </div>
                  </div>
                )}

                {/* Quest Type Category Selector */}
                <div>
                  <label className="block text-neutral-400 mb-1.5 font-bold uppercase tracking-wider">
                    QUEST CLASSIFICATION // 任務種別
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {questTypes.map((q) => {
                      const isSelected = questType === q.id;
                      return (
                        <button
                          key={q.id}
                          type="button"
                          onClick={() => setQuestType(q.id)}
                          className={`px-3 py-2 text-left border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#ff2a55] text-black border-[#ff2a55] font-bold shadow-[2px_2px_0px_#fff]'
                              : 'bg-[#0e1017] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                          }`}
                        >
                          <div className="text-[10px] opacity-75 font-mono">
                            {q.kanji}
                          </div>
                          <div className="text-xs truncate font-medium">
                            {q.label}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1 font-bold">
                    YOUR NAME / IDENTIFIER *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto / Hiring Manager"
                    className="w-full bg-[#0d0f16] border border-neutral-700 focus:border-[#ff2a55] px-3.5 py-2.5 text-white outline-none"
                    disabled={isSending}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold">
                      YOUR EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full bg-[#0d0f16] border border-neutral-700 focus:border-[#ff2a55] px-3.5 py-2.5 text-white outline-none"
                      disabled={isSending}
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 mb-1 font-bold">
                      ORGANIZATION / ROLE
                    </label>
                    <input
                      type="text"
                      name="roleOrCompany"
                      value={formData.roleOrCompany}
                      onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                      placeholder="e.g. AI Research Lab / Tech Corp"
                      className="w-full bg-[#0d0f16] border border-neutral-700 focus:border-[#ff2a55] px-3.5 py-2.5 text-white outline-none"
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-neutral-400 mb-1 font-bold">
                    QUEST BRIEF / MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Details about your opportunity, project parameters, or engineering challenge..."
                    className="w-full bg-[#0d0f16] border border-neutral-700 focus:border-[#ff2a55] px-3.5 py-2.5 text-white outline-none resize-none"
                    disabled={isSending}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className={`w-full py-3.5 font-manga text-xl tracking-wider font-bold transition-all shadow-[4px_4px_0px_#fff] flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 ${
                    isSending
                      ? 'bg-neutral-600 text-neutral-300 cursor-not-allowed'
                      : 'bg-[#ff2a55] hover:bg-[#e01f48] text-black'
                  }`}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>TRANSMITTING QUEST DISPATCH... // 送信中</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>TRANSMIT QUEST MESSAGE // 送信</span>
                    </>
                  )}
                </button>

                <div className="text-center pt-1 text-[11px] text-neutral-500">
                  <span>Prefer sending directly? </span>
                  <a
                    href={`mailto:${email}?subject=Inquiry%20from%20Portfolio&body=Hello%20Koushik,%0D%0A%0D%0A`}
                    className="text-[#ff2a55] underline hover:text-white transition-colors"
                  >
                    Open default mail client
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Manga Gutter Navigation */}
        <MangaGutterNav
          currentPage={8}
          prev={{ label: 'SYSTEM STATUS', href: '#system-status', kanji: '第七章' }}
          next={{ label: 'PROLOGUE (RETURN TO TOP)', href: '#prologue', kanji: '巻頭へ' }}
        />
      </div>
    </section>
  );
};
