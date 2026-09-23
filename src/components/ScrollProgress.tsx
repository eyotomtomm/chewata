/** Pure-CSS scroll indicator. Browsers without scroll timelines just see a flat bar. */
export function ScrollProgress() {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5">
      <div className="scroll-progress h-full origin-left bg-gradient-to-r from-flame via-volt to-aqua" />
    </div>
  );
}
