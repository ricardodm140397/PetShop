export const showCarShopping = document.querySelector("#carShoppingCard"),
  objet = [
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1543492038-17678486eb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
      product: "Product",
      price: 500,
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80",
      product: "Croquetas",
      price: 200,
      
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      product: "Chelas",
      price: 300,
    },
  ];

export class Interfaz {
  carShopping(urlImage, product, price) {
    return `<img src="${urlImage}" alt="" class="circle">
             <span class="title">${product}</span>
             <p> $ ${price}<br>
                <a class="btn-flat red-text">Eliminar</a>
             </p>
             <a href="#!" class="secondary-content "><i class="material-icons">attach_money</i></a>
            `;
  }
}
