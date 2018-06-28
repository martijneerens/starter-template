module.exports = {
    helpers: {
        escape: function (value) {
            return value.replace(/'/g, '&apos;');
        }
    },
    prompts: {
        name: {
            'type': 'string',
            'required': true,
            'message': 'Project name'
        },
        title: {
            'type': 'string',
            'required': true,
            'message': 'Project title',
            'default': 'De titel van een productie'
        },
        description: {
            'type': 'string',
            'required': true,
            'message': 'Project description',
            'default': 'Dit is een special over x.'
        },
        year: {
            'type': 'string',
            'required': false,
            'message': 'year',
            'default': (new Date()).getFullYear()
        },
        directus_table: {
            'type': 'string',
            'required': false,
            'message': 'Directus content table name',
            'default': 'producties'
        },
        directus_project_id: {
            'type': 'int',
            'required': false,
            'message': 'Directus project id',
            'default': 1
        },
        author: {
            'type': 'string',
            'message': 'Author'
        },
        pm: {
            message: 'Choose a package manager',
            choices: ['npm', 'yarn'],
            type: 'list',
            default: 'yarn'
        }
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}',
    post(
        { npmInstall, yarnInstall, gitInit, chalk, isNewFolder, folderName },
        { meta }
    ) {
        // gitInit()

        console.log(meta.answers.pm)
        // if (meta.answers.pm === 'yarn') {yarnInstall()
        // else npmInstall()

        const cd = () => {
            if (isNewFolder) {
                console.log(`    ${chalk.cyan('cd')} ${folderName}`)
            }
        }

        console.log()
        console.log(chalk.bold(`  To get started:\n`))
        cd()
        console.log(`    yarn dev\n`)
        cd()
        console.log(`    npm run build`)
        console.log(`    npm start`)
        console.log()
    }
};
