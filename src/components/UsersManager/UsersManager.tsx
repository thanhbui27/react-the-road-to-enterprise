import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AddUsers from "./components/AddUsers";
import DisplayUsers from "./components/DisplayUsers";
import SelectedUserDetails from "./components/SelectedUserDetails";
import { useEffect } from "react";
import { fetchUsers } from "./usersSlice";
import Spinner from "./Spinner";
type UsersManagerProps = object;
const UsersManager = (props: UsersManagerProps) => {
  const dispatch = useAppDispatch();
  const fetchUsersStatus = useAppSelector(
    (state) => state.user.fetchUsersStatus
  );
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div className="container py-8 mx-auto">
      {fetchUsersStatus === "PENDING" ? <Spinner show /> : null}
      {fetchUsersStatus === "SUCCESS" ? (
        <div className="grid grid-cols-12 gap-4 px-4">
          <div className="col-span-4">
            <AddUsers />
          </div>
          <div className="col-span-4">
            <DisplayUsers />
          </div>
          <div className="col-span-4">
            <SelectedUserDetails />
          </div>
        </div>
      ) : null}
      {fetchUsersStatus === "ERROR" ? (
        <p>There was a problem fetching users</p>
      ) : null}
    </div>
  );
};
export default UsersManager;
