# Manoel Teófilo — Sites & Automações

Portfólio de Manoel Teófilo, com foco em sites, automações e presença digital para negócios locais de Fortaleza e Região Metropolitana.

## Tecnologias

- React 19 e Vinext
- TypeScript
- Vite e Cloudflare Vite Plugin
- Drizzle ORM, preparado para uso opcional com Cloudflare D1

## Pré-requisitos

- Node.js 22.13 ou superior
- npm 10 ou superior

## Instalação

```bash
npm ci
```

## Desenvolvimento local

```bash
npm run dev
```

O terminal informará o endereço local para abrir o site no navegador.

## Build de produção

```bash
npm run build
```

O resultado é gerado em `dist/`, que é intencionalmente ignorado pelo Git. Para uma verificação completa, execute também:

```bash
npm run lint
```

## Banco de dados e storage opcionais

O site atual não exige banco de dados nem armazenamento de objetos. Caso esses recursos sejam adicionados, configure os bindings no provedor de hospedagem e, para desenvolvimento local, use as variáveis `D1_BINDING` e `R2_BINDING`. Nenhuma configuração de infraestrutura ou credencial é versionada neste repositório.

## Publicação no Cloudflare Pages

O projeto compila para um runtime Cloudflare, mas a publicação no Pages ainda requer uma etapa de configuração e teste no painel/CLI do Cloudflare: definir o modo de implantação para SSR/Functions compatível com Vinext e confirmar o diretório/artefato que o Pages espera. Uma alternativa é publicar como Cloudflare Worker, que é o caminho diretamente suportado pela integração Vite usada no projeto.

## Privacidade da cópia pública

Esta cópia não contém configurações de hospedagem internas, arquivos de ambiente, credenciais, materiais de prospecção ou capturas de projetos de clientes. Os itens em `public/portfolio/` foram mantidos fora do repositório público até que haja autorização explícita de publicação.

## Créditos

Consulte [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) para os avisos de ativos de terceiros.
