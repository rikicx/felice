# Pendências antes de publicar

Só entrou no site informação verificada publicamente:

| Dado | Fonte |
|---|---|
| Nome | Perfil público da empresa |
| Endereço — Av. São João, 1267, Centro, São João do Polêsine/RS, 97230-000 | Google Business Profile |
| Horário — seg a sex, 8h00–17h30; sáb/dom fechado | Google Business Profile |
| Coordenadas — 29°37′01″S 53°26′49″W | Google Business Profile |
| Instagram — @felice_engenharia_topografia | Informado no briefing |

Não foi encontrado publicamente: equipe, portfólio e site anterior. O Instagram bloqueia leitura automatizada. Nada disso foi preenchido por suposição.

O CNPJ `59.522.272/0001-02`, o registro profissional `CREA/RS 215.989`, o WhatsApp `(55) 99907-0692`, o e-mail `felicetopografiaeengenharia@gmail.com`, a lista de serviços, o logotipo e a composição institucional foram confirmados diretamente pelo cliente.

## Tokens a substituir no código

Buscar por `{{` no `index.html`.

| Token | Onde aparece |
|---|---|
| `{{PROJETO_*}}` e `{{PROJETOS_INTRO}}` | seção Projetos |

Trocar também o domínio `www.feliceengenharia.com.br` pelo domínio real em `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` e `sitemap.xml`.

## Serviços — confirmados pelo cliente

Os seis cartões da seção Serviços foram atualizados com o conteúdo enviado e confirmado pelo cliente. Os atributos `data-confirmar` foram removidos do HTML.

## Seção Projetos

Está com atributo `hidden` — não aparece no site. Preencher os três blocos e remover o `hidden` quando houver material.

## Textos institucionais

Os blocos de "Quem somos", "Diferenciais" e "Processo de trabalho" descrevem método, não fatos verificáveis: nenhum número, ano de fundação, certificação, cliente ou obra foi afirmado. Ainda assim precisam de leitura do responsável técnico antes do ar.

## Imagens

A composição institucional enviada pelo cliente foi otimizada e aplicada à seção "Quem somos". Ver `assets/img/LEIA-ME.txt` para os demais slots; sem imagens de projetos, eles permanecem ocultos com a seção correspondente.
