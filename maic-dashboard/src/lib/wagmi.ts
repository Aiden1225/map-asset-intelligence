// maic-dashboard/src/lib/wagmi.ts
import { http, createConfig } from 'wagmi'
import { mainnet, base, polygon } from 'wagmi/chains'
import { getDefaultConfig } from 'connectkit'

// V26: MAP Protocol Chain Definition
export const mapo = {
  id: 22776,
  name: 'MAP Protocol',
  nativeCurrency: { name: 'MAPO', symbol: 'MAPO', decimals: 18 },
  rpcUrls: { default: { http: ['https://rpc.maplabs.io'] } },
  blockExplorers: { default: { name: 'MAPO Scan', url: 'https://maposcan.io' } },
}

// Smart Exchange & Multi-chain Configuration
export const config = createConfig(
  getDefaultConfig({
    // Support for The 3 Pillars (Chains)
    chains: [mainnet, base, polygon, mapo],
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
      [polygon.id]: http(),
      [mapo.id]: http(),
    },
    // Zero-PII Authentication Setup
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
    appName: "MAP Asset Intelligence Center",
  }),
)