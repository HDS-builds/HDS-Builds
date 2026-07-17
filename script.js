window.addEventListener("load",()=>{

document.querySelector(".loader").style.display="none";

});

function openPopup(){
document.getElementById("popup").style.display="flex";
}

function submitRequest(){

let email=document.getElementById("customerEmail").value;

if(email==""){
alert("Please enter your email.");
return;
}

alert("Thank you!\n\nThe moderator will contact you soon.");

document.getElementById("popup").style.display="none";

document.getElementById("pcForm").reset();

}
<script>
function openCheckout(){
document.getElementById("checkout").style.display="block";
}

function closeCheckout(){
document.getElementById("checkout").style.display="none";
}
</script>