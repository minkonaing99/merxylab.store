import StarBorder from '../components/StarBorder';
import { categories } from '../data/categories';

export function CategoryStrip({ active, onSelect }) {
  return (
    <section className="category-strip">
      <div className="category-strip__track">
        {categories.map((category) => {
          const isSelected = active === category;
          return (
            <StarBorder
              key={category}
              as="button"
              className="category-strip__star"
              contentClassName="category-strip__star-inner"
              color="#5fd8ff"
              speed="5s"
              thickness={2}
              isSelected={isSelected}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onSelect(isSelected ? null : category)}
            >
              <span className={`category-strip__item${isSelected ? ' category-strip__item--selected' : ''}`}>
                {category}
              </span>
            </StarBorder>
          );
        })}
      </div>
    </section>
  );
}
