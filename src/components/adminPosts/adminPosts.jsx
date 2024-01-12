import { deletePost, getPosts } from "@/lib/actions/post.action";
import styles from "./adminPosts.module.css";
import Image from "next/image";

const AdminPosts = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image
              src={post.image || "/noAvatar.png"}
              alt={post.title}
              width={50}
              height={50}
            />
            <span>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" value={post.id} name="id" />
            <button>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
