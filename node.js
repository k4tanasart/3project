const QuantityEl = document.querySelector(".productcheckout__quantity--number")
const QuantityPlus = document.querySelector(".plus--quantity")
const QuantityMinus = document.querySelector(".minus--quantity")
const ProductsEl = document.querySelector(".Products--value")
const ProductSinglePrice = Number(document.querySelector(".productcheckout__single--price").textContent)
const SubtotalEl = document.querySelector(".Subtotal--value")
const VatEl = document.querySelector(".VAT--value")
const TotalEl = document.querySelector(".Total--value")


let ProductsPrice = Number(ProductsEl.textContent);

let ProductQuantity = Number(QuantityEl.textContent);

function setprices() {
    QuantityEl.textContent = ProductQuantity;
    ProductsEl.textContent = ((ProductQuantity * ProductSinglePrice).toFixed(2));
    SubtotalEl.textContent = (Number(ProductsEl.textContent) + 
    Number(document.querySelector(".Finishing--value").textContent) +
    Number(document.querySelector(".Delivery--value").textContent)).toFixed(2);
    VatEl.textContent = (Number(SubtotalEl.textContent) * 0.19).toFixed(2);
    TotalEl.textContent = (Number(SubtotalEl.textContent) + Number(VatEl.textContent)).toFixed(2);

}
setprices()


QuantityPlus.addEventListener("click", function() {
    ProductQuantity += 1;
    setprices()
})

QuantityMinus.addEventListener("click", function(){
    ProductQuantity -= 1;
    setprices()
} )

