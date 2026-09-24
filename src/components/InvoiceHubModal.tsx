import React, { useState } from 'react';
import { X, DollarSign, FileText, CheckCircle, Clock, AlertTriangle, Send, Plus, Trash2 } from 'lucide-react';

interface InvoiceHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface InvoiceItem {
  id: string;
  name: string;
  qty: number;
  rate: number;
}

export const InvoiceHubModal: React.FC<InvoiceHubModalProps> = ({ isOpen, onClose }) => {
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'EUR'>('USD');
  const [selectedStatus, setSelectedStatus] = useState<'ALL' | 'PAID' | 'PENDING' | 'OVERDUE'>('ALL');
  const [discountPercent, setDiscountPercent] = useState<number>(10);
  const [taxPercent, setTaxPercent] = useState<number>(18);
  const [reminderSent, setReminderSent] = useState<string | null>(null);

  const currencySymbols = {
    USD: '$',
    INR: '₹',
    EUR: '€'
  };

  const currencyRates = {
    USD: 1,
    INR: 83.5,
    EUR: 0.92
  };

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', name: 'AI Prediction API Subscription (Monthly)', qty: 1, rate: 350 },
    { id: '2', name: 'Cloud Infrastructure & Microservices Setup', qty: 2, rate: 220 },
    { id: '3', name: 'Custom Front-End Design & Dashboard', qty: 1, rate: 450 }
  ]);

  if (!isOpen) return null;

  const currentRate = currencyRates[currency];
  const symbol = currencySymbols[currency];

  const subtotal = items.reduce((acc, curr) => acc + (curr.qty * curr.rate), 0);
  const discountAmount = (subtotal * discountPercent) / 100;
  const taxableAmount = subtotal - discountAmount;
  const taxAmount = (taxableAmount * taxPercent) / 100;
  const grandTotal = taxableAmount + taxAmount;

  const formatAmount = (val: number) => {
    return `${symbol}${(val * (currency === 'USD' ? 1 : currency === 'INR' ? 83.5 : 0.92)).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const handleSendReminder = (invoiceId: string) => {
    setReminderSent(invoiceId);
    setTimeout(() => {
      setReminderSent(null);
    }, 2500);
  };

  const invoices = [
    {
      id: "INV-2025-081",
      customer: "Global Sports Analytics Inc.",
      date: "2025-09-12",
      dueDate: "2025-09-26",
      status: "PAID",
      amount: 1450,
      aging: "Settled on time"
    },
    {
      id: "INV-2025-094",
      customer: "NeoTokyo Data Systems",
      date: "2025-09-18",
      dueDate: "2025-10-02",
      status: "PENDING",
      amount: 890,
      aging: "Due in 8 days"
    },
    {
      id: "INV-2025-072",
      customer: "Kobe Media Corp",
      date: "2025-08-20",
      dueDate: "2025-09-05",
      status: "OVERDUE",
      amount: 620,
      aging: "19 days overdue"
    }
  ];

  const filteredInvoices = selectedStatus === 'ALL'
    ? invoices
    : invoices.filter(inv => inv.status === selectedStatus);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#11131a] border-2 border-[#343b4d] shadow-[8px_8px_0px_#ff2a55] text-white my-8 overflow-hidden">
        {/* Manga Top Banner */}
        <div className="bg-[#1b1f2b] px-6 py-4 border-b-2 border-[#343b4d] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-[#00f0ff] text-black font-manga text-sm px-2 py-0.5 font-bold tracking-widest">
              CLOUD SAAS CONSOLE
            </span>
            <span className="font-manga text-xl tracking-wider text-white">
              QUEST 02 // INVOICE HUB MANAGEMENT SUITE
            </span>
            <span className="text-xs text-neutral-400 font-jp hidden sm:inline">
              請求書管理システム
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

        {/* Content Tabs & Actions */}
        <div className="p-6 space-y-6">
          {/* Header Controls: Currency Selector & Quick Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#161822] p-4 border border-neutral-800">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 uppercase">
                MULTI-CURRENCY SYSTEM:
              </span>
              <div className="flex gap-1.5">
                {(['USD', 'INR', 'EUR'] as const).map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-3 py-1 text-xs font-mono font-bold border transition-colors cursor-pointer ${
                      currency === curr
                        ? 'bg-[#ff2a55] text-black border-[#ff2a55]'
                        : 'bg-[#1a1d27] text-neutral-300 border-neutral-700 hover:border-neutral-500'
                    }`}
                  >
                    {curr} ({currencySymbols[curr]})
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-6 text-xs font-mono">
              <div>
                <span className="text-neutral-500">Total Receivables: </span>
                <span className="font-bold text-white">{formatAmount(2960)}</span>
              </div>
              <div>
                <span className="text-neutral-500">Active Clients: </span>
                <span className="font-bold text-[#00f0ff]">14 Companies</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left 7 Cols: Interactive Invoice Billing Engine */}
            <div className="lg:col-span-7 bg-[#141720] border border-neutral-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <div className="flex items-center gap-2 text-white font-mono text-xs font-bold">
                  <FileText size={15} className="text-[#ff2a55]" />
                  <span>LIVE INVOICE GENERATOR & LINE ITEMS</span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 bg-[#1e222f] px-2 py-0.5">
                  RECURRING: ENABLED
                </span>
              </div>

              {/* Line Items Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-500 text-[10px]">
                      <th className="pb-2">ITEM / SERVICE</th>
                      <th className="pb-2 text-center">QTY</th>
                      <th className="pb-2 text-right">RATE</th>
                      <th className="pb-2 text-right">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800/60">
                    {items.map((item) => (
                      <tr key={item.id} className="text-neutral-300 hover:bg-[#1a1d28]">
                        <td className="py-2.5 font-medium pr-2">{item.name}</td>
                        <td className="py-2.5 text-center text-neutral-400">{item.qty}</td>
                        <td className="py-2.5 text-right text-neutral-400">{formatAmount(item.rate)}</td>
                        <td className="py-2.5 text-right font-bold text-white">
                          {formatAmount(item.qty * item.rate)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Discount and Tax Sliders */}
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-neutral-800 text-xs font-mono">
                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>DISCOUNT APPLIED</span>
                    <span className="text-white font-bold">{discountPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={discountPercent}
                    onChange={(e) => setDiscountPercent(Number(e.target.value))}
                    className="w-full accent-[#ff2a55] cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-neutral-400 mb-1">
                    <span>TAX RATE (GST / VAT)</span>
                    <span className="text-white font-bold">{taxPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="28"
                    value={taxPercent}
                    onChange={(e) => setTaxPercent(Number(e.target.value))}
                    className="w-full accent-[#00f0ff] cursor-pointer"
                  />
                </div>
              </div>

              {/* Invoice Calculations */}
              <div className="bg-[#0f1118] border border-neutral-800 p-4 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-neutral-400">
                  <span>Subtotal</span>
                  <span>{formatAmount(subtotal)}</span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span>Discount ({discountPercent}%)</span>
                  <span>-{formatAmount(discountAmount)}</span>
                </div>
                <div className="flex justify-between text-neutral-400">
                  <span>Estimated Tax ({taxPercent}%)</span>
                  <span>+{formatAmount(taxAmount)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-neutral-700 text-white font-bold text-sm sm:text-base">
                  <span className="text-[#ff2a55]">GRAND TOTAL DUE</span>
                  <span className="font-manga text-2xl tracking-wider text-white">
                    {formatAmount(grandTotal)}
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 Cols: Invoices Tracking & Automated Reminders */}
            <div className="lg:col-span-5 bg-[#141720] border border-neutral-800 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                <span className="font-mono text-xs font-bold text-white uppercase">
                  SALES HISTORY & RECEIVABLES
                </span>
                <span className="text-[10px] font-mono text-neutral-500">
                  RECEIVABLES AGING
                </span>
              </div>

              {/* Status Filter */}
              <div className="flex gap-1.5 text-xs font-mono">
                {(['ALL', 'PAID', 'PENDING', 'OVERDUE'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`px-2 py-1 text-[11px] border cursor-pointer ${
                      selectedStatus === st
                        ? 'bg-neutral-200 text-black border-neutral-200 font-bold'
                        : 'bg-[#1a1d27] text-neutral-400 border-neutral-800 hover:border-neutral-600'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {/* Invoices List */}
              <div className="space-y-2.5">
                {filteredInvoices.map((inv) => (
                  <div
                    key={inv.id}
                    className="p-3 bg-[#0f1118] border border-neutral-800 hover:border-neutral-700 transition-colors"
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className="font-bold text-white">{inv.id}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 font-bold ${
                          inv.status === 'PAID'
                            ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800'
                            : inv.status === 'PENDING'
                            ? 'bg-amber-950/80 text-amber-300 border border-amber-800'
                            : 'bg-rose-950/80 text-rose-300 border border-rose-800'
                        }`}
                      >
                        {inv.status}
                      </span>
                    </div>

                    <div className="text-xs text-neutral-300 font-medium truncate mb-1">
                      {inv.customer}
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pt-1 border-t border-neutral-900">
                      <span>{formatAmount(inv.amount)}</span>
                      <span className="text-neutral-500">{inv.aging}</span>
                    </div>

                    {inv.status !== 'PAID' && (
                      <button
                        onClick={() => handleSendReminder(inv.id)}
                        className="w-full mt-2 py-1 bg-[#1a1f2e] hover:bg-[#ff2a55] hover:text-black text-neutral-300 text-[10px] font-mono border border-neutral-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send size={11} />
                        {reminderSent === inv.id ? (
                          <span className="text-emerald-400 font-bold">AUTOMATED REMINDER DISPATCHED!</span>
                        ) : (
                          <span>DISPATCH AUTOMATED REMINDER</span>
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Supported Features Checklist */}
              <div className="pt-2 text-[10px] font-mono text-neutral-500 leading-relaxed border-t border-neutral-800">
                <span className="text-neutral-400 font-bold">RESUME HIGHLIGHTS: </span>
                Product Catalog, Customer Data, Sales History, Taxes, Discounts, Multi-Currency, Receivables Aging, Dashboards.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#161822] px-6 py-3 border-t border-neutral-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono font-bold text-neutral-200 border border-neutral-600 cursor-pointer"
          >
            CLOSE CONSOLE [ ESC ]
          </button>
        </div>
      </div>
    </div>
  );
};
