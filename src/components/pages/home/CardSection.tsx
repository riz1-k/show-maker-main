import Card from "@/components/common/Card";

export default function CardSection() {
  return (
    <section
      style={{
        backgroundImage: `url(/cards/card-01/img-02.jpg`,
        boxShadow:
          "0px 4px 4px 0px #00000040,inset 0 0 0 1000px rgba(0,0,0,.5)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative pt-20 pb-10 lg:pt-[80px] lg:pb-20"
    >
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px]  text-center lg:mb-20">
            <h2 className="mb-4 text-3xl font-bold text-white underline underline-offset-4 sm:text-4xl md:text-[40px]">
              How we work with your data
            </h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <Card
            description="Communication"
            title="We may use your personal information to communicate with you about our products or services and  respond to your inquiries. This includes helping you to complete transactions, process payments, and other customer service purposes."
            index={1}
          />
          <Card
            description="Marketing"
            title="We may send you communications related to our business, either from SHOWMAKER directly or from our partners. This includes marketing messages, newsletters, promotions, customer satisfaction surveys, and other related communications"
            index={3}
          />
          <Card
            description="Service Enhancements"
            title="We use your information to improve our services and better understand how you use them, both on an individualized and aggregated basis. This includes research and analytical purposes, which help us to continually enhance and refine our offerings."
            index={4}
          />
        </div>
      </div>
    </section>
  );
}
