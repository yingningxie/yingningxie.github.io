(() => {
  const story = document.getElementById("accessibility-story");
  if (!story) return;

  const attribute = story.querySelector("#aa-attribute");
  const rows = story.querySelectorAll("#aa-data-table tbody tr");
  const modes = ["car", "ebike", "transit"];

  function updateComparison() {
    const row = Array.from(rows).find((item) => item.dataset.attribute === attribute.value);
    story.querySelector("#aa-chart-title").textContent = row.cells[0].textContent;
    modes.forEach((mode, index) => {
      const value = Number(row.cells[index + 1].textContent);
      story.querySelector(`#aa-value-${mode}`).textContent = value.toFixed(1);
      story.querySelector(`#aa-bar-${mode}`).style.width = `${(value / 30) * 100}%`;
    });
  }

  attribute.addEventListener("change", updateComparison);
  updateComparison();
  story.querySelector("#aa-controls").hidden = false;

  const correlationData = JSON.parse(story.querySelector("#aa-correlation-data").textContent);
  const correlationIndicator = story.querySelector("#aa-correlation-indicator");
  const correlationMeasure = story.querySelector("#aa-correlation-measure");
  const significanceLabels = { "": "p ≥ .05", a: "p < .05", "**": "p < .01", "***": "p < .001" };

  function updateCorrelations() {
    const measure = correlationMeasure.value;
    const indicator = correlationData.indicators.find((item) => item.id === correlationIndicator.value);
    const body = story.querySelector("#aa-correlation-table tbody");
    body.replaceChildren();
    correlationData.groups.filter((group) => measure === "index" || group.id !== "all").forEach((group) => {
      const row = document.createElement("tr");
      const heading = document.createElement("th");
      heading.scope = "row";
      heading.textContent = group.label;
      row.append(heading);
      modes.forEach((mode) => {
        const data = correlationData.rows.find((item) => item.measure === measure && item.mode === mode && item.group === group.id);
        const value = data.values[indicator.id];
        const cell = document.createElement("td");
        const formatted = value.rho.toFixed(2).replace("-", "−");
        cell.dataset.rho = value.rho;
        cell.dataset.direction = value.rho < 0 ? "negative" : "positive";
        cell.style.setProperty("--aa-rho-strength", Math.abs(value.rho));
        cell.textContent = formatted;
        cell.title = `Spearman’s ρ = ${formatted}; ${significanceLabels[value.significance]}`;
        if (value.significance) {
          const significance = document.createElement("sup");
          significance.textContent = value.significance;
          cell.append(significance);
        }
        row.append(cell);
      });
      body.append(row);
    });
    const isRatio = measure === "ratio";
    story.querySelector("#aa-correlation-caption").textContent = `Spearman’s ρ: ${indicator.label} and ${isRatio ? "provider shares" : "accessibility indices"}`;
    story.querySelector("#aa-correlation-explanation").textContent = `A positive ρ means a higher value of this population characteristic is associated with ${isRatio ? "a higher share of reachable providers with that attribute" : "a higher accessibility index"}; a negative ρ means ${isRatio ? "a lower share" : "a lower index"}.`;
  }

  correlationIndicator.addEventListener("change", updateCorrelations);
  correlationMeasure.addEventListener("change", updateCorrelations);
  updateCorrelations();
  story.querySelector("#aa-correlation-controls").hidden = false;

  story.querySelectorAll(".aa-map-switch").forEach((panel) => {
    const choices = Array.from(panel.querySelectorAll(".aa-map-choices button"));
    const frame = panel.querySelector(".aa-map-switch-frame");
    const image = frame.querySelector("img");
    const status = panel.querySelector(".aa-map-switch-status");
    const fullSize = panel.querySelector(".aa-map-full-size");
    let selected = 0;
    let request = 0;

    function selectMap(index) {
      const choice = choices[index];
      const nextRequest = ++request;
      const preview = new Image();
      preview.onload = () => {
        if (nextRequest !== request) return;
        selected = index;
        image.src = choice.dataset.src;
        image.alt = choice.dataset.alt;
        fullSize.href = choice.dataset.src;
        status.textContent = choice.dataset.description;
        choices.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
        frame.setAttribute("aria-label", `Show ${choices[1 - index].dataset.label.toLowerCase()} map`);
      };
      preview.onerror = () => {
        if (nextRequest === request) status.textContent = "This map could not load. Please try again.";
      };
      preview.src = choice.dataset.src;
    }

    choices.forEach((button, index) => button.addEventListener("click", () => selectMap(index)));
    frame.addEventListener("click", () => selectMap(1 - selected));
    frame.disabled = false;
    panel.querySelector(".aa-map-choices").hidden = false;
  });

  const exampleMode = story.querySelector("#aa-example-mode");
  const exampleAttribute = story.querySelector("#aa-example-attribute");
  const providers = Array.from(story.querySelectorAll(".aa-provider"));
  const modeLabels = { car: "car", ebike: "e-bike", transit: "transit" };
  const exampleMap = story.querySelector("#aa-example-map");
  const mapFigure = story.querySelector(".aa-example-map");
  const attributeMaps = { all: "all", certified: "reach", rated: "rated", nonEnglish: "reach", spanish: "spanish" };
  const playButton = story.querySelector("#aa-map-play");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let slideshowTimer;
  let isPlaying = false;
  let mapInView = false;
  let mapRequest = 0;
  let mapFade;
  const image = story.querySelector("#aa-map-image");
  const outgoingImage = document.createElement("img");
  outgoingImage.className = "aa-map-outgoing";
  outgoingImage.alt = "";
  outgoingImage.setAttribute("aria-hidden", "true");
  outgoingImage.hidden = true;
  image.after(outgoingImage);

  function setPlaying(playing) {
    isPlaying = playing;
    window.clearInterval(slideshowTimer);
    playButton.dataset.playing = String(playing);
    playButton.setAttribute("aria-label", playing ? "Pause map slideshow" : "Play map slideshow");
    story.querySelector("#aa-map-caption").setAttribute("aria-live", playing ? "off" : "polite");
    if (playing) {
      slideshowTimer = window.setInterval(() => {
        if (mapInView && !document.hidden && !mapFigure.matches(":hover")) advanceMap(1);
      }, 2000);
    }
  }

  function advanceMap(direction) {
    exampleMap.selectedIndex = (exampleMap.selectedIndex + direction + exampleMap.options.length) % exampleMap.options.length;
    updateMap();
  }

  function updateMap() {
    const option = exampleMap.selectedOptions[0];
    const request = ++mapRequest;
    let caption = option.dataset.caption;
    if (exampleMap.value === "reach" && ["certified", "nonEnglish"].includes(exampleAttribute.value)) {
      caption += ` The presentation has no separate map for ${exampleAttribute.selectedOptions[0].textContent.toLowerCase()}; the provider cards and calculation below follow your selected filter.`;
    }
    function showMap() {
      if (request !== mapRequest) return;
      if (mapFade) mapFade.cancel();
      const changed = image.getAttribute("src") !== option.dataset.src;
      outgoingImage.hidden = true;
      if (changed && !reducedMotion.matches) {
        outgoingImage.src = image.src;
        outgoingImage.hidden = false;
        mapFade = outgoingImage.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 1500, easing: "ease-in-out", fill: "forwards" });
        mapFade.onfinish = () => { outgoingImage.hidden = true; };
      }
      image.src = option.dataset.src;
      image.alt = option.dataset.alt;
      mapFigure.querySelectorAll("a").forEach((link) => { link.href = option.dataset.src; });
      story.querySelector("#aa-map-caption").textContent = caption;
    }
    if (image.getAttribute("src") === option.dataset.src) {
      showMap();
    } else {
      const nextImage = new Image();
      nextImage.onload = showMap;
      nextImage.src = option.dataset.src;
    }
  }

  function updateExample(event) {
    if (event) setPlaying(false);
    if (event && event.target === exampleAttribute) exampleMap.value = attributeMaps[exampleAttribute.value];
    updateMap();
    const included = providers.filter((provider) => {
      const reachable = provider.dataset.modes.split(" ").includes(exampleMode.value);
      let matches = true;
      if (exampleAttribute.value === "certified") matches = provider.dataset.certified === "true";
      if (exampleAttribute.value === "rated") matches = Number(provider.dataset.rating) >= 4;
      if (exampleAttribute.value === "nonEnglish") matches = provider.dataset.nonenglish === "true";
      if (exampleAttribute.value === "spanish") matches = provider.dataset.spanish === "true";
      const selected = reachable && matches;
      provider.classList.toggle("is-included", selected);
      provider.querySelector(".aa-provider-status").textContent = selected
        ? "Included"
        : reachable ? "Attribute does not match" : "Outside travel reach";
      return selected;
    });
    const score = included.reduce((sum, provider) => sum + 10000 / Number(provider.dataset.population), 0);
    const value = score.toFixed(5);
    story.querySelector("#aa-example-summary").textContent =
      `By ${modeLabels[exampleMode.value]}, ${included.length} of the 3 sample doctors are reachable and match the selected attribute.`;
    story.querySelector("#aa-example-score").textContent = value;
    story.querySelector("#aa-example-formula").textContent = included.length
      ? `(${included.map((provider) => `1 / ${Number(provider.dataset.population).toLocaleString("en-US")}`).join(" + ")}) × 10,000 = ${value}`
      : "No matching providers within reach: the contribution is 0.";
  }

  exampleMode.addEventListener("change", updateExample);
  exampleAttribute.addEventListener("change", updateExample);
  exampleMap.addEventListener("change", () => { setPlaying(false); updateMap(); });
  story.querySelector("#aa-map-previous").addEventListener("click", () => { setPlaying(false); advanceMap(-1); });
  story.querySelector("#aa-map-next").addEventListener("click", () => { setPlaying(false); advanceMap(1); });
  playButton.addEventListener("click", () => setPlaying(!isPlaying));
  mapFigure.addEventListener("focusin", (event) => { if (event.target !== playButton) setPlaying(false); });
  reducedMotion.addEventListener("change", (event) => { if (event.matches) setPlaying(false); });
  const visibility = new IntersectionObserver(([entry]) => { mapInView = entry.isIntersecting; }, { threshold: 0.15 });
  visibility.observe(mapFigure);
  updateExample();
  story.querySelector("#aa-example-controls").hidden = false;
  story.querySelector("#aa-map-navigation").hidden = false;
  setPlaying(!reducedMotion.matches);
})();
