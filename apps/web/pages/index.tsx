import { trpc } from "../utils/trpc";

export default function Home() {
  const { data: message, isLoading } = trpc.hello.world.useQuery();

  return (
    <div>
      <h1>Hello World</h1>
      <p>Connected to backend via tRPC! 🚀</p>
      {isLoading ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
}
