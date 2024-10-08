import { useController } from "react-hook-form";
const Checkbox = ({ checked, children, control, name, value, ...rest }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input
        checked={checked}
        type="checkbox"
        name={name}
        {...field}
        value={value}
        id={name}
        hidden
        {...rest}
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div className="flex items-center justify-center w-full h-full transition-all bg-white rounded-md custom-checkbox-square">
          <svg
            width={12}
            height={10}
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7453 1.89733L3.93178 9.71087L0.254822 6.03391L1.17132 5.11741L3.93178 7.87137L10.8288 0.980835L11.7453 1.89733Z"
              fill="white"
            />
          </svg>
        </div>
        <label htmlFor={name} className="text-sm cursor-pointer">
          {children}
        </label>
      </div>
    </label>
  );
};
export default Checkbox;
