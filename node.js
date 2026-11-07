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
const headerButtonFaq = document.querySelector(".button-faq");


let ProductsPrice = Number(ProductsEl.textContent);

let ProductQuantity = Number(QuantityEl.value);



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

if(headerButtonProducts){
    headerButtonProducts.addEventListener("click", ()=>{
        headerButtonProducts.classList.toggle("button-clicked")
        headerButtonGeneral.classList.remove("button-clicked")
        headerButtonFaq.classList.remove("button-clicked")
    })
}

if(headerButtonGeneral){
    headerButtonGeneral.addEventListener("click", ()=>{
        headerButtonGeneral.classList.toggle("button-clicked")
        headerButtonProducts.classList.remove("button-clicked")
        headerButtonFaq.classList.remove("button-clicked")
    })
}

if(headerButtonFaq){
    headerButtonFaq.addEventListener("click", ()=>{
        headerButtonFaq.classList.toggle("button-clicked")
        headerButtonProducts.classList.remove("button-clicked")
        headerButtonGeneral.classList.remove("button-clicked")
    })
}