import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from "@/components/Navbar";


export default function Layout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button
            onClick={() => signIn("google")}
            className="bg-white p-2 rounded-lg"
          >
            Login with google
          </button>
        </div>
      </div>
    );}

  
  return <div className="bg-blue-900 min-h-screen"> 
  <Navbar/>
  <div className="bg-white flex-grow mt-2 mr-2 mb-2 rounded-lg p-4">
 {children}</div>
  </div>;
}
