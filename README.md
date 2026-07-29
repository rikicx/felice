# Felice Engenharia e Topografia — site institucional

Site estático de página única. Vite serve o projeto em desenvolvimento e gera o pacote de produção.

## Rodar

```bash
npm install
npm run dev
```

O Chrome abre sozinho em `http://localhost:5173`. Qualquer alteração em `index.html`, `styles.css` ou `main.js` recarrega a página na hora.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento na porta 5173, com recarga automática |
| `npm run build` | Gera `dist/` — HTML, CSS e JS minificados, prontos para hospedagem |
| `npm run preview` | Serve o `dist/` na porta 4173 para conferir o build antes de publicar |

## Estrutura

```
felice-engenharia/
├── index.html                 página completa: conteúdo, SEO e Schema.org
├── package.json
├── vite.config.js
├── PENDENCIAS.md              campos a confirmar com o cliente
├── assets/
│   ├── css/styles.css         tokens, layout, componentes, seções
│   ├── js/main.js             menu, revelações, mapa sob demanda
│   └── img/                   slots de fotografia (ver LEIA-ME.txt)
└── public/                    copiado sem alteração para a raiz do site
    ├── favicon.svg
    ├── robots.txt
    ├── sitemap.xml
    └── site.webmanifest
```

Arquivos em `public/` são servidos na raiz: `public/robots.txt` fica em `/robots.txt`.

## Editar

Abra a pasta `felice-engenharia` no VS Code — a pasta em si, onde está o `index.html`.

`Cmd+Shift+F` e busque:

- `{{` — todos os campos que faltam (telefone, e-mail, CNPJ, CREA, projetos, área de atuação)
- `data-confirmar` — os seis cartões de serviço que precisam de validação do cliente

## Publicar

`npm run build` e suba o conteúdo de `dist/` para Netlify, Vercel, Cloudflare Pages, GitHub Pages ou qualquer hospedagem estática. Não há backend.

Antes de publicar, troque `www.feliceengenharia.com.br` pelo domínio real em `index.html` (canonical, Open Graph, JSON-LD), `public/robots.txt` e `public/sitemap.xml`.

## Observações

As fontes vêm do Google Fonts por CDN. Sem internet o site cai para Helvetica/Arial e fica visualmente mais fraco — não é erro de código.

O mapa do Google só carrega depois do clique no bloco de contato. É intencional: evita chamada a terceiros no primeiro carregamento.
