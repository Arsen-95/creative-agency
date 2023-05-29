import clsx from 'clsx';

export const Button = ({ children, type = 'primary', className }) => {
  return (
    <button
      className={clsx(
        'rounded-full py-[15px] px-6 text-[15px] leading-[18px] font-medium',
        className,
        {
          'bg-primary text-white': type === 'primary',
          'text-secondary border border-image': type === 'ghost',
        }
      )}
    >
      {children}
    </button>
  );
};
