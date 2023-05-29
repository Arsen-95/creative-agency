import { Logo, Container, Links } from '../ui';
import { data } from './data';

export const Footer = () => {
  return (
    <footer className="bg-title">
      <Container>
        <div className="py-[50px]">
          <Logo className="flex-col mb-[50px] mx-auto" light />
          <nav className="flex justify-center gap-[50px] mb-[50px]">
            {data.map((link, index) => (
              <a
                className="font-medium text-white hover:bg-primary hover:bg-clip-text hover:text-transparent cursor-pointer"
                key={index}
                href="#"
              >
                {link}
              </a>
            ))}
          </nav>
          <Links className="justify-center" />
        </div>
      </Container>
    </footer>
  );
};
