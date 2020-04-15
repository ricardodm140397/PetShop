/* import { Api } from '../services/ApiConsumer';
const api = Api(); */
export class Home {
  constructor() {
    this.createShoppingCard();
  }

  createShoppingCard() {
    const carShopping = document
      .querySelector("#buttonShoppingCar")
      .addEventListener("mouseover", () => {
        const showCarShopping = document.querySelector("#carShoppingCard");
        showCarShopping.innerHTML = `<li class="collection-item avatar">
                                      <img src="img/93154211_240902656962032_510511237415567360_n.png" alt="" class="circle">
                                        <span class="title">Title</span>
                                          <p>First Line <br>
                                                 Second Line
                                          </p>
                                      <a href="#!" class="secondary-content"><i class="material-icons">attach_money</i></a>
                                    </li>`;
      });
  }
}

const render = new Home();
