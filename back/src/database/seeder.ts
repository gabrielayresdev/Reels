import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      id: "17f06e40-d63c-495a-b7c6-2ee648cf5e94",
      name: "Furq",
      phone: "962137822",
      email: "tapafurq12@gmail.com",
      hash: "997e9ac7b42beef0109a177ec7354b8d4b1d88a9ae4f95347a4b238901e92920f788b9ce168d1f9b8e538020debba50cbf657ea89a6b98f300d16cf39803b53d",
      salt: "7102878504bc09ac25886ee4875dadaffc8790e5969baec10c52523f35afda0e",
      adm: false,
      posts: {
        create: [
          {
            title:
              "esse tapa eu queria tomar😳#valorant #valorantgaming #valorantbrasil #valorantclips",
            file: {
              create: {
                filename: "5c985865ccee7d52c7b6211be44b162e",
                originalname: "Download (5).mp4",
                size: 5253510,
                mimetype: "video/mp4",
                duration: 0,
              },
            },
          },
          {
            title:
              "tapa pipa #valorant #valorantbr #valorantclips #valorantbrasil",
            file: {
              create: {
                filename: "6fdd61c4e3506bb277dd15127d524a62",
                originalname: "Download (2).mp4",
                size: 10771983,
                mimetype: "video/mp4",
                duration: 0,
              },
            },
          },
        ],
      },
    },
  });
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
