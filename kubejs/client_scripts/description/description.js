const annoyingPotions =
  [
    Item.of('enigmaticlegacy:common_potion').weakNBT(),
    Item.of('enigmaticlegacy:common_potion_lingering').weakNBT(),
    Item.of('enigmaticlegacy:common_potion_splash').weakNBT(),

    Item.of('enigmaticlegacy:ultimate_potion').weakNBT(),
    Item.of('enigmaticlegacy:ultimate_potion_lingering').weakNBT(),
    Item.of('enigmaticlegacy:ultimate_potion_splash').weakNBT(),

    Item.of('enigmaticaddons:common_potion').weakNBT(),
    Item.of('enigmaticaddons:common_potion_lingering').weakNBT(),
    Item.of('enigmaticaddons:common_potion_splash').weakNBT(),

    Item.of('enigmaticaddons:ultimate_potion').weakNBT(),
    Item.of('enigmaticaddons:ultimate_potion_lingering').weakNBT(),
    Item.of('enigmaticaddons:ultimate_potion_splash').weakNBT(),
  ]



ItemEvents.tooltip(event => {
  event.addAdvanced(annoyingPotions, (item, advanced, text) => {
    // Adds text in first line, pushing the items name down a line. If you want the line below the item name, the index must be 1
    text.add(1, Text.of('PLEASE do not brew it, this is not supposed'));
    text.add(2, Text.of('to be in the modpack, but this mod ignores KUBEjs'))
    
  })
})
 
console.info('Hello, World! (Loaded Descriptions server scripts)')

