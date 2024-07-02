import React, { useState, useEffect } from 'react';
import './editCategory.scss';
import { useTranslation } from 'react-i18next';

interface Category {
  id: number;
  name: string;
  image: string;
  isDeleted: boolean;
}

const EditCategory: React.FC <{ categoryId: number }> = ({ categoryId }) => {
  const [category, setCategory] = useState<Category | null>(null);

  const {t} = useTranslation();

  useEffect(() => {
    // Fetch category data based on categoryId
    // Replace the fetch logic with actual API call
    const fetchCategory = async () => {
      // Simulating fetch with dummy data
      const data = {
        id: categoryId,
        name: 'Ghế',
        image: 'https://via.placeholder.com/50',
        isDeleted: false,
      };
      setCategory(data);
    };
    fetchCategory();
  }, [categoryId]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (category) {
      setCategory({ ...category, name: event.target.value });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0 && category) {
      const imageFile = URL.createObjectURL(event.target.files[0]);
      setCategory({ ...category, image: imageFile });
    }
  };

  const handleIsDeletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (category) {
      setCategory({ ...category, isDeleted: event.target.checked });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Updated Category:', category);
  };

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-category">
      <h1 className="title">{t("editCategory")}</h1>
      <form className="category-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">{t("id")}</label>
          <input
            type="text"
            id="id"
            value={category.id}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            value={category.name}
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
          {category.image && (
            <img src={category.image} alt="Category" className="category-image" />
          )}
        </div>
        <div className="form-group">
          <label htmlFor="isDeleted">{t("isDeleted")}</label>
          <input
            type="checkbox"
            id="isDeleted"
            checked={category.isDeleted}
            onChange={handleIsDeletedChange}
          />
        </div>
        <button type="submit" className="submit-button">{t("updateCategory")}</button>
      </form>
    </div>
  );
};

export default EditCategory;
