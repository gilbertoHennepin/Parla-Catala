const fs = require('fs');

const requiredIcons = [
  "Hand", "Eye", "Map", "Users", "Handshake", "Book", "ShoppingBag", "Repeat",
  "Home", "Smartphone", "Brain", "Hospital", "Utensils", "Heart", "GraduationCap",
  "Briefcase", "Landmark", "MessageSquare", "Flame", "Clock", "MessageCircle",
  "Plane", "Trees", "ArrowRight", "Sparkles", "Octagon", "PartyPopper", "Link",
  "BrainCircuit", "FileText", "Drama", "Wrench", "HelpCircle", "Lock", "Target",
  "BookOpen", "HeartCrack", "Mic", "Square", "Frown", "XCircle", "Lightbulb",
  "Package", "Zap", "Search", "X", "Volume2", "Info", "Ghost", "Flag", "AlertTriangle", "HeartPulse",
  "PenTool", "Trophy"
];

// unique
const uniqueIcons = [...new Set(requiredIcons)].sort();

const imports = uniqueIcons.map(icon => `  ${icon},`).join('\n');
const mapEntries = uniqueIcons.map(icon => `  ${icon},`).join('\n');

const fileContent = `import React from "react";
import {
${imports}
} from "lucide-react";

const IconMap: Record<string, React.FC<any>> = {
${mapEntries}
};

interface DynamicIconProps {
  name: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export default function DynamicIcon({ name, size = 20, className = "", style, color }: DynamicIconProps) {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    console.warn(\`Lucide icon "\${name}" not found in IconMap.\`);
    // Fallback icon
    return <HelpCircle size={size} className={className} style={style} color={color} />;
  }

  return <IconComponent size={size} className={className} style={style} color={color} />;
}
`;

fs.writeFileSync('./src/components/DynamicIcon.tsx', fileContent);
console.log("Created explicit IconMap in DynamicIcon.tsx with PenTool and Trophy");
