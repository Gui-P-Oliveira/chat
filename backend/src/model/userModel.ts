require('../../database.ts')

const createUser = async()=> {
    await prisma.user.create({
        data: {
          name: 'Alice',
          connected: true
        }}
)}