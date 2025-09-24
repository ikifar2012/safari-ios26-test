"use client";

export default function HAuto() {
    return (
        <main className="h-auto bg-pink-500 flex items-center justify-center p-4">
            <div className="text-center">
                <div className="font-bold text-white text-2xl">Tailwind Class: h-auto</div>
                <pre className="mt-4 inline-block text-left bg-black/30 text-white/90 rounded px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre" aria-label="CSS for h-auto utility">
                    {`.h-auto {\n  height: auto;\n}`}
                </pre>
            </div>
        </main>
    );
}
