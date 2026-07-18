"use client";

import { useMemo, useState } from "react";

type Language = "zh" | "en";
type AllocationKey = "crops" | "cooling" | "water" | "control";

const REPOSITORY = "https://github.com/zhouxiansheng007007/sky-city-cloud";

const copy = {
  zh: {
    skip: "跳到主要内容",
    nav: ["理念", "能量沙盘", "工程形态", "路线图"],
    github: "GitHub 共建",
    language: "EN",
    eyebrow: "开放式城市基础设施 · 概念验证中",
    headlineA: "把阳光分给",
    headlineB: "生命",
    headlineC: "，而不只分给电池",
    intro:
      "天空农云不是一座漂浮城市，而是一组可回收、可系留、可实验的空中农业与遮阳模块。它把入射阳光优先分配给作物生长、蒸腾冷却和水热循环，只保留必要的控制电力。",
    primary: "参与共建",
    secondary: "查看能量沙盘",
    meta: ["光谱分配", "可控阴影", "空中水培", "开放研究"],
    visualTitle: "系留云幕 · 实验单元",
    visualStatus: "概念尺度 / 非施工图",
    visualLabels: ["太阳光谱膜", "轻量作物舱", "蒸腾冷却雾", "复合系留缆"],
    manifestoKicker: "01 / 核心命题",
    manifestoTitle: "先使用阳光，再决定是否发电。",
    manifestoBody:
      "单一追求光伏转化率，会忽略作物、阴影、蒸腾和低品位热之间的协同。我们的假设是：把阳光当作一种需要动态编排的城市资源，系统总收益可能高于单一发电。",
    fourWays: "四个去向",
    allocationLabels: {
      crops: "作物光合",
      cooling: "蒸腾冷却",
      water: "水热循环",
      control: "控制电力",
    },
    allocationNotes: {
      crops: "为选定作物保留适宜光谱与光周期",
      cooling: "用植物与水循环把热量带离敏感区域",
      water: "回收雨水、冷凝水与低品位热的可用部分",
      control: "只支撑传感、姿态、通信与安全回收",
    },
    sandboxKicker: "02 / 能量沙盘",
    sandboxTitle: "先看量级，再谈承诺。",
    sandboxBody:
      "拖动参数，观察一片实验云幕会截获多少太阳功率，以及四种用途的分配量。所有结果都是便于讨论的物理量级，不是产量或降温承诺。",
    area: "云幕面积",
    irradiance: "正午辐照度",
    share: "阳光分配",
    intercepted: "截获太阳功率",
    shadow: "瞬时阴影",
    waterEstimate: "蒸腾用水量级",
    waterContext: "按每天 6 小时、潜热 0.68 kWh/kg 粗估",
    sandboxDisclaimer:
      "模型未计入光谱选择性、膜透射、风致变形、作物饱和、泵送损耗和云量变化。请把它当作研究问题生成器。",
    formsKicker: "03 / 工程形态",
    formsTitle: "从一块可回收的实验云幕开始。",
    forms: [
      {
        no: "A",
        title: "系留云幕",
        subtitle: "Tethered canopy",
        body: "在停车场、物流园或体育场上空测试阴影、风载、回收与地面微气候。",
        tag: "第一代试点",
      },
      {
        no: "B",
        title: "悬挂农业舱",
        subtitle: "Suspended grow pods",
        body: "只搭载轻质水培、育苗、微藻等高价值模块，不追求空中大宗粮食。",
        tag: "选择性农业",
      },
      {
        no: "C",
        title: "自持生态单元",
        subtitle: "Closed-loop cell",
        body: "在小尺度内研究光谱、水、热、营养与控制电力的闭环耦合。",
        tag: "长期研究",
      },
    ],
    constraintsKicker: "04 / 必须先解决",
    constraintsTitle: "最大的敌人不是效率，而是重量、风和失效方式。",
    constraints: [
      ["风与阵风", "大面积平台本质上是一张巨型风帆；必须模块化、可泄压、可分离。"],
      ["水的重量", "1 立方米水约重 1 吨；循环库存和回收路径决定农业舱是否成立。"],
      ["极端天气", "雷电、冰雹、台风与强对流要求主动降落、冗余系留和安全区。"],
      ["空域与阳光权", "阴影覆盖、居民采光、航线和地面光伏都需要公开治理。"],
    ],
    roadmapKicker: "05 / 开源路线图",
    roadmapTitle: "把未来基础设施拆成可证伪的小实验。",
    roadmap: [
      ["现在", "公开概念", "建立共同语言、量级模型、风险清单和贡献入口。"],
      ["下一步", "地面样机", "验证光谱膜、作物响应、蒸腾耗水与材料耐候。"],
      ["试点", "500–2,000 m²", "在非核心城市上空做系留、阴影和回收演示。"],
      ["远期", "城市数字孪生", "把天气、人流、热岛、作物与空域纳入调度。"],
    ],
    communityKicker: "06 / 共同筹建",
    communityTitle: "这不是等待一个巨额投资人的项目。",
    communityBody:
      "它更适合由农业、结构、材料、城市气候、控制与公共治理团队共同拆解。你可以提交问题、数据、反例、试点场地或一份更好的方案。",
    roles: ["农业与光谱", "浮空与结构", "城市气候", "水热系统", "安全与空域", "社区治理"],
    issue: "提出一个研究问题",
    roadmapButton: "查看开放路线图",
    footerText: "天空农云是一项开放概念研究，不构成工程、投资或产量承诺。",
    source: "查看源代码",
  },
  en: {
    skip: "Skip to main content",
    nav: ["Idea", "Energy sandbox", "Forms", "Roadmap"],
    github: "Build on GitHub",
    language: "中文",
    eyebrow: "Open civic infrastructure · concept in validation",
    headlineA: "Allocate sunlight to",
    headlineB: "life",
    headlineC: ", not only to batteries",
    intro:
      "Sky City Cloud is not a floating city. It is a family of recoverable, tethered aerial farming and shade modules that prioritise crop growth, evapotranspiration and water–heat cycles, while keeping only the electricity needed for control.",
    primary: "Join the build",
    secondary: "Open the sandbox",
    meta: ["Spectral routing", "Adaptive shade", "Aerial hydroponics", "Open research"],
    visualTitle: "Tethered canopy · field cell",
    visualStatus: "Concept scale / not for construction",
    visualLabels: ["Spectral membrane", "Lightweight crop deck", "Cooling mist", "Composite tether"],
    manifestoKicker: "01 / Core proposition",
    manifestoTitle: "Use sunlight first. Then decide what becomes electricity.",
    manifestoBody:
      "Optimising only photovoltaic conversion overlooks the coupling between crops, shade, transpiration and low-grade heat. Our hypothesis: treating sunlight as a dynamically allocated urban resource may create more total value than electricity alone.",
    fourWays: "Four pathways",
    allocationLabels: {
      crops: "Crop growth",
      cooling: "Evapotranspiration",
      water: "Water & heat",
      control: "Control power",
    },
    allocationNotes: {
      crops: "Reserve suitable spectra and photoperiods for selected crops",
      cooling: "Move heat away from sensitive areas through plants and water",
      water: "Reuse the viable share of rain, condensation and low-grade heat",
      control: "Power only sensing, attitude, communication and safe recovery",
    },
    sandboxKicker: "02 / Energy sandbox",
    sandboxTitle: "Start with scale, not promises.",
    sandboxBody:
      "Adjust the assumptions to see intercepted solar power and its four possible pathways. The outputs are discussion-scale physics, not yield or cooling guarantees.",
    area: "Canopy area",
    irradiance: "Noon irradiance",
    share: "Sunlight allocation",
    intercepted: "Intercepted solar power",
    shadow: "Instantaneous shade",
    waterEstimate: "Water-use order",
    waterContext: "Roughly 6 h/day at 0.68 kWh/kg latent heat",
    sandboxDisclaimer:
      "The model omits spectral selectivity, membrane transmission, wind deformation, crop saturation, pumping losses and cloud variability. Use it to generate better research questions.",
    formsKicker: "03 / Engineering forms",
    formsTitle: "Start with one recoverable field canopy.",
    forms: [
      {
        no: "A",
        title: "Tethered canopy",
        subtitle: "系留云幕",
        body: "Test shade, wind loads, recovery and ground microclimate over parking, logistics or sports sites.",
        tag: "First pilot",
      },
      {
        no: "B",
        title: "Suspended grow pods",
        subtitle: "悬挂农业舱",
        body: "Carry only lightweight hydroponics, seedlings or algae—not bulk staple crops.",
        tag: "Selective farming",
      },
      {
        no: "C",
        title: "Closed-loop cell",
        subtitle: "自持生态单元",
        body: "Study coupled spectra, water, heat, nutrients and control power at a small scale.",
        tag: "Long research",
      },
    ],
    constraintsKicker: "04 / Solve first",
    constraintsTitle: "The hardest problems are weight, wind and graceful failure.",
    constraints: [
      ["Wind & gusts", "A large platform is a giant sail; it must be modular, ventable and separable."],
      ["Water mass", "One cubic metre of water is about one tonne; inventory and recovery define feasibility."],
      ["Extreme weather", "Lightning, hail and severe convection demand active descent, redundancy and safe zones."],
      ["Airspace & sunlight rights", "Shade, daylight, flight paths and rooftop solar require public governance."],
    ],
    roadmapKicker: "05 / Open roadmap",
    roadmapTitle: "Break future infrastructure into falsifiable experiments.",
    roadmap: [
      ["Now", "Open the concept", "Create shared language, scale models, risk registers and contribution paths."],
      ["Next", "Ground prototypes", "Validate spectral films, crop response, water demand and weathering."],
      ["Pilot", "500–2,000 m²", "Demonstrate tethering, shade and recovery away from dense urban cores."],
      ["Later", "Urban digital twin", "Coordinate weather, people, heat islands, crops and airspace."],
    ],
    communityKicker: "06 / Build together",
    communityTitle: "This project should not wait for one giant investor.",
    communityBody:
      "It is better decomposed by teams in agriculture, structures, materials, urban climate, controls and public governance. Contribute a question, dataset, counterexample, pilot site or a better design.",
    roles: ["Agriculture & spectra", "Aerostats & structures", "Urban climate", "Water & heat", "Safety & airspace", "Public governance"],
    issue: "Propose a research question",
    roadmapButton: "Read the open roadmap",
    footerText: "Sky City Cloud is open concept research, not an engineering, investment or yield promise.",
    source: "View source",
  },
} as const;

const allocationKeys: AllocationKey[] = ["crops", "cooling", "water", "control"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("zh");
  const [area, setArea] = useState(1);
  const [irradiance, setIrradiance] = useState(800);
  const [allocations, setAllocations] = useState<Record<AllocationKey, number>>({
    crops: 45,
    cooling: 25,
    water: 20,
    control: 10,
  });

  const t = copy[language];
  const interceptedMW = (area * 10000 * irradiance) / 1_000_000;
  const shadeM2 = area * 10000;
  const waterTonnes = interceptedMW * (allocations.cooling / 100) * 6 * 1.47;

  const outputs = useMemo(
    () =>
      allocationKeys.map((key) => ({
        key,
        value: allocations[key],
        mw: interceptedMW * (allocations[key] / 100),
      })),
    [allocations, interceptedMW],
  );

  function updateAllocation(key: AllocationKey, nextValue: number) {
    const value = Math.max(0, Math.min(85, nextValue));
    const otherKeys = allocationKeys.filter((item) => item !== key);
    const remaining = 100 - value;
    const otherTotal = otherKeys.reduce((sum, item) => sum + allocations[item], 0);
    const next = { ...allocations, [key]: value };

    if (otherTotal === 0) {
      const base = Math.floor(remaining / otherKeys.length);
      otherKeys.forEach((item, index) => {
        next[item] = index === otherKeys.length - 1 ? remaining - base * (otherKeys.length - 1) : base;
      });
    } else {
      let assigned = 0;
      otherKeys.forEach((item, index) => {
        const scaled =
          index === otherKeys.length - 1
            ? remaining - assigned
            : Math.round((allocations[item] / otherTotal) * remaining);
        next[item] = scaled;
        assigned += scaled;
      });
    }

    setAllocations(next);
  }

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skip}
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="天空农云">
            <span className="brand-mark" aria-hidden="true">
              <i />
            </span>
            <span className="brand-type">
              天空农云
              <small>SKY CITY CLOUD</small>
            </span>
          </a>

          <nav className="nav" aria-label="Primary navigation">
            <a href="#idea">{t.nav[0]}</a>
            <a href="#sandbox">{t.nav[1]}</a>
            <a href="#forms">{t.nav[2]}</a>
            <a href="#roadmap">{t.nav[3]}</a>
          </nav>

          <div className="header-actions">
            <button
              className="language-toggle"
              type="button"
              onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
              aria-label={language === "zh" ? "Switch to English" : "切换到中文"}
            >
              {t.language}
            </button>
            <a className="github-button" href={REPOSITORY} target="_blank" rel="noreferrer">
              <span aria-hidden="true">●</span>
              {t.github}
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.headlineA}
              <em>{t.headlineB}</em>
              {t.headlineC}
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="cta-row">
              <a
                className="button button-primary"
                href={`${REPOSITORY}/issues/new/choose`}
                target="_blank"
                rel="noreferrer"
              >
                {t.primary}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#sandbox">
                <span className="drop-icon" aria-hidden="true" />
                {t.secondary}
              </a>
            </div>
            <ul className="hero-meta" aria-label="Project themes">
              {t.meta.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="field-visual" role="img" aria-label="A tethered aerial crop canopy above a shaded city">
            <div className="visual-header">
              <span>{t.visualTitle}</span>
              <small>{t.visualStatus}</small>
            </div>
            <div className="sun" aria-hidden="true">
              <i />
            </div>
            <div className="spectral-ray ray-a" aria-hidden="true" />
            <div className="spectral-ray ray-b" aria-hidden="true" />
            <div className="spectral-ray ray-c" aria-hidden="true" />
            <div className="cloud-system" aria-hidden="true">
              <div className="cloud-lobe lobe-a" />
              <div className="cloud-lobe lobe-b" />
              <div className="cloud-lobe lobe-c" />
              <div className="membrane">
                <span />
                <span />
                <span />
              </div>
              <div className="crop-deck">
                {Array.from({ length: 11 }).map((_, index) => (
                  <i key={index} style={{ "--i": index } as React.CSSProperties} />
                ))}
              </div>
              <div className="water-loop">
                <span />
              </div>
              <div className="service-core" />
              <div className="mist mist-a" />
              <div className="mist mist-b" />
            </div>
            <div className="tether tether-a" aria-hidden="true" />
            <div className="tether tether-b" aria-hidden="true" />
            <div className="tether tether-c" aria-hidden="true" />
            <div className="shade-field" aria-hidden="true" />
            <div className="city" aria-hidden="true">
              {Array.from({ length: 12 }).map((_, index) => (
                <i key={index} style={{ "--h": `${24 + ((index * 17) % 60)}px` } as React.CSSProperties} />
              ))}
            </div>
            <ol className="visual-labels">
              {t.visualLabels.map((label, index) => (
                <li key={label} className={`label-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {label}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="manifesto" id="idea">
          <div className="shell manifesto-grid">
            <div>
              <p className="section-kicker">{t.manifestoKicker}</p>
              <h2>{t.manifestoTitle}</h2>
            </div>
            <div>
              <p className="manifesto-body">{t.manifestoBody}</p>
              <p className="micro-label">{t.fourWays}</p>
              <div className="pathway-strip">
                {allocationKeys.map((key) => (
                  <div key={key} className={`pathway pathway-${key}`}>
                    <span>{allocations[key]}%</span>
                    <strong>{t.allocationLabels[key]}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sandbox-section" id="sandbox">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">{t.sandboxKicker}</p>
                <h2>{t.sandboxTitle}</h2>
              </div>
              <p>{t.sandboxBody}</p>
            </div>

            <div className="sandbox-grid">
              <div className="control-panel">
                <label className="range-field">
                  <span>
                    {t.area}
                    <output>{area.toFixed(1)} ha</output>
                  </span>
                  <input
                    type="range"
                    min="0.5"
                    max="20"
                    step="0.5"
                    value={area}
                    onChange={(event) => setArea(Number(event.target.value))}
                  />
                </label>
                <label className="range-field">
                  <span>
                    {t.irradiance}
                    <output>{irradiance} W/m²</output>
                  </span>
                  <input
                    type="range"
                    min="400"
                    max="1000"
                    step="25"
                    value={irradiance}
                    onChange={(event) => setIrradiance(Number(event.target.value))}
                  />
                </label>

                <div className="allocation-controls">
                  <p className="micro-label">{t.share}</p>
                  {allocationKeys.map((key) => (
                    <label className={`share-control share-${key}`} key={key}>
                      <span>
                        <i aria-hidden="true" />
                        {t.allocationLabels[key]}
                        <output>{allocations[key]}%</output>
                      </span>
                      <input
                        type="range"
                        min="0"
                        max="85"
                        step="1"
                        value={allocations[key]}
                        onChange={(event) => updateAllocation(key, Number(event.target.value))}
                      />
                    </label>
                  ))}
                </div>
              </div>

              <div className="output-panel" aria-live="polite">
                <div className="primary-output">
                  <span>{t.intercepted}</span>
                  <strong>{interceptedMW.toFixed(interceptedMW < 10 ? 2 : 1)}</strong>
                  <b>MW</b>
                  <i style={{ width: `${Math.min(100, interceptedMW * 1.2)}%` }} />
                </div>
                <div className="output-stats">
                  <div>
                    <span>{t.shadow}</span>
                    <strong>{shadeM2.toLocaleString(language === "zh" ? "zh-CN" : "en-US")} m²</strong>
                  </div>
                  <div>
                    <span>{t.waterEstimate}</span>
                    <strong>≈ {waterTonnes.toFixed(1)} t/day</strong>
                    <small>{t.waterContext}</small>
                  </div>
                </div>
                <div className="output-pathways">
                  {outputs.map(({ key, value, mw }) => (
                    <div key={key} className={`output-path output-${key}`}>
                      <span>
                        <i aria-hidden="true" />
                        {t.allocationLabels[key]}
                      </span>
                      <strong>{mw.toFixed(mw < 10 ? 2 : 1)} MW</strong>
                      <div aria-hidden="true">
                        <i style={{ width: `${value}%` }} />
                      </div>
                      <p>{t.allocationNotes[key]}</p>
                    </div>
                  ))}
                </div>
                <p className="sandbox-disclaimer">{t.sandboxDisclaimer}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="forms-section" id="forms">
          <div className="shell">
            <div className="section-heading">
              <p className="section-kicker">{t.formsKicker}</p>
              <h2>{t.formsTitle}</h2>
            </div>
            <div className="form-grid">
              {t.forms.map((form) => (
                <article key={form.no} className="form-card">
                  <div className="form-topline">
                    <span>{form.no}</span>
                    <small>{form.tag}</small>
                  </div>
                  <div className={`form-figure figure-${form.no.toLowerCase()}`} aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </div>
                  <h3>{form.title}</h3>
                  <p className="form-subtitle">{form.subtitle}</p>
                  <p>{form.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="constraints-section">
          <div className="shell constraints-grid">
            <div className="constraint-intro">
              <p className="section-kicker section-kicker-light">{t.constraintsKicker}</p>
              <h2>{t.constraintsTitle}</h2>
              <div className="weight-note">
                <strong>1 m³</strong>
                <span>water ≈ 1 tonne</span>
              </div>
            </div>
            <div className="constraint-list">
              {t.constraints.map(([title, body], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap-section" id="roadmap">
          <div className="shell">
            <div className="section-heading split-heading">
              <div>
                <p className="section-kicker">{t.roadmapKicker}</p>
                <h2>{t.roadmapTitle}</h2>
              </div>
            </div>
            <ol className="roadmap">
              {t.roadmap.map(([phase, title, body], index) => (
                <li key={phase}>
                  <div className="roadmap-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="roadmap-copy">
                    <small>{phase}</small>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="community-section">
          <div className="shell community-grid">
            <div>
              <p className="section-kicker section-kicker-light">{t.communityKicker}</p>
              <h2>{t.communityTitle}</h2>
              <p>{t.communityBody}</p>
              <div className="community-actions">
                <a
                  className="button button-amber"
                  href={`${REPOSITORY}/issues/new/choose`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.issue}
                  <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href={`${REPOSITORY}/blob/main/ROADMAP.md`} target="_blank" rel="noreferrer">
                  {t.roadmapButton} →
                </a>
              </div>
            </div>
            <ul className="role-grid">
              {t.roles.map((role, index) => (
                <li key={role}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark" aria-hidden="true">
              <i />
            </span>
            <span className="brand-type">
              天空农云
              <small>SKY CITY CLOUD</small>
            </span>
          </div>
          <p>{t.footerText}</p>
          <a href={REPOSITORY} target="_blank" rel="noreferrer">
            {t.source} ↗
          </a>
        </div>
      </footer>
    </>
  );
}
