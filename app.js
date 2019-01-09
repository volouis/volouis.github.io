var projects = {
    name: [
        "Memory Game", "Toronto Star Sports", "New York Time Scrapper","Round Me", "Budget Tracker", "Burger App","Crystal Game", 
        "Friend Finder", "Giphy", "Hangman", "Liri", "Node Word Guess", "Psychic", "Star Wars RPG",
        "Train Schedule", "Comic Trivia", "Two Player RPS", "Bamazon",
    ],
    website: [
        "https://volouis.github.io/memoryReact/",
        "https://calm-sands-17783.herokuapp.com/",
        "https://serene-crag-39069.herokuapp.com/",
        "https://frenzic91.github.io/project-1/",
        "https://cryptic-badlands-31521.herokuapp.com/",
        "https://github.com/volouis/burger",
        "https://volouis.github.io/unit-4-game/",
        "https://floating-lake-72754.herokuapp.com/",
        "https://volouis.github.io/Giphy/",
        "https://volouis.github.io/Word-Guess-Game/",
        "https://volouis.github.io/liri-node-app/",
        "https://github.com/volouis/node_Word_guess",
        "https://volouis.github.io/Psychic-Game/",
        "https://volouis.github.io/Star-War-RPG-game/",
        "https://volouis.github.io/TrainScheduler/",
        "https://volouis.github.io/TriviaGame/",
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
        "Ajax, Bootstrap, CSS, HTML, Javascript, Mongo, Node.js, React",
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
    ],
    code: [
        "https://github.com/volouis/memoryReact",
        "https://github.com/volouis/mongoCheerio",
        "https://github.com/volouis/NYTimesReact",
        "https://github.com/Frenzic91/project-1",
        "https://github.com/volouis/burger",
        "https://github.com/volouis/unit-4-game",
        "https://github.com/volouis/Friend-Finder",
        "https://github.com/volouis/Giphy",
        "https://github.com/volouis/Word-Guess-Game",
        "https://github.com/volouis/liri-node-app",
        "https://github.com/volouis/node_Word_guess",
        "https://github.com/volouis/Psychic-Game",
        "https://github.com/volouis/Star-War-RPG-game",
        "https://github.com/volouis/TrainScheduler",
        "https://github.com/volouis/TriviaGame",
        "https://github.com/volouis/RPSTwoPlayers",
        "https://github.com/volouis/bamazon"
    ]

}

$(document).ready(function(){
    $(".proName").hide();

    $("#contacts").hide();
    $("#resume").hide();
    $(".loldkm").popover()

});

$("#socialBtn").click(function(){
    $("#social").show();
    $("#resume").hide();
    $("#contacts").hide();
})

$("#resumeBtn").click(function(){
    $("#resume").show();
    $("#social").hide();
    $("#contacts").hide();
})

$("#contactsBtn").click(function(){
    console.log("here")
    $("#contacts").show();
    $("#social").hide();
    $("#resume").hide();
})


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

        var card = $(`<button class="cards loldkm" type="button" data-toggle="popover" data-title="${projects.name[i]}" data-placement="right" data-html='true' data-content="${popUp(i)}">`)
        var img = $(`<div class="img-containers">`)
        var content = $(`<div class="contents">`)
        var list = $("<ul>")
        
        var pic = $(`<img>`)
        pic.attr("alt", projects.name[i]);
        pic.attr("src", "img/" + projects.img[i] + ".png");
        
        list.append(`<li class="projectName"><strong>${projects.name[i]}</strong>`)
        list.append(`<li class="projectName">${projects.applications[i]}`)
        
        content.append(list);
        img.append(pic);
        
        card.append(img);
        card.append(content);
    
        $(".wrapper").append(card)
    }
}

function popUp(num){
    var info = "something";
    var appLink =   `<div style='margin: auto; width: 97px;'>
                        <a href='${projects.website[num]}'>
                            <button type='button' style='background-color: #f85858; border: 0px' class='btn btn-primary btn-sm projectBtn'>App</button>
                        </a>
                        <a href='${projects.code[num]}>
                            <button type='button' style='background-color: #f85858; border: 0px' class='btn btn-primary btn-sm projectBtn'>Code</button>
                        </a>
                    </div>`;



    return appLink;
    
}

