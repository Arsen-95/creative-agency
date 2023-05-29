import { Container, Heading } from '../ui';
import { data } from './data';
import clsx from 'clsx';

const lastStepIndex = data.length - 1;

export const Steps = ({ className }) => {
  let positionLeft = true;

  return (
    <section className={className} id="steps">
      <Container>
        <Heading className="text-right mb-12" as="h4">
          Как мы работаем?
        </Heading>
        <div className="font-manrope grid grid-cols-steps gap-x-[3.5%] mb-9">
          {data.map((step, index) => {
            const isLeft = positionLeft;
            positionLeft = !isLeft;
            return (
              <Row
                title={step.title}
                description={step.description}
                isLeft={isLeft}
                number={index + 1}
                isEnd={index === lastStepIndex}
                key={index}
              />
            );
          })}
        </div>
        <Step
          title="Сдача проекта"
          description="На финальном этапе мы согласуем все моменты касающиеся этапов которые были пройдены и сдаем проект клиенту. Нам важно подарить клиенту положительный опыт взаимодействия с нами, чтобы клиент был полностью доволен проектом."
          className="text-center max-w-[520px] mx-auto"
        />
      </Container>
    </section>
  );
};

const Row = ({ title, description, isLeft, number, isEnd }) => {
  return (
    <>
      {isLeft ? (
        <>
          <Step left={true} title={title} description={description} />
          <div className="relative border-l border-b border-[#FBCA90]">
            <StepNumber isLeft={isLeft} number={number} />
            {isEnd && (
              <StepNumber isLeft={isLeft} number={number + 1} isEnd={isEnd} />
            )}
          </div>
          <div></div>
        </>
      ) : (
        <>
          <div></div>
          <div className="relative border-r border-b border-[#D57EE9]">
            <StepNumber number={number} isLeft={isLeft} />
            {isEnd && (
              <StepNumber isLeft={isLeft} number={number + 1} isEnd={isEnd} />
            )}
          </div>
          <Step left={false} title={title} description={description} />
        </>
      )}
    </>
  );
};

const Step = ({ title, description, left, className }) => {
  return (
    <div className={clsx('pb-7', className)}>
      <p
        className={clsx('mb-5 text-2xl leading-8 text-secondary', {
          'text-right': left,
        })}
      >
        {title}
      </p>
      <p className={clsx('text-text leading-[22px]', { 'text-right': left })}>
        {description}
      </p>
    </div>
  );
};

const StepNumber = ({ isLeft, number, isEnd }) => {
  return (
    <div
      className={clsx(
        'absolute right-0 w-5 h-5  -translate-y-[50%] rounded-full bg-secondary text-sm leading-[19px] text-[#FFF7F7] text-center',
        {
          'left-0 !-translate-x-[50%]': isLeft,
          'translate-x-[50%]': !isLeft && !isEnd,
          'top-0': !isEnd,
          'bottom-0 translate-y-[50%]': isEnd,
          'left-0 -translate-x-1/2': isEnd && !isLeft,
          'right-0 translate-x-1/2': isEnd && isLeft,
        }
      )}
    >
      {number}
    </div>
  );
};
