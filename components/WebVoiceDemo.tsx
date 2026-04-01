"use client";

import { useEffect, useRef, useState } from "react";
import { RetellWebClient } from "retell-client-js-sdk";

type DemoState = "idle" | "starting" | "active" | "ended" | "error";

export default function WebVoiceDemo() {
  const clientRef = useRef<RetellWebClient | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<DemoState>("idle");
  const [error, setError] = useState("");
  const [transcript, setTranscript] = useState("");
  const [isAgentTalking, setIsAgentTalking] = useState(false);

  useEffect(() => {
    const client = new RetellWebClient();
    clientRef.current = client;

    client.on("call_started", () => {
      setStatus("active");
      setError("");
    });

    client.on("call_ended", () => {
      setStatus("ended");
      setIsAgentTalking(false);
    });

    client.on("agent_start_talking", () => {
      setIsAgentTalking(true);
    });

    client.on("agent_stop_talking", () => {
      setIsAgentTalking(false);
    });

    client.on("update", (update: any) => {
      if (update?.transcript) {
        if (Array.isArray(update.transcript)) {
          const text = update.transcript
            .map((item: any) => `${item.role === "agent" ? "AI" : "Utente"}: ${item.content}`)
            .join("\n");
          setTranscript(text);
        } else {
          setTranscript(String(update.transcript));
        }
      }
    });

    client.on("error", (err: any) => {
      console.error(err);
      setStatus("error");
      setError("Errore durante la demo vocale.");
      try {
        client.stopCall();
      } catch {}
    });

    return () => {
      try {
        client.stopCall();
      } catch {}
    };
  }, []);

  const startDemo = async () => {
    if (!name.trim() || !email.trim()) {
      setError("Inserisci nome ed email prima di avviare la demo.");
      return;
    }

    try {
      setStatus("starting");
      setError("");
      setTranscript("");

      const res = await fetch("/api/create-web-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await res.json();

      if (!res.ok || !data?.accessToken) {
        throw new Error(data?.error || "Impossibile avviare la demo.");
      }

      await clientRef.current?.startCall({
        accessToken: data.accessToken,
        sampleRate: 24000,
        captureDeviceId: "default",
        playbackDeviceId: "default",
        emitRawAudioSamples: false,
      });
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setError(err?.message || "Errore durante l’avvio della demo.");
    }
  };

  const stopDemo = () => {
    try {
      clientRef.current?.stopCall();
      setStatus("ended");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="demo-audio" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Demo audio dal sito
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Prova l’assistente direttamente dal browser
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Inserisci nome ed email, attiva il microfono e parla con l’assistente come in una chiamata reale.
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Nome
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Es. Marco Rossi"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Es. studio@email.it"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-400 focus:bg-white"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={startDemo}
              disabled={status === "starting" || status === "active"}
              className="rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "starting" ? "Avvio demo..." : "Avvia demo audio"}
            </button>

            <button
              onClick={stopDemo}
              disabled={status !== "active"}
              className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Termina demo
            </button>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <p>
              <span className="font-semibold">Stato:</span>{" "}
              {status === "idle" && "In attesa"}
              {status === "starting" && "Connessione in corso"}
              {status === "active" && "Demo attiva"}
              {status === "ended" && "Demo terminata"}
              {status === "error" && "Errore"}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Voce agente:</span>{" "}
              {isAgentTalking ? "Sta parlando" : "In ascolto"}
            </p>
            {error && <p className="mt-3 text-red-600">{error}</p>}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200/70 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Trascrizione live
          </p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-950">
            Conversazione in tempo reale
          </h3>

          <div className="mt-6 min-h-[360px] rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
            {transcript ? (
              <pre className="whitespace-pre-wrap font-sans">{transcript}</pre>
            ) : (
              <p className="text-slate-500">
                Qui apparirà la conversazione durante la demo audio.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}