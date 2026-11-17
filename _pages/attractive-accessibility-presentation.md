---
layout: page
title: Attractive accessibility · Presentation
permalink: /attractive-accessibility/presentation/
description: Healthcare accessibility in New Jersey — methods, maps, and findings.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/attractive-accessibility.css' | relative_url | bust_file_cache }}">

<div id="accessibility-story">
  <p class="aa-eyebrow">Yingning Xie &amp; Michael Smart · Research presentation</p>
  <div class="aa-intro">
    <p>Explore the study’s motivation, methods, maps, and findings. Use the arrows or click a slide to advance; the Fort Lee example unfolds one step at a time.</p>
    <div class="aa-actions">
      <a href="{{ '/attractive-accessibility/' | relative_url }}">Back to the journal article companion <span aria-hidden="true">←</span></a>
      <a href="{{ '/assets/pdf/attractive-accessibility-presentation.pdf' | relative_url }}" download>Download presentation (PDF) <span aria-hidden="true">↓</span></a>
    </div>
  </div>
    <div class="aa-presentation" role="region" aria-label="Research presentation slideshow" data-slide-base="{{ '/assets/img/attractive-accessibility/presentation/' | relative_url }}" data-slide-count="19">
      <button type="button" class="aa-presentation-frame" id="aa-presentation-advance" aria-label="Next presentation slide or step" disabled>
        <img id="aa-presentation-image" src="{{ '/assets/img/attractive-accessibility/presentation/slide-01.webp' | relative_url }}" width="1920" height="1080" loading="lazy" alt="Research presentation, slide 1 of 19">
      </button>
      <div class="aa-presentation-toolbar" id="aa-presentation-controls" hidden>
        <button type="button" id="aa-presentation-previous" aria-label="Previous presentation slide or step" disabled><span aria-hidden="true">◀</span></button>
        <span id="aa-presentation-status" role="status" aria-live="polite" aria-atomic="true">Slide 1 of 19</span>
        <button type="button" id="aa-presentation-next" aria-label="Next presentation slide or step"><span aria-hidden="true">▶</span></button>
      </div>
      <p class="aa-note" id="aa-presentation-error" role="alert" hidden>That slide could not load. Please try again or download the PDF below.</p>
    </div>
</div>

<script defer src="{{ '/assets/js/attractive-accessibility-presentation.js' | relative_url | bust_file_cache }}"></script>
