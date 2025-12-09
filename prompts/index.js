// Prompt Registry
// Maps prompt versions to their metadata for display in the UI.
// Add new prompts here when creating new versions.

window.promptRegistry = {
    'v1': {
        name: 'Zapier Brand',
        file: 'prompts/v1.md',
        description: 'Full styling with Zapier brand colors and guidelines'
    },
    'v2': {
        name: 'No Styling',
        file: 'prompts/v2.md',
        description: 'No styling guidelines - tests model default aesthetics'
    },
    'v3': {
        name: 'Dark Mode',
        file: 'prompts/v3.md',
        description: 'Dark mode styling requirements'
    }
};

