import { getDMMF } from "@prisma/sdk";
import * as fs from "fs/promises";
import * as path from "path";

async function main() {
  const dmmf = await getDMMF({
    datamodelPath: path.join(__dirname, "prisma", "schema.prisma"),
  });

  await fs.writeFile("dmmf.json", JSON.stringify(dmmf, null, 2));
}

main();
