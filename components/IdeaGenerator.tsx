
import React, { useState } from 'react';
import { generateProjectIdeas } from '../services/geminiService';
import { Idea } from '../types';
import SparklesIcon from './icons/SparklesIcon';

const IdeaGenerator: React.FC = () => {
    const [topic, setTopic] = useState<string>('');
    const [ideas, setIdeas] = useState<Idea[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async () => {
        if (!topic.trim()) {
            setError('Por favor, introduce un tema.');
            return;
        }
        setIsLoading(true);
        setError(null);
        setIdeas([]);
        try {
            const result = await generateProjectIdeas(topic);
            setIdeas(result);
        } catch (err: any) {
            setError(err.message || 'Ocurrió un error desconocido.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 animate-fade-in-up border border-slate-700/50" style={{animationDelay: '500ms'}}>
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
                <SparklesIcon className="w-8 h-8 text-indigo-400" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Generador de Ideas con Gemini</h2>
            </div>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto sm:mx-0 text-center sm:text-left">¿Sin inspiración? Describe un tema y deja que la IA de Gemini te sugiera tu próximo gran proyecto.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Ej: 'IA para la música', 'Web3', 'React Native'"
                    className="flex-grow bg-slate-700 border border-slate-600 text-white rounded-md px-4 py-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-500 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generando...
                        </>
                    ) : (
                       'Generar Ideas'
                    )}
                </button>
            </div>
            
            {error && <p className="text-red-400 text-center">{error}</p>}
            
            {ideas.length > 0 && (
                <div className="mt-8 space-y-4">
                    {ideas.map((idea, index) => (
                        <div key={index} className="bg-slate-700/50 p-4 rounded-lg animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
                            <h4 className="font-bold text-indigo-300">{idea.title}</h4>
                            <p className="text-slate-300">{idea.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default IdeaGenerator;