/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  Clock, 
  ShieldAlert, 
  TrendingUp, 
  ChevronDown, 
  CheckCircle2, 
  Sparkles, 
  LayoutDashboard, 
  Users, 
  Leaf,
  Menu,
  X,
  Plus,
  Minus
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Logo = ({ className = "h-16" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/logo.png?v=2026" 
        alt="Fluxa Opera" 
        className="h-full w-auto object-contain block"
      />
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Logo className="h-16" />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <a href="#dolor" className="hover:text-brand-accent transition-colors">El Problema</a>
          <a href="#solucion" className="hover:text-brand-accent transition-colors">La Solución</a>
          <a href="#mecanismo" className="hover:text-brand-accent transition-colors flex items-center gap-1.5">
            Metodología
            <span className="bg-brand-accent/10 text-brand-accent text-[10px] px-1.5 py-0.5 rounded-full font-bold">NUEVO</span>
          </a>
          <a href="#faq" className="hover:text-brand-accent transition-colors">Preguntas</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-brand-primary text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
            Solicitar Auditoría
          </button>
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-zinc-200 p-6 space-y-4"
          >
            <a href="#dolor" onClick={() => setIsOpen(false)} className="block text-lg font-medium">El Problema</a>
            <a href="#solucion" onClick={() => setIsOpen(false)} className="block text-lg font-medium">La Solución</a>
            <a href="#mecanismo" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Metodología</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block text-lg font-medium">Preguntas</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
      <div className="section-padding grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-accent text-xs font-bold mb-6 tracking-wide">
            <Sparkles size={14} />
            AUDITORÍA ESTRATÉGICA 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-brand-primary mb-6 leading-[1.1] text-balance">
            ¿Cuánto beneficio estás perdiendo en el trayecto de vuelta?
          </h1>
          <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-xl text-balance">
            Descubre los puntos de fuga de tu logística inversa con nuestra <span className="text-brand-primary font-semibold">Auditoría de Fuga de Beneficios</span>. Detectamos el margen oculto y entregamos la hoja de ruta para convertir devoluciones en ingresos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-zinc-200">
              Solicitar Auditoría Gratuita
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-sm font-medium text-zinc-400">Cupos limitados por mes</p>
          </div>
          
          <div className="mt-12 pt-12 border-t border-zinc-100">
            <p className="text-xs uppercase tracking-widest font-bold text-zinc-400 mb-4">CON LA CONFIANZA DE MANAGERS EN</p>
            <div className="flex flex-wrap gap-8 opacity-40 grayscale items-center">
              <span className="font-bold text-xl italic">LOGISTA</span>
              <span className="font-bold text-xl tracking-tighter uppercase">E-COM-PLAZA</span>
              <span className="font-black text-xl">DISTRIBUA</span>
              <span className="font-mono text-sm border p-1">+1M€ AUDITADO</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-brand-accent/10 blur-3xl rounded-full -z-10" />
          <div className="glass-card rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Margen Recuperado (Est.)</p>
                <p className="text-4xl font-mono font-bold text-brand-success leading-none">+22.4%</p>
              </div>
              <TrendingUp className="text-brand-success" size={40} />
            </div>
            <div className="space-y-4">
              {[
                { label: 'Ciclo de Vida Retorno', val: '14 días → 4 días', trend: 'down' },
                { label: 'Coste Admin / Unidad', val: '3.45€ → 0.80€', trend: 'down' },
                { label: 'Puntos de Venta Activos', val: '+15%', trend: 'up' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-zinc-50 rounded-xl flex items-center justify-between border border-zinc-100">
                  <span className="text-sm font-medium text-zinc-500">{item.label}</span>
                  <span className="font-mono font-bold text-brand-primary">{item.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-zinc-100 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white ring-2 ring-zinc-50" />
                ))}
              </div>
              <p className="text-xs font-semibold text-zinc-500">Únete a +45 managers optimizando su margen</p>
            </div>
          </div>
          {/* Decorative element */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-zinc-100 hidden sm:block"
          >
            <BarChart3 className="text-brand-accent mb-2" />
            <p className="text-xs font-bold whitespace-nowrap">IA Predictiva Activa</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const PainPoint = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 bg-zinc-50 rounded-2xl border border-transparent hover:border-zinc-200 transition-all group"
  >
    <div className="w-14 h-14 rounded-xl bg-white border border-zinc-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{desc}</p>
  </motion.div>
);

const PainSection = () => {
  return (
    <section id="dolor" className="section-padding">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          Tu sistema de devoluciones actual tiene <span className="text-red-500 italic">"agujeros negros"</span>.
        </h2>
        <p className="text-xl text-zinc-500">
          No se trata solo del coste del envío. Es el producto que no se revende a tiempo, las horas de soporte perdidas y el stock inmovilizado.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <PainPoint 
          icon={Clock} 
          title="Mano de obra invisible" 
          desc='Tu equipo gasta 10h/semana en tareas administrativas de bajo valor procesando devoluciones manualmente.' 
        />
        <PainPoint 
          icon={TrendingUp} 
          title="Depreciación acelerada" 
          desc='Tus productos pierden un 15% de valor por cada semana que pasan en el "limbo" logístico sin ser re-certificados.' 
        />
        <PainPoint 
          icon={ShieldAlert} 
          title="Fuga económica invisible" 
          desc='Costes de transporte ineficientes por falta de enrutamiento inteligente hacia el centro de proceso óptimo.' 
        />
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const steps = [
    { title: "Ciclo de Vida", desc: "Cuánto tarda realmente un producto en volver a estar a la venta.", icon: Clock },
    { title: "Eficiencia de Ruta", desc: "Cuántos km de más recorren tus devoluciones innecesariamente.", icon: TrendingUp },
    { title: "Carga Administrativa", desc: "El coste real en salarios de gestionar cada etiqueta manualmente.", icon: Users },
    { title: "Oportunidad de Recuperación", desc: "Cuánto margen ganarías con una calificación asistida por IA.", icon: BarChart3 },
  ];

  return (
    <section id="solucion" className="bg-brand-primary text-white py-24">
      <div className="section-padding">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">
              De la incertidumbre a la claridad financiera.
            </h2>
            <p className="text-xl text-zinc-400 mb-12">
              No es una reunión de ventas disfrazada. Es un diagnóstico técnico profundo donde diseccionamos tu operativa actual.
            </p>
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:bg-brand-accent group-hover:text-white transition-all">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-zinc-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-12 bg-zinc-800 flex items-center px-4 gap-2 border-b border-zinc-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[10px] text-zinc-500 ml-4 font-mono">AUDIT_REPORT_V2.PDF</span>
            </div>
            <div className="p-12 space-y-8 font-mono">
              <div className="h-4 w-1/2 bg-zinc-800 rounded animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-zinc-800/50 rounded-xl border border-zinc-800 p-4 space-y-2">
                  <p className="text-[10px] text-zinc-600">LEAKAGE_RATIO</p>
                  <p className="text-2xl text-red-500">22.5%</p>
                </div>
                <div className="h-32 bg-zinc-800/50 rounded-xl border border-zinc-800 p-4 space-y-2">
                  <p className="text-[10px] text-zinc-600">POTENTIAL_RECOVERY</p>
                  <p className="text-2xl text-brand-success">€142k / yr</p>
                </div>
              </div>
              <div className="h-40 bg-zinc-800/20 rounded-xl border border-zinc-800 p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-800/50 to-transparent" />
                <p className="text-[10px] text-zinc-600 mb-4">OPTIMIZATION_TIMELINE</p>
                <div className="flex items-end gap-2 h-20">
                   {[40, 60, 30, 80, 50, 90].map((h, i) => (
                     <div key={i} className="flex-1 bg-brand-accent rounded-t" style={{height: `${h}%`}} />
                   ))}
                </div>
              </div>
            </div>
            <div className="absolute bottom-10 left-10 right-10 bg-brand-accent p-4 rounded-xl text-center font-bold text-sm">
              HOJA DE RUTA GENERADA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MechanismSection = () => {
  return (
    <section id="mecanismo" className="section-padding">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="p-1 w-fit rounded-full bg-zinc-100 mb-6 font-mono text-[10px] uppercase font-bold text-zinc-500 flex items-center pr-3">
             <span className="bg-white px-2 py-1 rounded-full border border-zinc-200 mr-2">TECH</span>
             IA PREDICTIVA PROPIA
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">Tu logística inversa ha evolucionado. Tu Excel no.</h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8">
            Las hojas de cálculo son herramientas de registro, no de estrategia. Mientras un Excel es una fotografía estática del ayer, nuestra <span className="text-brand-primary font-bold underline decoration-brand-accent/30 underline-offset-4">IA Predictiva</span> es un motor de simulación en tiempo real que anticipa las devoluciones antes de que el cliente las solicite.
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Hemos convertido el caos de las devoluciones en una ventana de rentabilidad. Optimizamos rutas, predecimos depreciación de inventario y automatizamos la logística circular con una precisión que las celdas estáticas simplemente no pueden procesar.
          </p>
        </div>
        <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="bg-zinc-100 aspect-square rounded-3xl flex items-center justify-center">
              <BarChart3 size={48} className="text-zinc-300" />
            </div>
            <div className="bg-brand-accent aspect-[4/3] rounded-3xl p-6 text-white flex flex-col justify-between">
              <TrendingUp size={24} />
              <p className="text-sm font-bold">Proyección de Ahorro</p>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="bg-zinc-900 aspect-[3/4] rounded-3xl p-6 text-white flex flex-col justify-between overflow-hidden relative">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 blur-xl rounded-full" />
              <Sparkles size={24} className="text-yellow-400" />
              <p className="text-sm font-bold">Calificación por IA</p>
            </div>
            <div className="bg-zinc-100 aspect-square rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon: Icon, title, desc }: any) => (
  <div className="glass-card p-8 rounded-3xl border-zinc-100">
    <Icon className="text-brand-accent mb-6" size={32} />
    <h4 className="text-xl font-bold mb-3">{title}</h4>
    <p className="text-zinc-500 leading-relaxed">{desc}</p>
  </div>
);

const DreamSection = () => {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Imagina un lunes sin "incendios" por devoluciones.
           </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <BenefitCard 
            icon={LayoutDashboard} 
            title="Dashboard en tiempo real" 
            desc="Visualiza el margen recuperado segundo a segundo y detecta anomalías antes de que afecten al P&L." 
          />
          <BenefitCard 
            icon={CheckCircle2} 
            title="Clientes enamorados" 
            desc="Portal automático de devoluciones que genera confianza y reduce las llamadas de atención al cliente en un 70%." 
          />
          <BenefitCard 
            icon={Leaf} 
            title="Compliance ESG" 
            desc="Cumple con las normativas europeas de sostenibilidad sin esfuerzo extra gracias al tracking circular." 
          />
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-6">
      <button 
        className="flex items-center justify-between w-full text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-brand-accent' : 'text-zinc-900 group-hover:text-brand-accent'}`}>
          {question}
        </span>
        <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center shrink-0">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-zinc-500 mt-4 leading-relaxed text-lg max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight sticky top-28">Preguntas <br />Frecuentes</h2>
        </div>
        <div className="lg:col-span-2">
          <FAQItem 
            question="¿Necesito instalar algo para la auditoría?" 
            answer="No, en absoluto. Realizamos el análisis offline a partir de tus históricos o mediante un acceso temporal a tus datos de ventas/devs. No alteramos tu flujo actual."
          />
          <FAQItem 
            question="¿Cuánto tiempo quita a mi equipo?" 
            answer="Nuestra auditoría está diseñada para ser ultra-eficiente. Solo requerimos una reunión inicial de 30 minutos y el resto corre de nuestra cuenta."
          />
          <FAQItem 
            question="¿Qué obtengo exactamente al final?" 
            answer="Un informe técnico detallado en PDF donde identificamos los 3 'agujeros negros' de tu logística, el potencial exacto de ahorro en Euros y un plan táctico de 90 días."
          />
        </div>
      </div>
    </section>
  );
};

const FooterCTA = () => (
  <section className="section-padding text-center bg-white border-t border-zinc-100">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8">Deja de adivinar. Empieza a recuperar.</h2>
      <button className="bg-brand-primary text-white text-xl font-bold px-12 py-6 rounded-2xl hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200 mb-6">
        Quiero mi Auditoría de Fuga de Beneficios
      </button>
      <div className="flex items-center justify-center gap-2 text-sm font-bold text-red-500 uppercase tracking-widest bg-red-50 w-fit mx-auto px-4 py-2 rounded-full">
         Cupos limitados a 4 auditorías por mes
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-50 py-12 border-t border-zinc-200">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <Logo className="h-8" />
      <div className="flex gap-8 text-sm text-zinc-500 font-medium">
        <a href="#" className="hover:text-brand-primary transition-colors">Términos</a>
        <a href="#" className="hover:text-brand-primary transition-colors">Privacidad</a>
        <a href="#" className="hover:text-brand-primary transition-colors">LinkedIn</a>
      </div>
      <p className="text-sm text-zinc-400">&copy; 2026 Fluxa • Opera Agency. Profitable Circularity.</p>
    </div>
  </footer>
);

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Social Proof Stats */}
      <div className="bg-zinc-50 py-8 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { label: 'Auditado', val: '+1M€' },
             { label: 'Recuperado (Avg)', val: '22%' },
             { label: 'E-commerce Clientes', val: '50+' },
             { label: 'Precisión IA', val: '98.4%' },
           ].map((stat, i) => (
             <div key={i} className="text-center">
               <p className="text-2xl font-bold font-mono">{stat.val}</p>
               <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">{stat.label}</p>
             </div>
           ))}
        </div>
      </div>

      <PainSection />
      <SolutionSection />
      <MechanismSection />
      <DreamSection />
      
      {/* Testimonials */}
      <section className="section-padding italic text-center max-w-4xl mx-auto">
         <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <p className="text-2xl md:text-4xl font-medium text-zinc-600 mb-8 leading-snug">
              “Antes de la auditoría, pensábamos que las devoluciones eran 'el coste de hacer negocios'. Tras el análisis de Fluxa • Opera, descubrimos que podíamos recuperar un 22% del margen anual.”
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-zinc-200" />
              <div className="text-left not-italic">
                <p className="font-bold text-zinc-900">ECommerce Manager</p>
                <p className="text-sm text-zinc-500">Retail & Logistic Global</p>
              </div>
            </div>
         </motion.div>
      </section>

      <FAQSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}
