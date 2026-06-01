// app/page.tsx

import { Metadata } from "next";
import { DashboardClient } from "./dashboard/DashboardClient";

export const metadata: Metadata = {
  title: "Portfolio - Kishan Singh",
  description:
    "Welcome to my portfolio! I'm a software engineer with a passion for building innovative solutions. Explore my projects, experience, and skills.",
};

export default function Portfolio() {
  return <DashboardClient />;
}
