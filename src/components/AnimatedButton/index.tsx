import clsx from "clsx";

export type AnimatedButtonProps = {
  isAdded: boolean;
  onClick: () => void;
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  isAdded,
  onClick,
}) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={clsx(
        "btn text-white cursor-pointer",
        isAdded
          ? "bg-green-500 animate-wiggle pointer-events-none"
          : "btn-primary",
        isAdded && "pointer-events-none"
      )}
      style={{
        animation: isAdded ? "wiggle 0.5s ease-in-out" : "none",
      }}
    >
      {isAdded ? "Yaaaaay!" : "Add to cart"}
    </button>
  );
};
