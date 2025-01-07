import { FormControl, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui';

export type OptionType = {
  label: string;
  value: string;
};

type Props = {
  options?: OptionType[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  className?: string;
};

const SelectBox = ({ value, onChange, options = [], placeholder, className }: Props) => {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <FormControl>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map((op) => (
          <SelectItem value={op.value} key={op.value}>
            {op.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SelectBox };
