// particles-config.js

// Tutte le opzioni possono essere trovate qui: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
// La versione slim non ha i seguenti plugin:
// Absorbers, Emitters, PolygonMask, Interactivity Trail
const particlesOptions = {
    background: {
        color: '#fff', // Il colore di sfondo del canvas
    },
    interactivity: {
        events: {
            onClick: {
                // Gestisce l'evento click del mouse
                enable: true,
                mode: 'push', // Aggiunge particelle
            },
            onHover: {
                // Gestisce l'evento hover del mouse
                enable: true,
                mode: 'repulse', // Fa allontanare le particelle dal mouse
            },
            resize: true, // Adatta le interazioni al ridimensionamento della finestra
        },
        modes: {
            push: {
                quantity: 6, // Numero di particelle da aggiungere al click
            },
            repulse: {
                distance: 100, // La distanza delle particelle dal mouse
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: '#000', // Colore delle particelle (bianco)
        },
        links: {
            enable: true, // Abilita i collegamenti tra le particelle
            opacity: 0.3,
            distance: 200,
            color: '#000', // Colore delle linee di collegamento
        },
        move: {
            enable: true, // Fa muovere le particelle
            speed: { min: 1, max: 3 }, // Velocità delle particelle
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
                default: 'out',
            },
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
        number: {
            value: 80, // Numero iniziale di particelle
            density: {
                enable: true,
                value_area: 800,
            },
        },
        opacity: {
            value: { min: 0.3, max: 0.7 }, // Opacità delle particelle
        },
        shape: {
            type: 'circle', // Forma delle particelle
        },
        size: {
            value: { min: 1, max: 3 }, // Dimensione delle particelle
            random: {
                enable: true,
                minimumValue: 1,
            },
            animation: {
                enable: false,
                speed: 40,
                minimumValue: 0.1,
                sync: false,
            },
        },
    },
    detectRetina: true, // Rileva schermi retina per una migliore qualità
};

// tsParticles.load ha due parametri: il primo è l'ID del contenitore, il secondo è un oggetto con le opzioni
// Assicurati che tsParticles sia disponibile globalmente prima di chiamare questa funzione.
// Il modo più semplice è caricare lo script di tsParticles prima di questo file.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof tsParticles !== 'undefined') {
        tsParticles.load('tsparticles', particlesOptions);
    } else {
        console.error(
            'tsParticles non è stato caricato. Assicurati che lo script tsParticles sia incluso prima di particles-config.js.'
        );
    }
});
