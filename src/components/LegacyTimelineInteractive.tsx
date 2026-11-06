import { useState } from 'react';
import { Sparkles, Calendar, Heart, Shield, Sliders, ChevronRight, Volume2, User } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  lifespan: string;
  era: string;
  relation: string;
  role: string;
  quote: string;
  details: string;
  colorPhoto: string;
  isWedding?: boolean;
}

const FAMILY_LINEAGE: FamilyMember[] = [
  {
    id: 'elizabeth-reed',
    name: 'Elizabeth Reed-Thompson',
    lifespan: '1892 – 1965',
    era: '1890s Heritage',
    relation: 'Great-Grandmother',
    role: 'Botanist & Musician',
    quote: '"We planted the oak sapling by the stone well in 1912. It will outlast all our quiet worries."',
    details: 'Graduated in natural botany from Edinburgh. Maintained hand-illustrated journals of wild flora and composed piano hymns played on Sunday evenings.',
    colorPhoto: '/src/assets/images/legacy_vault_ui_closeup_1793999656062.jpg'
  },
  {
    id: 'thomas-mercer',
    name: 'Thomas Mercer',
    lifespan: '1948 – Present',
    era: '1950s Postwar',
    relation: 'Grandfather (Present)',
    role: 'Architect & Watchmaker',
    quote: '"Before we could project thoughts across continents, Leo, we measured love in the time it took for ink to dry."',
    details: 'Apprenticed in precision clockwork before designing solar-passive timber residences. The living keeper of the family archive.',
    colorPhoto: '/src/assets/images/grandfather_memory_closeup_1793998908364.jpg'
  },
  {
    id: 'martha-reed',
    name: 'Martha Reed-Mercer',
    lifespan: '1950 – 2021',
    era: '1960s Summer',
    relation: 'Grandmother',
    role: 'Literature Teacher & Gardener',
    quote: '"The camera doesn’t capture what a person looks like—it captures how much they were loved at that exact second."',
    details: 'Beloved literature instructor who founded the village lending library. Known for her infectious laughter in the summer herb garden.',
    colorPhoto: '/src/assets/images/holographic_memory_letter_1793998909387.jpg'
  },
  {
    id: 'leo-mercer',
    name: 'Leo Mercer',
    lifespan: '2012 – Present',
    era: '2010s Digital Dawn',
    relation: 'Grandson (Age 14)',
    role: 'Student & Emerging Archivist',
    quote: '"Looking at the floating photos, history didn’t feel like old paper in a museum. It felt alive and right beside me."',
    details: 'Fourteen-year-old curious explorer who helps Thomas catalog family journals into the Legacy Vault digital system.',
    colorPhoto: '/src/assets/images/grandfather_hologram_hero_1793998908898.jpg'
  }
];

export function LegacyTimelineInteractive() {
  const [selectedMember, setSelectedMember] = useState<FamilyMember>(FAMILY_LINEAGE[0]);
  const [restorationLevel, setRestorationLevel] = useState(100); // 0 = vintage B&W, 100 = restored sharp color
  const [activeTab, setActiveTab] = useState<'timeline' | 'stories' | 'records'>('timeline');

  return (
    <section id="legacy-vault" className="w-full py-12 sm:py-16 px-4 sm:px-6 border-t border-neutral-800/80 bg-neutral-950/50">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide uppercase">
              <Shield className="w-3.5 h-3.5" />
              <span>Legacy Vault Dashboard</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-400">Interactive Family Tree & Restoration</span>
            </div>
            <h2 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-neutral-100">
              The Living Lineage: 1880 – Present
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            As seen on the tablet display: interactive family tree nodes where black-and-white tintypes are restored to vivid, sharp clarity.
          </p>
        </div>

        {/* The Legacy Vault Software Shell */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 shadow-2xl overflow-hidden">
          
          {/* Software Top App Bar */}
          <div className="flex items-center justify-between px-6 py-3.5 bg-neutral-950 border-b border-neutral-800/80">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
              </div>
              <span className="font-serif font-semibold text-sm tracking-wide text-neutral-200">
                LEGACY VAULT <span className="text-amber-400/90 font-sans font-normal text-xs">· Thompson-Mercer Heritage</span>
              </span>
            </div>

            {/* In-App Tabs */}
            <div className="flex items-center gap-1 p-0.5 bg-neutral-900 rounded-lg text-xs">
              <button
                onClick={() => setActiveTab('timeline')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'timeline' 
                    ? 'bg-neutral-800 text-amber-300 font-medium shadow-sm' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Timeline
              </button>
              <button
                onClick={() => setActiveTab('stories')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'stories' 
                    ? 'bg-neutral-800 text-amber-300 font-medium shadow-sm' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Stories & Letters
              </button>
              <button
                onClick={() => setActiveTab('records')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  activeTab === 'records' 
                    ? 'bg-neutral-800 text-amber-300 font-medium shadow-sm' 
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Archival Records
              </button>
            </div>
          </div>

          {/* Interactive Timeline Bar */}
          <div className="p-6 border-b border-neutral-800/60 bg-neutral-950/40">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                Select Family Ancestor Node (1880 - Present)
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                {selectedMember.lifespan}
              </span>
            </div>

            {/* Horizontal Lineage Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {FAMILY_LINEAGE.map((member) => {
                const isSelected = selectedMember.id === member.id;
                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member)}
                    className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.15)]'
                        : 'bg-neutral-900 hover:bg-neutral-850 border-neutral-800 text-neutral-400'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-amber-400 block mb-0.5">
                        {member.era}
                      </span>
                      <h4 className={`text-sm font-semibold truncate ${isSelected ? 'text-neutral-100' : 'text-neutral-300'}`}>
                        {member.name}
                      </h4>
                      <div className="text-[11px] text-neutral-400 mt-0.5 truncate">
                        {member.relation}
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-400 pt-2 border-t border-neutral-800">
                      <span>{member.role}</span>
                      <ChevronRight className={`w-3 h-3 ${isSelected ? 'text-amber-400' : 'text-neutral-600'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Deep Inspection & Photo Restoration Panel */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Restored Portrait with Interactive Restoration Slider */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-xl group">
                <img
                  src={selectedMember.colorPhoto}
                  alt={selectedMember.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    filter: `grayscale(${100 - restorationLevel}%) contrast(${1 + restorationLevel * 0.001}) saturate(${restorationLevel * 0.012})`
                  }}
                />

                {/* Status Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[11px] font-medium text-amber-300">
                  {restorationLevel === 100 ? 'Colorized & Restored 8K' : restorationLevel === 0 ? 'Original Archival Tintype' : 'Restoration Transition'}
                </div>
              </div>

              {/* Restoration Control Slider */}
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-amber-400" />
                    <span>Restoration Shader</span>
                  </span>
                  <span className="font-mono text-neutral-400">
                    {restorationLevel === 100 ? '100% Vivid Sharp' : restorationLevel === 0 ? '100% Sepia Monochrome' : `${restorationLevel}% Colorized`}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={restorationLevel}
                  onChange={(e) => setRestorationLevel(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[10px] text-neutral-400 font-mono">
                  <span>Vintage Monochrome (1890)</span>
                  <span>Restored AI Sharp (2026)</span>
                </div>
              </div>
            </div>

            {/* Right: Biographical Profile & Oral Memory Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-medium">
                  <User className="w-3.5 h-3.5" />
                  <span>{selectedMember.relation}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span>{selectedMember.lifespan}</span>
                  <span aria-hidden="true" className="text-neutral-600">·</span>
                  <span className="text-neutral-400">{selectedMember.role}</span>
                </div>
                <h3 className="mt-1 text-2xl sm:text-3xl font-serif font-bold text-neutral-100">
                  {selectedMember.name}
                </h3>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedMember.details}
              </p>

              {/* Spoken Quote Card */}
              <div className="p-5 rounded-xl bg-neutral-950/70 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-300">
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Recorded Voice & Spoken Keepsake</span>
                </div>
                <blockquote className="text-sm font-serif italic text-neutral-200 leading-relaxed">
                  {selectedMember.quote}
                </blockquote>
              </div>

              {/* Vault Security Signature */}
              <div className="flex items-center gap-4 text-xs text-neutral-400 pt-2 border-t border-neutral-800/80">
                <span className="font-mono text-neutral-400">Node ID: {selectedMember.id}-SEC-88</span>
                <span>·</span>
                <span>Restored via Neural Chromatic Transfer</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
