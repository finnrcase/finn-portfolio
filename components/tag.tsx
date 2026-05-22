export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-line bg-panel-muted px-2 py-1 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
