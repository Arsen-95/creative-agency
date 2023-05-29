import clsx from 'clsx';
import { Container, Heading } from '../ui';
import { data } from './data';

export const Blog = ({ className }) => {
  return (
    <section className={clsx('font-inter', className)}>
      <Container>
        <p className="mb-5 font-lora text-xl font-medium text-text">Блог</p>
        <Heading className="mb-[50px]" as="h4">
          Актуальные новости
        </Heading>
        <div className="flex gap-[30px]">
          {data.map((news) => (
            <NewsItem
              image={news.image}
              title={news.title}
              text={news.text}
              type={news.type}
              key={news.id}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const NewsItem = ({ image, title, text, type }) => {
  return (
    <a
      className="max-w-[30%] border-b border-b-[#E0E0E0] group hover:border-b-[#F276B6] pb-5"
      id="blog"
    >
      <img className="mb-2.5" src={image} />
      <div className="flex items-center gap-6 mb-3">
        <time
          className="text-text text-sm leading-[17px]"
          dateTime="2022-07-12"
        >
          12.07.2022
        </time>
        <p className="bg-primary bg-clip-text text-transparent text-sm">
          {type}
        </p>
      </div>
      <h5 className="mb-2.5 text-xl text-title leading-6 font-medium group-hover:text-secondary">
        {title}
      </h5>
      <p className="text-text">{text}</p>
    </a>
  );
};
