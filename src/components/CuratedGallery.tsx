import { useState } from 'react';
import { Sparkles, Maximize2, X, Compass, Clock, Aperture } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  lensDetails: string;
  image: string;
  colSpan: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'tablet-ui-macro',
    title: 'The Legacy Vault Interface: Timeline Node',
    subtitle: 'Elizabeth Reed (1892–1965) Genealogy',
    category: 'High-Resolution UI Macro',
    year: 'Modern Software',
    description: 'A macro perspective on the tablet display showing clean timeline nodes, restored sharp vintage portraits, and colorized archival wedding records from 1918.',
    lensDetails: '50mm Macro Lens · f/2.8 · Low Diffused Window Glare · 8K Sharpness',
    image: '/src/assets/images/legacy_vault_ui_closeup_1793999656062.jpg',
    colSpan: 'md:col-span-6'
  },
  {
    id: 'coffee-journal-tactile',
    title: 'Morning Coffee & The Hand-Bound Journal',
    subtitle: 'Ceramic Warmth Beside Weathered Calfskin',
    category: 'Sensory Still Life',
    year: 'Timeless Morning',
    description: 'An artisanal latte with delicate foam art on a linen coaster, resting alongside an embossed leather manuscript journal with hand-torn deckle paper edges.',
    lensDetails: '50mm Prime · f/1.8 · Natural Morning Sunlight · Tactile Oak Surface',
    image: '/src/assets/images/coffee_leather_journal_cozy_1793999655724.jpg',
    colSpan: 'md:col-span-6'
  },
  {
    id: 'neural-soundwave',
    title: 'Synaptic Resonance & Acoustic Stream',
    subtitle: 'Golden Soundwaves Weaving Through Neurons',
    category: 'Abstract Digital Art',
    year: 'Bio-Acoustic Capture',
    description: 'A glowing neural network weaving into harmonic golden ribbons of acoustic soundwaves, preserving the spoken timbre of family stories into microscopic data particles.',
    lensDetails: 'Hyper-Detailed 3D Render · Photorealistic Studio Lighting · 432Hz Spectral Coherence',
    image: '/src/assets/images/neural_soundwave_detail_1793999415868.jpg',
    colSpan: 'md:col-span-6'
  },
  {
    id: 'vault-monument',
    title: 'The Monumental Quantum Vault',
    year: 'Preservation Epoch',
    subtitle: 'Secure Subterranean Archive Chamber',
    category: 'Cyber-Luxury Architecture',
    description: 'A precision-engineered titanium vault door surrounded by orbiting vintage family photograph frames in zero-gravity suspension, illuminated by cyan circuit conduits.',
    lensDetails: '8K Spatial Render · Ambient Obsidian & Blue Illumination · Anti-Decay Field',
    image: '/src/assets/images/futuristic_memory_vault_1793999417310.jpg',
    colSpan: 'md:col-span-6'
  },
  {
    id: 'closeup-portrait',
    title: 'The Gaze of Seventy-Eight Years',
    subtitle: 'Thomas Mercer with Luminous Relics',
    category: 'Medium Character Study',
    year: 'Present Day',
    description: 'A quiet intimate look into Thomas’s eyes as the holographic projections illuminate the wrinkles carved by decades of love, loss, and endurance.',
    lensDetails: '50mm f/1.4 · 1/125s · ISO 400 · Ambient Window Falloff',
    image: '/src/assets/images/grandfather_memory_closeup_1793998908364.jpg',
    colSpan: 'md:col-span-7'
  },
  {
    id: 'vintage-letter',
    title: 'Summer Laugh in the Herb Garden',
    subtitle: 'Martha & Thomas, July 1961',
    category: 'Restored Archival Keepsake',
    year: '1961',
    description: 'A glowing holographic reconstruction of an original medium-format negative, preserving the spontaneous laugh that Thomas remembered every day since.',
    lensDetails: 'Holographic Coherence · 520nm Laser Reconstruction · Sepia Silver',
    image: '/src/assets/images/holographic_memory_letter_1793998909387.jpg',
    colSpan: 'md:col-span-5'
  },
  {
    id: 'modern-room',
    title: 'The Minimalist Sanctuary at Dusk',
    subtitle: 'Dusk Skyline through Low-Iron Glazing',
    category: 'Architectural Environment',
    year: 'Golden Hour',
    description: 'Walnut joinery, polished concrete floor, and warm curved brass floor lamps framing the quiet transition from afternoon light to city twilight.',
    lensDetails: '35mm Cine Prime · 1/60s · Volumetric Dusk Light · Kodachrome Curve',
    image: '/src/assets/images/modern_living_room_ambient_1793998910337.jpg',
    colSpan: 'md:col-span-12'
  }
];

export function CuratedGallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="vault" className="w-full py-12 sm:py-16 px-4 sm:px-6 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
              <span>Archival Perspectives</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Curated Studies</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-neutral-100">
              The Memory Vault & Architecture
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Complementary photographic angles capturing the environment, the subject’s quiet emotion, and the restored relics of the archive.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`${item.colSpan} group relative rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-all duration-300`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

                {/* Inspect badge */}
                <div className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-amber-300" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-2 bg-neutral-900/90">
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <span>{item.category}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400">{item.year}</span>
                </div>

                <h3 className="text-lg font-serif font-semibold text-neutral-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-400 border-t border-neutral-850">
                  <Aperture className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="font-mono text-neutral-400 truncate">{item.lensDetails}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setActiveItem(null)} />
          
          <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
            <div className="relative flex-1 min-h-[300px] sm:min-h-[480px] bg-neutral-950 overflow-hidden flex items-center justify-center">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[65vh]"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 transition-colors"
                aria-label="Close viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-neutral-900 space-y-3 border-t border-neutral-800">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                <span>{activeItem.category}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span>{activeItem.year}</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-neutral-400 font-mono">{activeItem.lensDetails}</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-neutral-100">
                {activeItem.title}
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
