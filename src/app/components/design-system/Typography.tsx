import React from 'react';

export const Typography: React.FC = () => {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="mb-2">Typographie</h2>
        <p style={{ color: 'var(--foreground-secondary)' }}>
          Inter, optimisée pour une lisibilité maximale dans les interfaces juridiques.
        </p>
      </div>

      {/* Échelle typographique */}
      <div>
        <h3 className="mb-4">Échelle typographique</h3>
        <div className="border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border)' }}>
          <table className="w-full">
            <thead style={{ backgroundColor: 'var(--table-header)' }}>
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium">Élément</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Taille</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Poids</th>
                <th className="text-left px-6 py-3 text-sm font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <h1 className="m-0">Titre H1</h1>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>30px / 1.875rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Semibold (600)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Titres de pages principales</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <h2 className="m-0">Titre H2</h2>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>24px / 1.5rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Semibold (600)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Sections majeures</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <h3 className="m-0">Titre H3</h3>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>20px / 1.25rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Semibold (600)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Sous-sections, cards</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <h4 className="m-0">Titre H4</h4>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>18px / 1.125rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Medium (500)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Titres de groupes</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <p className="m-0">Corps de texte</p>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>16px / 1rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Regular (400)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Texte standard, formulaires</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <small className="block">Petit texte</small>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>14px / 0.875rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Regular (400)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Labels, métadonnées</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--table-border)' }}>
                <td className="px-6 py-4">
                  <span className="text-microcopy block">Microcopy</span>
                </td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>12px / 0.75rem</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Regular (400)</td>
                <td className="px-6 py-4 text-sm" style={{ color: 'var(--foreground-secondary)' }}>Badges, tooltips, aide</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Exemple de hiérarchie */}
      <div>
        <h3 className="mb-4">Exemple de hiérarchie</h3>
        <div className="border rounded-lg p-8 space-y-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
          <div>
            <h1>Dossier n° 2025/BE/001234</h1>
            <p className="text-microcopy mt-2">Créé le 8 février 2026 • Dernière modification il y a 2 heures</p>
          </div>
          
          <div>
            <h2>Informations du débiteur</h2>
            <p className="mt-2">
              Les informations ci-dessous concernent le débiteur principal identifié dans la procédure 
              de recouvrement. Veuillez vérifier l'exactitude des données avant validation.
            </p>
          </div>

          <div>
            <h3>Coordonnées</h3>
            <div className="mt-3 space-y-2">
              <div>
                <label className="block mb-1">Nom complet</label>
                <p className="text-sm">Jean Dupont</p>
              </div>
              <div>
                <label className="block mb-1">Adresse</label>
                <p className="text-sm">Rue de la Loi 123, 1000 Bruxelles</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4" style={{ borderColor: 'var(--border)' }}>
            <small>Ces informations sont confidentielles et protégées par le secret professionnel.</small>
          </div>
        </div>
      </div>

      {/* Poids de police */}
      <div>
        <h3 className="mb-4">Poids disponibles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
            <p style={{ fontWeight: 400 }} className="text-2xl mb-2">Regular (400)</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Corps de texte, paragraphes, descriptions</p>
          </div>
          <div className="border rounded-lg p-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
            <p style={{ fontWeight: 500 }} className="text-2xl mb-2">Medium (500)</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Labels, boutons, navigation</p>
          </div>
          <div className="border rounded-lg p-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
            <p style={{ fontWeight: 600 }} className="text-2xl mb-2">Semibold (600)</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Titres, emphasis importantes</p>
          </div>
          <div className="border rounded-lg p-6" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--surface)' }}>
            <p style={{ fontWeight: 700 }} className="text-2xl mb-2">Bold (700)</p>
            <p className="text-sm" style={{ color: 'var(--foreground-secondary)' }}>Emphasis critiques (usage limité)</p>
          </div>
        </div>
      </div>
    </section>
  );
};
