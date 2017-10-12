/*
 * Provide your answers here for the jQuery assignment
 * */

//'should hide all the images from the view'
function hideAllImages() {
    $("img").hide();
}
//'should show all the images again'
function showAllImages() {
    $("img").show();
}
//'should change the heading to "The Best Collection"'
function changeHeadingToTheBestCollection() {
    //$("h4").text('The Best Collection');
    $('.container > h4').text("The Best Collection");
}
//'should make the hr (.line) element bolder'
function makeHrLineElementBolder() {
    $('.line').css('border-bottom', '6px solid red');
}
//'should change the background of each product title with a different color'
function changeBackgroundColorOfEachProductTitleWithDifferentColor() {
    $(".thumbnail>h4").css('background-color', () => {
        return 'rgb(' + Math.floor(Math.random() * 255) + ', ' +
            Math.floor(Math.random() * 255) + ', ' +
            Math.floor(Math.random() * 255) + ')';
    });
}
//'should remove the "BUY ITEM" buttons'
function removeBuyItemButtons() {
$('button').remove();
}
//'should remove the last three item from the view'
function removeLastThreeItemsFromView() {
$('.container>.row>div').last().remove();   //$('.row>div>.thumbnail').last().remove();
    $('.container>.row>div').last().remove();
    $('.container>.row>div').last().remove();
//[1,2,3].forEach(()=>$('.container>.row>.div').last().remove());    // zweite losung....    
}
//'should make 10% reduction on all products'
function makeTenPercentPriceReductionOnAllProducts() {
$('.container>.row>div').each(function(index,elm){
    let node=$(elm).find('.price');
    let price=node.text().replace('$','');
    price=parseFloat(price)*(9/10);
    node.text('$'+price);
})
}

//'should rename the product shirt to "Fish-Shirt"'
function renameTheProductShirtToFishShirt() {
 $('#firstProduct').find('h4').text("Fish-Shirt");
}
//'should rename the first rock item to "Bird-Rock"'
function renameTheFirstRockItemToBirdRock() {
$("#secondProduct").find('h4').text('Bird-Rock');
}
//'should add 5 stars to the product shirt'
function addFiveStarsToTheProductShirt() {
$('#firstProduct').find('.ratings').find('span').last().removeClass().addClass('glyphicon glyphicon-star');
}
//'should change the title name with a random name (use alg. for randomly generating chars)'
function changeTheTitleNameWithARandomName() {

}
//'should color the stars of the third product with green'
function colorTheStarsOfTheThirdProductWithGreen() {
$('.row>div>.col-md-3 col-sm-6').find('.ratings').css('color:green');
}
//'should reset the last two images to the url "http://bit.ly/2xq8ev0"'
function resetLastTwoImagesToUrl() {

}
//'should constantly change the price (#changingPrice), increment it by one in each 3 secs.'
function constantlyChangeThePriceAndIncrementItByOneInEachThreeSeconds() {

}
//'should show the "BUY ITEM" again with a green background, gray border and a thin shadow'
function showTheBuyItemAgainWithAGreenBackgroundGrayBorderAndThinShadow() {

}
// 'should add an event handler to the "BUY ITEM" buttons and after a click it should show an alert'
function addAnEventHandlerToTheBuyItemButtonsAndAfterClickShowAlert() {

}
// 'should bring back the initial image again, instead of "http://bit.ly/2xq8ev0"'
function bringBackTheInitialImageAgainInsteadOfUrl() {

}
// 'should change every product desctiption to any text with at least 50 charakters'
function changeEveryProductDescriptionToAnyTextWithAtLeast50Characters() {}
//'should randomly change all of the prices'
function randomlyChangeAllOfThePrices() {}
//'should mark the background with the color yellow of the two cheapest products'
function markTheBackgroundWithTheColorYellowOfTheTwoCheapestProducts() {

}
//'should sort all the products ascendantly based on the the new prices'
function sortAllOfTheProductsAscendantlyBasedOnTheNewPrices() {

}
//'should add an mouse over event only the highest two products which logs in console the price (place on wrapping div)'
function addAnMouseOverEventOnlyTheHighestTwoProductsWhichLogsInConsoleThePrice() {

}
//'should add three new products to the list like the existing one'
function addThreeNewProductsToTheEndOfTheProductList() {

}
