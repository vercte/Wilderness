ServerEvents.recipes(recipe => {
    // Spyglass (Cheaper)
    recipe.custom({
        type: "create:sequenced_assembly",
        ingredient: {
            item: "minecraft:stick"
        },
        results: [
            { item: "minecraft:spyglass" }
        ],
        loops: 1,
        sequence: [
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "wilderness:incomplete_spyglass"
                    },
                    {
                        item: "create:copper_sheet"
                    }
                ],
                results: [
                    {
                        item: "wilderness:incomplete_spyglass"
                    }
                ]
            },
            {
                type: "create:deploying",
                ingredients: [
                    {
                        item: "wilderness:incomplete_spyglass"
                    },
                    {
                        item: "minecraft:amethyst_shard"
                    }
                ],
                results: [
                    {
                        item: "wilderness:incomplete_spyglass"
                    }
                ]
            },
            {
                type: "create:pressing",
                ingredients: [
                    {
                        item: "wilderness:incomplete_spyglass"
                    }
                ],
                results: [
                    {
                        item: "wilderness:incomplete_spyglass"
                    }
                ]
            },
        ],
        transitionalItem: {
            item: "wilderness:incomplete_spyglass"
        }
    })

    // Fuck it im putting spelunnkery in here too
    recipe.custom({
        type: "create:milling",
        ingredients: [{ item: "speunkery:rock_salt" }],
        processingTime: 100,
        results: [
            { item: "spelunkery:salt", count: 2 },
            { item: "spelunkery:salt", chance: 0.75 }
        ]
    })
})