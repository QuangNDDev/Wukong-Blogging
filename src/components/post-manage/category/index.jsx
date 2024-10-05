import Button from "../../button";
import DashboardHeading from "../../dashboard/dashboard-heading";
import Table from "../../table";

const ManageCategory = () => {
  return (
    <div>
      <DashboardHeading title="Categories" desc="Manage your category">
        <Button height="60px" type="button" to="/dashboard/manage/add-category">
          Create category
        </Button>
      </DashboardHeading>
      <Table>
        <thead className="bg-[#f7f7f8]">
          <tr>
            <th className="py-5 font-semibold text-left px-7">Id</th>
            <th className="py-5 font-semibold text-left px-7">Name</th>
            <th className="py-5 font-semibold text-left px-7">Slug</th>
            <th className="py-5 font-semibold text-left px-7">Status</th>
            <th className="py-5 font-semibold text-left px-7">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-4 align-middle px-7">01</td>
            <td className="py-4 align-middle px-7">Front end developer</td>
            <td className="py-4 align-middle px-7">
              <span className="text-gray-500">
                <span className="text-gray-400 italic">
                  Front-end-developer
                </span>
              </span>
            </td>
            <td className="py-4 align-middle px-7">Approved</td>
            <td className="py-4 align-middle px-7">
              <div className="flex items-center text-gray-500 gap-x-3">
                <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
                <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </span>
                <span className="flex items-center justify-center w-10 h-10 border border-gray-200 rounded cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCategory;
