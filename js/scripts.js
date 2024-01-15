$(document).ready(function (){
    $("#form").submit(function (event){
        event.preventDefault();
    
    const foodstuff1Input =$("input#foodstuff1").val();
    const foodstuff2Input =$("input#foodstuff2").val();
    const foodstuff3Input =$("input#foodstuff3").val();

    $(".foodstuff1").text(foodstuff1Input);
    $(".foodstuff2").text(foodstuff2Input);
    $(".foodstuff3").text(foodstuff3Input);

    const items = [foodstuff1Input, foodstuff2Input, foodstuff3Input];
      items = items.sort();
      const newItems = items.toUpperCase();

   
}); 
});