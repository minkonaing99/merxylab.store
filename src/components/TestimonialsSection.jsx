const testimonials = [
  {
    quote:
      'The redesign feels closer to Spotify and ChatGPT than a template site. That alone changed how people trusted the product.',
    author: 'Maya Chen',
    role: 'Founder, Loopbase',
  },
  {
    quote:
      'We shipped a cleaner pricing story and trial starts increased because the page finally felt like software, not a marketplace.',
    author: 'Jordan Miles',
    role: 'Growth Lead, Taskmint',
  },
  {
    quote:
      'The screenshot areas are structured well, so swapping in our real product visuals later was easy.',
    author: 'Elena Park',
    role: 'Product Designer, Current',
  },
];

export function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <header className="section-heading">
        <div>
          <span className="section-kicker">Social Proof</span>
          <h2>What teams say after switching to a clearer sales page</h2>
        </div>
      </header>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article key={item.author} className="testimonial-card">
            <p>{item.quote}</p>
            <div className="testimonial-card__meta">
              <span className="testimonial-card__avatar" />
              <div>
                <strong>{item.author}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
