let groceries = document.getElementById("groceries");

groceries.innerHTML = ""
const url = `https://grocery-masai.herokuapp.com/items`


async function getData() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        appendData(data.data)
    }
    catch (err) {
        console.log("err")
    }

}
getData()

let wallet = document.getElementById("wallet")
wallet.innerText = 700



let arr = JSON.parse(localStorage.getItem("cart_items")) || [];

function appendData(data) {
    data.map(function (el) {
        var div = document.createElement("div")
        div.setAttribute("class", "item")
        let itemImg = document.createElement("img");
        itemImg.src = el.image
        let title = document.createElement("p");
        title.innerText = el.name
        let price = document.createElement("p");
        price.innerText = el.price
        let button = document.createElement("button");
        button.setAttribute("class", "add_to_cart")
        button.innerText = "Add to Cart"
        button.addEventListener("click", function () {
            addToCart(el, price, wallet)
        })
        //cart function


        div.append(itemImg, title, price, button)
        groceries.append(div)
        localStorage.setItem("arr", JSON.stringify(data.data))
    })

    function addToCart(el, price, wallet) {
        let fakeprice = Number(wallet.innerText) - el.price
        let NewPrice = Number(wallet.innerText) - el.price
        wallet.innerText = NewPrice
        if (NewPrice < 0) {
            alert("Insufficient balance")
            wallet.innerText = NewPrice
        }

        console.log(wallet.innerText)
        arr.push(el)
        localStorage.setItem("cart_items", JSON.stringify(arr))

        // console.log("El", el)
        // let cart_items = JSON.parse(localStorage.getItem("cart_items"))
        // cart_items.push(el)
        // console.log(cart_items)
        // localStorage.setItem("cart_items", JSON.stringify(cart_items));

    }
}