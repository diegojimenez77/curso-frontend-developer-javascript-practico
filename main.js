const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const productList = [];

productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://media.istockphoto.com/photos/man-watching-tv-lying-on-sofa-legs-on-table-picture-id1331523088?b=1&k=20&m=1331523088&s=170667a&w=0&h=YnmsLqGLdmntesnGiIzBrbhXDxNbHiOzrbudKivWet4=',
});
productList.push({
    name:'Laptop',
    price: 620,
    image: 'https://st2.depositphotos.com/2001403/7288/i/450/depositphotos_72887375-stock-photo-office-desk-with-computer.jpg',
});
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://media.istockphoto.com/photos/man-watching-tv-lying-on-sofa-legs-on-table-picture-id1331523088?b=1&k=20&m=1331523088&s=170667a&w=0&h=YnmsLqGLdmntesnGiIzBrbhXDxNbHiOzrbudKivWet4=',
});
productList.push({
    name:'Laptop',
    price: 620,
    image: 'https://st2.depositphotos.com/2001403/7288/i/450/depositphotos_72887375-stock-photo-office-desk-with-computer.jpg',
});
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://media.istockphoto.com/photos/man-watching-tv-lying-on-sofa-legs-on-table-picture-id1331523088?b=1&k=20&m=1331523088&s=170667a&w=0&h=YnmsLqGLdmntesnGiIzBrbhXDxNbHiOzrbudKivWet4=',
});
productList.push({
    name:'Laptop',
    price: 620,
    image: 'https://st2.depositphotos.com/2001403/7288/i/450/depositphotos_72887375-stock-photo-office-desk-with-computer.jpg',
});
productList.push({
    name:'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name:'Pantalla',
    price: 220,
    image: 'https://media.istockphoto.com/photos/man-watching-tv-lying-on-sofa-legs-on-table-picture-id1331523088?b=1&k=20&m=1331523088&s=170667a&w=0&h=YnmsLqGLdmntesnGiIzBrbhXDxNbHiOzrbudKivWet4=',
});
productList.push({
    name:'Laptop',
    price: 620,
    image: 'https://st2.depositphotos.com/2001403/7288/i/450/depositphotos_72887375-stock-photo-office-desk-with-computer.jpg',
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        //product = {name, price, image} -> product.image
        const productimg = document.createElement('img');
        productimg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productimg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
