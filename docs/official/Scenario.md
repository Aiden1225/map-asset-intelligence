Scenario 1: Privacy-First Onboarding & Wallet Bundling
Objective: Securely authenticate without personal data and aggregate multi-chain assets.

Step 1 (Auth): The user enters the "Connect Wallet" screen and selects [ 🔒 Sign-in with Wallet ] to perform a SIWE signature.

Step 2 (Zero-PII): No email or social account is requested, achieving zero-PII risk for the foundation.

Step 3 (Bundling): The user navigates to "Wallet Management" and connects an Ethereum wallet via [ 🦊 Browser Ext. ] and registers a Bitcoin savings account via [ 🔑 Register xPub ].


Step 4 (Visual ID): The user assigns a 🔵 Blue color to the Main wallet and a 🟢 Green color to the Savings wallet for instant recognition.


Verification: The system securely maps these bundles to the wallet signature, and all assets appear on the dashboard with distinct color identifiers.

Scenario 2: Error-Free Cross-Chain Swap (Smart Exchange)
Objective: Execute a cross-chain transfer while preventing "copy-paste" errors.


Step 1 (Trigger): In the "Asset Inventory," the user clicks the [ ⇄ ] (Action) icon next to their 🪙 ETH (Base) balance held in the 🔵 Main-Wallet.


Step 2 (Pre-filling): The "Smart Exchange" window opens with the Source wallet (🔵 Main-Wallet), asset (ETH), and chain (Base) already pre-filled.


Step 3 (Safety Logic): When the user selects USDC (Ethereum) as the destination asset, the "Receive to same wallet" logic automatically sets the recipient address to the user's 🔵 Main-Wallet address.


Step 4 (Execution): The system detects the chain difference, activates "Bridge ON" via MAP Protocol, and the user signs the transaction after visually confirming the matching blue (🔵) identifiers.


Verification: The "Same-Wallet Default" prevents misdirected transfers, and the Light Client bridge ensures trustless execution.

Scenario 3: BTC Runes Tracking & Audit Proofing
Objective: Monitor Bitcoin ecosystem assets and generate clean data for tax compliance.

Step 1 (Streaming): The user views the "Main Dashboard" and watches as the Streaming UI sequentially loads 🧪 RUNES (Native) assets via the live sync engine.


Step 2 (History Filter): The user moves to the "Integrated Timeline" and applies the "3 Pillar Filters" (Wallet: All, Network: BTC, Asset: Runes).


Step 3 (Internal Detection): The user identifies a ➔ MOVE transaction between their 🔵 Main and 🟡 Airdrop wallets. The system automatically tags it as a "Self-Transfer" (Internal Move), ensuring it is not miscounted as a taxable expense.


Step 4 (Compliance): The user clicks [ 📥 Export CSV ] to download a professional report where internal moves are clearly separated from outflows.

Verification: The Intelligence Engine correctly distinguishes between spending and internal rebalancing, providing audit-ready data for Milestone 4.