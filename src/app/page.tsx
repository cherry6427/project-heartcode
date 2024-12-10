// src/app/page.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Hello I am Gerrett
          </CardTitle>
          <CardDescription>
            This is an example website
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            Don't do drugs
          </CardTitle>
          <CardDescription>
            Drugs are bad guys
          </CardDescription>
        </CardHeader>
      </Card>
    </div>

  );
}