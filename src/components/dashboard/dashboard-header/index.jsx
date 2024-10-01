import Button from "../../button";

const DashboardHeader = () => {
  return (
    <div className="flex justify-end gap-5 p-5 bg-white border-b border-gray-200">
      <Button to="manage/add-post" className="h-[52px]">
        Write new post
      </Button>
      <div className="w-[64px] h-[64px]">
        <img
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
          alt=""
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardHeader;
