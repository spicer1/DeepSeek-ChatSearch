javascript:(function(){

if(document.getElementById("__chatSearchUI")) return;

var style=document.createElement("style");
style.innerHTML=`
#__chatSearchUI{
  position:fixed;
  top:20px;
  left:50%;
  transform:translateX(-50%);
  z-index:99999;
  background:#111;
  padding:10px 15px;
  border-radius:8px;
  box-shadow:0 4px 15px rgba(0,0,0,0.4);
  font-family:sans-serif;
}
#__chatSearchUI input{
  width:300px;
  padding:6px 10px;
  border-radius:6px;
  border:none;
  outline:none;
}
.__chatHidden{
  display:none !important;
}
.__chatHighlight{
  background:yellow !important;
}
`;
document.head.appendChild(style);

var ui=document.createElement("div");
ui.id="__chatSearchUI";
ui.innerHTML=`<input type="text" placeholder="Cerca chat..." autofocus>`;
document.body.appendChild(ui);

var input=ui.querySelector("input");
var chats=document.querySelectorAll('a[href^="/a"]');

function clearHighlights(el){
  el.classList.remove("__chatHighlight");
}

function search(){
  var q=input.value.trim().toLowerCase();

  chats.forEach(a=>{
    clearHighlights(a);
    a.classList.remove("__chatHidden");

    if(!q) return;

    var text=a.innerText.toLowerCase();
    if(text.indexOf(q)===-1){
      a.classList.add("__chatHidden");
    } else {
      a.classList.add("__chatHighlight");
    }
  });
}

input.addEventListener("input",search);

input.addEventListener("keydown",function(e){
  if(e.key==="Escape"){
    ui.remove();
    chats.forEach(a=>{
      a.classList.remove("__chatHidden");
      a.classList.remove("__chatHighlight");
    });
  }
});

})();
