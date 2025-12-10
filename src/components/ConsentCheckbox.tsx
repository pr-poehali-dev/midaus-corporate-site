import { Link } from 'react-router-dom';

interface ConsentCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  id?: string;
}

export default function ConsentCheckbox({ checked, onChange, id = 'consent' }: ConsentCheckboxProps) {
  return (
    <div className="flex items-start gap-3 p-4 border border-border rounded-lg bg-secondary/30">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 cursor-pointer"
        required
      />
      <label htmlFor={id} className="text-sm text-muted-foreground cursor-pointer flex-1">
        Я согласен на{' '}
        <Link to="/privacy" className="text-primary hover:underline" target="_blank">
          обработку персональных данных
        </Link>
        {' '}в соответствии с Федеральным законом №152-ФЗ и{' '}
        <Link to="/privacy" className="text-primary hover:underline" target="_blank">
          Политикой конфиденциальности
        </Link>
      </label>
    </div>
  );
}
