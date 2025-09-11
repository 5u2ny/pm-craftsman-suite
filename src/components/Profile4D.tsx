const Profile4D = () => {
  return (
    <div className="profile-4d-container relative">
      {/* Ambient glow effects */}
      <div className="absolute inset-0 animate-pulse-glow">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 blur-xl"></div>
      </div>
      
      {/* Rotating rings */}
      <div className="absolute inset-0 animate-orbital-rotation">
        <div className="w-full h-full border border-primary/30 rounded-full"></div>
      </div>
      <div className="absolute inset-2 animate-orbital-trail">
        <div className="w-full h-full border border-accent/20 rounded-full"></div>
      </div>
      
      {/* Main profile wrapper */}
      <div className="profile-4d-wrapper relative z-10">
        {/* Background depth layers */}
        <div className="absolute inset-0 profile-4d-main">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-sm transform translate-z-[-20px]"></div>
        </div>
        
        {/* Main profile image */}
        <div className="profile-4d-main relative">
          <img
            src="/lovable-uploads/e6e2e060-2301-4141-918e-10083389c853.png"
            alt="Sunny Soni - AI Product Manager"
            className="profile-4d-image relative z-10"
          />
          
          {/* Image enhancement overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 via-transparent to-black/10 pointer-events-none"></div>
          
          {/* Floating particles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-primary/60 rounded-full animate-float"></div>
          <div className="absolute bottom-8 left-6 w-1 h-1 bg-accent/80 rounded-full animate-drift"></div>
          <div className="absolute top-12 left-4 w-1.5 h-1.5 bg-primary/40 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-4 right-8 w-1 h-1 bg-accent/60 rounded-full animate-pulse-glow"></div>
        </div>
        
        {/* Professional badge overlay */}
        <div className="absolute -bottom-2 -right-2 z-20">
          <div className="bg-gradient-to-r from-primary to-accent text-white text-xs px-3 py-1 rounded-full shadow-lg animate-scale-in border border-white/20">
            AI PM
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile4D;