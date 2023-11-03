const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const connect = async (tried = 1) => {
    try {
        await prisma.$connect()
    } catch (e) {      
      setTimeout(() => connect(tried + 1), 3000 ** tried);
    }
};
  
connect();
