(() => {
  const beforeByLeg = {
    1: "Set Maps to McDonald's Watertown. If you are already tired before starting, delay departure instead of forcing pace.",
    2: "Set Maps to Flying J Travel Center Sioux Falls. Confirm this is a restroom/stretch stop only; no purchase is planned unless you intentionally change the budget.",
    3: "Set Maps to Love's Sioux City. Do not skip this leg, because this stop is the first major refill and protects your reserve.",
    4: "Set Maps to Taco Bell Omaha. If you need an extra restroom stop before dinner, add a safe travel-center stop intentionally.",
    5: "Set Maps to Park Inn Grand Island. This is a late-night fatigue leg; if your focus is fading, stop safely earlier instead of pushing through.",
    6: "Set Maps to Casey's Cozad. Before leaving Grand Island, check Nebraska 511 for I-80 and COtrip for the later Colorado approach.",
    7: "Set Maps to River Station Valero Sterling. Remember the clock moves back one hour when you enter Colorado.",
    8: "Set Maps to Love's Hudson. Check COtrip if weather, construction, wind, or traffic looked active on the Sterling approach.",
    9: "Set Maps to QuikTrip Monument. Turn Avoid tolls ON before leaving Hudson. Route should stay on I-76 west > I-270 west > I-25 south general lanes; reject E-470 and Express Lanes.",
    10: "Set Maps to 7-Eleven Pueblo. Expect I-25 traffic and possible work-zone slowdowns; obey posted speeds.",
    11: "Set Maps to Cuerno Verde Rest Area coordinates only if the rest-area plan still looks legal and safe. If closed, unsafe, posted against overnighting, or if climate control is needed, use lodging instead.",
    12: "Set Maps to TA Springer. Leave Cuerno Verde only if alert; check COtrip/NMRoads for Raton Pass and I-25 conditions.",
    13: "Set Maps to Casitas de Bella. Check NMRoads and your alertness before the final 144 mi."
  };

  function currentLegNumber() {
    const match = (document.getElementById("progressText")?.textContent || "").match(/Leg\s+(\d+)/i);
    return match ? Number(match[1]) : 1;
  }

  function sectionTitle(block) {
    return block.querySelector(".sectionTitle")?.textContent?.trim().toLowerCase() || "";
  }

  function applyBeforeRollFix() {
    const card = document.getElementById("activeCard");
    if (!card) return;
    const blocks = [...card.querySelectorAll(".cardBlock")];
    const beforeBlock = blocks.find(block => sectionTitle(block) === "before you roll");
    const mapsBlock = blocks.find(block => sectionTitle(block) === "put in maps next");
    if (!beforeBlock || !mapsBlock) return;

    const text = beforeByLeg[currentLegNumber()];
    const body = [...beforeBlock.querySelectorAll("p")].find(p => !p.classList.contains("sectionTitle"));
    if (body && text && body.textContent !== text) body.textContent = text;

    if (beforeBlock.compareDocumentPosition(mapsBlock) & Node.DOCUMENT_POSITION_PRECEDING) {
      card.insertBefore(beforeBlock, mapsBlock);
    }
  }

  document.addEventListener("click", event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.closest("button")) setTimeout(applyBeforeRollFix, 0);
  });

  const card = document.getElementById("activeCard");
  if (card) new MutationObserver(applyBeforeRollFix).observe(card, { childList: true, subtree: true });
  setTimeout(applyBeforeRollFix, 0);
})();
