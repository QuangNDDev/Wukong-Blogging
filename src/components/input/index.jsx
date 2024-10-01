import { useController } from "react-hook-form";
import PropTypes from "prop-types";

function Input({ type = "text", name, placeholder, control, children }) {
  const { field } = useController({
    defaultValue: "",
    control,
    name,
  });

  return (
    <div className="relative w-full">
      <input
        className={`w-full text-[16px] p-5 border border-gray-300 rounded-lg outline-none transition-all duration-200 font-medium bg-grayLight placeholder-placeHolderColor focus:outline-none focus:ring-2 focus:bg-white focus:border-borderColor ${
          children ? "pr-16" : ""
        }`}
        type={type}
        id={name}
        placeholder={placeholder}
        {...field}
      />
      {children && (
        <div className="absolute transform -translate-y-1/2 cursor-pointer right-5 top-1/2">
          {children}
        </div>
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "password"]),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default Input;
