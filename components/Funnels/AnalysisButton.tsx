import { useAgentSocketProvider } from "@/providers/AgentSocketProvider";
import { useFunnelAnalysisProvider } from "@/providers/FunnelAnalysisProvider";

const AnalysisButton = ({
  className,
  containerClasses,
}: {
  className?: string;
  containerClasses?: string;
}) => {
  const { username, funnelType } = useFunnelAnalysisProvider();
  const { openAgentSocket } = useAgentSocketProvider();

  const handleClick = () => {
    openAgentSocket(funnelType as string);
  };
  return (
    <div className={`space-y-3 ${containerClasses}`}>
      <button
        onClick={handleClick}
        disabled={!username}
        className={`bg-black rounded-[10px] pl-5 pr-4 h-9 z-20 flex items-center gap-2 justify-center
        transition-all text-[15px] font-medium text-white hover:bg-black active:bg-white/80
        disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      >
        Try For Free
      </button>
      <p className="font-inter text-sm text-grey-primary">
        No credit card required.
      </p>
    </div>
  );
};

export default AnalysisButton;
