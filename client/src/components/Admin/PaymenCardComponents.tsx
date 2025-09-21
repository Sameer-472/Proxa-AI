import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface Plan {
    planName: string;
    price: number;
    content: string[];
}

export default function PaymentCardComponents({ plan }: { plan: Plan }) {
  return (
     <Card className="w-[250px] shadow-lg rounded-lg">
      <CardHeader className="">
        <CardTitle className="text-lg font-semibold">{plan.planName}</CardTitle>
        <CardDescription className="text-2xl font-bold">
          $ {plan.price}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {plan.content.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="w-4 h-4 mr-2 bg-green-500 rounded-full"></span>
            <span className="text-sm ">{item}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-gray-800 text-white hover:bg-gray-700">
          Subscribe
        </Button>
      </CardFooter>
    </Card>
  )
}
