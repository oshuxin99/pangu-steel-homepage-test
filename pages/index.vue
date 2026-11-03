<template>
  <div class="homepage">
    <header class="masthead">
      <div class="brand">
        <span class="brand__symbol">
          <i />
          <i />
          <i />
        </span>
        <div class="brand__name">
          <strong>盘古钢铁</strong>
          <span>PANGU STEEL</span>
        </div>
      </div>
      <p class="masthead__note">自 2008 年深耕钢材制造</p>
    </header>

    <main>
      <section class="hero">
        <div class="hero__copy">
          <h1>把稳定的钢材，<br>交到每一道工序手上。</h1>
          <p>
            从热轧卷板到高强结构钢，我们以稳定的材料性能、可追溯的生产流程
            和准时交付，为制造企业提供可靠的底层材料。
          </p>
          <div class="hero__actions">
            <button
              class="button button--solid"
              type="button"
              @click="scrollToProducts"
            >
              查看产品体系
            </button>
            <button
              class="button button--quiet"
              type="button"
            >
              获取产品手册
            </button>
          </div>
        </div>

        <div
          class="hero__visual"
          aria-hidden="true"
        >
          <div class="measure measure--top">
            <span>1250</span>
            <i />
          </div>
          <div class="measure measure--side">
            <span>3.0</span>
            <i />
          </div>
          <div class="coil">
            <span class="coil__face">
              <span class="coil__edge" />
              <span class="coil__core" />
            </span>
          </div>
          <span class="hero__visual-note">热轧卷板 · Q235B</span>
        </div>

        <div class="hero__stats">
          <div
            v-for="stat in stats"
            :key="stat.label"
          >
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </section>

      <section
        id="products"
        class="products"
      >
        <div class="section-intro">
          <div>
            <h2>材料，不止于标准。</h2>
          </div>
          <p>
            每批钢材都建立独立生产档案。从炉号、轧制参数到表面检测，
            品质结果有据可查，让后续加工少一分不确定。
          </p>
        </div>

        <div class="product-list">
          <article
            v-for="(product, index) in products"
            :key="product.name"
            class="product-row"
          >
            <span class="product-row__index">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <div class="product-row__specs">
              <span
                v-for="spec in product.specs"
                :key="spec"
              >
                {{ spec }}
              </span>
            </div>
            <span
              class="product-row__line"
              :style="{ '--line-width': product.lineWidth }"
            />
          </article>
        </div>
      </section>

      <section class="capability">
        <div
          class="capability__visual"
          aria-hidden="true"
        >
          <span class="sheet sheet--back" />
          <span class="sheet sheet--middle" />
          <span class="sheet sheet--front">
            <i />
            <i />
            <i />
          </span>
          <div class="capability__stamp">
            <strong>99.97<small>%</small></strong>
            <span>交付合格率</span>
          </div>
        </div>

        <div class="capability__content">
          <h2>一卷钢的稳定，<br>来自整条产线的确定性。</h2>
          <p>
            我们持续优化原料、轧制、退火与质检之间的工艺衔接，
            用清晰的过程控制换来更稳定的成品表现。
          </p>

          <ol class="process">
            <li
              v-for="(item, index) in process"
              :key="item.title"
            >
              <span class="process__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <div>
                <strong>{{ item.title }}</strong>
                <p>{{ item.description }}</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="statement">
        <p class="statement__quote">
          “钢材是工业的骨架。我们能做的，是让这份骨架更稳定、更耐久，
          也更容易被信任。”
        </p>
        <div class="statement__source">
          <span class="statement__avatar">周</span>
          <div>
            <strong>周启明</strong>
            <span>生产制造中心负责人</span>
          </div>
        </div>
        <span
          class="statement__watermark"
          aria-hidden="true"
        >
          钢
        </span>
      </section>

      <section class="closing">
        <div>
          <h2>让下一次采购，从一份更明确的材料方案开始。</h2>
          <p>告诉我们你的牌号、规格和应用场景，我们会尽快提供匹配建议。</p>
        </div>
        <button
          class="button button--light"
          type="button"
        >
          获取材料方案
        </button>
      </section>
    </main>

    <footer class="footer">
      <div class="brand brand--footer">
        <span class="brand__symbol">
          <i />
          <i />
          <i />
        </span>
        <div class="brand__name">
          <strong>盘古钢铁</strong>
          <span>PANGU STEEL</span>
        </div>
      </div>
      <p>稳定材料 · 可追溯制造 · 准时交付</p>
      <span>© {{ currentYear }} 盘古钢铁制造有限公司</span>
    </footer>
  </div>
</template>

<script setup>
const currentYear = new Date().getFullYear()

const stats = [
  { value: '120 万吨', label: '年综合产能' },
  { value: '860+', label: '长期合作客户' },
  { value: '24 小时', label: '技术响应时间' }
]

const products = [
  {
    name: '热轧卷板',
    description: '适用于建筑结构、机械制造与一般冲压场景，兼顾强度与后续加工性能。',
    specs: ['Q235B', '3.0–12.0 mm', '1250 mm'],
    lineWidth: '82%'
  },
  {
    name: '冷轧板',
    description: '表面平整、尺寸精度稳定，适合家电、汽车零部件及精密冲压应用。',
    specs: ['SPCC', '0.3–2.0 mm', '深冲级'],
    lineWidth: '67%'
  },
  {
    name: '镀锌钢板',
    description: '形成均匀致密的锌层保护，适合户外结构、仓储设备与耐候场景。',
    specs: ['DX51D', 'Z120–Z275', '光整表面'],
    lineWidth: '74%'
  },
  {
    name: '低合金高强钢',
    description: '以更高屈服强度支持轻量化和重载结构设计，满足严苛工程需求。',
    specs: ['Q460C', '4.0–16.0 mm', '低碳当量'],
    lineWidth: '58%'
  }
]

const process = [
  {
    title: '原料入炉',
    description: '核对炉号与化学成分，建立批次生产档案。'
  },
  {
    title: '精密轧制',
    description: '控制温度、速度与压下量，稳定厚度和板形。'
  },
  {
    title: '连续退火',
    description: '按牌号匹配退火曲线，平衡强度与加工性。'
  },
  {
    title: '全流程质检',
    description: '尺寸、力学性能与表面质量逐批留档。'
  }
]

function scrollToProducts() {
  document.querySelector('#products')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

useHead({
  title: '盘古钢铁 · 工业钢材制造',
  meta: [
    {
      name: 'description',
      content: '盘古钢铁首页模板，提供热轧卷板、冷轧板、镀锌钢板与低合金高强钢。'
    }
  ]
})
</script>

<style>
:root {
  --paper: #eef1f0;
  --paper-deep: #dfe4e2;
  --ink: #17282d;
  --ink-soft: #4d6165;
  --slate: #6f8182;
  --line: #cbd4d1;
  --rust: #ad5538;
  --rust-deep: #8e3f27;
  --white: #f8f9f7;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body,
#__nuxt {
  min-width: 320px;
  min-height: 100%;
  margin: 0;
  color: var(--ink);
  background: var(--paper);
}

body {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
}

button {
  font: inherit;
}
</style>

<style scoped>
.homepage {
  min-height: 100vh;
  overflow: hidden;
  background:
    linear-gradient(90deg, rgba(255, 255, 255, 0.24) 1px, transparent 1px),
    var(--paper);
  background-size: 8.333vw 100%;
}

.masthead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(100% - 64px, 1440px);
  height: 94px;
  margin: 0 auto;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand__symbol {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  width: 35px;
  height: 35px;
  padding: 8px;
  border: 1px solid var(--ink);
  border-radius: 50%;
}

.brand__symbol i {
  display: block;
  width: 100%;
  height: 1px;
  background: var(--rust);
}

.brand__symbol i:nth-child(2) {
  width: 75%;
}

.brand__symbol i:nth-child(3) {
  width: 46%;
}

.brand__name {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.brand__name strong {
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-size: 17px;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.brand__name span {
  color: var(--slate);
  font-family: Georgia, serif;
  font-size: 8px;
  letter-spacing: 0.2em;
}

.masthead__note {
  margin: 0;
  color: var(--slate);
  font-size: 11px;
  letter-spacing: 0.08em;
}

.hero {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.3fr) minmax(340px, 0.7fr);
  width: min(100% - 64px, 1440px);
  min-height: 670px;
  margin: 0 auto;
  padding: 94px 0 142px;
  border-top: 1px solid var(--line);
}

.hero::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 65%;
  width: 1px;
  content: '';
  background: linear-gradient(transparent 2%, var(--line) 20%, var(--line) 84%, transparent);
}

.hero__copy {
  position: relative;
  z-index: 2;
  align-self: center;
  max-width: 790px;
  padding-right: 30px;
}

.hero h1,
.section-intro h2,
.capability h2,
.closing h2 {
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-weight: 600;
}

.hero h1 {
  margin: 0;
  font-size: clamp(46px, 5.8vw, 78px);
  line-height: 1.18;
  letter-spacing: -0.06em;
}

.hero__copy > p {
  max-width: 520px;
  margin: 33px 0 0;
  color: var(--ink-soft);
  font-size: 14px;
  line-height: 2;
}

.hero__actions {
  display: flex;
  gap: 11px;
  margin-top: 37px;
}

.button {
  min-width: 136px;
  padding: 13px 20px;
  border-radius: 0;
  font-size: 12px;
  cursor: pointer;
  transition:
    color 160ms ease,
    background 160ms ease,
    border-color 160ms ease;
}

.button--solid {
  border: 1px solid var(--ink);
  color: var(--white);
  background: var(--ink);
}

.button--solid:hover {
  border-color: var(--rust);
  background: var(--rust);
}

.button--quiet {
  border: 1px solid var(--line);
  color: var(--ink);
  background: transparent;
}

.button--quiet:hover {
  border-color: var(--ink);
}

.button:focus-visible {
  outline: 2px solid var(--rust);
  outline-offset: 4px;
}

.hero__visual {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 460px;
}

.hero__visual::before {
  position: absolute;
  width: min(31vw, 430px);
  height: min(31vw, 430px);
  border: 1px dashed rgba(111, 129, 130, 0.35);
  border-radius: 50%;
  content: '';
}

.coil {
  position: relative;
  display: grid;
  width: min(27vw, 370px);
  height: min(27vw, 370px);
  place-items: center;
  border-radius: 50%;
  filter: drop-shadow(28px 34px 30px rgba(26, 40, 44, 0.18));
  transform: rotate(-12deg);
}

.coil__face {
  position: absolute;
  inset: 0;
  border: 1px solid #6f7b7d;
  border-radius: 50%;
  background:
    repeating-radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.12) 0 2px,
      rgba(47, 63, 66, 0.06) 3px 6px
    ),
    radial-gradient(circle at 36% 28%, #c7cecb, #6e7979 48%, #394b4e 100%);
  box-shadow:
    inset 14px 18px 35px rgba(255, 255, 255, 0.2),
    inset -24px -22px 42px rgba(20, 35, 38, 0.4);
}

.coil__edge {
  position: absolute;
  inset: 12%;
  border: 16px solid rgba(33, 48, 51, 0.48);
  border-top-color: rgba(197, 207, 204, 0.5);
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
}

.coil__core {
  position: absolute;
  inset: 35%;
  border: 7px solid #697473;
  border-radius: 50%;
  background:
    radial-gradient(circle, #19292d 0 44%, #445457 45% 60%, #98a3a0 61% 100%);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.26),
    inset 0 2px 8px rgba(255, 255, 255, 0.18);
}

.measure {
  position: absolute;
  z-index: 2;
  color: var(--slate);
  font-family: Georgia, serif;
  font-size: 9px;
  letter-spacing: 0.1em;
}

.measure--top {
  top: 35px;
  right: 8%;
  width: 55%;
}

.measure--top i {
  display: block;
  width: 100%;
  height: 6px;
  margin-top: 8px;
  border-top: 1px solid var(--slate);
  border-right: 1px solid var(--slate);
  border-left: 1px solid var(--slate);
}

.measure--side {
  top: 42%;
  right: 1%;
  display: flex;
  align-items: center;
  gap: 8px;
}

.measure--side i {
  display: block;
  width: 45px;
  border-top: 1px solid var(--slate);
}

.hero__visual-note {
  position: absolute;
  bottom: 33px;
  left: 20%;
  color: var(--rust);
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-size: 11px;
  letter-spacing: 0.1em;
}

.hero__stats {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--line);
}

.hero__stats > div {
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 22px 28px 22px 0;
}

.hero__stats > div + div {
  padding-left: 28px;
  border-left: 1px solid var(--line);
}

.hero__stats strong {
  font-family: Georgia, "Songti SC", serif;
  font-size: 21px;
  font-weight: 500;
}

.hero__stats span {
  color: var(--slate);
  font-size: 10px;
}

.products {
  padding: 128px max(32px, calc((100vw - 1440px) / 2));
  color: var(--white);
  background:
    linear-gradient(112deg, rgba(255, 255, 255, 0.035), transparent 35%),
    var(--ink);
}

.section-intro {
  display: grid;
  grid-template-columns: 1fr minmax(300px, 0.6fr);
  gap: 80px;
  align-items: end;
  margin-bottom: 80px;
}

.section-intro h2 {
  margin: 0;
  font-size: clamp(36px, 4.2vw, 60px);
  letter-spacing: -0.04em;
}

.section-intro p {
  margin: 0;
  color: #9aa9aa;
  font-size: 12px;
  line-height: 2;
}

.product-list {
  border-top: 1px solid rgba(217, 226, 224, 0.2);
}

.product-row {
  position: relative;
  display: grid;
  grid-template-columns: 46px minmax(150px, 0.6fr) minmax(280px, 1.2fr) minmax(230px, 0.8fr);
  gap: 22px;
  align-items: center;
  padding: 27px 0 30px;
  border-bottom: 1px solid rgba(217, 226, 224, 0.2);
}

.product-row__index {
  color: #727f81;
  font-family: Georgia, serif;
  font-size: 11px;
}

.product-row h3 {
  margin: 0;
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-size: 22px;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.product-row > p {
  margin: 0;
  color: #9cabac;
  font-size: 11px;
  line-height: 1.8;
}

.product-row__specs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 7px;
}

.product-row__specs span {
  padding: 5px 8px;
  border: 1px solid rgba(201, 215, 213, 0.22);
  color: #b9c5c4;
  font-size: 9px;
}

.product-row__line {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: var(--line-width);
  height: 1px;
  background: var(--rust);
}

.capability {
  display: grid;
  grid-template-columns: minmax(340px, 0.9fr) minmax(0, 1.1fr);
  gap: clamp(60px, 9vw, 150px);
  align-items: center;
  padding: 128px max(32px, calc((100vw - 1440px) / 2));
}

.capability__visual {
  position: relative;
  min-height: 540px;
}

.sheet {
  position: absolute;
  width: min(31vw, 430px);
  height: min(21vw, 285px);
  border: 1px solid #9eaaa8;
  background:
    linear-gradient(138deg, rgba(255, 255, 255, 0.8), transparent 38%),
    linear-gradient(155deg, #dadfdd, #9caaa7);
  box-shadow: 18px 28px 38px rgba(43, 59, 62, 0.1);
}

.sheet--back {
  top: 44px;
  left: 13%;
  background:
    linear-gradient(138deg, rgba(255, 255, 255, 0.45), transparent 35%),
    linear-gradient(155deg, #adb6b3, #7e8a88);
  transform: rotate(7deg);
}

.sheet--middle {
  top: 152px;
  left: 4%;
  transform: rotate(-3deg);
}

.sheet--front {
  top: 254px;
  left: 14%;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 43px 34px;
  transform: rotate(2deg);
}

.sheet--front i {
  display: block;
  width: 74%;
  height: 1px;
  background: rgba(39, 58, 61, 0.35);
}

.sheet--front i:nth-child(2) {
  width: 91%;
}

.sheet--front i:nth-child(3) {
  width: 58%;
}

.capability__stamp {
  position: absolute;
  z-index: 3;
  top: 13px;
  right: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

.capability__stamp::before {
  position: absolute;
  top: -14px;
  left: -26px;
  width: 74px;
  height: 74px;
  border: 1px solid var(--rust);
  border-radius: 50%;
  content: '';
}

.capability__stamp strong {
  color: var(--rust);
  font-family: Georgia, serif;
  font-size: 34px;
  font-weight: 400;
  letter-spacing: -0.04em;
}

.capability__stamp small {
  font-size: 15px;
}

.capability__stamp span {
  color: var(--slate);
  font-size: 9px;
  letter-spacing: 0.08em;
}

.capability__content {
  max-width: 690px;
}

.capability h2,
.closing h2 {
  margin: 0;
  font-size: clamp(36px, 4.4vw, 64px);
  line-height: 1.35;
  letter-spacing: -0.045em;
}

.capability__content > p {
  max-width: 560px;
  margin: 27px 0 0;
  color: var(--ink-soft);
  font-size: 13px;
  line-height: 2;
}

.process {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 48px 0 0;
  padding: 0;
  border-top: 1px solid var(--line);
  border-left: 1px solid var(--line);
  list-style: none;
}

.process li {
  display: flex;
  gap: 13px;
  min-height: 112px;
  padding: 20px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.process__number {
  color: var(--rust);
  font-family: Georgia, serif;
  font-size: 9px;
}

.process strong {
  display: block;
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-size: 15px;
  font-weight: 600;
}

.process p {
  margin: 9px 0 0;
  color: var(--slate);
  font-size: 10px;
  line-height: 1.7;
}

.statement {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 465px;
  padding: 100px max(32px, calc((100vw - 1200px) / 2));
  overflow: hidden;
  color: var(--white);
  background: var(--rust);
}

.statement__quote {
  position: relative;
  z-index: 2;
  max-width: 930px;
  margin: 0;
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-size: clamp(28px, 3.7vw, 51px);
  line-height: 1.62;
}

.statement__source {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 11px;
  margin-top: auto;
}

.statement__avatar {
  display: grid;
  width: 36px;
  height: 36px;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.55);
  border-radius: 50%;
  font-family: "Songti SC", serif;
  font-size: 13px;
}

.statement__source div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.statement__source strong {
  font-size: 11px;
  font-weight: 500;
}

.statement__source div span {
  color: rgba(255, 255, 255, 0.6);
  font-size: 9px;
}

.statement__watermark {
  position: absolute;
  right: 7%;
  bottom: -23%;
  color: rgba(255, 255, 255, 0.045);
  font-family: "Songti SC", "Noto Serif SC", serif;
  font-size: min(38vw, 560px);
  line-height: 1;
}

.closing {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 70px;
  padding: 112px max(32px, calc((100vw - 1200px) / 2));
}

.closing h2 {
  max-width: 770px;
  font-size: clamp(32px, 4vw, 54px);
}

.closing p {
  margin: 22px 0 0;
  color: var(--slate);
  font-size: 12px;
  line-height: 1.8;
}

.button--light {
  flex-shrink: 0;
  border: 1px solid var(--ink);
  color: var(--ink);
  background: transparent;
}

.button--light:hover {
  color: var(--white);
  background: var(--ink);
}

.footer {
  display: flex;
  align-items: center;
  gap: 34px;
  width: min(100% - 64px, 1440px);
  min-height: 118px;
  margin: 0 auto;
  border-top: 1px solid var(--line);
}

.brand--footer {
  flex-shrink: 0;
}

.brand--footer .brand__symbol {
  width: 30px;
  height: 30px;
  padding: 6px;
}

.brand--footer .brand__name strong {
  font-size: 13px;
}

.footer > p {
  margin: 0;
  color: var(--slate);
  font-size: 10px;
  letter-spacing: 0.06em;
}

.footer > span {
  margin-left: auto;
  color: #8b9898;
  font-size: 9px;
}

@media (max-width: 1100px) {
  .hero {
    grid-template-columns: minmax(0, 1fr) minmax(300px, 0.82fr);
  }

  .hero__copy {
    padding-right: 40px;
  }

  .product-row {
    grid-template-columns: 35px minmax(130px, 0.6fr) minmax(240px, 1.2fr);
  }

  .product-row__specs {
    grid-column: 2 / -1;
    justify-content: flex-start;
  }

  .capability {
    gap: 55px;
  }
}

@media (max-width: 820px) {
  .masthead,
  .hero,
  .footer {
    width: min(100% - 36px, 1440px);
  }

  .masthead {
    height: 78px;
  }

  .masthead__note {
    display: none;
  }

  .hero {
    display: block;
    min-height: 0;
    padding: 78px 0 110px;
  }

  .hero::before {
    display: none;
  }

  .hero__copy {
    padding: 0;
  }

  .hero h1 {
    font-size: clamp(44px, 11vw, 68px);
  }

  .hero__visual {
    min-height: 470px;
    margin-top: 20px;
  }

  .coil {
    width: min(66vw, 360px);
    height: min(66vw, 360px);
  }

  .hero__visual::before {
    width: min(74vw, 420px);
    height: min(74vw, 420px);
  }

  .measure--top {
    right: 4%;
    width: 50%;
  }

  .hero__stats {
    position: static;
    margin-top: 20px;
  }

  .hero__stats > div {
    flex-direction: column;
    gap: 6px;
    padding: 17px 10px;
  }

  .hero__stats > div + div {
    padding-left: 10px;
  }

  .hero__stats strong {
    font-size: 17px;
  }

  .products,
  .capability {
    padding: 82px 18px;
  }

  .section-intro {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-bottom: 48px;
  }

  .section-intro p {
    max-width: 560px;
  }

  .product-row {
    grid-template-columns: 32px 1fr;
    gap: 10px 13px;
    padding-block: 23px;
  }

  .product-row > p,
  .product-row__specs {
    grid-column: 2;
  }

  .capability {
    grid-template-columns: 1fr;
    gap: 70px;
  }

  .capability__visual {
    min-height: 470px;
  }

  .sheet {
    width: min(72vw, 430px);
    height: min(48vw, 285px);
  }

  .sheet--front {
    left: 10%;
  }

  .capability__stamp {
    right: 3%;
  }

  .statement {
    padding: 78px 24px;
  }

  .closing {
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
    padding: 82px 22px;
  }

  .footer {
    flex-wrap: wrap;
    gap: 17px 24px;
    padding: 26px 0;
  }

  .footer > span {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 480px) {
  .hero h1 {
    font-size: 41px;
    letter-spacing: -0.07em;
  }

  .hero__copy > p {
    margin-top: 24px;
    font-size: 12px;
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__visual {
    min-height: 390px;
  }

  .hero__stats {
    grid-template-columns: 1fr 1fr;
  }

  .hero__stats > div:last-child {
    grid-column: 1 / -1;
    border-top: 1px solid var(--line);
    border-left: 0;
  }

  .process {
    grid-template-columns: 1fr;
  }

  .statement__quote {
    font-size: 26px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .button {
    transition: none;
  }
}
</style>
