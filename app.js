const DEFAULT_MENU = {
  "settings": {
    "monthlyGoal": 500,
    "buyMeACoffee": {
      "pageUrl": "https://buymeacoffee.com/yourpage",
      "apiUrl": "https://developers.buymeacoffee.com/api/v1/supporters",
      "token": "SET_YOUR_BMAC_TOKEN"
    },
    "discord": {
      "addBotUrl": "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=8&integration_type=0&scope=bot",
      "supportServerUrl": "https://discord.gg/YOUR_SERVER"
    }
  },
  "languages": [
    { "code": "hu", "country": "HU", "name": "Magyar" },
    { "code": "ar", "country": "SA", "name": "العربية" },
    { "code": "cs", "country": "CZ", "name": "Čeština" },
    { "code": "nl", "country": "NL", "name": "Nederlands" },
    { "code": "en", "country": "GB", "name": "English" },
    { "code": "fr", "country": "FR", "name": "Français" },
    { "code": "de", "country": "DE", "name": "Deutsch" },
    { "code": "el", "country": "GR", "name": "Ελληνικά" },
    { "code": "it", "country": "IT", "name": "Italiano" },
    { "code": "pl", "country": "PL", "name": "Polski" },
    { "code": "pt-BR", "country": "BR", "name": "Português (Brasil)" },
    { "code": "pt", "country": "PT", "name": "Português" },
    { "code": "ro", "country": "RO", "name": "Română" },
    { "code": "sk", "country": "SK", "name": "Slovenčina" },
    { "code": "es", "country": "ES", "name": "Español" },
    { "code": "de-CH", "country": "CH", "name": "Schweiz" },
    { "code": "tr", "country": "TR", "name": "Türkçe" }
  ],
  "nav": [
    {
      "id": "intro",
      "labelKey": "sidebar.introduction",
      "icon": "intro",
      "children": [
        { "type": "page", "id": "first-steps", "labelKey": "intro.firstSteps", "contentKey": "pages.firstSteps" }
      ]
    },
    {
      "id": "commands",
      "labelKey": "sidebar.commands",
      "icon": "slash",
      "children": [
        { "type": "commandGroup", "id": "registration", "labelKey": "commands.registration", "commands": ["/register-world-channel", "/register-world-server"] },
        { "type": "commandGroup", "id": "maps", "labelKey": "commands.maps", "commands": ["/create-player-map", "/create-tribe-map"] },
        { "type": "commandGroup", "id": "logging", "labelKey": "commands.logging", "commands": ["/logging"] },
        { "type": "commandGroup", "id": "stats", "labelKey": "commands.stats", "commands": ["/check-tribe-orientation", "/compare-tribes-orientation", "/create-tribe-daily-stat", "/compare-tribes-daily-stat", "/create-war-stat"] },
        { "type": "commandGroup", "id": "clan", "labelKey": "commands.clan", "commands": ["/set-bot-role", "/create-defender-pack", "/create-resource-pack", "/create-ticket-panel", "/create-mail-list", "/create-poll", "/create-welcome-channel"] },
        { "type": "commandGroup", "id": "notifications", "labelKey": "commands.notifications", "commands": ["/create-conquer-notification", "/create-new-world-notification", "/toggle-coords-info", "/show-report"] },
        { "type": "commandGroup", "id": "calculators", "labelKey": "commands.calculators", "commands": ["/calculate-backtime", "/calculate-coin-limit", "/calculate-noblemen-limit"] },
        { "type": "commandGroup", "id": "settings", "labelKey": "commands.settings", "commands": ["/settings list", "/settings delete-default", "/settings delete-channel"] },
        { "type": "commandGroup", "id": "emojis", "labelKey": "commands.emojis", "commands": ["/add-emojis"] },
        { "type": "commandGroup", "id": "filter", "labelKey": "commands.filter", "commands": ["/fake-coordinate-filter"] }
      ]
    },
    {
      "id": "settings-main",
      "labelKey": "sidebar.settings",
      "icon": "gear",
      "children": [
        { "type": "appearance", "id": "appearance", "labelKey": "settings.appearance", "options": ["system", "dark", "light"] },
        { "type": "language", "id": "language", "labelKey": "settings.language" }
      ]
    },
    {
      "id": "policies",
      "labelKey": "sidebar.policies",
      "icon": "policy",
      "children": [
        { "type": "page", "id": "privacy", "labelKey": "policies.privacy", "contentKey": "pages.privacy" },
        { "type": "page", "id": "terms", "labelKey": "policies.terms", "contentKey": "pages.terms" }
      ]
    }
  ],
  "commandDocs": {
    "defaultAccess": "Bárki",
    "defaultOptions": [
      { "name": "target", "type": "string", "value": ["player", "tribe", "ally"] },
      { "name": "world", "type": "number", "value": ["101"] }
    ]
  }
};

const DEFAULT_I18N = {
  "hu": {
    "topbar.discordAdd": "Add to Discord",
    "topbar.support": "Support",
    "topbar.language": "Nyelv",
    "topbar.monthlyGoal": "Havi cél",
    "sidebar.introduction": "Bevezetés",
    "sidebar.commands": "Parancsok",
    "sidebar.settings": "Beállítások",
    "sidebar.policies": "Policies",
    "intro.firstSteps": "Első lépések",
    "commands.registration": "Regisztráció",
    "commands.maps": "Térképek",
    "commands.logging": "Tevékenység naplózás",
    "commands.stats": "Statisztikák",
    "commands.clan": "Klán menedzsment",
    "commands.notifications": "Értesítések",
    "commands.calculators": "Kalkulátorok",
    "commands.settings": "Beállítások",
    "commands.emojis": "Emojis",
    "commands.filter": "Szűrő",
    "settings.appearance": "Megjelenés",
    "settings.language": "Nyelv",
    "settings.system": "Rendszer",
    "settings.dark": "Sötét mód",
    "settings.light": "Világos mód",
    "policies.privacy": "Privacy Policy",
    "policies.terms": "Terms of Service",
    "pages.firstSteps.title": "Első lépések",
    "pages.firstSteps.text": "Itt találod a bot telepítésének, konfigurálásának és első használatának lépéseit.",
    "pages.privacy.title": "Privacy Policy",
    "pages.privacy.text": "A bot csak a működéshez szükséges adatokat kezeli, a felhasználó kérésére törölhetően.",
    "pages.terms.title": "Terms of Service",
    "pages.terms.text": "A szolgáltatás használatával elfogadod a szerver és a bot szabályrendszerét.",
    "content.access": "Hozzáférés",
    "content.optionName": "Option name",
    "content.optionType": "Option type",
    "content.optionValue": "Option value",
    "content.demoImage": "Demó kép"
  },
  "en": { "topbar.discordAdd": "Add to Discord", "topbar.support": "Support", "topbar.language": "Language", "topbar.monthlyGoal": "Monthly goal" },
  "ar": { "topbar.discordAdd": "أضف إلى ديسكورد", "topbar.support": "الدعم", "topbar.language": "اللغة", "topbar.monthlyGoal": "الهدف الشهري" },
  "cs": { "topbar.discordAdd": "Přidat na Discord", "topbar.support": "Podpora", "topbar.language": "Jazyk", "topbar.monthlyGoal": "Měsíční cíl" },
  "nl": { "topbar.discordAdd": "Toevoegen aan Discord", "topbar.support": "Support", "topbar.language": "Taal", "topbar.monthlyGoal": "Maandelijks doel" },
  "fr": { "topbar.discordAdd": "Ajouter à Discord", "topbar.support": "Support", "topbar.language": "Langue", "topbar.monthlyGoal": "Objectif mensuel" },
  "de": { "topbar.discordAdd": "Zu Discord hinzufügen", "topbar.support": "Support", "topbar.language": "Sprache", "topbar.monthlyGoal": "Monatsziel" },
  "el": { "topbar.discordAdd": "Προσθήκη στο Discord", "topbar.support": "Υποστήριξη", "topbar.language": "Γλώσσα", "topbar.monthlyGoal": "Μηνιαίος στόχος" },
  "it": { "topbar.discordAdd": "Aggiungi a Discord", "topbar.support": "Supporto", "topbar.language": "Lingua", "topbar.monthlyGoal": "Obiettivo mensile" },
  "pl": { "topbar.discordAdd": "Dodaj do Discord", "topbar.support": "Wsparcie", "topbar.language": "Język", "topbar.monthlyGoal": "Cel miesięczny" },
  "pt-BR": { "topbar.discordAdd": "Adicionar ao Discord", "topbar.support": "Suporte", "topbar.language": "Idioma", "topbar.monthlyGoal": "Meta mensal" },
  "pt": { "topbar.discordAdd": "Adicionar ao Discord", "topbar.support": "Suporte", "topbar.language": "Idioma", "topbar.monthlyGoal": "Objetivo mensal" },
  "ro": { "topbar.discordAdd": "Adaugă pe Discord", "topbar.support": "Suport", "topbar.language": "Limbă", "topbar.monthlyGoal": "Obiectiv lunar" },
  "sk": { "topbar.discordAdd": "Pridať na Discord", "topbar.support": "Podpora", "topbar.language": "Jazyk", "topbar.monthlyGoal": "Mesačný cieľ" },
  "es": { "topbar.discordAdd": "Agregar a Discord", "topbar.support": "Soporte", "topbar.language": "Idioma", "topbar.monthlyGoal": "Meta mensual" },
  "de-CH": { "topbar.discordAdd": "Zu Discord hinzufügen", "topbar.support": "Support", "topbar.language": "Sprache", "topbar.monthlyGoal": "Monatsziel" },
  "tr": { "topbar.discordAdd": "Discord'a ekle", "topbar.support": "Destek", "topbar.language": "Dil", "topbar.monthlyGoal": "Aylık hedef" }
};

const state = { lang: 'hu', theme: 'system', menu: null, i18n: null, active: null, activeGroupId: null };
const icons = {
  intro: `<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M8 5v14M4 10h16"/></svg>`,
  slash: `<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><path d="M7 10.5 10 12 7 13.5"/><path d="M12 14h5"/></svg>`,
  gear: `<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z" fill="currentColor"/></svg>`,
  policy: `<svg viewBox="0 0 24 24"><path d="M12 3 4 6v6c0 5.2 3.4 8.6 8 10 4.6-1.4 8-4.8 8-10V6z"/><path d="m8.5 12 2.2 2.2 4.8-4.8"/></svg>`,
  discord: `<svg viewBox="0 0 18 14" fill="currentColor" stroke="none"><path d="M15.248 1.089A15.431 15.431 0 0011.534 0a9.533 9.533 0 00-.476.921 14.505 14.505 0 00-4.12 0A9.582 9.582 0 006.461 0a15.54 15.54 0 00-3.717 1.091C.395 4.405-.242 7.636.076 10.821A15.269 15.269 0 004.631 13c.369-.473.695-.974.975-1.499a9.896 9.896 0 01-1.536-.699c.13-.089.255-.18.377-.27 1.424.639 2.979.97 4.553.97 1.574 0 3.129-.331 4.553-.97.123.096.25.188.377.27a9.94 9.94 0 01-1.54.7c.28.525.607 1.026.976 1.498a15.2 15.2 0 004.558-2.178c.373-3.693-.639-6.895-2.676-9.733zM6.01 8.862c-.888 0-1.621-.767-1.621-1.712 0-.944.708-1.718 1.618-1.718.91 0 1.638.774 1.623 1.718-.016.945-.715 1.712-1.62 1.712zm5.98 0c-.889 0-1.62-.767-1.62-1.712 0-.944.708-1.718 1.62-1.718.912 0 1.634.774 1.618 1.718-.015.945-.713 1.712-1.618 1.712z"/></svg>`,
  support: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" stroke="none"><path d="M267.7 576.9C267.7 576.9 267.7 576.9 267.7 576.9L229.9 603.6C222.6 608.8 213 609.4 205 605.3C197 601.2 192 593 192 584L192 512L160 512C107 512 64 469 64 416L64 192C64 139 107 96 160 96L480 96C533 96 576 139 576 192L576 416C576 469 533 512 480 512L359.6 512L267.7 576.9zM332 472.8C340.1 467.1 349.8 464 359.7 464L480 464C506.5 464 528 442.5 528 416L528 192C528 165.5 506.5 144 480 144L160 144C133.5 144 112 165.5 112 192L112 416C112 442.5 133.5 464 160 464L216 464C226.4 464 235.3 470.6 238.6 479.9C239.5 482.4 240 485.1 240 488L240 537.7C272.7 514.6 303.3 493 331.9 472.8z"/></svg>`
};
const t = (k)=> state.i18n[state.lang]?.[k] || state.i18n.hu?.[k] || k;
const el = (tag, cls, html='') => { const e=document.createElement(tag); if(cls) e.className=cls; e.innerHTML=html; return e; };
const chevronIcon = () => '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5 6 8l4-3.5"/></svg>';
const sidebarToggleIcon = (collapsed) => collapsed
  ? '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M8 2.5 4 6l4 3.5"/></svg>'
  : '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M4 2.5 8 6l-4 3.5"/></svg>';

async function fetchJsonWithFallback(path, fallback) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch {
    return fallback;
  }
}

async function init() {
  const [menu, i18n] = await Promise.all([
    fetchJsonWithFallback('menu.json', DEFAULT_MENU),
    fetchJsonWithFallback('translations.json', DEFAULT_I18N)
  ]);
  state.menu = menu; state.i18n = i18n;
  state.lang = localStorage.getItem('lang') || 'hu';
  state.theme = localStorage.getItem('theme') || 'system';
  applyTheme();
  state.activeGroupId = state.menu.nav?.[0]?.id || null;
  buildTopbar();
  buildIconRail();
  buildSidebar();
  initSidebarToggle();
  await loadRevenue();
  renderPage({ title: t('pages.firstSteps.title'), text: t('pages.firstSteps.text')}, ['Dashboard', t('sidebar.introduction'), t('intro.firstSteps')]);
}

function applyTheme() {
  const root = document.documentElement;
  if(state.theme === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', state.theme);
}

function initSidebarToggle(){
  const shell = document.querySelector('.sidebar-shell');
  const appShell = document.querySelector('.app-shell');
  const btn = document.getElementById('sidebarToggle');
  const collapsedBtn = document.getElementById('sidebarToggleCollapsed');
  if(!shell || !btn || !collapsedBtn || !appShell) return;

  const applyState = (hidden) => {
    shell.classList.toggle('submenus-hidden', hidden);
    appShell.classList.toggle('sidebar-collapsed', hidden);
    btn.innerHTML = sidebarToggleIcon(hidden);
    collapsedBtn.innerHTML = sidebarToggleIcon(hidden);
    localStorage.setItem('submenusHidden', hidden ? '1' : '0');
  };

  const hidden = localStorage.getItem('submenusHidden') === '1';
  applyState(hidden);

  btn.onclick = () => applyState(true);
  collapsedBtn.onclick = () => applyState(false);
}

function buildTopbar() {
  document.getElementById('discordIcon').innerHTML = icons.discord;
  document.getElementById('supportIcon').innerHTML = icons.support;
  document.getElementById('discordAddBtn').href = state.menu.settings.discord.addBotUrl;
  document.getElementById('supportBtn').href = state.menu.settings.discord.supportServerUrl;
  document.querySelectorAll('[data-i18n]').forEach(n=> n.textContent = t(n.dataset.i18n));
  document.getElementById('progressLabel').textContent = t('topbar.monthlyGoal');
  const picker = document.getElementById('languagePicker');
  const current = document.getElementById('languageCurrent');
  const menu = document.getElementById('languageMenu');
  const activeLang = state.menu.languages.find(l=>l.code===state.lang) || state.menu.languages[0];
  current.innerHTML = `<span class="btn-icon">${svgFlag(activeLang.country)}</span><span>${activeLang.name}</span><span class="lang-arrow">${chevronIcon()}</span>`;
  menu.innerHTML = '';
  state.menu.languages.forEach(l=> {
    const b = el('button','language-item',`<span class="btn-icon">${svgFlag(l.country)}</span> ${l.name}`);
    b.onclick = ()=> { state.lang=l.code; localStorage.setItem('lang', state.lang); picker.classList.remove('open'); buildTopbar(); buildIconRail(); buildSidebar(); };
    menu.appendChild(b);
  });
  current.onclick = (e)=> { e.stopPropagation(); picker.classList.toggle('open'); };
  document.onclick = (e) => { if (!picker.contains(e.target)) picker.classList.remove('open'); };
}


function svgFlag(country){
  const code = String(country || '').toLowerCase();
  return `<img class="flag-img" src="https://flagcdn.com/${code}.svg" alt="${country} flag" loading="lazy"/>`;
}


function setTopBreadcrumb(parts){
  const n=document.getElementById('topBreadcrumb');
  if(n) n.textContent = '';
}

function buildIconRail(){
  const rail = document.getElementById('iconRail');
  rail.innerHTML='';
  state.menu.nav.forEach((group)=>{
    const b = el('button','rail-item',icons[group.icon] || icons.intro);
    if(group.id === state.activeGroupId) b.classList.add('active');
    b.title = t(group.labelKey);
    b.onclick = ()=>{
      state.activeGroupId = group.id;
      buildIconRail();
      buildSidebar();
    };
    rail.appendChild(b);
  });
}

function buildSidebar() {
  const sidebar = document.getElementById('sidebar'); sidebar.innerHTML='';
  const group = state.menu.nav.find(g => g.id === state.activeGroupId) || state.menu.nav[0];
  if (!group) return;
  group.children.forEach(child => sidebar.appendChild(buildChild(child, group)));
}

function buildChild(child, group){
  if(child.type==='commandGroup'){
    const block = el('div');
    const main = el('button','sub-item sub-toggle',`<span>${t(child.labelKey)}</span><span class="toggle-icon">${chevronIcon()}</span>`);
    const list = el('div','command-list'); list.style.display='none';
    main.onclick=()=> {
      const opening = list.style.display === 'none';
      list.style.display = opening ? 'block' : 'none';
      main.classList.toggle('open', opening);
    };
    child.commands.forEach(cmd=>{ const b=el('button','cmd-option',cmd); b.onclick=()=>renderCommand(cmd, group.labelKey, child.labelKey); list.appendChild(b); });
    block.append(main,list); return block;
  }

  if(child.type==='appearance'){
    const block = el('div');
    const main = el('button','sub-item sub-toggle',`<span>${t(child.labelKey)}</span><span class="toggle-icon">${chevronIcon()}</span>`);
    const list = el('div','command-list'); list.style.display='none';
    main.onclick=()=> {
      const opening = list.style.display === 'none';
      list.style.display = opening ? 'block' : 'none';
      main.classList.toggle('open', opening);
    };
    ['dark','light'].forEach(mode=>{
      const b = el('button','cmd-option',t(`settings.${mode}`));
      b.onclick = ()=>{ state.theme=mode; localStorage.setItem('theme', state.theme); applyTheme(); };
      list.appendChild(b);
    });
    block.append(main,list); return block;
  }

  if(child.type==='language'){
    const block = el('div');
    const main = el('button','sub-item sub-toggle',`<span>${t(child.labelKey)}</span><span class="toggle-icon">${chevronIcon()}</span>`);
    const list = el('div','command-list'); list.style.display='none';
    main.onclick=()=> {
      const opening = list.style.display === 'none';
      list.style.display = opening ? 'block' : 'none';
      main.classList.toggle('open', opening);
    };
    state.menu.languages.forEach(l=>{
      const b = el('button','cmd-option',`<span class="btn-icon">${svgFlag(l.country)}</span> ${l.name}`);
      b.onclick = ()=> { state.lang=l.code; localStorage.setItem('lang', state.lang); buildTopbar(); buildIconRail(); buildSidebar(); };
      list.appendChild(b);
    });
    block.append(main,list); return block;
  }

  const b = el('button','sub-item',t(child.labelKey));
  b.onclick=()=>{
    if(child.type==='page') renderPage({title:t(`${child.contentKey}.title`), text:t(`${child.contentKey}.text`)}, [t(group.labelKey), t(child.labelKey)]);
  };
  return b;
}

function renderPage(page, crumb){
  setTopBreadcrumb(crumb);
  document.getElementById('content').innerHTML = `<div class="card"><h1>${page.title}</h1><p>${page.text}</p></div>`;
}

function renderCommand(cmd, groupKey, subKey){
  const imageName = cmd.replace(/^\//, '').replace(/\s+/g, '-');
  const options = state.menu.commandDocs.defaultOptions.map(o=>{
    const value = o.value.length>1 ? `<select>${o.value.map(v=>`<option>${v}</option>`).join('')}</select>` : o.value[0];
    return `<tr><td>${o.name}</td><td>${o.type}</td><td>${value}</td></tr>`;
  }).join('');
  setTopBreadcrumb(['Dashboard', t('sidebar.commands'), t(subKey), cmd]);
  document.getElementById('content').innerHTML = `<div class="card">
    <h1>${cmd}</h1>
    <p>${cmd} parancs részletes leírása: a bot automatizált folyamatot indít, validációkat végez, majd naplózza az eredményt.</p>
    <p><strong>${t('content.access')}:</strong> ${state.menu.commandDocs.defaultAccess}</p>
    <div class="table-wrap"><table><thead><tr><th>${t('content.optionName')}</th><th>${t('content.optionType')}</th><th>${t('content.optionValue')}</th></tr></thead><tbody>${options}</tbody></table></div>
    <div class="figure"><strong>${t('content.demoImage')}:</strong><img src="images/${imageName}.png" alt="${cmd} demo" onerror="this.alt='Kép nem található'; this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend','<p>Kép nem található: images/${imageName}.png</p>')"/></div>
  </div>`;
}

function renderAppearance(){
  setTopBreadcrumb(['Dashboard', t('sidebar.settings'), t('settings.appearance')]);
  document.getElementById('content').innerHTML = `<div class="card"><h1>${t('settings.appearance')}</h1><div class="list-grid">${['dark','light'].map(k=>`<button class="sub-item" data-theme="${k}">${t('settings.'+k)}</button>`).join('')}</div></div>`;
  document.querySelectorAll('[data-theme]').forEach(b=>b.onclick=()=>{ state.theme=b.dataset.theme; localStorage.setItem('theme', state.theme); applyTheme(); });
}
function renderLanguageSettings(){
  setTopBreadcrumb(['Dashboard', t('sidebar.settings'), t('settings.language')]);
  document.getElementById('content').innerHTML = `<div class="card"><h1>${t('settings.language')}</h1><div class="list-grid">${state.menu.languages.map(l=>`<button class="sub-item" data-lang="${l.code}"><span class="btn-icon">${svgFlag(l.country)}</span> ${l.name}</button>`).join('')}</div></div>`;
  document.querySelectorAll('[data-lang]').forEach(b=>b.onclick=()=>{ state.lang=b.dataset.lang; localStorage.setItem('lang', state.lang); buildTopbar(); buildIconRail(); buildSidebar(); renderLanguageSettings(); });
}

async function loadRevenue(){
  const monthlyGoal = state.menu.settings.monthlyGoal;
  let amount = 0;
  try {
    const r = await fetch(state.menu.settings.buyMeACoffee.apiUrl, { headers: { Authorization: `Bearer ${state.menu.settings.buyMeACoffee.token}` } });
    const data = await r.json();
    amount = (data?.data || []).reduce((sum, s)=> sum + Number(s.support_coffee_price || 0), 0);
  } catch {
    amount = Number(localStorage.getItem('fallbackRevenue') || 120);
  }
  const rollover = Number(localStorage.getItem('rollover') || 0);
  const effective = amount + rollover;
  const pct = Math.min(100, (effective / monthlyGoal) * 100);
  if (effective > monthlyGoal) localStorage.setItem('rollover', String(effective - monthlyGoal));
  document.getElementById('progressAmount').textContent = `${effective.toFixed(0)} / ${monthlyGoal}`;
  document.getElementById('progressFill').style.width = `${pct}%`;
}

init();
