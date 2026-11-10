---
layout: page
permalink: /publications/
title: publications
description: Journal articles, manuscripts, and other written materials.
nav: true
nav_order: 2
---

{% include bib_search.liquid %}

<div class="publications">
  <h2>Journal articles</h2>
  <h3>Published</h3>
  {% bibliography --query @article %}

  <h3>Under review</h3>
  {% bibliography --query @unpublished[status=underreview] --group_by none %}

  <h2>Works in progress</h2>
  {% bibliography --query @unpublished[status=inprep] --group_by none %}

  <h2>Other written materials</h2>
  {% bibliography --file other-writing.bib %}
</div>
