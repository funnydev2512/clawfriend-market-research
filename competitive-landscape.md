# Deliverable 1: Competitive Landscape

> **Trọng số:** 25% · **Snapshot:** 24/02/2026  
> **Phạm vi:** Web3 AI agent marketplace / skill registry / plugin ecosystem  
> **Nguyên tắc:** Chỉ dùng số liệu có nguồn truy vết được. Phân tách rõ đối thủ trực tiếp / cận biên / benchmark gián tiếp.

---

## Tổng quan đối thủ

| # | Tên | Link | Chain / Ecosystem | Số liệu chính | Cách monetize |
|---|------|------|-------------------|----------------|---------------|
| 1 | Virtuals Protocol | https://app.virtuals.io | Base, Ethereum, Solana | Market cap $381.9M · 24h volume $57.98M · Cumulative fees $69.03M | Protocol fee trên mỗi giao dịch agent token |
| 2 | Olas (Mech Marketplace) | https://olas.network/mech-marketplace | Gnosis, Ethereum, Base, multi-chain | 3,158 agents deployed · 11M+ A2A tx · $88.5K turnover | Fee trên marketplace + OLAS token economy |
| 3 | Fetch.ai Agentverse | https://agentverse.ai | Fetch.ai (ASI Alliance) | uAgents repo: 1,548 GitHub stars · 348 forks | Ecosystem token + service integration |
| 4 | SingularityNET AI Marketplace | https://marketplace.singularitynet.io | Ethereum, Cardano | GitHub org: 186 repos · dev-portal: 129 stars | Thanh toán dịch vụ bằng ASI/FET token |
| 5 | elizaOS Plugin Registry | https://elizaos.ai | Multi-chain (Solana, EVM, TON...) | eliza repo: 17,607 stars · 5.4K forks · 370 contributors | Open-source ecosystem, plugin distribution |
| 6 | ClawHub (OpenClaw) | https://clawhub.ai | Không gắn chain (local-first) | OpenClaw repo: 224,308 stars · 42.9K forks · 5,700+ skills | Miễn phí, community-driven |
| 7 | friend.tech *(benchmark gián tiếp)* | https://www.friend.tech | Base | 913K+ unique traders · 343K+ ETH volume · 17,280 ETH protocol fees | Trading fee trên social keys |

---

## Phân tích chi tiết từng đối thủ

### 1. Virtuals Protocol

- **Link:** https://app.virtuals.io · [DefiLlama](https://defillama.com/protocol/virtuals-protocol)
- **Mô tả:** Nền tảng on-chain AI agent economy nơi user tạo, tokenize, và trade AI agent. Mỗi agent có token riêng trên bonding curve.
- **Chain:** Base (chính), Ethereum, Solana
- **Số liệu thực (nguồn: DefiLlama, 24/02/2026):**
  - Market cap: **$381.9M**
  - 24h token volume: **$57.98M** (CEX $36.78M + DEX $21.69M)
  - Cumulative protocol fees: **$69.03M**
  - Annualized fees: **$17.22M**
  - Q1 2026 revenue (tính đến nay): **$2.23M**
- **Cách monetize:** Protocol fee trên mỗi giao dịch token agent + ecosystem token value capture
- **Điểm mạnh:**
  - Thanh khoản và sự chú ý thị trường rất cao — narrative "on-chain AI agents" đã được thị trường định giá rõ ràng
  - Cumulative fees $69M chứng minh revenue model hoạt động thật
  - Multi-chain (Base + Ethereum + Solana) mở rộng reach
- **Điểm yếu:**
  - Nặng về trading/speculation, không có skill marketplace depth — user mua token agent vì kỳ vọng giá, không phải vì utility cụ thể
  - Skill/workflow/prompt chưa phải core feature
  - Revenue giảm rõ: Q4 2025 $8.89M → Q1 2026 (đến nay) chỉ $2.23M, cho thấy phụ thuộc vào market sentiment
- **Tại sao user chọn họ (hoặc không chọn)?**
  - Chọn: vì thanh khoản cao, dễ trade, narrative mạnh → phù hợp trader/speculator
  - Không chọn: vì thiếu utility thực tế — agent token có giá nhưng chưa rõ agent làm gì cho holder
- **ClawFriend học được gì:** Cần financial primitive sớm để thu hút trader; nhưng phải gắn utility thật (skill usage → share demand) để tránh phụ thuộc speculation cycle

---

### 2. Olas (Pearl + Mech Marketplace)

- **Link:** https://olas.network · [Mech Marketplace](https://olas.network/mech-marketplace) · [Data](https://olas.network/data)
- **Mô tả:** Hệ sinh thái AI agent economy gồm Pearl ("agent app-store" cho end user) và Mech Marketplace ("agent bazaar" cho agent-to-agent hiring). Agent có thể thuê agent khác để thực hiện task.
- **Chain:** Gnosis (chính), Ethereum, Base, multi-chain
- **Số liệu thực (nguồn: olas.network homepage + /mech-marketplace, 24/02/2026):**
  - Agents deployed: **3,158**
  - Daily Active Agents (DAAs): **424**
  - Tổng giao dịch: **14.4M+ transactions**
  - A2A transactions: **11,018,592**
  - Marketplace turnover: **$88,584**
  - OLAS staked: **3,164,672 OLAS**
- **Cách monetize:** Fee trên Mech Marketplace + OLAS token staking economy
- **Điểm mạnh:**
  - Model agent-to-agent (A2A) rõ ràng và đã có data chứng minh (11M+ A2A tx)
  - Transparent on-chain — mọi metric hiển thị public trên trang chủ
  - Pearl cho end-user + Mech cho developer = 2 mặt của cùng 1 ecosystem
  - Đã có case study thực tế: Olas agents chiếm >75% Safe transactions trên Gnosis Chain
- **Điểm yếu:**
  - Turnover $88K rất nhỏ so với quy mô ecosystem — chứng tỏ marketplace monetization chưa scale
  - UX phức tạp: user phải hiểu staking, mech hiring, agent configuration → barrier cao cho người mới
  - Focus Gnosis Chain chính → community nhỏ hơn so với Base/Solana/BSC
- **Tại sao user chọn họ (hoặc không chọn)?**
  - Chọn: nếu cần agent thuê agent khác làm việc (A2A) — use case duy nhất Olas mạnh nhất
  - Không chọn: nếu là retail user muốn đơn giản browse/install skill → quá phức tạp
- **ClawFriend học được gì:** Public data dashboard từ ngày đầu. Nhưng cần giữ UX đơn giản hơn Olas nhiều — retail user không cần hiểu A2A protocol để dùng skill.

---

### 3. Fetch.ai Agentverse

- **Link:** https://agentverse.ai · [Docs](https://docs.agentverse.ai)
- **Mô tả:** Marketplace discovery và growth platform cho AI agents trong hệ Fetch.ai. Agents đăng ký vào Almanac (smart contract) và được index để discover qua marketplace.
- **Chain:** Fetch.ai (ASI Alliance)
- **Số liệu thực (nguồn: GitHub + Agentverse docs, 24/02/2026):**
  - uAgents framework: **1,548 GitHub stars** · **348 forks** (nguồn: github.com/fetchai/uAgents)
  - Marketplace hỗ trợ filter agent theo interaction tier lên đến `has:interactions>100m`
  - Hỗ trợ 5 loại agent: Hosted, Local, Mailbox, Proxy, Custom
  - Tích hợp ASI:One (Web3-native LLM) để user chat trực tiếp với agent từ marketplace
- **Cách monetize:** Ecosystem token + agent service monetization + ASI:One integration
- **Điểm mạnh:**
  - Discovery stack bài bản: Almanac indexing + search/filter + ranking theo interaction
  - Hỗ trợ đa dạng deployment mode — không bắt buộc hosted
  - ASI:One integration = user có thể "chat with agent" trực tiếp từ marketplace → UX tốt
  - SEO optimization cho agent (README guidelines, ranking system)
- **Điểm yếu:**
  - Public user count / GMV không được công bố rõ ràng
  - Gắn chặt vào hệ Fetch.ai → giới hạn cross-chain adoption
  - Không có financial layer (bonding curve, shares) → thiếu economic incentive cho early believers
- **Tại sao user chọn họ (hoặc không chọn)?**
  - Chọn: developer muốn deploy agent với discovery + interoperability sẵn có
  - Không chọn: nếu muốn economic layer (trade shares, holder-gated access) → không có
- **ClawFriend học được gì:** Search quality và metadata quality là bắt buộc. Cần ranking system dựa trên usage signal thực (interactions, repeat usage) chứ không chỉ like count.

---

### 4. SingularityNET AI Marketplace

- **Link:** https://marketplace.singularitynet.io · [Dev docs](https://dev.singularitynet.io/docs/products/AIMarketplace/)
- **Mô tả:** Marketplace phi tập trung cho AI services — developer publish AI service (inference, training), user trả phí sử dụng qua token. Hoạt động từ 2017, một trong những dự án AI + blockchain lâu đời nhất.
- **Chain:** Ethereum, Cardano
- **Số liệu thực (nguồn: GitHub, 24/02/2026):**
  - SingularityNET GitHub org: **186 public repos** · **423 followers** (nguồn: github.com/singnet)
  - dev-portal repo: **129 stars**
  - snet-daemon repo: **52 stars**
  - Hầu hết service có **free demo API calls** để test trước khi mua
  - Hỗ trợ thanh toán bằng ASI token hoặc fiat qua PayPal
- **Cách monetize:** Thanh toán dịch vụ AI bằng ASI/FET token; service provider tự đặt giá
- **Điểm mạnh:**
  - Lịch sử lâu đời trong decentralized AI marketplace — uy tín thương hiệu
  - Architecture payment/compliance rõ ràng (MetaMask + PayPal)
  - Đa dạng domain AI: image, speech, text, time-series, bio-AI, network analysis
  - Free demo → giảm friction cho user thử nghiệm
- **Điểm yếu:**
  - Trọng tâm là API service marketplace (gọi model AI) — khác hoàn toàn với autonomous agent economy
  - Không có social layer, không có share trading, không có bonding curve
  - GitHub traction tương đối thấp so với các framework mới (129 stars dev-portal vs 17K+ elizaOS)
- **Tại sao user chọn họ (hoặc không chọn)?**
  - Chọn: cần dùng AI service cụ thể (face detection, NLP...) và muốn pay-per-use
  - Không chọn: nếu muốn deploy autonomous agent có social identity và tradable shares
- **ClawFriend học được gì:** Free demo/trial cho skill là cách giảm barrier tốt. Payment abstraction (crypto + fiat) mở rộng user base.

---

### 5. elizaOS Plugin Registry

- **Link:** https://elizaos.ai · [Registry](https://github.com/elizaos-plugins/registry) · [Docs](https://docs.elizaos.ai/plugin-registry/registry)
- **Mô tả:** Framework multi-agent AI development với plugin registry trung tâm. Mọi thứ là plugin: clients, adapters, actions, model providers. Registry là nơi community đóng góp và distribute plugin.
- **Chain:** Multi-chain (plugin cho Solana, EVM, TON, Aptos, Sui, Cardano...)
- **Số liệu thực (nguồn: GitHub, 24/02/2026):**
  - eliza core repo: **17,607 stars** · **5,400+ forks** · **370 contributors** (nguồn: github.com/ai16z/eliza)
  - Plugin registry repo: **69 stars** · **158 forks** · **120 contributors**
  - elizaos-plugins org: **341 public repositories**
  - index.json chứa **180+ registered plugins** (đếm từ raw file)
- **Cách monetize:** Open-source ecosystem — giá trị nằm ở distribution, không charge trực tiếp
- **Điểm mạnh:**
  - Cộng đồng developer lớn và active (370 contributors, 5.4K forks)
  - Plugin ecosystem rộng: 180+ plugins cover từ social (Twitter, Discord) đến DeFi (Solana, Binance) đến AI (OpenAI, Anthropic)
  - Architecture rõ ràng, contribution flow chuẩn (PR → auto review → merge → generated registry)
- **Điểm yếu:**
  - Không phải on-chain marketplace native — plugin install qua npm/GitHub, không có on-chain transaction
  - Thiếu bonding curve / capital layer → không có economic incentive cho early supporter
  - Nhiều plugin trong registry có 0 stars, chưa rõ chất lượng
- **Tại sao user chọn họ (hoặc không chọn)?**
  - Chọn: developer muốn build agent nhanh bằng framework có sẵn plugin ecosystem lớn
  - Không chọn: nếu cần marketplace economics (monetize skill, trade shares)
- **ClawFriend học được gì:** Plugin quality standards (metadata, compatibility, testing) rất quan trọng khi scale. Contribution flow phải tự động và có review.

---

### 6. ClawHub (OpenClaw Skill Registry)

- **Link:** https://clawhub.ai · [Docs](https://docs.openclaw.ai/tools/clawhub)
- **Mô tả:** Public skill registry miễn phí cho OpenClaw — personal AI assistant phổ biến nhất thế giới. Skill là folder chứa SKILL.md dạy agent thực hiện task cụ thể. Install qua CLI, không cần code.
- **Chain:** Không gắn chain (local-first, chạy trên device người dùng)
- **Số liệu thực (nguồn: GitHub + OpenClaw docs, 24/02/2026):**
  - OpenClaw repo: **224,308 GitHub stars** · **42,900+ forks** (nguồn: github.com/openclaw/openclaw) — repo tăng trưởng nhanh nhất lịch sử GitHub
  - ClawHub: **5,700+ community skills** · **900+ contributors** · **40–60 skills mới/ngày**
  - 53 official skills + 5,700+ community skills
  - CLI install: `npx clawhub@latest install <skill-name>`
- **Cách monetize:** Hoàn toàn miễn phí, tất cả skills public, open-source
- **Điểm mạnh:**
  - Network effect cực lớn từ OpenClaw (224K stars = user base tiềm năng khổng lồ)
  - Flow cực kỳ smooth: search → install → dùng ngay
  - Semantic search (vector search) — tìm skill bằng ngôn ngữ tự nhiên
  - Moderation system: report, auto-hide, ban
- **Điểm yếu:**
  - Không có holder-gated monetization → creator không có economic incentive rõ ràng
  - Không có share trading economy → thiếu financial layer
  - Security concern lớn: skills có thể chứa malicious code (prompt injection, data exfiltration — Cisco đã phát hiện case thực tế)
  - All skills public → không có premium tier
- **Tại sao user chọn họ (hoặc không chọn)?**
  - Chọn: vì hệ sinh thái OpenClaw quá lớn, skill miễn phí, install nhanh
  - Không chọn: nếu là creator muốn monetize skill hoặc cần exclusive access
- **ClawFriend học được gì:** Flow "search → install → update → publish" phải cực nhanh. Cần security guidelines rõ cho third-party skills. Nhưng ClawFriend thắng ở holder-gated model → creator có lý do economic để publish premium skill.

---

### 7. friend.tech *(Benchmark gián tiếp — KHÔNG phải đối thủ trực tiếp)*

- **Link:** https://www.friend.tech
- **Mô tả:** Social app dùng bonding curve cho profile người thật (KOL, influencer). User mua "keys" của người khác để access chat room riêng. **Không có AI agent, không có skill market.**
- **Chain:** Base
- **Số liệu thực (nguồn: Dune Analytics dashboards, 24/02/2026):**
  - Unique traders: **913,315** (nguồn: dune.com/austin_adams/friendstech-dashboard)
  - All-time ETH volume: **343,401 ETH**
  - Total protocol fees: **17,280 ETH**
  - All-time transactions: **8M–14M** (tùy dashboard query)
- **Tại sao liệt kê ở đây (nhưng KHÔNG xếp đối thủ trực tiếp):**

| Tiêu chí | friend.tech | ClawFriend |
|---|---|---|
| Đối tượng | Người thật (KOL, influencer) | AI agents |
| Bonding curve cho | Profile con người | Agent AI autonomous |
| Skill Market | ❌ Không có | ✅ Có |
| Social Stream | Chat room giữa người | Agent tweet/reply/follow |
| Agent economy | ❌ Không | ✅ Core product |

- **Giá trị benchmark:** Chứng minh bonding curve + social FOMO có thể tạo volume lớn (913K traders, 343K ETH). ClawFriend áp dụng cùng cơ chế nhưng cho **AI agents có utility thật** (skills) thay vì chỉ social chat.
- **Lưu ý khi present:** Nếu BGK hỏi "friend.tech đâu có AI agent, sao xếp đối thủ?" → trả lời: "Em xếp riêng mục benchmark gián tiếp. Nó chỉ validate cơ chế bonding curve hoạt động, không phải cùng segment."

---

## So sánh trực tiếp (Side-by-Side)

| Feature | ClawFriend | Virtuals | Olas | Agentverse | SingularityNET | elizaOS | ClawHub |
|---------|-----------|----------|------|------------|----------------|---------|---------|
| **Chain** | BSC | Base/ETH/SOL | Gnosis/ETH | Fetch.ai | ETH/Cardano | Multi-chain | Không chain |
| **Bonding Curve** | ✅ Quadratic | ✅ Token launch | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Skill Market** | ✅ Core | ❌ Không phải core | ⚠️ Mech services | ⚠️ Agent discovery | ✅ AI services | ✅ Plugin registry | ✅ Skill registry |
| **Social Layer** | ✅ Agent tweets | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Holder-gated content** | ✅ Private skills | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Creator fee** | ✅ 5%/trade | ✅ Có | ✅ Marketplace fee | ❌ | ✅ Service fee | ❌ | ❌ |
| **Free tier** | ✅ Public skills | ❌ | ❌ | ✅ | ✅ Free demo | ✅ Toàn bộ | ✅ Toàn bộ |
| **On-chain identity** | ✅ BSC wallet | ✅ | ✅ | ✅ Almanac | ⚠️ Blockchain service | ❌ | ❌ |

**Insight từ bảng so sánh:**
- **Không ai** có đồng thời cả 3: bonding curve + skill market + social layer trong 1 product.
- Virtuals mạnh capital layer nhưng thiếu skill depth. Olas mạnh A2A nhưng thiếu social + retail UX. ClawHub mạnh skill distribution nhưng thiếu monetization. → ClawFriend là **platform duy nhất kết hợp cả 3 lớp**.

---

## Phân tích thị trường tổng thể

### Thị trường đang ở giai đoạn nào?

**Giai đoạn: Early Growth (đang tăng trưởng, chưa mature).**

Lý do:
- Các mô hình riêng lẻ đã được validate: agent infrastructure (Agentverse), agent tokenization (Virtuals), A2A economy (Olas), plugin ecosystem (elizaOS/OpenClaw), social finance (friend.tech).
- Nhưng **chưa có bên nào chiếm ưu thế tuyệt đối** trên full stack "agent identity + social + skill commerce + capital layer".
- Revenue vẫn nhỏ: Olas turnover $88K, SingularityNET không công bố GMV. Virtuals $69M cumulative fees là lớn nhất nhưng đang giảm tốc.

### Ai đang dẫn đầu?

| Dimension | Leader | Số liệu |
|---|---|---|
| Thanh khoản / market attention | Virtuals Protocol | $381.9M market cap, $69M cumulative fees |
| Agent-to-agent marketplace | Olas (Mech) | 11M+ A2A tx, 3,158 agents |
| Developer plugin ecosystem | elizaOS | 17,607 stars, 180+ plugins |
| Skill distribution scale | ClawHub (OpenClaw) | 224K stars, 5,700+ skills |

### Có chỗ cho người mới không?

**Có**, vì:
1. **Chưa ai kết hợp cả 3 lớp** (social + skill + capital) trong 1 product liền mạch
2. **Gap lớn nhất thị trường:** Skill marketplace có utility thật + economic incentive cho creator thông qua holder-gated model → chưa ai giải quyết đúng
3. **BSC ecosystem** chưa có player lớn nào trong agentic economy (Virtuals trên Base, Olas trên Gnosis)

---

## Quy mô thị trường (TAM/SAM/SOM)

| Tầng | Ước tính | Cách tính | Nguồn |
|------|----------|-----------|-------|
| **TAM** (Total Addressable Market) | **$47.1 tỷ** | AI agent market toàn cầu năm 2030 (CAGR 44.8% từ $5.1B năm 2024) | [MarketsandMarkets AI Agent Report 2024](https://www.marketsandmarkets.com/Market-Reports/ai-agent-market-70082752.html) |
| **SAM** (Serviceable) | **~$4–6 tỷ** | Web3/crypto segment của AI agent economy: tổng TVL yield protocols ($4.4B) + AI agent token market caps ($1.5B+) + on-chain marketplace volume | DefiLlama + CoinGecko AI sector |
| **SOM** (Obtainable Year 1) | **~$500K–$2M** | 5,000 active users × $100–$400 lifetime share spending. Conservative: 500–800 signups tháng 1 → scale qua organic + paid → 5K active users cuối năm 1 | Internal estimate dựa trên bonding curve math + distribution plan |

**Lưu ý:** TAM $47.1B bao gồm cả enterprise AI agent (SAP, Salesforce). Phần Web3-native chỉ chiếm ~10–15% hiện tại nhưng đang tăng nhanh nhất (Virtuals đi từ 0 → $381M market cap trong <12 tháng). ClawFriend nhắm vào crypto-native segment trước, mở rộng sau.

---

## Moat Analysis — Tại sao đối thủ không copy được trong 3–6 tháng?

BGK chắc chắn hỏi: *"Virtuals có $381M market cap và team lớn — tại sao họ không clone skill marketplace + holder-gated model?"*

| Moat | Giải thích | Thời gian đối thủ cần để replicate |
|------|------------|-------------------------------------|
| **1. Network effect 2 mặt (creator + user)** | Skill marketplace có giá trị khi có NHIỀU skills + NHIỀU users. Virtuals muốn copy phải đồng thời attract cả 2 bên — cold start problem. ClawFriend giải quyết bằng OpenClaw partnership (5,700+ skills sẵn có) + quest campaign (onboard users) — đối thủ không có access vào ecosystem OpenClaw 224K stars. | 6–12 tháng |
| **2. BSC first-mover** | Chưa có agentic economy platform nào trên BSC (Virtuals = Base, Olas = Gnosis). BSC có 1 tỷ+ unique addresses, gas fee thấp, hệ sinh thái DeFi lớn (PancakeSwap, Venus). Ai đến trước BSC = capture ecosystem support (BNB Chain grants, hackathon listing, ecosystem page). | 3–6 tháng (deploy + grow community) |
| **3. Holder-gated model gắn chặt utility** | Virtuals là pure speculation — token agent tăng/giảm theo market sentiment. ClawFriend shares gắn với utility thật (access premium skill). Khi user đã hold shares để dùng skill, switching cost cao: bán shares = mất access + chịu 10% round-trip fee. Đây là lock-in mechanism mà pure trading platform không có. | Cần redesign entire economic model |
| **4. Community lock-in qua social layer** | Agent trên ClawFriend build audience (followers, tweets, replies). Data social graph + reputation KHÔNG portable sang platform khác. Creator đã có audience sẽ không migrate vì mất toàn bộ social capital. | Impossible to replicate (user-generated) |
| **5. Compounding data advantage** | Mỗi skill usage, share trade, social interaction tạo data signal. Càng nhiều data → recommendation engine tốt hơn → user discover skill tốt hơn → more engagement. Flywheel này compound theo thời gian — late entrant bắt đầu từ 0 data. | 12+ tháng |

**Thành thật:** Moat mạnh nhất hiện tại là BSC first-mover + OpenClaw ecosystem access. Các moat còn lại (network effect, data advantage) chỉ mạnh khi đã có critical mass user. → **Tháng 1–3 là window quan trọng nhất** để establish presence trước khi đối thủ nhận ra BSC opportunity.

---

## Kết luận & Định vị ClawFriend

### Marketplace của mình khác ở đâu?

ClawFriend là **nền tảng agentic economy duy nhất** kết hợp 3 lớp trong 1 product:
1. **Social identity layer** — Agent tweet/reply/follow, build audience
2. **Skill commerce layer** — Public skills (free) + Private holder-gated skills (premium)
3. **Capital layer** — Bonding-curve shares + creator fee 5% mỗi trade

### Segment mà đối thủ bỏ ngỏ

- **Virtuals** có capital layer nhưng **không có skill utility** → user mua token vì speculate, không vì dùng
- **ClawHub** có skill distribution nhưng **không có monetization** → creator không có incentive economic
- **Olas** có A2A marketplace nhưng **UX quá phức tạp** cho retail user
- **→ Gap:** Skill marketplace có utility thật + economic incentive + simple UX trên BSC

### Lợi thế cạnh tranh cụ thể

1. **Flywheel đo lường được:** `skill usage → holder conversion → share demand → creator fee income → more skills`
2. **Holder-gated model** tạo demand mua shares có utility thật (access premium skill) — khác pure speculation
3. **Social distribution built-in** — skills được phát hiện qua social stream, không cần marketing ngoài
4. **BSC deployment** — gas fee thấp, ecosystem DeFi lớn, chưa có competitor trực tiếp

### ClawFriend đang thua ở đâu (thành thật)

1. **Chưa có public proof metrics** mạnh như đối thủ (fees/GMV/active users) — cần build dashboard sớm
2. **Marketplace chưa có nhiều skill chất lượng** — cold start problem
3. **Brand awareness thấp** so với Virtuals ($381M market cap) hay OpenClaw (224K stars)

---

## Nguồn dữ liệu

| Đối thủ | Nguồn | URL | Ngày truy cập |
|---------|-------|-----|---------------|
| Virtuals Protocol | DefiLlama | https://defillama.com/protocol/virtuals-protocol | 24/02/2026 |
| Olas | Trang chủ Olas | https://olas.network/ | 24/02/2026 |
| Olas Mech | Mech Marketplace page | https://olas.network/mech-marketplace | 24/02/2026 |
| Fetch.ai Agentverse | Agentverse docs | https://docs.agentverse.ai/documentation/getting-started/agentverse-marketplace | 24/02/2026 |
| Fetch.ai uAgents | GitHub | https://github.com/fetchai/uAgents | 24/02/2026 |
| SingularityNET | Dev docs | https://dev.singularitynet.io/docs/products/AIMarketplace/ | 24/02/2026 |
| SingularityNET | GitHub org | https://github.com/singnet | 24/02/2026 |
| elizaOS | GitHub | https://github.com/ai16z/eliza | 24/02/2026 |
| elizaOS Registry | GitHub + raw index | https://github.com/elizaos-plugins/registry | 24/02/2026 |
| ClawHub / OpenClaw | Docs + GitHub | https://docs.openclaw.ai/tools/clawhub · https://github.com/openclaw/openclaw | 24/02/2026 |
| friend.tech | Dune Analytics | https://dune.com/cryptokoryo/friendtech · https://dune.com/austin_adams/friendstech-dashboard | 24/02/2026 |

> **Lưu ý:** Các metric on-chain / market cap / volume thay đổi theo thời gian. Đây là snapshot ngày 24/02/2026. Nếu cần anti-hallucination review, nên chụp screenshot metric chính từ mỗi nguồn trước deadline.
