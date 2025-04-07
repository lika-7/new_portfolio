import IconNavigation from "./icon-navigation";

export default function hero() {
  return (
    <section className="bg-navy py-16 sm:py-20 md:py-24 lg:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative inline-block">
            {/* 좌하단 모서리 테두리 */}
            <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
              <div className="absolute bottom-0 left-0 w-full h-1 sm:h-1.5 md:h-2 bg-bronze-border"></div>
              <div className="absolute bottom-0 left-0 w-1 sm:w-1.5 md:w-2 h-full bg-bronze-border"></div>
            </div>

            {/* 우상단 모서리 테두리 */}
            <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16">
              <div className="absolute top-0 right-0 w-full h-1 sm:h-1.5 md:h-2 bg-bronze-border"></div>
              <div className="absolute top-0 right-0 w-1 sm:w-1.5 md:w-2 h-full bg-bronze-border"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic text-white tracking-wider px-4 py-2 sm:px-6 sm:py-4">
              LIKA-7
            </h1>
          </div>
        </div>
      </div>

      {/* Icon Navigation */}
      <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 translate-y-1/2">
        <IconNavigation />
      </div>
    </section>
  );
}
