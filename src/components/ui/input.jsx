export const Input = ({ placeholder, value, onChange, clearValue }) => {
  return (
    <label className="relative block h-max">
      <input
        className="w-full pb-[13px] pt-6 px-6 bg-input rounded-[5px] placeholder:text-transparent transition-transform input-base border-2 border-transparent text-sm leading-[17px]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="absolute top-6 left-6 right-0 block leading-none w-full text-base transition-all input-label text-inputText">
        {placeholder}
      </span>
      {value && (
        <button
          className='absolute w-6 h-6 bg-[url("icons/ex.svg")] right-6 top-1/2 -translate-y-1/2'
          onClick={clearValue}
        ></button>
      )}
    </label>
  );
};
