import NavBar from "../../../../components/NavBar";
import SignUpForm from "./SignUpForm";

export const metadata = {
  title: "Sign Up | Dliverd",
};


export default function SignUpPage() {
  return (
    <div>
      <NavBar />
      <SignUpForm />
    </div>
  );
}