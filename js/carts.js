const cart = [
    {
        productRef: "kjh4k545",
        image: "https://www.bocage.fr/media/catalog/product/W/W/WWWBOC_20384750017_10.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1820&width=1560&canvas=1560:1820",
        title: "escarpin rose",
        price: 23.00,
        quantity: 1,
        color:'red',
        pointure: 41 ,
        total: function () {
            return this.quantity * this.price;
        }
    },
    {
        productRef: "kjkj78676",
        image: "https://andre-andre-fr-storage.omn.proximis.com/Imagestorage/images/0/0/616834d95544f_414x540px_escarpins.jpg",
        title: "escarpin vert",
        price: 45.00,
        quantity: 2,
        color:'red',
        pointure :40,
         total: function () {
            return this.quantity * this.price;
        }
    },
    {
        productRef: "kjkj78676d",
        image: "https://www.pimkie.fr/dw/image/v2/AAYN_PRD/on/demandware.static/-/Sites-pimkie-master-catalog/default/dwa358f519/images/919588_515A05_portrait_HD_1.JPG?sw=760&sh=938",
        title: "escarpin ROUGE",
        price: 45.00,
        quantity: 2,
        color:'red',
        pointure: 38,
        total:function () {
            return this.quantity * this.price;
        }
    }
];

var cartItems = document.getElementsByClassName('cart-items')[0];

function createCartItems() {
    cart.map((item) => {
        createCartItemHTML(item);
    });
}

function createCartItemHTML(item) {
    //Creation de la div de class row
    var row = document.createElement('div');
    row.className = "row mb-4 shadow-lg";
    row.id = item.productRef;

    //creation de la div class col de l'image
    var imageColDiv = document.createElement('div');
    imageColDiv.className = "col-lg-3 col-md-12 mb-4 mb-lg-0";

    var imageDiv = document.createElement('div');
    imageDiv.className = "bg-image hover-overlay hover-zoom ripple rounded";
    imageDiv.setAttribute('data-mdb-ripple-color', 'light');
    imageColDiv.appendChild(imageDiv);

    var image = document.createElement('img');
    image.src = item.image;
    image.className = "img-fluid mb-4 mt-4 w-100 rounded-2 shadow";
    image.alt = item.title;
    imageDiv.appendChild(image);


    //titre
    var titleDiv = document.createElement("div");
    titleDiv.innerHTML = `<strong><p>${item.title}</p></strong><p>Couleur ${item.color} </p><p>pointure: ${item.pointure} </p>`
    titleDiv.className ="col-lg-5 col-md-6 mb-4 mt-4 mb-lg-0 text-white"

    //button
    var removebutton=document.createElement("button");
    removebutton.className="btn btn-primary btn-sm me-1 mb-2" ;
    removebutton.setAttribute(`data-mdb-toggle`,`tooltip`);
    removebutton.title="Remove item";
    removebutton.innerHTML=`<i class="fas fa-trash"></i>`;
    titleDiv.appendChild(removebutton);

    var likebutton=document.createElement("button")
    likebutton.className="btn btn-danger btn-sm mb-2";
    likebutton.setAttribute(`data-mdb-toggle`,`tooltip`);
    likebutton.title="Move to the wish list";
    likebutton.innerHTML=`<i class="fas fa-heart"></i>`
    titleDiv.appendChild(likebutton)








    row.appendChild(imageColDiv);
    row.appendChild(titleDiv);

    cartItems.appendChild(row);
}

createCartItems();

