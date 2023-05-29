import clsx from 'clsx';
import { BeIcon, TgIcon, VkIcon } from '../../../public/icons';

export const Links = ({ light, className }) => {
  return (
    <div className={clsx('flex gap-5', className)}>
      <a className={clsx({ 'cursor-pointer': !light })}>
        <VkIcon
          className={clsx('fill-[current-color] hover:fill-secondary', {
            'fill-white': !light,
          })}
        />
      </a>
      <a className={clsx({ 'cursor-pointer': !light })}>
        <TgIcon
          className={clsx('fill-[current-color] hover:fill-secondary', {
            'fill-white': !light,
          })}
        />
      </a>
      <a className={clsx({ 'cursor-pointer': !light })}>
        <BeIcon
          className={clsx('fill-[current-color] hover:fill-secondary', {
            'fill-white': !light,
          })}
        />
      </a>
    </div>
  );
};
