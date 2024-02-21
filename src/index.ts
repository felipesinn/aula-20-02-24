import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const app = express();
app.use(express.json());
app.use(cors());


app.get('/criminosos', async (req, res) => {
  const criminosos = await prisma.criminoso.findMany();
  res.json({
    success: true,
    message: "Criminosos encontrados com sucesso",
    data: criminosos
  })
})

app.get("/crimes", async (req, res) => {
  const crimes = await prisma.crime.findMany();
  res.json({
    success: true,
    message: "Crimes encontrados com sucesso",
    data: crimes,
  });
});

app.post('/criminosos', async (req, res) => {
  const {nome, sobrenome, cpf} = req.body

  const novoCriminoso = await prisma.criminoso.create({
    data: {
      nome,
      sobrenome,
      cpf
    }
  })

  res.status(201).json({
    message: `${nome} cadastrado no sistema`,
    success: true,
    data: novoCriminoso
  })
})

app.get("/armas", async (req, res) => {
  const armas = await prisma.arma.findMany();
  res.json({
    success: true,
    message: "Armas encontradas com sucesso",
    data: armas,
  });
});

app.post("/crimes", async (req, res) => {
  const { tipoCrime, criminosoId } = req.body;

  const novoCrime = await prisma.crime.create({
    data: {
      tipoCrime,
      criminosoId
    },
  });

  res.status(201).json({
    message: `${tipoCrime} cadastrado no sistema`,
    success: true,
    data: novoCrime,
  });
});

app.post("/armas", async (req, res) => {
  const { nomeArma, serial, crimeId } = req.body;

  const novaArma = await prisma.arma.create({
    data: {
      nomeArma,
      serial,
      crimeId
    },
  });

  res.status(201).json({
    message: `${nomeArma} cadastrado no sistema`,
    success: true,
    data: novaArma,
  });
});

app.listen(3333, () => {
  console.log("Server running on port 3333.");
});



