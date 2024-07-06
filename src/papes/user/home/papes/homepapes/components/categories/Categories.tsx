import React from "react";

const Categories = () => {
  return (
    <section id="categories">
      <div className="container my-3 py-5">
        <div className="row my-5">
          <div className="col text-center">
            <a href="#" className="categories-item">
              <div className="category-icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/cate1.png?alt=media&token=09ffecbd-fcac-45df-a01c-e3e19d299020"
                  alt=""
                />
              </div>
              <h5>Foodies</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <div className="category-icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/cate2.png?alt=media&token=a9dcc5c1-6514-42f3-95fa-85564283a9c8"
                  alt=""
                />
              </div>
              <h5>Bird Shop</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <div className="category-icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/cate3.png?alt=media&token=6f1102f8-fb6f-4eab-af1b-bf77b59722d0"
                  alt=""
                />
              </div>
              <h5>Dog Shop</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <div className="category-icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/cate4.png?alt=media&token=608dfc00-404a-4461-b1dc-d9f50972ef18"
                  alt=""
                />
              </div>
              <h5>Fish Shop</h5>
            </a>
          </div>
          <div className="col text-center">
            <a href="#" className="categories-item">
              <div className="category-icon">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/cate5.png?alt=media&token=3de7ce04-5959-4ba6-b9e4-6cc553e5f04d"
                  alt=""
                />
              </div>
              <h5>Cat Shop</h5>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
