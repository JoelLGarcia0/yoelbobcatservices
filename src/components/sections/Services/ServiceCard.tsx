"use client";

import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="shrink-0 text-mainred">{icon}</div>
      <div>
        <h3 className="font-title text-darktext text-base font-bold">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-6 text-graytext">{description}</p>
      </div>
    </div>
  );
}
