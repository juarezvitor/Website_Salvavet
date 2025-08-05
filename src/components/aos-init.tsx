"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return null;
}
