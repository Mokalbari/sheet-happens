// Class ability mapping
const classAbilityImprovements: Record<
  string,
  Array<{ ability: string; role: "main" | "save" }>
> = {
  barbarian: [
    { ability: "strength", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "strength", role: "save" },
  ],
  bard: [
    { ability: "charisma", role: "main" },
    { ability: "dexterity", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  cleric: [
    { ability: "wisdom", role: "main" },
    { ability: "charisma", role: "save" },
    { ability: "wisdom", role: "save" },
  ],
  druid: [
    { ability: "wisdom", role: "main" },
    { ability: "intelligence", role: "save" },
    { ability: "wisdom", role: "save" },
  ],
  fighter: [
    { ability: "strength", role: "main" },
    { ability: "dexterity", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "strength", role: "save" },
  ],
  monk: [
    { ability: "dexterity", role: "main" },
    { ability: "wisdom", role: "main" },
    { ability: "strength", role: "save" },
    { ability: "dexterity", role: "save" },
  ],
  paladin: [
    { ability: "strength", role: "main" },
    { ability: "charisma", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  ranger: [
    { ability: "dexterity", role: "main" },
    { ability: "wisdom", role: "main" },
    { ability: "strength", role: "save" },
    { ability: "dexterity", role: "save" },
  ],
  rogue: [
    { ability: "dexterity", role: "main" },
    { ability: "dexterity", role: "save" },
    { ability: "intelligence", role: "save" },
  ],
  sorcerer: [
    { ability: "charisma", role: "main" },
    { ability: "constitution", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  warlock: [
    { ability: "charisma", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "charisma", role: "save" },
  ],
  wizard: [
    { ability: "intelligence", role: "main" },
    { ability: "wisdom", role: "save" },
    { ability: "intelligence", role: "save" },
  ],
};
