import { categoryApi } from "./modules/categoryApi";
import { productApi } from "./modules/productApi";
import { userApi } from "./modules/user";
import axios from "./axios.instance";
import { cartApi } from "./modules/cart";
import { orderApi } from "./modules/order";


export default {
    category : categoryApi,
    product : productApi,
    user : userApi,
    instance : axios,
    cart :cartApi,
    order : orderApi
}