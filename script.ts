import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // ... you will write your Prisma Client queries here
  const result = await prisma.user.create({
    data: {
      name: 'Alice',
      email: '5@qq.com ',
      posts: {
        create: {
          title: 'A great new Post',
          content: 'This is a great new Post',
        },
      },
    },
  });
  console.log(result);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
