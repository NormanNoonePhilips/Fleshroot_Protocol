
ServerEvents.recipes(event => {

    event.remove({ type: 'minecraft:campfire_cooking' })
    // This removes all campfire uses


    console.log('Hello! The Vanilla Campfire recipe event has fired!')
    })
  
console.info('Hello, World! (Loaded Vanilla Campfire removal server scripts)')
