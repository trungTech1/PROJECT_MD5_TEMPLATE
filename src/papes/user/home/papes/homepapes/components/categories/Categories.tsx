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
                  src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/cate1.png?alt=media&token=ca5cf247-16a9-4541-b5cf-dd2f67184081"
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
                  src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/cate2.png?alt=media&token=afda49e9-165b-4b66-83fc-06d30f95fd25"
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
                  src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/cate3.png?alt=media&token=83fc1049-6f1a-4845-9f77-3a859b5e9f02"
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
                  src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/cate4.png?alt=media&token=fbbc967a-c4ac-483b-bcec-814a9cd018a0"
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
                  src="https://firebasestorage.googleapis.com/v0/b/shopthucung-d74f2.appspot.com/o/cate5.png?alt=media&token=4123404f-2039-471d-9bb3-d5413c527bf6"
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
