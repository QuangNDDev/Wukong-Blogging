function FeatureItem() {
  return (
    <div className="relative w-full h-[169px] rounded-2xl lg:h-[272px]">
      <img
        src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        alt="unsplash"
        className="object-cover w-full h-full rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#6b6b6b] via-[#a3a3a3] to-transparent opacity-60 rounded-2xl mix-blend-multiply"></div>
      <div className="absolute inset-0 z-10 p-5 text-white">
        <div className="flex items-center justify-between mb-4">
          <span className="inline-block px-3 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-lg max-w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">
            Kiến thức
          </span>
          <div className="flex items-center ml-auto text-sm font-semibold text-white gap-x-3">
            <span>Mar 23</span>
            <span className="inline-block w-1 h-1 bg-current rounded-full"></span>
            <span>Andiez Le</span>
          </div>
        </div>
        <h3 className="text-lg font-bold leading-snug lg:text-xl">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </h3>
      </div>
    </div>
  );
}

export default FeatureItem;
