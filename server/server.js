const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../build')));

async function readJsonFile(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading JSON file ${filePath}:`, error);
        return null;
    }
}

async function getDirectoryStructure(dir, language) {
    const items = await fs.readdir(dir, { withFileTypes: true });
    let structure = [];

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            const mainJsonPath = path.join(fullPath, 'main.json');
            let folderInfo = { type: 'folder', name: item.name, path: `/${language}/${item.name}`, children: [] };

            try {
                const mainJson = await readJsonFile(mainJsonPath);
                if (mainJson) {
                    folderInfo = { ...folderInfo, ...mainJson };
                }
            } catch (error) {
                console.error(`Error reading main.json for ${item.name}:`, error);
            }

            folderInfo.children = await getDirectoryStructure(fullPath, `${language}/${item.name}`);
            structure.push(folderInfo);
        } else if (item.name.endsWith('.md')) {
            const content = await fs.readFile(fullPath, 'utf8');
            const nameMatch = content.match(/name="([^"]+)"/);
            const queueMatch = content.match(/queue=(\d+)/);
            const queueInFolderMatch = content.match(/queue_in_folder=(\d+)/);
            const pageName = nameMatch ? nameMatch[1] : item.name.replace('.md', '');
            const queue = queueMatch ? parseInt(queueMatch[1], 10) : Number.MAX_SAFE_INTEGER;
            const queueInFolder = queueInFolderMatch ? parseInt(queueInFolderMatch[1], 10) : Number.MAX_SAFE_INTEGER;
            structure.push({
                type: 'file',
                name: pageName,
                path: `/${language}/${item.name.replace('.md', '')}`,
                queue,
                queue_in_folder: queueInFolder
            });
        }
    }

    return structure;
}


app.get('/api/pages', async (req, res) => {
    const language = req.query.language || 'en';
    const directoryPath = path.join(__dirname, 'markdown', language);

    try {
        const structure = await getDirectoryStructure(directoryPath, language);
        res.json(structure);
    } catch (error) {
        console.error(`Error reading directory structure for ${language}:`, error);
        res.status(500).send('Unable to scan directory');
    }
});

app.get('/api/markdown/:language/*', async (req, res) => {
    const language = req.params.language;
    const filePath = req.params[0];
    const fullPath = path.join(__dirname, 'markdown', language, `${filePath}.md`);

    try {
        const data = await fs.readFile(fullPath, 'utf8');
        res.send(data);
    } catch (error) {
        console.error(`Error reading file ${fullPath}:`, error);
        res.status(404).send('File not found');
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});