import { useSearchParams } from "react-router-dom";
import DashboardHeading from "../../dashboard/dashboard-heading";

function UpdateUser() {
  const [params] = useSearchParams();
  const userId = params.get("id");
  console.log(userId);
  return (
    <div>
      <DashboardHeading
        title="Update"
        desc="Update your user"
      ></DashboardHeading>
    </div>
  );
}

export default UpdateUser;
