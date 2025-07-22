import { ServerEvents } from 'kubejs/server_events.js'

// annoyingOres is an array of ore IDs that we want to remove from the Vanilla recipe.
const annoyingOres = [
    'alexscaves:guanostone_redstone_ore',
    'alexscaves:coprolith_coal_ore',
    'alexscaves:radrock_uranium_ore',
    'minecraft:deepslate_coal_ore',
    'minecraft:deepslate_iron_ore',
    'minecraft:deepslate_copper_ore',
    'minecraft:deepslate_gold_ore',
    'minecraft:deepslate_redstone_ore',
    'minecraft:deepslate_emerald_ore',
    'minecraft:deepslate_lapis_ore',
    'minecraft:deepslate_diamond_ore',
    'create:deepslate_zinc_ore',

    '#forge:ores'// This is a tag that includes ALMOST all vanilla ores, so we can remove them at once
];

// annoyingOres is an array of ore IDs that we want to remove from the Vanilla recipe.
const annoyingTools = [
    'minecraft:lantern',
    'minecraft:soul_lantern',
    'minecraft:torch',
    'minecraft:soul_torch',
    'minecraft:campfire',
    'minecraft:soul_campfire',
    'minecraft:end_rod',
    'minecraft:brewing_stand',
    'minecraft:ladder',
    'minecraft:cauldron',
    'minecraft:scaffolding',
    'minecraft:ender_chest',
    'minecraft:enchanting_table',
    '#minecraft:shulker_boxes',
    'minecraft:beacon',
    'minecraft:conduit',
    '#minecraft:beehives',
    'minecraft:respawn_anchor',
    'minecraft:fishing_rod',
    'minecraft:brush',

    'minecraft:stone_shovel',
    'minecraft:stone_pickaxe',
    'minecraft:stone_axe',
    'minecraft:stone_hoe',
    'minecraft:stone_sword',
    'minecraft:iron_shovel',
    'minecraft:iron_pickaxe',
    'minecraft:iron_axe',
    'minecraft:iron_hoe',
    'minecraft:iron_sword',
    'minecraft:golden_shovel',
    'minecraft:golden_pickaxe',
    'minecraft:golden_axe',
    'minecraft:golden_hoe',
    'minecraft:golden_sword',
    'minecraft:diamond_shovel',
    'minecraft:diamond_pickaxe',
    'minecraft:diamond_axe',
    'minecraft:diamond_hoe',
    'minecraft:diamond_sword',
    'minecraft:netherite_shovel',
    'minecraft:netherite_pickaxe',
    'minecraft:netherite_axe',
    'minecraft:netherite_hoe',
    'minecraft:netherite_sword',

    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',

    'minecraft:golden_helmet',
    'minecraft:golden_chestplate',
    'minecraft:golden_leggings',
    'minecraft:golden_boots',

    'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_leggings',
    'minecraft:diamond_boots',

    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',

    'minecraft:turtle_helmet',

    'minecraft:leather_horse_armor',
    'minecraft:iron_horse_armor',
    'minecraft:golden_horse_armor',
    'minecraft:diamond_horse_armor',

    'minecraft:crafting_special_tippedarrow',
    'minecraft:bow',
    'minecraft:crossbow',
    'minecraft:bow',
    'alexscaves:seeking_arrow',
    'minecraft:spectral_arrow',
];


ServerEvents.recipes(event => {

    event.remove({input: annoyingOres})
    // This removes all recipes that use the ores in the annoyingOres array as input

    event.remove({input: annoyingTools})
    event.remove({output: annoyingTools})
     // This removes all recipes that use the tools in the annoyingTools array as input AND output
    
    event.remove({output: '#minecraft:shulker_boxes'})
    // This removes all shulker boxes

    console.log('Hello! The Vanilla removal recipe event has fired!')
    })
  
console.info('Hello, World! (Loaded Vanilla removal server scripts)')