import { useState } from 'react';
import { Volume2, VolumeX, Maximize2, Minimize2 } from 'lucide-react';
import { atmosphereAudio } from '../utils/audio';

interface TopNavProps {
  onToggleFullscreen?: () => void;
  isFullscreen?: boolean;
}

export function TopNav({ onToggleFullscreen, isFullscreen }: TopNavProps) {
  const [isAudioActive, setIsAudioActive] = useState(false);

  const handleAudioToggle = () => {
    const nextState = atmosphereAudio.toggle();
    setIsAudioActive(nextState);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-neutral-950/80 border-b border-neutral-800/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#scene" 
          className="text-lg font-serif font-semibold tracking-wide text-neutral-100 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          Echoes of Time
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          <a href="#scene" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            The Scene
          </a>
          <a href="#legacy-vault" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Legacy Vault
          </a>
          <a href="#vault" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Memory Vault
          </a>
          <a href="#optics" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Optics & Craft
          </a>
          <a href="#projection" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
            Project Memory
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAudioToggle}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              isAudioActive
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                : 'bg-neutral-900 hover:bg-neutral-850 text-neutral-300 border border-neutral-800'
            }`}
            title="Toggle warm atmospheric room soundscape"
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-amber-400" />
                <span>Audio Playing</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                <span>Ambient Sound</span>
              </>
            )}
          </button>

          {onToggleFullscreen && (
            <button
              onClick={onToggleFullscreen}
              className="p-1.5 text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800 rounded-md transition-colors"
              title={isFullscreen ? 'Exit Fullscreen' : 'View Fullscreen'}
              aria-label="Toggle Fullscreen"
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
