"use client";

import { ReactNode } from "react";
import {
  Ruler,
  Hammer,
  Wrench,
  Drill,
  Truck,
  ClipboardList,
  Trash2,
  Construction,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Driveway Leveling",
    description:
      "We deliver precise driveway leveling to create a smooth, durable surface that stands the test of time.",
    icon: <Ruler className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Construction Services",
    description:
      "From small-scale projects to major builds, we offer complete construction solutions with high standards.",
    icon: <Hammer className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Fence Hole Drilling",
    description:
      "Accurate fence post hole drilling for secure installations—wood, metal, or vinyl.",
    icon: <Drill className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Infrastructure Construction",
    description:
      "Roads, drainage, and utility installations built for long-term performance and compliance.",
    icon: <Construction className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Material Delivery",
    description:
      "Gravel, sand, concrete, fill dirt, and more—delivered to your job site on schedule.",
    icon: <Truck className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Site Management",
    description:
      "Professional supervision to keep your project safe, organized, and on time.",
    icon: <ClipboardList className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Special Projects",
    description:
      "Custom jobs that require specialized equipment and expertise—if you can envision it, we can build it.",
    icon: <Wrench className=" h-10 w-10" strokeWidth={1.75} />,
  },
  {
    title: "Sidewalk Demolition",
    description:
      "Safe, efficient demolition and removal to prepare for repairs or new construction.",
    icon: <Trash2 className=" h-10 w-10" strokeWidth={1.75} />,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-transparent">
      {/* Outer white panel */}
      <div className="mx-auto max-w-content rounded-md bg-white px-6 py-10 shadow-sm ring-1 ring-black/5 sm:px-10 sm:py-12">
        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
