// Import the install service
const installService = require('../services/install.service');

// A function to handle the installation process
async function installDirectFromApi(req, res) {
    const applicationInstalled = await installService.installDirectFromApi(req.body);
    if (applicationInstalled) {
        const response = {
        message: applicationInstalled,
    };
        res.status(200).json(response);
    } else {
        const response = {
            status: "failure",
            message: "Failed to install application",
        };
        res.status(403).json(response);
    }
}

// Export the installDirectFromApi function
module.exports = {
    installDirectFromApi,
};