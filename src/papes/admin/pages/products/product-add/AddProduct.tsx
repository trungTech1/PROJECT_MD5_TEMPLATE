import React, { useState, useEffect } from 'react';
import './addProduct.scss';
import { useTranslation } from 'react-i18next';

interface Category {
  id: number;
  name: string;
}

const AddProduct: React.FC = () => {
const {t} = useTranslation();

  const [categories, setCategories] = useState<Category[]>([]);
  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productStock, setProductStock] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number | null>(null);

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
    fetchCategories();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setProductImage(event.target.files[0]);
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(parseFloat(event.target.value));
  };

  const handleStockChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductStock(parseInt(event.target.value, 10));
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Product Details:', {
      productName,
      productImage,
      productPrice,
      productStock,
      categoryId,
    });
  };

  return (
    <div className="add-product">
      <h1 className="title">{t("addNproduct")}</h1>
      <form className="product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            value={productName}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">{t("image")}</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">{t("price")}</label>
          <input
            type="number"
            id="price"
            value={productPrice}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">{t("stock")}</label>
          <input
            type="number"
            id="stock"
            value={productStock}
            onChange={handleStockChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">{t("category")}</label>
          <select id="category" value={categoryId ?? ''} onChange={handleCategoryChange} required>
            <option value="" disabled>{t("selectacategory")}</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">{t("addProduct")}</button>
      </form>
    </div>
  );
};

export default AddProduct;
