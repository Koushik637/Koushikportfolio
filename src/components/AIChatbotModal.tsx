import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, MessageSquare } from 'lucide-react';

interface AIChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AIChatbotModal: React.FC<AIChatbotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'user',
      text: 'Can you help me?',
      timestamp: 'Just now'
    },
    {
      id: '2',
      sender: 'ai',
      text: 'Of course. How can I assist you? I am Koushik\'s manga AI companion. You can ask me about his AI/ML algorithms, Python development, education at Eluru College, or his project quests!',
      timestamp: 'Just now'
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const quickPrompts = [
    "What models were used in Cricket Prediction?",
    "Tell me about Invoice Hub SaaS",
    "What is your educational background?",
    "How can I contact Koushik?"
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('cricket') || q.includes('prediction') || q.includes('model')) {
      return "In Quest 01 (Cricket Player Performance Prediction), Koushik implemented a comprehensive multi-model ML suite: XGBoost, LightGBM, CatBoost, Poisson Regression, Negative Binomial, Survival Analysis, LSTM, Random Forest, and SVM to predict player performance across varying conditions!";
    }
    if (q.includes('invoice') || q.includes('saas') || q.includes('hub')) {
      return "Invoice Hub (Quest 02) is a cloud-based SaaS platform built to centrally manage product catalogs, customer records, and sales history. It supports automated billing, multi-currency conversion, tax/discount calculation, and receivables aging tracking.";
    }
    if (q.includes('education') || q.includes('college') || q.includes('degree') || q.includes('hsc')) {
      return "Koushik achieved an outstanding 92% in HSC from the National Open School. He is graduating with a B.Tech/B.E. in 2025 from Eluru College of Engineering and Technology, specializing in Artificial Intelligence and software engineering!";
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('location')) {
      return "You can reach Venkata Koushik Kumar Anandam directly at koushikanandam220@gmail.com. He is based in Hyderabad, India, and open to high-impact AI/ML, Python, and Front-End engineering opportunities!";
    }
    if (q.includes('python') || q.includes('skill') || q.includes('language') || q.includes('abilities')) {
      return "Koushik is proficient in Python, C, and Java, with primary domain mastery in Artificial Intelligence, predictive machine learning, and front-end web design using semantic HTML.";
    }
    return "Thank you for asking! Venkata Koushik Kumar Anandam is an AI/ML Developer, Python Developer, and Front-End Developer based in Hyderabad, India. Would you like to inspect his Cricket Prediction engine, Invoice Hub, or connect via email?";
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: generateAnswer(query),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiReply]);
      setIsTyping(false);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#12141c] border-2 border-[#373d4e] shadow-[8px_8px_0px_#ff2a55] text-white my-8 overflow-hidden flex flex-col h-[640px] max-h-[90vh]">
        {/* Manga Banner */}
        <div className="bg-[#1b1f2c] px-6 py-4 border-b-2 border-[#373d4e] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="bg-[#ff2a55] text-black font-manga text-sm px-2 py-0.5 font-bold tracking-widest">
              AI COMPANION
            </span>
            <span className="font-manga text-xl tracking-wider text-white">
              QUEST 03 // INTERACTIVE MANGA CHATBOT
            </span>
            <span className="text-xs text-neutral-400 font-jp hidden sm:inline">
              人工知能対話機
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#ff2a55] hover:text-black transition-colors border border-neutral-700 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Metrics Banner (Resume validated) */}
        <div className="bg-[#161924] px-6 py-2 border-b border-neutral-800 flex items-center justify-between text-xs font-mono shrink-0">
          <div className="flex items-center gap-2 text-emerald-400">
            <Sparkles size={13} />
            <span>40% Inquiry Response Time Reduction</span>
          </div>
          <div className="text-neutral-400 hidden sm:block">
            <span>25% Satisfaction Score Lift</span>
          </div>
          <div className="text-[10px] bg-neutral-800 text-neutral-300 px-2 py-0.5">
            NLP ACTIVE
          </div>
        </div>

        {/* Chat Stream (Manga speech bubbles) */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 manga-screentone">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar Icon */}
              <div
                className={`w-9 h-9 rounded-none border flex items-center justify-center shrink-0 ${
                  msg.sender === 'user'
                    ? 'bg-neutral-800 border-neutral-600 text-white'
                    : 'bg-[#ff2a55] border-black text-black font-bold shadow-[2px_2px_0px_#fff]'
                }`}
              >
                {msg.sender === 'user' ? <User size={18} /> : <Bot size={18} />}
              </div>

              {/* Manga Speech Bubble */}
              <div
                className={`max-w-[80%] p-4 relative text-sm ${
                  msg.sender === 'user'
                    ? 'bg-white text-black border-2 border-black font-sans font-medium shadow-[4px_4px_0px_#ff2a55]'
                    : 'bg-[#1b1f2b] text-neutral-100 border-2 border-neutral-600 font-sans shadow-[4px_4px_0px_#000]'
                }`}
              >
                {/* Bubble label */}
                <div
                  className={`text-[10px] font-mono mb-1 uppercase font-bold tracking-wider ${
                    msg.sender === 'user' ? 'text-[#ff2a55]' : 'text-[#00f0ff]'
                  }`}
                >
                  {msg.sender === 'user' ? 'VISITOR // 質問者' : 'AI PROTAGONIST // 応答者'}
                </div>

                <p className="leading-relaxed">{msg.text}</p>

                <div
                  className={`text-[9px] font-mono mt-2 text-right ${
                    msg.sender === 'user' ? 'text-neutral-500' : 'text-neutral-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 bg-[#ff2a55] border border-black text-black flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#fff]">
                <Bot size={18} />
              </div>
              <div className="p-3 bg-[#1b1f2b] border-2 border-neutral-600 text-xs font-mono text-neutral-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff2a55] animate-ping inline-block" />
                <span>AI IS GENERATING RESPONSE...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Prompts */}
        <div className="px-6 py-2 bg-[#161822] border-t border-neutral-800 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
          <span className="text-[10px] font-mono text-neutral-500 uppercase shrink-0">
            SUGGESTIONS:
          </span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(prompt)}
              className="text-xs font-mono text-neutral-300 hover:text-white bg-[#11131a] hover:bg-[#ff2a55] hover:text-black border border-neutral-700 px-2.5 py-1 whitespace-nowrap transition-colors cursor-pointer"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-[#14161f] border-t-2 border-[#373d4e] shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Koushik's AI projects, models, or resume..."
              className="flex-1 bg-[#0c0e14] border-2 border-neutral-700 focus:border-[#ff2a55] px-4 py-2.5 text-sm text-white placeholder-neutral-500 font-sans outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="px-6 py-2.5 bg-[#ff2a55] hover:bg-[#e01f48] disabled:opacity-40 disabled:hover:bg-[#ff2a55] text-black font-manga text-lg tracking-wider font-bold transition-all shadow-[2px_2px_0px_#fff] flex items-center gap-2 cursor-pointer"
            >
              <Send size={16} />
              <span>SEND</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
