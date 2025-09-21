import { Image } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useAppSelector } from "@/hooks/hooks";

export default function GImageView() {
  const { isLoading, imgGenerate } = useAppSelector(
    (state) => state.imgGenerate
  );

  return (
    <Card className="h-96 w-full">
      <CardHeader className="flex items-center space-x-2">
        <Image className="h-4 w-4 mr-2" />
        <h2 className="text-lg font-semibold">Image Generation</h2>
      </CardHeader>

      <CardContent className="h-screen">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <Image className="h-10 w-10 animate-spin" />
            <p>Loading...</p>
          </div>
        ) : imgGenerate ? (
          <div>
            <img src={imgGenerate.data} alt="Generated Image" className="p-2 rounded-md" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full space-y-4">
            <Image className="h-10 w-10" />
            <p>Enter a topic and click "Generate image" to get started</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
