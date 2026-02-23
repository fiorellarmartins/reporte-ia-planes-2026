function getBadgeClass(pct) {
  if (pct <= 25) return "badge-bajo";
  if (pct <= 50) return "badge-medio";
  if (pct <= 75) return "badge-alto";
  return "badge-muy-alto";
}

function getBarColor(pct) {
  if (pct <= 25) return "#16a34a";
  if (pct <= 50) return "#ca8a04";
  if (pct <= 75) return "#ea580c";
  return "#dc2626";
}

function getPorcentajeDisplay(versiones) {
  const pcts = versiones.map(v => Math.round(v.porcentaje));
  const min = Math.min(...pcts);
  const max = Math.max(...pcts);
  return min === max ? `${max}%` : `${min}–${max}%`;
}

function getMaxPorcentaje(versiones) {
  return Math.max(...versiones.map(v => v.porcentaje));
}

function getMaxPalabras(versiones) {
  const vals = versiones.map(v => v.palabras).filter(v => v !== null);
  return vals.length ? Math.max(...vals) : null;
}

function getPalabrasDisplay(versiones) {
  const vals = versiones.map(v => v.palabras).filter(v => v !== null);
  if (!vals.length) return "—";
  const min = Math.min(...vals);
  const max = Math.max(...vals);
  return min === max
    ? max.toLocaleString("es-PE")
    : `${min.toLocaleString("es-PE")}–${max.toLocaleString("es-PE")}`;
}

function formatPalabras(n) {
  if (n === null) return "—";
  return n.toLocaleString("es-PE");
}

// Sort state: single active column
let sortKey = "pct";
let sortDir = "desc";

function getVal(p, key) {
  if (key === "pct")      return getMaxPorcentaje(p.versiones);
  if (key === "palabras") return getMaxPalabras(p.versiones);
  if (key === "nombre")   return p.partido;
  return null;
}

function sortPartidos(data) {
  return [...data].sort((a, b) => {
    const va = getVal(a, sortKey);
    const vb = getVal(b, sortKey);
    if (sortKey === "nombre") {
      const cmp = (va ?? "").localeCompare(vb ?? "", "es");
      return sortDir === "asc" ? cmp : -cmp;
    }
    const na = va ?? (sortDir === "asc" ? Infinity : -Infinity);
    const nb = vb ?? (sortDir === "asc" ? Infinity : -Infinity);
    return sortDir === "asc" ? na - nb : nb - na;
  });
}

function updateHeaders() {
  document.querySelectorAll(".col-sort").forEach(btn => {
    const key = btn.dataset.sort;
    const icon = btn.querySelector(".sort-icon");
    const active = key === sortKey;
    btn.classList.toggle("active", active);
    icon.textContent = active ? (sortDir === "asc" ? "↑" : "↓") : "";
  });
}

function handleSortClick(key) {
  if (key === sortKey) {
    sortDir = sortDir === "asc" ? "desc" : "asc";
  } else {
    sortKey = key;
    sortDir = key === "nombre" ? "asc" : "desc";
  }
  updateHeaders();
  renderLista();
}

function renderSparklineSVG(pts, id) {
  if (!pts || !pts.length) return "";
  const n = pts.length;
  const W = 400, H = 120;
  const padL = 36, padR = 8, padT = 14, padB = 22;
  const w = W - padL - padR;
  const h = H - padT - padB;
  const gid = `sg${id}`.replace(/[^a-z0-9]/gi, "_");

  const coords = pts.map((v, i) => [
    padL + (i / (n - 1)) * w,
    padT + (1 - v / 100) * h
  ]);

  const linePoints = coords.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const baseY = (padT + h).toFixed(1);
  const fillPath = `M${coords[0][0].toFixed(1)},${baseY} ` +
    coords.map(([x, y]) => `L${x.toFixed(1)},${y.toFixed(1)}`).join(" ") +
    ` L${coords[n - 1][0].toFixed(1)},${baseY} Z`;

  return `<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" class="sparkline-svg" aria-hidden="true">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#ea580c" stop-opacity="0.22"/>
        <stop offset="100%" stop-color="#ea580c" stop-opacity="0.03"/>
      </linearGradient>
    </defs>
    <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${baseY}" stroke="#e2e2e2" stroke-width="1"/>
    <line x1="${padL}" y1="${baseY}" x2="${(padL + w).toFixed(1)}" y2="${baseY}" stroke="#e2e2e2" stroke-width="1"/>
    <text x="${padL - 4}" y="${padT + 4}" text-anchor="end" class="sparkline-label">IA</text>
    <text x="${padL - 4}" y="${parseFloat(baseY) + 1}" text-anchor="end" class="sparkline-label">HUM.</text>
    <path d="${fillPath}" fill="url(#${gid})"/>
    <polyline points="${linePoints}" fill="none" stroke="#ea580c" stroke-width="1.8"
      stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
}

function buildDisclaimerIcon(key) {
  const text = key ? disclaimers[key] : null;
  if (!text) return "";
  return `<span class="disclaimer-icon">IA<span class="disclaimer-icon-tooltip">Este partido declaró uso de IA en la elaboración del documento: "${text}"</span></span>`;
}

const BREAKDOWN_LABELS = ["Generado por IA", "Asistencia moderada de IA", "Asistencia leve de IA", "Escrito por humanos"];
const BREAKDOWN_COLORS = ["#ea580c", "#f59e0b", "#eab308", "#16a34a"];

function buildBreakdownTableHTML(key) {
  const vals = key ? breakdowns[key] : null;
  if (!vals) return "";
  return `<div class="breakdown-table">
    ${vals.map((v, i) => `
      <div class="breakdown-row">
        <span class="breakdown-bar" style="background:${BREAKDOWN_COLORS[i]}"></span>
        <span class="breakdown-pct">${Math.round(v)}%</span>
        <span class="breakdown-label">${BREAKDOWN_LABELS[i]}</span>
      </div>`).join("")}
  </div>`;
}

function buildGraficoInner(v, id) {
  const pts = v.sparklineKey ? sparklines[v.sparklineKey] : null;
  const bdKey = v.breakdownKey || null;
  if (!pts && !bdKey) return "";
  return `<div class="grafico-inner">
    ${buildBreakdownTableHTML(bdKey)}
    ${pts ? `<div class="sparkline-wrap">
      <span class="sparkline-info">?<span class="sparkline-tooltip">Probabilidad de contenido generado por IA a lo largo del documento, de inicio a fin. El eje Y va de 0% (escrito por humanos) a 100% (generado por IA).</span></span>
      ${buildDisclaimerIcon(v.sparklineKey)}
      ${renderSparklineSVG(pts, id)}
    </div>` : ""}
  </div>`;
}

function buildDropdownHTML(p, i) {
  return `<div class="dropdown" id="dropdown-${i}" hidden>
    ${p.versiones.map((v, vi) => {
      const inner = buildGraficoInner(v, `${i}_${vi}`);
      return `<div class="dropdown-row">
        <div class="dropdown-row-header">
          <span class="dropdown-version">${v.version || "Plan de gobierno"}</span>
          <span class="pct-badge ${getBadgeClass(v.porcentaje)}" style="font-size:0.75rem;">${Math.round(v.porcentaje)}%</span>
          ${v.palabras !== null ? `<span class="dropdown-palabras">${formatPalabras(v.palabras)} palabras</span>` : ""}
          ${v.pangram
            ? `<a href="${v.pangram}" target="_blank" rel="noopener" class="ver-reporte ver-reporte-sm">Ver reporte <span class="ext-arrow">↗</span></a>`
            : `<span class="sin-link">Sin enlace</span>`}
          ${v.pdf
            ? `<a href="${v.pdf}" target="_blank" rel="noopener" class="ver-reporte ver-reporte-sm">Plan original <span class="ext-arrow">↗</span></a>`
            : ""}
        </div>
        ${inner ? `<div class="grafico-inner-wrap">${inner}</div>` : ""}
      </div>`;
    }).join("")}
  </div>`;
}

function buildGraficoHTML(v, i) {
  const pts = v.sparklineKey ? sparklines[v.sparklineKey] : null;
  const bdKey = v.breakdownKey || null;
  if (!pts && !bdKey) return "";
  return `<div class="grafico" id="grafico-${i}" hidden>
    ${buildGraficoInner(v, i)}
  </div>`;
}

function renderLista() {
  const sorted = sortPartidos(partidos);
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  sorted.forEach((p, i) => {
    const multi = p.versiones.length > 1;
    const maxPct = getMaxPorcentaje(p.versiones);
    const pctDisplay = getPorcentajeDisplay(p.versiones);
    const badgeClass = getBadgeClass(maxPct);
    const maxPalabras = getMaxPalabras(p.versiones);

    const hasSparkline = p.versiones.some(v => v.sparklineKey && sparklines[v.sparklineKey]);
    const expandable = hasSparkline || multi;

    const logoHTML = p.logo
      ? `<img src="${p.logo}" alt="${p.partido}" class="logo" />`
      : `<div class="logo-placeholder">${p.partido.charAt(0)}</div>`;

    const linkHTML = multi ? "" : [
      p.versiones[0].pangram ? `<a href="${p.versiones[0].pangram}" target="_blank" rel="noopener" class="ver-reporte">Ver reporte <span class="ext-arrow">↗</span></a>` : "",
      p.versiones[0].pdf ? `<a href="${p.versiones[0].pdf}" target="_blank" rel="noopener" class="ver-reporte">Plan original <span class="ext-arrow">↗</span></a>` : ""
    ].join("");

    const expansionHTML = multi
      ? buildDropdownHTML(p, i)
      : buildGraficoHTML(p.versiones[0], i);

    const fila = document.createElement("div");
    fila.className = "fila-wrapper";
    fila.innerHTML = `
      <div class="fila${multi ? " fila-multi" : ""}${expandable ? " fila-expandable" : ""}"
           ${expandable ? `role="button" data-index="${i}" aria-expanded="false"` : ""}>
        <span class="col-chevron">
          ${expandable ? `<span class="chevron">›</span>` : ""}
        </span>
        <span class="col-pct">
          <span class="pct-badge ${badgeClass}">${pctDisplay}</span>
        </span>
        <span class="col-partido">
          ${logoHTML}
          <span class="partido-info">
            <span class="partido-nombre">${p.partido}</span>
            <span class="candidato-nombre">${p.candidato}</span>
          </span>
        </span>
        <span class="col-palabras">${getPalabrasDisplay(p.versiones)}</span>
        <span class="col-link">${linkHTML}</span>
      </div>
      ${expansionHTML}
    `;

    lista.appendChild(fila);
  });
}

// Single delegated click handler on lista
document.getElementById("lista").addEventListener("click", (e) => {
  if (e.target.closest("a")) return; // don't intercept link clicks
  const fila = e.target.closest(".fila-expandable");
  if (!fila) return;

  const idx = fila.dataset.index;
  const expanded = fila.getAttribute("aria-expanded") === "true";
  fila.setAttribute("aria-expanded", String(!expanded));

  const chevron = fila.querySelector(".chevron");
  if (chevron) chevron.style.transform = expanded ? "" : "rotate(90deg)";

  const dropdown = document.getElementById(`dropdown-${idx}`);
  if (dropdown) dropdown.hidden = expanded;

  const grafico = document.getElementById(`grafico-${idx}`);
  if (grafico) grafico.hidden = expanded;
});

// Column header sort
document.querySelectorAll(".col-sort").forEach(btn => {
  btn.addEventListener("click", () => handleSortClick(btn.dataset.sort));
});

updateHeaders();
renderLista();
