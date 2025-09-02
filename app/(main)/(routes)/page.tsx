import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-indigo-600">ConnectHub</h1>
      <Button>Hello</Button>
      <UserButton/>
      <ModeToggle/>
    </div>
  );
}
