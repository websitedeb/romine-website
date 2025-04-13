import { Gradient } from "@/components/mainBody";
import Navbar from "@/components/navbar";
import Welcome from "@/components/welcome";
import What from "@/components/what";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Gradient />
      <What />
      <Welcome />
    </div>
  );
}
