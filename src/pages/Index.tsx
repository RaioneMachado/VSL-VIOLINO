import { VideoSection } from "@/components/VideoSection";
import { FeatureCard } from "@/components/FeatureCard";
import { CTAButton } from "@/components/CTAButton";
import { FAQItem } from "@/components/FAQItem";
import { Accordion } from "@/components/ui/accordion";
import {
  Music,
  Download,
  Clock,
  Shield,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Violin,
  Guitar,
  Piano,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-glow animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-16 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="text-center mb-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-4">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm text-foreground font-semibold">
                🎻 97 violinistas já adquiriram hoje!
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight font-display">
              O <span className="text-primary glow-text-blue">maior acervo</span> de{" "}
              <span className="text-primary glow-text-blue">VÍDEO PARTITURAS</span> para{" "}
              <span className="text-accent glow-text-blue">VIOLINO & INSTRUMENTOS EM C</span>!
            </h1>
            
            <p className="text-lg md:text-xl text-accent mb-4 max-w-3xl mx-auto">
              <span className="font-bold">HOJE: ACESSO COMPLETO + 200 MÚSICAS EXTRAS!</span> {" "}
              <span className="font-bold">Perfeito para violino, flauta, oboé e todos os instrumentos em Dó!</span>
            </p>
            
            {/* Instrument Icons */}
            <div className="flex justify-center items-center gap-6 mt-6 mb-4">
              <div className="flex flex-col items-center gap-2">
                <Violin className="w-10 h-10 text-primary" />
                <span className="text-sm font-medium">Violino</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Music className="w-10 h-10 text-primary" />
                <span className="text-sm font-medium">Flauta</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Guitar className="w-10 h-10 text-primary" />
                <span className="text-sm font-medium">Violão</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Piano className="w-10 h-10 text-primary" />
                <span className="text-sm font-medium">Piano</span>
              </div>
            </div>
          </section>

          {/* Main Video Section */}
          <section className="mb-16 flex justify-center">
            <div className="w-full max-w-4xl text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                Veja como funciona para VIOLINO e instrumentos em Dó!
              </h3>
              <div className="aspect-video w-full overflow-hidden rounded-2xl">
                <iframe
                  src="https://player-vz-03224ce4-c55.tv.pandavideo.com.br/embed/?v=1d9e6102-a94d-4f44-ad66-98ae1e5851d8"
                  className="w-full h-full border-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Vídeo Partituras Premium para Violino"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-2 font-display">
              <span className="text-primary glow-text-blue">Material específico</span> para{" "}
              <span className="font-bold text-accent">VIOLINO</span> e instrumentos em <span className="font-bold text-accent">DÓ</span>
            </h2>
            <p className="text-center text-lg text-muted-foreground mb-8">
              Todas as partituras já estão na afinação correta para seu instrumento!
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
              <FeatureCard
                icon={Violin}
                title="Especial para Violino"
                description="Partituras na afinação correta do violino (Sol-Ré-Lá-Mi)"
              />
              <FeatureCard
                icon={Music}
                title="Instrumentos em Dó"
                description="Perfeito para flauta, piano, violão e todos os instrumentos em Dó"
              />
              <FeatureCard
                icon={TrendingUp}
                title="Plataforma Organizada"
                description="Material categorizado por estilo e dificuldade. Economize tempo!"
              />
              <FeatureCard
                icon={Download}
                title="Download Ilimitado"
                description="Vídeos em mp4 de alta qualidade. Use sem internet!"
              />
              <FeatureCard
                icon={Clock}
                title="Playbacks Prontos"
                description="Já com timing perfeito. É só tocar junto!"
              />
              <FeatureCard
                icon={Star}
                title="+200 Músicas"
                description="Acervo completo com clássicos, populares e muito mais!"
              />
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-8 md:p-12 glow-blue">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-6 font-display">
              <span className="text-primary glow-text-blue">Especialmente desenvolvido</span> para{" "}
              <span className="text-accent">VIOLINISTAS</span>!
            </h2>

            <div className="max-w-4xl mx-auto">
              <p className="text-center text-lg md:text-xl text-muted-foreground mb-6">
                <span className="font-bold text-foreground">Chega de adaptar partituras!</span> Nosso material já vem pronto para o violino e instrumentos em Dó.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Violin className="w-5 h-5" /> Para Violino
                  </h4>
                  <p className="text-sm">Todas as músicas já estão na clave de Sol, com afinação e dedilhados ideais para violino.</p>
                </div>
                <div className="bg-accent/10 p-4 rounded-xl">
                  <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <Music className="w-5 h-5" /> Para Instrumentos em C
                  </h4>
                  <p className="text-sm">Perfeito para flauta, piano, violão, oboé e todos os instrumentos que leem em clave de Sol.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Video Examples Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Veja exemplos para <span className="text-primary glow-text-blue">VIOLINO</span>
            </h2>

            <div className="space-y-16">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Canon in D - Violino
                </h3>
                <p className="text-muted-foreground mb-6">Clássico eterno já adaptado para violino!</p>
                <VideoSection
                  videoId="DV6NjgTrqsw"
                  description="Perfeito para apresentações e estudos. Note a clareza da partitura para violino!"
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Hallelujah - Violino
                </h3>
                <p className="text-muted-foreground mb-6">Emoção pura com arranjo especial para violino!</p>
                <VideoSection
                  videoId="5aJXBiYMHps"
                  description="Arranjo elegante e emocionante, ideal para violino solo."
                />
              </div>

              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary glow-text-blue mb-4 font-display">
                  Photograph - Violino
                </h3>
                <p className="text-muted-foreground mb-6">Sucesso internacional adaptado para violino!</p>
                <VideoSection
                  videoId="nDklQjCFxJE"
                  description="Note a qualidade premium dos playbacks e partituras específicas para violino."
                />
              </div>
            </div>
          </section>

          {/* Social Proof */}
          <section id="depoimentos" className="mb-20 scroll-mt-32">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-4 font-display">
              O que nossos <span className="text-primary glow-text-blue">violinistas</span> dizem
            </h2>

            <p className="text-center text-muted-foreground mb-12 text-lg">
              <span className="font-bold text-foreground">Centenas de violinistas</span> já transformaram suas apresentações
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img
                  src="https://videopartituras.com/wp-content/uploads/2025/01/IMG_5024-768x1017.jpg"
                  alt="Depoimento de violinista"
                  className="w-full rounded-lg"
                />
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 glow-blue">
                <img
                  src="/depoimento-2.jpg"
                  alt="Depoimento de violinista"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* Guarantee Section */}
          <section className="mb-20 bg-card/50 backdrop-blur-sm border border-accent/30 rounded-3xl p-8 md:p-12 glow-green">
            <div className="flex flex-col items-center text-center">
              <div className="bg-accent/20 p-6 rounded-full mb-6">
                <Shield className="w-16 h-16 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
                <span className="text-accent">100% Seguro</span> com 7 Dias de Garantia!
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                <span className="font-bold text-foreground">Desenvolvido por violinistas para violinistas!</span>{" "}
                <span className="font-bold text-foreground">7 dias de garantia:</span> se não for perfeito para seu violino, devolvemos 100%!
              </p>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="preco" className="mb-20 scroll-mt-24 md:scroll-mt-32">
            <div className="text-center mb-8 animate-pulse">
              <div className="inline-block bg-gradient-to-r from-accent to-accent/80 rounded-2xl p-4 mb-4 glow-green shadow-2xl">
                <p className="text-2xl md:text-3xl text-accent-foreground font-black mb-0 tracking-tight">
                  ⚡ HOJE: ACESSO COMPLETO PARA VIOLINO! ⚡
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-gradient-to-br from-accent/20 via-primary/20 to-accent/10 backdrop-blur-sm border-4 border-accent/50 rounded-3xl p-8 md:p-12 glow-green shadow-2xl animate-scale-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Violin className="w-6 h-6 text-accent" />
                  <span className="text-accent font-bold">ESPECIAL PARA VIOLINO</span>
                </div>
                
                <p className="text-red-500 text-lg mb-2 line-through">
                  de R$ 197<span className="text-sm">,00</span>
                </p>
                <div className="relative inline-block">
                  <p className="text-7xl md:text-8xl font-black text-accent glow-text-green mb-4 font-display animate-pulse">
                    R$ 67<span className="text-4xl md:text-5xl">,00</span>
                  </p>
                  <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full rotate-12 animate-bounce">
                    60% OFF
                  </div>
                </div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  Pagamento único • Acesso vitalício
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-bold">Mais de 200 vídeo partituras</span> para violino e instrumentos em Dó
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-bold">+200 músicas extras</span> incluídas hoje
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">
                    <span className="font-bold">Material específico para violino</span> - afinação correta
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Perfeito para flauta, piano, violão e todos instrumentos em Dó</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Download ilimitado em alta qualidade</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <p className="text-foreground">Acesso vitalício + Garantia de 7 dias</p>
                </div>
              </div>

              <div className="text-center">
                <CTAButton href="https://pay.kirvano.com/41dff247-6962-426e-b53c-295bfd5b049d" size="xl">
                  SIM, QUERO ACESSO PARA MEU VIOLINO!
                </CTAButton>
              </div>

              <div className="mt-6 p-4 bg-primary/10 rounded-xl">
                <p className="text-sm text-center text-foreground font-bold">
                  🎻 <span className="text-accent">ESPECIAL VIOLINO:</span> Todas as partituras já estão na clave de Sol e afinação correta!
                </p>
              </div>

              <p className="text-sm text-center text-muted-foreground mt-4">
                ✅ ACESSO IMEDIATO APÓS PAGAMENTO CONFIRMADO!
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12 font-display">
              Dúvidas sobre <span className="text-primary glow-text-blue">VIOLINO</span>?
            </h2>

            <div className="max-w-3xl mx-auto bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 md:p-8">
              <Accordion type="single" collapsible className="space-y-4">
                <FAQItem
                  value="item-1"
                  question="1) As partituras são específicas para violino?"
                  answer="SIM! Todas as partituras estão na clave de Sol, com afinação Sol-Ré-Lá-Mi e dedilhados ideais para violino. Perfeitas também para flauta, piano e todos os instrumentos em Dó."
                />
                <FAQItem
                  value="item-2"
                  question="2) Como vou receber as vídeo partituras?"
                  answer="Você vai receber o acesso à plataforma no e-mail inserido no ato da compra."
                />
                <FAQItem
                  value="item-3"
                  question="3) Posso baixar as vídeo partituras?"
                  answer="Sim. Você pode baixar todas as vídeo partituras no seu celular, computador ou tablet. Podendo usar sem acesso à internet."
                />
                <FAQItem
                  value="item-4"
                  question="4) Após a compra, em quanto tempo recebo o acesso ao material?"
                  answer="Após confirmado o pagamento o acesso é imediato."
                />
                <FAQItem
                  value="item-5"
                  question="5) Funciona para outros instrumentos além do violino?"
                  answer="Sim! O material é perfeito para todos os instrumentos que leem em clave de Sol: flauta, piano, violão, oboé, clarinete (na afinação padrão) e muito mais!"
                />
              </Accordion>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Violin className="w-6 h-6 text-primary" />
              <p className="text-foreground font-bold">Vídeo Partituras Premium para Violino</p>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2025 Vídeo Partituras Premium. Especialmente desenvolvido para violinistas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;