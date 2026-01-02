import { useEffect } from "react";

const CAL_LINK = "evorise-group/30min";
const CAL_CONTAINER_ID = "cal-inline-evorise";
const CAL_ORIGIN = "https://app.cal.com";
const CAL_SCRIPT_SRC = `${CAL_ORIGIN}/embed/embed.js`;
const CAL_SCRIPT_ID = "cal-embed-script";

export default function AgendarReuniao() {
  useEffect(() => {
    const win = window;

    win.Cal =
      win.Cal ||
      function (...args) {
        (win.Cal.q = win.Cal.q || []).push(args);
      };

    const initCalEmbed = () => {
      if (!win.Cal) return;

      win.Cal("init", { origin: CAL_ORIGIN });

      win.Cal("inline", {
        elementOrSelector: `#${CAL_CONTAINER_ID}`,
        link: CAL_LINK,
        config: { theme: "dark", layout: "month_view" },
      });
    };

    let script = document.getElementById(CAL_SCRIPT_ID);

    if (!script) {
      script = document.createElement("script");
      script.id = CAL_SCRIPT_ID;
      script.src = CAL_SCRIPT_SRC;
      script.async = true;
      script.onload = initCalEmbed;
      document.body.appendChild(script);
    } else {
      initCalEmbed();
    }

    return () => {
      const container = document.getElementById(CAL_CONTAINER_ID);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-3xl border border-purple-500/20 bg-black/40 p-4 shadow-[0_30px_80px_-50px_rgba(124,58,237,0.45)] backdrop-blur-sm md:p-8">
        <div className="mb-6 text-center">
          <p className="text-sm text-gray-300 md:text-base">
            Deixe que a automação faça o trabalho pesado enquanto você fica no crescimento.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Fale com nossa equipe e leve seus resultados para o próximo nível.
          </p>
        </div>
        
        <div
          id={CAL_CONTAINER_ID}
          className="min-h-[600px] w-full overflow-hidden rounded-2xl"
          style={{
            width: "100%",
            height: "100%",
            overflow: "scroll",
          }}
        />
      </div>
    </div>
  );
}
