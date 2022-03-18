export interface ClassMap {
  [index: string]: boolean;
}

export function getClassnames(classMap: ClassMap): string {
  return Object.keys(classMap)
    .filter((className) => classMap[className])
    .join(" ");
}
