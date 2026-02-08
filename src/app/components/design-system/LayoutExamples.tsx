import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings, 
  Bell,
  Search,
  ChevronRight,
  TrendingUp,
  Clock,
  AlertCircle
} from 'lucide-react';

export const LayoutExamples: React.FC = () => {
  return (
    <section className="space-y-12">
      <div>
        <h2 className="mb-2">Grilles & Layouts</h2>
        <p style={{ color: 'var(--foreground-secondary)' }}>
          Structures de mise en page pour dashboards, formulaires et interfaces de gestion.
        </p>
      </div>

      {/* Layout Dashboard */}
      <div>
        <h3 className="mb-4">Dashboard Layout</h3>
        <div 
          className="border rounded-xl overflow-hidden"
          style={{ 
            borderColor: 'var(--border)',
            backgroundColor: 'var(--background)',
            height: '600px'
          }}
        >
          {/* Header */}
          <div 
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{ 
              borderColor: 'var(--border)',
              backgroundColor: 'var(--surface)'
            }}
          >
            <div className="flex items-center gap-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center font-semibold"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)'
                }}
              >
                B
              </div>
              <h3 className="m-0">Brackeva</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Rechercher un dossier..."
                  className="px-4 py-2 pl-10 rounded-lg border w-64"
                  style={{ 
                    borderColor: 'var(--input-border)',
                    backgroundColor: 'var(--input-background)'
                  }}
                />
                <Search 
                  size={18} 
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--foreground-tertiary)' }}
                />
              </div>
              <button 
                className="w-10 h-10 rounded-lg flex items-center justify-center relative"
                style={{ backgroundColor: 'var(--muted)' }}
              >
                <Bell size={18} style={{ color: 'var(--foreground)' }} />
                <span 
                  className="absolute top-1 right-1 w-2 h-2 rounded-full"
                  style={{ backgroundColor: 'var(--error)' }}
                />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(100%-73px)]">
            {/* Sidebar */}
            <div 
              className="w-64 border-r p-4"
              style={{ 
                borderColor: 'var(--border)',
                backgroundColor: 'var(--sidebar)'
              }}
            >
              <nav className="space-y-1">
                {[
                  { icon: LayoutDashboard, label: 'Tableau de bord', active: true },
                  { icon: FileText, label: 'Dossiers', active: false },
                  { icon: Users, label: 'Débiteurs', active: false },
                  { icon: Settings, label: 'Paramètres', active: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors"
                    style={{
                      backgroundColor: item.active ? 'var(--sidebar-accent)' : 'transparent',
                      color: item.active ? 'var(--sidebar-accent-foreground)' : 'var(--sidebar-foreground)'
                    }}
                  >
                    <item.icon size={18} />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-auto">
              <div className="mb-6">
                <h1 className="mb-1">Tableau de bord</h1>
                <p style={{ color: 'var(--foreground-secondary)' }}>
                  Vue d'ensemble de votre activité
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Dossiers actifs', value: '247', trend: '+12%', icon: FileText, color: 'success' },
                  { label: 'En attente', value: '18', trend: '-5%', icon: Clock, color: 'warning' },
                  { label: 'Alertes', value: '3', trend: '', icon: AlertCircle, color: 'error' },
                ].map((stat) => (
                  <div 
                    key={stat.label}
                    className="p-4 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--card-border)',
                      backgroundColor: 'var(--card)'
                    }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <stat.icon 
                        size={20} 
                        style={{ color: `var(--${stat.color})` }} 
                      />
                      {stat.trend && (
                        <span 
                          className="text-xs font-medium"
                          style={{ 
                            color: stat.trend.startsWith('+') ? 'var(--success)' : 'var(--error)'
                          }}
                        >
                          {stat.trend}
                        </span>
                      )}
                    </div>
                    <p className="text-2xl font-semibold mb-1">{stat.value}</p>
                    <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div 
                className="border rounded-lg"
                style={{ borderColor: 'var(--card-border)' }}
              >
                <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                  <h4 className="m-0">Activité récente</h4>
                </div>
                <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i}
                      className="px-4 py-3 flex items-center justify-between hover:bg-[var(--hover)] transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--muted)' }}
                        >
                          <FileText size={16} style={{ color: 'var(--foreground)' }} />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Dossier 2025/BE/00123{i}</p>
                          <p className="text-xs" style={{ color: 'var(--foreground-tertiary)' }}>
                            Il y a {i} heure{i > 1 ? 's' : ''}
                          </p>
                        </div>
                      </div>
                      <ChevronRight size={18} style={{ color: 'var(--foreground-tertiary)' }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Formulaire */}
      <div>
        <h3 className="mb-4">Formulaire juridique</h3>
        <div 
          className="border rounded-xl p-8 max-w-3xl"
          style={{ 
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface)'
          }}
        >
          <div className="mb-6">
            <h2 className="mb-2">Nouveau dossier de recouvrement</h2>
            <p style={{ color: 'var(--foreground-secondary)' }}>
              Complétez les informations ci-dessous pour créer un nouveau dossier.
            </p>
          </div>

          <form className="space-y-6">
            {/* Section 1 */}
            <div>
              <h3 className="mb-4 pb-2 border-b" style={{ borderColor: 'var(--border)' }}>
                1. Informations générales
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Type de procédure *</label>
                  <select 
                    className="w-full px-4 py-2.5 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--input-border)',
                      backgroundColor: 'var(--input-background)'
                    }}
                  >
                    <option>Saisie mobilière</option>
                    <option>Saisie immobilière</option>
                    <option>Saisie conservatoire</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">Référence interne</label>
                  <input 
                    type="text"
                    placeholder="Ex: REF-2026-001"
                    className="w-full px-4 py-2.5 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--input-border)',
                      backgroundColor: 'var(--input-background)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="mb-4 pb-2 border-b" style={{ borderColor: 'var(--border)' }}>
                2. Débiteur
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2">Nom / Raison sociale *</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2.5 rounded-lg border"
                      style={{ 
                        borderColor: 'var(--input-border)',
                        backgroundColor: 'var(--input-background)'
                      }}
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Numéro d'entreprise (BCE)</label>
                    <input 
                      type="text"
                      placeholder="0123.456.789"
                      className="w-full px-4 py-2.5 rounded-lg border"
                      style={{ 
                        borderColor: 'var(--input-border)',
                        backgroundColor: 'var(--input-background)'
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Adresse complète *</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2.5 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--input-border)',
                      backgroundColor: 'var(--input-background)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="mb-4 pb-2 border-b" style={{ borderColor: 'var(--border)' }}>
                3. Créance
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Montant principal *</label>
                  <div className="relative">
                    <input 
                      type="text"
                      placeholder="0.00"
                      className="w-full px-4 py-2.5 pl-10 rounded-lg border"
                      style={{ 
                        borderColor: 'var(--input-border)',
                        backgroundColor: 'var(--input-background)'
                      }}
                    />
                    <span 
                      className="absolute left-4 top-1/2 -translate-y-1/2"
                      style={{ color: 'var(--foreground-tertiary)' }}
                    >
                      €
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block mb-2">Date d'échéance *</label>
                  <input 
                    type="date"
                    className="w-full px-4 py-2.5 rounded-lg border"
                    style={{ 
                      borderColor: 'var(--input-border)',
                      backgroundColor: 'var(--input-background)'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
              <button 
                type="button"
                className="px-6 py-2.5 rounded-lg border font-medium"
                style={{ 
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)'
                }}
              >
                Annuler
              </button>
              <button 
                type="submit"
                className="px-6 py-2.5 rounded-lg font-medium"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  color: 'var(--primary-foreground)'
                }}
              >
                Créer le dossier
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Spacing System */}
      <div>
        <h3 className="mb-4">Système d'espacement</h3>
        <div 
          className="border rounded-lg p-6"
          style={{ 
            borderColor: 'var(--border)',
            backgroundColor: 'var(--surface)'
          }}
        >
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-2 font-medium">Espacement standard</p>
              <div className="flex items-center gap-4">
                {[4, 8, 12, 16, 24, 32, 48, 64].map((size) => (
                  <div key={size} className="flex flex-col items-center gap-2">
                    <div 
                      className="rounded"
                      style={{ 
                        width: `${size}px`, 
                        height: `${size}px`,
                        backgroundColor: 'var(--primary)'
                      }}
                    />
                    <span className="text-xs" style={{ color: 'var(--foreground-tertiary)' }}>
                      {size}px
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
              <p className="text-sm mb-3 font-medium">Usage recommandé</p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--foreground-secondary)' }}>Espacement minimal</span>
                  <code className="font-mono">4px</code>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--foreground-secondary)' }}>Entre éléments proches</span>
                  <code className="font-mono">8px</code>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--foreground-secondary)' }}>Entre composants</span>
                  <code className="font-mono">16px</code>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--foreground-secondary)' }}>Entre sections</span>
                  <code className="font-mono">32px</code>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--foreground-secondary)' }}>Padding de cards</span>
                  <code className="font-mono">24px</code>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--foreground-secondary)' }}>Marges de page</span>
                  <code className="font-mono">48px</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Border Radius */}
      <div>
        <h3 className="mb-4">Coins arrondis</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Small', var: '--radius-sm', size: '4px' },
            { name: 'Medium', var: '--radius-md', size: '6px' },
            { name: 'Default', var: '--radius', size: '8px' },
            { name: 'Large', var: '--radius-lg', size: '10px' },
          ].map((item) => (
            <div 
              key={item.name}
              className="border rounded-lg p-4"
              style={{ borderColor: 'var(--border)' }}
            >
              <div 
                className="w-full h-20 mb-3"
                style={{ 
                  backgroundColor: 'var(--primary)',
                  borderRadius: `var(${item.var})`
                }}
              />
              <p className="font-medium text-sm">{item.name}</p>
              <p className="text-xs" style={{ color: 'var(--foreground-tertiary)' }}>
                {item.size} / {item.var}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
