function addUser()  {
    player1_name = document.getElementById("jugador1_nombre").value;
    player2_name = document.getElementById("jugador2_nombre").value;

    localStorage.setItem("jugador1_nombre", player1_name);
    localStorage.setItem("jugador2_nombre", player2_name);

    window.location = "game_page.html";
}