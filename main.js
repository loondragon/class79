beep=["peperoni","cheese","2ndslise meat","three meat","ghost peper"];
function getmenu() {
    var menu;
    menu="<ol class='menulist'>"
    beep.sort();
    for (let i = 0; i < beep.length; i++) {
     menu=menu+"<li>"+beep[i]+"</li>";
        
    }
    menu=menu+"</ol>";
    document.getElementById("display_menu").innerHTML=menu
    
}
function addword() {
    var item=document.getElementById("add_item").value ;
    beep.push(item);
}