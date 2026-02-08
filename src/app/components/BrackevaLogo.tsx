import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const BrackevaLogo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  size = 'md',
  className = '' 
}) => {
  const sizes = {
    sm: { height: 32 },
    md: { height: 48 },
    lg: { height: 64 },
    xl: { height: 96 }
  };

  const currentSize = sizes[size];
  
  // URL du logo officiel Brackeva
  const logoUrl = 'https://static.wixstatic.com/media/108416_5cfa40dc94f549358fdb58ca6b90c3e9~mv2.png/v1/fill/w_550,h_154,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Brackeva-Gerechtsdeurwaarders_RGB_large_.png';

  if (variant === 'compact') {
    // Version compacte pour petits espaces
    return (
      <div className={className} style={{ height: currentSize.height }}>
        <img 
          src={logoUrl}
          alt="Brackeva"
          style={{ 
            height: '100%',
            width: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
    );
  }

  // Version complète
  return (
    <div className={className} style={{ height: currentSize.height }}>
      <img 
        src={logoUrl}
        alt="Brackeva - Gerechtsdeurwaarders"
        style={{ 
          height: '100%',
          width: 'auto',
          objectFit: 'contain'
        }}
      />
    </div>
  );
};