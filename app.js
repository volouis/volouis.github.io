var projects = {
    name: ["Bamazon", "Budget Tracker", "Crystal Game", "Friend Finder", "Giphy",
        "Hangman", "Liri", "Node Word Guess", "Psychic", "Round Me", "Star Wars RPG",
        "Train Schedule", "Comic Trivia", "Two Player RPS"],
    website: ["https://volouis.github.io/bamazon/",
        "https://cryptic-badlands-31521.herokuapp.com/",
        "https://volouis.github.io/unit-4-game/",
        "https://floating-lake-72754.herokuapp.com/",
        "https://volouis.github.io/Giphy/",
        "https://volouis.github.io/Word-Guess-Game/",
        "https://github.com/volouis/node_Word_guess",
        "https://volouis.github.io/Psychic-Game/",
        "https://frenzic91.github.io/project-1/",
        "https://volouis.github.io/Star-War-RPG-game/",
        "https://volouis.github.io/TrainScheduler/",
        "https://volouis.github.io/TriviaGame/",
        "https://volouis.github.io/RPSTwoPlayers/"],
    img: ["Bamazon", "Budget", "Crystal", "FriendFinder", "Giphy",
    "Hangman", "Liri", "node_wordGuess", "Psychic", "RoundMe", "StarWars",
    "TrainSchedule", "Trivia", "TwoPlayerRPS"]
}

$(document).ready(function(){
    $(".proName").hide();

    // for(var i = 0; i < projects.name.length; i++){

    //     var proj = $("<div class=proj>");
    //     var btn = $("<a href=" + projects.website[i] + ">");
    //     var btnDo = $ ("<div class=projImg data-val=" + i +">");
    //     btnDo.append("<img class=\"proImg pro1\" src=img/" + projects.img[i] + ".png>");
    //     var hov = $("<div class=\"proName name1\">");
    //     hov.append("<h2 class=\"proWord\">" + projects.name[i]);
    //     hov.append("<h5 class=\"proWord\">View Detail");
    //     btnDo.append(hov);
    //     btn.append(btnDo);
    //     proj.append(btn)
    // }


    $(".projects").append(proj)
    $(".projImg").hover(function(){
        console.log($(this).attr("data-val"));
        var val = $(this).attr("data-val");
    
        $(".pro" + val).fadeTo("slow", .1)
        $(".name" + val).fadeTo("slow", 1)
    
    
    },function(){
        $(".proImg").fadeTo("slow", 1)
        $(".proName").fadeTo("slow", 0)
    });
});


{/* <div class="proj"> 
    <a href="https://volouis.github.io/Psychic-Game/">
        <div class="projImg" data-val="1">
            <img class="proImg pro1" src="img/Psychic.png" alt="...">
            <div class="proName name1">
                <h2 class="proWord">Psychic</h2>
                <h5 class="proWord">View Detail</h5>
            </div>
        </div>
    </a>
</div> */}



$(".projImg").hover(function(){
    console.log($(this).attr("data-val"));
    var val = $(this).attr("data-val");

    $(".pro" + val).fadeTo("slow", .1)
    $(".name" + val).fadeTo("slow", 1)


},function(){
    $(".proImg").fadeTo("slow", 1)
    $(".proName").fadeTo("slow", 0)
});