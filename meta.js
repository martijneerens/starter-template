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
            type: 'list',
            choices: [
                '2017',
                '2018',
                '2019'
            ],
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
    },
    completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
