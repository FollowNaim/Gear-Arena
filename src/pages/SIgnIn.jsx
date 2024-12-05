import loginAnimation from "@/assets/animation/login.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/provider/AuthProvider";
import Lottie from "lottie-react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignIn() {
  const { handleGoogleLogin, handleGithubLogin, handleSingIn } =
    useContext(AuthContext);
  const { state } = useLocation();
  const navigate = useNavigate();
  const handleGoogle = () => {
    toast
      .promise(handleGoogleLogin(), {
        loading: "Signin in...",
        success: <b>Signed In Successfull!</b>,
        error: (err) => <b>{err.message || "Could not sign in!"}</b>,
      })
      .then((res) => navigate(state ? state : "/"))
      .catch((err) => console.log(err.message));
  };
  const handleGithub = () => {
    toast
      .promise(handleGithubLogin(), {
        loading: "Signin in...",
        success: <b>Signed In Successfull!</b>,
        error: (err) => <b>{err.message || "Could not sign in!"}</b>,
      })
      .then((res) => navigate(state ? state : "/"))
      .catch((err) => console.log(err.message));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    toast
      .promise(handleSingIn(email, password), {
        loading: "Signin in...",
        success: <b>Signed In Successfull!</b>,
        error: (err) => <b>{err.message || "Could not sign in!"}</b>,
      })
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="grid grid-cols-2 justify-center max-w-7xl mx-auto px-4 items-center">
      <Card
        className="max-w-sm w-full
       mx-auto my-10 col-span-1"
      >
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input name="password" id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="flex items-center gap-4">
                {" "}
                <Button
                  onClick={handleGoogle}
                  variant="outline"
                  className="w-full"
                >
                  <FaGoogle /> Google
                </Button>
                <Button
                  onClick={handleGithub}
                  variant="outline"
                  className="w-full"
                >
                  <FaGithub /> Github
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/auth/signup" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
      <div className="w-[300px] h-[300px] mx-auto col-span-1">
        <Lottie
          width={300}
          height={300}
          animationData={loginAnimation}
          autoplay={true}
          loop={true}
        />
      </div>
    </div>
  );
}
