import { TypeOf, array, object, string } from 'zod';

const attributeSchema = object({
  documentId: string(),
  name: string(),
});

const variantSchema = object({
  name: string(),
  selectAttributeId: string().min(1),
  attributes: array(attributeSchema),
});

export const selectVariantSchema = object({
  variants: array(variantSchema),
});

export type SelectVariantSchemaType = TypeOf<typeof selectVariantSchema>;
