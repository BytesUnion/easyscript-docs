// src/MarkdownContext.js

import { createContext } from 'react';

export const MarkdownContext = createContext({
    pages: [], // Initial context value
    setPages: () => {} // Placeholder function
});
