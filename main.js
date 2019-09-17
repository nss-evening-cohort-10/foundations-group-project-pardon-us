console.log("hi from js!");

//Merch Array of Objects 
const merchandise = [
    {
        title: "Metronome T-Shirt",
        type: "Shirt",
        price: "10",
        imageUrl: "https://cdn.shopify.com/s/files/1/0002/3461/8886/products/bKdUbXud_jpeg_1600x.jpg?v=1561719930",
    }, 
    {
        title: "Pardon T-Shirt",
        type: "Shirt",
        price: "10",
        imageUrl: "https://static1.squarespace.com/static/578ce65b15d5db22cae968bb/5ce6b610104c7b424bec349d/5ce870700d9297ced78798fb/1565223966245/?format=500w",
    }, 
    {
        title: "Shark T-Shirt",
        type: "Shirt",
        price: "10",
        imageUrl: "https://f4.bcbits.com/img/0006187651_10.jpg",
    }, 
    {
        title: "Fumin' Poster",
        type: "Poster",
        price: "25",
        imageUrl: "https://f4.bcbits.com/img/a0706942430_2.jpg",
    }, 
    {
        title: "Pardon Us Poster",
        type: "Poster",
        price: "25",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexrzbeFC40nXcgJcg1vhjo1y3zh6nbNeKk6N12LRw-57e6WVVfg",
    }, 
    {
        title: "Thersea May Not Something True Poster",
        type: "Poster",
        price: "25",
        imageUrl: "https://f4.bcbits.com/img/a3168995921_2.jpg",
    }, 
    {
        title: "Only Strangers Split Vinyl",
        type: "Vinyl",
        price: "15",
        imageUrl: "https://f4.bcbits.com/img/0006187587_37.jpg",
    }, 
    {
        title: "Demos Vinyl",
        type: "Vinyl",
        price: "15",
        imageUrl: "https://f4.bcbits.com/img/0005440056_37.jpg",
    }, 
    {
        title: "Pardon Us Vinyl",
        type: "Vinyl",
        price: "15",
        imageUrl: "https://f4.bcbits.com/img/a1333370211_37.jpg",
    }
];

//Merch Builder
const buildMerchandise= (merchandise) => {
    let domString='';
    merchandise.forEach ((merch) => {
        domstring += `<div class="card">`;
        domstring += `<h3 class="title">${merch.title}</h3>`;
        domstring += `<h3><img src="${merch.imageUrl}"></h3>`;
        domstring += `<strong>${merch.price}</strong>`;
        domstring += `<h3 class="${merch.type}">${merch.type}</h3>`;
        domstring += `</div>`;
    });

    printToDom('merchandise', domString);
};