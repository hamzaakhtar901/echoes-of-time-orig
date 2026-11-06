import { useState, useRef, useEffect, MouseEvent } from 'react';
import { 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  Sliders, 
  Sun, 
  Layers, 
  Eye, 
  Maximize,
  Compass,
  Brain,
  Home,
  Tablet
} from 'lucide-react';
import { MEMORY_ARTIFACTS, NEURAL_VAULT_HOTSPOTS, LEGACY_TABLET_HOTSPOTS } from '../data/memories';
import { MemoryArtifact, AtmosphereTone } from '../types';
import { MemoryModal } from './MemoryModal';

type SceneMode = 'tablet-desk' | 'neural-vault' | 'living-room';

export function HeroViewer() {
  const [sceneMode, setSceneMode] = useState<SceneMode>('tablet-desk');
  const [selectedArtifact, setSelectedArtifact] = useState<MemoryArtifact | null>(null);
  const [activeTone, setActiveTone] = useState<AtmosphereTone>('golden');
  const [showHotspots, setShowHotspots] = useState(true);
  const [showDustMotes, setShowDustMotes] = useState(true);
  const [glowIntensity, setGlowIntensity] = useState(90);
  const [isZoomed, setIsZoomed] = useState(false);
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeHotspots = 
    sceneMode === 'tablet-desk' 
      ? LEGACY_TABLET_HOTSPOTS 
      : sceneMode === 'neural-vault' 
      ? NEURAL_VAULT_HOTSPOTS 
      : MEMORY_ARTIFACTS;


  // Canvas floating dust & volumetric light particles
  useEffect(() => {
    if (!showDustMotes) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 0.8,
      speedY: -0.2 - Math.random() * 0.4,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.05
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.opacity += Math.sin(Date.now() * 0.002 + p.pulse) * 0.01;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Tone dependent particle color
        let color = 'rgba(251, 191, 36, ';
        if (activeTone === 'cyan') color = 'rgba(56, 189, 248, ';
        else if (activeTone === 'monochrome') color = 'rgba(240, 240, 240, ';
        else if (activeTone === 'twilight') color = 'rgba(192, 132, 252, ';

        ctx.fillStyle = `${color}${Math.max(0.1, Math.min(0.8, p.opacity))})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [showDustMotes, activeTone]);

  // Subtle 3D parallax on mouse move
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || isZoomed) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    setTiltOffset({
      x: xPct * 8,
      y: yPct * -6
    });
  };

  const handleMouseLeave = () => {
    setTiltOffset({ x: 0, y: 0 });
  };

  // Tone styling filter class
  const getToneFilter = () => {
    switch (activeTone) {
      case 'cyan':
        return 'hue-rotate(170deg) contrast(1.08) brightness(0.96)';
      case 'monochrome':
        return 'grayscale(1) contrast(1.15) brightness(0.95)';
      case 'twilight':
        return 'hue-rotate(220deg) contrast(1.05) brightness(0.92) saturate(1.2)';
      case 'golden':
      default:
        return 'sepia(0.08) contrast(1.04) brightness(1.01)';
    }
  };

  return (
    <section id="scene" className="relative w-full pt-4 pb-12 sm:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-5">
        
        {/* Editorial Subheader & Unboxed Metadata */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2 border-b border-neutral-800/80">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
              <span>
                {sceneMode === 'tablet-desk'
                  ? 'Modern UI & Tactile Heritage'
                  : sceneMode === 'neural-vault'
                  ? 'Abstract Digital Art'
                  : 'Cinematic Scene'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">
                {sceneMode === 'tablet-desk'
                  ? 'Interactive Family Tree Timeline'
                  : sceneMode === 'neural-vault'
                  ? 'Cyber-Luxury Memory Preservation'
                  : '8K Volumetric Illumination'}
              </span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">
                {sceneMode === 'tablet-desk'
                  ? 'Soft Morning Light · Macro 50mm'
                  : sceneMode === 'neural-vault'
                  ? '3D Photorealistic Render'
                  : '50mm Prime Lens'}
              </span>
            </div>
            <h1 className="mt-1.5 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-neutral-100 tracking-tight text-balance">
              {sceneMode === 'tablet-desk'
                ? 'Legacy Vault: Family Tree on Oak'
                : sceneMode === 'neural-vault'
                ? 'The Neural Memory Vault & Golden Soundstream'
                : 'The Grandfather’s Floating Archive'}
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed">
              {sceneMode === 'tablet-desk'
                ? 'A sleek tablet displaying the Legacy Vault family tree timeline with restored sharp color photos, beside steaming coffee and a vintage leather journal.'
                : sceneMode === 'neural-vault'
                ? 'Glowing human brain network transitioning into flowing golden soundwaves and floating vintage family frames into a futuristic digital vault.'
                : 'Seventy-eight-year-old Thomas Mercer shares glowing holographic letters and memories with his grandson Leo in golden hour light.'}
            </p>

            {/* 3-Way Scene Mode Selector */}
            <div className="flex items-center gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-lg shrink-0">
              <button
                onClick={() => setSceneMode('tablet-desk')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  sceneMode === 'tablet-desk'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Tablet className="w-3.5 h-3.5 text-amber-400" />
                <span>Legacy Tablet</span>
              </button>
              <button
                onClick={() => setSceneMode('neural-vault')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  sceneMode === 'neural-vault'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Brain className="w-3.5 h-3.5 text-amber-400" />
                <span>Neural Vault</span>
              </button>
              <button
                onClick={() => setSceneMode('living-room')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  sceneMode === 'living-room'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                <Home className="w-3.5 h-3.5 text-amber-400" />
                <span>Living Room</span>
              </button>
            </div>
          </div>
        </div>

        {/* Master Interactive Photo Stage */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative w-full aspect-[16/9] min-h-[460px] sm:min-h-[560px] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] select-none group"
          style={{
            perspective: '1200px'
          }}
        >
          {/* Main Photo with 3D Tilt Transform */}
          <div 
            className="w-full h-full transition-transform duration-300 ease-out will-change-transform"
            style={{
              transform: isZoomed 
                ? 'scale(1.4) translate(0%, -5%)' 
                : `rotateY(${tiltOffset.x}deg) rotateX(${tiltOffset.y}deg) scale(1.02)`,
              filter: getToneFilter()
            }}
          >
            <img
              src={sceneMode === 'tablet-desk'
                ? '/src/assets/images/legacy_vault_tablet_desk_1793999655573.jpg'
                : sceneMode === 'neural-vault'
                ? '/src/assets/images/memory_vault_neural_stream_1793999415773.jpg'
                : '/src/assets/images/grandfather_hologram_hero_1793998908898.jpg'}
              alt={sceneMode === 'tablet-desk'
                ? 'Sleek premium tablet on a wooden desk running Legacy Vault interactive family tree timeline software beside a warm steaming cup of coffee and antique leather notebook'
                : sceneMode === 'neural-vault'
                ? 'A stylized glowing human brain neural network transitioning into flowing golden soundwaves and floating vintage family photo frames entering a futuristic digital vault door'
                : 'Elderly grandfather and teenage grandson looking at floating glowing holographic family photos and vintage letters in a modern living room at golden hour'}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Volumetric Light Glow Overlay */}
          <div 
            className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-700"
            style={{
              background: sceneMode === 'tablet-desk'
                ? 'radial-gradient(circle at 65% 20%, rgba(245,158,11,0.2) 0%, rgba(217,119,6,0.08) 40%, transparent 65%)'
                : sceneMode === 'neural-vault'
                ? 'radial-gradient(circle at 45% 45%, rgba(245,158,11,0.22) 0%, rgba(56,189,248,0.18) 45%, transparent 70%)'
                : activeTone === 'cyan'
                ? 'radial-gradient(circle at 75% 30%, rgba(56,189,248,0.22) 0%, transparent 65%)'
                : 'radial-gradient(circle at 78% 28%, rgba(245,158,11,0.26) 0%, rgba(217,119,6,0.12) 35%, transparent 70%)',
              opacity: glowIntensity / 100
            }}
          />

          {/* Vignette Rim Frame */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30" />

          {/* Floating Atmospheric Dust Motes Canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-500 ${
              showDustMotes ? 'opacity-85' : 'opacity-0'
            }`}
          />

          {/* Interactive Holographic Hotspots Over the Floating Letters & Photos */}
          {showHotspots && !isZoomed && (
            <div className="absolute inset-0 pointer-events-none">
              {activeHotspots.map((artifact) => (
                <button
                  key={artifact.id}
                  onClick={() => setSelectedArtifact(artifact)}
                  style={{
                    left: `${artifact.hotspot.x}%`,
                    top: `${artifact.hotspot.y}%`
                  }}
                  className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2 group/hotspot focus:outline-none"
                  aria-label={`Inspect memory: ${artifact.title}`}
                >
                  {/* Glowing pulsing aura */}
                  <span 
                    className="absolute -inset-3 rounded-full opacity-60 animate-ping"
                    style={{ backgroundColor: artifact.glowColor }}
                  />
                  
                  {/* Central interactive focal node */}
                  <div 
                    className="relative flex items-center justify-center w-7 h-7 rounded-full bg-neutral-900/90 border border-white/40 shadow-[0_0_15px_rgba(251,191,36,0.8)] backdrop-blur-sm transition-transform duration-200 group-hover/hotspot:scale-125"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  </div>

                  {/* Hover preview tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2.5 rounded-lg bg-neutral-900/95 border border-neutral-700 text-left shadow-xl opacity-0 translate-y-1 pointer-events-none transition-all duration-200 group-hover/hotspot:opacity-100 group-hover/hotspot:translate-y-0 group-hover/hotspot:pointer-events-auto z-20">
                    <div className="text-[10px] text-amber-400 font-medium">
                      {artifact.year} · {artifact.category}
                    </div>
                    <div className="text-xs font-semibold text-neutral-100 mt-0.5 line-clamp-1">
                      {artifact.title}
                    </div>
                    <div className="mt-1 text-[11px] text-neutral-400 flex items-center gap-1">
                      <Eye className="w-3 h-3 text-amber-300" />
                      <span>Click to read transcript</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Quick HUD Overlay at Bottom of Photo */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3 rounded-xl bg-neutral-950/75 backdrop-blur-md border border-neutral-800/90 text-xs">
            <div className="flex items-center gap-3 text-neutral-300">
              <span className="font-semibold text-amber-300">Interact:</span>
              <span>Click glowing holographic markers to inspect letters and family artifacts</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 transition-colors"
                title={isZoomed ? "Reset zoom" : "Inspect 8K fine textures"}
              >
                {isZoomed ? (
                  <>
                    <ZoomOut className="w-3.5 h-3.5 text-amber-400" />
                    <span>Fit Frame</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>8K Magnifier</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setShowHotspots(!showHotspots)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border transition-colors ${
                  showHotspots 
                    ? 'bg-amber-500/15 text-amber-300 border-amber-500/30' 
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                }`}
                title="Toggle holographic interactive markers"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showHotspots ? 'Holograms Active' : 'Pure Photo'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Cinematic Calibration Console (Tone & Volumetric Controls) */}
        <div className="p-4 sm:p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Tone Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-neutral-400 flex items-center gap-1.5">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Color Grade Atmosphere</span>
            </label>
            <div className="flex items-center gap-1 p-1 bg-neutral-950 rounded-lg border border-neutral-800">
              <button
                onClick={() => setActiveTone('golden')}
                className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTone === 'golden'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Golden Hour
              </button>
              <button
                onClick={() => setActiveTone('cyan')}
                className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTone === 'cyan'
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Holo Cyan
              </button>
              <button
                onClick={() => setActiveTone('twilight')}
                className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTone === 'twilight'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Twilight
              </button>
              <button
                onClick={() => setActiveTone('monochrome')}
                className={`flex-1 px-2.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTone === 'monochrome'
                    ? 'bg-neutral-800 text-neutral-100 border border-neutral-700 shadow-sm'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Archival B&W
              </button>
            </div>
          </div>

          {/* Volumetric Hologram Glow Intensity */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-neutral-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-amber-400" />
                <span>Hologram Coherence & Glow</span>
              </span>
              <span className="font-mono text-neutral-300 tabular-nums">{glowIntensity}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={glowIntensity}
              onChange={(e) => setGlowIntensity(Number(e.target.value))}
              className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
          </div>

          {/* Light Motes Dust Particles */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <div className="text-left md:text-right">
              <div className="text-xs font-medium text-neutral-200">Volumetric Air Motes</div>
              <div className="text-[11px] text-neutral-400">Dust floating in window light rays</div>
            </div>
            <button
              onClick={() => setShowDustMotes(!showDustMotes)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                showDustMotes
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-neutral-950 text-neutral-400 border-neutral-800'
              }`}
            >
              {showDustMotes ? 'Active' : 'Disabled'}
            </button>
          </div>

        </div>

      </div>

      {/* Memory Inspector Modal */}
      <MemoryModal
        artifact={selectedArtifact}
        onClose={() => setSelectedArtifact(null)}
      />
    </section>
  );
}
