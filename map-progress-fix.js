(() => {
  const preferredPinByLeg = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7, 7: 8, 8: 9, 9: 10, 10: 11, 11: 12, 12: 13 };
  const pinLegs = [0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  function currentLegIndex() {
    const text = document.getElementById("progressText")?.textContent || "";
    const match = text.match(/Leg\s+(\d+)/i);
    return match ? Math.max(0, Number(match[1]) - 1) : 0;
  }

  function doneLegs() {
    try {
      return new Set(JSON.parse(localStorage.getItem("completedLegs") || "[]"));
    } catch {
      return new Set();
    }
  }

  function refreshPins() {
    const current = currentLegIndex();
    const done = doneLegs();
    document.querySelectorAll(".mapStop").forEach((pin, index) => {
      const legNumber = pinLegs[index] + 1;
      pin.classList.toggle("done", done.has(legNumber));
      pin.classList.toggle("current", pinLegs[index] === current);
    });
  }

  function syncMapToCurrentLeg() {
    refreshPins();
    const current = currentLegIndex();
    const pinIndex = preferredPinByLeg[current] ?? 0;
    if (typeof window.showMapStop === "function") window.showMapStop(pinIndex);
    refreshPins();
  }

  document.addEventListener("click", event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.matches('[data-view="map"]')) setTimeout(syncMapToCurrentLeg, 0);
    if (target.id === "completeLeg" || target.id === "prevLeg" || target.id === "nextLeg") setTimeout(refreshPins, 0);
  });

  setTimeout(refreshPins, 0);
})();
