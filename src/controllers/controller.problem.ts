import { Request, Response } from "express";
import ProblemModel from "../models/model.problem";
import ProblemRepository from "../repository/repository.problems";

class ProblemController {
  async index(request: Request, response: Response) {
    try {
      const problemRepository = new ProblemRepository();

      const responseProblemRepository = await problemRepository.findAll();

      return response.status(200).json(responseProblemRepository);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async store(request: Request, response: Response) {
    try {
      const problemModel = new ProblemModel();

      const problemBody = request.body;
      const responseProblemModel = await problemModel.createNewProblem(
        problemBody
      );

      return response.status(200).json(responseProblemModel);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async reviewIndex(_: Request, response: Response) {
    try {
      const problemModel = new ProblemModel();

      const responseProblemModel = await problemModel.selectAllReviewProblems();

      return response.status(200).json(responseProblemModel);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async approvedIndex(_: Request, response: Response) {
    try {
      const problemModel = new ProblemModel();

      const responseProblemModel = await problemModel.selectAllApprovedProblems();

      return response.status(200).json(responseProblemModel);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async approveProblem(request: Request, response: Response) {
    try {
      const problemModel = new ProblemModel();

      const problemId = parseInt(request.params.id);

      const responseProblemModel = await problemModel.approveProblem(problemId);

      return response.status(200).json(responseProblemModel);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async refusedIndex(_: Request, response: Response) {
    try {
      const problemModel = new ProblemModel();

      const responseProblemModel = await problemModel.selectAllRefusedProblems();

      return response.status(200).json(responseProblemModel);
    } catch (error) {
      return response.status(400).json(error);
    }
  }

  async refuseProblem(request: Request, response: Response) {
    try {
      const problemId = parseInt(request.params.id);

      const problemModel = new ProblemModel();

      const responseProblemModel = await problemModel.refuseProblem(problemId);

      return response.status(200).json(responseProblemModel);
    } catch (error) {
      return response.status(400).json(error);
    }
  }
}

export default ProblemController;
