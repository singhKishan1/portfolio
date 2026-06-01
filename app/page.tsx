// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CmdPalette } from "@/components/shared/CmdPalette";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Philosophy } from "@/components/sections/Philosophy";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { GitHubDSA } from "@/components/sections/GitHubDSA";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export default function Portfolio() {
  const [cmdOpen, setCmdOpen] = useState(false);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCmdOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  return (
    <>
      <CmdPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />
      <Nav onCmd={() => setCmdOpen(true)} />
      <main>
        <Hero />
        <Projects />
        <Philosophy />
        <Experience />
        <Skills />
        <GitHubDSA />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
