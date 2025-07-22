//priority: 1

ServerEvents.recipes(event => {
    // Adds recipes to Alex's Cave

    event.shapeless(
    Item.of('minecraft:bone', 9),
    [
        'alexscaves:heavy_bone'
    ])

    event.shapeless(
    Item.of('minecraft:leather', 9),
    [
        'alexscaves:tough_hide'
    ])


    console.log("Hello! The Alex's Cave addition recipe event has fired!")
    })
console.info("Hello, World! (Loaded Alex's Cave addition server scripts)")