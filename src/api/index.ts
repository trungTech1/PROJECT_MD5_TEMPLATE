import { categoryApi } from "./modules/categoryApi";
import { productApi } from "./modules/productApi";
import { userApi } from "./modules/user";
import axios from "./axios.instance";

export default {
    category : categoryApi,
    product : productApi,
    user : userApi,
    instance : axios
}