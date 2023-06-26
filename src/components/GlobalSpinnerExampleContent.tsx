import { useGlobalSpinnerContextSelector } from "~/context/GlobalSpinnerContext";

import { useContext, memo } from "react";
type GlobalSpinnerExampleContentProps = {
  onShowSpinner: () => void;
};
const GlobalSpinnerExampleContent = memo(
  (props: GlobalSpinnerExampleContentProps) => {
    console.log("GlobalSpinnerExample rendered");
    return (
      <div className="py-8 max-w-2xl mx-auto space-y-4">
        <button
          className="bg-blue-600 text-blue-100 px-4 py-3"
          onClick={props.onShowSpinner}
        >
          Show global spinner
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => true
);
type GlobalSpinnerExampleProps = object;
const GlobalSpinnerExample = (props: GlobalSpinnerExampleProps) => {
  const showSpinner = useGlobalSpinnerContextSelector((ctx) => ctx.showSpinner);
  const hideSpinner = useGlobalSpinnerContextSelector((ctx) => ctx.hideSpinner);
  const onShowSpinner = () => {
    showSpinner();
    setTimeout(hideSpinner, 2000);
  };
  return <GlobalSpinnerExampleContent onShowSpinner={onShowSpinner} />;
};
export default GlobalSpinnerExample;
