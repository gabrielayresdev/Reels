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
            soundtrackName: "Som Original",
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
            soundtrackName: "Som Original",

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
      id: "655112b9-e785-49df-a05e-9b0e525ac945",
      name: "DoctorWho?",
      phone: "923121231",
      email: "doctorwho@gmail.com",
      hash: "cfa81794715412b3a2a3409e27c8389736932305760f0d5b7547ced2f7e3ad64739daaac2b3a2b6377f24c3e0c15de2a9f22b74b0cabb182fee97d3dfc09be86",
      salt: "8778772c6e170a52d08d24c1d04873aee833c0563e625c39d3eed2f6c7ddaf69",
      adm: false,
      posts: {
        create: [
          {
            title: "s3e10 #doctorwho #weepingangel",
            soundtrackUrl:
              "https://open.spotify.com/intl-pt/track/0cWPe8mPRyLMxxe94eRVzs",
            soundtrackName: "In the House - In a Heartbeat",
            file: {
              create: {
                filename: "93223d207db997556c16e2e97c8178d1",
                originalname: "Download (13).mp4",
                size: 11278275,
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
      id: "57cf6ddf-524a-4b69-9f12-05b184f92c3d",
      name: "Supercombooficial",
      phone: "962317772",
      email: "supercombooficial@gmail.com",
      hash: "f704ae0c0ae9ec7692afb6333080ce99d2b8a6b37d93c1f18cc96f82d2b9a36e05ba7506e97cb19d3c59fc5b23f67554acecfb9c51b88c90949423a3058571b5",
      salt: "0afa1eda8371d158d0aca82222aee57de31adcd18da8e7609a8a8ffe996e2b0c",
      adm: false,
      posts: {
        create: [
          {
            title:
              "O clipe tá no ar!!!!!!!! Corre pro YouTube assistir nosso clipe de “Aos Poucos”. Vem! #SupercomboAosPoucos",
            soundtrackUrl:
              "https://open.spotify.com/track/6dPazdZXKwUGrke1wCXPe2",
            soundtrackName: "Aos Poucos",
            file: {
              create: {
                filename: "0bd8dce122a180fb6d9c8dd773f8f999",
                originalname: "Download (8).mp4",
                size: 4757417,
                mimetype: "video/mp4",
                duration: 0,
              },
            },
          },
          {
            title:
              "Leo com sua guita ensaiando a fav dele do disco Rogério. Quem foi no show especial? #supercombo #supercomborogerio #reolamos #aslanguitars",
            soundtrackUrl:
              "https://open.spotify.com/intl-pt/track/3hyCEFiDoql12BoL3huX07",
            soundtrackName: "Eutanásia",
            file: {
              create: {
                filename: "fd58057a762391dd703ed99477fa0d73",
                originalname: "Download (7).mp4",
                size: 27447495,
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
