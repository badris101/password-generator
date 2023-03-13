interface IProps {
  label: string;
  value: boolean;
  setValue: (val: boolean) => void;
}

const Checkbox = ({ value, setValue, label }: IProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => setValue(e.target.checked)}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
