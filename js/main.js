let acc = document.getElementsByClassName("accordion");
let i;
let more = document.getElementsByClassName('more')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.padding =  "0px 89px 0px 40px";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding =  "20px 89px 37px 40px";
    } 
  });
}