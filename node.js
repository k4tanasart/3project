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


let ProductsPrice = Number(ProductsEl.textContent);

let ProductQuantity = Number(QuantityEl.value);

function setprices() {
    QuantityEl.value = ProductQuantity;
    ProductsEl.textContent = ((ProductQuantity * ProductSinglePrice).toFixed(2));
    SubtotalEl.textContent = (Number(ProductsEl.textContent) + 
    Number(document.querySelector(".Finishing--value").textContent) +
    Number(document.querySelector(".Delivery--value").textContent)).toFixed(2);
    VatEl.textContent = (Number(SubtotalEl.textContent) * 0.19).toFixed(2);
    TotalEl.textContent = (Number(SubtotalEl.textContent) + Number(VatEl.textContent)).toFixed(2);

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