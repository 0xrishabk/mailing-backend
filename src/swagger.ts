// ...existing code...
import fs from 'fs';
import YAML from 'yamljs';
import path from 'path';
import merge from 'lodash.merge';

const openapiDirs = [
  path.join(process.cwd(), 'src', 'router', 'openapi'),
  path.join(process.cwd(), 'dist', 'router', 'openapi'),
  path.join(__dirname, 'router', 'openapi'),
  path.join(process.cwd(), 'router', 'openapi'),
];

const foundDir = openapiDirs.find(d => fs.existsSync(d) && fs.statSync(d).isDirectory());

const baseSpec = {
  openapi: '3.0.3',
  info: { title: 'Mailing Backend API', version: '1.0.0' },
  servers: [{ url: 'http://127.0.0.1:3000' }],
  paths: {},
  components: {},
  security: [{ bearerAuth: [] }],
  tags: [],
};

let swaggerSpec: any = baseSpec;

if (foundDir) {
  try {
    const files = fs.readdirSync(foundDir).filter(f => /\.(ya?ml)$/i.test(f)).sort();
    for (const f of files) {
      const p = path.join(foundDir, f);
      try {
        const partial = YAML.load(p);
        if (partial && typeof partial === 'object') {
          // merge tags, components, paths, etc.
          swaggerSpec = merge({}, swaggerSpec, partial);
        }
      } catch (err) {
        console.error(`[swagger] failed to load ${p}:`, err);
      }
    }
    console.info(`[swagger] merged spec from ${foundDir} (${files.length} files)`);
  } catch (err) {
    console.error('[swagger] error reading openapi directory:', err);
  }
} else {
  console.warn('[swagger] openapi folder not found. Searched:', openapiDirs.join(', '));
  // keep baseSpec to avoid crashing
}

export default swaggerSpec;
// ...existing code...