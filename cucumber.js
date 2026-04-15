module.exports = {
    default: {
        require: ['step_definitions/**/*.ts', 'support/**/*.ts'],
        format: ['html:reports/cucumber-report.html', 'progress'],
        paths: ['features/'],
        publishQuiet: true,
        requireModule: ['ts-node/register']
    }
};