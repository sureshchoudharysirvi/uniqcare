import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <div className="w-full max-w-md space-y-6">
      <div>
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p className="text-muted-foreground mt-2">
          Sign in to continue to UniqCare.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="loginId">Login ID</Label>
        <Input
          id="loginId"
          placeholder="Mobile Number or Employee ID"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>

      <Button className="w-full">
        Sign In
      </Button>
    </div>
  );
}