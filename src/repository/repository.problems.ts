import prismaClient from "../database/database.prisma-client";
import ProblemRepositoryInterface from "../interfaces/repository/interface.problem";

class ProblemRepository {
  async findAll() {
    try {
      const response = await prismaClient.problems.findMany({
        include: {
          fk_status: {
            select: {
              problem_status_label: true,
            },
          },
        },
      });

      //   const response = await prismaClient.$queryRaw(
      //     Prisma.sql`SELECT
      //     problem_description AS 'Descrição',
      //     problem_why AS 'Justificativa',
      //     pbst.problem_status_label AS 'Status'
      // FROM problem_push.problems AS pb
      //     JOIN problem_push.problem_status AS pbst
      //         ON pbst.problem_status_id = pb.problem_status_id;`
      //   );

      return response;
    } catch (error) {
      console.log(error);
      throw {
        message: "Não foi possivel obter a lista de problemas cadastrados.",
      };
    }
  }

  async create(problemBody: ProblemRepositoryInterface["problem_new"]) {
    try {
      await prismaClient.problems.create({
        data: problemBody,
      });

      return {
        message: "Problema cadastrado com sucesso.",
      };
    } catch (error) {
      console.log(error);
      throw {
        message: "Não foi possivel inserir o problema no banco de dados.",
      };
    }
  }

  async update(
    problemId: number,
    problemBody: ProblemRepositoryInterface["problem_update"]
  ) {
    try {
      await prismaClient.problems.update({
        data: problemBody,
        where: {
          problem_id: problemId,
        },
      });

      return {
        message: "Problema alterado com sucesso.",
      };
    } catch (error) {
      throw {
        message: "Não foi possivel alterar o problema.",
      };
    }
  }
}

export default ProblemRepository;
