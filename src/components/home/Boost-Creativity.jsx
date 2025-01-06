import {
  Blocks,
  Bot,
  ChartPie,
  Film,
  MessageCircle,
  Settings2,
  Network,
  SearchCheck,
} from "lucide-react";

const features = [
  {
    icon: Settings2,
    title: "Flexible Browsing",
    description:
      "Easily navigate through categories, explore lists, or view detailed galleries of our products with seamless functionality.",
  },
  {
    icon: Blocks,
    title: "Efficient Inventory Oversight",
    description:
      "Stay on top of your equipment with tools designed for seamless organization and updates.",
  },
  {
    icon: Network,
    title: "Simplified Workflow",
    description:
      "Streamline your management experience, making daily operations smoother and more productive.",
  },
  {
    icon: SearchCheck,
    title: "Advanced Search Filters",
    description:
      "Locate equipment instantly with powerful filtering and search capabilities.",
  },
  {
    icon: ChartPie,
    title: "User-Friendly Dashboard",
    description:
      "Access a clean, visually appealing dashboard that simplifies your management tasks.",
  },
  {
    icon: MessageCircle,
    title: "Real-Time Updates",
    description:
      "Stay informed with live updates, ensuring you always have the latest information.",
  },
];

const BoostCreativity = () => {
  return (
    <div className=" flex items-center justify-center my-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">
          Empower Your <span className="text-destructive">Experience</span>
        </h2>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto px-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col border rounded-xl py-6 px-5"
            >
              <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                <feature.icon className="h-6 w-6" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                {feature.title}
              </span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BoostCreativity;
