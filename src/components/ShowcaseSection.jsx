export function ShowcaseSection() {
  return (
    <section className="showcase-section">
      <div className="showcase-copy">
        <span className="section-kicker">Product Showcase</span>
        <h2>Show the product clearly instead of decorating around it</h2>
        <p>
          This section is where your dashboard, app screen, or checkout flow should
          live. I left clean placeholders so you can drop real screenshots later.
        </p>

        <ul className="showcase-points">
          <li>Feature highlight cards with concise benefit copy</li>
          <li>Blank screenshot frames ready for your real assets</li>
          <li>Animated emphasis that feels premium, not distracting</li>
        </ul>
      </div>

      <div className="showcase-visual">
        <div className="showcase-frame showcase-frame--large">
          <div className="showcase-frame__bar" />
          <div className="showcase-frame__blank">Main Product Image Placeholder</div>
        </div>
        <div className="showcase-stack">
          <div className="showcase-frame">
            <div className="showcase-frame__blank">Feature Screenshot</div>
          </div>
          <div className="showcase-frame">
            <div className="showcase-frame__blank">Analytics Screenshot</div>
          </div>
        </div>
      </div>
    </section>
  );
}
