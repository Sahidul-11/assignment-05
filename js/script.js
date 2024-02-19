
let count = 1;
const seats = document.getElementsByClassName("seat");
for(let ticket of seats){

    ticket.addEventListener("click" , function eventHandle(event){
        if(count <= 4){
            document.getElementById('available-seats').innerText = 40 - count;
            document.getElementById("Selected-seat").innerText = count; 
            event.target.classList.add('bg-green-600');
            const container = document.getElementById('container');
            const className = event.target.innerText;
            const numbers = document.getElementById("Number");
            const button = document.getElementById("modal-button");
            numbers.addEventListener("keyup", function(e){
                const value = e.currentTarget.value;
                button.disabled = false;
                if(value ==="" && count > 0){
                    button.disabled = true;
                }
            } )
            const p1 = document.createElement("p");
            p1.innerText = className;
            const p2 = document.createElement("p");
            p2.innerText = "Economy class";
            const p3 = document.createElement("p");
            p3.innerText = '550';
            container.appendChild(p1);
            container.appendChild(p2);
            container.appendChild(p3);
            let totalPrice = count * 550;
            document.getElementById("total-price").innerText = totalPrice;
            document.getElementById("grand-total").innerText = totalPrice;
            const applyId = document.getElementById('apply-field');
            if(count == 4){
                applyId.classList.remove("hidden");
            }
            
            event.target.removeEventListener('click', eventHandle);
            
           count++  
        }
        else{
            alert("You can't select more than 4 seats");
        }

    } ) 
}
const apply = document.getElementById("apply-btn");
apply.addEventListener("click", function applyHandle(event){
    const inputValue = document.getElementById("input-value").value;
    const new15 = document.getElementById("new-15").innerText;
    const couple20 = document.getElementById("couple-20").innerText;
    let totalContainer =   document.getElementById("sd");
    const p1 = document.createElement("p");
          p1.innerText = "Discount price"
    const p2 = document.createElement("p");
    totalContainer.appendChild(p1);
    totalContainer.appendChild(p2);
    let total = 4 * 550;
    if(inputValue === new15){
        p2.innerText = total * 0.15
        total = total - total * 0.15;
        document.getElementById("grand-total").innerText = total;
        event.target.parentNode.parentNode.classList.add("hidden");
    }
    else if(inputValue === couple20){
        p2.innerText = total * 0.20
        total = total - total * 0.20;
        document.getElementById("grand-total").innerText = total;
        event.target.parentNode.parentNode.classList.add("hidden");
    }
    else{
        alert("Invalid Coupon");
    }
})
