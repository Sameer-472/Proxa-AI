import { Scissors, Sparkles } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function RObjectForm() {
  return (
    <Card className="w-full h-full">
      <CardHeader className="flex items-center space-x-2">
        <Sparkles className="h-4 w-4 mr-2" size={52} />
        <h2 className="text-lg font-semibold">Object Removal</h2>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 mb-5">
          <Label className="font-semibold">Upload image</Label>
          <Input type="file" accept="image/*"  />
        </div>
        <div className="space-y-4">
            <Label className="font-semibold">Describe object name to remove</Label>
            <Textarea rows={4} placeholder="e.g. watch or spoon, Only single object name " />
        </div>
      </CardContent>

      <CardFooter>
        <Button className="" variant={"outline"}>
          <Scissors className="h-4 w-4 mr-2" />
          Remove Object
        </Button>
      </CardFooter>
    </Card>
  );
}
