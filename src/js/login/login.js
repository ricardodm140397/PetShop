import "../../css/login.css";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import "../../../node_modules/materialize-css/dist/js/materialize.js";
import Api from "../services/api.js";
import { login } from "../services/endPoins.js";
import LocalStorage from "../services/localStorage.js";
import { send, loading, userRequire, passRequire } from "./interfaz.js";

const api = new Api();
const localStotage = new LocalStorage();

class Login {
  constructor() {
    const redirection = localStotage.getApiKey();
    if (redirection) {
      window.location.href = "index.html";
    }
    this.acces();
  }
  acces() {
    send.addEventListener("click", (e) => {
      e.preventDefault();
      const user = document.querySelector("#usr").value;
      const pass = document.querySelector("#pass").value;
      if (user.length <= 0) {
        return;
      }
      if (pass.length <= 0) {
        return;
      }
      loading.style.display = "block";
      const data = {
        email: user,
        password: pass,
      };

      api.post(login, data).then((data) => {
        if (!data) {
          localStotage.delete();
          M.toast({
            html: "Usuario o contraseña incorrecta!",
            classes: "rounded",
          });
          loading.style.display = "none";
        } else {
          localStotage.delete();
          localStotage.setApiKey(data.token);
          localStotage.set("carShopping", data.carShopping);
          localStotage.set("purchales", data.purchale);
          localStotage.set("user", data.user);
          window.location.href = "index.html";
          loading.style.display = "none";
        }
      });
    });
  }
}

const log = new Login();
