const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, 'src', 'styles');
const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.ts'));

const shinyGoldCSS = `
  background: linear-gradient(135deg, #D4AF37 0%, #FFF2CD 50%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0px 4px 15px rgba(212, 175, 55, 0.4);
`;

const titlesToGold = [
  'HeroTitle',
  'AboutTitle',
  'ProjectsTitle',
  'ProjectCardTitle',
  'ExperienceTitle',
  'ExperienceCardTitle',
  'ContactTitle',
];

files.forEach(file => {
  const filePath = path.join(stylesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  titlesToGold.forEach(title => {
    // We look for 'export const TITLE = styled...' and inject the css right after the backtick
    const regex = new RegExp(`(export const ${title} = styled.*?\\\`)([^]*?)(?=;|\\\`)`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, (match, p1, p2) => {
        // Only inject if it doesn't already have background-clip
        if (!p2.includes('-webkit-background-clip')) {
           changed = true;
           // If there's an existing color: ... rule, we can leave it or remove it. The gradient will override text color if -webkit-text-fill-color is transparent.
           return p1 + shinyGoldCSS + p2;
        }
        return match;
      });
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
    console.log('Applied gold to ' + file);
  }
});
