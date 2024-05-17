
function createUserProfiles(profileArray, modifiedNamesArray) {
    let counter = 0;

    return profileArray.map((name, index) => {
        counter = counter + 1; // Increment id counter by 1, also can be done as idCounter++
        return {
            originalName: name,
            modifiedName: modifiedNamesArray[index],
            id: counter
        };
    });
}

module.exports = {
    createUserProfiles,
};