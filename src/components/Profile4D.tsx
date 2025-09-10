const Profile4D = () => {
  return (
    <div className="profile-4d-container">
      <div className="profile-4d-wrapper">
        {/* Background layers for depth */}
        <div className="profile-4d-layer profile-4d-bg-1"></div>
        <div className="profile-4d-layer profile-4d-bg-2"></div>
        <div className="profile-4d-layer profile-4d-bg-3"></div>
        
        {/* Main profile image */}
        <div className="profile-4d-main">
          <img
            src="/lovable-uploads/0f13ee40-077e-4d69-89e9-bd5ad2a19290.png"
            alt="Sunny Soni - AI Product Manager"
            className="profile-4d-image"
          />
          
          {/* Holographic overlay */}
          <div className="profile-4d-hologram"></div>
          
          {/* Edge glow */}
          <div className="profile-4d-glow"></div>
        </div>
        
        {/* Floating particles */}
        <div className="profile-4d-particle profile-4d-particle-1"></div>
        <div className="profile-4d-particle profile-4d-particle-2"></div>
        <div className="profile-4d-particle profile-4d-particle-3"></div>
        <div className="profile-4d-particle profile-4d-particle-4"></div>
      </div>
    </div>
  );
};

export default Profile4D;