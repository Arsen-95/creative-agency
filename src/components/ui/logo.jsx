import clsx from 'clsx';

export const Logo = ({ className, light }) => {
  return (
    <a
      href="/"
      className={clsx('flex gap-2.5 items-center max-w-fit', className, {
        'cursor-pointer': light,
      })}
    >
      <img className="w-10 h-10" src="icons/logo.svg" alt="logo" />
      <h1
        className={clsx('text-[15px] font-medium leading-[18px] w-min', {
          'text-white': light,
        })}
      >
        <span className={clsx('text-secondary', { 'text-white': light })}>
          Creative
        </span>{' '}
        agency
      </h1>
    </a>
  );
};
