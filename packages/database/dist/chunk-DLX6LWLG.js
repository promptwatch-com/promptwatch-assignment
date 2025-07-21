// src/client.ts
import { PrismaClient } from "@prisma/client";
export * from "@prisma/client";
var prismaClientSingleton = () => {
  return new PrismaClient();
};
var prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

export {
  PrismaClient,
  prisma
};
