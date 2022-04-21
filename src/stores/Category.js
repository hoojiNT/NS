import APIs from "./api";
import ClientHelper from "../helper/ClientHelper.js"
import {defineStore} from "pinia";
// import {removeUnnecessaryItems} from "@babel/preset-env/lib/filter-items";

export const useCategoryStore = defineStore({
	id: 'category',
	state: () => ({
		categories: {}
	}),
	getters: {
		allCategories: (state) => state.categories,
		// menuCategory: (state) => {
		// 	return state.categories.map((ele, idx, arr) => ({
		// 		value: ele.attributes,
		// 		children: arr.map(c => c.attributes === ele.attributes. ({value: c.attributes}))
		// 	}))
		// }
	},
	actions: {
		setCategories(val) {
			this.categories = val
		},
		getCategories() {
			const set = this.setCategories
			return ClientHelper.get(APIs.Category).then(x => set(x.data.data))
		}
	}
})
