// Valid registration codes (managed by administrator)
const validRegistrationCodes = [
    'ADMIN2024',
    'PHOTO2024',
    'CLOUD2024'
];

function isValidRegistrationCode(code) {
    return validRegistrationCodes.includes(code);
}

function addRegistrationCode(code) {
    if (!validRegistrationCodes.includes(code)) {
        validRegistrationCodes.push(code);
        return true;
    }
    return false;
}

function removeRegistrationCode(code) {
    const index = validRegistrationCodes.indexOf(code);
    if (index > -1) {
        validRegistrationCodes.splice(index, 1);
        return true;
    }
    return false;
}

function listRegistrationCodes() {
    return [...validRegistrationCodes];
}

module.exports = {
    isValidRegistrationCode,
    addRegistrationCode,
    removeRegistrationCode,
    listRegistrationCodes
};
