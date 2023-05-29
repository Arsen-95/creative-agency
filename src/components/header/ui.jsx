import clsx from 'clsx';

import { Button, Logo, Container } from '../ui';

const navList = [
  { text: 'Услуги', href: '#services', id: 0 },
  { text: 'Как мы работаем', href: '#steps', id: 1 },
  { text: 'Свяжитесь с нами', href: '#connectUs', id: 2 },
  { text: 'Блог', href: '#blog', id: 3 },
];

export const Header = ({ className }) => {
  return (
    <header className={clsx('font-inter py-9', className)}>
      <Container>
        <div className="flex items-center justify-between gap-5">
          <Logo />
          <div className="flex items-center gap-5">
            <nav>
              <ul className="flex gap-6">
                {navList.map((navItem) => (
                  <NavItem
                    key={navItem.id}
                    href={navItem.href}
                    text={navItem.text}
                  />
                ))}
              </ul>
            </nav>
            <Button type="ghost">Заказать звонок</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

const NavItem = ({ text, href }) => {
  return (
    <li className="p-2">
      <a
        className="font-inter text-title leading-[19px] font-medium hover:text-secondary custom-cursor"
        href={href}
      >
        {text}
      </a>
    </li>
  );
};
