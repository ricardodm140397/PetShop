export default class LocalStorage {
  constructor() {
  }
  set(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
  get(key) {
    return JSON.parse(window.localStorage.getItem(key));
  }
  delete() {
    window.localStorage.clear();
  }

  // Key authtoken
  setApiKey(data) {
    window.localStorage.setItem("token", data);
  }
  getApiKey() {
    return window.localStorage.getItem("token");
  }
}
