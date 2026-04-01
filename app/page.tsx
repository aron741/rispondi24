import WebVoiceDemo from "@/components/WebVoiceDemo";

export default function LandingPage() {
  const demoNumber = "+1 260 270 1966";

  const benefits = [
    "Nessuna chiamata persa nelle ore più caotiche",
    "Meno interruzioni durante visite e trattamenti",
    "Attivazione rapida senza cambiare numero allo studio",
  ];

  const features = [
    {
      title: "Risponde subito",
      text: "Il paziente non trova mai occupato o nessuna risposta quando lo studio è impegnato.",
    },
    {
      title: "Raccoglie i dati",
      text: "Nome, telefono, richiesta e fascia oraria preferita vengono salvati in automatico.",
    },
    {
      title: "Invia una notifica",
      text: "Lo studio riceve subito la richiesta via email o WhatsApp e può richiamare il paziente.",
    },
    {
      title: "Si adatta allo studio",
      text: "Orari, servizi e modo di rispondere vengono personalizzati sul tuo studio dentistico.",
    },
  ];

  const flow = [
    "Il paziente chiama il numero dello studio",
    "La chiamata viene deviata al sistema AI",
    "L’assistente risponde e raccoglie le informazioni",
    "Lo studio riceve tutto via email o WhatsApp",
    "Il dentista richiama e conferma l’appuntamento",
  ];

  const onboarding = [
    "Ti contattiamo per raccogliere le informazioni del tuo studio.",
    "Configuriamo orari, servizi e tono di risposta dell’assistente.",
    "Ti forniamo il numero su cui deviare le chiamate.",
    "Facciamo un test insieme prima di andare live.",
    "Quando tutto è pronto, il sistema entra in funzione.",
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_22%,#f5f9fb_100%)] text-slate-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(255,255,255,0.82))]" />
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-8">
          <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-sky-200">
                R
              </div>
              <div>
                <p className="text-sm font-semibold tracking-wide text-slate-900">Rispondi24</p>
                <p className="text-xs text-slate-500">Assistente AI per studi dentistici</p>
              </div>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
              <a href="#demo" className="transition hover:text-slate-900">Demo</a>
              <a href="#vantaggi" className="transition hover:text-slate-900">Vantaggi</a>
              <a href="#attiva" className="transition hover:text-slate-900">Attivazione</a>
            </nav>
          </header>

          <div className="grid items-center gap-14 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:pt-20">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Studi dentistici • chiamate gestite automaticamente
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Un front desk digitale, elegante e sempre disponibile per il tuo studio dentistico.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                L’assistente telefonico AI risponde con tono professionale, raccoglie le richieste dei pazienti e invia allo studio tutte le informazioni per confermare l’appuntamento senza interrompere il lavoro clinico.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#demo"
                  className="rounded-2xl bg-slate-900 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Ascolta la demo
                </a>
                <a
                  href="#attiva"
                  className="rounded-2xl border border-slate-200 bg-white/85 px-6 py-3.5 text-center text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  Richiedi attivazione
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { value: "24/7", label: "Risponde anche fuori orario" },
                  { value: "2–3 giorni", label: "Per configurazione completa" },
                  { value: "Email / WhatsApp", label: "Notifica immediata allo studio" },
                ].map((stat) => (
                  <div key={stat.value} className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-[0_20px_45px_rgba(15,23,42,0.06)] backdrop-blur">
                    <p className="text-2xl font-bold text-slate-950">{stat.value}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">Workflow studio</p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Dalla chiamata alla conferma</h3>
                  </div>
                  <div className="rounded-2xl bg-sky-50 px-3 py-2 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
                    Demo operativa
                  </div>
                </div>

                <div className="space-y-4">
                  {flow.map((item, idx) => (
                    <div key={idx} className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-[linear-gradient(180deg,#ffffff,#f8fbfd)] p-4 transition hover:border-sky-100 hover:shadow-md">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 text-sm font-bold text-white shadow-lg shadow-sky-100">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Fase {idx + 1}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebVoiceDemo />

      <section id="demo" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Demo live</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Ascolta un’esperienza pensata per uno studio dentistico moderno.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Chiama il numero demo e prova a chiedere un appuntamento, una disponibilità o informazioni sugli orari. La conversazione simula il tono professionale di una segreteria di studio.
            </p>

            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-sky-100 bg-[linear-gradient(135deg,#eff8ff,#f8fffd)] p-6 shadow-inner">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">Numero demo internazionale</p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{demoNumber}</p>
                </div>
                <div className="rounded-2xl bg-white/90 px-3 py-2 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
                  Attivo ora
                </div>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  "Richiesta appuntamento",
                  "Informazioni sugli orari",
                  "Raccolta dati paziente",
                ].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-white/90">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${demoNumber.replace(/\s+/g, "")}`}
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_35px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5"
                >
                  Chiama la demo
                </a>
                <a
                  href="#attiva"
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Attiva per il tuo studio
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((card) => (
              <div
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200/70 bg-white/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]"
              >
                <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg shadow-sky-100" />
                <h3 className="text-lg font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vantaggi" className="border-y border-slate-200/70 bg-[linear-gradient(180deg,#f8fbfd,#eef6fb)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Vantaggi per lo studio</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Più ordine operativo, immagine più professionale, meno richieste perse.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Il sistema è pensato per integrarsi con l’attività quotidiana dello studio, senza sostituire il personale ma alleggerendo il carico sulle chiamate in entrata.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item} className="rounded-[1.75rem] border border-white/80 bg-white/90 p-7 shadow-[0_22px_55px_rgba(15,23,42,0.07)] backdrop-blur">
                <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
                <p className="text-base font-semibold leading-7 text-slate-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="attiva" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Attivazione</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Un’attivazione semplice, con impostazione personalizzata per il tuo studio.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Dopo il pagamento ti contattiamo per configurare il tono di risposta, i servizi, gli orari e il flusso di gestione delle richieste. Nessuna installazione complessa, nessun cambio del numero principale dello studio.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-sm">
                <p className="text-sm text-slate-500">Setup iniziale</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-slate-950">€400</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Analisi, configurazione completa, personalizzazione e test del sistema.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fafc)] p-6 shadow-sm">
                <p className="text-sm text-slate-500">Canone mensile</p>
                <p className="mt-2 text-4xl font-bold tracking-tight text-slate-950">€150</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Servizio attivo, assistenza operativa e ottimizzazione continua del flusso.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://buy.stripe.com/eVqcMY3q77P4eOvaqZ7ss01"
                className="rounded-2xl bg-slate-900 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5"
              >
                Paga il setup
              </a>
              <a
                href="https://buy.stripe.com/dRm9AM9Ov6L00XFdDb7ss00"
                className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Attiva abbonamento mensile
              </a>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Il canone mensile viene attivato solo quando il servizio è configurato, testato e pronto a ricevere le chiamate del tuo studio.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">Onboarding</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight">Cosa succede dopo il pagamento</h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200">
                Processo guidato
              </div>
            </div>

            <div className="space-y-4">
              {onboarding.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-300 to-sky-300 text-sm font-bold text-slate-950">
                    {idx + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-800">Rispondi24</p>
            <p className="mt-1">Assistente telefonico AI per studi dentistici.</p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            <a href="mailto:info@rispondi24.it" className="transition hover:text-slate-900">info@rispondi24.it</a>
            <a href={`tel:${demoNumber.replace(/\s+/g, "")}`} className="transition hover:text-slate-900">{demoNumber}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
