import type { SchemaTypeDefinition } from "sanity";
import { homeSingleton } from "./homeSingleton";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homeSingleton],
};