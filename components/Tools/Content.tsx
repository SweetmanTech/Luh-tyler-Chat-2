import FanTable from "./FanTable";
import Artist from "./Artist";

interface ContentProps {
  toolName: string | undefined;
  context: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fans: Array<any>;
  scroll: () => void;
}

const Content = ({ toolName, context, fans, scroll }: ContentProps) => {
  return (
    <div>
      {toolName === "getCampaign" && <FanTable fans={fans} scroll={scroll} />}
      {<Artist context={context} scroll={scroll} />}
    </div>
  );
};

export default Content;
