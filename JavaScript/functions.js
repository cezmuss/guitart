const payment = document.getElementById('pay');

let cart = document.querySelectorAll('.addCart');

let products = [
  {
    name: 'GUITARRA SG - PRETA',
    image: 'SG1.png',
    price: 1490,
    quantity: 0
  },
  {
    name: 'GUITARRA SG - VERMELHA',
    image: 'SG2.png',
    price: 1589,
    quantity: 0
  },
  {
    name: 'GUITARRA SG - BRANCA',
    image: 'SG3.png',
    price: 1680,
    quantity: 0
  },
  {
    name: 'GUITARRA LES PAUL - PRETA',
    image: 'LP1.png',
    price: 3350,
    quantity: 0
  },
  {
    name: 'GUITARRA LES PAUL - BRANCA',
    image: 'SG2.png',
    price: 3135,
    quantity: 0
  },
  {
    name: 'GUITARRA LES PAUL - SUNSET',
    image: 'SG3.png',
    price: 7000,
    quantity: 0
  },
  {
    name: 'GUITARRA FLYING V - MADEIRA',
    image: 'FV1.png',
    price: 2899,
    quantity: 0
  },
  {
    name: 'GUITARRA FLYING V - PRETA',
    image: 'FV2.png',
    price: 2700,
    quantity: 0
  },
  {
    name: 'GUITARRA FLYING V - MESCLADA',
    image: 'FV3.png',
    price: 2599,
    quantity: 0
  },
  {
    name: 'GUITARRA EXPLORER - MARROM',
    image: 'EX1.png',
    price: 3100,
    quantity: 0
  },
  {
    name: 'GUITARRA EXPLORER - PRETA',
    image: 'EX2.png',
    price: 3120,
    quantity: 0
  },
  {
    name: 'GUITARRA EXPLORER - VERMELHA',
    image: 'EX3.png',
    price: 3000,
    quantity: 0
  },
  {
    name: 'GUITARRA TELECASTER - AZUL',
    image: 'TC1.png',
    price: 5850,
    quantity: 0
  },
  {
    name: 'GUITARRA TELECASTER - PRETA',
    image: 'TC2.png',
    price: 2850,
    quantity: 0
  },
  {
    name: 'GUITARRA TELECASTER - VERMELHA',
    image: 'TC3.png',
    price: 2799,
    quantity: 0
  },
  {
    name: 'GUITARRA STRATOCASTER - AZUL',
    image: 'SC1.png',
    price: 5400,
    quantity: 0
  },
  {
    name: 'GUITARRA STRATOCASTER - ROSA',
    image: 'SC2.png',
    price: 1625,
    quantity: 0
  },
  {
    name: 'GUITARRA STRATOCASTER - CINZA',
    image: 'SC3.png',
    price: 1700,
    quantity: 0
  },
  {
    name: 'PALHETA AC/DC',
    image: 'palheta1.png',
    price: 19,
    quantity: 0
  },
  {
    name: 'PALHETA FENDER',
    image: 'palheta2.png',
    price: 15,
    quantity: 0
  },
  {
    name: 'PALHETA THE DOORS',
    image: 'palheta3.png',
    price: 25,
    quantity: 0
  },
  {
    name: 'AMPLIFICADOR MARSHALL',
    image: 'amplificador1.png',
    price: 480,
    quantity: 0
  },
  {
    name: 'AMPLIFICADOR METEORO',
    image: 'amplificador2.png',
    price: 380,
    quantity: 0
  },
  {
    name: 'AMPLIFICADOR ORANGE',
    image: 'amplificador3.png',
    price: 325,
    quantity: 0
  },
  {
    name: 'JAQUETA EDDIE VAN HALEN',
    image: 'camisa1.png',
    price: 59,
    quantity: 0
  },
  {
    name: 'JAQUETA GUITART',
    image: 'camisa2.png',
    price: 49,
    quantity: 0
  },
  {
    name: 'JAQUETA JIMI HENDRIX',
    image: 'ShirtHenjin.png',
    price: 45,
    quantity: 0
  },
]

for (let c = 0; c < cart.length; c++) {
  cart[c].addEventListener('click', () => {
    numberCart(products[c]);
    setItems(products[c]);
    totalCost(products[c]);
  });
}

function onLoadCartNumbers() {
  let productNumber = localStorage.getItem('numberCart');

  if (productNumber) {
    document.querySelector('.icon-cart span').textContent = productNumber;
  }
}


function numberCart(product) {
  let productNumber = localStorage.getItem('numberCart');

  productNumber = parseInt(productNumber);

  if (productNumber) {
    localStorage.setItem('numberCart', productNumber + 1);
    document.querySelector('.icon-cart span').textContent = productNumber + 1;
  } else {
    localStorage.setItem('numberCart', 1);
    document.querySelector('.icon-cart span').textContent = 1;
  }
}


function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.name]: product
      }
    }
    cartItems[product.name].quantity += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.name]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}


function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector(".container-cart");
  let totalPriceContainer = document.querySelector(".total-price");
  let cartCost = localStorage.getItem('totalCost');

  if (cartItems && productContainer) {
    productContainer.innerHTML = ' ';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
        <div class="cart">
          <div class="product-name">
            <img class="item-img" src="../assets/images/${item.image}">
            <p><b>${item.name}</b></p>
            <div class="quantidade">
              <strong>Quantidade</strong>
              <div class="cart-items">
                <div class="quantity"><span>${item.quantity}</span></div>
              </div>
            </div>
          </div>
          <div class="description">
            <p>
              ÓTIMA ESCOLHA :D <br>
              Este instrumento é um dos melhores que temos aqui na loja!
              Vários guitarristas profissionais amam seu som.
            </p>
          </div>
          <div class="price">
            <p>
              &nbsp&nbspVALOR<br>
              R$${item.price},00
            </p>
          </div>
        </div>
      `

      totalPriceContainer.innerHTML += `
        ${cartCost},00
      `
    });
  }
}


onLoadCartNumbers();
displayCart();


function initMap() {
  var configuracoes = {
    center: {lat: 11.551536855884436, lng: 92.24415040434234},
    zoom: 12
  }

  var mapa = new google.maps.Map(document.getElementById('map'), configuracoes);

  var marcador = new google.maps.Marker({
    position: {lat: 11.551536855884436, lng: 92.24415040434234},
    title: "Ilha Sentilena do Norte",
    map: mapa
  });
}


payment.addEventListener('click', () => {
  alert('Obrigado pela compra! Volte sempre!');
  localStorage.removeItem('productsInCart');
  window.location.reload();
});

