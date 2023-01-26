import { cars as Cars } from "@prisma/client";
import { prisma } from "../config/database.js";

async function getCars(): Promise<Cars[]> {
  const data = await prisma.cars.findMany();
  return data;
}

async function getCar(id: number): Promise<Cars> {
  const data = await prisma.cars.findUnique({
    where: {
      id,
    },
  });

  return data;
}

async function getCarWithLicensePlate(licensePlate: string): Promise<Cars> {
  const data = await prisma.cars.findUnique({
    where: {
      licensePlate,
    },
  });
  return data;
}

async function createCar(
  model: string,
  licensePlate: string,
  year: string,
  color: string
): Promise<void> {
  await prisma.cars.create({
    data: {
      model,
      licensePlate,
      year,
      color,
    },
  });
}

async function deleteCar(id: number): Promise<void> {
  await prisma.cars.delete({
    where: {
      id,
    },
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
};

export default carRepository;
