import fs from 'fs';
import YAML from 'yamljs';
import path from 'path';
import merge from 'lodash.merge';

const openapiDir = [
  path.join(process.cwd(), 'src', 'router', 'openapi'),
  path.join(process.cwd(), 'dist', 'router', 'openapi'),
  path.join(__dirname, 'router', 'openapi'),
  path.join(process.cwd(), 'router', 'openapi'),
];

const foundDir = openapiDir.find(d => fs.existsSync(d) && fs.statSync(d).isDirectory());

let swaggerSpec: any;

if (foundDir) {
  try {
    const files = fs.readdirSync(foundDir).filter(f => /\.(ya?ml)$/i.test(f)).sort();
    for (const f of files) {
      const p = path.join(foundDir, f);
      try {
        const partial = YAML.load(p);
        if (partial && typeof partial === 'object') {
          swaggerSpec = merge({}, swaggerSpec, partial);
        }
      } catch (err: any) {
        console.error(`[swagger] failed to load ${p}: `, err);
      }
      console.info(`[swagger] merged spec from ${foundDir} (${f} file)`);
    }
  } catch (err: any) {
    console.warn(`[swagger] error reading openapi dirr: `, err);
  }
} else {
  console.error(`[swagger] OpenAPI directory does not exists.`);
}

export default swaggerSpec;