"use client";

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Schema & Structure
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  projectId: "h4kl8499", // ضع هنا معرف المشروع مباشرة
  dataset: "production", // ضع هنا اسم الـ dataset مباشرة
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({ structure }),

    visionTool({ defaultApiVersion: "2024-01-01" }), // أو apiVersion ثابت
  ],
});
