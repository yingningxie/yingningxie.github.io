---
layout: page
title: Powering bikeshare
permalink: /powering-bikeshare/
description: Explore the findings from a study of Citi Bike e-bikes and classic bikes in New York City.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/powering-bikeshare.css' | relative_url | bust_file_cache }}">

<div id="bikeshare-story">
  <div class="bs-eyebrow">Interactive research companion · September 2022 Citi Bike trips</div>
  <div class="bs-intro">
    <div>
      <p class="bs-lede">How did people use shared e-bikes and classic bikes differently in New York City?</p>
      <p>Explore trip patterns and station-level model results from Xie, Smart, and Noland (2024). The analysis compares trips starting at 1,614 Citi Bike stations during one month.</p>
      <div class="bs-actions">
        <a class="bs-primary-link" href="#trip-patterns">Explore the findings <span aria-hidden="true">↓</span></a>
        <a href="{{ '/powering-bikeshare/poster/' | relative_url }}">View the research poster <span aria-hidden="true">↗</span></a>
        <a href="https://doi.org/10.1080/03081060.2024.2341301">Read the journal article <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="bs-bike-art" aria-hidden="true">
      <img src="{{ '/assets/img/ebike.png' | relative_url }}" width="512" height="512" alt="">
    </div>
  </div>

  <div class="bs-metrics" aria-label="Study at a glance">
    <div><strong>3.37 million</strong><span>valid trips</span></div>
    <div><strong>1,614</strong><span>start stations</span></div>
    <div><strong>19%</strong><span>of trips on e-bikes</span></div>
  </div>

  <section id="trip-patterns" class="bs-section" aria-labelledby="bs-trip-heading">
    <div class="bs-section-head">
      <div><span class="bs-section-number">01 / Trip patterns</span><h2 id="bs-trip-heading">A different mix of trips</h2></div>
      <p>Choose a rider group to compare the share of trips made on each bike type and the difference in average trip distance.</p>
    </div>

    <div class="bs-card">
      <div class="bs-choice" role="group" aria-label="Rider group for trip patterns">
        <button type="button" class="is-active" data-trip-group="all" aria-pressed="true">All trips</button>
        <button type="button" data-trip-group="member" aria-pressed="false">Members</button>
        <button type="button" data-trip-group="casual" aria-pressed="false">Casual riders</button>
      </div>
      <div class="bs-trip-grid">
        <div>
          <h3 id="bs-trip-group-label">All trips</h3>
          <p class="bs-small">Share of trips by bike type</p>
          <div id="bs-trip-bar" class="bs-trip-bar" role="img" aria-label="19 percent e-bike trips and 81 percent classic bike trips">
            <span id="bs-classic-share" class="bs-trip-classic" style="width: 81%">Classic 81%</span>
            <span id="bs-ebike-share" class="bs-trip-ebike" style="width: 19%">19%</span>
          </div>
          <div class="bs-legend"><span><i class="bs-key bs-key-classic"></i> Classic bike</span><span><i class="bs-key bs-key-ebike"></i> E-bike</span></div>
        </div>
        <div class="bs-distance">
          <span>Average e-bike trip distance</span>
          <strong id="bs-distance-value">19% farther</strong>
          <p id="bs-distance-note">than classic bike trips, across all riders</p>
        </div>
      </div>
      <p class="bs-footnote">Shares and distance differences are rounded values reported in the article. Distance is the straight-line distance between trip start and end stations, not the route traveled.</p>
    </div>

    <div class="bs-observation">
      <span class="bs-observation-label">Time of day</span>
      <p>For members, classic-bike trips had clear morning and evening peaks. E-bike trip counts had flatter peaks, and e-bikes reached their highest share of member trips around 3 p.m. (22%).</p>
    </div>
  </section>

  <section id="model-results" class="bs-section" aria-labelledby="bs-model-heading">
    <div class="bs-section-head">
      <div><span class="bs-section-number">02 / Station-level models</span><h2 id="bs-model-heading">What is associated with trip starts?</h2></div>
      <p>Compare selected coefficient estimates from six spatial regression models. Each model examines trip counts at stations and characteristics of their surrounding service areas.</p>
    </div>

    <div class="bs-card">
      <div class="bs-model-toolbar">
        <div class="bs-choice" role="group" aria-label="Rider group for model coefficients">
          <button type="button" class="is-active" data-model-group="all" aria-pressed="true">All trips</button>
          <button type="button" data-model-group="member" aria-pressed="false">Members</button>
          <button type="button" data-model-group="casual" aria-pressed="false">Casual riders</button>
        </div>
        <div class="bs-legend"><span><i class="bs-key bs-key-classic"></i> Classic bike</span><span><i class="bs-key bs-key-ebike"></i> E-bike</span></div>
      </div>

      <p class="bs-chart-help">Each pair shows model coefficient means for the same factor. The vertical line marks zero. Compare the two bike types within a row; factor units differ across rows.</p>
      <div class="bs-axis" aria-hidden="true"><span>−0.5</span><span>−0.25</span><span>0</span><span>+0.25</span></div>
      <div id="bs-factor-chart" class="bs-factor-chart" aria-live="polite"></div>
      <p class="bs-footnote">Values come from Tables 5–7 of the article. They are model coefficients, not percentage-point changes or causal effects. “n.s.” denotes a coefficient reported as not statistically significant. The bars show point estimates; use the article's uncertainty intervals to assess differences between bike types.</p>
      <details class="bs-data-details"><summary>View coefficient values as a table</summary>
        <div class="bs-table-scroll"><table><caption id="bs-table-caption">Selected coefficients for all trips</caption><thead><tr><th scope="col">Station-area factor</th><th scope="col">Classic bike</th><th scope="col">E-bike</th></tr></thead><tbody id="bs-factor-table"></tbody></table></div>
      </details>
    </div>

    <div class="bs-insight-grid">
      <div><span>Infrastructure</span><p>Bike lanes, bike racks, and nearby subway stations are positively associated with both bike types. Their estimates are generally similar.</p></div>
      <div><span>Elevation</span><p>Higher start-station elevation is negatively associated with classic-bike trips. The e-bike estimate is smaller and not statistically significant.</p></div>
      <div><span>Neighborhood context</span><p>Daytime workers have a stronger positive association with e-bike trips. The negative association with the surrounding area's Hispanic population is smaller for e-bikes.</p></div>
    </div>
  </section>

  <section id="station-maps" class="bs-section" aria-labelledby="bs-maps-heading">
    <div class="bs-section-head">
      <div><span class="bs-section-number">03 / Spatial patterns</span><h2 id="bs-maps-heading">Where trips began</h2></div>
      <p>Switch between the paper's two station maps: total trip starts and the share of trips made on e-bikes.</p>
    </div>
    <div class="bs-card bs-map-card">
      <div class="bs-choice" role="group" aria-label="Station map">
        <button type="button" class="is-active" data-map="count" aria-pressed="true" aria-controls="bs-map-count">Figure 1 · Trip counts</button>
        <button type="button" data-map="share" aria-pressed="false" aria-controls="bs-map-share">Figure 2 · E-bike share</button>
      </div>
      <figure id="bs-map-count" class="bs-map-panel">
        <a href="{{ '/assets/img/powering_bikeshare_figure1.png' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open Figure 1 at full size in a new tab">
          <img src="{{ '/assets/img/powering_bikeshare_figure1.png' | relative_url }}" width="5100" height="6600" loading="lazy" alt="New York City map of 1,614 Citi Bike stations colored by total September 2022 trip starts. The highest-count stations cluster in central Manhattan; peripheral stations are outlined in pink.">
        </a>
        <figcaption><strong>Figure 1.</strong> Citi Bike trips starting at each station in September 2022. Pink outlines identify peripheral stations. <a href="{{ '/assets/img/powering_bikeshare_figure1.png' | relative_url }}" target="_blank" rel="noopener noreferrer">Open full-size map</a>.</figcaption>
      </figure>
      <figure id="bs-map-share" class="bs-map-panel" hidden>
        <a href="{{ '/assets/img/powering_bikeshare_figure2.png' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open Figure 2 at full size in a new tab">
          <img src="{{ '/assets/img/powering_bikeshare_figure2.png' | relative_url }}" width="5100" height="6600" loading="lazy" alt="New York City map of the percentage of Citi Bike trips made on e-bikes at each station in September 2022. Station symbols show five share categories from zero to 50 percent.">
        </a>
        <figcaption><strong>Figure 2.</strong> E-bike share of trips starting at each station in September 2022. Four stations recorded no e-bike trips that month. <a href="{{ '/assets/img/powering_bikeshare_figure2.png' | relative_url }}" target="_blank" rel="noopener noreferrer">Open full-size map</a>.</figcaption>
      </figure>
    </div>
  </section>

  <section class="bs-section bs-method" aria-labelledby="bs-method-heading">
    <span class="bs-section-number">04 / About the study</span><h2 id="bs-method-heading">How to read these findings</h2>
    <p>The study analyzed 3,369,117 valid trips from September 2022. It used a quarter-mile walking catchment around each station to describe nearby infrastructure, land use, population, and elevation. Negative binomial conditional autoregressive models accounted for spatial dependence among stations.</p>
    <p>Station-area demographics describe the neighborhood around a start station. They do not identify the race or ethnicity of riders. The analysis covers one month and reports associations rather than causal effects.</p>
    <p class="bs-citation">Xie, Y., Smart, M. J., &amp; Noland, R. B. (2024). “Powering bikeshare in New York City: Does the usage of e-bikes differ from regular bikes?” <em>Transportation Planning and Technology, 47</em>(6), 875–902. <a href="https://doi.org/10.1080/03081060.2024.2341301">https://doi.org/10.1080/03081060.2024.2341301</a></p>
  </section>

</div>

<script defer src="{{ '/assets/js/powering-bikeshare.js' | relative_url }}"></script>
