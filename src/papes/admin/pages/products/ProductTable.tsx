import React from 'react';
import './ProductTable.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProductTable: React.FC = () => {
const {t} = useTranslation();

  return (
    <div className="product-table-container">
      <div className="header">
        <h1>{t("productTable")}</h1>
        <div className="actions">
          <button className="add-button"><Link className='link-add-product' to="/admin/product/add">{t("addProduct")}</Link> </button>
          <div className="search-box">
            <input type="text" placeholder={t("enterproductname")} />
            <button>{t("search")}</button>
          </div>
        </div>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>{t("id")}</th>
            <td>{t("sku")}</td>
            <th>{t("name")}</th>
            <th>{t("image")}</th>
            <th>{t("price")}</th>
            <th>{t("stock")}</th>
            <th>{t("categoryId")}</th>
            <th>{t("createdAt")}</th>
            <th>{t("updatedAt")}</th>
            <th colSpan={2}>{t("action")}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>Ghế 1</td>
            <td><img src="https://via.placeholder.com/50" alt="Product 1" /></td>
            <td>500.0</td>
            <td>20</td>
            <td>1</td>
            <td>16/06/2024</td>
            <td>17/06/2024</td>
            <td>
              <button className="edit-button"><Link className='link-edit-product' to="/admin/product/edit">{t("edit")}</Link></button>
            </td>
            <td>
              <button className="delete-button">{t("delete")}</button>
            </td>
          </tr>
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

export default ProductTable;