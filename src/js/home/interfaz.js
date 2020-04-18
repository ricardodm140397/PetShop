export const showCarShopping = document.querySelector("#carShoppingCard"),
  objet = [
    {
      id: 1,
      img:
        "https://images.unsplash.com/photo-1543492038-17678486eb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
      product: "Product",
      description: "Croquetas",
    },
    {
      id: 2,
      img:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1027&q=80",
      product: "hola2",
      description: "Croquetas",
    },
    {
      id: 3,
      img:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      product: "hola3",
      description: "Croquetas",
    },
  ];

export class Interfaz {
  carShopping(urlImage, title, product) {
    return `<img src="${urlImage}" alt="" class="circle">
             <span class="title">${title}</span>
             <p>${product}<br>
                <a class="btn-flat red-text">Eliminar</a>
             </p>
             <a href="#!" class="secondary-content "><i class="material-icons">attach_money</i></a>
            `;
  }
}
