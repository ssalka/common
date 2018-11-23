export function formatJSON(value: any, tabSize: number = 2): string {
  return JSON.stringify(value, undefined, tabSize);
}
