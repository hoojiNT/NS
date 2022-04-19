import APIs from "./api";
import axios from "axios";
import {defineStore} from "pinia";
import {removeUnnecessaryItems} from "@babel/preset-env/lib/filter-items";

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: {}
    }),
    getters: {
        listCategories: (state) => state.categories
    },
    actions: {
        getCategories() {
            return axios.get(APIs.Category).then(x => this.state.categories = x.data)
        }
    }
})
