import React from "react";
import {
  AlertTriangle,
  ArrowRight,
  Book,
  BookOpen,
  Brain,
  BrainCircuit,
  Briefcase,
  Clock,
  Drama,
  Eye,
  FileText,
  Flag,
  Flame,
  Frown,
  Ghost,
  GraduationCap,
  Hand,
  Handshake,
  Heart,
  HeartCrack,
  HeartPulse,
  HelpCircle,
  Home,
  Hospital,
  Info,
  Landmark,
  Lightbulb,
  Link,
  Lock,
  Map,
  MessageCircle,
  MessageSquare,
  Mic,
  Octagon,
  Package,
  PartyPopper,
  PenTool,
  Plane,
  Repeat,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Square,
  Target,
  Trees,
  Trophy,
  Users,
  Utensils,
  Volume2,
  Wrench,
  X,
  XCircle,
  Zap,
} from "lucide-react";

const IconMap: Record<string, React.FC<any>> = {
  AlertTriangle,
  ArrowRight,
  Book,
  BookOpen,
  Brain,
  BrainCircuit,
  Briefcase,
  Clock,
  Drama,
  Eye,
  FileText,
  Flag,
  Flame,
  Frown,
  Ghost,
  GraduationCap,
  Hand,
  Handshake,
  Heart,
  HeartCrack,
  HeartPulse,
  HelpCircle,
  Home,
  Hospital,
  Info,
  Landmark,
  Lightbulb,
  Link,
  Lock,
  Map,
  MessageCircle,
  MessageSquare,
  Mic,
  Octagon,
  Package,
  PartyPopper,
  PenTool,
  Plane,
  Repeat,
  Search,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Square,
  Target,
  Trees,
  Trophy,
  Users,
  Utensils,
  Volume2,
  Wrench,
  X,
  XCircle,
  Zap,
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
    console.warn(`Lucide icon "${name}" not found in IconMap.`);
    // Fallback icon
    return <HelpCircle size={size} className={className} style={style} color={color} />;
  }

  return <IconComponent size={size} className={className} style={style} color={color} />;
}
