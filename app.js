var projects = {
    name: [
        "Bamazon", "Budget Tracker", "Burger App","Crystal Game", "Friend Finder", "Giphy",
        "Hangman", "Liri", "Node Word Guess", "Psychic", "Round Me", "Star Wars RPG",
        "Train Schedule", "Comic Trivia", "Two Player RPS", "Toronto Star Sports"
    ],
    website: ["https://volouis.github.io/bamazon/",
        "https://cryptic-badlands-31521.herokuapp.com/",
        "https://github.com/volouis/burger",
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
        "https://volouis.github.io/RPSTwoPlayers/",
        "https://volouis.github.io/RPSTwoPlayers/",
        "https://github.com/volouis/mongoCheerio"
    ],
    img: [
        "Bamazon", "Budget", "Burger","Crystal", "FriendFinder", "Giphy",
    "Hangman", "Liri", "node_wordGuess", "Psychic", "RoundMe", "StarWars",
    "TrainSchedule", "Trivia", "TwoPlayerRPS","TorontoStarSport"
],
    applications: [
        "Javascript, Node.js",
        "Ajax, CSS, HTML, Javascript, JQuery, MySQL, Node.js",
        "HTML, Javascript, JQuery, MySQL, Node.js",
        "CSS, HTML, Javascript",
        "Ajax, Bootstrap, HTML, Javascript, JQuery, Node.js",
        "Ajax, CSS, HTML, Javascript, JQuery",
        "CSS, HTML, Javascript, JQuery",
        "HTML, Javascript, Node.js",
        "Javascript, Node.js",
        "CSS, HTML, Javascript",
        "Ajax, CSS, HTML, Javascript, JQuery",
        "CSS, HTML, Javascript, JQuery",
        "Bootstrap, CSS, Firebase, HTML, Javascript, JQuery",
        "Bootstrap, CSS, HTML, Javascript, JQuery",
        "CSS, Firebase, HTML, Javascript, JQuery",
        "Ajax, Bootstrap, CSS, HTML, Javascript, JQuery, Mongo, Node.js"
    ]

}

$(document).ready(function(){
    $(".proName").hide();


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


$(".projImg").hover(function(){
    console.log($(this).attr("data-val"));
    var val = $(this).attr("data-val");

    $(".pro" + val).fadeTo("slow", .1)
    $(".name" + val).fadeTo("slow", 1)


},function(){
    $(".proImg").fadeTo("slow", 1)
    $(".proName").fadeTo("slow", 0)
});

for(var i = 0; i < projects.name.length; i++){
    var btn = $(`<a href=${projects.website[i]}>`)
    var card = $(`<div class="card">`)
    var img = $(`<div class="img-container">`)
    var content = $(`<div class="content">`)
    var list = $("<ul>")
    
    var pic = $(`<img>`)
    pic.attr("alt", projects.name[i]);
    pic.attr("src", "img/" + projects.img[i] + ".png");
    
    list.append("<li><strong>Name:</strong> " + projects.name[i])
    list.append("<li><strong>Application:</strong> " + projects.applications[i])
    
    content.append(list);
    img.append(pic);
    
    card.append(img);
    card.append(content);

    btn.append(card)
    $(".wrapper").append(btn)
}