export const Button = ({ children, variant = "default", ...props }) => {
  const base = "px-4 py-2 rounded font-semibold";
  const variants = {
    default: "bg-blue-600 text-white",
    outline: "border border-blue-600 text-blue-600",
    destructive: "bg-red-600 text-white",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};
