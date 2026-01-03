# MAP Asset Intelligence Center (MAIC, pronounced Make)

> **The Unified Intelligence Hub for Bitcoin Runes, Ordinals, and MAP Protocol Ecosystems.**

MAIC is a professional-grade, non-custodial asset intelligence dashboard designed to solve the problem of asset fragmentation in the multi-chain era. It provides a high-performance, **Zero-PII** environment for tracking BTC (Native, Runes, Ordinals) and EVM assets, with a focus on operational safety and audit-ready data.

---

## 🚀 Key Pillars of MAIC

### 1. Privacy-First Identity (Zero-PII)
* **Wallet-Native Authentication:** Implementation of **Sign-in with Wallet (SIWE/SIWB)** to eliminate the need for traditional emails or social logins.
* **Stateless Security:** Cryptographically secure authentication ensures that no personally identifiable information (PII) is collected or stored.

### 2. Progressive Intelligence Engine
* **Streaming UI:** Sequentially renders individual asset cards as multi-chain RPC data arrives, significantly reducing perceived latency.
* **BTC Unified Support:** Native indexing for Bitcoin Ordinals and **Runes (UTXO-based OP_RETURN)** alongside standard EVM tokens.

### 3. Error-Free Operational UX
* **Visual ID System:** Assigns unique color-coding (🔵, 🟡, 🟢) and aliases to bundled wallets to prevent address confusion across all execution UIs.
* **Same-Wallet Default:** Automatically sets destination addresses to match source addresses in cross-chain transfers, mitigating "copy-paste" risks.

### 4. Audit-Ready Compliance
* **Internal Move Recognition:** Automatically identifies and tags "Self-Transfers" between bundled wallets to refine PnL and tax reporting.
* **Professional Export:** Generates one-click CSV/Excel reports for tax and audit proofing.

---

## 🛠 Technical Architecture

* **Frontend Framework:** Next.js 14 (App Router) & TypeScript.
* **Infrastructure:** Vercel Edge Runtime for global low-latency data delivery.
* **Identity Layer:** EIP-4361 (SIWE) and SIWB for decentralized, non-custodial session management.
* **Core Protocols:** MAP Protocol Light Client (Bridging), 1inch (Liquidity), and Native BTC Indexers.

---

## 🗺 Phase 1 Roadmap (Grant Scope)

| Milestone | Phase | Key Deliverables |
| :--- | :--- | :--- |
| **M0** | **Setup** | Infrastructure scaffolding, Technical Requirements Specification (TRS) finalization, and GitHub setup. |
| **M1** | **Core** | SIWE/SIWB Auth Module, Streaming UI Engine, and Global Disconnect functionality. |
| **M2** | **Exchange** | Smart Exchange (Pre-filling), Bridge Logic, and NFT Teleport UI implementation. |
| **M3** | **Bitcoin** | **BTC Ordinals/Runes Integration**, PnL Analytics engine, and Security Audit Readiness. |
| **M4** | **History** | Integrated Timeline, **Internal Move Detection**, and Professional Tax Export Engine. |

---

## 🔍 Validation: User Scenarios

### Scenario A: Secure & Private Onboarding
Users authenticate via cryptographic wallet signature only. The system aggregates multiple wallets (MetaMask, OKX, UniSat) and assigns a **Visual ID (Color/Alias)** to ensure distinct tracking across the dashboard.

### Scenario B: Error-Free Cross-Chain Swap
When a user initiates a swap from `🔵 Main-Wallet` on Base to Ethereum, the system pre-fills the source and defaults the recipient to the same `🔵 Main-Wallet` address. The **MAP Protocol Bridge** is automatically triggered if cross-chain movement is detected.

### Scenario C: Tax & Audit Compliance
The Intelligence Engine automatically detects a transfer from the `🔵 Main` to the `🟡 Airdrop` wallet. It tags the transaction as a **"Self-Transfer"** and excludes it from taxable outflows in the generated CSV report.

---

## 📄 Funding & Audit Policy
* **Grant Request:** $50,000 USD (Dedicated for Phase 1 Development).
* **Audit Sponsorship:** Security Audit costs are requested as a separate sponsorship, to be paid directly by the Foundation to a third-party auditor.

---
Copyright © 2026 MAIC Team. Built for the MAP Protocol Ecosystem.