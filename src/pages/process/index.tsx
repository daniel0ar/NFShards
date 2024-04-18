import { useState } from "react";
import SelectNFT from "./SelectNFT";
import { Button } from "antd";
import { ProcessProvider } from "@/context/ProcessContext";
import ShardDetails from "./ShardDetails";

const Process = () => {
  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <SelectNFT></SelectNFT>;
      case 1:
        return <ShardDetails></ShardDetails>;
      default:
        return <></>;
    }
  };

  const handlePrevius = () => {
    setStep(step - 1);
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  return (
    <ProcessProvider>
      <div className="grid grid-rows-process gap-10 p-4">
        {getComponent()}

        <footer
          className={`flex items-center pb-4 border-t-4 border-t-gray-300 ${
            step > 0 ? "justify-between" : "justify-end"
          }`}
        >
          {step >= 1 && (
            <Button
              className="mt-5 px-10 shadow-inner shadow-slate-300 text-base font-medium rounded-md"
              size="large"
              onClick={handlePrevius}
            >
              Back
            </Button>
          )}
          {step === 1 ? (
            <Button
              type="primary"
              className="mt-5 px-10 text-base font-medium rounded-md"
              size="large"
              form="shard-form"
              htmlType="submit"
            >
              Shard
            </Button>
          ) : (
            <Button
              type="primary"
              size="large"
              className="mt-5 px-5 text-base font-medium rounded-md"
              onClick={handleNext}
            >
              Next
            </Button>
          )}
        </footer>
      </div>
    </ProcessProvider>
  );
};

export default Process;
