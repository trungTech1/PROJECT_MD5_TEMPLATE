import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './editProduct.scss';
import { useTranslation } from 'react-i18next';

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  sku: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  categoryId: number;
}

const EditProduct: React.FC = () => {
  const {t} = useTranslation();

  const { productId } = useParams<{ productId: string }>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Fetch categories data
    // Replace the fetch logic with actual API call
    const fetchCategories = async () => {
      // Simulating fetch with dummy data
      const data = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' },
      ];
      setCategories(data);
    };

    // Fetch product data by ID
    // Replace the fetch logic with actual API call
    const fetchProduct = async () => {
      // Simulating fetch with dummy data
      const data = {
        id: parseInt(productId, 10),
        sku: 'SKU12345',
        name: 'Product Name',
        image: 'https://via.placeholder.com/150',
        price: 100.0,
        stock: 20,
        categoryId: 1,
      };
      setProduct(data);
    };

    fetchCategories();
    fetchProduct();
  }, [productId]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (product) {
      setProduct({ ...product, name: event.target.value });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0 && product) {
      const file = event.target.files[0];
      setProduct({ ...product, image: URL.createObjectURL(file) });
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (product) {
      setProduct({ ...product, price: parseFloat(event.target.value) });
    }
  };

  const handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (product) {
      setProduct({ ...product, stock: parseInt(event.target.value, 10) });
    }
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (product) {
      setProduct({ ...product, categoryId: parseInt(event.target.value, 10) });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Updated Product Details:', product);
  };


  return (
    <div className="edit-product">
      <h1 className="title">{t("editProduct")}</h1>
      {product && (
        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="id">{t("id")}</label>
            <input type="text" id="id" value={product.id} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="sku">{t("sku")}</label>
            <input type="text" id="sku" value={product.sku} readOnly />
          </div>
          <div className="form-group">
            <label htmlFor="name">{t("name")}</label>
            <input type="text" id="name" value={product.name} onChange={handleNameChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="image">{t("image")}</label>
            <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
            {product.image && <img src={product.image} alt="Product" className="product-image" />}
          </div>
          <div className="form-group">
            <label htmlFor="price">{t("price")}</label>
            <input type="number" id="price" value={product.price} onChange={handlePriceChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="stock">{t("stock")}</label>
            <input type="number" id="stock" value={product.stock} onChange={handleStockChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="category">{t("category")}</label>
            <select id="category" value={product.categoryId} onChange={handleCategoryChange} required>
              <option value="" disabled>{t("selectacategory")}</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">{t("saveChanges")}</button>
        </form>
      )}
    </div>
  );
};

export default EditProduct;
