import { handleGithubLogin } from "@/lib/actions/user.action";
// import { auth } from "@/lib/auth";

const LoginPage = async () => {
  // const session = await auth();
  // console.log(session);

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
