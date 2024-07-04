import React from "react";
import "@admin/pages/categories/CategoryTable.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import api from "@/api";
import { categoryActions } from "@/store/slices/category.slide";
import { Modal } from "antd";

const CategoryTable: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const categoryStore = useSelector((state: RootState) => {
    return state.category;
  });

  return (
    <div className="category-table-container">
      <div className="header">
        <h1>{t("categoryTable")}</h1>
        <div className="actions">
          <button className="add-button">
            <Link className="link-add-category" to="add">
              {t("addNewCategory")}
            </Link>
          </button>
          <div className="search-box">
            <input type="text" placeholder={t("placeholderSearchCategory")} />
            <button
              className="search-button"
              // onClick={() =>}
            >
              {t("search")}
            </button>
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
          {categoryStore.categories?.map((category) => (
            <tr key={category.category_id}>
              <td>{category.category_id}</td>
              <td>{category.category_name}</td>

              <td>
                {category.image ? (
                  <img src={category.image} alt="category" />
                ) : (
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg?alt=media&token=a1ec7eae-fbc7-4306-b7ec-bb2e6ad3c91c"
                    alt="category"
                  />
                )}
              </td>
              <td>{category.status ? t("no") : t("yes")}</td>
              <td>
                <button
                  className="edit-button"
                >
                  <Link to={`edit/${category.category_id}`}>{t("edit")}</Link>
                </button>
              </td>
              <td>
                <button
                  className="delete-button"
                  onClick={() => [
                    Modal.confirm({
                      title: "Xác nhận!",
                      content: "Bạn chắc chưa",
                      onOk: () => {
                        api.category
                          .deleteCategory(category.category_id)
                          .then((res) => {
                            res.data;
                            dispatch(
                              categoryActions.deleteCategory(
                                category.category_id
                              )
                            );
                          });
                      },
                    }),
                  ]}
                >
                  {t("delete")}
                </button>
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
