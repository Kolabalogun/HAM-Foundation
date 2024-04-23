type ButtonProp = {
  title: string;
  iconRight?: string | JSX.Element;
  iconLeft?: string | JSX.Element;
  color?: string;
  func?: () => void;
  disabled?: boolean;
  size?: string;
};

const Button: React.FC<ButtonProp> = ({
  title,
  iconRight,
  iconLeft,
  func,
  color,
  disabled,
  size,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        func && func();
      }}
      className={`  flex items-center justify-center gap-3 rounded-lg   px-4 py-3 font-medium ${
        size === "sm" ? "px-4 py-3 " : "px-5 py-5"
      } ${
        color === "plain"
          ? " px-9  bg-transparent border-white border-2  text-[#fff] "
          : "   bg-primary text-white  hover:bg-[#da611b] "
      }  `}
    >
      {iconLeft && iconLeft}
      <p className="text-inherit">{title}</p>
      {iconRight && iconRight}
    </button>
  );
};

export default Button;
