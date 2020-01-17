const Generator = require("yeoman-generator")

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts)
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
      this.fs.copyTpl(this.templatePath(`index.ts`), this.destinationPath(`index.ts`), { name })
      this.fs.copyTpl(this.templatePath(`index.component.tsx`), this.destinationPath(`${name}.component.tsx`), { name })
      this.fs.copyTpl(this.templatePath(`index.style.ts`), this.destinationPath(`${name}.style.ts`), { name })
    })
  }
}
