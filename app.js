// +++ URL param reading function +++
// This function reads the URL parameters and returns the value of the specified parameter name. 

function getParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// --------------------------------------------------------------------------

// +++ Data lookup functions +++
// These functions are used to look up data in the data.js file based on the URL parameters.

function getLevelById(levelId) {
    return window.SITE_DATA.levels.find(level => level.id === levelId);
}

function getWeekById(level, weekId) {
    return level.weeks.find(week => week.id === weekId);
}

function getClassById(level, classId) {
    return level.classes.find(cls => cls.id === classId);
}

// --------------------------------------------------------------------------

// +++ Remember class (localStorage) +++
// This function saves the selected class to localStorage so that it can be remembered across page reloads.

function getRememberedClass(levelId) {
    return localStorage.getItem(`rememberedClass-${levelId}`);
}

function setRememberedClass(levelId, classId) {
    localStorage.setItem(`rememberedClass-${levelId}`, classId);
}
