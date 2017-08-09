import shortid from "shortid"

export const Images = {
  miloCarlos: require("../../assets/milo_carlos.jpg"),
  miloEmma: require("../../assets/milo_emma.jpg"),
  beau: require("../../assets/beau.jpg"),
  lucy: require("../../assets/lucy.jpg"),
  callie: require("../../assets/callie.jpg"),
  pepita: require("../../assets/pepita.jpg"),
  boba: require("../../assets/boba.jpg")
}

export const baseData = [
  {
    id: shortid(),
    name: "Milo",
    breed: "Chihuahua-Corgi",
    color: "Tan",
    picture: "miloCarlos",
    description: "This sassy little dog has a super-size personality. He knows what he wants and goes after it with single-minded determination. For his size, he’s an excellent watchdog, but he can be yappy if he’s not taught to moderate his barking."
  },
  {
    id: shortid(),
    name: "Beau",
    breed: "Labrador Retriever",
    color: "Chocolate",
    picture: "beau",
    description: "The Labrador Retriever was bred to be both a friendly companion and a useful working dog breed. Historically, he earned his keep as a fisherman’s helper: hauling nets, fetching ropes, and retrieving fish from the chilly North Atlantic."
  }
]

export const moreDogs = [
  {
    id: shortid(),
    name: "Milo",
    breed: "Labradoodle",
    color: "White",
    picture: "miloEmma",
    description: "The Labradoodle is a cross between a Labrador Retriever and a Miniature or Standard Poodle. Like both of his parent breeds, he’s intelligent, friendly, and at least moderately active. He has a shaggy or curly coat that requires maintenance."
  },
  {
    id: shortid(),
    name: "Lucy",
    breed: "Beagle",
    color: "White & Brown",
    picture: "lucy",
    description: "Beagles are scenthounds, meaning they live to use their nose. They’re a comfortable size to tote around in your car, simple to groom, and their exercise needs are easily met with a long, meandering walk that gives them plenty of time to sniff."
  },
  {
    id: shortid(),
    name: "Callie",
    breed: "West Highland White Terrier",
    color: "White",
    picture: "callie",
    description: "You may recognize the Westie from her long-running stint as the mascot for Cesar pet food, but she’s more than just a cute face. A true terrier, she’s a fast and clever hunter, plus her lighthearted nature makes for a pet who’s always game for some fun."
  },
  {
    id: shortid(),
    name: "Pepita",
    breed: "Chihuahua",
    color: "Tan",
    picture: "pepita",
    description: "The Chihuahua dog breed’s charms include her small size, outsize personality, and variety in coat types and colors. She’s all dog, fully capable of competing in dog sports such as agility and obedience."
  },
  {
    id: shortid(),
    name: "Boba",
    breed: "Pomeranian",
    color: "Brown",
    picture: "boba",
    description: "Tiny and bright-eyed, the spunky Pomeranian greets the world with endless curiosity and a sure sense that he’s the cutest thing around. He is clever, adaptable, and happy, whether hanging at home or performing as a top athlete on an agility course."
  },
]
