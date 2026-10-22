function createSpellFactory() {
    let powerLevel = 0;

    return function spellFactory(spellName) {
        powerLevel++;
        const currentLevel = powerLevel;

        return function castSpell() {
            console.log(`${spellName} level ${currentLevel}!`);
        };
    };
}

const spellFactory = createSpellFactory();

const fireball = spellFactory("fireball");
fireball(); 

const advancedFireball = spellFactory("adFireball");
advancedFireball(); 

const iceBeam = spellFactory("iceBeam");
iceBeam(); 