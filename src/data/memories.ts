import { MemoryArtifact } from '../types';

export const MEMORY_ARTIFACTS: MemoryArtifact[] = [
  {
    id: 'letter-1954',
    title: 'Dearest Martha: Letter from Florence',
    year: '1954',
    category: 'Handwritten Correspondence',
    description: 'Folded airmail letter penned on thin onion-skin parchment during Thomas’s post-war architectural fellowship in Italy. The ink has faded to warm sepia, yet the cursive remains clear.',
    transcription: 'Dearest Martha... I have come every evening to the Piazza del Duomo, where the swallows dive around the campanile. In every arch and terracotta stone, I look for you. The city is grand, but empty without the music of your laughter. With all my love across the miles, Thomas.',
    quote: '"Before we could project thoughts across continents in milliseconds, Leo, we measured love in the time it took for ink to dry and a ship to cross the sea."',
    glowColor: 'rgba(245, 158, 11, 0.85)',
    hotspot: { x: 61, y: 32 }
  },
  {
    id: 'photo-1961',
    title: 'Summer Bench in Normandy',
    year: '1961',
    category: 'Silver Gelatin Print',
    description: 'Captured on a twin-lens reflex camera in the cottage garden behind Martha’s family homestead. The afternoon sun was warm, and wild roses bordered the limestone wall.',
    quote: '"Your grandmother used to say the camera doesn’t capture what a person looks like—it captures how much they were loved at that exact second."',
    image: '/src/assets/images/holographic_memory_letter_1793998909387.jpg',
    glowColor: 'rgba(251, 191, 36, 0.85)',
    hotspot: { x: 47, y: 37 }
  },
  {
    id: 'photo-1948',
    title: 'The Young Siblings on Front Steps',
    year: '1948',
    category: 'Monochrome Daguerreotype Print',
    description: 'Thomas and his elder sister Clara sitting on the stoop in London just as the city was rebuilding. A snapshot of resilience and childhood innocence in postwar light.',
    quote: '"We had so little in those years, but the mornings felt vast and full of promise. Clara gave me her half of the apple."',
    glowColor: 'rgba(56, 189, 248, 0.85)',
    hotspot: { x: 44, y: 20 }
  },
  {
    id: 'photo-1974',
    title: 'Wedding Day at St. Jude’s',
    year: '1974',
    category: 'Format Portrait',
    description: 'Martha in lace embroidery, smiling into the lens as rain tapped against the cathedral stained glass windows. Thomas had borrowed his brother’s pocket watch for good fortune.',
    quote: '"Fifty years passed in what felt like twenty minutes. Hold on to the afternoons, Leo. They pass like light through a prism."',
    glowColor: 'rgba(245, 158, 11, 0.9)',
    hotspot: { x: 59, y: 46 }
  },
  {
    id: 'letter-held',
    title: 'The Letter of Return',
    year: '1959',
    category: 'Personal Archive',
    description: 'The letter Thomas held when he finally stepped off the train platform at St. Pancras. Martha was waiting by the iron gates in a green woolen overcoat.',
    transcription: 'I have kept every ticket stub, every tram token. When I see you at the station gate, I will know that every mile traveled was only leading me back home.',
    quote: '"A memory isn’t trapped in the glass, my boy. The hologram only reminds us what our hearts already know by heart."',
    glowColor: 'rgba(251, 191, 36, 0.9)',
    hotspot: { x: 65, y: 68 }
  }
];

export const NEURAL_VAULT_HOTSPOTS: MemoryArtifact[] = [
  {
    id: 'synaptic-core',
    title: 'The Synaptic Memory Core',
    year: 'Bio-Digital Inception',
    category: 'Hippocampal Matrix',
    description: 'A stylized, luminous human neural network glowing with bioluminescent blue axons. Here, human experience, laughter, and emotional weight are mapped into enduring synaptic harmonics.',
    quote: '"Every memory begins not as data, but as a pulse of light between human thoughts."',
    glowColor: 'rgba(56, 189, 248, 0.95)',
    hotspot: { x: 23, y: 44 }
  },
  {
    id: 'golden-soundstream',
    title: 'Harmonic Soundwave Ribbon',
    year: 'Acoustic Transmission',
    category: 'Golden Frequency Stream',
    description: 'Flowing golden ribbons of acoustic waveforms carrying the timbre of the grandfather’s voice, childhood laughter, and the soft rustle of letters across the air.',
    transcription: 'Voice spectrum captured at 432Hz: "Hold on to the afternoons, Leo. They pass like light through a prism."',
    quote: '"Even when physical words crumble, the cadence of a voice we loved lingers in the harmonic stream."',
    glowColor: 'rgba(245, 158, 11, 0.95)',
    hotspot: { x: 44, y: 46 }
  },
  {
    id: 'floating-frames-stream',
    title: 'Drifting Archival Relics',
    year: '1948 – 1986',
    category: 'Kinetic Keepsakes',
    description: 'Vintage family portrait frames preserved in weightless magnetic suspension, carried along the golden current into the preservation chamber.',
    quote: '"The photographs don’t belong to yesterday anymore. They are traveling forward to meet those yet unborn."',
    glowColor: 'rgba(251, 191, 36, 0.9)',
    hotspot: { x: 56, y: 39 }
  },
  {
    id: 'digital-vault-door',
    title: 'Eterna Secure Quantum Vault',
    year: 'Preservation Epoch',
    category: 'Subterranean Cyber Vault',
    description: 'A monumental, precision-machined titanium vault portal pulsing with deep ambient blue security lights, sealing human emotional archives against entropy and decay.',
    quote: '"What is cherished is fortified. Time cannot reach inside."',
    glowColor: 'rgba(59, 130, 246, 0.95)',
    hotspot: { x: 81, y: 46 }
  }
];

export const LEGACY_TABLET_HOTSPOTS: MemoryArtifact[] = [
  {
    id: 'tablet-family-tree',
    title: 'Legacy Vault: Interactive Family Tree',
    year: '1880 – Present',
    category: 'Restored Digital Genealogy',
    description: 'On the high-resolution tablet display, the Legacy Vault interface organizes five generations of the family lineage. Vintage daguerreotypes and black-and-white tintypes have been digitally restored, sharpened, and delicately colorized.',
    transcription: 'Archival Node: Elizabeth Reed (1892–1965) · Wedding to William Thompson (October 14, 1918) · 49 restored photographs & 1 audio phonograph cylinder.',
    quote: '"Seeing my great-grandmother in vibrant natural color felt as though she stepped across a century into the morning sun."',
    glowColor: 'rgba(245, 158, 11, 0.9)',
    hotspot: { x: 38, y: 55 }
  },
  {
    id: 'ceramic-coffee',
    title: 'Steaming Morning Coffee',
    year: 'Present Day Ritual',
    category: 'Tactile Ambiance',
    description: 'A handcrafted speckled stoneware mug filled with freshly brewed artisanal coffee, steam rising gently in the soft morning window light. The ritual of dawn contemplation.',
    quote: '"Memory work requires quiet hours. The warmth of the mug in your hands grounds you while your mind wanders back eighty years."',
    glowColor: 'rgba(251, 191, 36, 0.85)',
    hotspot: { x: 76, y: 31 }
  },
  {
    id: 'leather-journal',
    title: 'The Antique Leather-Bound Journal',
    year: '1938 Manuscript',
    category: 'Embossed Paper Heirloom',
    description: 'A weathered calfskin journal secured with a brass buckle strap. Inside, hand-ruled cotton rag pages hold fountain pen ink cursive, pressed botanical leaves, and hand-sketched family trees.',
    quote: '"Before glass tablets and cloud drives, our ancestors bound their lives in hand-stitched leather. Both carry the exact same heartbeat."',
    glowColor: 'rgba(217, 119, 6, 0.9)',
    hotspot: { x: 86, y: 68 }
  },
  {
    id: 'oak-desk-morning',
    title: 'Heritage White Oak Worksurface',
    year: 'Handcrafted Joinery',
    category: 'Architectural Timber',
    description: 'Natural solid oak desk showing rich tactile wood grain, bathed in diffused morning sunbeams from the garden window.',
    quote: '"The wood retains the warmth of the sun just as our minds retain the warmth of those who sat before us."',
    glowColor: 'rgba(56, 189, 248, 0.8)',
    hotspot: { x: 22, y: 80 }
  }
];

export const CINEMATIC_METADATA = {
  focalLength: '50mm f/1.4 Prime & Anamorphic Render',
  sensor: 'Full-Frame Cine Sensor & 8K Hyper-Detailed Spatial Pipeline',
  aspectRatio: '16:9 Anamorphic Vista',
  colorGrading: 'Kodachrome Golden Hour, Morning Sunbeam Warmth, & Cyber-Luxury Cyan',
  location: 'Minimalist Architectural Residence, Subterranean Quantum Vault, & Sunlit Oak Study',
  subjects: 'Thomas Mercer (Age 78), Leo (Age 14), & The Legacy Vault Tablet',
  ambience: 'Steaming coffee aroma, morning window light, golden soundwave streams, tactile leather grain'
};


