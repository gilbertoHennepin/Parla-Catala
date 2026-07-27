const fs = require('fs');
const path = require('path');

const emojiToLucide = {
  "👋": "Hand",
  "👁️": "Eye",
  "🗺️": "Map",
  "👨‍👩‍👧‍👦": "Users",
  "🤝": "Handshake",
  "📓": "Book",
  "🛍️": "ShoppingBag",
  "🔄": "Repeat",
  "🏠": "Home",
  "📱": "Smartphone",
  "🤔": "Brain",
  "🏥": "Hospital",
  "🍽️": "Utensils",
  "❤️": "Heart",
  "🎓": "GraduationCap",
  "💼": "Briefcase",
  "🏛️": "Landmark",
  "🗣️": "MessageSquare",
  "🔥": "Flame",
  "⏱️": "Clock",
  "💬": "MessageCircle",
  "✈️": "Plane",
  "🌲": "Trees",
  "➡️": "ArrowRight",
  "🔮": "Sparkles",
  "🛑": "Octagon",
  "🎉": "PartyPopper",
  "🔗": "Link",
  "🧠": "BrainCircuit",
  "📝": "FileText",
  "🎭": "Drama",
  "🔧": "Wrench"
};

const dir = path.join(__dirname, '../src/data/curriculum');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace icon: "emoji" with icon: "LucideName"
  let updated = content.replace(/icon:\s*"([^"]+)"/g, (match, emoji) => {
    if (emojiToLucide[emoji]) {
      return `icon: "${emojiToLucide[emoji]}"`;
    }
    console.log(`Missing mapping for emoji: ${emoji} in ${file}`);
    return match; // keep original if no mapping
  });

  fs.writeFileSync(filePath, updated);
});
console.log("Done replacing emojis in curriculum.");
