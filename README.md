# Hero Landing Page

Uma landing page moderna e responsiva construída com Next.js 13+, apresentando um portfólio profissional e showcase de serviços. O projeto implementa internacionalização (pt-BR/en), animações e um sofisticado sistema de design.

## 🚀 Tecnologias

- **Framework**: Next.js 13+
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS com animações personalizadas
- **Componentes UI**: Radix UI + shadcn/ui
- **Animações**: Framer Motion
- **Ícones**: Lucide React
- **Formulários**: React Hook Form
- **Validação**: Zod
- **Internacionalização**: Implementação customizada com TypeScript

## 📦 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/hero-landing-page.git
cd hero-landing-page
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXXXX
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:3000`

## 🏗️ Estrutura do Projeto

```
├── app/                    # Diretório Next.js
│   ├── [locale]/          # Rotas específicas por idioma
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout raiz com metadados
├── components/            # Componentes React
│   ├── ui/               # Componentes UI reutilizáveis
│   └── sections/         # Seções da página
├── data/                 # Dados estáticos e configurações
├── hooks/                # Hooks React customizados
├── lib/                  # Funções utilitárias
├── public/              # Assets estáticos
└── types/               # Definições TypeScript
```

## ✨ Funcionalidades

- Design responsivo para todos os tamanhos de tela
- Modo escuro por padrão
- Animações e transições suaves
- Galeria de imagens com visualização em modal
- Carrossel interativo para projetos
- Integração com chat via Typebot
- Integração com analytics (GTM & Facebook Pixel)
- Otimização SEO com metadados
- Estados de carregamento e tratamento de erros

## 🌐 Internacionalização

O projeto suporta dois idiomas:

- Português (Brasil) - padrão
- Inglês

A mudança de idioma é feita através do seletor no header e afeta:

- Todo o conteúdo textual
- Formatação de datas e números
- URLs das páginas

## 📝 Gerenciamento de Conteúdo

### Projetos

Os projetos são gerenciados através do arquivo `data/projects.ts`. Cada projeto deve incluir:

- ID único
- Título
- Descrição
- Imagem principal
- Link (opcional)
- Tecnologias utilizadas
- Galeria de imagens (opcional)

### Traduções

As traduções são gerenciadas em `lib/translations.ts`. Para adicionar novos textos:

1. Adicione a chave no tipo `TranslationKey`
2. Adicione a tradução em ambos os idiomas no objeto `translations`

## 🎨 Design System

O projeto utiliza um sistema de design consistente baseado em:

- Cores: Esquema de cores personalizado com foco no verde (#047857)
- Tipografia: Inter e Playfair Display
- Espaçamento: Sistema de grid responsivo
- Componentes: Biblioteca shadcn/ui customizada

## 🚀 Deploy

O projeto está configurado para deploy na Vercel com:

- Deploys automáticos da branch main
- Configuração de variáveis de ambiente
- Suporte a Edge Functions
- Otimização de assets

## 📈 Analytics

O projeto inclui integração com:

- Google Tag Manager
- Facebook Pixel
- Eventos de conversão personalizados

## 🧪 Testes

Para garantir a qualidade do código:

```bash
# Lint
npm run lint
# ou
yarn lint

# Type checking
npm run type-check
# ou
yarn type-check
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, envie um email para seu-email@exemplo.com ou abra uma issue no GitHub.

---

Desenvolvido com ❤️ por [Seu Nome](https://github.com/seu-usuario)
