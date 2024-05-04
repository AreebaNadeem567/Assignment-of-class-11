var fruit = "maNgo iS mY faVorite fruit becAuSe iT hAs a swEeT and refResHing flaVour.";
function makeTitleCase(text) {
    var fruitName = text.split(" ");
    for (var i = 0; i < fruitName.length; i++) {
        var character = fruitName[i];
        fruitName[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase();
    }
    return fruitName.join(" ");
}
console.log(makeTitleCase(fruit));
var flowerName = "Rose";
var flowerNameInTitleCase = makeTitleCase(flowerName);
console.log(flowerNameInTitleCase);
