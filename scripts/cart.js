let arr = JSON.parse(localStorage.getItem("cart_items")) || []

let total = arr.reduce(function (sum, { price }) {
    return sum + Number(price)
}, 0)


arr.map(function (el, index) {
    var div = document.createElement("div");
    let ITMIMG = document.createElement("img");
    ITMIMG.src = el.image

    let ITMname = document.createElement("p");
    ITMname.innerText = el.name

    let ITMprice = document.createElement("p");
    ITMprice.innerText = el.price

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove"
    removeBtn.setAttribute("class", "remove")
    removeBtn.addEventListener("click", function () {
        remove(el, index)
    })
    div.append(ITMIMG, ITMname, ITMprice, removeBtn)
    document.getElementById("cart").append(div)

})
let wallet = document.getElementById("wallet")


function remove(el, index) {
    arr.splice(index, 1)
    localStorage.setItem("cart_items", JSON.stringify(arr))

    window.location.reload();
}

function totalSum(total) {
    let totalsum = document.getElementById("cart_total");
    totalsum.innerHTML = total
    console.log(total)
}
totalSum(total)