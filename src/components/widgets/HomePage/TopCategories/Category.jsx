import { Link } from "react-router-dom";

const Category = ({ category, title }) => {
  return (
    <div class="col-12 col-md-4 col-lg-3">
      <Link class="d-block me-4 mb-4 text-decoration-none" to={`/categories/${category}`}>
        <div class="image">
          <img
            class="d-block w-100"
            src={`/assets/top-categories/lohp-category-${category}-v2.jpg`}
            alt={category}
          />
        </div>
        <span class="d-block fw-bold pt-2 pb-4 text-black">{title}</span>
      </Link>
    </div>
  );
};

export default Category;
