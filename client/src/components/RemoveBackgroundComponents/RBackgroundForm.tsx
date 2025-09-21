import { Eraser, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function RBackgroundForm() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex items-center space-x-2">
        <Sparkles className="h-4 w-4 mr-2" size={52} />
        <h2 className="text-lg font-semibold">Background Removal</h2>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 mb-5">
          <Label className="font-semibold">Upload image</Label>
          <div className="flex flex-col space-y-2">
            <Input type="file" accept="image/*"  />
            <p className="text-sm text-muted-foreground">Supports JPG, PNG, and other image formats</p>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="" variant={"outline"}>
          <Eraser className="h-4 w-4 mr-2" />
          Remove Background
        </Button>
      </CardFooter>
    </Card>
  );
}
