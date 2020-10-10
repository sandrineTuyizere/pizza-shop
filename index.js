$(document).ready(function() {
    $(".contacts").hide();
    $(".delivery").hide();
});


function runCode(){

    if (handlePrice()>0){
        alert("The total price to pay is "+handlePrice()+" Rwf")
        $("#delivery").show();
        $("#order").hide();
        $(".menu").hide();

        document.querySelector('#delivery').scrollIntoView({
            behavior: 'smooth' 
        });
    }
    
    function handlePrice(){
        var a = document.getElementById("pizzaSize");
        var pizzaSize = a.options[a.selectedIndex].value;

        var b = document.getElementById("crustKind");
        var crustKind = b.options[b.selectedIndex].value;

        var c  = document.getElementById("toppings");
        var toppingType = c.options[c.selectedIndex].value;


        var price = 0;
            if(pizzaSize === "small"){
                price += 2000;
            }
            else if (pizzaSize === "medium"){
                price += 3000;
            }
            else if(pizzaSize === "large"){
                price += 5000;
            }
    
    
            if(crustKind === "crispy"){
                price += 1000;
            }
            else if (crustKind === "stuffed"){
                price += 1500;
            }
            else if (crustKind === "gluttenFree"){
                price += 2000;
            }
            else if (crustKind=== "none"){
                price +=0;
            }
            
            if (document.getElementById("mushrooms").checked) {
                price += 1000;
                alert(price);
            }
            
            if (document.getElementById("onions").checked) {
                price += 500;
            }

            if (document.getElementById("pineapple").checked) {
                price += 1000;
            }
            alert(price);
            var numOfPizza = parseInt(document.getElementById("numOfPizza").value);
            var totalPrice = price*numOfPizza;
            return totalPrice;
    }
    
   

}

function getDelivery(){
    $(".delivery").hide();
    $("#contacts").show();

    document.querySelector('#contacts').scrollIntoView({
        behavior: 'smooth' 
    });

}
function generateMessage(){
    var numOfPizza = parseInt(document.getElementById("numOfPizza").value);
    var a = document.getElementById("pizzaSize");
    var pizzaSize = a.options[a.selectedIndex].value;

    var b = document.getElementById("crustKind");
    var crustKind = b.options[b.selectedIndex].value;

    var c  = document.getElementById("toppings");
    var toppingType = c.options[c.selectedIndex].value;
    var message = "You ordered "+numOfPizza+" "+ pizzaSize +" pizza with \n";
    message += "a "+crustKind+" crust"+" and " + toppingType+ " toppings\n";
    message += "\nDo you confirm your order?";
    alert(message);
} 

