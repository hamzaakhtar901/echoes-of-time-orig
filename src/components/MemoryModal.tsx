import { useEffect } from 'react';
import { X, Sparkles, Calendar, BookOpen, Quote } from 'lucide-react';
import { MemoryArtifact } from '../types';

interface MemoryModalProps {
  artifact: MemoryArtifact | null;
  onClose: () => void;
}

export function MemoryModal({ artifact, onClose }: MemoryModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!artifact) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden z-10">
        {/* Holographic glowing top accent hairline */}
        <div 
          className="h-1 w-full"
          style={{ background: `linear-gradient(90deg, transparent, ${artifact.glowColor}, transparent)` }}
        />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400/90 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Holographic Memory Fragment</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1 text-neutral-400">
                  <Calendar className="w-3 h-3" />
                  {artifact.year}
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-neutral-400">{artifact.category}</span>
              </div>
              <h2 className="mt-2 text-2xl font-serif font-bold text-neutral-100 tracking-wide">
                {artifact.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 rounded-lg transition-colors shrink-0"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Optional Image */}
          {artifact.image && (
            <div className="relative rounded-lg overflow-hidden border border-neutral-800 bg-neutral-950">
              <img
                src={artifact.image}
                alt={artifact.title}
                referrerPolicy="no-referrer"
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 pointer-events-none border border-amber-500/20 rounded-lg shadow-[inset_0_0_20px_rgba(245,158,11,0.15)]" />
            </div>
          )}

          {/* Description */}
          <div className="text-sm leading-relaxed text-neutral-300">
            {artifact.description}
          </div>

          {/* Transcription if letter */}
          {artifact.transcription && (
            <div className="p-4 rounded-lg bg-neutral-950/70 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-amber-300/80">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Archival Letter Transcript</span>
              </div>
              <p className="text-sm italic font-serif leading-relaxed text-neutral-200">
                "{artifact.transcription}"
              </p>
            </div>
          )}

          {/* Grandfather's spoken reflection */}
          <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-950/20 border border-amber-900/30 text-amber-200/90">
            <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed italic">
              {artifact.quote}
            </p>
          </div>

          {/* Footer buttons */}
          <div className="flex justify-end pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-300 bg-neutral-800 hover:bg-neutral-750 hover:text-white rounded-lg transition-colors"
            >
              Return to Scene
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
