import React, { useState, useEffect } from 'react';
import './editCategory.scss';
import { useTranslation } from 'react-i18next';
import { Category } from '@/store/slices/category.slide';
import api from '@/api';
import { useParams } from 'react-router-dom';
import   firebase  from '@/firebase/firebase';


const EditCategory: React.FC = () => {
  const [category, setCategory] = useState<Category | null>(null);
  const { categoryId } = useParams<{ categoryId: string }>();
  const {t} = useTranslation();

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await api.category.getCategoryById(Number(categoryId));
        setCategory(response.data);
      } catch (error) {
        console.error('Failed to fetch category', error);
      }
    };
   
    fetchCategory();
  }, [categoryId]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (category) {
      setCategory({ ...category, category_name: event.target.value });
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
   firebase.uploadToStorage(file).then((url) => {
      if (category) {
        setCategory({ ...category, image: url });
      }
    });
  };

  const handleIsDeletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (category) {
      setCategory({ ...category, status: event.target.checked });
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!category) {
      return;
    }
    const data = {
      category_id: category.category_id,
      category_name: category.category_name,
      image: category.image,
      status: category.status,
    };
    console.log("data",data)
    try {
      await api.category.updateCategory(data);
      alert(t('updateCategorySuccess'));
      window.location.href = '/admin/category';
    } catch (error) {
      alert(t('updateCategoryFailed'));
    }
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
            value={category.category_id}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            value={category.category_name}
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
            checked={category.status}
            onChange={handleIsDeletedChange}
          />
        </div>
        <button type="submit" className="submit-button">{t("updateCategory")}</button>
      </form>
    </div>
  );
};

export default EditCategory;
