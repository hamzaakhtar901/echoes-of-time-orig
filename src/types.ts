export interface MemoryArtifact {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  transcription?: string;
  quote: string;
  image?: string;
  hotspot: {
    x: number; // percentage from left
    y: number; // percentage from top
  };
  glowColor: string;
}

export type AtmosphereTone = 'golden' | 'cyan' | 'monochrome' | 'twilight';

export interface CustomKeepsake {
  id: string;
  title: string;
  recipient: string;
  year: string;
  text: string;
  glowColor: string;
  createdDate: string;
}
