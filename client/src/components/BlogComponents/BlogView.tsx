import { SquarePen } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useAppSelector } from "@/hooks/hooks";
import MDEditor from '@uiw/react-md-editor';


export default function BlogView() {
  const { isLoading, blog } = useAppSelector((state) => state.blogs);
  return (
    <Card className="h-[550px] w-full">
        <CardHeader className="flex items-center space-x-2">
            <SquarePen className="h-4 w-4 mr-2" />
            <h2 className="text-lg font-semibold">Blog Configuration</h2>
        </CardHeader>

        <CardContent className="h-screen overflow-y-scroll overflow-auto">
            {
              isLoading ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <SquarePen className="h-10 w-10 animate-spin" />
                  <p>Loading...</p>
                </div>
              ) : blog ? (
                <MDEditor.Markdown source={blog.data} className="p-2 rounded-md" />
              ) : (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                <SquarePen className="h-10 w-10" />
                <p>Enter a topic and click "Generate blog" to get started</p>
            </div>
              )
            }
        </CardContent>
    </Card>
  )
}
