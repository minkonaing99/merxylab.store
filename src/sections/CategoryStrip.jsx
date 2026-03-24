import StarBorder from '../components/StarBorder';
import { categories } from '../data/categories';

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
