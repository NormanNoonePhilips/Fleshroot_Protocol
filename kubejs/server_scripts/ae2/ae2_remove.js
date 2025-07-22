ServerEvents.recipes(event => {
    // Remove AE2 recipes that are not needed

    event.remove({input:('#ae2:facade')})
    event.remove({output:('#ae2:facade')})
    // Remove AE2 facades

    console.log('Hello! The AE2 removal recipe event has fired!')
    })
  
console.info('Hello, World! (Loaded AE2 removal server scripts)')