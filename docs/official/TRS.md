# [TRS] MAIC System Architecture & Technical Specs
**Version:** 1.0  
**Focus:** Phase 1 Infrastructure  

---

## 1. Technology Stack
* **Frontend:** Next.js 14 (App Router) with TypeScript for robust type safety.
* **State Management:** TanStack Query (React Query) for managing high-frequency multi-chain RPC polling and streaming.
* **Blockchain Interfaces:** Ethers.js, Viem, and specialized BTC indexers for Runes and Ordinals.
* **Infrastructure:** **Vercel Serverless & Edge Runtime** to eliminate AWS overhead and minimize latency.

## 2. Core Technical Implementations
### 2.1 Authentication & Privacy
* **SIWE Protocol:** Implementation of EIP-4361 for stateless, cryptographically secure authentication.
* **Data Isolation:** Decoupled storage architecture where user settings (Private DB) and on-chain asset data are stored separately to maximize privacy.

### 2.2 BTC Intelligence
* **xPub Derivation:** BIP32/44 compliant address derivation engine to monitor and aggregate balances across entire Hierarchical Deterministic (HD) paths.
* **Runes Indexer:** Custom parsing logic for UTXO-based OP_RETURN data to track real-time Rune protocol assets.

### 2.3 Smart Execution Logic
* **Contextual Pre-filling:** Logic to capture and pass state (Wallet, Asset, Chain) from the dashboard to the Smart Exchange module.
* **Internal Transfer Recognition:** A cross-referencing algorithm that compares "From/To" addresses with the user's bundled wallet database to categorize transfers as 'Internal'.

## 3. Security & Operational Policy
* **Non-Custodial Architecture:** Servers never process or store private keys; all transaction signing occurs client-side via injected providers.
* **Audit Readiness:** Milestone 3 includes the preparation of comprehensive test suites and technical documentation for third-party security auditors.
* **Global Disconnect:** Immediate purging of all local session data and wallet connections upon logout.

## 4. Post-Phase 1 Expansion (Future Vision)
### 4.1 Intelligence Enhancement
* **Phase 1.1:** Gas/Transfer smart alerts and Telegram integration.
* **Phase 1.2:** Advanced PnL charts and Drag & Drop internal transfer UX.
* **Phase 1.3:** Dust sweep center and Revoke Manager for smart contract approvals.

### 4.2 Ecosystem Expansion
* **Phase 2 (Expansion):** Tracking for RWA (Real World Assets) and Fractional NFTs; marketplace integration.
* **Phase 2 (Compliance):** Optional KYC for institutional users and a dedicated Whale DAO community dashboard.