import { Request, Response } from "express";
import AdministratorInterface from "../interfaces/controllers/interface.administrator";
import AdministratorModel from "../models/model.administrator";
import AdministratorRepository from "../repository/repository.adminisrator";

class AdministratorController {
  static administratorRepository: AdministratorRepository =
    new AdministratorRepository();

  async show(request: Request, response: Response) {
    try {
      const id = request.params.id;

      const administratorRepository = new AdministratorRepository();

      const repositoryResponse = await administratorRepository.select(id);

      return response.status(200).json(repositoryResponse);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async index(request: Request, response: Response) {
    try {
      const administratorRepository = new AdministratorRepository();

      const repositoryResponse = await administratorRepository.selectAll();

      response.status(200).json(repositoryResponse);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async store(request: Request, response: Response) {
    try {
      const body: AdministratorInterface = request.body;

      const administratorRepository = new AdministratorRepository();

      const repositoryResponse = await administratorRepository.create(body);

      return response.status(200).json(repositoryResponse);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async update(request: Request, response: Response) {
    try {
      const body: AdministratorInterface = request.body;
      let id = request.params.id;

      const adminisratorRepository = new AdministratorRepository();

      const repositoryResponse = await adminisratorRepository.update(id, body);

      return response.status(200).json(repositoryResponse);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      let id = request.params.id;

      const adminisratorRepository = new AdministratorRepository();

      const repositoryResponse = await adminisratorRepository.delete(id);

      return response.status(200).json(repositoryResponse);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async login(request: Request, response: Response) {
    try {
      const body = request.body;
      const adminisratorModel = new AdministratorModel();

      const token = await adminisratorModel.auth(body.email, body.password);

      return response.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return response.status(400).json(error);
    }
  }
}

export default AdministratorController;
