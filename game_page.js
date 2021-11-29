player1_name = localStorage.getItem("Player_1");
player2_name = localStorage.getItem("Player_2");

var timer;

var timerno;

player1_score = 0;
player2_score = 0;

sign = ["+", "X", "-", "÷"];
sign_no = Math.floor(Math.random() * 4);

document.getElementById("player1_name").innerHTML = player1_name + " :";
document.getElementById("player2_name").innerHTML = player2_name + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send() {
    if(!document.getElementById("number_1").value || !document.getElementById("number_2").value || !document.getElementById("time_given").value){
        window.alert('please fill required fields')
    }else{
        timeGiven = document.getElementById("time_given").value;
        timeSet = document.getElementById("time_given").value;
        if(timeGiven <=20 && timeGiven >= 10){
        time1 = timeSet + "000";
        real_sign = sign[sign_no];
        number1 = document.getElementById("number_1").value;
        number2 = document.getElementById("number_2").value;
        actual_answer = parseInt(number1) + real_sign + parseInt(number2);
        question_word = "<h5>" + number1 + real_sign + number2 + "</h5>";
        input_box = "<br>Answer : <input type='text' id='input_check_box'>";
        check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
        row = question_word + input_box + check_button;
        document.getElementById("output").innerHTML =row + "<h5 id ='timer-2'>0</h5>";
        document.getElementById("number_1").value = "";
        document.getElementById("number_2").value = "";
        document.getElementById("time_given").value = "";
        timer = setInterval(checkTime, time1);
        }else{
        window.alert("Time Exceeds the limit");
        }
        
    }
}

question_turn = "player1";
Answer_turn = "player2";

function check() {
    sign = ["+", "X", "-", "÷"];
    sign_no = Math.floor(Math.random() * 4);
    get_answer = document.getElementById("input_check_box").value;
    clearInterval(timer)
    answer = get_answer;
    if(answer == actual_answer){
        if(Answer_turn == "player1"){
            player1_score = player1_score + 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            update_score();
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else{
        if(Answer_turn == "player1"){
            player1_score = player1_score + 1;
            player2_score = player2_score - 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else{
            player1_score = player1_score - 1;
            player2_score = player2_score + 1;
            update_score();
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - "+ player1_name;
    }

    if(Answer_turn == "player1"){
        Answer_turn = "player2";
        document.getElementById("player_answer").innerHTML =  "Answer Turn - "+ player2_name;
    }
    else{
        Answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - "+ player1_name;
    }
    document.getElementById("output").innerHTML = "";
}
function update_score() {
    localStorage.setItem("player1_score",player1_score);
    localStorage.setItem("player2_score",player2_score);
}

function checkTime(){
    if(!timeGiven){
            window.alert("Time Not Given")
            document.getElementById("output").innerHTML = " ";
            clearInterval(Timer)
    }else{
        if(no = time_given){
            window.alert("Time Over! Better luck next time");
            sign = ["+", "X", "-", "÷"];
            sign_no = Math.floor(Math.random() * 4);
            no = 0;
            clearInterval(timer);
            document.getElementById("output").innerHTML = " ";
            if(Answer_turn == "player1"){
                player1_score = player1_score - 1;
                player2_score = player2_score + 1;
                update_score();
                document.getElementById("player1_score").innerHTML = player1_score;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
            else{
                player1_score = player1_score + 1;
                player2_score = player2_score - 1;
                update_score();
                document.getElementById("player1_score").innerHTML = player1_score;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
        }
    }
}