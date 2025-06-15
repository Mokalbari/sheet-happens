import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),

  avatarUrl: text("avatar_url"),
  isActive: boolean("is_active").notNull().default(true),

  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});
