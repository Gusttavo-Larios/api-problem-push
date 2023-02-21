export default interface ProblemRepositoryInterface {
  problem_new: {
    problem_description: string;
    problem_why: string;
    problem_status_id: number;
  };
  problem_update: {
    problem_description?: string;
    problem_why?: string;
    problem_status_id?: number;
  };
}
