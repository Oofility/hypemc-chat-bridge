module.exports = {
    allowed_enchants: [
        'ultimate_chimera',
        'ultimate_combo',
        'ultimate_last_stand',
        'ultimate_legion',
        'ultimate_rend',
        'ultimate_soul_eater',
        'ultimate_wise',
        'ultimate_wisdom',
        'ultimate_no_pain_no_gain',
        'ultimate_swarm',
        'ender_slayer',
        'dragon_hunter',
        'vicious',
        'respite',
        'smarty_pants',
        'giant_killer',
        'first_strike',
        'sharpness',
        'vicious',
        'overload',
        'ultimate_one_for_all',
        'efficiency',
        'big_brain',
        'protection',
        'pristine',
        'growth',
        'cubism',
        'snipe',
        'power',
        'mana_vampire',
        'ferocious_mana',
        'strong_mana',
        'ultimate_inferno',
        'ultimate_fatal_tempo',
        'ultimate_reiterate', //duplex
        'ultimate_flash',
        'smoldering',
    ],
    allowed_enchant_tiers: {
        bane_of_arthropods: '7',
        cleave: '6',
        critical: '7',
        cubism: '6',
        ender_slayer: '7',
        execute: '6',
        first: 'strike',
        giant_killer: '7',
        lethality: '6',
        life_steal: '5',
        looting: '5',
        luck: '7',
        prosecute: '6',
        scavenger: '5',
        sharpness: '7',
        smite: '7',
        syphon: '5',
        thunderbolt: '7',
        thunderlord: '7',
        titan_killer: '7',
        vampirism: '6',
        venomous: '6',
        vicious: '5',
        chance: '5',
        overload: '5',
        power: '7',
        snipe: '4',
        blast_protection: '7',
        big_brain: '5',
        counter_strike: '5',
        fire_protection: '7',
        growth: '7',
        projectile_protection: '7',
        protection: '7',
        rejuvenate: '5',
        hardened_mana: '4',
        hardened_mana: '5',
        hardened_mana: '6',
        hardened_mana: '7',
        hardened_mana: '8',
        hardened_mana: '9',
        hardened_mana: '10',
        fire_aspect: '3',
    },

    specialPercentages: {
        overload: 0.35,
        ultimate_soul_eater: 0.35,
        ultimate_inferno: 0.35,
        ultimate_fatal_tempo: 0.35,
        big_brain: 0.35,
        counter_strike: 0.2,
    },

    blocked_enchants: {
        bone_boomerang: ['overload', 'power'],
        death_bow: ['overload', 'power', 'ultimate_soul_eater'],
    },

    master_stars: ['first_master_star', 'second_master_star', 'third_master_star', 'fourth_master_star', 'fifth_master_star'],

    prestige: {
        HOT_CRIMSON_CHESTPLATE: ['CRIMSON_CHESTPLATE'],
        HOT_CRIMSON_HELMET: ['CRIMSON_HELMET'],
        HOT_CRIMSON_LEGGINGS: ['CRIMSON_LEGGINGS'],
        HOT_CRIMSON_BOOTS: ['CRIMSON_BOOTS'],
        BURNING_CRIMSON_CHESTPLATE: ['HOT_CRIMSON_CHESTPLATE', 'CRIMSON_CHESTPLATE'],
        BURNING_CRIMSON_HELMET: ['HOT_CRIMSON_HELMET', 'CRIMSON_HELMET'],
        BURNING_CRIMSON_LEGGINGS: ['HOT_CRIMSON_LEGGINGS', 'CRIMSON_LEGGINGS'],
        BURNING_CRIMSON_BOOTS: ['HOT_CRIMSON_BOOTS', 'CRIMSON_BOOTS'],
        FIERY_CRIMSON_CHESTPLATE: ['BURNING_CRIMSON_CHESTPLATE', 'HOT_CRIMSON_CHESTPLATE', 'CRIMSON_CHESTPLATE'],
        FIERY_CRIMSON_HELMET: ['BURNING_CRIMSON_HELMET', 'HOT_CRIMSON_HELMET', 'CRIMSON_HELMET'],
        FIERY_CRIMSON_LEGGINGS: ['BURNING_CRIMSON_LEGGINGS', 'HOT_CRIMSON_LEGGINGS', 'CRIMSON_LEGGINGS'],
        FIERY_CRIMSON_BOOTS: ['BURNING_CRIMSON_BOOTS', 'HOT_CRIMSON_BOOTS', 'CRIMSON_BOOTS'],
        INFERNAL_CRIMSON_CHESTPLATE: ['FIERY_CRIMSON_CHESTPLATE', 'BURNING_CRIMSON_CHESTPLATE', 'HOT_CRIMSON_CHESTPLATE', 'CRIMSON_CHESTPLATE'],
        INFERNAL_CRIMSON_HELMET: ['FIERY_CRIMSON_HELMET', 'BURNING_CRIMSON_HELMET', 'HOT_CRIMSON_HELMET', 'CRIMSON_HELMET'],
        INFERNAL_CRIMSON_LEGGINGS: ['FIERY_CRIMSON_LEGGINGS', 'BURNING_CRIMSON_LEGGINGS', 'HOT_CRIMSON_LEGGINGS', 'CRIMSON_LEGGINGS'],
        INFERNAL_CRIMSON_BOOTS: ['FIERY_CRIMSON_BOOTS', 'BURNING_CRIMSON_BOOTS', 'HOT_CRIMSON_BOOTS', 'CRIMSON_BOOTS'],
        HOT_TERROR_CHESTPLATE: ['TERROR_CHESTPLATE'],
        HOT_TERROR_HELMET: ['TERROR_HELMET'],
        HOT_TERROR_LEGGINGS: ['TERROR_LEGGINGS'],
        HOT_TERROR_BOOTS: ['TERROR_BOOTS'],
        BURNING_TERROR_CHESTPLATE: ['HOT_TERROR_CHESTPLATE', 'TERROR_CHESTPLATE'],
        BURNING_TERROR_HELMET: ['HOT_TERROR_HELMET', 'TERROR_HELMET'],
        BURNING_TERROR_LEGGINGS: ['HOT_TERROR_LEGGINGS', 'TERROR_LEGGINGS'],
        BURNING_TERROR_BOOTS: ['HOT_TERROR_BOOTS', 'TERROR_BOOTS'],
        FIERY_TERROR_CHESTPLATE: ['BURNING_TERROR_CHESTPLATE', 'HOT_TERROR_CHESTPLATE', 'TERROR_CHESTPLATE'],
        FIERY_TERROR_HELMET: ['BURNING_TERROR_HELMET', 'HOT_TERROR_HELMET', 'TERROR_HELMET'],
        FIERY_TERROR_LEGGINGS: ['BURNING_TERROR_LEGGINGS', 'HOT_TERROR_LEGGINGS', 'TERROR_LEGGINGS'],
        FIERY_TERROR_BOOTS: ['BURNING_TERROR_BOOTS', 'HOT_TERROR_BOOTS', 'TERROR_BOOTS'],
        INFERNAL_TERROR_CHESTPLATE: ['FIERY_TERROR_CHESTPLATE', 'BURNING_TERROR_CHESTPLATE', 'HOT_TERROR_CHESTPLATE', 'TERROR_CHESTPLATE'],
        INFERNAL_TERROR_HELMET: ['FIERY_TERROR_HELMET', 'BURNING_TERROR_HELMET', 'HOT_TERROR_HELMET', 'TERROR_HELMET'],
        INFERNAL_TERROR_LEGGINGS: ['FIERY_TERROR_LEGGINGS', 'BURNING_TERROR_LEGGINGS', 'HOT_TERROR_LEGGINGS', 'TERROR_LEGGINGS'],
        INFERNAL_TERROR_BOOTS: ['FIERY_TERROR_BOOTS', 'BURNING_TERROR_BOOTS', 'HOT_TERROR_BOOTS', 'TERROR_BOOTS'],
        HOT_FERVOR_CHESTPLATE: ['FERVOR_CHESTPLATE'],
        HOT_FERVOR_HELMET: ['FERVOR_HELMET'],
        HOT_FERVOR_LEGGINGS: ['FERVOR_LEGGINGS'],
        HOT_FERVOR_BOOTS: ['FERVOR_BOOTS'],
        BURNING_FERVOR_CHESTPLATE: ['HOT_FERVOR_CHESTPLATE', 'FERVOR_CHESTPLATE'],
        BURNING_FERVOR_HELMET: ['HOT_FERVOR_HELMET', 'FERVOR_HELMET'],
        BURNING_FERVOR_LEGGINGS: ['HOT_FERVOR_LEGGINGS', 'FERVOR_LEGGINGS'],
        BURNING_FERVOR_BOOTS: ['HOT_FERVOR_BOOTS', 'FERVOR_BOOTS'],
        FIERY_FERVOR_CHESTPLATE: ['BURNING_FERVOR_CHESTPLATE', 'HOT_FERVOR_CHESTPLATE', 'FERVOR_CHESTPLATE'],
        FIERY_FERVOR_HELMET: ['BURNING_FERVOR_HELMET', 'HOT_FERVOR_HELMET', 'FERVOR_HELMET'],
        FIERY_FERVOR_LEGGINGS: ['BURNING_FERVOR_LEGGINGS', 'HOT_FERVOR_LEGGINGS', 'FERVOR_LEGGINGS'],
        FIERY_FERVOR_BOOTS: ['BURNING_FERVOR_BOOTS', 'HOT_FERVOR_BOOTS', 'FERVOR_BOOTS'],
        INFERNAL_FERVOR_CHESTPLATE: ['FIERY_FERVOR_CHESTPLATE', 'BURNING_FERVOR_CHESTPLATE', 'HOT_FERVOR_CHESTPLATE', 'FERVOR_CHESTPLATE'],
        INFERNAL_FERVOR_HELMET: ['FIERY_FERVOR_HELMET', 'BURNING_FERVOR_HELMET', 'HOT_FERVOR_HELMET', 'FERVOR_HELMET'],
        INFERNAL_FERVOR_LEGGINGS: ['FIERY_FERVOR_LEGGINGS', 'BURNING_FERVOR_LEGGINGS', 'HOT_FERVOR_LEGGINGS', 'FERVOR_LEGGINGS'],
        INFERNAL_FERVOR_BOOTS: ['FIERY_FERVOR_BOOTS', 'BURNING_FERVOR_BOOTS', 'HOT_FERVOR_BOOTS', 'FERVOR_BOOTS'],
        HOT_HOLLOW_CHESTPLATE: ['HOLLOW_CHESTPLATE'],
        HOT_HOLLOW_HELMET: ['HOLLOW_HELMET'],
        HOT_HOLLOW_LEGGINGS: ['HOLLOW_LEGGINGS'],
        HOT_HOLLOW_BOOTS: ['HOLLOW_BOOTS'],
        BURNING_HOLLOW_CHESTPLATE: ['HOT_HOLLOW_CHESTPLATE', 'HOLLOW_CHESTPLATE'],
        BURNING_HOLLOW_HELMET: ['HOT_HOLLOW_HELMET', 'HOLLOW_HELMET'],
        BURNING_HOLLOW_LEGGINGS: ['HOT_HOLLOW_LEGGINGS', 'HOLLOW_LEGGINGS'],
        BURNING_HOLLOW_BOOTS: ['HOT_HOLLOW_BOOTS', 'HOLLOW_BOOTS'],
        FIERY_HOLLOW_CHESTPLATE: ['BURNING_HOLLOW_CHESTPLATE', 'HOT_HOLLOW_CHESTPLATE', 'HOLLOW_CHESTPLATE'],
        FIERY_HOLLOW_HELMET: ['BURNING_HOLLOW_HELMET', 'HOT_HOLLOW_HELMET', 'HOLLOW_HELMET'],
        FIERY_HOLLOW_LEGGINGS: ['BURNING_HOLLOW_LEGGINGS', 'HOT_HOLLOW_LEGGINGS', 'HOLLOW_LEGGINGS'],
        FIERY_HOLLOW_BOOTS: ['BURNING_HOLLOW_BOOTS', 'HOT_HOLLOW_BOOTS', 'HOLLOW_BOOTS'],
        INFERNAL_HOLLOW_CHESTPLATE: ['FIERY_HOLLOW_CHESTPLATE', 'BURNING_HOLLOW_CHESTPLATE', 'HOT_HOLLOW_CHESTPLATE', 'HOLLOW_CHESTPLATE'],
        INFERNAL_HOLLOW_HELMET: ['FIERY_HOLLOW_HELMET', 'BURNING_HOLLOW_HELMET', 'HOT_HOLLOW_HELMET', 'HOLLOW_HELMET'],
        INFERNAL_HOLLOW_LEGGINGS: ['FIERY_HOLLOW_LEGGINGS', 'BURNING_HOLLOW_LEGGINGS', 'HOT_HOLLOW_LEGGINGS', 'HOLLOW_LEGGINGS'],
        INFERNAL_HOLLOW_BOOTS: ['FIERY_HOLLOW_BOOTS', 'BURNING_HOLLOW_BOOTS', 'HOT_HOLLOW_BOOTS', 'HOLLOW_BOOTS'],
        HOT_AURORA_CHESTPLATE: ['AURORA_CHESTPLATE'],
        HOT_AURORA_HELMET: ['AURORA_HELMET'],
        HOT_AURORA_LEGGINGS: ['AURORA_LEGGINGS'],
        HOT_AURORA_BOOTS: ['AURORA_BOOTS'],
        BURNING_AURORA_CHESTPLATE: ['HOT_AURORA_CHESTPLATE', 'AURORA_CHESTPLATE'],
        BURNING_AURORA_HELMET: ['HOT_AURORA_HELMET', 'AURORA_HELMET'],
        BURNING_AURORA_LEGGINGS: ['HOT_AURORA_LEGGINGS', 'AURORA_LEGGINGS'],
        BURNING_AURORA_BOOTS: ['HOT_AURORA_BOOTS', 'AURORA_BOOTS'],
        FIERY_AURORA_CHESTPLATE: ['BURNING_AURORA_CHESTPLATE', 'HOT_AURORA_CHESTPLATE', 'AURORA_CHESTPLATE'],
        FIERY_AURORA_HELMET: ['BURNING_AURORA_HELMET', 'HOT_AURORA_HELMET', 'AURORA_HELMET'],
        FIERY_AURORA_LEGGINGS: ['BURNING_AURORA_LEGGINGS', 'HOT_AURORA_LEGGINGS', 'AURORA_LEGGINGS'],
        FIERY_AURORA_BOOTS: ['BURNING_AURORA_BOOTS', 'HOT_AURORA_BOOTS', 'AURORA_BOOTS'],
        INFERNAL_AURORA_CHESTPLATE: ['FIERY_AURORA_CHESTPLATE', 'BURNING_AURORA_CHESTPLATE', 'HOT_AURORA_CHESTPLATE', 'AURORA_CHESTPLATE'],
        INFERNAL_AURORA_HELMET: ['FIERY_AURORA_HELMET', 'BURNING_AURORA_HELMET', 'HOT_AURORA_HELMET', 'AURORA_HELMET'],
        INFERNAL_AURORA_LEGGINGS: ['FIERY_AURORA_LEGGINGS', 'BURNING_AURORA_LEGGINGS', 'HOT_AURORA_LEGGINGS', 'AURORA_LEGGINGS'],
        INFERNAL_AURORA_BOOTS: ['FIERY_AURORA_BOOTS', 'BURNING_AURORA_BOOTS', 'HOT_AURORA_BOOTS', 'AURORA_BOOTS'],
    },
};