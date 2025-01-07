import capitalize from "@/lib/capitalize";
import { Funnel_Type } from "@/types/Funnel";
import { STEP_OF_ANALYSIS } from "@/types/TikTok";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const useFunnelAnalysisParams = () => {
  const [username, setUsername] = useState("");
  const [thoughts, setThoughts] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const artistHandle = username.replaceAll("@", "");
  const [segments, setSegments] = useState<Array<any>>([]);
  const { funnel_type: funnelType } = useParams();
  const { push } = useRouter();

  const funnelName = useMemo(() => {
    if (!funnelType) return "";
    if (funnelType === Funnel_Type.TIKTOK) return "TikTok";
    return capitalize(funnelType as string);
  }, [funnelType]);

  const isFinished =
    thoughts &&
    Object.values(thoughts).every(
      (value: any) =>
        value.status === STEP_OF_ANALYSIS.FINISHED ||
        value.status === STEP_OF_ANALYSIS.ERROR,
    );
  const scrapping =
    thoughts &&
    Object.values(thoughts).some(
      (value: any) => value.status > STEP_OF_ANALYSIS.UNKNOWN_PROFILE,
    );
  const isInitial =
    thoughts &&
    Object.values(thoughts).every(
      (value: any) => value.status === STEP_OF_ANALYSIS.INITITAL,
    );

  const handleRetry = () => {
    setResult(null);
    setSegments([]);
    setThoughts(null);
    setUsername("");
    setIsLoading(false);
    push(`/funnels/${funnelType}/${uuidV4()}`);
  };

  const initialize = () => {
    setIsLoading(false);
    setThoughts(null);
    push(`/funnels/${funnelType}/${uuidV4()}`);
  };

  return {
    isLoading,
    setIsLoading,
    artistHandle,
    segments,
    setSegments,
    isFinished,
    scrapping,
    isInitial,
    result,
    setResult,
    setUsername,
    setThoughts,
    funnelName,
    funnelType,
    thoughts,
    handleRetry,
    initialize,
    username,
  };
};

export default useFunnelAnalysisParams;