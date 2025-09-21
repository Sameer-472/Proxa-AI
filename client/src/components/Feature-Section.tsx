import { features } from "@/data/features";
import { Card, CardContent } from "./ui/card";


export default function FeatureSection() {
  return (
    <div className="py-20 min-h-screen px-5">
      <div className="text-center space-y-3 flex flex-col mb-12">
        <h1 className="md:text-6xl text-5xl font-bold gradient-title">Powerful Features</h1>
      <p className="md:text-lg text-sm max-w-xl mx-auto">
        Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.
      </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-colors duration-300"
              >
                <CardContent className="pt-6 text-center flex flex-col items-center">
                  <div className="flex flex-col items-center justify-center">
                    {feature.icon}
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
    </div>
  )
}
