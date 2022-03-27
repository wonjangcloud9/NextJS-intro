import { useRouter } from "next/router";
import NavBar from "../components/NavBar";

export default function Potato() {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <h1>About</h1>
    </div>
  );
}
