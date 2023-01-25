import { prisma } from "../src/config/database.js";
import { cars } from "../src/config/data.js";

async function main() {
  await prisma.cars.createMany({
    data: cars,
  });
  console.log("Created cars 🌱");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
