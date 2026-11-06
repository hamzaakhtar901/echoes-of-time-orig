import { useState, useEffect } from 'react';
import { TopNav } from './components/TopNav';
import { HeroViewer } from './components/HeroViewer';
import { LegacyTimelineInteractive } from './components/LegacyTimelineInteractive';
import { CuratedGallery } from './components/CuratedGallery';
import { NarrativeSection } from './components/NarrativeSection';
import { MemoryProjectionLab } from './components/MemoryProjectionLab';
import { Footer } from './components/Footer';

export default function App() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <TopNav onToggleFullscreen={toggleFullscreen} isFullscreen={isFullscreen} />
      
      <main className="flex-1">
        <HeroViewer />
        <LegacyTimelineInteractive />
        <CuratedGallery />
        <NarrativeSection />
        <MemoryProjectionLab />
      </main>

      <Footer />
    </div>
  );
}
