import { execSync } from "child_process";

const table = process.env.TABLE;

if (!table) {
  console.error(
    "❌ Please provide a table name like: TABLE=skills pnpm run seed"
  );
  process.exit(1);
}

execSync(`tsx drizzle/seed/tables/${table}.ts`, { stdio: "inherit" });
