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
    ]).then(answers => {
      const values = {
        name: answers.name,
      }
      this.destinationRoot(`./${values.name}`)
      this.fs.copyTpl(this.templatePath(`index.ts`), this.destinationPath(`index.ts`), { ...values })
      this.fs.copyTpl(this.templatePath(`index.component.tsx`), this.destinationPath(`${values.name}.component.tsx`), { ...values })
      this.fs.copyTpl(this.templatePath("index.style.ts"), this.destinationPath(`${values.name}.style.ts`), { ...values })
    })
  }
}
