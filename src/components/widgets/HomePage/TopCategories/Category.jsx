const Category = ({ category, title }) => {
  return (
    <div class="col-12 col-md-4 col-lg-3">
      <a class="d-block me-4 mb-4 text-decoration-none" href={`/categories/${category}`}>
        <div class="image">
          <img
            class="d-block w-100"
            src={`/assets/top-categories/lohp-category-${category}-v2.jpg`}
            alt={category}
          />
        </div>
        <span class="d-block fw-bold pt-2 pb-4 text-black">{title}</span>
      </a>
    </div>
  );
};

export default Category;
