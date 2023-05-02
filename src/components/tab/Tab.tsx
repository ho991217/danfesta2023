import { LayoutGroup } from "framer-motion";
import TabComponents from "./Tab.styled";

function Tab({
   labels,
   selectedLabel,
   onLabelClick,
}: {
   labels: string[];
   selectedLabel: string;
   onLabelClick: (label: string) => void;
}) {
   return (
      <TabComponents.Container>
         <LayoutGroup>
            {labels.map((label) => (
               <TabComponents.TabLabel
                  key={label}
                  onClick={() => onLabelClick(label)}
                  selected={selectedLabel === label}
               >
                  <span> {label}</span>
                  {selectedLabel === label && (
                     <TabComponents.TabHighlight layoutId="highlight" />
                  )}
               </TabComponents.TabLabel>
            ))}
         </LayoutGroup>
      </TabComponents.Container>
   );
}

export default Tab;
