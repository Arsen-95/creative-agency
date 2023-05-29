import { useRef } from 'react';

export const Checkbox = ({ label }) => {
  const inputEl = useRef(null);
  const divEl = useRef(null);

  return (
    <label className="flex items-center gap-[5px] w-full">
      <input
        ref={inputEl}
        onChange={() => divEl.current.classList.toggle('done')}
        type="checkbox"
        className="hidden"
      />
      <div
        ref={divEl}
        className="w-[15px] h-[15px] border-image rounded-sm"
      ></div>
      <span>{label}</span>
    </label>
  );
};
