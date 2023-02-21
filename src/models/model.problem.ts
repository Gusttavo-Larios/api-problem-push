import prismaClient from "../database/database.prisma-client";
import ProblemModelInterface from "../interfaces/models/interface.problem";
import ProblemRepository from "../repository/repository.problems";

class ProblemModel {
  async createNewProblem(problemBody: ProblemModelInterface["problem_new"]) {
    try {
      const problemRepository = new ProblemRepository();
      const response = await problemRepository.create({
        ...problemBody,
        problem_status_id: 1,
      });

      return response;
    } catch (error) {
      throw error;
    }
  }

  async selectAllReviewProblems() {
    try {
      const response = prismaClient.problems.findMany({
        where: {
          problem_status_id: 1,
        },
      });

      return response;
    } catch (error) {
      return {
        message: "Não foi possivel obter a lisa de problemas.",
      };
    }
  }

  async selectAllApprovedProblems() {
    try {
      // const problemRepository = new ProblemRepository()
      // const response = problemRepository.findAll()
      const response = prismaClient.problems.findMany({
        where: {
          problem_status_id: 2,
        },
      });

      return response;
    } catch (error) {
      return {
        message: "Não foi possivel obter a lisa de problemas.",
      };
    }
  }

  async approveProblem(problemId: number) {
    try {
      const problemRepository = new ProblemRepository();
      await problemRepository.update(problemId, {
        problem_status_id: 2,
      });
      return {
        message: "Problema aprovado.",
      };
    } catch (error) {
      throw error;
    }
  }

  async selectAllRefusedProblems() {
    try {
      // const problemRepository = new ProblemRepository()
      // const response = problemRepository.findAll()
      const response = prismaClient.problems.findMany({
        where: {
          problem_status_id: 3,
        },
      });

      return response;
    } catch (error) {
      return {
        message: "Não foi possivel obter a lisa de problemas.",
      };
    }
  }

  async refuseProblem(problemId: number) {
    try {
      const problemRepository = new ProblemRepository();
      await problemRepository.update(problemId, {
        problem_status_id: 3,
      });
      return {
        message: "Problema recusado.",
      };
    } catch (error) {
      throw error;
    }
  }
}

export default ProblemModel;
