export class Api {
  constructor() {
    /* url Se especifica el url de la ap que se va a consumir */
    this.url = "";
  }

  async get(table, id) {
    if (id !== undefined) {
      let response = await fetch(`${this.url}/${table}/${id}`);
      let data = await response.json();
      return data;
    } else {
      let response = await fetch(`${this.url}/${table}`);
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
    };
    try {
      const res = await fetch(`${this.url}/${table}/${id}`, settings);
      const response = await res.json();
      return response;
    } catch (e) {
      console.log(e);
    }
  }

  async patch(table, data,id) {
    const settings = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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
