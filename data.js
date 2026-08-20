// +++ Overview +++

// This file contains the data structure for the ESOL Study-Aid webapp. 
// It defines the levels, classes, weeks, and practice resources available to users. 
// Each week includes sections for spelling, phonics, and grammar, along with associated practice resources separated by class.

// "Consts" below define the structure of the data for each ESOL level. 
// Each level contains classes, weeks, and holding for practice resource links.
// Check notes in const preEntry for details on the structure of the data.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Published levels are available for selection on the level selection page. 

// Pre-Entry ----------------------------------------------------------
const preEntry = {
    id: "pe", //used in the URL to identify the level
    name: "Pre-Entry", //displayed on the level selection page
    published: true, //if published: false, the level is greyed out on the level page and cannot be selected.

    classes: // Contains the classes for the Pre-Entry level. Each class has an id and a name. 
    [
        {
            id: "pe-a", //used in the URL to identify the class
            name: "Pre-Entry A", //displayed on the class selection page
        },

        { id: "pe-b", name: "Pre-Entry B" },
        { id: "pe-c", name: "Pre-Entry C" },
        { id: "pe-d", name: "Pre-Entry D" },
    ],

    // Third-level: an array of weeks. 
    // level.html will loop over this array to create the week selection page.
    weeks: [
        
        {// Week 1 - Pre-Entry - Published
            id: "week1",
            name: "Week 1",
            published: true,
            sections: {
                spelling: {
                    id: "pre-entry-wk1-spelling-list",
                    title: "Spelling List",
                    words: ['first name', 'last name', 'address', 'postcode', 'country',
                        'city', 'telephone number', 'email address', 'date of birth', 'age']
                },
                phonics: {
                    id: "pre-entry-wk1-phonics",
                    title: "Phonics",
                    rule: "a_e",
                    words: ['name, age, date']
                },
                grammar: {
                    id: "pre-entry-wk1-grammar",
                    title: "Grammar",
                    points: [
                        { pattern: 'My name is [first name] [last name].' },
                        { pattern: 'I am [age] years old.' },
                        { pattern: 'I live in [country].' },
                    ]
                }
            },
            //Fourth-level: an object containing practice resources for each section. 
            // level.html will use this object to create the practice resources page.
            practice: {
                spelling: [
                    {
                        classId: "pe-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                phonics: [
                    {
                        classId: "pe-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                grammar: [
                    {
                        classId: "pe-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ]
            }
        },
        
        {// Week 2 - Pre-Entry - Unpublished
            id: "week2",
            name: "Week 2",
            published: false,
            sections: {
                spelling: {
                    id: "pre-entry-wk2-spelling-list",
                    title: "Spelling List",
                    words: ['word1', 'word2', 'word3']
                },
                phonics: {
                    id: "pre-entry-wk2-phonics",
                    title: "Phonics",
                    rule: "rule2",
                    words: ['word4', 'word5', 'word6']
                },
                grammar: {
                    id: "pre-entry-wk2-grammar",
                    title: "Grammar",
                    points: [
                        { pattern: 'Pattern 1' },
                        { pattern: 'Pattern 2' },
                        { pattern: 'Pattern 3' },
                    ]
                }
            },
            practice: {
                spelling: [
                    {
                        classId: "pe-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                phonics: [
                    {
                        classId: "pe-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                grammar: [
                    {
                        classId: "pe-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "pe-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ]
            }
        }
    ],
};

// Entry 1 ------------------------------------------------------------
const entry1 = {
    id: "e-1", //used in the URL to identify the level
    name: "Entry 1", //displayed on the level selection page
    published: true, //if published: false, the level is greyed out on the level page and cannot be selected.

    classes: [
        { id: "e1-a", name: "Entry 1 A" },
        { id: "e1-b", name: "Entry 1 B" },
        { id: "e1-c", name: "Entry 1 C" },
        { id: "e1-d", name: "Entry 1 D" },
    ],

    weeks: [
        
        {// Week 1 - Entry 1 - Published
            id: "week1",
            name: "Week 1",
            published: true,
            sections: {
                spelling: {
                    id: "entry1-wk1-spelling-list",
                    title: "Spelling List",
                    words: ['first name', 'last name', 'address', 'postcode', 'country',
                        'city', 'telephone number', 'email address', 'date of birth', 'age']
                },
                phonics: {
                    id: "entry1-wk1-phonics",
                    title: "Phonics",
                    rule: "a_e",
                    words: ['name, age, date']
                },
                grammar: {
                    id: "entry1-wk1-grammar",
                    title: "Grammar",
                    points: [
                        { pattern: 'My name is [first name] [last name].' },
                        { pattern: 'I am [age] years old.' },
                        { pattern: 'I live in [country].' },
                    ]
                }
            },

            practice: {
                spelling: [
                    {
                        classId: "e1-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                phonics: [
                    {
                        classId: "e1-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                grammar: [
                    {
                        classId: "e1-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ]
            }
        },

        {//Week 2 - Entry 1 - Unpublished
            id: "week2",
            name: "Week 2",
            published: false,
            sections: {
                spelling: {
                    id: "entry1-wk2-spelling-list",
                    title: "Spelling List",
                    words: ['word1', 'word2', 'word3']
                },
                phonics: {
                    id: "entry1-wk2-phonics",
                    title: "Phonics",
                    rule: "rule2",
                    words: ['word4', 'word5', 'word6']
                },
                grammar: {
                    id: "entry1-wk2-grammar",
                    title: "Grammar",
                    points: [
                        { pattern: 'Pattern 1' },
                        { pattern: 'Pattern 2' },
                        { pattern: 'Pattern 3' },
                    ]
                }
            },
            practice: {
                spelling: [
                    {
                        classId: "e1-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                phonics: [
                    {
                        classId: "e1-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ],
                grammar: [
                    {
                        classId: "e1-a",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-b",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-c",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    },
                    {
                        classId: "e1-d",
                        kahootUrl: "REPLACE_WITH_KAHOOT_URL",
                    }
                ]
            }
        }


    ],
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Unpublished levels are greyed out and cannot be selected.

// Entry 2 ------------------------------------------------------------
const entry2 = {
    id: "e-2", //used in the URL to identify the level
    name: "Entry 2", //displayed on the level selection page
    published: false, //if published: false, the level is greyed out on the level page and cannot be selected.

    classes: [],

    weeks: [],

};
// Entry 3 ------------------------------------------------------------
const entry3 = {
    id: "e-3", //used in the URL to identify the level
    name: "Entry 3", //displayed on the level selection page
    published: false, //if published: false, the level is greyed out on the level page and cannot be selected.

    classes: [],

    weeks: [],
    
};
// Level 1 ------------------------------------------------------------
const level1 = {
    id: "l-1", //used in the URL to identify the level
    name: "Level 1", //displayed on the level selection page
    published: false, //if published: false, the level is greyed out on the level page and cannot be selected.

    classes: [],

    weeks: [],
    
};

// Level 2 ------------------------------------------------------------
const level2 = {
    id: "l-2", //used in the URL to identify the level
    name: "Level 2", //displayed on the level selection page
    published: false, //if published: false, the level is greyed out on the level page and cannot be selected.

    classes: [],

    weeks: [],
    
};


// ========================================================================================================

// Site data object containing all levels, classes, weeks, and practice resources.
window.SITE_DATA = {
    levels: 
    [preEntry, entry1, entry2, entry3, level1, level2],
};