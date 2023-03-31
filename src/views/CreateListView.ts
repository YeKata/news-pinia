import ListView from "./ListView.vue";
import { useNewsStore } from "@/store/news";
import { h } from "vue";
export default function createListView(name: string) {
  return {
    name: name,
    created() {
      const store = useNewsStore();
      store.offProgress();
    },
    render() {
      return h(ListView);
    },
  };
}
