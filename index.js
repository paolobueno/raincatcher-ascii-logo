const art = require('ascii-art');
const fs = require('fs');
const path = require('path')

const fontDir = __dirname + '/fonts/';

art.Figlet.fontPath = fontDir;

function render(font) {
  art.image({
    filepath: './raincatcher-logo.png',
    width: 20
  })
    .font('RainCatcher', font, 'bright_cyan', rendered => {
      console.log(`${font}: --------`);
      console.log(rendered)
    });
}

fs.readdirSync(fontDir).forEach(font => {
  const fontName = path.basename(font, '.flf');
  render(fontName);
});