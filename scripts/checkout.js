document.querySelector("form").addEventListener("submit", checkOutFun);

function checkOutFun() {
    event.preventDefault();
    // document.querySelector("user_name").value = ""
    // document.querySelector("user_number").value = ""
    // document.querySelector("user_address").value = ""

    setTimeout(function () {

        alert("Your order is confirmed")
    }, 0)

    setTimeout(function () {

        alert("Your order is being Packed")
    }, 3000)

    setTimeout(function () {

        alert("Your order is in transit")
    }, 8000)

    setTimeout(function () {

        alert("Your order is out for delivery")
    }, 10000)

    setTimeout(function () {

        alert("Order delivered")
    }, 12000)


}
