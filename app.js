const legs = [
  { n: 1, day: "Day 1", start: "Fargo start", stop: "McDonald's Watertown", maps: "820 35th Street Cir, Watertown, SD 57201", icons: ["maps", "food", "restroom", "stretch"], level: "NORMAL", drive: "146 mi / about 2 hr 15 min after the Fargo fill-up.", why: "First food/restroom/stretch stop. No fuel planned here.", tasks: "Eat, use restroom, stretch legs, drink water, check if the first leg felt harder than expected.", before: "Set Maps to Flying J Sioux Falls. If tired already, extend the break instead of forcing pace.", fuel: "$0.00", other: "$5.50", total: "$5.50", running: "$62.82", skip: "Do not skip; this is the planned lunch/restroom/stretch stop." },
  { n: 2, day: "Day 1", start: "Watertown", stop: "Flying J Travel Center Sioux Falls", maps: "5201 N Granite Ln, Sioux Falls, SD 57107", icons: ["maps", "restroom", "stretch"], level: "LOW", drive: "94 mi / about 1 hr 20 min.", why: "Short reset stop at a travel center: restroom, alertness break, latte #1 from the cooler. No purchase planned.", tasks: "Use restroom, stretch shoulders/back, drink latte #1 if planned, check fuel reserve mentally. Do not buy food unless you intentionally change the budget.", before: "Set Maps to Love's Sioux City. Confirm this next stop is not skipped, because it is the first major refill.", fuel: "$0.00", other: "$0.00", total: "$0.00", running: "$62.82", skip: "Optional only if you feel fully alert and do not need a restroom." },
  { n: 3, day: "Day 1", start: "Sioux Falls", stop: "Love's Sioux City", maps: "2525 Singing Hills Blvd, Sioux City, IA 51111", icons: ["maps", "fuel", "restroom", "stretch"], level: "CAUTION", drive: "89 mi / about 1 hr 30 min.", why: "First major refill. This protects the 3-gal / about 90-mi reserve.", tasks: "Refill to the 14.0-gal planning level, restroom, stretch, verify payment/fuel price.", before: "Set Maps to Taco Bell Omaha. Optional: route via Love's Omaha only if you need an extra restroom stop.", fuel: "$37.29", other: "$0.00", total: "$37.29", running: "$100.11", skip: "Do not skip; this is the first major refill." },
  { n: 4, day: "Day 1", start: "Sioux City", stop: "Taco Bell Omaha", maps: "16845 Polk Plaza, Omaha, NE 68135", icons: ["maps", "food", "restroom"], level: "CAUTION", drive: "About 100 mi / about 1 hr 45-50 min.", why: "Dinner stop before the late I-80 leg to Grand Island.", tasks: "Eat the planned dinner, restroom, check alertness, avoid rushing.", before: "Set Maps to Park Inn Grand Island. If your focus is fading, plan an earlier safe stop.", fuel: "$0.00", other: "$3.75", total: "$3.75", running: "$103.86", skip: "Do not skip dinner unless you have packed food ready." },
  { n: 5, day: "Day 1", start: "Omaha", stop: "Park Inn Grand Island", maps: "7301 Bosselman Ave, Grand Island, NE 68803", icons: ["maps", "sleep", "caution"], level: "HIGH", drive: "126 mi / about 1 hr 55 min.", why: "Hotel sleep stop. This is the late-night fatigue leg.", tasks: "Check in, bring important items inside, park in visible light.", before: "Set alarms. Put Day 2 first Maps entry and checks where you can see them.", fuel: "$0.00", other: "$77.35", total: "$77.35", running: "$181.21", skip: "Do not skip; this is the only hotel night in the cheap plan." },
  { n: 6, day: "Day 2", start: "Park Inn Grand Island", stop: "Casey's Cozad", maps: "510 S Meridian Ave, Cozad, NE 69130", icons: ["maps", "fuel", "food", "restroom"], level: "NORMAL", drive: "100 mi / about 1 hr 30 min.", why: "Fuel/restroom stop, then Burger King separately for the planned cheeseburger and latte #2.", tasks: "Refill, restroom, then go separately to Burger King if still following the food plan.", before: "Set Maps to River Station Valero in Sterling. Remember the clock moves back in Colorado.", fuel: "$41.31", other: "$4.50", total: "$45.81", running: "$227.01", skip: "Do not skip; fuel at Casey's is needed before the Sterling leg." },
  { n: 7, day: "Day 2", start: "Cozad", stop: "River Station Valero Sterling", maps: "1912 US Highway 6, Sterling, CO 80751", icons: ["maps", "fuel", "restroom", "caution"], level: "CAUTION", drive: "185 mi / about 2 hr 35-45 min. Time changes from CDT to MDT in Colorado.", why: "Long plains refill before the Denver approach.", tasks: "Refill to 14.0 gal, restroom, drink water, check yourself for stiffness or tunnel vision.", before: "Set Maps to Love's Hudson. Check COtrip if weather/construction looked active.", fuel: "$19.12", other: "$0.00", total: "$19.12", running: "$246.13", skip: "Do not skip; this refill restores the tank before Denver." },
  { n: 8, day: "Day 2", start: "Sterling", stop: "Love's Hudson", maps: "201 East Bison Hwy, Hudson, CO 80642", icons: ["maps", "restroom", "stretch", "check"], level: "NORMAL", drive: "85 mi / about 1 hr 15-25 min.", why: "Reset before Denver. No fuel planned; this is a navigation-control stop.", tasks: "Restroom, stretch, latte #3, open Maps settings.", before: "Turn Avoid tolls ON. Next route should be I-76 west > I-270 west > I-25 south. Reject E-470.", fuel: "$0.00", other: "$0.00", total: "$0.00", running: "$246.13", skip: "Keep it unless rested and route/toll setup is already correct." },
  { n: 9, day: "Day 2", start: "Hudson", stop: "QuikTrip Monument", maps: "1525 W Baptist Rd, Monument, CO 80921", icons: ["maps", "restroom", "stretch", "caution"], level: "HIGH", drive: "82 mi / about 1 hr 30-50 min depending on Denver traffic.", why: "Recovery stop after Denver traffic/toll-avoidance section.", tasks: "Restroom, walk/stretch, breathe down from traffic, check if you missed any toll/route issue.", before: "Set Maps to Pueblo 7-Eleven. Expect I-25 traffic and possible work-zone slowdowns.", fuel: "$0.00", other: "$0.00", total: "$0.00", running: "$246.13", skip: "Optional only if Denver traffic did not drain you." },
  { n: 10, day: "Day 2", start: "Monument", stop: "7-Eleven Pueblo", maps: "3522 N Elizabeth St, Pueblo, CO 81008", icons: ["maps", "fuel", "restroom", "caution"], level: "CAUTION", drive: "63 mi / about 50-60 min.", why: "Final fuel/restroom stop before Cuerno Verde.", tasks: "Refill to 14.0 gal, restroom, check COtrip/rest-area status, check fatigue and temperature.", before: "Set Maps to Cuerno Verde only if the rest-area plan still looks legal and safe.", fuel: "$28.37", other: "$0.00", total: "$28.37", running: "$274.50", skip: "Do not skip; final fuel buy before the rest-area night." },
  { n: 11, day: "Day 2", start: "Pueblo", stop: "Cuerno Verde Rest Area", maps: "37.963754, -104.797167", icons: ["maps", "sleep", "caution", "check"], level: "HIGH", drive: "25 mi / about 25-30 min.", why: "Overnight rest decision gate. This is not guaranteed lodging.", tasks: "Use only if open, signs allow it, and you can sleep safely with the car secured and system off.", before: "If closed/unsafe/posted against overnighting or climate control is needed, use lodging instead.", fuel: "$0.00", other: "$0.00", total: "$0.00", running: "$274.50", skip: "Do not use if closed, posted against overnighting, unsafe, or if climate control is required for sleep." },
  { n: 12, day: "Day 3", start: "Cuerno Verde", stop: "TA Springer", maps: "18 Old French Rd, Springer, NM 87747", icons: ["maps", "fuel", "restroom", "stretch", "caution"], level: "HIGH", drive: "116 mi / about 1 hr 45 min.", why: "Pre-dawn fuel/restroom/stretch stop after Raton Pass section.", tasks: "Restroom, stretch, latte #4, buy 4.0 gal to restore arrival reserve.", before: "Set Maps to Casitas de Bella. Check NMRoads and your alertness before the final 144 mi.", fuel: "$14.80", other: "$0.00", total: "$14.80", running: "$289.30", skip: "Do not skip; this replaces the 4.0-gal overnight AC allowance." },
  { n: 13, day: "Day 3", start: "Springer", stop: "Casitas de Bella Santa Fe", maps: "3357 Cerrillos Road, Santa Fe, NM 87507", icons: ["maps", "arrive", "check", "caution"], level: "CAUTION", drive: "144 mi / about 2 hr 5-15 min.", why: "Final destination and key pickup/check-in target.", tasks: "Arrive, park safely, wait for office if early, collect keys before unloading.", before: "No next drive planned. Before unloading, confirm unit access, parking, and important items.", fuel: "$0.00", other: "$0.00", total: "$0.00", running: "$289.30", skip: "Destination. No next stop planned." }
];

const iconText = { maps: "◇ Maps", fuel: "▣ Fuel", food: "♨ Food", restroom: "▥ Restroom", stretch: "☕ Stretch", sleep: "▰ Sleep", caution: "△ Caution", check: "✓ Check", arrive: "⌂ Arrive" };
const mapStops = [
  { label: "1", x: 300, y: 35, name: "Fargo start", legIndex: 0, action: "Fill full tank, pack lattes/water, begin.", icons: ["maps", "fuel", "food"] },
  { label: "2", x: 288, y: 95, name: "McDonald's Watertown", legIndex: 0, action: "Lunch, restroom, stretch. Stop cost $5.50.", icons: ["food", "restroom", "stretch"] },
  { label: "3", x: 298, y: 135, name: "Flying J Sioux Falls", legIndex: 1, action: "Restroom-only travel-center stop, latte #1 from cooler. Stop cost $0.", icons: ["restroom", "stretch"] },
  { label: "4", x: 315, y: 185, name: "Love's Sioux City", legIndex: 2, action: "Mandatory fuel refill, restroom, stretch. Stop cost $37.29.", icons: ["fuel", "restroom", "stretch", "caution"] },
  { label: "5", x: 230, y: 210, name: "Taco Bell Omaha", legIndex: 3, action: "Dinner before late I-80 leg. Stop cost $3.75.", icons: ["food", "restroom", "caution"] },
  { label: "6", x: 145, y: 218, name: "Park Inn Grand Island", legIndex: 4, action: "Hotel sleep stop. Bring important items inside. Stop cost $77.35.", icons: ["sleep", "caution"] },
  { label: "7", x: 90, y: 245, name: "Casey's Cozad", legIndex: 5, action: "Fuel/restroom, then Cozad Burger King cheeseburger. Stop cost $45.81.", icons: ["fuel", "food", "restroom"] },
  { label: "8", x: 82, y: 300, name: "River Station Valero Sterling", legIndex: 6, action: "Long-plains refill before Denver approach. Stop cost $19.12.", icons: ["fuel", "restroom", "caution"] },
  { label: "9", x: 95, y: 360, name: "Love's Hudson", legIndex: 7, action: "Travel-center reset and toll-avoidance setup. Stop cost $0.", icons: ["restroom", "stretch", "check"] },
  { label: "10", x: 74, y: 418, name: "QuikTrip Monument", legIndex: 8, action: "Recover after Denver traffic. Restroom/stretch only. Stop cost $0.", icons: ["restroom", "stretch", "caution"] },
  { label: "11", x: 92, y: 485, name: "7-Eleven Pueblo", legIndex: 9, action: "Final fuel before Cuerno Verde. Stop cost $28.37.", icons: ["fuel", "restroom", "caution"] },
  { label: "12", x: 67, y: 455, name: "Cuerno Verde Rest Area", legIndex: 10, action: "Overnight car-rest decision gate. Use only if legal, open, and safe.", icons: ["sleep", "caution", "check"] },
  { label: "13", x: 92, y: 485, name: "TA Springer", legIndex: 11, action: "Pre-dawn fuel/restroom/stretch after Raton Pass. Stop cost $14.80.", icons: ["fuel", "restroom", "stretch", "caution"] },
  { label: "14", x: 35, y: 525, name: "Casitas de Bella Santa Fe", legIndex: 12, action: "Arrive, park safely, wait for office if early.", icons: ["arrive", "check", "caution"] }
];
let current = Number(localStorage.getItem("currentLeg") || 0);
let completed = new Set(JSON.parse(localStorage.getItem("completedLegs") || "[]"));
let actuals = JSON.parse(localStorage.getItem("actualCosts") || "{}");
let startCosts = JSON.parse(localStorage.getItem("startCosts") || "{}");

function moneyNumber(value) {
  if (typeof value === "number") return value;
  return Number(String(value).replace(/[^0-9.-]/g, "")) || 0;
}

function money(value) {
  return `$${value.toFixed(2)}`;
}

function legActualCost(leg) {
  const entry = actuals[leg.n] || {};
  const fuel = entry.fuel === "" || entry.fuel == null ? moneyNumber(leg.fuel) : Number(entry.fuel);
  const other = entry.other === "" || entry.other == null ? moneyNumber(leg.other) : Number(entry.other);
  return { fuel, other, total: fuel + other, usingPlanned: (entry.fuel === "" || entry.fuel == null) && (entry.other === "" || entry.other == null) };
}

function startCostValues() {
  const fuel = startCosts.fuel === "" || startCosts.fuel == null ? 49 : Number(startCosts.fuel);
  const other = startCosts.other === "" || startCosts.other == null ? 8.32 : Number(startCosts.other);
  return { fuel, other, total: fuel + other };
}

function runningActualTotal(index) {
  let base = startCostValues().total;
  for (let i = 0; i <= index; i += 1) base += legActualCost(legs[i]).total;
  return base;
}

function saveActuals() {
  localStorage.setItem("actualCosts", JSON.stringify(actuals));
}

function saveStartCosts() {
  localStorage.setItem("startCosts", JSON.stringify(startCosts));
}

function renderSummary() {
  const total = runningActualTotal(legs.length - 1);
  const start = startCostValues();
  document.getElementById("summaryTotal").textContent = money(total);
  document.getElementById("startFuel").value = startCosts.fuel ?? "";
  document.getElementById("startOther").value = startCosts.other ?? "";
  document.getElementById("startCostNote").textContent = `Counted start cost: ${money(start.total)}. Blank fields use planned Fargo full tank $49.00 and packed lattes/items $8.32.`;
}

function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderCard() {
  current = Math.max(0, Math.min(current, legs.length - 1));
  localStorage.setItem("currentLeg", String(current));
  const leg = legs[current];
  const done = completed.has(leg.n);
  const doneCount = completed.size;
  const cost = legActualCost(leg);
  const runningActual = runningActualTotal(current);
  const entry = actuals[leg.n] || {};
  const fuelValue = entry.fuel ?? "";
  const otherValue = entry.other ?? "";
  document.getElementById("progressText").textContent = `Leg ${leg.n} of ${legs.length} · ${doneCount}/${legs.length} done`;
  document.getElementById("dayText").textContent = leg.day;
  document.getElementById("completionFill").style.width = `${Math.round((doneCount / legs.length) * 100)}%`;
  document.getElementById("completeLeg").textContent = done ? "Undo Done" : "Mark Done";
  document.getElementById("activeCard").innerHTML = `
    <div class="legHead"><h2>${done ? "✓ " : ""}${leg.start} → ${leg.stop}</h2><span class="badge ${leg.level}">${leg.level}</span></div>
    ${done ? `<div class="doneBanner">This leg is marked done.</div>` : ""}
    <div class="cardBlock"><p class="sectionTitle">Put In Maps Next</p><p class="mapQuery">${leg.maps}</p><div class="icons">${leg.icons.map(i => `<span class="chip ${i}">${iconText[i]}</span>`).join("")}</div><button class="primaryAction" onclick="location.href='${mapsUrl(leg.maps)}'">Open in Google Maps</button></div>
    <div class="cardBlock"><p class="sectionTitle">Why This Stop</p><p>${leg.why}</p></div>
    <div class="cardBlock"><p class="sectionTitle">Drive</p><p>${leg.drive}</p></div>
    <div class="cardBlock"><p class="sectionTitle">At The Stop</p><p>${leg.tasks}</p></div>
    <div class="cardBlock"><p class="sectionTitle">Before You Roll</p><p>${leg.before}</p></div>
    <div class="cardBlock costGrid primaryCosts">
      <label class="costBox editableCost"><span class="label">Fuel cost $</span><input id="actualFuel" inputmode="decimal" type="number" min="0" step="0.01" placeholder="${moneyNumber(leg.fuel).toFixed(2)}" value="${fuelValue}"></label>
      <label class="costBox editableCost"><span class="label">Food/hotel cost $</span><input id="actualOther" inputmode="decimal" type="number" min="0" step="0.01" placeholder="${moneyNumber(leg.other).toFixed(2)}" value="${otherValue}"></label>
      <div class="costBox"><span class="label">Stop cost</span><strong>${money(cost.total)}</strong></div>
      <div class="costBox"><span class="label">Running total</span><strong>${money(runningActual)}</strong></div>
    </div>
    <div class="cardBlock"><p class="sectionTitle">Can Skip?</p><p>${leg.skip}</p></div>
  `;
  bindActualInputs();
}

function bindActualInputs() {
  const fuel = document.getElementById("actualFuel");
  const other = document.getElementById("actualOther");
  if (!fuel || !other) return;
  const save = () => {
    const leg = legs[current];
    actuals[leg.n] = { fuel: fuel.value, other: other.value };
    if (fuel.value === "" && other.value === "") delete actuals[leg.n];
    saveActuals();
    renderCard();
    renderStops();
  };
  fuel.addEventListener("change", save);
  other.addEventListener("change", save);
}

function bindStartInputs() {
  const fuel = document.getElementById("startFuel");
  const other = document.getElementById("startOther");
  const save = () => {
    startCosts = { fuel: fuel.value, other: other.value };
    if (fuel.value === "" && other.value === "") startCosts = {};
    saveStartCosts();
    renderSummary();
    renderCard();
    renderStops();
    const selected = [...document.querySelectorAll(".mapStop")].findIndex(pin => pin.classList.contains("selected"));
    showMapStop(selected >= 0 ? selected : 0);
  };
  fuel.addEventListener("change", save);
  other.addEventListener("change", save);
}

function renderStops() {
  document.getElementById("stopList").innerHTML = legs.map((leg, i) => `
    <article class="stopItem ${completed.has(leg.n) ? "doneStop" : ""}">
      <h2>${completed.has(leg.n) ? "✓ " : ""}Leg ${leg.n}: ${leg.stop}</h2>
      <p>${leg.day} · ${leg.level} · Planned ${leg.total} · Counted ${money(legActualCost(leg).total)} · Running ${money(runningActualTotal(i))}</p>
      <div class="icons">${leg.icons.map(icon => `<span class="chip ${icon}">${iconText[icon]}</span>`).join("")}</div>
      <button type="button" onclick="current=${i}; showView('drive'); renderCard(); window.scrollTo(0,0)">Use This Card</button>
    </article>
  `).join("");
}

function renderMapPins() {
  document.getElementById("mapPins").innerHTML = mapStops.map((stop, index) => `
    <g class="pin mapStop" tabindex="0" role="button" aria-label="${stop.label}. ${stop.name}" data-stop-index="${index}">
      <circle cx="${stop.x}" cy="${stop.y}" r="${stop.label.length > 1 ? 13 : 11}"/>
      <text x="${stop.x}" y="${stop.y}">${stop.label}</text>
    </g>
  `).join("");
  document.querySelectorAll(".mapStop").forEach(pin => {
    const show = () => showMapStop(Number(pin.dataset.stopIndex));
    pin.addEventListener("click", show);
    pin.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        show();
      }
    });
  });
  showMapStop(0);
}

function showMapStop(index) {
  const stop = mapStops[index];
  const leg = legs[stop.legIndex];
  document.querySelectorAll(".mapStop").forEach((pin, i) => pin.classList.toggle("selected", i === index));
  document.getElementById("mapStopDetails").innerHTML = `
    <div class="detailTop">
      <span class="mapNumber">${stop.label}</span>
      <div><h2>${stop.name}</h2><p>${stop.action}</p></div>
    </div>
    <div class="icons">${stop.icons.map(i => `<span class="chip ${i}">${iconText[i]}</span>`).join("")}</div>
    <div class="costGrid mapCost">
      <div><span class="label">Caution</span><strong>${leg.level}</strong></div>
      <div><span class="label">Running</span><strong>${money(runningActualTotal(stop.legIndex))}</strong></div>
      <div><span class="label">Stop total</span><strong>${money(legActualCost(leg).total)}</strong></div>
      <div><span class="label">Next drive</span><strong>${leg.drive.split(".")[0]}</strong></div>
    </div>
    <div class="mapActions">
      <button type="button" onclick="current=${stop.legIndex}; showView('drive'); renderCard(); window.scrollTo(0,0)">Use Card</button>
      <button type="button" onclick="location.href='${mapsUrl(leg.maps)}'">Open Maps</button>
    </div>
  `;
}

function saveCompleted() {
  localStorage.setItem("completedLegs", JSON.stringify([...completed].sort((a, b) => a - b)));
}

function showView(id) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.id === id));
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.view === id));
}

document.querySelectorAll(".tab").forEach(button => button.addEventListener("click", () => showView(button.dataset.view)));
document.getElementById("prevLeg").addEventListener("click", () => { current -= 1; renderCard(); });
document.getElementById("nextLeg").addEventListener("click", () => { current += 1; renderCard(); });
document.getElementById("completeLeg").addEventListener("click", () => {
  const leg = legs[current];
  if (completed.has(leg.n)) {
    completed.delete(leg.n);
  } else {
    completed.add(leg.n);
    if (current < legs.length - 1) current += 1;
  }
  saveCompleted();
  renderCard();
  renderStops();
  window.scrollTo(0, 0);
});
document.getElementById("resetProgress").addEventListener("click", () => {
  if (confirm("Reset current leg and clear all completed checkmarks?")) {
    current = 0;
    completed = new Set();
    actuals = {};
    startCosts = {};
    saveCompleted();
    saveActuals();
    saveStartCosts();
    renderSummary();
    renderCard();
    renderStops();
  }
});
document.getElementById("openFullRoute").addEventListener("click", () => {
  const destination = legs[legs.length - 1].maps;
  const waypoints = legs.slice(0, -1).map(l => l.maps).join("|");
  location.href = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Fargo, ND")}&destination=${encodeURIComponent(destination)}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

bindStartInputs();
renderSummary();
renderCard();
renderStops();
renderMapPins();
