interface MenuProps {
  children: React.ReactNode;
  className?: string | null;
}
export default function Menu({ children, className }: MenuProps) {
  return <div className={`popup-menu ${className}`}>{children}</div>;
}
