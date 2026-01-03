# [PRD] MAP Asset Intelligence Center (MAIC)
**Version:** 1.0 (Phase 1 Focused)  
**Status:** Final for Grant Submission  
**Lead Architect:** [Your Name]

---

## 1. Product Overview
MAIC is a professional-grade, non-custodial asset intelligence dashboard designed to solve the problem of asset fragmentation across the Bitcoin (Ordinals/Runes) and MAP Protocol ecosystems. It provides a unified interface for tracking, analyzing, and moving assets with high security and zero-PII (Personally Identifiable Information) risk.

## 2. Goals (Phase 1 Scope)
* **Consolidation:** Aggregate diversified assets including Tokens, NFTs, and BTC Ordinals/Runes across multiple wallets into a single streaming dashboard.
* **Safety & Privacy:** Implement **SIWE/SIWB** for zero-PII authentication and reduce operational risk via "Same-Wallet" default recipient logic.
* **Intelligence:** Provide automated recognition of internal transfers between bundled wallets and professional-grade data for tax and audit proofing.

## 3. Key Functional Requirements
### 3.1 Privacy-First Wallet Management
* **Wallet-Native Auth (SIWE/SIWB):** Cryptographically secure login using wallet signatures to eliminate data leakage risks associated with traditional OAuth.
* **Multi-Wallet Bundling:** Support simultaneous connection of multiple providers via EIP-6963.
* **Visual ID System:** Instant recognition through unique aliases and color-coding assigned to each bundled wallet.
* **Hybrid Connection Modes:** Full "Signer Mode" for connected wallets and "Watch-Only Mode" via public addresses or BTC xPub/zPub.

### 3.2 Asset Intelligence Engine
* **Progressive Streaming UI:** Sequential rendering of wallet/chain cards as data arrives from RPCs to optimize perceived performance.
* **BTC Unified Support:** Integrated module for concurrent processing of Ordinals (Inscriptions) and **Runes (UTXO-based OP_RETURN)** assets.
* **Data Refinement:** Automatic detection of "Internal Moves" between a user's bundled wallets to ensure accurate portfolio analysis.

### 3.3 Smart Exchange & NFT Teleport
* **Context-Aware Pre-filling:** Automated selection of the source wallet, asset, and chain when an action is initiated from a specific asset card.
* **Deterministic Receiving:** Default destination set to the user's same-wallet address on the target chain to prevent input errors.
* **NFT Teleport:** Cross-chain NFT bridging utilizing MAP Protocol’s Light Client technology with a 3-step visual progress tracker.

### 3.4 History & Tax Proof
* **Unified Timeline:** A single, searchable history of transactions aggregated across all connected and watch-only wallets.
* **Export for Audit:** One-click CSV/Excel export for cost-basis management and official tax reporting.

## 4. Execution Roadmap (Milestones 0-4)
* **Milestone 0:** Infrastructure scaffolding, TRS finalization, and GitHub setup.
* **Milestone 1:** SIWE Auth module, Progressive UI engine, and Global Disconnect functionality.
* **Milestone 2:** Smart Exchange integration and NFT Teleport bridging UI implementation.
* **Milestone 3:** **BTC Ordinals/Runes Unified Indexing** and security audit readiness (Code Freeze).
* **Milestone 4:** Unified Timeline enhancement and **Tax Data (Excel/CSV) Export** engine.