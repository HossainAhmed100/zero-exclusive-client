import { Accordion, AccordionItem, CheckboxGroup, Checkbox, cn } from "@nextui-org/react";

const FiltarAccording = ({ title, items }) => {
  // Define custom styles for the AccordionItem component
  const itemClasses = {
    base: "w-full",
    title: "px-4 py-3 text-gray-700 text-[14px] font-normal",
    trigger: "p-0",
    indicator: "px-2 text-gray-700 text-base font-medium",
    content: "text-small  text-blue-300 w-full border-t",
  };

  return (
    <Accordion itemClasses={itemClasses}>
      <AccordionItem aria-label={title} title={title}>
        <CheckboxGroup>
          {items.map((item) => (
            <CustomCheckbox key={item.value} label={item?.label} value={item?.value} />
          ))}
        </CheckboxGroup>
      </AccordionItem>
    </Accordion>
  );
};

// CustomCheckbox component: Renders a styled checkbox.
const CustomCheckbox = ({ label, value }) => {
  return (
    <Checkbox
      size="sm"
      classNames={{
        base: cn(
          "inline-flex max-w-md w-full mb-1",
          "hover:bg-content2 m-0 items-center justify-start",
          "cursor-pointer rounded-lg gap-2 py-0 border-2 border-transparent",
        ),
        label: "w-full text-[14px]",
      }}
      value={value}
    >
        {label}
    </Checkbox>
  );
};

export default FiltarAccording;
