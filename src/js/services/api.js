import LocalStorage from "./localStorage.js";
const localStotage = new LocalStorage();
export default class Api {
  constructor() {
    /* url Se especifica el url de la ap que se va a consumir */
    this.url = "https://apipetshop.azurewebsites.net";
    this.authToken = localStotage.getApiKey();
  }

  async get(table, id) {
    const settings = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + this.authToken,
      },
    };
    if (id !== undefined) {
      let response = await fetch(`${this.url}/${table}/${id}`, settings);
      let data = await response.json();
      return data;
    } else {
      let response = await fetch(`${this.url}/${table}`, settings);
      let data = await response.json();
      return data;
    }
  }
  async post(table, data) {
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + this.authToken,
      },
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(`${this.url}/${table}`, settings);
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async delet(table, data) {
    const settings = {
      method: "DELETE",
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + this.authToken,
    };
    try {
      const res = await fetch(`${this.url}/${table}/${id}`, settings);
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async patch(table, data, id) {
    const settings = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + " " + this.authToken,
      },
      body: JSON.stringify(data),
    };
    try {
      const res = await fetch(`${this.url}/${table}/${id}`, settings);
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
