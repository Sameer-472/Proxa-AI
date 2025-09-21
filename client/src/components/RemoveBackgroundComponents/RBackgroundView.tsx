import { Eraser, SquarePen } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";


export default function RBackgroundView() {
  return (
    <Card className="h-96 w-full">
        <CardHeader className="flex items-center space-x-2">
            <SquarePen className="h-4 w-4 mr-2" />
            <h2 className="text-lg font-semibold">Remove Background</h2>
        </CardHeader>

        <CardContent className="h-screen">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <Eraser className="h-10 w-10" />
                <p>Enter a topic and click "Remove Background" to get started</p>
            </div>
        </CardContent>
    </Card>
  )
}
