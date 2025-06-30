# Progetto "Portfolio-Scolastico"

## Tecnologie

## Struttura delle cartelle e dei file

SMACSS-CSS

## Struttura nei file

BEM-CSS

| Categoria SMACSS    | Cartella/Funzione | Descrizione                                                        |
| ------------------- | ----------------- | ------------------------------------------------------------------ |
| 0. Vendor           | `0 vendor/`       | CSS esterno di librerie/framework (es. Bootstrap, Normalize, ecc.) |
| 1. Base             | `1 settings/`     | Stili globali, reset, tipografia, variabili                        |
| 2. Layout           | `2 layout/`       | Struttura della pagina (header, main, footer, sezioni)             |
| 3. Module/Component | `3 components/`   | UI riutilizzabili come bottoni, card, form                         |
| 4. Utilities        | `4 utilities/`    | Classi helper: margini, padding, visibilità, ecc.                  |
| 5. Themes           | `5 themes/`       | Stili legati ai temi (dark, light, branding diversi, ecc.)         |

| Motivo                               | Spiegazione                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| 🔧 È uno schema di layout            | Gestisce dimensioni e posizionamento, non contenuti specifici                |
| 🌐 È riutilizzabile in tutto il sito | Può essere applicata ad "About", "Skills", "Cyber", ecc.                     |
| 📐 Non ha significato semantico      | Non è una UI element con stile proprio come un `card`, `modal`, `form`, ecc. |

> 🧠 Regola mentale SMACSS:

-   Layout = struttura visiva generale (contenitori, righe, colonne, sezioni, griglie)

-   Components = blocchi riutilizzabili di UI con significato (es: .button, .card, .content-block)

```
your-project/
├── src/
│ └── css/
│ ├── base/
│ │ ├── \_reset.css // Reset CSS (es. Normalize.css, o tuo reset)
│ │ ├── \_typography.css // Stili base per testo (body, h1, p, a, etc.)
│ │ └── \_variables.css // Le tue variabili CSS (--colore, --spacing, etc.)
│ │ └── \_globals.css // Stili globali minori, box-sizing
│ │
│ ├── layout/
│ │ ├── \_header.css // Stili specifici per il layout dell'header
│ │ ├── \_footer.css // Stili specifici per il layout del footer
│ │ ├── \_grid.css // Stili per il sistema a griglia generale (se ne hai uno globale)
│ │ └── \_sections.css // Stili per i layout principali delle sezioni (es. .about-section, .cyber-section)
│ │
│ ├── components/ <-- QUI VA content-block.css
│ │ ├── \_buttons.css // I tuoi stili per i bottoni
│ │ ├── \_card.css // Stili per .card e .card-grid
│ │ ├── \_content-block.css // Stili per .content-block, .heading, .paragraph
│ │ ├── \_media-block.css // Stili per .media-block
│ │ ├── \_forms.css // Stili per form
│ │ └── ... altri componenti riutilizzabili
│ │
│ ├── pages/
│ │ ├── \_home.css // Stili specifici solo per la homepage
│ │ ├── \_contact.css // Stili specifici solo per la pagina contatti
│ │ └── ...
│ │
│ ├── utilities/ // (Opzionale) classi di utility per piccole override
│ │ ├── \_spacing-helpers.css // es. .m-0, .p-sm
│ │ └── \_text-helpers.css // es. .text-center, .text-bold
│ │
│ └── main.css // Il file principale che importa tutti gli altri
```
