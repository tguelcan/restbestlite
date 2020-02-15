const validator = require('validator')

const validateInput = function(input) {
    // Declare function as asynchronous, and save the done callback
    const done = this.async()

    validator.isNumeric(input) ? done('You need to provide a string') : null
    validator.isEmpty(input, { ignore_whitespace: true }) ? done('You cannot provide empty a string') : null
    if(/\s/.test(input)) {
        done('Your value cannot have whitespaces')
    }

    // Pass the return value in the done callback
    done(null, true)
}

module.exports = function (plop) {

    plop.setWelcomeMessage('What do you want to generate?')
    // service generator 
    plop.setGenerator('service', {
        description: 'Create a new service',
        prompts: [
            {
                type: 'input',
                name: 'serviceName',
                message: 'name of the service',
                validate: validateInput
            },
            {
                type: 'list',
                name: 'serviceType',
                message: 'which kind of service you want to generate?',
                choices: ['MIDDLEWARE']
            }
        ],
        actions: function(data) {
            const actions = [
                {
                    type: 'add',
                    path: 'src/services/{{camelCase serviceName}}/index.js',
                    templateFile: '_templates/src/services/_service.hbs'
                }
            ]
            
            data.serviceType.includes('MIDDLEWARE') ? actions.push({
                type: 'modify',
                path: 'src/services/{{camelCase serviceName}}/index.js',
                pattern: '/* MIDDLEWARE */',
                templateFile: '_templates/src/services/serviceTypes/_middleware.hbs'
            }) : actions.push({
                type: 'modify',
                path: 'src/services/{{camelCase serviceName}}/index.js',
                pattern: '/* MIDDLEWARE */',
                template: ''
            })

            return actions
 
        }
    })

    // api endpoint generator
    plop.setGenerator('api endpoint', {
        description: 'Create a new api endpoint (/api/endpoint)',
        prompts: [
            {
                type: 'input',
                name: 'endpointName',
                message: 'name of the endpoint in singular like "message" or "article"',
                validate: validateInput
            }
        ],
        actions: function() {
            
            const actions = [

                // Add Testfile
                {
                    type: 'add',
                    path: 'test/api/{{lowerCase endpointName}}.test.js',
                    templateFile: '_templates/test/api/_apitest.hbs'
                },

                // Add Router
                {
                    type: 'add',
                    path: 'src/api/{{lowerCase endpointName}}/index.js',
                    templateFile: '_templates/src/api/_index.hbs'
                },

                // Add Controller
                {
                    type: 'add',
                    path: 'src/api/{{lowerCase endpointName}}/controller.js',
                    templateFile: '_templates/src/api/_controller.hbs'
                },

                // Add Model
                {
                    type: 'add',
                    path: 'src/api/{{lowerCase endpointName}}/model.js',
                    templateFile: '_templates/src/api/_model.hbs'
                },

                // Append Router
                {
                    type: 'append',
                    path: 'src/api/index.js',
                    pattern: '/* ENDPOINT_ROUTER_IMPORT */',
                    template: 'import {{lowerCase endpointName}} from \'./{{lowerCase endpointName}}\'',
                },

                {
                    type: 'append',
                    path: 'src/api/index.js',
                    pattern: '/* ENDPOINT_ROUTER_EXPORT */',
                    template: 'router.add(\'/{{lowerCase endpointName}}s\', {{lowerCase endpointName}})',
                }  
            ]

            return actions
        }

    })
}