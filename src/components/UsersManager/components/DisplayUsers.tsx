import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { removeUser, selectAllUsers, selectUser } from "../usersSlice";
import Spinner from "../Spinner";
type DisplayUsersProps = object;
const DisplayUsers = (props: DisplayUsersProps) => {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectAllUsers);
  const deletingUserId = useAppSelector((state) => state.user.deletingUserId);
  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Users</h2>
      <ul className="space-y-3">
        {users.map((user) => {
          return (
            <li key={user.id} className="space-x-3">
              <button
                className="hover:underline"
                onClick={() => dispatch(selectUser(user.id))}
              >
                {user.email}
              </button>
              {deletingUserId === user.id ? (
                <Spinner show size="sm" />
              ) : (
                <button onClick={() => dispatch(removeUser(user))}>X</button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default DisplayUsers;
