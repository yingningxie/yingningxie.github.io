---
layout: page
permalink: /conferences/
title: presentations
description: Conference papers, posters, and invited presentations.
nav: true
nav_order: 3
---

{% include bib_search.liquid %}

<div class="publications">
  <h2>Conference presentations</h2>
  {% bibliography --file conference.bib %}

  <h2>Invited talks</h2>
  {% bibliography --file invited-talks.bib %}
</div>
