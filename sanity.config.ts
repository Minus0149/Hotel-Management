import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
	name: "default",
	title: "hotelz",

	projectId: "y09dy9aa",
	dataset: "production",

	basePath: "/studio",

	plugins: [deskTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
});
