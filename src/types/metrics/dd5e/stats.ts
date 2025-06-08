const DD5E_ABILITY_TO_SKILLS = {
  Strength: ["Athletics"],
  Dexterity: ["Acrobatics", "Sleight of Hand", "Stealth"],
  Intelligence: ["Arcana", "History", "Investigation", "Nature", "Religion"],
  Wisdom: ["Animal Handling", "Insight", "Medicine", "Perception", "Survival"],
  Charisma: ["Deception", "Intimidation", "Performance", "Persuasion"],
} as const;

export type DD5EAbility = keyof typeof DD5E_ABILITY_TO_SKILLS;

export type DD5ESkill = (typeof DD5E_ABILITY_TO_SKILLS)[DD5EAbility][number];
