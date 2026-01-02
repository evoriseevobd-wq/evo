import { useState } from "react";

const CAL_LINK = "evorise-group/30min";

export default function AgendarReuniao() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="rounded-3xl border border-purple-500/20 bg-black/40 p-4 shadow-[0_30px_80px_-50px_rgba(124,58,237,0.45)] backdrop-blur-sm md:p-8">

        {isLoading && (
          <div className="flex min-h-[700px] items-center justify-center">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-purple-500/30 border-t-purple-500"></div>
              <p className="text-sm text-gray-400">Carregando calendário...</p>
            </div>
          </div>
        )}

        <div className={`relative ${isLoading ? "hidden" : ""}`}>
          <iframe
            src={`https://cal.com/${CAL_LINK}?embed=true&theme=dark&layout=month_view`}
            width="100%"
            height="700"
            frameBorder="0"
            onLoad={handleLoad}
            className="rounded-2xl"
            allow="camera;microphone;display-capture"
            title="Agendar Reunião com Evorise"
          />
        </div>
      </div>
    </div>
  );
}
