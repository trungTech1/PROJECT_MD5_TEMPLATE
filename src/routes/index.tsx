import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/papes/user/home/home";
import Homepapes from "@/papes/user/home/papes/homepapes/Homepapes";
import Shop from "@/papes/user/shop";
import Admin from "@/papes/admin/index";
import Category from "@/papes/admin/pages/categories/CategoryTable";
import Order from "@/papes/admin/pages/orders/OrderTable";
import ProductTable from "@/papes/admin/pages/products/ProductTable";
import User from "@/papes/admin/pages/users/UserTable";
import AddCategory from "@/papes/admin/pages/categories/category-add/CategoryAdd";
import CategoryEdit from "@/papes/admin/pages/categories/category-edit/CategoryEdit";
import AddProduct from "@/papes/admin/pages/products/product-add/AddProduct";
import EditProduct from "@/papes/admin/pages/products/product-edit/EditProduct";
import AddUser from "@/papes/admin/pages/users/add-user/AddUser";
import Authen from "@/papes/user/home/papes/authen/index";
import Cart from "@/papes/user/cart/index";
import Checkout from "@/papes/user/checkout/Checkout";
import Productdetail from "@/papes/user/detail/Productdetail";
// import AccountProfile from "@/papes/user/home/papes/accountProfile/AccountProfile";

const RootRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Homepapes />} />
          <Route path="shop" element={<Shop />} />
          <Route path="authen" element={<Authen />} />
          <Route path="cart" element={<Cart />} />
          <Route path="cart/checkout" element={<Checkout />} />
          <Route path="product" element={<Productdetail />} />

        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="category" element={<Category />} />
          <Route path="category/add" element={<AddCategory />} />
          <Route path="category/edit/:categoryId" element={<CategoryEdit />} />
          <Route path="product" element={<ProductTable />}/>
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/edit/:productId" element={<EditProduct />} />
          <Route path="user" element={<User />} />
          <Route path="user/add" element={<AddUser />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RootRoutes;
