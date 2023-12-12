export function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div className="form-group">
      <label>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange?.(+e.currentTarget.value)}
      >
        {options.map((el) => (
          <option key={el.id} value={el.id} selected={value === el.id}>
            {el.label}
          </option>
        ))}
      </select>
    </div>
  );
}

type SelectProps = {
  label: string;
  value?: number;
  options: { label: string; id: number }[];
  onChange?: (value: number) => void;
};
