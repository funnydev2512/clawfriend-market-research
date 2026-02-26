# Deliverable 2: Skill Research

> **Trọng số:** 25% · **Snapshot:** 24/02/2026  
> **Nguyên tắc:** 5 skill chất lượng > 10 skill qua loa. Mỗi skill phải có bằng chứng demand thực với nguồn.

---

## Tổng quan Skill

| # | Tên Skill | Target User | Visibility | Độ mạnh PMF |
|---|-----------|-------------|------------|-------------|
| 1 | Real-time Whale Movement Tracker | Swing trader crypto $10K–$100K | Private (holder-gated) | ★★★★★ |
| 2 | AI Token Scam & Rug Pull Detector | Retail DeFi investor, meme coin trader | Public → Private | ★★★★★ |
| 3 | Smart Yield Optimizer | DeFi yield farmer $5K–$50K | Private (holder-gated) | ★★★★☆ |
| 4 | Crypto Social Sentiment Analyst | Active trader, alpha hunter | Private (holder-gated) | ★★★★☆ |
| 5 | Airdrop Eligibility Scanner | Airdrop farmer, multi-chain user | Public → Private | ★★★★☆ |

---

## Phân tích chi tiết

---

### Skill 1: Real-time Whale Movement Tracker

**Target User**
> Swing trader crypto có portfolio $10K–$100K, trade 3–5 lần/tuần. Họ theo dõi whale movement để timing entry/exit nhưng đang phải check thủ công nhiều nguồn.

**Problem**
> Mất 2–3 giờ/ngày theo dõi whale wallet trên Etherscan/BSCScan thủ công. Không biết real-time khi whale move >$100K. Bỏ lỡ cơ hội trading vì nhận tin muộn — Bitcoin whale movements có thể gây biến động giá lên đến 15% (nguồn: Blockchain Magazine).

**Alternative hiện tại**
> - **Nansen**: Pioneer plan $99/tháng, Professional $999/tháng (nguồn: nansen.ai/plans). Smart Money labels mạnh nhưng đắt cho retail trader.
> - **Arkham Intelligence**: Free plan có giới hạn, paid plan ~$1,222 MXN/tháng (~$70 USD) (nguồn: arkham.tech/pricing). Mạnh về entity labeling nhưng không có agent automation.
> - **Whale Alert (Twitter/web)**: Free nhưng chỉ passive notification, không có phân tích context hay action recommendation.

**Skill giải quyết thế nào**
> Agent tự động monitor top 500 whale wallets trên ETH/BSC/SOL bằng blockchain API (Etherscan, BSCScan, Solscan). Khi phát hiện transaction >$100K: phân tích context (accumulation / distribution / exchange flow), gửi alert kèm recommendation qua social stream của agent trong <60 giây. Hiển thị: wallet address, token, amount, destination, lịch sử wallet.

**Visibility & Monetization**
- Type: `Private (holder-gated)`
- Lý do: Nansen charge $99–$999/tháng cho data tương tự → giá trị cao, nên holder-gated. User chỉ cần hold 1 share của agent creator (giá share đầu ~0.0000625 BNB ≈ $0.04) để access → rẻ hơn Nansen 2,400x ở thời điểm early.
- Chiến lược: Publish 1 skill "Whale Alert Lite" dạng public (free, chỉ top 50 wallets, delay 5 phút) để attract user → upsell skill đầy đủ qua holder-gated → drive share demand.
- So sánh: Nansen $99/mo = $1,188/năm. ClawFriend holder-gated = chỉ cần mua 1 share (có thể bán lại). Chi phí thấp hơn hẳn, giá trị tương đương.

**Bằng chứng demand**

| Nguồn | Data | Link |
|--------|------|------|
| Twitter/X | Whale Alert (@whale_alert): **2.5 triệu followers**, 3M+ followers tổng all platforms | https://x.com/whale_alert · Blockchain Magazine |
| Existing paid tool | Nansen: $99–$999/tháng → có người trả tiền = demand thực | https://www.nansen.ai/plans |
| Existing paid tool | Arkham Intelligence: raised $12M Series A, có paid plan → VC-validated demand | https://platform.arkhamintelligence.com |
| Industry data | Whale Alert theo dõi **10,000+ whale transactions/ngày** | https://whale-alert.io/press-release.html |
| Industry data | 500,000 unique monthly visitors trên whale-alert.io | https://whale-alert.io/press-release.html |
| On-chain | BSC: **1 tỷ+ unique addresses** tích lũy (BscScan chart) | https://bscscan.com/chart/address |

**Tính khả thi kỹ thuật**
> - API: Etherscan API (free tier 5 calls/sec), BSCScan API (tương tự), Solscan API
> - WebSocket: theo dõi mempool real-time cho low-latency alert
> - ClawFriend đã có infra social stream (agent tweet/reply) → alert có thể push qua social feed
> - Estimated build: 2–3 tuần cho MVP (monitoring + alert + basic analysis)

---

### Skill 2: AI Token Scam & Rug Pull Detector

**Target User**
> Retail DeFi investor và meme coin trader trên BSC/ETH/SOL, portfolio $1K–$20K. Thường FOMO vào token mới mà không kiểm tra smart contract → bị rug pull.

**Problem**
> - Năm 2025: ước tính **$17 tỷ bị mất** do crypto scams (nguồn: Chainalysis 2026 Crypto Crime Report)
> - **71% rug pull scams** xảy ra trên Binance Smart Chain (nguồn: CoinLaw Rug Pull Statistics 2026)
> - **70% nạn nhân** là retail investor đầu tư dưới $10,000 (nguồn: CoinLaw)
> - Thời gian trung bình từ launch đến rug: chỉ **12 ngày**, giảm từ 21 ngày năm 2023 (nguồn: CoinLaw)
> - Đa số retail không biết cách đọc smart contract → cần tool tự động detect

**Alternative hiện tại**
> - **GoPlus Security API**: Free, 30 calls/phút. Đạt **20 triệu API calls/ngày** vào peak (nguồn: GoPlus Medium). Nhưng chỉ là raw API — user phải tự integrate, không có UX layer.
> - **De.Fi Scanner**: Free rug pull checker trên de.fi/scanner. REKT database đã track **$89 tỷ losses qua 3,000+ incidents trên 36 chains** (nguồn: De.Fi docs). Nhưng reactive — chỉ kiểm tra sau khi user tìm, không proactive alert.
> - **Token Sniffer**: Free basic scan nhưng giới hạn chain coverage và depth.

**Skill giải quyết thế nào**
> Agent chạy AI analysis tự động trên mỗi token mới xuất hiện trên BSC DEX (PancakeSwap). Check: contract source verification, liquidity lock status, ownership renounce, honeypot test, holder concentration, và so sánh pattern với database 3,000+ rug pull đã biết. Gắn risk score 0–100. Agent tự post warning lên social stream khi phát hiện token risk score >80. Holder có thể query bất kỳ token address → nhận report trong <10 giây.

**Visibility & Monetization**
- Type: `Public` (basic scan, top 10 token mới/ngày) → `Private (holder-gated)` (unlimited scan, real-time alert, full report)
- Lý do: Safety tool nên có phần free để build trust + brand. Phần premium (unlimited + real-time) holder-gated để drive share demand.
- So sánh: GoPlus API free nhưng raw → skill này wrap thành UX layer có context. De.Fi Scanner free nhưng reactive → skill này proactive alert.
- Giá trị: Nếu giúp 1 user tránh được 1 rug pull $5K → ROI vượt xa chi phí hold 1 share.

**Bằng chứng demand**

| Nguồn | Data | Link |
|--------|------|------|
| Chainalysis Report | **$17 tỷ** mất do crypto scams năm 2025 | https://www.chainalysis.com/blog/crypto-scams-2026/ |
| CoinLaw Statistics | **71% rug pulls** xảy ra trên BSC; **350+ rug pulls** documented năm 2024 (+15% YoY) | https://coinlaw.io/rug-pull-statistics/ |
| CoinLaw Statistics | **70% nạn nhân** là retail investor đầu tư <$10K | https://coinlaw.io/rug-pulls-amp-ponzi-schemes-in-crypto-statistics/ |
| De.Fi REKT Database | **$89 tỷ losses** tracked qua **3,000+ incidents** trên 36 chains | https://docs.de.fi/audits/rekt-database |
| GoPlus Security | **20 triệu API calls/ngày** vào peak → demand cực lớn cho token security check | GoPlus Medium blog |
| De.Fi Monthly Report | Chỉ riêng tháng 4/2025: **$5.9 tỷ losses** qua 10 incidents | https://de.fi/blog/de-fi-rekt-report-april-2025 |

**Tính khả thi kỹ thuật**
> - API: GoPlus Security API (free, 30 calls/phút), BSCScan contract verification API, DexScreener API
> - AI model: pattern matching trên contract bytecode + holder distribution analysis
> - Infra: ClawFriend agent đã có BSC wallet integration → có thể query on-chain trực tiếp
> - Estimated build: 3–4 tuần (token analysis engine + risk scoring + social alert)

---

### Skill 3: Smart Yield Optimizer

**Target User**
> DeFi yield farmer có portfolio $5K–$50K, đang split assets trên 3–5 protocols, muốn tối ưu yield nhưng không có thời gian monitor 24/7.

**Problem**
> - Yield farming phải theo dõi liên tục: APY thay đổi hàng giờ, pool mới mở liên tục, rewards hết hạn không biết
> - Tổng TVL trong yield protocols: **$4.446 tỷ** (nguồn: Stelareum) → thị trường lớn nhưng user phải tự research
> - Current stablecoin yields: 3–5%, major asset yields: 2–4% (nguồn: Coin Bureau 2026) → spread nhỏ, cần optimize từng basis point
> - User trung bình mất 1–2 giờ/ngày check DeFiLlama, Beefy, Yearn để compare APY → không scalable

**Alternative hiện tại**
> - **Yearn Finance**: TVL **$394.9M**, average APY 26.14% qua 127 pools (nguồn: DefiLlama). Tự động compound nhưng chỉ trên chain Yearn support (chủ yếu ETH).
> - **Beefy Finance**: TVL **$146.4M**, multi-chain nhưng UX phức tạp. Giảm 50.92% TVL trong 7 ngày gần nhất (nguồn: Stelareum) → không ổn định.
> - **DefiLlama Yield page**: Free, list yield opportunities nhưng chỉ là data → user phải tự quyết định và execute.

**Skill giải quyết thế nào**
> Agent tự động scan yield opportunities trên BSC (PancakeSwap, Venus, Alpaca Finance) + cross-chain (ETH, Arbitrum) mỗi giờ. So sánh: APY, TVL, protocol risk score, IL (impermanent loss) estimate. Recommend top 5 opportunities phù hợp với risk profile của user. Agent có thể tự post "Daily Yield Report" lên social stream cho holder xem.

**Visibility & Monetization**
- Type: `Private (holder-gated)`
- Lý do: Yield data có giá trị trực tiếp → holder access = competitive advantage. Yearn charge implicit fee (management fee 2% + performance fee 20%). ClawFriend holder-gated = chỉ cần hold share, không bị fee liên tục.
- So sánh: Yearn 2% management + 20% performance fee → holder-gated share model rẻ hơn đáng kể cho portfolio <$50K.

**Bằng chứng demand**

| Nguồn | Data | Link |
|--------|------|------|
| DefiLlama | Tổng DeFi TVL: **$82.8 tỷ**; Yield protocol TVL: **$4.446 tỷ** | https://defillama.com · https://www.stelareum.io/en/defi-tvl/yield.html |
| DefiLlama | Yearn Finance TVL: **$394.9M** qua 127 pools → market leader, demand validated | https://defillama.com/protocol/yearn |
| Coin Bureau | Stablecoin yields 3–5%, average yield 2.47% → spread nhỏ, cần tool optimize | https://coinbureau.com/analysis/best-defi-yield-farming-platforms |
| Beefy Finance | TVL $146M, multi-chain → người dùng sẵn sàng lock funds vào yield aggregator | https://www.stelareum.io/en/defi-tvl/yield.html |
| On-chain | BSC tích lũy **1 tỷ+ unique addresses** → base user lớn cho yield tool trên BSC | https://bscscan.com/chart/address |

**Tính khả thi kỹ thuật**
> - API: DefiLlama API (free, public), PancakeSwap subgraph, Venus Protocol API
> - Logic: APY calculation + risk scoring + IL estimation — các formula đã public
> - ClawFriend agent có BSC wallet → có thể read on-chain position data
> - Estimated build: 3–4 tuần (data aggregation + scoring engine + daily report)

---

### Skill 4: Crypto Social Sentiment Analyst

**Target User**
> Active crypto trader và alpha hunter, trade 5–10 lần/tuần, portfolio $10K–$200K. Dùng Twitter/Reddit để tìm signal nhưng mất quá nhiều thời gian filter noise.

**Problem**
> - Crypto Twitter có hàng triệu tweets/ngày → impossible để đọc hết thủ công
> - Sentiment shift thường xảy ra 6–24h trước price movement → ai phát hiện sớm có lợi thế
> - User phải check nhiều nguồn: Twitter, Reddit (r/CryptoCurrency có 3,818 Bitcoin mentions/24h — nguồn: rcryptocurrency.com/scraper), Telegram groups
> - Không biết đâu là signal, đâu là noise → dễ bị FOMO hoặc FUD

**Alternative hiện tại**
> - **Santiment**: $49/tháng (Pro) đến $249/tháng (Max), track 2,500+ assets với 1,100+ metrics. Hold 1,000 SAN tokens → giảm 20% (nguồn: santiment.net/pricing).
> - **LunarCrush**: AI-driven social analytics. Claim giúp user giảm 40% FOMO trades, detect trend nhanh 3x (nguồn: lunarcrush.com/investors). Pricing không public.
> - **Crypto subreddit scrapers**: Free nhưng raw data, cần tự phân tích.

**Skill giải quyết thế nào**
> Agent chạy sentiment analysis pipeline: (1) Thu thập real-time từ Twitter API (crypto KOL list, trending hashtags), Reddit API (r/CryptoCurrency, r/defi, r/CryptoMarkets), và on-chain social data. (2) NLP model phân loại sentiment (bullish/bearish/neutral) + detect anomaly (sudden spike trong mentions). (3) Output: daily sentiment report + real-time alert khi sentiment shift >2 standard deviations. Agent post summary lên social stream.

**Visibility & Monetization**
- Type: `Private (holder-gated)`
- Lý do: Santiment charge $49–$249/tháng → giá trị cao. ClawFriend holder-gated = access bằng hold share, rẻ hơn subscription.
- Chiến lược: Public "Weekly Sentiment Recap" (delay 7 ngày, top 10 tokens) → Private real-time alerts + daily report cho holders.
- So sánh: Santiment Pro $49/mo = $588/năm. Hold 1 share ClawFriend → access vĩnh viễn (hoặc bán lại).

**Bằng chứng demand**

| Nguồn | Data | Link |
|--------|------|------|
| Santiment | **2,500+ assets** tracked, **1,100+ metrics** → market leader, demand validated | https://santiment.net/ |
| Santiment pricing | $49–$249/tháng có người trả = demand thực | https://santiment.net/pricing/ |
| LunarCrush | Claim: giảm **40% FOMO trades**, detect trend **3x nhanh hơn** | https://lunarcrush.com/investors |
| Reddit | r/CryptoCurrency: **3,818 Bitcoin mentions** chỉ trong 24h → volume discussion cực lớn | https://rcryptocurrency.com/scraper |
| Google Trends | Crypto search interest đạt **100/100 peak** tháng 10/2025 (nguồn: ainvest.com) | https://www.ainvest.com/news/google-trends-slump-crypto-interest-outflows-signal-flow-breakdown-2602/ |
| Industry data | Crypto Fear & Greed Index: widely followed, extreme readings gây market moves | Publicly available |

**Tính khả thi kỹ thuật**
> - API: Twitter/X API (free tier hoặc basic $100/mo), Reddit API (free), CoinGecko API
> - NLP: pre-trained sentiment models (FinBERT, hoặc OpenAI API cho classification)
> - ClawFriend agent đã có social stream → output có thể post trực tiếp
> - Estimated build: 3–4 tuần (data pipeline + NLP + alert logic + report template)

---

### Skill 5: Airdrop Eligibility Scanner

**Target User**
> Airdrop farmer và multi-chain user, có 3–10 wallets, tương tác trên 5+ chains. Muốn biết wallet nào đủ điều kiện airdrop nào mà không phải check từng project thủ công.

**Problem**
> - Hàng trăm project đang chạy points/airdrop program cùng lúc → impossible để track hết
> - Mỗi project có tiêu chí khác nhau: bridge volume, swap count, hold duration, protocol interactions
> - Riêng **US residents đã bị mất ~$2.6 tỷ** potential airdrop do geoblocking (nguồn: Dragonfly State of Airdrops Report 2025, submitted to SEC) → global demand còn lớn hơn nhiều
> - Sybil resistance ngày càng phức tạp: project filter theo "non-Sybil behavior, diversity of interactions, consistency over months" → user cần tool giúp optimize strategy

**Alternative hiện tại**
> - **DeBank**: Portfolio tracker cover 60+ chains, 6.8M+ wallets tracked, $105B TVL monitored (nguồn: DeBank). Nhưng không có airdrop eligibility check.
> - **Các airdrop tracker websites** (earndrop.io, airdrops.io): List upcoming airdrops nhưng không check eligibility cho wallet cụ thể.
> - **Manual check**: User tự vào từng project docs, check criteria, so sánh với wallet history → mất hàng giờ.

**Skill giải quyết thế nào**
> Agent nhận wallet address(es) → scan on-chain history trên multi-chain (ETH, BSC, Arbitrum, Optimism, Base, zkSync, Solana) → so sánh activity với known airdrop criteria của top 20 upcoming projects (từ curated list, cập nhật hàng tuần). Output: eligibility score per project, missing criteria (VD: "Cần thêm 3 swap trên Arbitrum"), recommended actions để qualify. Agent post weekly "Airdrop Opportunity Report" lên social stream.

**Visibility & Monetization**
- Type: `Public` (check 1 wallet, top 5 projects) → `Private (holder-gated)` (unlimited wallets, top 20 projects, personalized recommendations)
- Lý do: Airdrop farming là high-intent activity → user sẵn sàng trả. Free tier để onboard, holder-gated để drive share demand.
- Chiến lược: Free tier tạo viral loop (user share kết quả scan) → premium tier cho serious farmer.
- Giá trị: Nếu 1 airdrop claim trung bình $500–$5,000, holder chỉ cần qualify thêm 1 airdrop = ROI vượt xa.

**Bằng chứng demand**

| Nguồn | Data | Link |
|--------|------|------|
| Dragonfly Report (SEC submission) | US residents mất **~$2.6 tỷ** do geoblocked airdrops → demand toàn cầu rất lớn | https://www.sec.gov/about/crypto-task-force/written-submission/dragonflys-state-airdrops-report-2025 |
| DeBank | **6.8 triệu+ wallets** tracked, **$105 tỷ TVL** monitored → user base sẵn sàng dùng tool DeFi | https://debank.com |
| LayerZero Airdrop | "Proof-of-Donation" mechanism → ước tính tạo **$18.5M** donations → airdrop culture mạnh | https://info.layerzero.foundation/zro-claim |
| Google Trends | Crypto search interest peak 100/100 (Oct 2025) → interest cycle drives airdrop farming | https://trends.google.com |
| Industry trend | Projects chuyển sang points/loyalty system thay classic airdrop → cần tool track phức tạp hơn | Dragonfly Report |

**Tính khả thi kỹ thuật**
> - API: Etherscan/BSCScan/Arbiscan multi-chain APIs, DeBank OpenAPI, Dune Analytics API
> - Logic: rule engine so sánh wallet history vs criteria database (curated, cập nhật weekly)
> - ClawFriend agent có BSC wallet identity → có thể query on-chain history trực tiếp
> - Estimated build: 4–5 tuần (multi-chain scanner + criteria database + matching engine + report)

---

## Holder-Gated Value Analysis — Giá trị ở nhiều mức share price

BGK sẽ hỏi: *"Holder-gated chỉ rẻ ở early ($0.04/share). Khi share = $10 hay $50 thì sao?"*

| Supply | Share Price (BNB) | ~USD ($600/BNB) | So sánh với Nansen $99/mo | Breakeven vs Nansen |
|--------|-------------------|-----------------|--------------------------|---------------------|
| 1 (early) | 0.0000625 | **$0.04** | Rẻ hơn 2,400x | Instant |
| 10 | 0.0063 | **$3.75** | Rẻ hơn 26x | Instant |
| 25 | 0.039 | **$23.44** | Rẻ hơn 4.2x | Instant |
| 50 | 0.156 | **$93.75** | Tương đương ~1 tháng Nansen | 1 tháng |
| 100 | 0.625 | **$375** | Đắt hơn 3.8x so với 1 tháng | 3.8 tháng |
| 200 | 2.5 | **$1,500** | Đắt hơn 15x so với 1 tháng | ~15 tháng |

**Key insight — Tại sao holder-gated VẪN có giá trị ở supply cao:**

1. **Share là asset, không phải expense.** Khác subscription ($99/mo burned mỗi tháng), share có thể **bán lại** trên bonding curve. Nếu agent tiếp tục grow, share price tăng → user vừa dùng skill vừa có capital appreciation. Nansen subscription = sunk cost.

2. **Multi-skill access.** 1 share unlock TẤT CẢ private skills của agent đó, không chỉ 1 skill. Nếu agent publish 5 premium skills, chi phí per-skill giảm 5x.

3. **Creator incentive tự điều chỉnh.** Khi share price cao, creator có incentive tạo MORE premium skills để justify valuation. Nếu skill quality giảm → holders bán → price giảm → market tự correct.

4. **Giới hạn tự nhiên.** Bonding curve quadratic (price = supply²/16000) tạo natural ceiling. Không phải mọi agent sẽ đạt supply 200. Majority agents sẽ ở supply 10–50 = sweet spot $3.75–$93.75, vẫn competitive với subscription model.

**Kết luận:** Holder-gated model hoạt động tốt nhất ở supply 1–50 (rẻ hơn subscription). Ở supply cao, giá trị chuyển từ "rẻ hơn alternative" sang "asset có thể bán lại + multi-skill access + capital appreciation potential". Đây là **investment model, không phải subscription model** — và đó chính là sự khác biệt.

---

## API Rate Limit Risk & Mitigation

| Skill | API chính | Rate limit | Risk | Mitigation |
|-------|-----------|------------|------|------------|
| Whale Tracker | Etherscan/BSCScan API | Free: 5 calls/sec | Medium — cần monitor 500 wallets | Batch requests + WebSocket cho real-time. Upgrade API key ($199/mo Etherscan Pro) khi user base > 1,000 |
| Rug Pull Detector | GoPlus Security API | Free: 30 calls/phút | High — mỗi token scan = 1 call, new tokens mỗi phút | Implement caching layer (Redis): cache kết quả scan 5 phút. Priority queue: scan popular tokens trước. GoPlus có enterprise plan nếu cần scale |
| Yield Optimizer | DefiLlama API | Free, no explicit limit | Low — API public, community-maintained | Cache yield data mỗi 15 phút (APY không thay đổi per-second). Fallback: scrape trực tiếp từ protocol subgraphs |
| Sentiment Analyst | Twitter/X API | Free: 500K tweets/mo; Basic $100/mo: 10K tweets/mo via search | High — sentiment cần volume data lớn | Start với curated KOL list (500 accounts) thay vì full firehose. Supplement bằng Reddit API (free, generous limits) + CoinGecko social data |
| Airdrop Scanner | Etherscan multi-chain APIs | Free: 5 calls/sec per chain | Medium — multi-chain scan = multiplied calls | Queue system: scan 1 wallet across chains sequentially. Cache criteria database locally (update weekly). Batch on-chain queries |

**Budget dự phòng cho API:** $200–$500/tháng khi user base > 500 (Etherscan Pro + Twitter Basic). Đã tính vào operational cost, không ảnh hưởng $10K marketing budget.

---

## Tổng kết Skill Research

**Skill có PMF mạnh nhất:**
> **Skill 2: AI Token Scam & Rug Pull Detector** — $17 tỷ scam losses/năm, 71% trên BSC (chain ClawFriend deploy), 20M+ GoPlus API calls/ngày chứng minh demand check token security cực lớn. Giải quyết pain point trực tiếp cho 70% nạn nhân là retail investor.

**Skill có tiềm năng drive share demand cao nhất:**
> **Skill 1: Real-time Whale Movement Tracker** — Nansen charge $99–$999/tháng cho data tương tự. Holder-gated skill cho phép access với chi phí thấp hơn 2,400x (1 share ≈ $0.04 early) → incentive cực mạnh để mua share. Whale Alert có 2.5M followers = audience sẵn sàng chuyển sang platform có agent automation.

**Skill nên launch đầu tiên (quick win):**
> **Skill 2: AI Token Scam & Rug Pull Detector** — (1) Pain point lớn nhất trên BSC (71% rug pulls), (2) Free tier (public) tạo viral loop tốt (user share warning → attract more users), (3) GoPlus API free → build nhanh, (4) Safety tool = PR tốt cho brand ClawFriend.

---

## Nguồn dữ liệu

| Nguồn | URL |
|-------|-----|
| Whale Alert official stats | https://whale-alert.io/press-release.html |
| Whale Alert Twitter | https://x.com/whale_alert |
| Nansen pricing | https://www.nansen.ai/plans |
| Arkham Intelligence | https://platform.arkhamintelligence.com |
| Chainalysis 2026 Crypto Crime Report | https://www.chainalysis.com/blog/crypto-scams-2026/ |
| CoinLaw Rug Pull Statistics 2026 | https://coinlaw.io/rug-pull-statistics/ |
| CoinLaw Rug Pull & Ponzi Schemes | https://coinlaw.io/rug-pulls-amp-ponzi-schemes-in-crypto-statistics/ |
| De.Fi REKT Database | https://docs.de.fi/audits/rekt-database |
| De.Fi Monthly Report (April 2025) | https://de.fi/blog/de-fi-rekt-report-april-2025 |
| GoPlus Security API docs | https://docs.gopluslabs.io/reference |
| GoPlus usage data (Medium) | https://goplussecurity.medium.com/ |
| DefiLlama | https://defillama.com |
| Stelareum Yield TVL | https://www.stelareum.io/en/defi-tvl/yield.html |
| Yearn Finance (DefiLlama) | https://defillama.com/protocol/yearn |
| Coin Bureau Yield Farming 2026 | https://coinbureau.com/analysis/best-defi-yield-farming-platforms |
| Santiment pricing | https://santiment.net/pricing/ |
| LunarCrush | https://lunarcrush.com/investors |
| r/CryptoCurrency scraper | https://rcryptocurrency.com/scraper |
| Google Trends crypto interest | https://www.ainvest.com/news/google-trends-slump-crypto-interest-outflows-signal-flow-breakdown-2602/ |
| Dragonfly Airdrops Report 2025 (SEC) | https://www.sec.gov/about/crypto-task-force/written-submission/dragonflys-state-airdrops-report-2025 |
| DeBank stats | https://debank.com |
| LayerZero airdrop mechanism | https://info.layerzero.foundation/zro-claim |
| BscScan unique addresses | https://bscscan.com/chart/address |
