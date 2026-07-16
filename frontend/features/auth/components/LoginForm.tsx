import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginForm() {
  return (
  <Card className="w-full max-w-md shadow-xl border-0">
    <CardHeader>
      <CardTitle className="text-3xl font-bold">
        Welcome Back
      </CardTitle>

      <CardDescription>
        Sign in to continue to UniqCare.
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-5">

      <div className="space-y-2">
        <Label htmlFor="loginId">
          Login ID
        </Label>

        <Input
          id="loginId"
          placeholder="Mobile Number or Employee ID"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">
          Password
        </Label>

        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <Button className="w-full">
        Sign In
      </Button>

    </CardContent>
  </Card>
);
}