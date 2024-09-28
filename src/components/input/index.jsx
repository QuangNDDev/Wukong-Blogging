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
        className={`w-full text-[16px] p-5 ${
          children ? "pr-16" : ""
        } font-medium transition-all border border-transparent rounded-lg outline-none bg-grayLight placeholder-placeHolderColor focus:bg-white focus:border-borderColor`}
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
Input.propsType = {
  type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  control: PropTypes.object.isRequired,
  children: PropTypes.node,
};
export default Input;
