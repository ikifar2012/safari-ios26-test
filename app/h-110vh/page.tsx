"use client";

export default function HSvh() {
    return (
        <main className="h-[110vh] bg-pink-500 flex items-center justify-center p-4">
            <div className="text-center">
                <div className="font-bold text-white text-2xl">Tailwind Class: h-[110vh]</div>
                <pre className="mt-4 inline-block text-left bg-black/30 text-white/90 rounded px-4 py-3 font-mono text-sm leading-relaxed whitespace-pre" aria-label="CSS for h-svh utility">
                    {`.h-[110vh] { /* arbitrary value via Tailwind */\n  height: 110vh;\n}`}
                </pre>
            </div>
        </main>
    );
}
