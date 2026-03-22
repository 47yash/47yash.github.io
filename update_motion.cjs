const fs = require('fs');
const path = require('path');
const componentsDir = 'c:\\\\Users\\\\yashu47\\\\OneDrive\\\\Desktop\\\\Portfolio\\\\my-portfolio\\\\my-portfolio\\\\src\\\\components';

const newVariant = `const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1,
    },
  },
};`;

// Use regex to replace the whole itemVariants block
const regex = /const itemVariants:\s*Variants\s*=\s*{[\s\S]*?visible:\s*{[\s\S]*?transition:\s*{[\s\S]*?},?\s*}\s*};/g;

fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx') && file !== 'SkillsSection.tsx') {
    const filePath = path.join(componentsDir, file);
    const oldCode = fs.readFileSync(filePath, 'utf8');
    if (oldCode.match(regex)) {
      const newCode = oldCode.replace(regex, newVariant);
      fs.writeFileSync(filePath, newCode);
      console.log(`Updated ${file}`);
    }
  }
});
