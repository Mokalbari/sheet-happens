import { classFeatures } from "../../schema";

type ClassFeaturesInsert = typeof classFeatures.$inferInsert;

const classFeaturesSeedData: ClassFeaturesInsert[] = [
  {
    slug: "class-feature-1",
    defaultName: "Class Feature 1",
    defaultDescription: "Description 1",
    classId: 1,
    systemId: 1,
  },
];
