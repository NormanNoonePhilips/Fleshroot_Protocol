// annoyingOres is an array of ore IDs that we want to remove from the EnigmaticLegacy recipe.
const annoyingEnigmatic = [
    "enigmaticaddons:extradimensional_scepter",
    "enigmaticlegacy:astral_block",
    "enigmaticlegacy:thicc_scroll",
    "enigmaticlegacy:xp_scroll",
    "enigmaticlegacy:escape_scroll",
    "enigmaticlegacy:heaven_scroll",
    "enigmaticlegacy:fabulous_scroll",
    "enigmaticlegacy:extradimensional_eye",
    "enigmaticlegacy:enchantment_transposer",
    "enigmaticlegacy:lore_inscriber",
    "enigmaticlegacy:lore_fragment",
    "enigmaticlegacy:insignia",
    "enigmaticlegacy:avarice_scroll",
    "enigmaticlegacy:cursed_scroll",
    "enigmaticlegacy:abyssal_heart",
    "enigmaticlegacy:the_infinitum",
    "enigmaticlegacy:desolation_ring",
    "enigmaticlegacy:eldritch_amulet",
    "enigmaticlegacy:eldritch_pan",
];

ServerEvents.recipes(event => {

    event.remove({input: annoyingEnigmatic})
    event.remove({output: annoyingEnigmatic})
     // This removes all recipes that use the tools in the annoingEnigmatic array as input AND output
    

    console.log('Hello! The EnigmaticLegacy removal recipe event has fired!')
    })
  
console.info('Hello, World! (Loaded EnigmaticLegacy removal server scripts)')