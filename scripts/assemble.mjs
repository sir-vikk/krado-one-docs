import { cpSync, mkdirSync, rmSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const out = resolve(root, '_site')

if (existsSync(out)) rmSync(out, { recursive: true })
mkdirSync(resolve(out, 'docs'), { recursive: true })

cpSync(resolve(root, 'index.html'), resolve(out, 'index.html'))
cpSync(resolve(root, 'logo'), resolve(out, 'logo'), { recursive: true })
cpSync(resolve(root, 'docs/.vitepress/dist'), resolve(out, 'docs'), { recursive: true })

console.log('✓ Assembled _site/ → index.html + logo/ + docs/')
