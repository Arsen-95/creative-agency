import { useState } from 'react';
import clsx from 'clsx';
import { Button, Input, Checkbox } from '../ui';

export const Form = ({ className }) => {
  return (
    <div
      className={clsx(
        'max-w-[540px] p-[30px] bg-white shadow-form rounded-[20px]',
        className
      )}
    >
      <div className="flex justify-between gap-[30px] mb-[50px]">
        <Field placeholder="Имя" />
        <Field placeholder="Фамилия" />
      </div>
      <div className="flex justify-between gap-[30px] mb-[50px]">
        <Field placeholder="Телефон" />
        <Field placeholder="Почта" />
      </div>
      <p className="mb-[30px] text-title">Какой вопрос Вас интересует?</p>
      <div className="flex flex-col gap-5 mb-[50px]">
        <div className="flex justify-between">
          <Checkbox label="Лендинг" />
          <Checkbox label="Корпоративный сайт" />
        </div>
        <div className="flex justify-between">
          <Checkbox label="Интернет-магазин" />
          <Checkbox label="Разработка" />
        </div>
        <div className="flex justify-between">
          <Checkbox label="Сайт-визитка" />
          <Checkbox label="Маркетинг" />
        </div>
      </div>
      <textarea
        className="resize-none mb-[50px] py-[26px] pb-16 px-5 text-sm bg-input w-full rounded-[5px] focus:outline-none"
        placeholder="Сообщение..."
      />
      <div className="flex justify-center">
        <Button>Отправить сообщение</Button>
      </div>
    </div>
  );
};

const Field = ({ placeholder }) => {
  const [value, setValue] = useState('');

  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      clearValue={() => setValue('')}
    />
  );
};
