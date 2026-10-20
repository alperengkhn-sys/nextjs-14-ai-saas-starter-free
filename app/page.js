'use client';
import React, { useState } from 'react';

export default function Home() {
  const [credits, setCredits] = useState(250);
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');

  const handleGenerate = () => {
    if (credits <= 0) {
      alert('Kredi tükendi! Tam sürümü Codester üzerinden alabilirsiniz.');
      return;
    }
    setCredits(prev => prev - 10);
    setOutput(`[AI Response Generated for: "${prompt || 'Sample Prompt'}"]\n\n- Model: GPT-4o / Claude 3.5\n- Status: Free Preview Mode\n\nTo unlock backend Prisma DB, Stripe Webhooks, and API routes, get the full code on Codester.`);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#fff', fontFamily: 'sans-serif', padding: '20px' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #27272a', borderRadius: '8px', backgroundColor: '#18181b' }}>
        <div style={{ fontWeight: 'bold', fontSize: '18px' }}>🤖 Next.js 14 AI SaaS (Free Preview)</div>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span style={{ fontSize: '13px', backgroundColor: '#27272a', padding: '6px 12px', borderRadius: '20px', color: '#a1a1aa' }}>
            ⚡ Credits: <strong style={{ color: '#a855f7' }}>{credits}</strong> / 500
          </span>
          <a 
            href="YOUR_CODESTER_LINK_HERE" 
            target="_blank"
            rel="noreferrer"
            style={{ padding: '8px 16px', backgroundColor: '#9333ea', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}
          >
            🛒 Get Full Code ($49)
          </a>
        </div>
      </nav>

      <main style={{ maxWidth: '900px', margin: '40px auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '12px', padding: '24px' }}>
          <h1 style={{ fontSize: '22px', marginBottom: '8px' }}>AI Studio Demo</h1>
          <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '20px' }}>Interactive preview of the AI credit workflow.</p>
          
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input 
              type="text" 
              placeholder="Enter prompt..." 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              style={{ flex: 1, padding: '12px 16px', borderRadius: '6px', border: '1px solid #3f3f46', backgroundColor: '#09090b', color: '#fff', fontSize: '14px' }}
            />
            <button 
              onClick={handleGenerate}
              style={{ padding: '12px 24px', backgroundColor: '#a855f7', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Generate (-10 Credits)
            </button>
          </div>

          {output && (
            <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#09090b', border: '1px solid #3f3f46', borderRadius: '6px', fontSize: '13px', color: '#34d399', whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
              {output}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
