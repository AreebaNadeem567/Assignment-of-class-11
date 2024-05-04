let fruit: string = "maNgo iS mY faVorite fruit becAuSe iT hAs a swEeT and refResHing flaVour.";

function makeTitleCase(text: string): string {
    let fruitName: string[] = text.split(" ")

for (let i = 0; i < fruitName.length; i++) {
    let character = fruitName[i]

    fruitName[i] = character.charAt(0).toUpperCase() + character.slice(1).toLowerCase()
}
return fruitName.join(" ")
}

console.log(makeTitleCase(fruit))

let flowerName: string = "Rose";
let flowerNameInTitleCase: string = makeTitleCase(flowerName);
console.log(flowerNameInTitleCase);
