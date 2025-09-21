import {
  FileText,
  FileCheck2,
  ImagePlus,
  FileSearch2,
} from "lucide-react";

export const features = [
  {
    icon: <FileText className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Content Writer",
    description:
      "Craft well-structured articles and engaging blog posts tailored to your topic, tone, and audience using powerful LLMs.",
  },
  {
    icon: <FileCheck2 className="w-10 h-10 mb-4 text-primary" />,
    title: "Resume Review & Optimization",
    description:
      "Get expert-level feedback on your resume to improve clarity, formatting, and ATS compatibility.",
  },
  {
    icon: <ImagePlus className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Image Generator",
    description:
      "Turn simple text prompts into high-quality visuals using generative AI.",
  },
  {
    icon: <FileSearch2 className="w-10 h-10 mb-4 text-primary" />,
    title: "PDF Summarizer",
    description:
      "Upload long PDFs and get concise, meaningful summaries in seconds.",
  },
];
