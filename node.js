// consts
const QuantityEl = document.querySelector(".productcheckout__quantity--number");
const QuantityPlus = document.querySelector(".plus--quantity");
const QuantityMinus = document.querySelector(".minus--quantity");
const ProductsEl = document.querySelector(".Products--value");
const ProductSinglePrice = Number(document.querySelector(".productcheckout__single--price").textContent);
const SubtotalEl = document.querySelector(".Subtotal--value");
const VatEl = document.querySelector(".VAT--value");
const TotalEl = document.querySelector(".Total--value");
const deleteIcon = document.querySelector(".productcheckout__delete-icon");
const wholeProductCard = document.querySelector(".productcheckout__pic--info");
const productDeliveryValue = document.querySelector(".Delivery--value").textContent;
const productFinishingValue = document.querySelector(".Finishing--value").textContent;
const headerButtonProducts = document.querySelector(".button-products");
const headerButtonGeneral = document.querySelector(".button-general-information");
const headerButtonFaq = document.querySelector(".page-header__navigation-button.button-faq");
const productsMegaMenu = document.querySelector(".products-megamenu");
const productsMegaMenuClothingButton = document.querySelector(".button-clothing");
const productsMegaMenuWaterBottlesButton = document.querySelector(".button-water-bottles");
const productsMegaMenuGlassesButton = document.querySelector(".button-glasses");
const productsMegaMenuStickersButton = document.querySelector('.button-stickers');
const productsMegaMenuAccessoriesButton = document.querySelector(".button-accessories");
const productsMegaMenuAppreciationButton = document.querySelector(".button-appreciation");
const productsMegaMenuBoxesButton = document.querySelector('.button-boxes');
const BurgerMegaMenuButtonMobile = document.querySelector(".button-burger--mob");
const SearchMegaMenuButtonMobile = document.querySelector('.button-search--mob');
const ListMegaMenuButtonMobile = document.querySelector('.button-list--mob');
const CartMegaMenuButtonMobile = document.querySelector('.button-cart--mob');
const BurgerMegaMenuMobile = document.querySelector(".burger-megamenu--mob");
const HeaderLogo = document.querySelector('.page-header__logo');
const CloseMegaMenuButtonMobile = document.querySelector(".button-close--mob");
const AllHeaderButtonsMobile = document.querySelectorAll(".page-header-buttons--mob");
const MediaQueryPhone = window.matchMedia("(max-width: 768px)");
const BurgerMegaMenuClothingButton = document.querySelector(".burger-megamenu__product-row--mobile.row-clothing")
const BurgerMegaMenuClothingMenu = document.querySelector(".burger-megamenu__clothing-menu--mob")
const BurgerMegaMenuClothingRow = document.querySelector(".burger-megamenu__product-row--mobile.row-clothing")


// consts
function ChangeScreenWidth(event) {
    console.log(event)
    if (event.matches) {
        AllHeaderButtonsMobile.forEach(item => {
            item.classList.remove("hidden")
        }) 
        productsMegaMenu.classList.add("hidden")
        headerButtonProducts.classList.remove("button-clicked")
    }
    else
        AllHeaderButtonsMobile.forEach(item => {
            item.classList.add("hidden")
            CloseMegaMenuButtonMobile.classList.add("hidden")
            BurgerMegaMenuMobile.classList.add("hidden")
            productsMegaMenu.classList.add("hidden")
            headerButtonProducts.classList.remove("button-clicked")
        })
}
ChangeScreenWidth(MediaQueryPhone)
MediaQueryPhone.addEventListener('change', ChangeScreenWidth);

console.log(AllHeaderButtonsMobile)

let ProductsPrice = Number(ProductsEl.textContent);

let ProductQuantity = Number(QuantityEl.value);


// prices, quantity, checkout
function setprices() {
    QuantityEl.value = ProductQuantity;
    let productsElementSum = ((ProductQuantity * ProductSinglePrice).toFixed(2));
    ProductsEl.textContent = productsElementSum + "€";
    let subtotalElementSum = (Number(productsElementSum) + 
    Number(productFinishingValue) +
    Number(productDeliveryValue)).toFixed(2);
    SubtotalEl.textContent = subtotalElementSum + "€";
    let vatElementSum = (Number(subtotalElementSum) * 0.19).toFixed(2);
    VatEl.textContent = vatElementSum + "€";
    TotalEl.textContent = (Number(subtotalElementSum) + Number(vatElementSum)).toFixed(2) + "€";
    document.querySelector(".productcheckout__single--price").textContent = ProductSinglePrice + "€";
    document.querySelector(".Delivery--value").textContent = productDeliveryValue + "€";
    document.querySelector(".Finishing--value").textContent = productFinishingValue + "€"
}
setprices()
    

QuantityEl.addEventListener("input", ()=>{
    ProductQuantity = Number(QuantityEl.value)
    setprices()
})

QuantityPlus.addEventListener("click", function() {
    ProductQuantity += 1;
    if(ProductQuantity > 99 )
        ProductQuantity = 99;
    setprices()
})

QuantityMinus.addEventListener("click", function(){
    ProductQuantity -= 1;
    if(ProductQuantity < 0 )
        ProductQuantity = 0;
    setprices()
} )

if (deleteIcon){
    deleteIcon.addEventListener("click", ()=>{
        wholeProductCard.outerHTML = "";
        ProductQuantity = 0;
        setprices()
    })
}

// prices, quantity, checkout
// button header transformation 

if(headerButtonProducts && productsMegaMenu){
    headerButtonProducts.addEventListener("click", ()=>{
        headerButtonProducts.classList.toggle("button-clicked");
        productsMegaMenu.classList.toggle("hidden");
        if(headerButtonGeneral.classList.contains("button-clicked"))
            headerButtonGeneral.classList.remove("button-clicked")
        if(headerButtonFaq.classList.contains("button-clicked"))
            headerButtonFaq.classList.remove("button-clicked")
        
    })
}


function closeButtonMegamenuProducts (){
    productsMegaMenu.classList.add("hidden");
    headerButtonProducts.classList.remove("button-clicked")
}

document.addEventListener("click", (event)=>{
    if (!productsMegaMenu.contains(event.target) && !headerButtonProducts.contains(event.target) && !productsMegaMenu.classList.contains("hidden") )                  
        closeButtonMegamenuProducts()              
})    

document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape" && !productsMegaMenu.classList.contains("hidden") )                   
        closeButtonMegamenuProducts()           
})  




if(headerButtonGeneral){
    headerButtonGeneral.addEventListener("click", ()    =>{
        headerButtonGeneral.classList.toggle("button-clicked");
        if(headerButtonProducts.classList.contains("button-clicked"))
            headerButtonProducts.classList.remove("button-clicked");
            productsMegaMenu.classList.add("hidden")
        if(headerButtonFaq.classList.contains("button-clicked"))
            headerButtonFaq.classList.remove("button-clicked")
    })
}
document.addEventListener("click", (event)=>{
    if(!headerButtonGeneral.contains(event.target) && headerButtonGeneral.classList.contains("button-clicked"))
        headerButtonGeneral.classList.remove("button-clicked")
})
document.addEventListener("keydown", (event)=>{
    if (event.key === "Escape" && headerButtonGeneral.classList.contains("button-clicked"))
        headerButtonGeneral.classList.remove("button-clicked")
})

// button header transformation 
// inside megamenu buttons 

if(productsMegaMenuClothingButton){
    productsMegaMenuClothingButton.addEventListener("click", ()=>{
        productsMegaMenuClothingButton.classList.add("button-clicked");
        if(productsMegaMenuWaterBottlesButton.classList.contains("button-clicked"))
            productsMegaMenuWaterBottlesButton.classList.remove("button-clicked")
        if(productsMegaMenuGlassesButton.classList.contains("button-clicked"))
            productsMegaMenuGlassesButton.classList.remove("button-clicked")
        if(productsMegaMenuStickersButton.classList.contains("button-clicked"))
            productsMegaMenuStickersButton.classList.remove("button-clicked")
        if(productsMegaMenuAccessoriesButton.classList.contains("button-clicked"))
            productsMegaMenuAccessoriesButton.classList.remove("button-clicked")
        if(productsMegaMenuAppreciationButton.classList.contains("button-clicked"))
            productsMegaMenuAppreciationButton.classList.remove("button-clicked")
        if(productsMegaMenuBoxesButton.classList.contains("button-clicked"))
            productsMegaMenuBoxesButton.classList.remove("button-clicked")
    })
}
if(productsMegaMenuWaterBottlesButton){
    productsMegaMenuWaterBottlesButton.addEventListener("click", ()=>{
        productsMegaMenuWaterBottlesButton.classList.add("button-clicked");
        if(productsMegaMenuClothingButton.classList.contains("button-clicked"))
            productsMegaMenuClothingButton.classList.remove("button-clicked")
        if(productsMegaMenuGlassesButton.classList.contains("button-clicked"))
            productsMegaMenuGlassesButton.classList.remove("button-clicked")
        if(productsMegaMenuStickersButton.classList.contains("button-clicked"))
            productsMegaMenuStickersButton.classList.remove("button-clicked")
        if(productsMegaMenuAccessoriesButton.classList.contains("button-clicked"))
            productsMegaMenuAccessoriesButton.classList.remove("button-clicked")
        if(productsMegaMenuAppreciationButton.classList.contains("button-clicked"))
            productsMegaMenuAppreciationButton.classList.remove("button-clicked")
        if(productsMegaMenuBoxesButton.classList.contains("button-clicked"))
            productsMegaMenuBoxesButton.classList.remove("button-clicked")
    })
}
if(productsMegaMenuGlassesButton){
    productsMegaMenuGlassesButton.addEventListener("click", ()=>{
        productsMegaMenuGlassesButton.classList.add("button-clicked");
        if(productsMegaMenuClothingButton.classList.contains("button-clicked"))
            productsMegaMenuClothingButton.classList.remove("button-clicked")
        if(productsMegaMenuWaterBottlesButton.classList.contains("button-clicked"))
            productsMegaMenuWaterBottlesButton.classList.remove("button-clicked")
        if(productsMegaMenuStickersButton.classList.contains("button-clicked"))
            productsMegaMenuStickersButton.classList.remove("button-clicked")
        if(productsMegaMenuAccessoriesButton.classList.contains("button-clicked"))
            productsMegaMenuAccessoriesButton.classList.remove("button-clicked")
        if(productsMegaMenuAppreciationButton.classList.contains("button-clicked"))
            productsMegaMenuAppreciationButton.classList.remove("button-clicked")
        if(productsMegaMenuBoxesButton.classList.contains("button-clicked"))
            productsMegaMenuBoxesButton.classList.remove("button-clicked")
    })
}
if(productsMegaMenuStickersButton){
    productsMegaMenuStickersButton.addEventListener("click", ()=>{
        productsMegaMenuStickersButton.classList.add("button-clicked");
        if(productsMegaMenuClothingButton.classList.contains("button-clicked"))
            productsMegaMenuClothingButton.classList.remove("button-clicked")
        if(productsMegaMenuWaterBottlesButton.classList.contains("button-clicked"))
            productsMegaMenuWaterBottlesButton.classList.remove("button-clicked")
        if(productsMegaMenuGlassesButton.classList.contains("button-clicked"))
            productsMegaMenuGlassesButton.classList.remove("button-clicked")
        if(productsMegaMenuAccessoriesButton.classList.contains("button-clicked"))
            productsMegaMenuAccessoriesButton.classList.remove("button-clicked")
        if(productsMegaMenuAppreciationButton.classList.contains("button-clicked"))
            productsMegaMenuAppreciationButton.classList.remove("button-clicked")
        if(productsMegaMenuBoxesButton.classList.contains("button-clicked"))
            productsMegaMenuBoxesButton.classList.remove("button-clicked")
    })
}
if(productsMegaMenuAccessoriesButton){
    productsMegaMenuAccessoriesButton.addEventListener("click", ()=>{
        productsMegaMenuAccessoriesButton.classList.add("button-clicked");
        if(productsMegaMenuClothingButton.classList.contains("button-clicked"))
            productsMegaMenuClothingButton.classList.remove("button-clicked")
        if(productsMegaMenuWaterBottlesButton.classList.contains("button-clicked"))
            productsMegaMenuWaterBottlesButton.classList.remove("button-clicked")
        if(productsMegaMenuGlassesButton.classList.contains("button-clicked"))
            productsMegaMenuGlassesButton.classList.remove("button-clicked")
        if(productsMegaMenuStickersButton.classList.contains("button-clicked"))
            productsMegaMenuStickersButton.classList.remove("button-clicked")
        if(productsMegaMenuAppreciationButton.classList.contains("button-clicked"))
            productsMegaMenuAppreciationButton.classList.remove("button-clicked")
        if(productsMegaMenuBoxesButton.classList.contains("button-clicked"))
            productsMegaMenuBoxesButton.classList.remove("button-clicked")
    })
}
if(productsMegaMenuAppreciationButton){
    productsMegaMenuAppreciationButton.addEventListener("click", ()=>{
        productsMegaMenuAppreciationButton.classList.add("button-clicked");
        if(productsMegaMenuClothingButton.classList.contains("button-clicked"))
            productsMegaMenuClothingButton.classList.remove("button-clicked")
        if(productsMegaMenuWaterBottlesButton.classList.contains("button-clicked"))
            productsMegaMenuWaterBottlesButton.classList.remove("button-clicked")
        if(productsMegaMenuGlassesButton.classList.contains("button-clicked"))
            productsMegaMenuGlassesButton.classList.remove("button-clicked")
        if(productsMegaMenuStickersButton.classList.contains("button-clicked"))
            productsMegaMenuStickersButton.classList.remove("button-clicked")
        if(productsMegaMenuAccessoriesButton.classList.contains("button-clicked"))
            productsMegaMenuAccessoriesButton.classList.remove("button-clicked")
        if(productsMegaMenuBoxesButton.classList.contains("button-clicked"))
            productsMegaMenuBoxesButton.classList.remove("button-clicked")
    })
}
if(productsMegaMenuBoxesButton){
    productsMegaMenuBoxesButton.addEventListener("click", ()=>{
        productsMegaMenuBoxesButton.classList.add("button-clicked");
        if(productsMegaMenuClothingButton.classList.contains("button-clicked"))
            productsMegaMenuClothingButton.classList.remove("button-clicked")
        if(productsMegaMenuWaterBottlesButton.classList.contains("button-clicked"))
            productsMegaMenuWaterBottlesButton.classList.remove("button-clicked")
        if(productsMegaMenuGlassesButton.classList.contains("button-clicked"))
            productsMegaMenuGlassesButton.classList.remove("button-clicked")
        if(productsMegaMenuStickersButton.classList.contains("button-clicked"))
            productsMegaMenuStickersButton.classList.remove("button-clicked")
        if(productsMegaMenuAccessoriesButton.classList.contains("button-clicked"))
            productsMegaMenuAccessoriesButton.classList.remove("button-clicked")
        if(productsMegaMenuAppreciationButton.classList.contains("button-clicked"))
            productsMegaMenuAppreciationButton.classList.remove("button-clicked")
    })
}

// inside megamenu buttons

if(BurgerMegaMenuButtonMobile){
    BurgerMegaMenuButtonMobile.addEventListener("click", ()=>{
        BurgerMegaMenuMobile.classList.remove("hidden");
        HeaderLogo.classList.add("logo-left");
        CloseMegaMenuButtonMobile.classList.remove("hidden");
        AllHeaderButtonsMobile.forEach(item => {
            item.classList.add("hidden")
        })
    })
}

if(CloseMegaMenuButtonMobile){
    CloseMegaMenuButtonMobile.addEventListener("click", ()=>{
        BurgerMegaMenuMobile.classList.add("hidden");
        HeaderLogo.classList.remove("logo-left");
        CloseMegaMenuButtonMobile.classList.add("hidden");
        AllHeaderButtonsMobile.forEach(item => {
            item.classList.remove("hidden")
        })
    })
}

if(BurgerMegaMenuClothingButton){
    BurgerMegaMenuClothingButton.addEventListener("click", ()=>{
        BurgerMegaMenuClothingMenu.classList.toggle("hidden")
        BurgerMegaMenuClothingRow.classList.toggle("row-opened")
    })
}