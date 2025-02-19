ServerEvents.tags("item", e => {
    e.add("c:stripped_logs", "wilderwild:stripped_maple_log");

    const glassColors = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "tinted", "white", "yellow"];
    for(const color of glassColors) {
        e.add("c:glass_blocks", `#createframed:${color}/glass`)
    }
})

ServerEvents.tags("block", e => {
    const glassColors = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "tinted", "white", "yellow"];
    for(const color of glassColors) {
        e.add("c:glass_blocks", `#createframed:${color}/glass`)
    }

    const barMaterials = ["andesite", "brass", "zinc", "copper", "industrial_iron", "iron"]
    for(const material of barMaterials) {
        if(material != "iron") e.add("minecraft:mineable/pickaxe", `createdeco:${material}_bars`)
        e.add("minecraft:mineable/pickaxe", `createdeco:${material}_bars_overlay`)
    }
})