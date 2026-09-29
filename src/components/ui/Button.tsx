type ButtonProps = {
  variant: 'primary' | 'accent';
  size?: 'md';
  children: React.ReactNode;
  className?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'>;

const variants = {
  primary: 'bg-brand text-white',
  accent: 'bg-accent text-ink',
} as const;

export function Button({
  variant,
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-pill font-medium leading-[1.2] transition-opacity hover:opacity-90 disabled:opacity-50 ${
        size === 'md' ? 'px-6 py-3 text-[18px]' : ''
      } ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
