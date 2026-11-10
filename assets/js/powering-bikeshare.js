(function () {
  const root = document.getElementById('bikeshare-story');
  if (!root) return;

  // Rounded descriptive values are from the Results and Discussion sections.
  const trips = {
    all: { label: 'All trips', ebike: 19, distance: 19, note: 'than classic bike trips, across all riders' },
    member: { label: 'Members', ebike: 18, distance: 21, note: 'than classic bike trips made by members' },
    casual: { label: 'Casual riders', ebike: 22, distance: 13, note: 'than classic bike trips made by casual riders' },
  };

  // Posterior mean coefficients from Tables 5 (all), 6 (member classic and casual classic),
  // and 7 (member e-bike and casual e-bike). ns marks the paper's "n.s." entries.
  const factors = [
    { label: 'Bike lane length', values: { all: [0.05, 0.04], member: [0.05, 0.04], casual: [0.05, 0.04] } },
    { label: 'Bike rack count', values: { all: [0.15, 0.15], member: [0.15, 0.15], casual: [0.15, 0.15] } },
    { label: 'Subway station nearby', values: { all: [0.13, 0.11], member: [0.12, 0.10], casual: [0.19, 0.17] } },
    { label: 'Daytime workers', values: { all: [0.12, 0.15], member: [0.13, 0.16], casual: [0.09, 0.12] } },
    { label: 'Hispanic population share', values: { all: [-0.36, -0.30], member: [-0.37, -0.31], casual: [-0.30, -0.20] } },
    { label: 'Mixed land share', values: { all: [0.17, 0.17], member: [0.18, 0.18], casual: [0.11, 0.10] } },
    { label: 'Recreational land share', values: { all: [0.08, 0.10], member: [0.07, 0.09], casual: [0.10, 0.10] } },
    { label: 'Elevation per 100 feet', values: { all: [-0.23, 0.03], member: [-0.22, 0.03], casual: [-0.19, 0.09] }, ns: { all: [false, true], member: [false, true], casual: [false, true] } },
    { label: 'Peripheral station', values: { all: [-0.43, -0.30], member: [-0.50, -0.38], casual: [-0.19, -0.07] }, ns: { casual: [false, true] } },
  ];

  function selectButtons(attribute, value) {
    root.querySelectorAll(`[${attribute}]`).forEach((button) => {
      const selected = button.getAttribute(attribute) === value;
      button.classList.toggle('is-active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
  }

  function renderMap(map) {
    if (map !== 'count' && map !== 'share') return;
    selectButtons('data-map', map);
    root.querySelector('#bs-map-count').hidden = map !== 'count';
    root.querySelector('#bs-map-share').hidden = map !== 'share';
  }

  function renderTrips(group) {
    const data = trips[group];
    if (!data) return;
    selectButtons('data-trip-group', group);
    root.querySelector('#bs-trip-group-label').textContent = data.label;
    const classic = root.querySelector('#bs-classic-share');
    const ebike = root.querySelector('#bs-ebike-share');
    classic.style.width = `${100 - data.ebike}%`;
    ebike.style.width = `${data.ebike}%`;
    classic.textContent = `Classic ${100 - data.ebike}%`;
    ebike.textContent = `${data.ebike}%`;
    root.querySelector('#bs-trip-bar').setAttribute('aria-label', `${data.ebike} percent e-bike trips and ${100 - data.ebike} percent classic bike trips for ${data.label.toLowerCase()}`);
    root.querySelector('#bs-distance-value').textContent = `${data.distance}% farther`;
    root.querySelector('#bs-distance-note').textContent = data.note;
  }

  const minimum = -0.55;
  const maximum = 0.35;
  function position(value) { return ((value - minimum) / (maximum - minimum)) * 100; }
  function format(value, ns) { return `${value > 0 ? '+' : ''}${value.toFixed(2)}${ns ? ' n.s.' : ''}`; }

  function renderModels(group) {
    if (!trips[group]) return;
    selectButtons('data-model-group', group);
    root.querySelector('#bs-table-caption').textContent = `Selected coefficients for ${trips[group].label.toLowerCase()}`;
    const chart = root.querySelector('#bs-factor-chart');
    const table = root.querySelector('#bs-factor-table');
    chart.replaceChildren();
    table.replaceChildren();

    factors.forEach((factor) => {
      const values = factor.values[group];
      const ns = factor.ns?.[group] || [false, false];
      const row = document.createElement('div');
      row.className = 'bs-factor-row';
      const label = document.createElement('span');
      label.className = 'bs-factor-label';
      label.textContent = factor.label;
      const track = document.createElement('div');
      track.className = 'bs-factor-track';
      track.setAttribute('role', 'img');
      track.setAttribute('aria-label', `${factor.label}: classic bike ${format(values[0], ns[0])}; e-bike ${format(values[1], ns[1])}`);
      values.forEach((value, index) => {
        const bar = document.createElement('span');
        bar.className = `bs-factor-bar ${index === 0 ? 'bs-factor-classic' : 'bs-factor-ebike'}`;
        bar.style.left = `${Math.min(position(0), position(value))}%`;
        bar.style.width = `${Math.abs(position(value) - position(0))}%`;
        track.appendChild(bar);
      });
      const valueLabel = document.createElement('span');
      valueLabel.className = 'bs-factor-values';
      values.forEach((value, index) => {
        const span = document.createElement('span');
        span.className = index === 0 ? 'bs-text-classic' : 'bs-text-ebike';
        span.textContent = format(value, ns[index]);
        valueLabel.appendChild(span);
      });
      row.append(label, track, valueLabel);
      chart.appendChild(row);

      const tableRow = document.createElement('tr');
      const heading = document.createElement('th');
      heading.scope = 'row';
      heading.textContent = factor.label;
      tableRow.appendChild(heading);
      values.forEach((value, index) => {
        const cell = document.createElement('td');
        cell.textContent = format(value, ns[index]);
        tableRow.appendChild(cell);
      });
      table.appendChild(tableRow);
    });
  }

  root.querySelectorAll('[data-trip-group]').forEach((button) => {
    button.addEventListener('click', () => renderTrips(button.dataset.tripGroup));
  });
  root.querySelectorAll('[data-map]').forEach((button) => {
    button.addEventListener('click', () => renderMap(button.dataset.map));
  });
  root.querySelectorAll('[data-model-group]').forEach((button) => {
    button.addEventListener('click', () => renderModels(button.dataset.modelGroup));
  });
  renderTrips('all');
  renderModels('all');
  renderMap('count');
}());
