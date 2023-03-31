import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { fetchUser, fetchItem, fetchList } from "../api/index";
import { user, item, list } from "@/types/types";
import { AxiosResponse } from "axios";

export const useNewsStore = defineStore("news", () => {
  const FETCH_LIST = async (listname: string) => {
    if (list.length == 0) {
      return await fetchList(listname)
        .then((response: AxiosResponse) => pushData(response.data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      list.splice(0);
      return await fetchList(listname)
        .then((response: AxiosResponse) => pushData(response.data))
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const FETCH_USER = async (id: string) => {
    return await fetchUser(id).then((response: AxiosResponse) =>
      user.push(response.data)
    );
  };
  const FETCH_ITEM = async (id: string) => {
    return await fetchItem(id).then((response: AxiosResponse) =>
      item.push(response.data)
    );
  };

  const pushData = (data: list[]) => {
    for (let i = 0; i < data.length; i++) {
      list.push(data[i]);
    }
  };

  const fetchedList = () => {
    return list;
  };

  const user: user[] = reactive([]);
  const item: item[] = reactive([]);
  const list: list[] = reactive([]);
  const loading = ref(false);

  const onProgress = () => {
    loading.value = true;
  };
  const offProgress = () => {
    loading.value = false;
  };
  return {
    user,
    item,
    list,
    FETCH_USER,
    FETCH_ITEM,
    FETCH_LIST,
    offProgress,
    onProgress,
    loading,
    fetchedList,
  };
});
