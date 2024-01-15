$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();


        const foodstuff1Input = $("input#foodstuff1").val().toUpperCase();
        const foodstuff2Input = $("input#foodstuff2").val().toUpperCase();
        const foodstuff3Input = $("input#foodstuff3").val().toUpperCase();

       
        $(".container").hide();


    let items = [foodstuff1Input, foodstuff2Input, foodstuff3Input].sort();
    let newItems = [];
    items.forEach(function (element) {
        $("#output").append("<li>" + element + "</li>");
    });

    $("#output").show(newItems);
  });
});