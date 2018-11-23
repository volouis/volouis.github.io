var projects = {
    name: [
        "Memory Game", "Toronto Star Sports", "New York Time Scrapper","Round Me", "Budget Tracker", "Burger App","Crystal Game", 
        "Friend Finder", "Giphy", "Hangman", "Liri", "Node Word Guess", "Psychic", "Star Wars RPG",
        "Train Schedule", "Comic Trivia", "Two Player RPS", "Bamazon",
    ],
    website: [
        "https://volouis.github.io/memoryReact/",
        "https://calm-sands-17783.herokuapp.com/",
        "New York Time Scrapper",
        "https://frenzic91.github.io/project-1/",
        "https://cryptic-badlands-31521.herokuapp.com/",
        "https://github.com/volouis/burger",
        "https://volouis.github.io/unit-4-game/",
        "https://floating-lake-72754.herokuapp.com/",
        "https://volouis.github.io/Giphy/",
        "https://volouis.github.io/Word-Guess-Game/",
        "https://github.com/volouis/node_Word_guess",
        "https://volouis.github.io/Psychic-Game/",
        "https://volouis.github.io/Star-War-RPG-game/",
        "https://volouis.github.io/TrainScheduler/",
        "https://volouis.github.io/TriviaGame/",
        "https://volouis.github.io/RPSTwoPlayers/",
        "https://volouis.github.io/RPSTwoPlayers/",
        "https://volouis.github.io/bamazon/",
    ],
    img: [
        "MemoryGame", "TorontoStarSport", 'NYTscrapper', "RoundMe", "Budget", "Burger","Crystal", "FriendFinder", "Giphy",
    "HangMan", "Liri", "node_wordGuess", "Psychic", "StarWars",
    "TrainSchedule", "Trivia", "TwoPlayerRPS", "Bamazon",
],
    applications: [
        "Bootstrap, CSS, HTML, JavaScript, React",
        "Ajax, Bootstrap, CSS, HTML, Javascript, JQuery, Mongo, Node.js",
        "Ajax, Bootstrap, CSS, HTML, Javascript, JQuery, Mongo, Node.js, React",
        "Ajax, CSS, HTML, Javascript, JQuery",
        "Ajax, CSS, HTML, Javascript, JQuery, MySQL, Node.js",
        "HTML, Javascript, JQuery, MySQL, Node.js",
        "CSS, HTML, Javascript",
        "Ajax, Bootstrap, HTML, Javascript, JQuery, Node.js",
        "Ajax, CSS, HTML, Javascript, JQuery",
        "CSS, HTML, Javascript, JQuery",
        "HTML, Javascript, Node.js",
        "Javascript, Node.js",
        "CSS, HTML, Javascript",
        "CSS, HTML, Javascript, JQuery",
        "Bootstrap, CSS, Firebase, HTML, Javascript, JQuery",
        "Bootstrap, CSS, HTML, Javascript, JQuery",
        "CSS, Firebase, HTML, Javascript, JQuery",
        "Javascript, Node.js",
    ]

}

$(document).ready(function(){
    $(".proName").hide();

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

$("#previousBtn").on("click", function(){
    if($(this).attr("data-val") !== "0"){
        $(this).attr("data-val", parseInt($(this).attr("data-val")) - 1)
        $("#nextBtn").attr("data-val", parseInt($("#nextBtn").attr("data-val")) - 1)
    }

    projectsBtn(parseInt($(this).attr("data-val")), parseInt($("#nextBtn").attr("data-val")))
})

$("#nextBtn").on("click", function(){
    if(parseInt($(this).attr("data-val")) * 4 <= projects.name.length){
        $("#previousBtn").attr("data-val", parseInt($("#previousBtn").attr("data-val")) + 1)
        $(this).attr("data-val", parseInt($(this).attr("data-val")) + 1)
    }

    projectsBtn(parseInt($("#previousBtn").attr("data-val")), parseInt($(this).attr("data-val")))

})

projectsBtn(0,1)

function projectsBtn(bot, top){
    top = top * 4
    bot = bot * 4
    $(".wrapper").empty()

    if(top > projects.name.length){
        top = projects.name.length
    }

    for(var i = bot; i < top; i++){
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
}