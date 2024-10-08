import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/firebase-config";
import DashboardHeading from "../../dashboard/dashboard-heading";
import Table from "../../table";
import ActionEdit from "../../action/action-edit";
import ActionDelete from "../../action/action-delete";
import { useNavigate } from "react-router-dom";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDataUsers = async () => {
      const colRef = collection(db, "users");
      onSnapshot(colRef, (snapshot) => {
        let result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setUsers(result);
        console.log(users);
      });
    };
    fetchDataUsers();
  }, []);
  return (
    <div>
      <DashboardHeading title="Users" desc="Manage your users" />
      <Table>
        <thead className="bg-[#f7f7f8]">
          <tr>
            <th className="py-5 font-semibold text-left px-7">Id</th>
            <th className="py-5 font-semibold text-left px-7">Info</th>
            <th className="py-5 font-semibold text-left px-7">User name</th>
            <th className="py-5 font-semibold text-left px-7">Email</th>
            <th className="py-5 font-semibold text-left px-7">Status</th>
            <th className="py-5 font-semibold text-left px-7">Role</th>
            <th className="py-5 font-semibold text-left px-7">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map(({ email, fullName, id }) => (
              <tr key={id}>
                <td className="py-4 align-middle px-7">
                  {id.slice(0, 5) + "..."}
                </td>
                <td className="py-4 align-middle px-7 whitespace-nowrap">
                  <div className="flex items-center gap-x-3">
                    <img
                      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                      alt=""
                      className="w-10 h-10 rounded object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{fullName}</h3>
                      <time className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </td>
                <td className="py-4 align-middle px-7">
                  <span className="text-gray-500">{fullName}</span>
                </td>
                <td className="py-4 align-middle px-7">
                  <span className="text-gray-500">{email}</span>
                </td>
                <td className="py-4 align-middle px-7">
                  <span className="text-gray-500"></span>
                </td>
                <td className="py-4 align-middle px-7">
                  <span className="text-gray-500"></span>
                </td>
                <td className="py-4 align-middle px-7">
                  <div className="flex items-center text-gray-500 gap-x-3">
                    <ActionEdit
                      onClick={() =>
                        navigate(`/dashboard/manage/update-user?id=${id}`)
                      }
                    />
                    <ActionDelete />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageUsers;
