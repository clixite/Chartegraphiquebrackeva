import React, { useState } from 'react';
import { Moon, Sun, Book, Palette, Layout, Component } from 'lucide-react';
import { BrackevaLogo } from './components/BrackevaLogo';
import { ColorPalette } from './components/design-system/ColorPalette';
import { Typography } from './components/design-system/Typography';
import { ComponentShowcase } from './components/design-system/ComponentShowcase';
import { LayoutExamples } from './components/design-system/LayoutExamples';

type Section = 'intro' | 'colors' | 'typography' | 'components' | 'layouts';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState<Section>('intro');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const sections = [
    { id: 'intro' as Section, label: 'Introduction', icon: Book },
    { id: 'colors' as Section, label: 'Couleurs', icon: Palette },
    { id: 'typography' as Section, label: 'Typographie', icon: Book },
    { id: 'components' as Section, label: 'Composants', icon: Component },
    { id: 'layouts' as Section, label: 'Layouts', icon: Layout },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      {/* Header */}
      <header 
        className="sticky top-0 z-50 border-b"
        style={{ 
          backgroundColor: 'var(--surface)',
          borderColor: 'var(--border)',
          boxShadow: 'var(--shadow-sm)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <BrackevaLogo variant="full" size="md" />
            <div 
              className="h-8 w-px"
              style={{ backgroundColor: 'var(--border)' }}
            />
            <div>
              <h1 className="text-lg mb-0">Design System</h1>
              <p className="text-xs m-0" style={{ color: 'var(--foreground-secondary)' }}>
                Charte graphique institutionnelle
              </p>
            </div>
          </div>
          
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
            style={{ backgroundColor: 'var(--muted)' }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={20} style={{ color: 'var(--foreground)' }} />
            ) : (
              <Moon size={20} style={{ color: 'var(--foreground)' }} />
            )}
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Navigation */}
          <nav 
            className="w-64 sticky top-24 self-start"
            style={{ height: 'calc(100vh - 8rem)' }}
          >
            <div 
              className="border rounded-lg p-4"
              style={{ 
                borderColor: 'var(--border)',
                backgroundColor: 'var(--surface)'
              }}
            >
              <h4 className="mb-3 px-3">Sections</h4>
              <div className="space-y-1">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                      style={{
                        backgroundColor: activeSection === section.id ? 'var(--primary)' : 'transparent',
                        color: activeSection === section.id ? 'var(--primary-foreground)' : 'var(--foreground)'
                      }}
                    >
                      <Icon size={18} />
                      <span className="font-medium">{section.label}</span>
                    </button>
                  );
                })}
              </div>

              <div 
                className="mt-6 pt-6 border-t"
                style={{ borderColor: 'var(--border)' }}
              >
                <p className="text-xs mb-2 px-3" style={{ color: 'var(--foreground-tertiary)' }}>
                  Thème actuel
                </p>
                <div 
                  className="px-3 py-2 rounded-lg flex items-center gap-2"
                  style={{ backgroundColor: 'var(--muted)' }}
                >
                  {darkMode ? <Moon size={16} /> : <Sun size={16} />}
                  <span className="text-sm font-medium">
                    {darkMode ? 'Dark Mode' : 'Light Mode'}
                  </span>
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            {activeSection === 'intro' && (
              <section className="space-y-8">
                <div>
                  <div className="mb-6">
                    <BrackevaLogo variant="full" size="xl" />
                  </div>
                  <h1 className="mb-4">Charte graphique Brackeva</h1>
                  <p className="text-lg" style={{ color: 'var(--foreground-secondary)' }}>
                    Système de design institutionnel pour la gestion intelligente des études d'huissiers de justice en Belgique.
                  </p>
                </div>

                {/* Identité visuelle */}
                <div 
                  className="border rounded-xl p-8"
                  style={{ 
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <h2 className="mb-6">Identité visuelle</h2>
                  <div className="mb-8">
                    <h4 className="mb-4">Logo officiel</h4>
                    <div 
                      className="border rounded-lg p-8 flex items-center justify-center"
                      style={{ 
                        borderColor: 'var(--border)',
                        backgroundColor: '#FFFFFF'
                      }}
                    >
                      <BrackevaLogo variant="full" size="xl" />
                    </div>
                    <p className="text-sm mt-3 text-center" style={{ color: 'var(--foreground-tertiary)' }}>
                      Logo Brackeva - Gerechtsdeurwaarders
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <div 
                        className="mb-4 border rounded-lg p-6 flex items-center justify-center"
                        style={{ 
                          borderColor: 'var(--border)',
                          backgroundColor: '#FFFFFF',
                          minHeight: '120px'
                        }}
                      >
                        <BrackevaLogo variant="compact" size="lg" />
                      </div>
                      <h4 className="mb-2">Usage compact</h4>
                      <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                        Pour les espaces réduits et interfaces mobiles.
                      </p>
                    </div>
                    <div>
                      <div className="mb-4 flex flex-col gap-3">
                        <div 
                          className="h-16 rounded-lg flex items-center justify-center font-semibold text-xl"
                          style={{ 
                            backgroundColor: 'var(--brackeva-blue)',
                            color: '#FFFFFF'
                          }}
                        >
                          Bleu institutionnel
                        </div>
                        <p className="text-xs font-mono" style={{ color: 'var(--foreground-tertiary)' }}>
                          #2B4A7C
                        </p>
                      </div>
                      <h4 className="mb-2">Bleu principal</h4>
                      <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                        Confiance, autorité et sérieux juridique.
                      </p>
                    </div>
                    <div>
                      <div className="mb-4 flex flex-col gap-3">
                        <div 
                          className="h-16 rounded-lg flex items-center justify-center font-semibold text-xl"
                          style={{ 
                            backgroundColor: 'var(--brackeva-orange)',
                            color: '#FFFFFF'
                          }}
                        >
                          Orange signature
                        </div>
                        <p className="text-xs font-mono" style={{ color: 'var(--foreground-tertiary)' }}>
                          #E55226
                        </p>
                      </div>
                      <h4 className="mb-2">Orange Brackeva</h4>
                      <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                        Énergie, action et points d'attention.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Principes */}
                <div 
                  className="border rounded-xl p-8"
                  style={{ 
                    borderColor: 'var(--border)',
                    backgroundColor: 'var(--surface)',
                    boxShadow: 'var(--shadow)'
                  }}
                >
                  <h2 className="mb-6">Principes fondateurs</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ 
                          backgroundColor: 'var(--primary)',
                          color: 'var(--primary-foreground)'
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                          <path d="M2 17L12 22L22 17"/>
                          <path d="M2 12L12 17L22 12"/>
                        </svg>
                      </div>
                      <h3 className="mb-2">Confiance institutionnelle</h3>
                      <p style={{ color: 'var(--foreground-secondary)' }}>
                        Design sobre et autoritaire qui inspire la crédibilité et le sérieux attendu dans l'environnement juridique.
                      </p>
                    </div>
                    <div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ 
                          backgroundColor: 'var(--secondary)',
                          color: 'var(--secondary-foreground)'
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="7" height="7"/>
                          <rect x="14" y="3" width="7" height="7"/>
                          <rect x="14" y="14" width="7" height="7"/>
                          <rect x="3" y="14" width="7" height="7"/>
                        </svg>
                      </div>
                      <h3 className="mb-2">Lisibilité optimale</h3>
                      <p style={{ color: 'var(--foreground-secondary)' }}>
                        Hiérarchie typographique claire et espacements généreux pour faciliter la lecture de documents juridiques complexes.
                      </p>
                    </div>
                    <div>
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        style={{ 
                          backgroundColor: 'var(--accent)',
                          color: 'var(--accent-foreground)'
                        }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                      </div>
                      <h3 className="mb-2">Efficacité discrète</h3>
                      <p style={{ color: 'var(--foreground-secondary)' }}>
                        Intelligence technologique subtile sans ostentation, avec des interactions fluides et prévisibles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ADN de marque */}
                <div>
                  <h2 className="mb-4">ADN de marque</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: 'Sérieux', desc: 'Autorité calme et mesurée' },
                      { label: 'Fiabilité', desc: 'Sécurité et rigueur' },
                      { label: 'Intelligence', desc: 'Technologie discrète' },
                      { label: 'Sobriété', desc: 'Premium sans gadgets' },
                    ].map((trait) => (
                      <div 
                        key={trait.label}
                        className="border rounded-lg p-4"
                        style={{ 
                          borderColor: 'var(--border)',
                          backgroundColor: 'var(--surface)'
                        }}
                      >
                        <h4 className="mb-2">{trait.label}</h4>
                        <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                          {trait.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Codes couleurs */}
                <div 
                  className="border rounded-xl p-8"
                  style={{ 
                    borderColor: 'var(--accent)',
                    backgroundColor: 'var(--surface)'
                  }}
                >
                  <h2 className="mb-4">Codes couleurs officiels</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="mb-3">Couleurs principales</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                          <span style={{ color: 'var(--foreground-secondary)' }}>Bleu institutionnel</span>
                          <span className="font-semibold">#2B4A7C</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                          <span style={{ color: 'var(--foreground-secondary)' }}>Orange Brackeva</span>
                          <span className="font-semibold">#E55226</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                          <span style={{ color: 'var(--foreground-secondary)' }}>Bleu-gris</span>
                          <span className="font-semibold">#5B7B9D</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-3">Textes</h4>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                          <span style={{ color: 'var(--foreground-secondary)' }}>Texte principal</span>
                          <span className="font-semibold">#1E3559</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                          <span style={{ color: 'var(--foreground-secondary)' }}>Texte secondaire</span>
                          <span className="font-semibold">#5B7B9D</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: 'var(--border)' }}>
                          <span style={{ color: 'var(--foreground-secondary)' }}>Texte tertiaire</span>
                          <span className="font-semibold">#94A3B8</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accessibilité */}
                <div 
                  className="border-l-4 rounded-lg p-6"
                  style={{ 
                    borderLeftColor: 'var(--info)',
                    backgroundColor: 'var(--info-bg)',
                    borderTop: '1px solid var(--info-border)',
                    borderRight: '1px solid var(--info-border)',
                    borderBottom: '1px solid var(--info-border)'
                  }}
                >
                  <h3 className="mb-3" style={{ color: 'var(--info)' }}>Accessibilité WCAG AA</h3>
                  <p style={{ color: 'var(--info)' }}>
                    Tous les contrastes de couleurs respectent les normes WCAG AA minimum. Les composants sont conçus pour être utilisables au clavier et compatibles avec les lecteurs d'écran.
                  </p>
                </div>

                {/* Usage */}
                <div>
                  <h2 className="mb-4">Utilisation avec React</h2>
                  <div 
                    className="border rounded-lg p-6"
                    style={{ 
                      borderColor: 'var(--border)',
                      backgroundColor: 'var(--muted)'
                    }}
                  >
                    <pre className="text-sm overflow-x-auto">
                      <code style={{ color: 'var(--foreground)' }}>
{`// Utilisation des tokens CSS
style={{ 
  backgroundColor: 'var(--primary)',
  color: 'var(--primary-foreground)' 
}}

// Classes Tailwind avec tokens
className="bg-[var(--surface)] border-[var(--border)]"

// Logo Brackeva
import { BrackevaLogo } from './components/BrackevaLogo';
<BrackevaLogo variant="full" size="md" />
<BrackevaLogo variant="symbol" size="sm" />

// Tokens principaux:
// --brackeva-orange, --brackeva-blue, --brackeva-blue-grey
// --primary, --secondary, --accent
// --success, --warning, --error, --info`}
                      </code>
                    </pre>
                  </div>
                </div>
              </section>
            )}

            {activeSection === 'colors' && <ColorPalette />}
            {activeSection === 'typography' && <Typography />}
            {activeSection === 'components' && <ComponentShowcase />}
            {activeSection === 'layouts' && <LayoutExamples />}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer 
        className="border-t mt-16"
        style={{ 
          borderColor: 'var(--border)',
          backgroundColor: 'var(--surface)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium mb-1">Brackeva Design System</p>
              <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                v1.0.0 • Février 2026 • Optimisé pour React + Tailwind CSS
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span 
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: 'var(--success-bg)',
                  color: 'var(--success)',
                  border: '1px solid var(--success-border)'
                }}
              >
                WCAG AA
              </span>
              <span 
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: 'var(--info-bg)',
                  color: 'var(--info)',
                  border: '1px solid var(--info-border)'
                }}
              >
                Production Ready
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;