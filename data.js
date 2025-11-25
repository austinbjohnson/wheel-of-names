// Benchmark Data
// This file serves as the registry for all historical runs.
// Add new runs to the TOP of the array (newest first).

window.benchmarkData = [
    {
        id: '20251124_1505',
        timestamp: '2025-11-24 15:05',
        evalFile: 'evaluations/20251124_1505_results.md',
        models: [
            { 
                id: 'opus', 
                name: 'Claude 4.5 Opus', 
                path: 'results/20251124_1356/claude-4.5-opus.html', 
                winner: true 
            },
            { 
                id: 'gpt', 
                name: 'GPT 5.1 Codex', 
                path: 'results/20251124_1356/gpt-5.1-codex-high-fast.html' 
            },
            { 
                id: 'sonnet', 
                name: 'Claude 4.5 Sonnet', 
                path: 'results/20251124_1356/claude-4.5-sonnet.html' 
            },
            { 
                id: 'gemini', 
                name: 'Gemini 3 Pro', 
                path: 'results/20251124_1356/gemini-3-pro.html' 
            },
            { 
                id: 'haiku', 
                name: 'Claude 4.5 Haiku', 
                path: 'results/20251124_1356/claude-4.5-haiku.html' 
            },
            { 
                id: 'composer', 
                name: 'Composer 1', 
                path: 'results/20251124_1356/composer-1.html',
                failed: true
            },
            { 
                id: 'grok', 
                name: 'Grok Code Fast', 
                path: 'results/20251124_1356/grok-code-fast-1.html',
                failed: true
            }
        ]
    },
    {
        id: '20251124_1222',
        timestamp: '2025-11-24 12:22',
        evalFile: 'evaluations/20251124_1222_results.md',
        models: [
            { 
                id: 'gpt', 
                name: 'GPT 5.1 Codex', 
                path: 'results/20251124_1222/gpt-5.1-codex-high-fast.html', 
                winner: true 
            },
            { 
                id: 'gemini', 
                name: 'Gemini 3 Pro', 
                path: 'results/20251124_1222/gemini-3-pro.html' 
            },
            { 
                id: 'sonnet', 
                name: 'Claude 4.5 Sonnet', 
                path: 'results/20251124_1222/claude-4.5-sonnet.html' 
            },
            { 
                id: 'composer', 
                name: 'Composer 1', 
                path: 'results/20251124_1222/composer-1.html' 
            },
            { 
                id: 'haiku', 
                name: 'Claude 4.5 Haiku', 
                path: 'results/20251124_1222/claude-4.5-haiku.html' 
            },
            { 
                id: 'grok', 
                name: 'Grok Code Fast', 
                path: 'results/20251124_1222/grok-code-fast-1.html' 
            }
        ]
    },
    {
        id: '20251124_1100',
        timestamp: '2025-11-24 11:00',
        evalFile: 'evaluations/20251124_1100_results.md',
        models: [
            { 
                id: 'sonnet', 
                name: 'Claude 4.5 Sonnet', 
                path: 'results/20251124_1100/claude-4.5-sonnet.html', 
                winner: true 
            },
            { 
                id: 'gpt', 
                name: 'GPT 5.1 Codex', 
                path: 'results/20251124_1100/gpt-5.1-codex-high-fast.html' 
            },
            { 
                id: 'gemini', 
                name: 'Gemini 3 Pro', 
                path: 'results/20251124_1100/gemini-3-pro.html' 
            },
            { 
                id: 'haiku', 
                name: 'Claude 4.5 Haiku', 
                path: 'results/20251124_1100/claude-4.5-haiku.html' 
            },
            { 
                id: 'grok', 
                name: 'Grok Code Fast', 
                path: 'results/20251124_1100/grok-code-fast-1.html' 
            },
            { 
                id: 'composer', 
                name: 'Composer 1', 
                path: 'results/20251124_1100/composer-1.html' 
            }
        ]
    }
];

