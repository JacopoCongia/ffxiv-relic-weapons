import classNames from "classnames";

function Button({ children, className, check, uncheck, ...rest }) {
  const defaultClassNames = classNames(
    "h-[35px] w-[180px] rounded-[6px] hover:opacity-80 text-[15px]",
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
