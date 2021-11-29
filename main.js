

function start(){
    if(!document.getElementById("pl1").value || !document.getElementById("pl2").value){
        window.alert('Please fill required fields')
    }else{
    pl1name = document.getElementById("pl1").value;
    pl2name = document.getElementById("pl2").value;
    
    localStorage.setItem("Player_1", pl1name);
    localStorage.setItem("Player_2", pl2name);
    window.location = "game_page.html";
    }
}