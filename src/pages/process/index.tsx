import { useState } from "react";
import Overview from "./Overview";
import SelectNFT from "./SelectNFT";
import { Button } from "antd";
import { ProcessProvider } from "@/context/ProcessContext";

const Process = () => {
  const [step, setStep] = useState(0);

  const getComponent = () => {
    switch (step) {
      case 0:
        return <Overview></Overview>;
      case 1:
        return <SelectNFT></SelectNFT>;
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
      <div className="grid grod-rows-process h-[100vh]">
        {getComponent()}

        <footer
          className={`flex items-center px-20 pb-4 border-t-4 border-t-gray-300 ${
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
          {step !== 0 ? (
            <Button
              type="primary"
              className="mt-5 px-10 text-base font-medium rounded-md"
              size="large"
              onClick={handleNext}
            >
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              size="large"
              className="mt-5 px-5 text-base font-medium rounded-md"
              onClick={handleNext}
            >
              Get Started
            </Button>
          )}
        </footer>
      </div>
    </ProcessProvider>
  );
};

export default Process;
