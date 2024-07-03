import React from 'react';
import '@admin/pages/categories/CategoryTable.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
// import { SourceTextModule } from 'vm';


const CategoryTable: React.FC = () => {
  const { t } = useTranslation();
  const categoryStore = useSelector((state: RootState) => state.category);

  const listCategory = categoryStore.categories;

  return (
    <div className="category-table-container">
      <div className="header">
        <h1>{t("categoryTable")}</h1>
        <div className="actions">
          <button className="add-button"><Link className='link-add-category' to="/admin/category/add">{t("addNewCategory")}</Link></button>
          <div className="search-box">
            <input type="text" placeholder={t("placeholderSearchCategory")} />
            <button>{t("search")}</button>
          </div>
        </div>
      </div>
      <table className="category-table">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <th>{t("name")}</th>
            <th>{t("image")}</th>
            <th>{t("isDeleted")}</th>
            <th colSpan={2}>{t("action")}</th>
          </tr>
        </thead>
        <tbody>
          {listCategory.map((category) => (
            <tr key={Date.now()}>
              <td>{category.category_id}</td>
              <td>{category.category_name}</td>
              <td><img src={category.image} alt="category" /></td>
              <td>{category.status ? t("no") : t("yes")}</td>
              <td>
                <button className="edit-button"><Link className='link-edit-category' to={`/admin/category/edit/${category.category_id}`}>{t("editCategory")}</Link></button>
              </td>
              <td>
                <button className="delete-button">{t("delete")}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button className="pagination-button">{t("previous")}</button>
        <button className="pagination-button">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">4</button>
        <button className="pagination-button">{t("next")}</button>
      </div>
    </div>
  );
};

export default CategoryTable;
