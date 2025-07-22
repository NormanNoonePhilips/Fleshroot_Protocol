const annoyingChests = [
    'minecraft:chest',
    'minecraft:barrel',
    'minecraft:ender_chest',
    'minecraft:trapped_chest',
    'minecraft:hopper',
    'outer_end:azure_chest_boat',
    'outer_end:azure_chest',
    'outer_end:azure_trapped_chest',
    'ae2:chest',
    'ae2:smooth_sky_stone_chest',
    'ae2:sky_stone_chest',
];

const annoyingVehicles = [
    '#minecraft:chest_boats',
    'minecraft:minecart',
    'minecraft:hopper_minecart',
    'minecraft:chest_minecart',
    'minecraft:furnace_minecart',
    'minecraft:tnt_minecart',
];

// manage the chest inventory when broken and dropped
function spillContents(context, builder){   //pull items out of the chest’s inventory and add them
    // getDestroyedBlock() returns a BlockContainerJS for blocks with inventories
    const container = context.getDestroyedBlock();
    if (!container) {
        return;
        }
    // iterate over every slot in that chest
    for (let slot = 0; slot < container.getSlots(); slot++){
        const stack = container.getItem(slot);
        if (!stack.isEmpty()) {
            // copy() so you don't consume the original, then add it to the loot builder
            builder.add(stack.copy());
        }
    }
}

LootJS.modifiers((event) => {
    for (const blockId of annoyingChests){
        event
        .addBlockLootModifier(blockId)
        .replaceLoot(blockId, 'minecraft:air')
        .apply(spillContents);
        console.log(`${blockId} will now drop minecraft:air and spill its inventory.`);
    }
});

ServerEvents.recipes((event) => {
    // Remove any recipes that output these chests or vehicles
    for (const itemId of [annoyingChests.concat(annoyingVehicles)]){
    event.remove({output: itemId});
    console.log(`Removed recipe for '${itemId}'.`);
    }
    console.log('Hello! The Chest removal recipe event has fired!')
});



console.info('Hello, World! (Loaded Chest substitution server scripts)')
