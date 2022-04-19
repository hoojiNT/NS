import  {defineStore} from "pinia";
import axios from "axios";
import APIs from "./api";

export const useProductStore = defineStore({
    id: 'product',
    state: () => ({
        products: {}
    }),
    getters: {
        listProducts: (state) => state.products
    },
    actions: {
        getProduct() {
            axios.get(APIs.Product).then(x=> this.state.products = x.data)
        }
    }
})
