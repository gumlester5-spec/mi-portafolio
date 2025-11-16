
import React, { useState, useEffect } from 'react';

const TEXT_SEQUENCE = [
    { text: "Bienvenido a mi portafolio", className: "text-white" },
    { text: "Desarrollo Web", className: "text-cyan-400" },
    { text: "Desarrollo de Apps Web PWA", className: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500" },
    { text: "Apps Web con Integración de IA", className: "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500" }
];

const WelcomeOverlay: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [animationState, setAnimationState] = useState('in'); // 'in' o 'out'
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (index >= TEXT_SEQUENCE.length) {
            // Inicia la desaparición del overlay
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1000); // Duración de la animación de salida del overlay
            return () => clearTimeout(timer);
        }

        // Configura los temporizadores para el ciclo de animación del texto actual
        setAnimationState('in');

        // Temporizador para empezar a desvanecer el texto actual
        const fadeOutTimer = setTimeout(() => {
            setAnimationState('out');
        }, 3000); // 1s de fade-in + 2s de visibilidad

        // Temporizador para pasar al siguiente texto
        const nextTextTimer = setTimeout(() => {
            setIndex(prevIndex => prevIndex + 1);
        }, 4000); // 1s fade-in + 2s visible + 1s fade-out

        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(nextTextTimer);
        };
    }, [index]);

    if (!isVisible) {
        return null;
    }

    const isExitingOverlay = index >= TEXT_SEQUENCE.length;
    const currentItem = TEXT_SEQUENCE[index];

    return (
        <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${isExitingOverlay ? 'opacity-0' : 'opacity-100'}`}>
            {currentItem && (
                <h1 
                    key={index} 
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center px-4 ${currentItem.className} ${animationState === 'in' ? 'animate-fade-in-custom' : 'animate-fade-out-custom'}`}
                >
                    {currentItem.text}
                </h1>
            )}
        </div>
    );
};

export default WelcomeOverlay;