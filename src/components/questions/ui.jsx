import clsx from 'clsx';

import { Button, Container, Heading } from '../ui';
import { TgIcon } from '../../../public/icons';
import { Form } from './form';

export const Questions = ({ className }) => {
  return (
    <>
      <div
        className={clsx(
          'bg-[url("/images/questionsBg.png")] bg-center bg-no-repeat bg-cover font-inter',
          className
        )}
        id="connectUs"
      >
        <Container>
          <div className="py-[120px] flex">
            <div className="flex flex-col gap-5 max-w-md">
              <p className="font-medium text-xl leading-[26px] font-lora">
                Не стесняйтесь связаться с нами{' '}
              </p>
              <Heading className="!text-secondary" as="p">
                Остались вопросы?
              </Heading>
              <p className="text-elements">
                Не нашли интересующую вас информацию, остались вопросы? Напишите
                нам и наши специалисты подробно ответят на все ваши вопросы.
              </p>
              <Button
                className="flex items-center gap-2.5 text-secondary w-fit"
                type="ghost"
              >
                <TgIcon className="fill-secondary" />
                <span>Связаться в телеграм</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-end">
          <Form className="-mt-[430px] mb-[106px]" />
        </div>
      </Container>
    </>
  );
};
