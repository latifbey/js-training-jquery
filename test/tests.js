//simulates synchronous waiting
function pause(milliseconds) {
    let dt = new Date();
    while ((new Date()) - dt <= milliseconds) { /* Do nothing */ }
}

//Testler birbiriyle alakalidir, isole degildir! Bu dosyada hicbisey degistirmenize gerek yok.
describe("Test Suite jQuery", ()=>{

    it('should hide all the images from the view', () => {
       hideAllImages();
       let imgCount = $("img").length;
       imgCount.should.equal(0);
    });

    it('should show all the images again', () => {
        showAllImages();
        let imgCount = $("img").length;
        imgCount.should.equal(8);
    });

    it('should change the heading to "The Best Collection"', () => {
        changeHeadingToTheBestCollection();
        let headingNew = $(".container").children().first().text();
        headingNew.should.equal("The Best Collection");
    });

    it('should make the hr (.line) element bolder', () => {
        let hrLine = $("hr.line");
        let boldnessHrLineBefore = hrLine.first().css("border-width");
        makeHrLineElementBolder();
        let boldnessHrLineAfter = hrLine.first().css("border-width");
        boldnessHrLineAfter.should.be.above(boldnessHrLineBefore);
    });

    it('should change the background of each product title with a different color', () => {
        changeBackgroundColorOfEachProductTitleWithDifferentColor();
        let productTitles = $("span.thumbnail").find("h4");
        let mappedColors = productTitles.map((index, tag)=>{
            return $(tag).css("background-color");
        }).toArray();

        let mapOfColors = mappedColors.reduce((acc,value)=>{
            if(!acc.has(value)){
                return acc.set(value,0);
            }else{
                return acc.set(value,acc.get(value) + 1);
            }
        },new Map());
        mapOfColors.size.should.equal(productTitles.length);
    });

    it('should remove the "BUY ITEM" buttons', () => {
        removeBuyItemButtons();
        let removeBuyItemButtonQuery = $("button[class='btn btn-info right']");
        removeBuyItemButtonQuery.length.should.equal(0);
    });

    it('should remove the last three item from the view', () => {
        removeLastThreeItemsFromView();
        let items = $(".container").children("div").children("div");
        let lastItem = items[7];
        let secondLastItem = items[6];
        items.length.should.equal(5);
        should.not.exist(lastItem);
        should.not.exist(secondLastItem);
    });

    it('should make 10% reduction on all products', () => {
        let prices = $('.price');
        let pricesBefore = prices.map((index, tag)=>{
            return $(tag).text();
        }).toArray();
        makeTenPercentPriceReductionOnAllProducts();
        let pricesAfter = prices.map((index, tag)=>{
            return $(tag).text();
        }).toArray();
        pricesAfter.should.be.eql(pricesBefore.map((value, index)=>{
            let currencyVal = parseFloat(value.substring(1));
            return "$" + (currencyVal * 0.9);
        }));
    });

    // it('should remove the pahts from the katalog', () => {
    //     removeThePathsFromTheKatalog();
    //     //What paths?
    // });

    it('should rename the product shirt to "Fish-Shirt"', () => {
        renameTheProductShirtToFishShirt();
        let firstShirtText = $("#firstProduct").find("h4").text();
        firstShirtText.should.equal("Fish-Shirt");
    });

    it('should rename the first rock item to "Bird-Rock"', () => {
        renameTheFirstRockItemToBirdRock();
        let firstShirtText = $("#secondProduct").find("h4").text();
        firstShirtText.should.equal("Bird-Rock");
    });

    it('should add 5 stars to the product shirt', () => {
        addFiveStarsToTheProductShirt();
        let firstShirtLastStar = $("#firstProduct").find(".ratings").children("span:last-child");
        firstShirtLastStar.attr("class").should.equal("glyphicon glyphicon-star");
    });

    it('should change the title name with a random name (use alg. for randomly generating chars)', () => {
        changeTheTitleNameWithARandomName();
        let title = $(".container").children().first().text();
        title.should.not.equal("NEW COLLECTION");
    });

    it('should color the stars of the third product with green', () => {
        colorTheStarsOfTheThirdProductWithGreen();
        let thirdProductStars = $("#secondProduct").next().find(".ratings").children();
        let starColors = thirdProductStars.map((index, tag)=>{
            return $(tag).css("color");
        }).toArray().reduce((acc,value,index,arr)=>{
            return acc.set(value, 0);
        },new Map());
        starColors.size.should.not.be.above(1);
        starColors.has("rgb(0, 128, 0)").should.eql(true);
    });

    it('should reset the last two images to the url "http://bit.ly/2xq8ev0"', () => {
        resetLastTwoImagesToUrl();
        let items = $(".container").children("div").children("div");
        let urlLastImage = $(items[items.length-1]).find("img").attr("src");
        let urlSecondLastImage = $(items[items.length-1]).find("img").attr("src");
        urlLastImage.should.equal("http://bit.ly/2xq8ev0");
        urlSecondLastImage.should.equal("http://bit.ly/2xq8ev0");
    });

    it('should constantly change the price (#changingPrice), increment it by one in each 3 secs.', () => {
        constantlyChangeThePriceAndIncrementItByOneInEachThreeSeconds();
        let changingPrices = [];
        for(let i = 0; i < 2; i++){
            changingPrices.push($("#changingPrice").text());
            pause(3000);
        }
        changingPrices[0].should.not.be.eql(changingPrices[1]);
    });

    it('should show the "BUY ITEM" again with a green background, gray border and a thin shadow', () => {
        showTheBuyItemAgainWithAGreenBackgroundGrayBorderAndThinShadow();
        let removeBuyItemButtonQuery = $("button[class='btn btn-info right']");
        let mapOfGrayBorders = removeBuyItemButtonQuery.map((index, tag)=>{
            return $(tag).css("border-color");
        }).toArray();
        mapOfGrayBorders = mapOfGrayBorders.reduce((acc, value,index,arr)=>{
            return acc.set(value,0);
        },new Map());
        let mapOfShadows = removeBuyItemButtonQuery.map((index, tag)=>{
            return $(tag).css("box-shadow");
        }).toArray().reduce((acc, value)=>{
            return acc.set(value,0);
        },new Map());
        //TODO: Replace all Maps with Set's
        removeBuyItemButtonQuery.size().should.be.above(4);
        mapOfGrayBorders.size.should.equal(1);
        mapOfShadows.size.should.equal(1);
        mapOfGrayBorders.entries().next().value[0].should.be.equal("rgb(128, 128, 128)");
        mapOfShadows.entries().next().value[0].should.not.be.eql("none");
    });

    it('should add an event handler to the "BUY ITEM" buttons and after a click it should show an alert', () => {
        addAnEventHandlerToTheBuyItemButtonsAndAfterClickShowAlert();
        let removeBuyItemButtonQuery = $("button[class='btn btn-info right']");

        let clickEvents = removeBuyItemButtonQuery.map((index, tag)=>{
            return $._data($(tag).get(0), 'events');
        }).toArray().reduce((acc,value)=>{
            if(value.click !== "undefined"){
                return acc.concat("true");
            }
        },[]);
        clickEvents.length.should.equal(removeBuyItemButtonQuery.length);
    });

    it('should bring back the initial image again, instead of "http://bit.ly/2xq8ev0"', () => {
        bringBackTheInitialImageAgainInsteadOfUrl();
        let items = $(".container").children("div").children("div");
        let urlLastImage = $(items[items.length-1]).find("img").attr("src");
        let urlSecondLastImage = $(items[items.length-1]).find("img").attr("src");
        urlLastImage.should.equal("https://s12.postimg.org/dawwajl0d/item_3_180x200.png");
        urlSecondLastImage.should.equal("https://s12.postimg.org/dawwajl0d/item_3_180x200.png");
    });

    it('should change every product desctiption to any text with at least 50 charakters', () => {
        changeEveryProductDescriptionToAnyTextWithAtLeast50Characters();
        let descriptions = $(".thumbnail").find(" > p");
        let newDescriptions = descriptions.map((index, tag)=>{
            return $(tag).text() !== "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                && $(tag).text().length >= 50;
        });
        let filteredNewDescriptions = newDescriptions.filter((index,value)=>{
            return value;
        });
        filteredNewDescriptions.length.should.equal(descriptions.length);
    });

    it('should randomly change all of the prices', () => {
        randomlyChangeAllOfThePrices();
        let prices = $('.price');
        let changedPrices = prices.map((index,tag)=>{
            return $(tag).text() !== "$29,90";
        });
        let filteredChangedPrices = changedPrices.filter((index, value)=>{
            return value;
        });
        filteredChangedPrices.length.should.equal(prices.length);
    });

    it('should mark the background with the color yellow of the two cheapest products', () => {
        markTheBackgroundWithTheColorYellowOfTheTwoCheapestProducts();
        let prices = $('.price');
        let valuePrices = prices.map((index, tag)=>{
            return parseFloat($(tag).text().substring(1));
        });
        valuePrices.sort();
        let firstLowPrice = $(".price:contains('"+ valuePrices[0] +"')");
        let secondLowPrice = $(".price:contains('"+ valuePrices[1] +"')");
        firstLowPrice.css("background-color").should.equal("rgba(255, 255, 0, 0)");
        secondLowPrice.css("background-color").should.equal("rgba(255, 255, 0, 0)");
    });

    it('should sort all the products ascendantly based on the the new prices', () => {
        sortAllOfTheProductsAscendantlyBasedOnTheNewPrices();
        let prices = $('.price');
        let valuePrices = prices.map((index, tag)=>{
            return parseFloat($(tag).text().substring(1));
        });
        let properlySorted = true;
        for(let i=1; i < valuePrices.length;i++){
            if(valuePrices[i-1] > valuePrices[i]){
                properlySorted = false;
            }
        }
        properlySorted.should.be.eql(true);
    });

    it('should add an mouse over event only the highest two products which logs in console the price (place on div)', () => {
        addAnMouseOverEventOnlyTheHighestTwoProductsWhichLogsInConsoleThePrice();
        let prices = $('.price');
        let valuePrices = prices.map((index, tag)=>{
            return parseFloat($(tag).text().substring(1));
        });
        valuePrices.sort();
        let highestPrice = $(".price:contains('"+ valuePrices[valuePrices.length-1] +"')").first();
        let secondHighestPrice = $(".price:contains('"+ valuePrices[valuePrices.length-2] +"')").first();

        let highestPriceEvents = $._data($(highestPrice).parent().get(0),"events");
        let secondHighestPriceEvents = $._data($(secondHighestPrice).parent().get(0),"events");

        (typeof highestPriceEvents !== "undefined"
        && typeof highestPriceEvents.onmouseover !== "undefined").should.be.eql(true);
        (typeof secondHighestPriceEvents !== "undefined"
        && typeof secondHighestPriceEvents.onmouseover !== "undefined").should.be.eql(true);
    });
});


