import classNames from "classnames";

function Button({ children, className, check, uncheck, ...rest }) {
  const defaultClassNames = classNames(
    "h-[40px] w-[200px] rounded-[6px] hover:opacity-80",
    { "bg-green-700": check, "bg-red-900": uncheck }
  );

  return (
    <button
      {...rest}
      className={defaultClassNames}
    >
      {children}
    </button>
  );
}

export default Button;
