import '../../css/styles.css';
import '../../../node_modules/normalize.css/normalize.css';
import '../../../node_modules/materialize-css/dist/css/materialize.min.css'
import { Interfaz, showCarShopping, objet } from "./interfaz.js";
const interfaz = new Interfaz();
export class Home {
  constructor() {
    console.log('webpack');
    this.createCarShopping();
  }
  createCarShopping() {
    if (objet.length <= 0) {
      showCarShopping.innerHTML = `<p class="center-align">El carrito esta vacio</p>`;
    } else {
      objet.map((p) => {
        let li = document.createElement("LI");
        li.classList.add("collection-item");
        li.classList.add("avatar");
        li.setAttribute("id", p.id);
        li.innerHTML = interfaz.carShopping(p.img, p.product, p.description);
        showCarShopping.appendChild(li);
      });
    }
  }
}

const home = new Home();