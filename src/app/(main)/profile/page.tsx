import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProfileClient } from "./client";

export default function ProfilePage() {
  return (
    <main className="flex-1 p-4 md:p-6 flex justify-center items-start">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="font-headline">Personal Information</CardTitle>
          <CardDescription>
            Update your administrator details here.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <ProfileClient />
        </CardContent>
      </Card>
    </main>
  );
}
