import LoginForm from "@/features/auth/components/LoginForm";
export default function LoginPage() {
    return (
        <main className="min-h-screen flex">
            {/* Left Section */}

            <section className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-emerald-600 p-16 text-white">

                <div>
                    <h1 className="text-5xl font-bold">💊 UniqCare</h1>
                    <p className="mt-4 text-lg text-emerald-100">
                        Pharmacy Inventory & Billing Management System
                    </p>
                </div>

                <div className="space-y-4">
                    <div>1 Secure Login</div>
                    <div>2 Inventory Management</div>
                    <div>3 Sales & Billing</div>
                    <div>4 Reports & Analytics</div>
                </div>

                <div className="text-sm text-emerald-200">
                    © 2026 UniqCare. All rights reserved.
                </div>

            </section>

            {/* Right Section */}
            <section className="flex w-full lg:w-1/2 items-center justify-center bg-slate-50 p-8">
                <LoginForm />
            </section>
        </main>
    );
}