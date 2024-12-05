import { Button } from "@/components/ui/button";
import signupAnimation from "@/assets/animation/register.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth } from "@/firebase/firebase.config";
import { AuthContext } from "@/provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    toast
      .promise(handleSignUp(email, password), {
        loading: "Signin up...",
        success: <b>Signed up Successfull!</b>,
        error: (err) => <b>{err.message || "Could not sign up!"}</b>,
      })
      .then((res) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        }).then();

        console.log("s", res);
        navigate("/");
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="grid grid-cols-2 justify-center items-center max-w-7xl mx-auto my-10">
      <form
        className="w-full max-w-sm mx-auto col-span-1"
        onSubmit={handleSubmit}
      >
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Sign up your account</CardTitle>
            <CardDescription>
              Provide your user info to create a account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Enter the user's name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="Enter the user's email"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="photo">Photo URL</Label>
              <Input
                name="photo"
                id="photo"
                type="url"
                placeholder="Enter a photo url"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="Enter a password"
              />
            </div>
            <Button className="w-full pt-2">Sign Up</Button>
            <div className="mt-4 text-center text-sm">
              Alreadt have an account?{" "}
              <Link to="/auth/signin" className="underline">
                Sign In
              </Link>
            </div>
          </CardContent>
        </Card>
      </form>
      <div className="col-span-1">
        <div className="w-[300px] h-[300px] mx-auto col-span-1">
          <Lottie
            width={300}
            height={300}
            animationData={signupAnimation}
            autoplay={true}
            loop={true}
          />
        </div>
      </div>
    </div>
  );
}
