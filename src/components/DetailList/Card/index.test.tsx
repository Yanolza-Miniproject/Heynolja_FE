import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./";

describe("Card", () => {
  const testIcon = <div>Test Icon</div>;
  it("active 상태가 true일때 카드 스타일 테스트", () => {
    const testDescription = "Active Description";
    render(
      <Card icon={testIcon} description={testDescription} isActive={true} />,
    );

    const descriptionElement = screen.getByText(testDescription);
    expect(descriptionElement).toHaveStyle("color: black");
  });

  it("active 상태가 false일때 카드 스타일 테스트", () => {
    const testDescription = "Inactive Description";
    render(
      <Card icon={testIcon} description={testDescription} isActive={false} />,
    );

    const descriptionElement = screen.getByText(testDescription);
    expect(descriptionElement).toHaveStyle("color: #E6E6E6");
  });
});
