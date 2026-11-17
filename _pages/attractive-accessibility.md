---
layout: page
title: Attractive accessibility
permalink: /attractive-accessibility/
description: Exploring disparities in attributes of primary care physicians in New Jersey.
nav: false
---

<link rel="stylesheet" href="{{ '/assets/css/attractive-accessibility.css' | relative_url | bust_file_cache }}">

<div id="accessibility-story">
  <p class="aa-eyebrow">Research companion · Health &amp; Place · 2025</p>
  <div class="aa-hero">
  <div class="aa-intro">
    <p class="aa-lede">Which doctors can you reach in 30 minutes?</p>
    <p>Finding a doctor involves more than reaching a nearby clinic. A physician’s qualifications, patient ratings, and languages spoken can shape whether that provider meets a patient’s needs.</p>
    <p>In this study, we examine access to primary care in New Jersey by car, public transit, and e-bike. We introduce <strong>attractive accessibility</strong>: access to providers with attributes that patients may value.</p>
    <div class="aa-actions">
      <a class="aa-primary" href="#compare-access">Explore the findings <span aria-hidden="true">↓</span></a>
      <a href="{{ '/attractive-accessibility/poster/' | relative_url }}">View the Atlantic County poster <span aria-hidden="true">↗</span></a>
      <a href="{{ '/attractive-accessibility/presentation/' | relative_url }}">View presentation <span aria-hidden="true">↗</span></a>
      <a href="https://doi.org/10.1016/j.healthplace.2025.103535">Journal article <span aria-hidden="true">↗</span></a>
    </div>
  </div>
    <div class="aa-heatmap-art" aria-hidden="true">
      <img src="{{ '/assets/img/proj-2-front.png' | relative_url }}" width="710" height="710" alt="">
    </div>
  </div>

  <dl class="aa-metrics" aria-label="Study at a glance">
    <div><dt>New Jersey census tracts</dt><dd>2,175</dd></div>
    <div><dt>Reachable primary care physicians</dt><dd>27,974</dd></div>
    <div><dt>Travel-time threshold</dt><dd>30 min</dd></div>
  </dl>
  <p class="aa-note aa-metrics-note">The physician sample includes providers in New Jersey and neighboring states reachable within a 30-minute drive from New Jersey census tracts.</p>

  <section class="aa-section" id="worked-example" aria-labelledby="aa-example-heading">
    <span class="aa-eyebrow">01 / How the measure works</span>
    <h2 id="aa-example-heading">A closer look from Fort Lee</h2>
    <p>Start from a census tract in Fort Lee, New Jersey. The presentation follows three sample doctors to show how travel mode and provider attributes shape access within 30 minutes.</p>
    <p class="aa-note">Teaching example adapted from slides 6–8 of the research presentation. Provider cards use labels A–C; original map legends retain the presentation’s labels. Calculations cover only these three providers; the statewide results below use the full study sample.</p>
    <div class="aa-chart-card aa-example">
      <div class="aa-example-controls" id="aa-example-controls" hidden>
        <div><label for="aa-example-mode">Travel by</label><select id="aa-example-mode"><option value="car">Car</option><option value="ebike">E-bike</option><option value="transit">Transit</option></select></div>
        <div><label for="aa-example-attribute">Look for</label><select id="aa-example-attribute"><option value="all">Any primary care physician</option><option value="certified">Board certification</option><option value="rated">High rating (≥4)</option><option value="nonEnglish">A non-English language</option><option value="spanish">Spanish spoken</option></select></div>
      </div>
      <div class="aa-example-grid">
        <figure class="aa-figure aa-example-map">
            <select id="aa-example-map" aria-label="Fort Lee map" hidden>
              <option value="reach" selected data-src="{{ '/assets/img/attractive-accessibility/fort-lee-example.png' | relative_url | bust_file_cache }}" data-alt="Thirty-minute travel catchments from Fort Lee tract 34003019102, showing car, e-bike, and transit reach and three sample doctor locations." data-caption="Reachable areas from the Fort Lee tract. The star marks the centroid; crosses mark the three sample doctors.">Reachable areas</option>
              <option value="all" data-src="{{ '/assets/img/attractive-accessibility/fort-lee-all-providers.png' | relative_url | bust_file_cache }}" data-alt="Provider locations shown as pink dots over the car, e-bike, and transit catchments from the Fort Lee tract." data-caption="All-provider map from the presentation, with provider locations overlaid on the travel catchments.">All primary care physicians</option>
              <option value="rated" data-src="{{ '/assets/img/attractive-accessibility/fort-lee-highly-rated.png' | relative_url | bust_file_cache }}" data-alt="Physicians with online ratings of at least 4 shown as green dots over the car, e-bike, and transit catchments from Fort Lee." data-caption="Highly rated providers (rating ≥4), shown in green over the travel catchments.">Highly rated physicians (≥4)</option>
              <option value="spanish" data-src="{{ '/assets/img/attractive-accessibility/fort-lee-spanish-speaking.png' | relative_url | bust_file_cache }}" data-alt="Spanish-speaking physicians shown as magenta dots over the car, e-bike, and transit catchments from Fort Lee." data-caption="Spanish-speaking providers, shown in magenta over the travel catchments.">Spanish-speaking physicians</option>
              <option value="catchment" data-src="{{ '/assets/img/attractive-accessibility/fort-lee-doctor-catchment.png' | relative_url | bust_file_cache }}" data-alt="The driving catchment of the sample physician identified as Dr. Pasco in the presentation, with purple hatching across New Jersey and New York." data-caption="Doctor A’s 30-minute driving catchment, shown with purple hatching. The original legend identifies this provider as Dr. Pasco.">Doctor A’s population catchment</option>
              <option value="combined" data-src="{{ '/assets/img/attractive-accessibility/fort-lee-combined-catchments.png' | relative_url | bust_file_cache }}" data-alt="Doctor A’s hatched population catchment overlaid on the car, e-bike, and transit catchments from the Fort Lee tract." data-caption="The tract’s travel catchments and Doctor A’s population catchment together. The original legend identifies Doctor A as Dr. Pasco.">Travel and population catchments</option>
            </select>
          <div class="aa-slide-frame">
            <a href="{{ '/assets/img/attractive-accessibility/fort-lee-example.png' | relative_url | bust_file_cache }}" target="_blank" rel="noopener noreferrer" aria-label="Open the selected Fort Lee map at full size in a new tab"><img id="aa-map-image" src="{{ '/assets/img/attractive-accessibility/fort-lee-example.png' | relative_url | bust_file_cache }}" width="5100" height="6600" loading="lazy" alt="Thirty-minute travel catchments from Fort Lee tract 34003019102, showing car, e-bike, and transit reach and three sample doctor locations."></a>
            <div class="aa-slide-navigation" id="aa-map-navigation" role="group" aria-label="Map slideshow controls" hidden>
              <button type="button" id="aa-map-previous" aria-label="Previous map"><span class="aa-control-icon" aria-hidden="true"></span></button>
              <button type="button" id="aa-map-play" data-playing="true" aria-label="Pause map slideshow"><span class="aa-control-icon" aria-hidden="true"></span></button>
              <button type="button" id="aa-map-next" aria-label="Next map"><span class="aa-control-icon" aria-hidden="true"></span></button>
            </div>
          </div>
          <figcaption><span id="aa-map-caption" aria-live="polite">Reachable areas from the Fort Lee tract. The star marks the centroid; crosses mark the three sample doctors.</span> <a href="{{ '/assets/img/attractive-accessibility/fort-lee-example.png' | relative_url | bust_file_cache }}" target="_blank" rel="noopener noreferrer">Open full-size map</a>.</figcaption>
          <p class="aa-note">Maps retain their original legends and show the travel modes together. Provider-location maps show the broader study data; the calculation uses only the three sample doctors.</p>
        </figure>
        <div>
          <h3>Step 1 · Account for competition</h3>
          <p class="aa-example-help">Each doctor contributes a weight of 1 divided by the population within their 30-minute driving catchment. This weight stays the same across travel modes.</p>
          <div class="aa-providers" aria-label="Three sample providers">
            <div class="aa-provider is-included" data-modes="car ebike" data-certified="true" data-rating="5" data-nonenglish="true" data-spanish="true" data-population="9792622">
              <div class="aa-provider-head"><h4>Doctor A · Upper Manhattan</h4><span class="aa-provider-status">Included</span></div>
              <p>Board certified · Rating 5.0<br>English and Spanish</p>
              <p class="aa-provider-weight">Weight: 1 / 9,792,622 residents</p>
            </div>
            <div class="aa-provider is-included" data-modes="car transit ebike" data-certified="false" data-rating="3.2" data-nonenglish="true" data-spanish="true" data-population="5682723">
              <div class="aa-provider-head"><h4>Doctor B · Fort Lee</h4><span class="aa-provider-status">Included</span></div>
              <p>No board certification in example · Rating 3.2<br>English, Korean, and Spanish</p>
              <p class="aa-provider-weight">Weight: 1 / 5,682,723 residents</p>
            </div>
            <div class="aa-provider is-included" data-modes="car" data-certified="true" data-rating="4.5" data-nonenglish="false" data-spanish="false" data-population="6620262">
              <div class="aa-provider-head"><h4>Doctor C · Midtown Manhattan</h4><span class="aa-provider-status">Included</span></div>
              <p>Board certified · Rating 4.5<br>English only</p>
              <p class="aa-provider-weight">Weight: 1 / 6,620,262 residents</p>
            </div>
          </div>
        </div>
      </div>
      <div class="aa-example-result" aria-live="polite" aria-atomic="true">
        <h3>Step 2 · Sum the weights of reachable, matching doctors</h3>
        <p id="aa-example-summary">By car, 3 of the 3 sample doctors are reachable and match the selected attribute.</p>
        <div class="aa-example-score"><strong id="aa-example-score">0.00429</strong><span>weighted physicians per 10,000 residents<br>from these sample doctors</span></div>
        <p id="aa-example-formula" class="aa-example-formula">(1 / 9,792,622 + 1 / 5,682,723 + 1 / 6,620,262) × 10,000 = 0.00429</p>
        <p class="aa-note">The small value reflects the contribution of just three doctors, each serving a large population. The full accessibility index sums contributions from every eligible provider within reach.</p>
      </div>
    </div>
  </section>

  <section class="aa-section" id="compare-access" aria-labelledby="aa-compare-heading">
    <span class="aa-eyebrow">02 / Travel modes and provider attributes</span>
    <h2 id="aa-compare-heading">The same travel time, very different access</h2>
    <p>We measure access to all primary care physicians, then to four overlapping groups: board-certified physicians, highly rated physicians (online rating ≥4), physicians who speak a language other than English, and Spanish-speaking physicians.</p>

    <div class="aa-chart-card">
      <div class="aa-toolbar" id="aa-controls" hidden>
        <label for="aa-attribute">Explore access to</label>
        <select id="aa-attribute">
          <option value="all">All primary care physicians</option>
          <option value="certified">Board-certified physicians</option>
          <option value="rated">Highly rated physicians (≥4)</option>
          <option value="nonEnglish">Physicians speaking a non-English language</option>
          <option value="spanish">Spanish-speaking physicians</option>
        </select>
      </div>
      <div id="aa-comparison" aria-live="polite" aria-atomic="true">
        <h3 id="aa-chart-title">All primary care physicians</h3>
        <p class="aa-chart-unit">Mean accessibility index: weighted physicians per 10,000 residents</p>
        <div class="aa-bars">
          <div class="aa-bar-row"><span>Car</span><div class="aa-track" aria-hidden="true"><span class="aa-bar aa-car" id="aa-bar-car" style="width: 86.6667%"></span></div><strong id="aa-value-car">26.0</strong></div>
          <div class="aa-bar-row"><span>E-bike</span><div class="aa-track" aria-hidden="true"><span class="aa-bar aa-ebike" id="aa-bar-ebike" style="width: 26.3333%"></span></div><strong id="aa-value-ebike">7.9</strong></div>
          <div class="aa-bar-row"><span>Transit</span><div class="aa-track" aria-hidden="true"><span class="aa-bar aa-transit" id="aa-bar-transit" style="width: 3.6667%"></span></div><strong id="aa-value-transit">1.1</strong></div>
        </div>
        <div class="aa-axis" aria-hidden="true"><span>0</span><span>10</span><span>20</span><span>30</span></div>
      </div>
      <p class="aa-note">Source: Table 1. Means across census tracts, rounded to one decimal. Each index accounts for the population competing for reachable providers; it is a weighted measure of potential access. All selections use the same chart scale.</p>
      <details class="aa-data">
        <summary>View all values as a table</summary>
        <div class="aa-table-scroll" tabindex="0" role="region" aria-label="Accessibility data table">
          <table id="aa-data-table">
            <caption>Mean 30-minute accessibility indices by provider attribute (Table 1)</caption>
            <thead><tr><th scope="col">Provider group</th><th scope="col">Car</th><th scope="col">E-bike</th><th scope="col">Transit</th></tr></thead>
            <tbody>
              <tr data-attribute="all"><th scope="row">All primary care physicians</th><td>26.0</td><td>7.9</td><td>1.1</td></tr>
              <tr data-attribute="certified"><th scope="row">Board-certified physicians</th><td>17.6</td><td>5.3</td><td>0.8</td></tr>
              <tr data-attribute="rated"><th scope="row">Highly rated physicians (≥4)</th><td>9.8</td><td>3.1</td><td>0.4</td></tr>
              <tr data-attribute="nonEnglish"><th scope="row">Physicians speaking a non-English language</th><td>7.4</td><td>2.3</td><td>0.3</td></tr>
              <tr data-attribute="spanish"><th scope="row">Spanish-speaking physicians</th><td>2.8</td><td>0.9</td><td>0.1</td></tr>
            </tbody>
          </table>
        </div>
      </details>
    </div>
    <div class="aa-takeaway">
      <h3>Transport options shape the providers within reach</h3>
      <p>Cars provide the highest average access for every provider group. E-bikes offer greater average access than transit, including to board-certified, highly rated, and multilingual physicians. Their potential varies with cycling infrastructure and a person’s ability to ride.</p>
    </div>

  </section>

  <section class="aa-section" id="disparities" aria-labelledby="aa-equity-heading">
    <span class="aa-eyebrow">03 / Disparities within reach</span>
    <h2 id="aa-equity-heading">The mix of accessible doctors matters</h2>
    <p>We compare both the level of access to providers with specific attributes and its ratio to access to all providers. This ratio describes the share of the weighted accessible physician pool with a given attribute.</p>
    <div class="aa-findings">
      <div><h3>Greater overall access</h3><p>For car and transit, census tracts with higher concentrations of socially disadvantaged populations generally have greater spatial access to primary care physicians, including providers with the attributes studied.</p></div>
      <div><h3>A smaller highly rated share</h3><p>Across all three modes, greater social vulnerability is associated with a lower proportion of highly rated physicians among accessible providers.</p></div>
      <div><h3>Language access aligns differently</h3><p>Tracts with more residents with limited English proficiency tend to have access to a higher proportion of Spanish-speaking physicians, with stronger associations for car and e-bike than for transit.</p></div>
    </div>
    <div class="aa-chart-card aa-correlation-card">
      <h3>How do population characteristics relate to access?</h3>
      <div class="aa-correlation-controls" id="aa-correlation-controls" hidden>
        <div><label for="aa-correlation-indicator">Population characteristic</label><select id="aa-correlation-indicator">{% for indicator in site.data.attractive_accessibility_correlations.indicators %}<option value="{{ indicator.id }}"{% if indicator.id == 'vulnerability' %} selected{% endif %}>{{ indicator.label }}</option>{% endfor %}</select></div>
        <div><label for="aa-correlation-measure">Measure of access</label><select id="aa-correlation-measure"><option value="ratio">Share among reachable providers</option><option value="index">Accessibility index</option></select></div>
      </div>
      <p class="aa-note" id="aa-correlation-explanation">A positive ρ means higher social vulnerability is associated with a higher share of reachable providers with that attribute; a negative ρ means a lower share.</p>
      <div class="aa-correlation-legend"><span>Negative</span><span class="aa-correlation-gradient" aria-hidden="true"></span><span>Positive</span></div>
      <div class="aa-table-scroll" tabindex="0" role="region" aria-label="Spearman correlation heatmap">
        <table class="aa-correlation-table" id="aa-correlation-table">
          <caption id="aa-correlation-caption" aria-live="polite">Spearman’s ρ: Social Vulnerability Index and provider shares</caption>
          <thead><tr><th scope="col">Provider group</th><th scope="col">Car</th><th scope="col">E-bike</th><th scope="col">Transit</th></tr></thead>
          <tbody>
            {% for group in site.data.attractive_accessibility_correlations.groups %}{% unless group.id == 'all' %}
            <tr><th scope="row">{{ group.label }}</th>{% assign correlation_modes = 'car,ebike,transit' | split: ',' %}{% for mode in correlation_modes %}{% for row in site.data.attractive_accessibility_correlations.rows %}{% if row.measure == 'ratio' and row.group == group.id and row.mode == mode %}{% assign cell = row.values.vulnerability %}{% assign strength = cell.rho | abs %}<td data-direction="{% if cell.rho < 0 %}negative{% else %}positive{% endif %}" style="--aa-rho-strength: {{ strength }}" data-rho="{{ cell.rho }}">{{ cell.rho }}{% if cell.significance != '' %}<sup>{{ cell.significance }}</sup>{% endif %}</td>{% endif %}{% endfor %}{% endfor %}</tr>
            {% endunless %}{% endfor %}
          </tbody>
        </table>
      </div>
      <p class="aa-note">ρ (rho) ranges from −1 to +1. Values farther from zero indicate a stronger rank association; darker cells show larger absolute values.</p>
      <p class="aa-note">Source: <a href="https://doi.org/10.1016/j.healthplace.2025.103535">Xie and Smart (2025), Table 2</a>. N = 2,148 census tracts. <sup>a</sup> p &lt; .05; <sup>**</sup> p &lt; .01; <sup>***</sup> p &lt; .001. Unmarked values have p ≥ .05.</p>
    </div>
    <script type="application/json" id="aa-correlation-data">{{ site.data.attractive_accessibility_correlations | jsonify }}</script>
    <p class="aa-note">Source: Sections 4.4.1–4.4.2 and Table 2. These are associations between census-tract characteristics and potential accessibility. Online ratings indicate patient-reported satisfaction.</p>
  </section>

  <section class="aa-section" id="spatial-patterns" aria-labelledby="aa-maps-heading">
    <span class="aa-eyebrow">04 / Spatial patterns</span>
    <h2 id="aa-maps-heading">Where access changes</h2>
    <p>Providers cluster around New York City and Philadelphia. Accounting for the population they serve changes the picture: a large number of nearby doctors can still mean moderate access when competition is high.</p>
    <figure class="aa-figure" id="aa-statewide-maps">
      <div class="aa-map-grid">
        <div class="aa-map-switch" role="group" aria-label="Transit map comparisons">
          <div class="aa-map-choices" role="group" aria-label="Transit map views" hidden>
              <button type="button" aria-pressed="true" data-src="{{ '/assets/img/attractive-accessibility/N_doc_by_transit_white.png' | relative_url | bust_file_cache }}" data-label="PCP Count by Transit" data-description="Transit: number of reachable physicians" data-alt="New Jersey census tracts colored by the number of primary care physicians reachable within 30 minutes by transit.">PCP Count by Transit</button>
              <button type="button" aria-pressed="false" data-src="{{ '/assets/img/attractive-accessibility/Idx_doc_by_transit_white.png' | relative_url | bust_file_cache }}" data-label="Accessibility Index by Transit" data-description="Transit: competition-adjusted accessibility" data-alt="Competition-adjusted accessibility to primary care physicians within 30 minutes by transit, mapped across New Jersey census tracts.">Accessibility Index by Transit</button>
          </div>
          <button type="button" class="aa-map-switch-frame" aria-label="Show Accessibility Index by Transit map" disabled>
            <img src="{{ '/assets/img/attractive-accessibility/N_doc_by_transit_white.png' | relative_url | bust_file_cache }}" width="5100" height="6600" loading="lazy" alt="New Jersey census tracts colored by the number of primary care physicians reachable within 30 minutes by transit.">
          </button>
          <p class="aa-note aa-map-switch-status" aria-live="polite">Transit: number of reachable physicians</p>
          <a class="aa-map-full-size" href="{{ '/assets/img/attractive-accessibility/N_doc_by_transit_white.png' | relative_url | bust_file_cache }}" target="_blank" rel="noopener noreferrer">Open full-size map <span aria-hidden="true">↗</span></a>
        </div>
        <div class="aa-map-switch" role="group" aria-label="Car and e-bike map comparisons">
          <div class="aa-map-choices" role="group" aria-label="Car / e-bike map views" hidden>
              <button type="button" aria-pressed="true" data-src="{{ '/assets/img/attractive-accessibility/Idx_doc_by_car_white.png' | relative_url | bust_file_cache }}" data-label="Accessibility Index by Car" data-description="Car: competition-adjusted accessibility" data-alt="Competition-adjusted accessibility to primary care physicians within 30 minutes by car, mapped across New Jersey census tracts.">Accessibility Index by Car</button>
              <button type="button" aria-pressed="false" data-src="{{ '/assets/img/attractive-accessibility/Idx_doc_by_ebike_white.png' | relative_url | bust_file_cache }}" data-label="Accessibility Index by E-Bike" data-description="E-bike: competition-adjusted accessibility" data-alt="Competition-adjusted accessibility to primary care physicians within 30 minutes by e-bike, mapped across New Jersey census tracts.">Accessibility Index by E-Bike</button>
          </div>
          <button type="button" class="aa-map-switch-frame" aria-label="Show Accessibility Index by E-Bike map" disabled>
            <img src="{{ '/assets/img/attractive-accessibility/Idx_doc_by_car_white.png' | relative_url | bust_file_cache }}" width="5100" height="6600" loading="lazy" alt="Competition-adjusted accessibility to primary care physicians within 30 minutes by car, mapped across New Jersey census tracts.">
          </button>
          <p class="aa-note aa-map-switch-status" aria-live="polite">Car: competition-adjusted accessibility</p>
          <a class="aa-map-full-size" href="{{ '/assets/img/attractive-accessibility/Idx_doc_by_car_white.png' | relative_url | bust_file_cache }}" target="_blank" rel="noopener noreferrer">Open full-size map <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <figcaption><strong>Figure 2.</strong> Click a map or use the buttons to switch views. Each map has its own legend and scale.</figcaption>
    </figure>
    <div class="aa-takeaway">
      <h3>Connections across the Hudson matter</h3>
      <p>In some tracts near New York City, restrictions on cycling across the Hudson limit e-bike access to physicians. Transit can provide greater access than e-bikes in these locations, despite its lower statewide average.</p>
    </div>
    <figure class="aa-figure" id="aa-ratio-maps">
      <div class="aa-map-grid">
        <div>
          <h3>Proportion of board-certified PCPs by transit</h3>
          <a href="{{ '/assets/img/attractive-accessibility/ratio transit_white.png' | bust_file_cache | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open proportion of board-certified PCPs by transit map at full size in a new tab">
            <img src="{{ '/assets/img/attractive-accessibility/ratio transit_white.png' | bust_file_cache | relative_url }}" width="5100" height="6600" loading="lazy" alt="New Jersey census tracts colored by board-certified physician accessibility as a proportion of general physician accessibility by transit. The purple categories show spatial variation across the state.">
          </a>
        </div>
        <div>
          <h3>Proportion of board-certified PCPs by car</h3>
          <a href="{{ '/assets/img/attractive-accessibility/ratio car_white.png' | bust_file_cache | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open proportion of board-certified PCPs by car map at full size in a new tab">
            <img src="{{ '/assets/img/attractive-accessibility/ratio car_white.png' | bust_file_cache | relative_url }}" width="5100" height="6600" loading="lazy" alt="New Jersey census tracts colored by board-certified physician accessibility as a proportion of general physician accessibility by car. Most tracts fall in the 50–75 percent category.">
          </a>
        </div>
      </div>
      <figcaption><strong>Figure 4.</strong> Board-certified physician accessibility as a proportion of general accessibility, by transit (left) and car (right). Each map opens at full resolution.</figcaption>
    </figure>
    <p class="aa-note">Study maps corresponding to Figures 2 and 4 in <a href="https://doi.org/10.1016/j.healthplace.2025.103535">Xie and Smart (2025)</a>.</p>
  </section>

  <section class="aa-section" aria-labelledby="aa-implications-heading">
    <span class="aa-eyebrow">05 / Planning implications</span>
    <h2 id="aa-implications-heading">Expand the choices within reach</h2>
    <p>Improving transit service and cycling connections could expand the range of primary care providers available to households without cars, including physicians with particular qualifications or language skills. The findings support considering provider attributes alongside the number of doctors within reach. Further research could examine how patients’ time constraints, clinic opening hours, and insurance acceptance shape the choices they can use.</p>
  </section>

  <section class="aa-section aa-method" aria-labelledby="aa-method-heading">
    <span class="aa-eyebrow">06 / About the study</span>
    <h2 id="aa-method-heading">Measuring access to providers people value</h2>
    <p>We combine Healthgrades physician profiles, road and transit networks, census data, and the CDC Social Vulnerability Index. The analysis covers family practice and internal medicine physicians in New Jersey and neighboring parts of New York, Pennsylvania, and Delaware.</p>
    <p>The two-step floating catchment area method first estimates each provider’s population catchment using a 30-minute drive. It then sums provider-to-population ratios for physicians reachable from each tract by the selected travel mode. Using the same driving-based population catchments across modes accounts for competition from the broader population a provider serves.</p>
    <p>Transit estimates use scheduled service between 10 and 11 a.m. on September 9, 2024. E-bike travel is modeled at up to 20 mph with network restrictions. Spearman’s rank correlations relate access measures to tract-level socioeconomic characteristics.</p>
    <details class="aa-data">
      <summary>Study scope and interpretation</summary>
      <p>The indices describe potential access from census-tract centroids. Individual access also depends on insurance coverage, appointment availability, personal preferences, and ability to travel. Online ratings reflect patient satisfaction; board certification and language skills capture other dimensions of provider attributes.</p>
    </details>
    <p class="aa-citation">Xie, Y., &amp; Smart, M. (2025). Attractive accessibility: Exploring disparities in attributes of primary care physicians in New Jersey. <em>Health &amp; Place, 95</em>, 103535. <a href="https://doi.org/10.1016/j.healthplace.2025.103535">doi:10.1016/j.healthplace.2025.103535</a></p>
    <div class="aa-actions"><a href="https://doi.org/10.1016/j.healthplace.2025.103535">Read the journal article <span aria-hidden="true">↗</span></a><a href="{{ '/projects/' | relative_url }}">All projects <span aria-hidden="true">→</span></a></div>
  </section>
</div>

<script defer src="{{ '/assets/js/attractive-accessibility.js' | relative_url | bust_file_cache }}"></script>
