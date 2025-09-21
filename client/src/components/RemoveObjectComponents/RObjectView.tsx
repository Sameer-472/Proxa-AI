import { Scissors } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";


export default function RObjectView() {
  return (
    <Card className="h-96 w-full">
        <CardHeader className="flex items-center space-x-2">
            <Scissors className="h-4 w-4 mr-2" />
            <h2 className="text-lg font-semibold">Processed Image</h2>
        </CardHeader>

        <CardContent className="h-screen">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <Scissors className="h-10 w-10" />
                <p>Upload an image and click "Remove Object" to get started</p>
            </div>
        </CardContent>
    </Card>
  )
}
