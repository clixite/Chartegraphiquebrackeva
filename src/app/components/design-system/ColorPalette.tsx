import React from 'react';

interface ColorBlockProps {
  name: string;
  varName: string;
  description?: string;
  hexCode?: string;
}

const ColorBlock: React.FC<ColorBlockProps> = ({ name, varName, description, hexCode }) => {
  return (
    <div className="flex flex-col gap-2">
      <div 
        className="h-20 rounded-lg border"
        style={{ backgroundColor: `var(${varName})` }}
      />
      <div>
        <p className="font-medium text-sm">{name}</p>
        {hexCode && (
          <p className="text-xs font-mono" style={{ color: 'var(--foreground)' }}>{hexCode}</p>
        )}
        <p className="text-xs text-[var(--foreground-tertiary)] font-mono">{varName}</p>
        {description && (
          <p className="text-xs text-[var(--foreground-tertiary)] mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

interface StatusColorBlockProps {
  name: string;
  varPrefix: string;
  description: string;
}

const StatusColorBlock: React.FC<StatusColorBlockProps> = ({ name, varPrefix, description }) => {
  return (
    <div className="border rounded-lg p-4" style={{ borderColor: 'var(--border)' }}>
      <h4 className="font-semibold mb-3">{name}</h4>
      <p className="text-sm mb-4" style={{ color: 'var(--foreground-secondary)' }}>{description}</p>
      
      <div className="grid grid-cols-2 gap-3">
        <div>
          <div 
            className="h-12 rounded flex items-center justify-center text-sm font-medium mb-2"
            style={{ 
              backgroundColor: `var(${varPrefix})`,
              color: `var(${varPrefix}-foreground)`
            }}
          >
            Principal
          </div>
          <p className="text-xs font-mono" style={{ color: 'var(--foreground-tertiary)' }}>{varPrefix}</p>
        </div>
        
        <div>
          <div 
            className="h-12 rounded border flex items-center justify-center text-sm mb-2"
            style={{ 
              backgroundColor: `var(${varPrefix}-bg)`,
              borderColor: `var(${varPrefix}-border)`,
              color: `var(${varPrefix})`
            }}
          >
            Subtil
          </div>
          <p className="text-xs font-mono" style={{ color: 'var(--foreground-tertiary)' }}>{varPrefix}-bg</p>
        </div>
      </div>
    </div>
  );
};

export const ColorPalette: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="mb-2">Palette de couleurs</h2>
        <p style={{ color: 'var(--foreground-secondary)' }}>
          Système chromatique institutionnel extrait du logo officiel Brackeva.
        </p>
      </div>

      {/* Couleurs Brackeva signature */}
      <div>
        <h3 className="mb-4">Couleurs Brackeva (Logo)</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="mb-3 text-sm font-semibold">Orange signature</h4>
            <div className="space-y-3">
              <ColorBlock 
                name="Orange Brackeva" 
                varName="--brackeva-orange"
                hexCode="#E55226"
                description="Flamme principale du logo"
              />
              <ColorBlock 
                name="Orange clair" 
                varName="--brackeva-orange-light"
                hexCode="#FF6B3D"
                description="Variante lumineuse"
              />
              <ColorBlock 
                name="Orange foncé" 
                varName="--brackeva-orange-dark"
                hexCode="#C73D16"
                description="Variante sombre"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Bleu institutionnel</h4>
            <div className="space-y-3">
              <ColorBlock 
                name="Bleu Brackeva" 
                varName="--brackeva-blue"
                hexCode="#2B4A7C"
                description="Bleu principal du logo"
              />
              <ColorBlock 
                name="Bleu clair" 
                varName="--brackeva-blue-light"
                hexCode="#3A5B8E"
                description="Variante lumineuse"
              />
              <ColorBlock 
                name="Bleu foncé" 
                varName="--brackeva-blue-dark"
                hexCode="#1E3559"
                description="Variante sombre"
              />
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Bleu secondaire</h4>
            <div className="space-y-3">
              <ColorBlock 
                name="Bleu-gris" 
                varName="--brackeva-blue-grey"
                hexCode="#5B7B9D"
                description="Texte 'kantoor' du logo"
              />
              <ColorBlock 
                name="Bleu-gris clair" 
                varName="--brackeva-blue-grey-light"
                hexCode="#7A95B5"
                description="Variante lumineuse"
              />
              <ColorBlock 
                name="Bleu-gris foncé" 
                varName="--brackeva-blue-grey-dark"
                hexCode="#4A6A8A"
                description="Variante sombre"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Couleurs institutionnelles */}
      <div>
        <h3 className="mb-4">Couleurs institutionnelles</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ColorBlock 
            name="Primaire" 
            varName="--primary"
            hexCode="#2B4A7C"
            description="Bleu institutionnel - Actions principales"
          />
          <ColorBlock 
            name="Secondaire" 
            varName="--secondary"
            hexCode="#5B7B9D"
            description="Bleu-gris - Actions secondaires"
          />
          <ColorBlock 
            name="Accent" 
            varName="--accent"
            hexCode="#E55226"
            description="Orange signature - Points d'attention"
          />
        </div>
      </div>

      {/* Couleurs de statut */}
      <div>
        <h3 className="mb-4">Couleurs de statut</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatusColorBlock 
            name="Succès"
            varPrefix="--success"
            description="Opérations réussies, validations juridiques"
          />
          <StatusColorBlock 
            name="Avertissement"
            varPrefix="--warning"
            description="Actions requises, délais approchants (utilise l'orange Brackeva)"
          />
          <StatusColorBlock 
            name="Erreur"
            varPrefix="--error"
            description="Erreurs critiques, rejets"
          />
          <StatusColorBlock 
            name="Information"
            varPrefix="--info"
            description="Notes contextuelles, aide (utilise le bleu Brackeva)"
          />
        </div>
      </div>

      {/* Couleurs neutres */}
      <div>
        <h3 className="mb-4">Couleurs neutres</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorBlock name="Background" varName="--background" hexCode="#FAFBFC" />
          <ColorBlock name="Surface" varName="--surface" hexCode="#FFFFFF" />
          <ColorBlock name="Border" varName="--border" hexCode="#E2E8F0" />
          <ColorBlock name="Muted" varName="--muted" hexCode="#F1F5F9" />
        </div>
      </div>

      {/* Textes */}
      <div>
        <h3 className="mb-4">Hiérarchie de textes</h3>
        <div className="border rounded-lg p-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-1" style={{ color: 'var(--foreground-tertiary)' }}>Primaire • #1E3559</p>
              <div 
                className="h-12 rounded flex items-center px-4"
                style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}
              >
                Texte principal - Haute lisibilité
              </div>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: 'var(--foreground-tertiary)' }}>Secondaire • #5B7B9D</p>
              <div 
                className="h-12 rounded flex items-center px-4"
                style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground-secondary)' }}
              >
                Texte secondaire - Informations complémentaires
              </div>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: 'var(--foreground-tertiary)' }}>Tertiaire • #94A3B8</p>
              <div 
                className="h-12 rounded flex items-center px-4"
                style={{ backgroundColor: 'var(--muted)', color: 'var(--foreground-tertiary)' }}
              >
                Texte tertiaire - Métadonnées, microcopy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};