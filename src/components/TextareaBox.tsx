import { useState } from "react";

interface TextareaBoxProps {
  placeholder: string;
}

export function TextareaBox({ placeholder }: TextareaBoxProps) {
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
      <textarea
        name={placeholder}
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
        id={placeholder}
        className="services__section__content__right__form__input__field services__section__content__right__form__input__field__textarea"
      />
    </div>
  );
}
