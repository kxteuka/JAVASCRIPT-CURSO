const fs = require('fs');
const path = require('path');

const rootDir = path.resolve('.');
const excludeDir = '6. Exámen práctico';

function processHtmlFile(filePath) {
    try {
        const html = fs.readFileSync(filePath, 'utf8');
        const scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
        let match;
        let scripts = [];
        while ((match = scriptRegex.exec(html)) !== null) {
            if (match[1].trim()) {
                scripts.push(match[1].trim());
            }
        }

        if (scripts.length > 0) {
            const jsCode = scripts.join('\n\n');
            const jsFile = filePath.replace(/\.html$/, '.js');
            fs.writeFileSync(jsFile, jsCode, 'utf8');
            // Elimina todos los bloques <script>...</script> y añade solo la referencia externa
            const newHtml = html.replace(scriptRegex, '')
                .replace('</body>', `    <script src="${path.basename(jsFile)}"></script>\n</body>`);
            fs.writeFileSync(filePath, newHtml, 'utf8');
            console.log(`Procesado: ${filePath}`);
        } else {
            console.log(`Sin <script> en: ${filePath}`);
        }
    } catch (err) {
        console.error(`Error procesando ${filePath}: ${err.message}`);
    }
}

function walk(dir) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (err) {
        console.error(`No se pudo leer la carpeta: ${dir}\n${err.message}`);
        return;
    }
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (entry.name === excludeDir) {
                console.log(`Saltando carpeta excluida: ${fullPath}`);
                continue;
            }
            walk(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            console.log(`Intentando procesar: ${fullPath}`);
            processHtmlFile(fullPath);
        }
    }
}

walk(rootDir);
console.log('Separación completada.');