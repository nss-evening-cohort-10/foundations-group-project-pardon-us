console.log("hi from js!");

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

//Merch Array of Objects
const merchandise = [
  {
    title: "Metronome T-Shirt",
    type: "Shirt",
    price: "10",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0002/3461/8886/products/bKdUbXud_jpeg_1600x.jpg?v=1561719930"
  },
  {
    title: "Pardon T-Shirt",
    type: "Shirt",
    price: "10",
    imageUrl:
      "https://static1.squarespace.com/static/578ce65b15d5db22cae968bb/5ce6b610104c7b424bec349d/5ce870700d9297ced78798fb/1565223966245/?format=500w"
  },
  {
    title: "Shark T-Shirt",
    type: "Shirt",
    price: "10",
    imageUrl: "https://f4.bcbits.com/img/0006187651_10.jpg"
  },
  {
    title: "Fumin' Poster",
    type: "Poster",
    price: "25",
    imageUrl: "https://f4.bcbits.com/img/a0706942430_2.jpg"
  },
  {
    title: "Pardon Us Poster",
    type: "Poster",
    price: "25",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexrzbeFC40nXcgJcg1vhjo1y3zh6nbNeKk6N12LRw-57e6WVVfg"
  },
  {
    title: "Thersea May Not Something True Poster",
    type: "Poster",
    price: "25",
    imageUrl: "https://f4.bcbits.com/img/a3168995921_2.jpg"
  },
  {
    title: "Only Strangers Split Vinyl",
    type: "Vinyl",
    price: "15",
    imageUrl: "https://f4.bcbits.com/img/0006187587_37.jpg"
  },
  {
    title: "Demos Vinyl",
    type: "Vinyl",
    price: "15",
    imageUrl: "https://f4.bcbits.com/img/0005440056_37.jpg"
  },
  {
    title: "Pardon Us Vinyl",
    type: "Vinyl",
    price: "15",
    imageUrl: "https://f4.bcbits.com/img/a1333370211_37.jpg"
  }
];

//Merch Builder
const buildMerchandise = type => {
  let domString = "";
  merchandise.forEach(merch => {
      if (merch.type === type){
          domString += `<div class="card">`;
          domString += `<h3 class="title">${merch.title}</h3>`;
          domString += `<h3><img src="${merch.imageUrl}"></h3>`;
          domString += `<strong>${merch.price}</strong>`;
          domString += `<h3 class="${merch.type}">${merch.type}</h3>`;
          domString += `</div>`;
      }
      else if (type === "All"){
        domString += `<div class="card">`;
        domString += `<h3 class="title">${merch.title}</h3>`;
        domString += `<h3><img src="${merch.imageUrl}"></h3>`;
        domString += `<strong>${merch.price}</strong>`;
        domString += `<h3 class="${merch.type}">${merch.type}</h3>`;
        domString += `</div>`;
      }
  });

  printToDom("merchandise", domString);
};

//nav builder
const navBuilder = () => {
  let domString = `<ul class="nav flex-column">
        <li class="nav-item">
            <input type="button" class="nav-link" id="posters" value="Posters">
            </input>
        </li>
        <li class="nav-item">
            <input type="button" class="nav-link" id="shirts" value="Shirts">
            </input>
        </li>
        <li class="nav-item">
            <input type="button" class="nav-link" id="vinyl" value="Vinyl">
            </input>
        </li>
        <li class="nav-item">
            <input type="button" class="nav-link" id="all" value="All">
            </input>
        </li>
    </ul>`;

  printToDom("vertical-nav", domString);
};

const eventListener = () => {
    document .getElementById("posters").addEventListener("click", () => {
        buildMerchandise("Poster");
    });
    document .getElementById("shirts").addEventListener("click", () => {
        buildMerchandise("Shirt");
    });
    document .getElementById("vinyl").addEventListener("click", () => {
        buildMerchandise("Vinyl");
    });
    document .getElementById("all").addEventListener("click", () => {
        buildMerchandise("All");
    });
}

const init = () => {
  // console.log(document.URL.indexOf("merch.html")!=-1);
  if (document.URL.indexOf("merch.html") != -1) {
    navBuilder();
    eventListener();
  }
};

init();
