import DashboardBit from "@/component/dashboard/DashboardBit";
import { Bot, Flame, Gem, Glasses, Palette, Sliders } from "lucide-react";
import React from "react";

interface DashboardProps {}

const DashboardPage: React.FC<DashboardProps> = () => {
  const svgClassList =
    "w-20 h-20 group-hover:scale-90 transition-all ease-in-out";

  return (
    <div className="flex w-full justify-center">
      <main className="w-full max-w-5xl flex flex-wrap gap-10 justify-center">
        <DashboardBit
          color="bg-tint-yellow"
          label="Trending Color Palettes"
          href="/trending"
        >
          <Flame className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-red"
          label="Awesome Gradients"
          href="/gradients"
        >
          <Gem className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-emerald"
          label="Tailwind Palette Generator"
          href="/tpg"
        >
          <Sliders className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-fuchsia"
          label="Palette from Image [AI]"
          href="/pfi"
        >
          <Bot className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-teal"
          label="Color Palette from Color [AI]"
          href="/palette-from-color"
        >
          <Palette className={svgClassList} />
        </DashboardBit>

        <DashboardBit
          color="bg-tint-green"
          label="What Color Says!"
          href="/color-says"
        >
          <Glasses className={svgClassList} />
        </DashboardBit>
      </main>
    </div>
  );
};

export default DashboardPage;
