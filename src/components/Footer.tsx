export function Footer() {
  return (
    <footer className="w-full py-10 px-4 sm:px-6 border-t border-neutral-900 bg-neutral-950 text-neutral-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <span className="font-serif font-medium text-neutral-300 text-sm">Echoes of Time</span>
          <span aria-hidden="true" className="text-neutral-700">·</span>
          <span>A Cinematic Visual Chronicle</span>
        </div>

        <div className="flex items-center gap-6 text-neutral-400">
          <a href="#scene" className="hover:text-amber-300 transition-colors">The Scene</a>
          <a href="#vault" className="hover:text-amber-300 transition-colors">Memory Vault</a>
          <a href="#optics" className="hover:text-amber-300 transition-colors">Optics</a>
          <a href="#narrative" className="hover:text-amber-300 transition-colors">Story</a>
        </div>

        <div className="text-neutral-600">
          Photorealistic 8K Cinematic Capture · 50mm Prime Lens
        </div>

      </div>
    </footer>
  );
}
