const fs = require('fs');
const path = require('path');

const fileReplacements = [
  {
    file: 'WritingMode.tsx',
    replacements: [
      { find: '🎉', replace: '<DynamicIcon name="PartyPopper" size={24} />' },
      { find: '❌', replace: '<DynamicIcon name="XCircle" size={24} />' },
      { find: '📚', replace: '<DynamicIcon name="BookOpen" size={16} />' }
    ]
  },
  {
    file: 'TalkingMode.tsx',
    replacements: [
      { find: '🎙️', replace: '<DynamicIcon name="Mic" size={20} />' },
      { find: '⏹', replace: '<DynamicIcon name="Square" size={24} />' },
      { find: '🎤', replace: '<DynamicIcon name="Mic" size={24} />' },
      { find: '🎉', replace: '<DynamicIcon name="PartyPopper" size={24} />' },
      { find: '😕', replace: '<DynamicIcon name="Frown" size={24} />' },
      { find: '📚', replace: '<DynamicIcon name="BookOpen" size={16} />' }
    ]
  },
  {
    file: 'ProgressBar.tsx',
    replacements: [
      { find: '🔥', replace: '<DynamicIcon name="Flame" size={18} color="var(--primary)" />' }
    ]
  },
  {
    file: 'HintSystem.tsx',
    replacements: [
      { find: '💡', replace: '<DynamicIcon name="Lightbulb" size={16} />' }
    ]
  }
];

const dir = path.join(__dirname, '../src/components');

fileReplacements.forEach(({ file, replacements }) => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // add import if missing
  if (!content.includes('DynamicIcon')) {
    content = content.replace(/(import .*;\n)/, `$1import DynamicIcon from "@/components/DynamicIcon";\n`);
  }
  
  replacements.forEach(({ find, replace }) => {
    // Emojis might be in quotes like "🎉" or as JSX text like 📚.
    // If it's in quotes like result?.correct ? "🎉" : "❌", we want to replace the whole string with JSX.
    // So we use regex carefully.
    
    // For quotes: "🎉" -> <DynamicIcon name="PartyPopper" size={24} />
    const quoteRegex = new RegExp(`"${find}"`, 'g');
    if (quoteRegex.test(content)) {
        content = content.replace(quoteRegex, replace);
    }
    
    // For text: 📚 -> <DynamicIcon name="BookOpen" size={16} />
    const textRegex = new RegExp(`>\\s*${find}\\s*<`, 'g');
    if (textRegex.test(content)) {
        content = content.replace(textRegex, `>${replace}<`);
    }
    
    // Just replace the raw emoji directly if it wasn't caught
    content = content.replace(new RegExp(find, 'g'), replace);
  });
  
  // Cleanup artifacts where we did >JSX< (JSX inside JSX needs to be wrapped or just rendered)
  // Actually, if we replaced > 📚 < with ><DynamicIcon.../><, it's fine.
  // But if it was inside a string `"🎉"`, it's now `<DynamicIcon/>`, so `result?.correct ? <DynamicIcon /> : <DynamicIcon />` which is valid JSX!

  fs.writeFileSync(filePath, content);
});
console.log("Emojis replaced in components.");
