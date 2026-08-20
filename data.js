// Consts below define the structure of the data for each ESOL level. 
// Each level contains classes, weeks, and practice resource links.


// Pre-Entry ------------------------------------------------------------
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

    //Third-level: an array of weeks. level.html will loop over this array to create the week selection page.
    weeks: [
        //Week 1 - Pre-Entry
        {
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
        //Week 2 is currently unpublished, so it will be greyed out on the week selection page.
        {
            id: "week2",
            name: "Week 2",
            published: false,
            sections: {
                Spelling: {
                    id: "pre-entry-wk2-spelling-list",
                    title: "Spelling List",
                    words: ['word1', 'word2', 'word3']
                },
                Phonics: {
                    id: "pre-entry-wk2-phonics",
                    title: "Phonics",
                    rule: "rule2",
                    words: ['word4', 'word5', 'word6']
                },
                Grammar: {
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

    //Second-level: an array of classes. index.html will loop over this array to create the class selection page.
    classes: [
        {
            id: "e1-a", //used in the URL to identify the class
            name: "Entry 1 A", //displayed on the class selection page
        },

        { id: "e1-b", name: "Entry 1 B" },
        { id: "e1-c", name: "Entry 1 C" },
        { id: "e1-d", name: "Entry 1 D" },
    ],

    //Third-level: an array of weeks. level.html will loop over this array to create the week selection page.
    weeks: [
        
        {//Week 1 - Entry 1 - Published
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
            //Fourth-level: an object containing practice resources for each section. 
            // level.html will use this object to create the practice resources page.
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
                Spelling: {
                    id: "entry1-wk2-spelling-list",
                    title: "Spelling List",
                    words: ['word1', 'word2', 'word3']
                },
                Phonics: {
                    id: "entry1-wk2-phonics",
                    title: "Phonics",
                    rule: "rule2",
                    words: ['word4', 'word5', 'word6']
                },
                Grammar: {
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

// Entry 2 ------------------------------------------------------------

// Entry 3 ------------------------------------------------------------

// Level 1 ------------------------------------------------------------

// Level 2 ------------------------------------------------------------