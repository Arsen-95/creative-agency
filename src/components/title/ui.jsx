import { Button, Heading, Container, Links } from '../ui';

export const Title = () => {
  return (
    <section className="relative">
      <Container>
        <p className="w-fit py-[5px] px-2.5 mb-8 rounded-[5px] bg-white text-secondary font-medium text-xl leading-6">
          Команда опытных дизайнеров
        </p>
        <Heading
          as="h2"
          className="max-w-[600px] mb-[30px] text-title !text-[50px] !leading-[64px]"
        >
          Идеальная веб-студия{' '}
          <span className="text-white">уникальный дизайн</span>
        </Heading>
        <Button className="mb-8">Посмотреть работы</Button>
        <div className="flex gap-5">
          <Links />
        </div>
      </Container>
      <img
        className="pointer-events-none ball1 absolute left-[35%]"
        src="images/ball1.png"
      />
      <img
        className="pointer-events-none ball2 top-[-75%] absolute left-[45%]"
        src="images/ball2.png"
      />
    </section>
  );
};
