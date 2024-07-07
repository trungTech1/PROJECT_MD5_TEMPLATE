import React, { useEffect, useState } from "react";
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
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const categoryStore = useSelector((state: RootState) => {
    return state.category;
  });
console.log("categoryStore", categoryStore)

  const loadCategories = async () => {
    const data = await api.category.getCategories(
      currentPage,
      pageSize,
      searchTerm
    );
    dispatch(categoryActions.setData(data.data));
    setTotalPages(data.data.totalPages);
  };

  useEffect(() => {
    const loadCategories = async () => {
      const data = await api.category.getCategories(currentPage, pageSize);
      dispatch(categoryActions.setData(data.data));
      setTotalPages(data.data.totalPages);
    };
    loadCategories();
  }, [currentPage, pageSize, dispatch]);

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const handleSearch = () => {
    setCurrentPage(0);
    loadCategories();
  };

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
              <input
                type="text"
                placeholder={t("placeholderSearchCategory")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // Ngăn chặn hành vi mặc định của phím Enter
                    handleSearch();
                  }
                }
                }
              />
            <button className="search-button" onClick={handleSearch}>
              {t("search")}
            </button>
          </div>
        </div>
      </div>
      <div className="table-wrapper">
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
          {categoryStore.categories?.map((category,index) => (
            <tr key={category.category_id}>
              <td>{index + 1 + pageSize * currentPage}</td>
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
                <button className="edit-button">
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
      </div>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {getPageNumbers().map((number) => (
          <button
            key={number}
            className={`pagination-button ${
              currentPage === number - 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(number - 1)}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
          }
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
        <select
          className="select-page-size"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(0);
          }}
        >
          <option value="10">10 per page</option>
          <option value="20">20 per page</option>
          <option value="50">50 per page</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryTable;
