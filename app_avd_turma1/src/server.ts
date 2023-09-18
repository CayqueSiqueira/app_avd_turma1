import fastify from 'fastify';

import { PrismaClient } from '@prisma/client';

const app = fastify()

const prisma = new PrismaClient();

 app.get('/cars', async () => {
     const cars = await prisma.cars.findMany()
     return cars;
 })

app.listen({
    port: 3333,
}).then(() => {
    console.log('Server is running on port 3333')
})