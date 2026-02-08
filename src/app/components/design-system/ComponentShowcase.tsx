import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Info, 
  FileText, 
  Clock, 
  User,
  Search,
  ChevronDown,
  Calendar,
  DollarSign
} from 'lucide-react';

export const ComponentShowcase: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  return (
    <section className="space-y-12">
      <div>
        <h2 className="mb-2">Composants UI</h2>
        <p style={{ color: 'var(--foreground-secondary)' }}>
          Bibliothèque de composants sobres et professionnels, optimisés pour les interfaces juridiques.
        </p>
      </div>

      {/* Boutons */}
      <div>
        <h3 className="mb-4">Boutons</h3>
        <div className="space-y-6">
          {/* Boutons primaires */}
          <div>
            <p className="text-sm mb-3 font-medium">Primaire</p>
            <div className="flex flex-wrap gap-3">
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-colors"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)' 
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                Valider le dossier
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)' 
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
              >
                <FileText size={18} />
                Créer un acte
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-opacity"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)',
                  opacity: 0.5,
                  cursor: 'not-allowed'
                }}
                disabled
              >
                Désactivé
              </button>
            </div>
          </div>

          {/* Boutons secondaires */}
          <div>
            <p className="text-sm mb-3 font-medium">Secondaire</p>
            <div className="flex flex-wrap gap-3">
              <button 
                className="px-4 py-2 rounded-lg font-medium border transition-colors"
                style={{ 
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--surface)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--surface)'}
              >
                Annuler
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium border flex items-center gap-2 transition-colors"
                style={{ 
                  borderColor: 'var(--border)',
                  color: 'var(--foreground)',
                  backgroundColor: 'var(--surface)'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--hover)'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--surface)'}
              >
                <Search size={18} />
                Rechercher
              </button>
            </div>
          </div>

          {/* Boutons de statut */}
          <div>
            <p className="text-sm mb-3 font-medium">Statuts</p>
            <div className="flex flex-wrap gap-3">
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-opacity"
                style={{ 
                  backgroundColor: 'var(--success)', 
                  color: 'var(--success-foreground)' 
                }}
              >
                Approuver
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-opacity"
                style={{ 
                  backgroundColor: 'var(--warning)', 
                  color: 'var(--warning-foreground)' 
                }}
              >
                Attention requise
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium transition-opacity"
                style={{ 
                  backgroundColor: 'var(--error)', 
                  color: 'var(--error-foreground)' 
                }}
              >
                Rejeter
              </button>
            </div>
          </div>

          {/* Tailles */}
          <div>
            <p className="text-sm mb-3 font-medium">Tailles</p>
            <div className="flex flex-wrap items-center gap-3">
              <button 
                className="px-3 py-1.5 text-sm rounded font-medium"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)' 
                }}
              >
                Petit
              </button>
              <button 
                className="px-4 py-2 rounded-lg font-medium"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)' 
                }}
              >
                Moyen
              </button>
              <button 
                className="px-6 py-3 rounded-lg font-medium text-lg"
                style={{ 
                  backgroundColor: 'var(--primary)', 
                  color: 'var(--primary-foreground)' 
                }}
              >
                Grand
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Champs de formulaire */}
      <div>
        <h3 className="mb-4">Champs de formulaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2">Numéro de dossier</label>
            <input 
              type="text"
              placeholder="Ex: 2025/BE/001234"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg border transition-colors outline-none"
              style={{ 
                borderColor: 'var(--input-border)',
                backgroundColor: 'var(--input-background)',
                color: 'var(--foreground)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-focus)';
                e.currentTarget.style.outline = '2px solid var(--ring)';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--input-border)';
                e.currentTarget.style.outline = 'none';
              }}
            />
            <small className="block mt-1.5">Format obligatoire: AAAA/BE/NNNNNN</small>
          </div>

          <div>
            <label className="block mb-2">Type de procédure</label>
            <div className="relative">
              <select 
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border appearance-none transition-colors outline-none"
                style={{ 
                  borderColor: 'var(--input-border)',
                  backgroundColor: 'var(--input-background)',
                  color: 'var(--foreground)'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-focus)';
                  e.currentTarget.style.outline = '2px solid var(--ring)';
                  e.currentTarget.style.outlineOffset = '2px';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--input-border)';
                  e.currentTarget.style.outline = 'none';
                }}
              >
                <option value="">Sélectionner...</option>
                <option value="saisie">Saisie mobilière</option>
                <option value="immobiliere">Saisie immobilière</option>
                <option value="conservatoire">Saisie conservatoire</option>
              </select>
              <ChevronDown 
                size={18} 
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
                style={{ color: 'var(--foreground-tertiary)' }}
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2">Observations juridiques</label>
            <textarea 
              placeholder="Saisir vos observations..."
              rows={4}
              className="w-full px-4 py-2.5 rounded-lg border transition-colors outline-none resize-none"
              style={{ 
                borderColor: 'var(--input-border)',
                backgroundColor: 'var(--input-background)',
                color: 'var(--foreground)'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-focus)';
                e.currentTarget.style.outline = '2px solid var(--ring)';
                e.currentTarget.style.outlineOffset = '2px';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'var(--input-border)';
                e.currentTarget.style.outline = 'none';
              }}
            />
          </div>

          <div className="md:col-span-2">
            <label className="flex items-center gap-3 cursor-pointer w-fit">
              <input 
                type="checkbox"
                checked={checkboxValue}
                onChange={(e) => setCheckboxValue(e.target.checked)}
                className="w-5 h-5 rounded border cursor-pointer"
                style={{ 
                  borderColor: 'var(--input-border)',
                  accentColor: 'var(--primary)'
                }}
              />
              <span>J'atteste que les informations sont exactes et conformes</span>
            </label>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="mb-4">Badges</h3>
        <div className="flex flex-wrap gap-3">
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: 'var(--success-bg)', 
              color: 'var(--success)',
              border: '1px solid var(--success-border)'
            }}
          >
            <CheckCircle2 size={14} />
            Validé
          </span>
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: 'var(--warning-bg)', 
              color: 'var(--warning)',
              border: '1px solid var(--warning-border)'
            }}
          >
            <Clock size={14} />
            En attente
          </span>
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: 'var(--error-bg)', 
              color: 'var(--error)',
              border: '1px solid var(--error-border)'
            }}
          >
            <XCircle size={14} />
            Rejeté
          </span>
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: 'var(--info-bg)', 
              color: 'var(--info)',
              border: '1px solid var(--info-border)'
            }}
          >
            <Info size={14} />
            Information
          </span>
          <span 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: 'var(--muted)', 
              color: 'var(--muted-foreground)'
            }}
          >
            <User size={14} />
            Assigné
          </span>
        </div>
      </div>

      {/* Alertes */}
      <div>
        <h3 className="mb-4">Alertes & Notifications</h3>
        <div className="space-y-4">
          <div 
            className="p-4 rounded-lg border-l-4 flex gap-3"
            style={{ 
              backgroundColor: 'var(--success-bg)',
              borderLeftColor: 'var(--success)',
              borderTop: '1px solid var(--success-border)',
              borderRight: '1px solid var(--success-border)',
              borderBottom: '1px solid var(--success-border)'
            }}
          >
            <CheckCircle2 size={20} style={{ color: 'var(--success)', flexShrink: 0 }} />
            <div>
              <p className="font-medium" style={{ color: 'var(--success)' }}>Dossier validé avec succès</p>
              <p className="text-sm mt-1" style={{ color: 'var(--success)' }}>
                Le dossier n° 2025/BE/001234 a été validé et transmis au greffe.
              </p>
            </div>
          </div>

          <div 
            className="p-4 rounded-lg border-l-4 flex gap-3"
            style={{ 
              backgroundColor: 'var(--warning-bg)',
              borderLeftColor: 'var(--warning)',
              borderTop: '1px solid var(--warning-border)',
              borderRight: '1px solid var(--warning-border)',
              borderBottom: '1px solid var(--warning-border)'
            }}
          >
            <AlertTriangle size={20} style={{ color: 'var(--warning)', flexShrink: 0 }} />
            <div>
              <p className="font-medium" style={{ color: 'var(--warning)' }}>Action requise</p>
              <p className="text-sm mt-1" style={{ color: 'var(--warning)' }}>
                3 dossiers nécessitent votre validation avant le 15 février 2026.
              </p>
            </div>
          </div>

          <div 
            className="p-4 rounded-lg border-l-4 flex gap-3"
            style={{ 
              backgroundColor: 'var(--error-bg)',
              borderLeftColor: 'var(--error)',
              borderTop: '1px solid var(--error-border)',
              borderRight: '1px solid var(--error-border)',
              borderBottom: '1px solid var(--error-border)'
            }}
          >
            <XCircle size={20} style={{ color: 'var(--error)', flexShrink: 0 }} />
            <div>
              <p className="font-medium" style={{ color: 'var(--error)' }}>Erreur de validation</p>
              <p className="text-sm mt-1" style={{ color: 'var(--error)' }}>
                Les champs "Montant de la créance" et "Date d'échéance" sont obligatoires.
              </p>
            </div>
          </div>

          <div 
            className="p-4 rounded-lg border-l-4 flex gap-3"
            style={{ 
              backgroundColor: 'var(--info-bg)',
              borderLeftColor: 'var(--info)',
              borderTop: '1px solid var(--info-border)',
              borderRight: '1px solid var(--info-border)',
              borderBottom: '1px solid var(--info-border)'
            }}
          >
            <Info size={20} style={{ color: 'var(--info)', flexShrink: 0 }} />
            <div>
              <p className="font-medium" style={{ color: 'var(--info)' }}>Information</p>
              <p className="text-sm mt-1" style={{ color: 'var(--info)' }}>
                Les délais légaux pour les significations sont de 8 jours ouvrables.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h3 className="mb-4">Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            className="p-6 rounded-xl border transition-all"
            style={{ 
              borderColor: 'var(--card-border)',
              backgroundColor: 'var(--card)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--success-bg)' }}
            >
              <FileText size={24} style={{ color: 'var(--success)' }} />
            </div>
            <h4 className="mb-2">Dossiers actifs</h4>
            <p className="text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>247</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
              +12 ce mois-ci
            </p>
          </div>

          <div 
            className="p-6 rounded-xl border transition-all"
            style={{ 
              borderColor: 'var(--card-border)',
              backgroundColor: 'var(--card)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--warning-bg)' }}
            >
              <Clock size={24} style={{ color: 'var(--warning)' }} />
            </div>
            <h4 className="mb-2">En attente</h4>
            <p className="text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>18</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
              Validation requise
            </p>
          </div>

          <div 
            className="p-6 rounded-xl border transition-all"
            style={{ 
              borderColor: 'var(--card-border)',
              backgroundColor: 'var(--card)',
              boxShadow: 'var(--shadow)'
            }}
          >
            <div 
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              <DollarSign size={24} style={{ color: 'var(--accent-foreground)' }} />
            </div>
            <h4 className="mb-2">Montant recouvré</h4>
            <p className="text-3xl font-semibold mb-1" style={{ color: 'var(--foreground)' }}>€2.4M</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>
              Année en cours
            </p>
          </div>
        </div>
      </div>

      {/* Tableau */}
      <div>
        <h3 className="mb-4">Tableaux</h3>
        <div 
          className="border rounded-lg overflow-hidden"
          style={{ borderColor: 'var(--table-border)' }}
        >
          <table className="w-full">
            <thead style={{ backgroundColor: 'var(--table-header)' }}>
              <tr>
                <th className="text-left px-6 py-3 font-medium">Dossier</th>
                <th className="text-left px-6 py-3 font-medium">Débiteur</th>
                <th className="text-left px-6 py-3 font-medium">Montant</th>
                <th className="text-left px-6 py-3 font-medium">Échéance</th>
                <th className="text-left px-6 py-3 font-medium">Statut</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: '2025/BE/001234', debtor: 'Dupont SPRL', amount: '€12,450', date: '15 fév. 2026', status: 'validated' },
                { id: '2025/BE/001235', debtor: 'Martin SA', amount: '€8,920', date: '20 fév. 2026', status: 'pending' },
                { id: '2025/BE/001236', debtor: 'Bernard & Co', amount: '€15,780', date: '12 fév. 2026', status: 'urgent' },
              ].map((row, i) => (
                <tr 
                  key={row.id}
                  className="transition-colors cursor-pointer"
                  style={{ 
                    borderTop: i > 0 ? '1px solid var(--table-border)' : 'none'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--table-row-hover)'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <td className="px-6 py-4">
                    <span className="font-medium font-mono text-sm">{row.id}</span>
                  </td>
                  <td className="px-6 py-4">{row.debtor}</td>
                  <td className="px-6 py-4 font-medium">{row.amount}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} style={{ color: 'var(--foreground-tertiary)' }} />
                      <span>{row.date}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {row.status === 'validated' && (
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: 'var(--success-bg)', 
                          color: 'var(--success)',
                          border: '1px solid var(--success-border)'
                        }}
                      >
                        <CheckCircle2 size={14} />
                        Validé
                      </span>
                    )}
                    {row.status === 'pending' && (
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: 'var(--warning-bg)', 
                          color: 'var(--warning)',
                          border: '1px solid var(--warning-border)'
                        }}
                      >
                        <Clock size={14} />
                        En attente
                      </span>
                    )}
                    {row.status === 'urgent' && (
                      <span 
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: 'var(--error-bg)', 
                          color: 'var(--error)',
                          border: '1px solid var(--error-border)'
                        }}
                      >
                        <AlertTriangle size={14} />
                        Urgent
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
