import { Card, CardContent } from "./ui/card";

const ToolStackSection = () => {
  const tools = [
    {
      icon: "📱",
      title: "AI Sales Assistant",
      description: "Upgrade your customer service with our AI Sales Assistant, designed to guide and assist customers through their shopping journey, leading to enhanced customer satisfaction and increased sales.",
    },
    {
      icon: "🔍",
      title: "AI Product Recommender",
      description: "Leverage AI to offer personalized product suggestions to your customers. Our tool analyzes browsing behavior and preferences, boosting engagement and sales through tailored recommendations.",
    },
    {
      icon: "👥",
      title: "AI Community Manager",
      description: "Automate interactions on social platforms like Instagram and Facebook with our AI Community Manager. Efficiently manage DMs and comments, ensuring timely and consistent communication with your audience.",
    },
    {
      icon: "⚙️",
      title: "AI Integration Consultancy",
      description: "Gain expert insights and training on AI implementation. Our professional consulting services equip your team with the knowledge and skills to effectively integrate and leverage AI solutions.",
    },
  ];

  return (
    <section className="py-16 bg-regal-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded bg-zinc-800 text-green-400">
                Designed for your shop
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our <span className="text-regal-green">Tool Stack</span>
              <br />
              Right Now
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="flex flex-col space-y-6">
              {tools.map((tool, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:border-regal-green/50 transition-colors w-full hover:shadow-lg hover:shadow-regal-green/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{tool.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-regal-green">{tool.title}</h3>
                        <p className="text-gray-600">{tool.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolStackSection;