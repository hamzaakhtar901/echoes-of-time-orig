import { useState } from 'react';
import { Sparkles, Plus, Send, Check, Trash2 } from 'lucide-react';
import { CustomKeepsake } from '../types';

const INITIAL_KEEPSAKES: CustomKeepsake[] = [
  {
    id: 'sample-1',
    title: 'Sunday Morning Pancakes with Dad',
    recipient: 'To My Father',
    year: '1998',
    text: 'You would always flip them high toward the kitchen ceiling, and we would laugh until our stomachs ached. The smell of maple syrup will forever be the scent of safety.',
    glowColor: 'amber',
    createdDate: 'Archived Just Now'
  },
  {
    id: 'sample-2',
    title: 'The Blue Bicycle on Elm Street',
    recipient: 'To Clara',
    year: '1984',
    text: 'You held the back of the seat and swore you would not let go. When I turned around at the end of the block, you were already fifty yards behind, waving both hands in the air.',
    glowColor: 'cyan',
    createdDate: 'Archived'
  }
];

export function MemoryProjectionLab() {
  const [keepsakes, setKeepsakes] = useState<CustomKeepsake[]>(INITIAL_KEEPSAKES);
  const [title, setTitle] = useState('');
  const [recipient, setRecipient] = useState('');
  const [year, setYear] = useState('1975');
  const [text, setText] = useState('');
  const [aura, setAura] = useState<'amber' | 'cyan' | 'rose' | 'emerald'>('amber');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !text.trim()) return;

    const newKeepsake: CustomKeepsake = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      recipient: recipient.trim() || 'A Treasured Memory',
      year: year.trim() || 'Timeless',
      text: text.trim(),
      glowColor: aura,
      createdDate: 'Just Projecting'
    };

    setKeepsakes([newKeepsake, ...keepsakes]);
    setTitle('');
    setRecipient('');
    setText('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleApplyPreset = (presetTitle: string, presetRecipient: string, presetYear: string, presetText: string, presetAura: 'amber' | 'cyan' | 'rose') => {
    setTitle(presetTitle);
    setRecipient(presetRecipient);
    setYear(presetYear);
    setText(presetText);
    setAura(presetAura);
  };

  const handleDelete = (id: string) => {
    setKeepsakes(keepsakes.filter(k => k.id !== id));
  };

  const getAuraStyles = (auraColor: string) => {
    switch (auraColor) {
      case 'cyan':
        return {
          cardBorder: 'border-sky-500/40',
          shadow: 'shadow-[0_0_25px_rgba(56,189,248,0.25)]',
          badgeText: 'text-sky-300',
          accentBg: 'bg-sky-500/10'
        };
      case 'rose':
        return {
          cardBorder: 'border-rose-500/40',
          shadow: 'shadow-[0_0_25px_rgba(244,63,94,0.25)]',
          badgeText: 'text-rose-300',
          accentBg: 'bg-rose-500/10'
        };
      case 'emerald':
        return {
          cardBorder: 'border-emerald-500/40',
          shadow: 'shadow-[0_0_25px_rgba(16,185,129,0.25)]',
          badgeText: 'text-emerald-300',
          accentBg: 'bg-emerald-500/10'
        };
      case 'amber':
      default:
        return {
          cardBorder: 'border-amber-500/40',
          shadow: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
          badgeText: 'text-amber-300',
          accentBg: 'bg-amber-500/10'
        };
    }
  };

  return (
    <section id="projection" className="w-full py-12 sm:py-16 px-4 sm:px-6 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Memory Projection</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Personal Archive</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-neutral-100">
              Project Your Own Floating Keepsake
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Type a memory, letter, or tribute from your own family history to see it rendered as a translucent, floating holographic keepsake.
          </p>
        </div>

        {/* 2-Column Split: Form & Floating Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form */}
          <div className="lg:col-span-5 bg-neutral-900 border border-neutral-800 p-6 rounded-2xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-neutral-100">
                Compose Holographic Keepsake
              </h3>
              <span className="text-xs text-neutral-400">Coherence 520nm</span>
            </div>

            {/* Quick Presets */}
            <div className="space-y-1.5">
              <span className="text-xs text-neutral-400 block font-medium">Try a Sample Memory:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleApplyPreset(
                    "Grandma's Sewing Box", 
                    "To Evelyn", 
                    "1971", 
                    "The tin of butter cookies that never held cookies—only buttons, spools of olive thread, and silver thimbles.",
                    "amber"
                  )}
                  className="px-2.5 py-1 text-xs rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-amber-300 hover:border-neutral-700 transition-colors"
                >
                  Sewing Box (1971)
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyPreset(
                    "The Old Station Clock", 
                    "To Thomas & Martha", 
                    "1965", 
                    "We stood under the clock at noon, listening to the chime resonate across the quiet iron tracks.",
                    "cyan"
                  )}
                  className="px-2.5 py-1 text-xs rounded-md bg-neutral-950 border border-neutral-800 text-neutral-300 hover:text-sky-300 hover:border-neutral-700 transition-colors"
                >
                  Station Clock (1965)
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Memory Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., The Porch Swing in August"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Recipient / Person
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., To Grandfather"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Era / Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 1968"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3.5 py-2 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/80 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Handwritten Note or Letter Words
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Write the words, the advice, or the memory you want to suspend in light..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-100 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/80 transition-colors resize-none"
                />
              </div>

              {/* Holographic Aura Selection */}
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1.5">
                  Holographic Light Aura
                </label>
                <div className="grid grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setAura('amber')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                      aura === 'amber'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-sm'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    Amber Gold
                  </button>
                  <button
                    type="button"
                    onClick={() => setAura('cyan')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                      aura === 'cyan'
                        ? 'bg-sky-500/20 text-sky-300 border-sky-500/50 shadow-sm'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    Starlight Cyan
                  </button>
                  <button
                    type="button"
                    onClick={() => setAura('rose')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                      aura === 'rose'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-sm'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    Rose Dawn
                  </button>
                  <button
                    type="button"
                    onClick={() => setAura('emerald')}
                    className={`py-1.5 px-2 text-xs font-medium rounded-lg border transition-all ${
                      aura === 'emerald'
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-sm'
                        : 'bg-neutral-950 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    Forest Glade
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors font-semibold shadow-[0_0_15px_rgba(251,191,36,0.2)]"
              >
                {isSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Projected to Archive!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Project Hologram</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Floating Projected Keepsakes Canvas */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-1 border-b border-neutral-800">
              <span className="text-xs font-medium text-neutral-400">
                Active Floating Projections ({keepsakes.length})
              </span>
              <span className="text-xs text-neutral-500">
                Suspended in ambient volumetric light
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keepsakes.map((k) => {
                const styles = getAuraStyles(k.glowColor);
                return (
                  <div
                    key={k.id}
                    className={`group relative p-5 rounded-xl bg-neutral-900/90 border ${styles.cardBorder} ${styles.shadow} animate-float transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between`}
                  >
                    {/* Glowing light edge */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-mono font-medium ${styles.badgeText}`}>
                          {k.year} · {k.recipient}
                        </span>
                        <button
                          onClick={() => handleDelete(k.id)}
                          className="opacity-0 group-hover:opacity-100 p-1 text-neutral-500 hover:text-red-400 transition-opacity"
                          title="Remove from projection"
                          aria-label="Remove keepsake"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 className="text-base font-serif font-bold text-neutral-100">
                        {k.title}
                      </h4>

                      <p className="text-xs italic font-serif leading-relaxed text-neutral-300">
                        "{k.text}"
                      </p>
                    </div>

                    <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-neutral-500 border-t border-neutral-800">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Hologram Active</span>
                      </span>
                      <span>{k.createdDate}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
