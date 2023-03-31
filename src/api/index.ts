import axios from "axios";
const api = {
  user: "https://api.hnpwa.com/v0/user/",
  item: "https://api.hnpwa.com/v0/item/",
};

function fetchList(type: string) {
  const url = `https://api.hnpwa.com/v0/${type}/1.json`;
  return axios.get(url);
}

function fetchUser(id: string) {
  const url = `${api.user}${id}.json`;
  return axios.get(url);
}

function fetchItem(id: string) {
  const url = `${api.item}${id}.json`;
  return axios.get(url);
}

export { fetchUser, fetchItem, fetchList };
