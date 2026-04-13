interface DividerProps {
  className?: string;
}

const Divider = ({ className = "" }: DividerProps) => {
  return (
    <div 
      className={`h-px w-full bg-zinc-200 dark:bg-zinc-800 my-4 ${className}`} 
      role="separator"
    />
  );
};

export default Divider;