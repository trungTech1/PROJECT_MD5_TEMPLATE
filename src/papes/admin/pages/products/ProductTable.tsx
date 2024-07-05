import React, { useEffect } from 'react';
import './ProductTable.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '@/api';
import { Modal } from 'antd';
interface product {
  product_id: number;
  sku: string;
  product_name: string;
  imageUrls: string[];
  unitPrice: number;
  decription: string;
  stock_quantity: number;
  category_id: number;
  status: boolean;
  created_at: string;
  updatedAt: string;
}
const ProductTable: React.FC = () => {
const {t} = useTranslation();
const [products, setProducts] = React.useState<product[]>([]);
useEffect(() => {
  const fetchProducts = async () => {
    // Correctly call the function here
    await api.product.getAllproducts().then((res: any) => { 
      setProducts(res.data);
    }).catch(() => {
      alert(t('fetchProductFailed'));
    });
  };
  fetchProducts();
}, [t]);

// const addNewProduct = (newProduct: product) => {
//   setProducts(prevProducts => [...prevProducts, newProduct]);
// };
  return (
    <div className="product-table-container">
      <div className="header">
        <h1>{t("productTable")}</h1>
        <div className="actions">
          <button className="add-button"><Link className='link-add-product' to="add">{t("addProduct")}</Link> </button>
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
            {products?.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.sku}</td>
                <td>{product.product_name}</td>
                <td>
                  {product.imageUrls ? (
                    <img src={product.imageUrls[0]} alt="product" />
                  ) : (
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/shopinufb.appspot.com/o/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg?alt=media&token=a1ec7eae-fbc7-4306-b7ec-bb2e6ad3c91c"
                      alt="product"
                    />
                  )}
                </td>
                <td>{product.unitPrice}</td>
                <td>{product.stock_quantity}</td>
                <td>{product.category_id}</td>
                <td>{product.created_at}</td>
                <td>{product.updatedAt}</td>
                <td>
                  <button className="edit-button"><Link to={`/admin/product/edit/${product.product_id}`}>{t("edit")}</Link></button>
                </td>
                <td>
                  <button className="delete-button"  
                  onClick={() => [
                    Modal.confirm({
                      title: "Xác nhận!",
                      content: "Bạn chắc chưa",
                      onOk: () => {
                        api.product.deleteProduct(product.product_id)
                          .then((res) => {
                            Modal.success({content: t('deleteProductSuccess')});
                            setProducts(products.filter((item) => item.product_id !== product.product_id));
                            res.data;}).catch(() => {
                            Modal.error({content: t('deleteProductFailed')});
                          });
                      },
                    }),
                  ]} >{t("delete")}</button>
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

export default ProductTable;
