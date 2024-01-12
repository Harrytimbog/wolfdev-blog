import { deleteUser, getUser } from "@/lib/actions/user.action";
import styles from "./adminUsers.module.css";
import Image from "next/image";

const AdminUsers = async () => {
  const users = await getUser();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image
              src={user.image || "/noAvatar.png"}
              alt={user.username}
              width={50}
              height={50}
            />
            <span>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" value={user.id} name="id" />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
