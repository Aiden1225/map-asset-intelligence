// maic-dashboard/src/app/page.tsx
'use client'

import { ConnectKitButton } from "connectkit";
import { useAccount, useChainId } from "wagmi";

export default function TestPage() {
  const { address, isConnected, isConnecting } = useAccount();
  const chainId = useChainId();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0f172a] text-white p-10">
      <div className="flex flex-col items-center gap-10">
        {/* MAIC V26 Brand Identity */}
        <h1 className="text-5xl font-extrabold text-blue-500 tracking-tighter">
          MAIC V26 ENGINE ONLINE
        </h1>
        
        <div className="p-10 bg-slate-800 border-2 border-blue-500/30 rounded-3xl shadow-2xl flex flex-col items-center gap-6">
          <p className="text-slate-400 font-mono text-center">
            Zero-PII Authentication Test <br/>
           
          </p>
          
          <ConnectKitButton />
          
          <div className="mt-4 p-4 bg-slate-900/50 rounded-xl w-full border border-slate-700">
            <p className="text-sm">Status: <span className="text-green-400">
              {isConnected ? "Connected ✅" : isConnecting ? "Connecting..." : "Disconnected ❌"}
            </span></p>
            {isConnected && (
              <p className="text-xs text-blue-300 mt-2 font-mono truncate w-64">
                Address: {address}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}