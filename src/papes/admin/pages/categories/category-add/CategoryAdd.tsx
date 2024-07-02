import React, { useState } from 'react';
import './addCategory.scss';
import { useTranslation } from 'react-i18next';

const AddCategory: React.FC = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Category Name:', name);
    console.log('Category Image:', image);
    // Reset form
    setName('');
    setImage(null);
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
            required
          />
        </div>
        <button type="submit" className="submit-button">{t("addCategory")}</button>
      </form>
    </div>
  );
};

export default AddCategory;
