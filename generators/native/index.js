const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  constructor(args, opjs) {
    super(args, opjs)
  }

  method1() {
    this.prompt([
      {
        type: "input",
        name: "name",
        message: "Name of your component: "
      },
    ]).then(({ name }) => {
      this.destinationRoot(`./${name}`)
      this.fs.copyTpl(this.templatePath(`index.js`), this.destinationPath(`index.js`), { name })
      this.fs.copyTpl(this.templatePath(`index.component.jsx`), this.destinationPath(`${name}.component.jsx`), { name })
      this.fs.copyTpl(this.templatePath(`index.style.js`), this.destinationPath(`${name}.style.js`), { name })
    })
  }
}
