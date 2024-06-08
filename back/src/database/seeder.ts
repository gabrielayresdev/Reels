import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
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
  await prisma.user.create({
    data: {
      id: "ba24bc28-8900-4180-b574-3d548b49adff",
      name: "ADMIN",
      phone: "999999999",
      email: "admin@gmail.com",
      hash: "9be7bac5034814687bb106ee0dd3c33ff2932e4f635847f49ed625c22bbe01650fb7596fd3b23c362b87151b8042d767ca489e2946aa018bae4b4e8ed7ef1c43",
      salt: "2b9d5dcbe43cfe2213416f88bb7ae62c7880b1224f290d11403dcc9bce22f7eb",
      adm: true,
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
