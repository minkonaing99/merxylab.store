import StarBorder from './StarBorder';

const categories = ['Streaming', 'AI Tools', 'Music', 'Productivity', 'Design', 'Education'];

export function CategoryStrip() {
  return (
    <section className="category-strip">
      <div className="category-strip__track">
        {categories.map((category) => (
          <StarBorder
            key={category}
            className="category-strip__star"
            contentClassName="category-strip__star-inner"
            color="#5fd8ff"
            speed="5s"
            thickness={2}
          >
            <span className="category-strip__item">{category}</span>
          </StarBorder>
        ))}
      </div>
    </section>
  );
}
