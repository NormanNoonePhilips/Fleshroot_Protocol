
ServerEvents.recipes(event => {

    event.remove({ output: '#curios:quiver' })
    // This removes all curio


    console.log('Hello! The Skilltree removal recipe event has fired!')
    })
  
console.info('Hello, World! (Loaded Skilltree removal server scripts)')