import img3 from "@/assets/about-us/idea.png";
import img1 from "@/assets/about-us/one.png";
import img4 from "@/assets/about-us/team-success.png";
import img2 from "@/assets/about-us/tennis.png";
import { AnimatedTooltipPreview } from "@/components/about-us/Tooltip";
import ValuesCard from "@/components/about-us/ValuesCard";
import SectionTitle from "../animation/SectionTitle";

function AboutUs() {
  return (
    <div className="bg-muted dark:bg-[#141414] my-10">
      <div className="container px-4 py-10">
        <div className="flex justify-center flex-col items-center text-center">
          <h3 className="text-3xl font-bold">
            <SectionTitle>
              <span className="text-2xl"> Our Core Values : </span>
              <p className="mt-2">
                Built for <span className="text-destructive">Champions,</span>{" "}
                By Champions
              </p>
            </SectionTitle>
          </h3>

          <p className="mt-3text-primary/80 text-center w-full px-4 md:px-0">
            Empowering athletes worldwide with gear designed by those who
            understand the spirit of competition firsthand.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
            <p>Meet Our Champions -</p>
            <div>
              <AnimatedTooltipPreview />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 relative before:absolute overflow-hidden before:w-1/2 before:h-full before:rotate-45 before:bg-destructive/30 before:left-1/2 before:-translate-x-1/2 before:blur-xl before:opacity-10">
          <ValuesCard
            bold={"Unbeatable"}
            text={"Quality"}
            img={img1}
            description={
              "Crafted for peak performance, our gear guarantees durability and reliability, helping athletes achieve their best."
            }
          />
          <ValuesCard
            bold={"Passionate "}
            text={"About Sports"}
            img={img2}
            description={
              "We live and breathe sports. Our mission is to fuel your passion with premium products tailored to every player’s needs."
            }
          />
          <ValuesCard
            bold={"Innovating"}
            text={"for the Future"}
            img={img3}
            description={
              "Stay ahead with our cutting-edge sports equipment, designed using the latest technologies to redefine what’s possible."
            }
          />
          <ValuesCard
            bold={"Championing "}
            text={"Excellence"}
            img={img4}
            description={
              "Empowering every athlete to achieve greatness with performance-driven gear crafted for success."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
