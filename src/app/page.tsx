import Gradients from "@/components/Gradients";
import Heading from "@/components/Heading";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-[#151515] bg-container relative overflow-hidden min-h-screen">
      <Gradients />
      <Navbar />
      <Heading />
    </div>
  );
}
