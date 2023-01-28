import { useState } from "react";

interface InputBoxProps {
  placeholder: string;
  type: string;
}

export function InputBox({ placeholder, type, ...props }: InputBoxProps) {
  const [onFucus, setOnFocus] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="services__section__content__right__form__input">
      <label
        className="services__section__content__right__form__input__label"
        style={
          value !== ""
            ? { top: -10, zIndex: 1 }
            : onFucus
            ? { top: -10, zIndex: 1 }
            : null
        }
        htmlFor={placeholder}
      >
        {placeholder}
      </label>
      <input
        type={type}
        id={placeholder}
        value={value}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="services__section__content__right__form__input__field"
        {...props}
      />
    </div>
  );
}
