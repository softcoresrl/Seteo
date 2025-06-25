const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");

const { PrismaClient } = require("@prisma/client") 
const prisma = new PrismaClient();

async function getAll(){
    return await prisma.weather.findMany();
}
async function create(){
    //TODO
}
