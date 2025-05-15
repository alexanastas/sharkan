interface BadgeProps {
  children?: any;
  shown: boolean|string;
  bg: string;
  title?: string;
  color: string;
}

function Badge({ children, shown, title, bg, color }: BadgeProps) {
  if (!shown) {
    return null;
  }
  return (
    <div
      className={`w-8 h-8 bg-${bg} rounded-lg text-${color} flex justify-center items-center`}
      title={title}
    >
      {children}
    </div>
  );
}

export default Badge;
