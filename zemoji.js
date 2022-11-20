//let trackImg = "moji1.png";
let swap1 = document.getElementById("pic1");
let swap2 = document.getElementById("pic2");
let btn = document.getElementById("myBtn");
    btn.addEventListener("click", action);
function action() {
   if (swap1.src.endsWith("moji1.jpg") == true) {
    swap1.src = "moji2.jpg";
   } else if 
    (swap1.src.endsWith("moji2.jpg") == true) {
        swap1.src = "moji1.jpg";
   }
   console.log(btn);
}




