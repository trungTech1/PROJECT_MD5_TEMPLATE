import React from 'react';
import '@admin/pages/categories/CategoryTable.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import api from '@/api';
import { categoryActions } from '@/store/slices/category.slide';
// import { SourceTextModule } from 'vm';


const CategoryTable: React.FC = () => {
  const { t } = useTranslation();
  const categoryStore = useSelector((state: RootState) =>{
    return state.category;
  });
  const dipatch = useDispatch();
  const navigate = useNavigate();
  const listCategory = categoryStore.categories;

  const handleEdit = (id: number) => {
    console.log("id cate",id)
    navigate(`/admin/category/edit/${id}`);
  }

  const handleDelete = (id : number) => {
    api.category.deleteCategory(id).then(() => {
      dipatch(categoryActions.updateCategory(id));
      alert(t('deleteCategorySuccess'));
    }
    ).catch(() => {
      alert(t('deleteCategoryFailed'));
    });
  }

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
              <td><img src={category.image} alt="category"/></td>
              <td>{category.status ? t("no") : t("yes")}</td>
              <td>
              <button className="edit-button" onClick={() => handleEdit(category.category_id)}>
                  {t("editCategory")}
                </button>
              </td>
              <td>
                <button className="delete-button" 
                onClick={() => handleDelete(category.category_id)
                }
                >{t("delete")}</button>
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
