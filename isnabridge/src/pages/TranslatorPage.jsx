import React, { useState } from "react";

export default function TranslatorPage() {
    const [selectedLang, setSelectedLang] = useState("Hindi");
    const [translatedText, setTranslatedText] = useState("नमस्ते");
    const [meaning, setMeaning] = useState('"Namaste" (Hello / Greetings)');
    const [voiceSpeed, setVoiceSpeed] = useState(50);
    const [volume, setVolume] = useState(70);
    const [cameraActive, setCameraActive] = useState(true);
    const [recentLogs, setRecentLogs] = useState([
        { time: "12:34 PM", text: "Need Help (सहायता)", status: "Spoken" },
        { time: "12:33 PM", text: "Need Water (पानी चाहिए)", status: "Spoken" },
    ]);

    const languages = [
        { name: "Hindi", code: "hi", label: "हिंदी" },
        { name: "Tamil", code: "ta", label: "தமிழ்" },
        { name: "Telugu", code: "te", label: "తెలుగు" },
        { name: "Marathi", code: "mr", label: "मराठी" },
        { name: "Bengali", code: "bn", label: "বাংলা" },
        { name: "Kannada", code: "kn", label: "ಕನ್ನಡ" },
    ];

    return (
        <main className="min-h-screen bg-[#0a0f1f] text-white py-8">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold">Live Sign Language Camera Translator</h1>
                    <p className="text-sm text-slate-400 mt-2">
                        Allow camera access, select your preferred regional dialect, and perform gestures.
                    </p>
                </header>

                <div className="grid grid-cols-2 gap-6">
                    {/* LEFT PANEL - CAMERA INPUT */}
                    <section className="rounded-lg border border-emerald-500/50 bg-slate-900/30 p-6 flex flex-col">
                        {/* Header with Badge */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                                <h2 className="text-lg font-semibold">Live Sign Language Camera Translator</h2>
                                <span className="text-xs px-2 py-1 bg-emerald-500 text-black font-semibold rounded-full">Ready</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs text-slate-400 mb-4">
                            Allow camera access, select your preferred regional dialect, and perform gestures.
                        </p>

                        {/* Camera Preview */}
                        <div className="relative bg-gradient-to-br from-slate-300 to-slate-200 rounded-lg overflow-hidden mb-4 flex-grow">
                            {/* Checkerboard pattern */}
                            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
                                {Array.from({ length: 48 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`border border-slate-300 ${(Math.floor(i / 8) + (i % 8)) % 2 === 0 ? "bg-slate-200" : "bg-slate-300"
                                            }`}
                                    ></div>
                                ))}
                            </div>

                            {/* Top Badges */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                                <div className="flex items-center gap-2 bg-slate-700/90 px-3 py-2 rounded-lg text-xs font-semibold">
                                    ✓ AI Tracking Enabled — Hand Detected
                                </div>
                                <div className="flex items-center gap-2 bg-emerald-500 text-black px-3 py-2 rounded-lg text-xs font-semibold">
                                    Accuracy: 98.4%
                                </div>
                            </div>

                            {/* Bottom Badges */}
                            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                                <div className="flex items-center gap-2 bg-slate-700/90 px-3 py-2 rounded-lg text-xs font-semibold">
                                    👋 Gesture: GREETING (NAMASTE)
                                </div>
                                <div className="bg-slate-700/90 px-3 py-2 rounded-lg text-xs font-semibold">
                                    Confidence: High
                                </div>
                            </div>
                        </div>

                        {/* Camera Info */}
                        <div className="flex items-center gap-2 mb-4 text-sm">
                            <span className="text-emerald-400">📹</span>
                            <span className="text-slate-300">USB Web Camera</span>
                            <span className="text-xs text-slate-500">High definition (1280x720)</span>
                        </div>

                        {/* Control Buttons */}
                        <div className="flex items-center gap-3 mb-4">
                            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">
                                <span className="text-lg">📷</span>
                            </button>
                            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">
                                <span className="text-lg">🔇</span>
                            </button>
                            <button className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition">
                                <span className="text-lg">🔄</span>
                            </button>
                            <button
                                onClick={() => setCameraActive(false)}
                                className="ml-auto px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition text-sm"
                            >
                                Stop Translation
                            </button>
                        </div>

                        {/* Help Tip */}
                        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-xs text-slate-300">
                            <div className="flex gap-2">
                                <span className="text-emerald-400 flex-shrink-0">ℹ️</span>
                                <div>
                                    <div className="font-semibold text-slate-200 mb-1">Not recognizing your gesture?</div>
                                    <div>Try moving further back until your entire upper body is in view. Avoid bright background windows that make your silhouette dark.</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* RIGHT PANEL - LANGUAGE & TRANSLATION OUTPUT */}
                    <section className="rounded-lg border border-slate-700 bg-slate-900/30 p-6">
                        {/* Language Selection Header */}
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                            <h2 className="text-lg font-semibold">1. Select Indian Output Language</h2>
                        </div>

                        {/* Language Buttons Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => setSelectedLang(lang.name)}
                                    className={`px-4 py-3 rounded-lg border-2 transition text-center ${selectedLang === lang.name
                                            ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                                            : "border-slate-600 bg-slate-800/50 text-slate-300 hover:border-emerald-400/50"
                                        }`}
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <span className="text-sm">{lang.label}</span>
                                        <span className="text-xs text-slate-400">{lang.name}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Translation Output Box */}
                        <div className="rounded-lg border border-emerald-500/50 bg-slate-800/50 p-6 mb-6">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold">📝</span>
                                    <span className="text-sm text-emerald-400 font-semibold">LIVE TRANSLATION OUTPUT</span>
                                </div>
                            </div>

                            <div className="text-center mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs text-slate-400">🎙️</span>
                                    <span className="text-sm text-slate-400">Translated to {selectedLang} ({languages.find(l => l.name === selectedLang)?.label})</span>
                                </div>
                                <h3 className="text-5xl font-bold my-4 text-emerald-300">{translatedText}</h3>
                                <p className="text-slate-300 italic text-sm">{meaning}</p>
                            </div>

                            {/* Play Button */}
                            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-lg mb-4 transition">
                                ▶️ Play Voice Out Loud
                            </button>

                            {/* Sliders */}
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs text-slate-300 font-semibold">Voice Speed: Normal</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={voiceSpeed}
                                        onChange={(e) => setVoiceSpeed(e.target.value)}
                                        className="w-full mt-2 accent-emerald-500 cursor-pointer"
                                    />
                                </div>
                                <div>
                                    <label className="text-xs text-slate-300 font-semibold">Volume: Loud</label>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={volume}
                                        onChange={(e) => setVolume(e.target.value)}
                                        className="w-full mt-2 accent-emerald-500 cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Recent Translation Log */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-semibold uppercase">Recent Translation Log</h3>
                                <button className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold">Clear Log</button>
                            </div>
                            <div className="space-y-2">
                                {recentLogs.map((log, idx) => (
                                    <div key={idx} className="flex items-center justify-between py-2 px-3 bg-slate-800/50 rounded border border-slate-700 text-sm">
                                        <div>
                                            <div className="text-slate-400 text-xs">{log.time}</div>
                                            <div className="text-slate-200">{log.text}</div>
                                        </div>
                                        <span className="text-emerald-400 text-xs font-semibold">{log.status}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
    </main >
  );
}
