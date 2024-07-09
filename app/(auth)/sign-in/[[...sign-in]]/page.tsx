import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <main className="flex flex-center h-screen w-full ">
        <SignIn />;
      
      </main>
  )

}