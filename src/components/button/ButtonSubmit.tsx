export const ButtonSubmit = ({ text = "Tạo mới" }: { text?: string }) => {
  return (
    <div className="col-span-1 text-center md:col-span-2">
      <button className="bg-primary hover:bg-primary/90 h-[56px] w-[275px] cursor-pointer rounded-xl text-[18px] font-bold text-white">
        {text}
      </button>
    </div>
  );
};
