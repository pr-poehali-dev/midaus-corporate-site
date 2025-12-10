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
        <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          обработку персональных данных
        </a>
        {' '}в соответствии с Федеральным законом №152-ФЗ и{' '}
        <a href="/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
          Политикой конфиденциальности
        </a>
      </label>
    </div>
  );
}