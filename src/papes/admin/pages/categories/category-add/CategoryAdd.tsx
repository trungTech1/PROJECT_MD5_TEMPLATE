import React, { useState } from 'react';
import './addCategory.scss';
import { useTranslation } from 'react-i18next';
import api from '@/api';

const AddCategory: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const category_name = name;
    api.category.addCategory({ category_name }).then(() => {
      alert(t('addCategorySuccess'));
      window.location.href = '/admin/category';
    }).catch(() => {
      alert(t('addCategoryFailed'));
    });
  };

  return (
    <div className="add-category">
      <h1 className="title">{t("addNCategory")}</h1>
      <form className="category-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{t("name")}</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={
              (event) => setName(event.target.value)
            }
            required
          />
        </div>
        <button type="submit" className="submit-button">{t("addCategory")}</button>
      </form>
    </div>
  );
};

export default AddCategory;
