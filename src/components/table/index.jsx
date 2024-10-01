const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg">
      <table className="min-w-full">{children}</table>
    </div>
  );
};

export default Table;
