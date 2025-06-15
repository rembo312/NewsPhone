import {defineStore} from "pinia";
import {ref} from "vue";


export interface NavigationType {
    name: string;
    slug: string;
}

export const useNavigationStore = defineStore("navigationStore",() => {
    const navigation = ref<NavigationType[]>([]);

    async function loadNavigation() {
        const res = await fetch(`/News/navigations.json`)
        navigation.value = await res.json() as NavigationType[];
    }

    return {
        navigation,
        loadNavigation,
    }

});