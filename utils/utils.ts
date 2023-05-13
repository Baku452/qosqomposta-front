export function extractFields(dataset: any) {
  const result = [];

  for (const obj of dataset) {
    const { fields } = obj;
    const { nombdep, capital } = fields;

    result.push({ nombdep, capital });
  }

  return result;
}
