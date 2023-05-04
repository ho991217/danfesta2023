import { LayoutGroup } from "framer-motion";
import TabComponents from "./Tab.styled";

function Tab({
   labels,
   selectedLabel,
   onLabelClick,
   style,
}: {
   labels: string[];
   selectedLabel: string;
   onLabelClick: (label: string) => void;
   style?: React.CSSProperties;
}) {
   return (
      <TabComponents.Container style={style}>
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
