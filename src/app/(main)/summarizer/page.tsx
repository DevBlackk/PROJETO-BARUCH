import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SummarizerClient } from "./client";

export default function SummarizerPage() {
  return (
    <main className="flex-1 p-4 md:p-6 flex justify-center items-start">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="font-headline">Information Summarizer</CardTitle>
          <CardDescription>
            Paste any text below and our AI will provide a concise summary.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <SummarizerClient />
        </CardContent>
      </Card>
    </main>
  );
}
