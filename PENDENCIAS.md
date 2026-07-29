# Pendências antes de publicar

Só entrou no site informação verificada publicamente:

| Dado | Fonte |
|---|---|
| Nome | Perfil público da empresa |
| Endereço — Av. São João, 1267, Centro, São João do Polêsine/RS, 97230-000 | Google Business Profile |
| Horário — seg a sex, 8h00–17h30; sáb/dom fechado | Google Business Profile |
| Coordenadas — 29°37′01″S 53°26′49″W | Google Business Profile |
| Instagram — @felice_engenharia_topografia | Informado no briefing |

Não foi encontrado publicamente: telefone, e-mail, CNPJ, registro CREA, lista de serviços, equipe, portfólio, site anterior, identidade visual. O Instagram bloqueia leitura automatizada. Nada disso foi preenchido por suposição.

## Tokens a substituir no código

Buscar por `{{` no `index.html`.

| Token | Onde aparece |
|---|---|
| `{{TELEFONE_E164}}` | JSON-LD, CTA, contato, rodapé — formato `5555999999999` |
| `{{TELEFONE_FORMATADO}}` | contato, rodapé — formato `(55) 99999-9999` |
| `{{EMAIL}}` | JSON-LD, CTA, contato, rodapé |
| `{{CNPJ}}` e `{{REGISTRO_CREA}}` | rodapé |
| `{{MUNICIPIOS_ATENDIDOS}}` e `{{RAIO_DE_ATENDIMENTO}}` | área de atuação |
| `{{PROJETO_*}}` e `{{PROJETOS_INTRO}}` | seção Projetos |

Trocar também o domínio `www.feliceengenharia.com.br` pelo domínio real em `index.html` (canonical, Open Graph, JSON-LD), `robots.txt` e `sitemap.xml`.

## Serviços — confirmar antes de publicar

Os seis cartões da seção Serviços estão marcados com `data-confirmar="true"` no HTML. Eles reproduzem as categorias que você listou no briefing como exemplos, não informação verificada da empresa. **Apagar os cartões que não correspondem ao que a Felice presta** e ajustar os itens de cada lista. Depois de confirmados, remover o atributo `data-confirmar`.

## Seção Projetos

Está com atributo `hidden` — não aparece no site. Preencher os três blocos e remover o `hidden` quando houver material.

## Textos institucionais

Os blocos de "Quem somos", "Diferenciais" e "Processo de trabalho" descrevem método, não fatos verificáveis: nenhum número, ano de fundação, certificação, cliente ou obra foi afirmado. Ainda assim precisam de leitura do responsável técnico antes do ar.

## Imagens

Ver `assets/img/LEIA-ME.txt`. Sem fotos, os slots exibem preenchimento técnico e o layout já reserva a proporção final.
