
let count = 1;
const seats = document.getElementsByClassName("seat");
      console.log(seats);
for(let ticket of seats){

    ticket.addEventListener("click" , function eventHandle(event){
        if(count <= 4){
            document.getElementById('available-seats').innerText = 40 - count;
            document.getElementById("Selected-seat").innerText = count; 
            console.log(event.target.innerText);
            event.target.classList.add('bg-green-600');
            event.target.removeEventListener('click', eventHandle);
            
           count++  
        }
        else{
            alert("You can't select more than 4 seats");
        }

    } ) 
}
