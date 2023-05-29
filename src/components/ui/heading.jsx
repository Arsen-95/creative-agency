import clsx from 'clsx';

export const Heading = ({ as, children, className }) => {
  const Tag = as;

  return (
    <Tag
      className={clsx(
        'font-lora text-title text-4xl leading-[46px] font-bold',
        className
      )}
    >
      {children}
    </Tag>
  );
};
