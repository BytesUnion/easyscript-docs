export const parseFrontMatter = (content) => {
    const match = content.match(/^---\s*([\s\S]*?)\s*---\s*/);
    if (match) {
        const frontMatter = match[1];
        const lines = frontMatter.split('\n');
        const data = {};
        lines.forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                data[key.trim()] = value.replace(/"/g, '').trim(); // Remove quotes
            }
        });
        return data;
    }
    return {};
};