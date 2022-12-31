import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const types = ["Attachment", "Text", "Choice", "Date"];
  const questionTypePromises = types.map((type) => {
    const param = { name: type };
    return prisma.questionType.upsert({
      where: param,
      create: param,
      update: {},
    });
  });

  console.log(await Promise.all(questionTypePromises));
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
