import {
  AlertHeading,
  AlertBody,
  AlertIcon,
  AlertCloseButton,
  AlertContent,
} from "./components";
import CombinedAlert from "./CombinedAlert";
type CompositionConfigurationProps = object;
const CompositionConfiguration = (props: CompositionConfigurationProps) => {
  return (
    <div>
      <h3 className="text-md md:text-lg font-semibold mb-4">
        Alert components
      </h3>
      <h4 className="text-sm md:text-md font-semibold mb-4">
        Configured Alerts
      </h4>
      <div className="max-w-[30rem] mx-auto space-y-4">
        {/* ... Configured alerts ... */}
        {/* ... Composed alerts ... */}
        <h4 className="text-sm md:text-md font-semibold mb-4">
          Combined Alert
        </h4>
        <div>
          <CombinedAlert
            show
            variant="success"
            headerText="Success"
            text="Your action was completed successfully!"
            onClose={() => null}
          />
        </div>
      </div>
    </div>
  );
};
export default CompositionConfiguration;
