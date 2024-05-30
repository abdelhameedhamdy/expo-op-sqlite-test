import { open } from "@op-engineering/op-sqlite";

// import { openRemote } from "@op-engineering/op-sqlite";

const DB_NAME = "sampleDB";
const DB_CONFIG = {
  name: DB_NAME,
};

export async function createDB() {
  let db = open(DB_CONFIG);

  db.execute("DROP TABLE IF EXISTS Test;");
  db.execute("CREATE TABLE Test ( id INT PRIMARY KEY, name Text) STRICT;");

  db.close();
}

export async function loadExtension() {
  let largeDb = open(DB_CONFIG);
  largeDb.loadExtension("libcrsqlite_1", "sqlite3_crsqlite_init");
  const result = largeDb.execute(`select crsql_db_version() as crsql;`);
  console.log(JSON.stringify(result.rows?.item(0))); // expected toBe: {"crsql":0}
}

// export function testTursoDB() {
//   const remoteDb = openRemote({
//     url: process.env.EXPO_PUBLIC_TURSO_DATABASE_URL ?? "",
//     authToken: process.env.EXPO_PUBLIC_TURSO_AUTH_TOKEN ?? "",
//   });
//   const res = remoteDb.execute("SELECT 1 ;");
//   console.log(JSON.stringify(res)); // expected toBe: 1
// }
