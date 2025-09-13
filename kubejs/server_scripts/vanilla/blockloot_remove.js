const annoyingLights = [
    "minecraft:torch",
    "minecraft:soul_torch",
    "minecraft:lantern",
    "minecraft:soul_lantern",
    "minecraft:end_rod",
    "minecraft:campfire",
    "minecraft:soul_campfire",
    "minecraft:brewing_stand",
];

LootJS.modifiers((event) => {
    for (const blockId of annoyingLights){
        event
        .addBlockLootModifier(blockId)
        .replaceLoot(blockId, 'minecraft:air')
        console.log(`${blockId} will now drop minecraft:air.`);
    }
});


console.info('Hello, World! (Loaded Luminous block loot removal server scripts)')