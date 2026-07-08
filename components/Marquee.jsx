// Infinite tech-stack ticker between the hero and About.
// Two identical rows + translateX(-50%) = seamless loop.
const STACK = [
  'PyTorch', 'Transformers', 'LangChain', 'CrewAI', 'RAG', 'Qdrant', 'FAISS',
  'LoRA / QLoRA', 'vLLM', 'FastAPI', 'Kubernetes', 'Airflow', 'Spark',
  'Vertex AI', 'AWS Textract', 'MLflow', 'Ragas', 'ONNX',
];

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="marquee-wrap relative overflow-hidden border-y border-edge/60 bg-panel/40 py-3"
    >
      <div className="marquee flex w-max">
        {[0, 1].map((row) => (
          <div key={row} className="flex shrink-0 items-center">
            {STACK.map((s) => (
              <span key={s} className="flex items-center px-5 font-mono text-xs text-fog/80">
                {s}
                <span className="ml-10 text-ember/60">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
