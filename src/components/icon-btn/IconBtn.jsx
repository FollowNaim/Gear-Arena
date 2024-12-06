export const IconButton = ({ children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className="group outline-0 hover:outline hover:outline-2 bg-slate-100 outline-slate-400 dark:bg-gray-800 dark:outline-slate-700 rounded-lg md:p-2 p-1"
      >
        {children}
      </button>
    </>
  );
};
