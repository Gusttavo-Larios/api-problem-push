export default interface ProblemModelInterface {
  problem_new: {
    problem_description: string;
    problem_why: string;
  };
  problem_update: {
    problem_description?: string;
    problem_why?: string;
    problem_status_id?: number;
  };
}
