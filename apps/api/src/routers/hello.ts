import { router, publicProcedure } from "../trpc";

export const helloRouter = router({
  world: publicProcedure.query(async () => {
    return "Hello World from the user router!";
  }),
});
