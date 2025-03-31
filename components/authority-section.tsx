export function AuthoritySection() {
  return (
    <section className="py-20 futuristic-bg">
      <div className="absolute inset-0 z-0 grid-pattern"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Experiência real, com resultados.</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Trabalho atualmente na DBC Company, e já atuei diretamente em projetos com Vivo, Sicredi, Accenture e
            startups.
          </p>
          <p className="text-lg mb-6 text-muted-foreground">Meus projetos não são experimentais.</p>
          <p className="text-lg mb-10 text-muted-foreground">
            São usados no dia a dia por pessoas reais — e entregam valor para empresas que exigem robustez e resultado.
          </p>

          <div className="flex justify-center items-center gap-12 mt-12 opacity-70">
            <img src="/placeholder.svg?height=50&width=100" alt="Vivo" className="h-8 w-auto filter invert" />
            <img src="/placeholder.svg?height=50&width=100" alt="Sicredi" className="h-8 w-auto filter invert" />
            <img src="/placeholder.svg?height=50&width=100" alt="Accenture" className="h-8 w-auto filter invert" />
          </div>
        </div>
      </div>
    </section>
  )
}

