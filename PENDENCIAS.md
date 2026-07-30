# Pendências antes de publicar

Só entrou no site informação verificada publicamente:

| Dado | Fonte |
|---|---|
| Nome | Perfil público da empresa |
| Endereço — Av. São João, 1267, Centro, São João do Polêsine/RS, 97230-000 | Google Business Profile |
| Horário — seg a sex, 8h00–17h30; sáb/dom fechado | Google Business Profile |
| Coordenadas — 29°37′01″S 53°26′49″W | Google Business Profile |
| Instagram — @felice_engenharia_topografia | Informado no briefing |

Não foi encontrado publicamente: CNPJ, registro CREA, equipe, portfólio, site anterior, identidade visual. O Instagram bloqueia leitura automatizada. Nada disso foi preenchido por suposição.

O WhatsApp `(55) 99907-0692`, o e-mail `felicetopografiaeengenharia@gmail.com` e a lista de serviços foram confirmados diretamente pelo cliente.

## Tokens a substituir no código

Buscar por `{{` no `index.html`.

| Token | Onde aparece |
|---|---|
| `{{CNPJ}}` e `{{REGISTRO_CREA}}` | rodapé |
| `{{MUNICIPIOS_ATENDIDOS}}` e `{{RAIO_DE_ATENDIMENTO}}` | área de atuação |
| `{{PROJETO_*}}` e `{{PROJETOS_INTRO}}` | seção Projetos |

Trocar também o domínio `www.feliceengenharia.com.br` pelo domínio real em `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` e `sitemap.xml`.

## Serviços — confirmados pelo cliente

Os seis cartões da seção Serviços foram atualizados com o conteúdo enviado e confirmado pelo cliente. Os atributos `data-confirmar` foram removidos do HTML.

## Seção Projetos

Está com atributo `hidden` — não aparece no site. Preencher os três blocos e remover o `hidden` quando houver material.

## Textos institucionais

Os blocos de "Quem somos", "Diferenciais" e "Processo de trabalho" descrevem método, não fatos verificáveis: nenhum número, ano de fundação, certificação, cliente ou obra foi afirmado. Ainda assim precisam de leitura do responsável técnico antes do ar.

## Imagens

Ver `assets/img/LEIA-ME.txt`. Sem fotos, os slots exibem preenchimento técnico e o layout já reserva a proporção final.
