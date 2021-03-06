//Scrape buttons
$(".scrape").on("click", function () {
    $.ajax({
        method: "GET",
        url: "/scrape"
    }).done(function (data) {
        console.log(data)
        window.location = "/unsaved"
    })
});

$(".empty").on("click", function () {
    $.ajax({
        method: "GET",
        url: "/empty"
    }).done(function (data) {
        console.log(data)
        window.location = "/unsaved"
    })
});

//Set clicked nav option to active
$("#leftMenu a").click(function () {
    //$("#leftMenu a").removeClass("active");
    $(this).addClass("active");
});

//Article button
$(".save").on("click", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/save/" + thisId
    }).done(function (data) {
        window.location = "/saved"
    })
});

//Article button
$(".delete").on("click", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + thisId
    }).done(function (data) {
        window.location = "/saved"
    })
});


// Notes Buttons
//Save Note button
$(".saveNote").on("click", function () {
    var thisId = $(this).attr("data-id");
    if (!$("#noteText" + thisId).val()) {
        alert("please enter a comment to save")
    } else {
        $.ajax({
            method: "POST",
            url: "/notes/save/" + thisId,
            data: {
                text: $("#noteText" + thisId).val()
            }
        }).done(function (data) {
            // Log the response
            console.log(data);
            // Empty the notes section
            $("#noteText" + thisId).val("");
            $(".modalNote").modal("hide");
            window.location = "/saved"
        });
    }
});

//Delete Note button
$(".deleteNote").on("click", function () {
    var noteId = $(this).attr("data-note-id");
    var articleId = $(this).attr("data-article-id");
    $.ajax({
        method: "DELETE",
        url: "/notes/delete/" + noteId + "/" + articleId
    }).done(function (data) {
        console.log(data)
        $(".modalNote").modal("hide");
        window.location = "/saved"
    })
});