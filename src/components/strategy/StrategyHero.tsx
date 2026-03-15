import { useMemo } from "react";
import { useGrouppedStrategies } from "~/hooks/strategies";
import StrategyCardCTAOne from "./StrategyCardCTAOne";
import StrategyCardCTATwo from "./StrategyCardCTATwo";
import StrategyBanner from "./StrategyBanner";

const StrategyHero = () => {
  const grouppedStrategies = useGrouppedStrategies(false);
  const [strategyOne, strategyTwo, groupOne, groupTwo] = useMemo(() => {
    if (!Array.isArray(grouppedStrategies) || grouppedStrategies.length === 0) return [null, null, null, null];
    const groupOne = grouppedStrategies[0] ?? [];
    const groupTwo = grouppedStrategies[1] ?? [];
    const [strategyOne] = groupOne.length ? groupOne : [null];
    const [strategyTwo] = groupTwo.length ? groupTwo : [null];
    return [strategyOne, strategyTwo, groupOne, groupTwo];
  }, [grouppedStrategies]);

  return (
    <div className="relative flex flex-col container px-2 my-3 h-[30rem]">
      <StrategyCardCTAOne strategyGroup={groupOne} />
      <StrategyBanner strategyOne={strategyOne} strategyTwo={strategyTwo} />
      <StrategyCardCTATwo strategyGroup={groupTwo} />
    </div>
  );
};

export default StrategyHero;
