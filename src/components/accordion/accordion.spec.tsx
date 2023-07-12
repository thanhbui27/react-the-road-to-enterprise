import Accordion from "./Accordion";
import { render, fireEvent, screen } from "test-utils";
import { useCallback, useState } from "react";
const accordionData = [
  {
    heading: "One",
    content: "Content one",
  },
  {
    heading: "Two",
    content: "Content Two",
  },
  {
    heading: "Three",
    content: "Content Three",
  },
];
const renderAccordion = (props = Object) =>
  render(<Accordion items={accordionData} {...props} />);
describe("Accordion.tsx", () => {
  it("Accordion items have correct text", async () => {
    renderAccordion();
    // Match Text content
    accordionData.forEach((data) => {
      screen.getByText(data.heading);
      screen.getByText(data.content);
    });
  });

  it("Each accordion item content is hidden at the start", async () => {
    renderAccordion();
    screen.getAllByTestId("accordion-item-content").forEach((el) => {
      expect(el).toHaveClass("hidden");
    });
  });

  it("Accordion item content is toggled on header click", async () => {
    renderAccordion();
    const heading = accordionData[1].heading;
    const content = accordionData[1].content;
    expect(screen.getByText(content)).toHaveClass("hidden");
    fireEvent.click(screen.getByText(heading));
    expect(screen.getByText(content)).toHaveClass("block");
  });
});

export const useStepper = (initialStep = 1) => {
  const [step, setStep] = useState(initialStep);
  const goToNextStep = useCallback(() => setStep((step) => step + 1), []);
  const goToPrevStep = useCallback(() => setStep((step) => step - 1), []);
  return {
    step,
    setStep,
    goToNextStep,
    goToPrevStep,
  };
};
