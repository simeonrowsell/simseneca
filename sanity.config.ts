import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./sanity/schemas";
import { HomeIcon } from "@sanity/icons";
import { singletonListItem } from "./sanity/structure/helpers"

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["home"]);

export default defineConfig({
  name: 'default',
  title: 'Sim Seneca',

  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton types
            singletonListItem(S, "home", "Home").icon(HomeIcon),
            // Regular document types
            // S.documentTypeListItem("blogPost").title("Blog Posts"),
          ]),
    }),
  ],

  schema: {
    types: schema.types,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),

  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },

});