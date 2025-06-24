import NavBar from "../../../../components/NavBar";
import SignInForm from "./SignInForm";

export const metadata = {
  title: "Sign In | Dliverd",
};


export default function SignInPage() {
  return (
    <div>
      <NavBar />
      <SignInForm />
    </div>
  );
}