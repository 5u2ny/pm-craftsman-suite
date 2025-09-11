import cityscapeTexture from "@/assets/cityscape-texture.jpg";
import natureTexture from "@/assets/nature-texture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-50">
      {/* Background Silhouettes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Left Silhouette - Cityscape */}
        <div 
          className="absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 opacity-20"
          style={{
            clipPath: "circle(50% at center)",
            backgroundImage: `url(${cityscapeTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(1.2)"
          }}
        />
        
        {/* Right Silhouette - Nature */}
        <div 
          className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 lg:w-96 lg:h-96 opacity-20"
          style={{
            clipPath: "circle(50% at center)",
            backgroundImage: `url(${natureTexture})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%) contrast(1.2)"
          }}
        />
      </div>

      {/* Main Profile Photo */}
      <div className="relative z-10 mb-8">
        <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img 
            src="/lovable-uploads/0f13ee40-077e-4d69-89e9-bd5ad2a19290.png" 
            alt="Sunny Soni Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Tagline Banner */}
      <div className="relative z-10 w-full">
        <div className="bg-red-400 py-6 px-8">
          <h1 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold tracking-widest text-center">
            LOGICALLY MINDED // CREATIVE AT HEART
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;