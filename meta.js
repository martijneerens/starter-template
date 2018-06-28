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

    complete(data, {logger, chalk }) {

        logger.log(chalk.bold(`  To get started:\n`));

        if (!data.inPlace) {
            logger.log(`cd ${chalk.yellow(data.destDirName)}`)
        }

        if(data.pm === 'yarn'){
            logger.log(`${chalk.cyan('yarn install')}`)
            logger.log(`yarn dev`)
        }
        else{
            logger.log(`${chalk.cyan('npm install')}`)
            logger.log(`npm run dev`)
        }

    }
};
