import clsx from 'clsx';
import { Container } from '../ui';

const data = [
  {
    icon: '/icons/rocket.svg',
    title: 'Интернет-маркетинг',
    description:
      'Практика использования всех аспектов традиционного маркетинга в Интернете, с целью продажи продукта.',
    className: 'bg-[url("/images/ellipse1.png")] bg-no-repeat bg-right',
  },
  {
    icon: '/icons/developing.svg',
    title: 'Разработка',
    description:
      'Основными этапами этого процесса являются такие мероприятия, как Веб-дизайн, вёрстка страниц сайта.',
    className: 'bg-[url("/images/ellipse2.png")] bg-no-repeat bg-bottom',
  },
  {
    icon: '/icons/design.svg',
    title: 'Веб-дизайн',
    description:
      'Отрасль веб-разработки и разновидность дизайна, в задачи которой входит проектирование интерфейсов.',

    className: 'bg-[url("/images/ellipse3.png")] bg-no-repeat bg-left',
  },
];

export const Service = ({ className }) => {
  return (
    <div className={className} id="services">
      <Container>
        <div className="flex justify-center gap-8 font-inter ">
          {data.map((serviceItem) => (
            <ServiceItem
              icon={serviceItem.icon}
              title={serviceItem.title}
              description={serviceItem.description}
              className={serviceItem.className}
              key={serviceItem.title}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

const ServiceItem = ({ icon, title, description, className }) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-[15px] p-10 bg-title w-[30%] rounded-[10px] shadow-title',
        className
      )}
    >
      <img className="w-[90px] h-[90px]" src={icon} alt={title} />
      <p className="text-xl text-white leading-6 font-medium">{title}</p>
      <p className="text-elements leading-[19px]">{description}</p>
      <button className="flex items-center gap-2.5 bg-primary bg-clip-text text-transparent w-max font-medium text-[15px] leading-[18px]">
        Подробнее <img src="/icons/arrow-right.svg" />
      </button>
    </div>
  );
};
