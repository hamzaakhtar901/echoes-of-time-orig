import { Camera, Sun, Sparkles, BookHeart, Layers } from 'lucide-react';
import { CINEMATIC_METADATA } from '../data/memories';

export function NarrativeSection() {
  return (
    <section id="narrative" className="w-full py-12 sm:py-16 px-4 sm:px-6 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Narrative Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: The Emotional Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
                <BookHeart className="w-3.5 h-3.5" />
                <span>The Narrative Record</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-neutral-400">Chapter 14: Inheritance of Light</span>
              </div>
              <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-neutral-100 tracking-tight text-balance">
                "We Did Not Keep Things Because They Were Rare. We Kept Them Because They Remembered Us."
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-relaxed text-neutral-300">
              <p>
                Thomas Mercer held the tumbler of water in his weathered right hand, watching the low sun slice through the tall windows of the ridge house. Across the low coffee table, fourteen-year-old Leo sat leaning forward, eyes wide, breath held in quiet fascination.
              </p>
              <p>
                Between them, suspended in mid-air like golden embers caught in amber, floated forty years of handwritten letters and silver-gelatin photographs. As Thomas’s hand drifted through the air, the holographic projections rippled softly with light coherence, revealing the laughter of people who had lived long before digital clouds existed.
              </p>
              <blockquote className="p-4 rounded-xl bg-neutral-900 border-l-2 border-amber-400/80 text-neutral-200 font-serif italic text-base">
                “When you hold an old letter in your hands, Leo, you aren’t just reading words. You are touching the pressure of a pen where someone paused to think of you. Now we make them float, but the heart inside them stays grounded in the earth.”
              </blockquote>
              <p>
                The boy reached out cautiously. His fingers brushed against the glowing sepia image of his grandmother Martha smiling in the herb garden. A soft chime resonated through the quiet room, and the dust motes danced in the fading twilight.
              </p>
            </div>
          </div>

          {/* Right Column: Optics, Camera Craft & 8K Volumetric Lighting */}
          <div id="optics" className="lg:col-span-5 space-y-6 bg-neutral-900/60 border border-neutral-800 p-6 sm:p-7 rounded-2xl">
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Cinematography & Technical Optics</span>
            </div>

            <h3 className="text-xl font-serif font-bold text-neutral-100">
              The 50mm Lens & Volumetric Atmosphere
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
              <div className="space-y-1 pb-3 border-b border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Optical Perspective (50mm Prime)
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  The 50mm focal length was chosen to match human visual field and intimate ocular compression, allowing the grandfather in the foreground armchair and the grandson on the sofa to occupy balanced spatial harmony without wide-angle distortion.
                </p>
              </div>

              <div className="space-y-1 pb-3 border-b border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Golden Hour Volumetric Rays
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  Low-angle natural sunlight enters from the eastern glazing, casting volumetric light beams that illuminate real ambient room dust particles and create soft rim lighting along the grandfather’s silver hair and knitted wool sweater.
                </p>
              </div>

              <div className="space-y-1 pb-3 border-b border-neutral-800">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Cyber-Luxury Neural Preservation
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  The abstract digital counterpart translates human episodic cognition into a glowing synaptic neural brain network, transitioning smoothly into a flowing golden stream of acoustic soundwaves and floating vintage frames entering a fortified subterranean quantum vault.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Acoustic Stream & Dual-Spectral Coherence
                </span>
                <p className="text-neutral-300 leading-relaxed">
                  The floating memories are rendered with dual-spectral coherence: warm 610nm amber for acoustic frequency ribbons and deep 480nm ambient cyan for the vault's cold security aura, capturing clean studio contrast in photorealistic 8K.
                </p>
              </div>
            </div>

            {/* Quick Spec Matrix */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-neutral-800 text-xs">
              <div className="p-3 bg-neutral-950/70 rounded-lg border border-neutral-850">
                <span className="text-neutral-500 block text-[11px]">Optical & Spatial Rig</span>
                <span className="font-mono text-neutral-200 font-semibold">50mm Prime & 8K 3D Render</span>
              </div>
              <div className="p-3 bg-neutral-950/70 rounded-lg border border-neutral-850">
                <span className="text-neutral-500 block text-[11px]">Vault Status</span>
                <span className="font-mono text-neutral-200 font-semibold">Eterna Quantum Protected</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
