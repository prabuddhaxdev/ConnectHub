import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600">ConnectHub</h1>
      <UserButton />
    </div>
  );
}
