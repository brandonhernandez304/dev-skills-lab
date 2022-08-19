

$(".button").click(function(){
    const $getInput = $("input").val()
    $("input").val('');
    const $newLi = $(`<li><button class ="remove">X</button>${$getInput}</li>`)
    $("ul").append($newLi);
});

$("#skill-list").on("click", ".remove", function(){
    $(this).closest("li").fadeOut(200, function(){
        $(this).remove('');
    });
});


