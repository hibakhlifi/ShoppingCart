// Like Product
let hearts = document.querySelectorAll(".fa-heart");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    
    if (heart.style.color === "grey") {
      heart.style.color = "red";
    } else {
      heart.style.color = "grey";
    }
  });
}


//Plus Quantity
let buttonsplus = Array.from(document.getElementsByClassName("plus"));
for (let btnplus of buttonsplus) {
  btnplus.addEventListener("click", function () {
    btnplus.nextElementSibling.innerHTML++;
    sum();
  });
}


//delete Quantity
let buttonsmin = Array.from(document.getElementsByClassName("min"));

for (let btnmin of buttonsmin) {
  btnmin.addEventListener("click", function () {
    if (btnmin.previousElementSibling.innerHTML > 0) {
      btnmin.previousElementSibling.innerHTML--;
      sum();
    }
  });
}


// Calculate Sum
function sum() {
  let qte = document.querySelectorAll(".qte");
  let price = document.querySelectorAll(".price");

  let sum = 0;

  for (let i = 0; i < qte.length; i++) {
    sum += qte[i].innerHTML * price[i].innerHTML;
  }
  // console.log(sum);
  document.getElementById("totalp").innerHTML = "Shopping Bag total : $" + sum;
}


// Delete
let buttonsdelete = document.getElementsByClassName("fa-trash-alt");

for (let btndelete of buttonsdelete) {
  btndelete.addEventListener("click", function () {
    btndelete.parentNode.remove();
    sum();
  });
}




