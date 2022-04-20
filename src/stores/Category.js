import APIs from "./api";
import  ClientHelper from "../helper/ClientHelper.js"
import {defineStore} from "pinia";
// import {removeUnnecessaryItems} from "@babel/preset-env/lib/filter-items";

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
            return ClientHelper.get(APIs.Category).then(x => this.state.categories = x.data)
        }
    }
})
