(() => {
  const story = document.getElementById("accessibility-story");
  if (!story) return;

  const presentation = story.querySelector(".aa-presentation");
  if (!presentation) return;
  const slideImage = story.querySelector("#aa-presentation-image");
  const slideFrame = story.querySelector("#aa-presentation-advance");
  const previousSlide = story.querySelector("#aa-presentation-previous");
  const nextSlide = story.querySelector("#aa-presentation-next");
  const slideStatus = story.querySelector("#aa-presentation-status");
  const slideError = story.querySelector("#aa-presentation-error");
  const slideCount = Number(presentation.dataset.slideCount);
  const presentationFrames = Array.from({ length: slideCount }, (_, index) => {
    const slide = index + 1;
    const stepCount = slide === 6 ? 5 : 1;
    return Array.from({ length: stepCount }, (_, step) => ({
      file: `slide-${String(slide).padStart(2, "0")}${stepCount > 1 ? `-step-${String(step + 1).padStart(2, "0")}` : ""}.webp`,
      label: `Slide ${slide} of ${slideCount}${stepCount > 1 ? ` · Step ${step + 1} of ${stepCount}` : ""}`,
    }));
  }).flat();
  const frameCount = presentationFrames.length;
  let slideIndex = 0;
  let slideRequest = 0;

  function showSlide(index) {
    slideIndex = Math.max(0, Math.min(index, frameCount - 1));
    const selected = slideIndex;
    const frame = presentationFrames[selected];
    const request = ++slideRequest;
    const preview = new Image();
    slideError.hidden = true;
    preview.onload = () => {
      if (request !== slideRequest) return;
      slideImage.src = preview.src;
      slideImage.dataset.index = selected;
      slideImage.alt = `Research presentation, ${frame.label.toLowerCase()}`;
      slideStatus.textContent = frame.label;
      previousSlide.disabled = selected === 0;
      nextSlide.disabled = selected === frameCount - 1;
      slideFrame.setAttribute("aria-label", selected === frameCount - 1 ? "Return to the first presentation slide" : "Next presentation slide or step");
    };
    preview.onerror = () => {
      if (request !== slideRequest) return;
      slideIndex = Number(slideImage.dataset.index || 0);
      slideError.hidden = false;
    };
    preview.src = `${presentation.dataset.slideBase}${frame.file}`;
  }

  previousSlide.addEventListener("click", () => showSlide(slideIndex - 1));
  nextSlide.addEventListener("click", () => showSlide(slideIndex + 1));
  slideFrame.addEventListener("click", () => showSlide((slideIndex + 1) % frameCount));
  presentation.addEventListener("keydown", (event) => {
    const targets = { ArrowLeft: slideIndex - 1, ArrowRight: slideIndex + 1, Home: 0, End: frameCount - 1 };
    if (!(event.key in targets)) return;
    event.preventDefault();
    showSlide(targets[event.key]);
  });
  slideFrame.disabled = false;
  story.querySelector("#aa-presentation-controls").hidden = false;
})();
