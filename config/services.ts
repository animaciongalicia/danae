import type { Service } from "@/types";
import {
  operationalSolutionsGroup,
  talentSolutionsGroup,
} from "@/content/solutions";

// Flat service list derived from the solution groups, used by the contact
// form select and the contact API to resolve a service title from its id.
export const services: Service[] = [
  ...talentSolutionsGroup.items,
  ...operationalSolutionsGroup.items,
].map(({ id, title }) => ({ id, title }));

export const serviceGroups = [
  { id: talentSolutionsGroup.id, title: talentSolutionsGroup.title, items: talentSolutionsGroup.items.map(({ id, title }) => ({ id, title })) },
  { id: operationalSolutionsGroup.id, title: operationalSolutionsGroup.title, items: operationalSolutionsGroup.items.map(({ id, title }) => ({ id, title })) },
];
