export function classNames(
  ...args: Array<string | Record<string, boolean> | undefined | null>
): string {
  return args
    .flatMap((arg) => {
      if (typeof arg === "string") {
        return arg; // Static class name
      } else if (typeof arg === "object" && arg !== null) {
        // For objects, include the keys where the value is true
        return Object.keys(arg).filter((key) => arg[key]);
      }
      return [];
    })
    .join(" ");
}
