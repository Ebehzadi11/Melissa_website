import type { Metadata } from "next";
import { GalleryPage } from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Gallery | Melissa Oliveira",
  description:
    "Full photo gallery of Melissa Oliveira — commercial model and UGC creator. Campaigns, editorials and original content.",
};

export default function Portfolio() {
  return <GalleryPage />;
}
