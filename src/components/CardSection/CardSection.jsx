import Card from "../Card/Card";

const CardSection = () => {
  return (
    <section className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
      {/* LEFT BIG STORY */}
      <div className="col-span-5">
        <Card
          image="https://via.placeholder.com/600x400"
          category="China"
          title="China knows how to punish countries that offend it"
        />
      </div>

      {/* MIDDLE STORIES */}
      <div className="col-span-4 space-y-6">
        <Card
          image="https://via.placeholder.com/400x250"
          category="Business"
          title="How AI is disrupting shopping"
          description="Looking for Christmas gifts? Just ask a chatbot"
        />
 
        <div className="border p-2">
          <span className="text-red-500">Asia</span>
          <h3 className="pt-2 text-[22px] font-[600]">
            Fight between Thailand and Cambodia Breaks Out again
          </h3>

          <p>Hundreds of thousands of refugees are back on the move</p>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="col-span-3 space-y-6">
        <Card
          image="https://via.placeholder.com/300x200"
          category="Economy"
          title="European pensions are in dire need of reform"
        />
      </div>
    </section>
  );
};

export default CardSection;
