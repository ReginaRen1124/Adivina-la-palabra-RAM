player1_name = localStorage.getItem("jugador1_nombre");
player2_name = localStorage.getItem("jugador2_nombre");

player1_score = 0;
player2_score = 0;

document.getElementById("jugador1_nombre").innerHTML = player1_name + " : ";
document.getElementById("jugador2_nombre").innerHTML = player2_name + " : ";

document.getElementById("jugador1_puntaje").innerHTML = player1_score;
document.getElementById("jugador2_puntaje").innerHTML = player2_score;

document.getElementById("jugadorPregunta").innerHTML = "Turno para preguntas " + player1_name;
document.getElementById("jugadorRespuesta").innerHTML = "Turno para Responder: " +player2_name

function send() {
get_word = document.getElementById("palabra").value;
word = get_word.toLowerCase();
console.log("Palabra en minusculas = " + word);

charAt1 = word.charAt(1);
console.log(charAt1);

length_divide_2 = Math.floor(word.length/2);
charAt2 = word.charAt(length_divide_2);
console.log(charAt2);

length_minus_1 = word.length - 1;
charAt3 = word.charAt(length_minus_1);
console.log(charAt3);

remove_charAt1 = word.replace(charAt1, "_");
remove_charAt2 = remove_charAt1.replace(charAt2, "_");
remove_charAt3 = remove_charAt1.replace(charAt3, "_");
console.log(remove_charAt3);

question_word = "<h4 id='word_display'> P. "+remove_charAt3 + "</h4>";
input_box = "<br>Respuesta :  <input type='text' id='input_check_box'>";
check_button = "<br><br> <button class= 'btn btn-info' onclick='check()'>Comprobar</button>";
row = question_word + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("palabra").value = "";
}
question_turn = "jugador1";
answer_turn = "jugador2";

function check() {
    get_answer = document.getElementById
    ("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("respuesta en minusculas - " + answer);
    if(answer == word) {
        if(answer_turn == "jugador1"){
            player1_score = player1_score +1;
            document.getElementById("jugador1_puntaje").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score +1;
            document.getElementById("jugador2_puntaje").innerHTML = player2_score;
        }
    }
    if(question_turn == "jugador1"){
        question_turn = "jugador2"
        document.getElementById("jugadorPregunta").innerHTML = "Turno para preguntar - " + player_name;
    }
    else{
        question_turn = "jugador1"
        document.getElementById("jugadorPregunta").innerHTML = "Turno para preguntar - " + player1_name;
    }
    if(answer_turn == "jugador1"){
        answer_turn = "jugador2"
        document.getElementById("jugadorRespuesta").innerHTML = "Turno para responder - " + player2_name;
    }
    else{
        answer_turn = "jugador1"
        document.getElementById("jugadorRespuesta").innerHTML = "turno para responder - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}