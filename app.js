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

// +++ Level color function +++
// This function returns the colour associated with a level based on its ID.

function headerColorClass(level) {
    if (level.id === "pe") return "PE-level-header";
    if (level.id === "e-1") return "E1-level-header";
    return "";
}

function tileColorClass(level) {
    if (level.id === "pe") return "pre-entry";
    if (level.id === "e-1") return "entry-1";
    return "";
}

function resourceHeaderColorClass(level) {
    if (level.id === "pe") return "PE-resource-header";
    if (level.id === "e-1") return "E1-resource-header";
    return "";
}

function resourceSectionColorClass(level) {
    if (level.id === "pe") return "PE-resource-section";
    if (level.id === "e-1") return "E1-resource-section";
    return "";
}

function practiceButtonColorClass(level) {
    if (level.id === "pe") return "PE-practice-button";
    if (level.id === "e-1") return "E1-practice-button";
    return "";
}

// --------------------------------------------------------------------------
// +++ Practice color functions +++
// These functions return the colour associated with a practice level based on its ID.

function practiceHeaderColorClass(level) {
    if (level.id === "pe") return "PE-practice-header";
    if (level.id === "e-1") return "E1-practice-header";
    return "";
}

function practiceLinkColorClass(level) {
    if (level.id === "pe") return "PE-practice-link";
    if (level.id === "e-1") return "E1-practice-link";
    return "";
}