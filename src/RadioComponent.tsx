const RadioComponent = ({
  option,
  onChange,
  value,
  ...rest
}: any) => {
  return (
    <label key={option.id} htmlFor="radio">
      <input
        // onClick={onClick}
        {...rest}
        className="radio"
        type="radio"
        onChange={onChange}
        value={value}
      />
      {option.value}
    </label>
  );
};

export default RadioComponent;
