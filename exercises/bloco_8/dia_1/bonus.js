const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.floor(Math.random() * (dragon.strength - 15)) + 15;

const warriorDamage = () => Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);

const mageDamage = () => {
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };
  if (mage.mana >= 15) {
    turnStats.manaSpent = 15;
    turnStats.damageDealt = Math.floor(Math.random() * ((mage.intelligence * 2) -  mage.intelligence) + mage.intelligence);
    return turnStats;
  }
  return turnStats;
};

const gameActions = {
  warriorTurn: (warriorDamage) => {
    const warriorDmg = warriorDamage();
    dragon.healthPoints -= warriorDmg;
    warrior.damage = warriorDmg;
  },
  mageTurn: (mageDamage) => {
    const mageDmg = mageDamage().damageDealt;
    const manaSpent = mageDamage().manaSpent;
    dragon.healthPoints -= mageDmg;
    mage.damage = mageDmg;
    mage.mana -= manaSpent;
  },
  dragonTurn: (dragonDamage) => {
    const dragonDmg = dragonDamage();
    mage.healthPoints -= dragonDmg;
    warrior.healthPoints -= dragonDmg;
    dragon.damage = dragonDmg;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.turnResults());