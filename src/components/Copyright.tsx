export default function Copyright() {
  const launchYear = 2024;
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <p className="text-center">
      &copy; {launchYear} {launchYear !== currentYear ? `- ${currentYear}` : ""}{" "}
      Spring.fun. All rights reserved.
    </p>
  );
}
