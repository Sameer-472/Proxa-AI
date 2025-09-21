import { useGetFeedback } from "@/api/feedbackApi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { MessageSquare, Clock, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeedBackFormPage() {
  const { data: feedbackData, isLoading: isFeedbackLoading } = useGetFeedback();

  console.log("Feedback Data:", feedbackData);

  const FeedbackSkeleton = () => (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-20 w-full" />
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">User Feedback</h1>
        <p className="text-muted-foreground">
          All valid feedback from users to improve the application
        </p>
        <Separator className="my-4" />
      </div>

      {/* Feedback Count Badge */}
      <div className="flex justify-between items-center">
        <Badge variant="secondary" className="px-3 py-1">
          <MessageSquare className="w-4 h-4 mr-2" />
          {feedbackData?.data?.length || 0} Feedback Items
        </Badge>
      </div>

      {/* Feedback List */}
      <div className="grid gap-6">
        {isFeedbackLoading ? (
          // Loading Skeletons
          Array.from({ length: 3 }).map((_, index) => (
            <FeedbackSkeleton key={index} />
          ))
        ) : feedbackData?.data && feedbackData.data.length > 0 ? (
          // Feedback Items
          feedbackData.data.map((feedback) => (
            <Card key={feedback._id} className="w-full hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage 
                        src={feedback.userId?.imageUrl} 
                        alt={feedback.userId?.firstName || "User"} 
                      />
                      <AvatarFallback>
                        <User className="h-6 w-6" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <CardTitle className="text-lg">
                        {feedback.userId?.firstName || "Anonymous User"}
                      </CardTitle>
                      <CardDescription className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(feedback.createdAt || "").toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">Feedback</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="font-medium text-sm text-muted-foreground">Message:</h4>
                  <p className="text-sm leading-relaxed bg-muted/50 p-4 rounded-lg">
                    {feedback.feedback}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          // Empty State
          <Card className="w-full">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MessageSquare className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Feedback Yet</h3>
              <p className="text-muted-foreground text-center">
                No user feedback has been submitted yet. Check back later!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}