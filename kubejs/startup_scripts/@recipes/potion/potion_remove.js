MoreJSEvents.registerPotionBrewing(event => {

        event.removeByPotion(null, null, null);
        event.removeContainer(Ingredient.all);

        console.log('Hello! The Potion removal recipe event has fired!')
})
//remove ALL potion crafting


  
console.info('Hello, World! (Loaded Potion removal server scripts)')
