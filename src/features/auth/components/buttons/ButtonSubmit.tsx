export const ButtonSubmit = ({ label }: { label: string }) => {
  return (
    <button className="bg-primary/90 hover:bg-primary h-14 w-full cursor-pointer rounded-lg text-xl font-bold text-white capitalize transition-all duration-300">
      {label}
    </button>
  );
};
