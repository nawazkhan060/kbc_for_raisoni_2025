// 50 Questions Bank: 5 Contestants × 10 Questions = 50 Total
// Levels 1 to 10 with rotating topics: C++, RDBMS, Bollywood, Hollywood, Gaming

const quizSets = {
  c1: [
    {
      id: 101,
      contestant: 1,
      level: 1,
      topic: "C++",
      text: "Which header file is required to use cout?",
      question: "Which header file is required to use cout?",
      options: {
        A: "<stdio.h>",
        B: "<iostream>",
        C: "<string.h>",
        D: "<math.h>"
      },
      correct: "B",
      answer: "B",
      description: "Level 1 | C++\nAnswer: B (<iostream>)\nIn C++, the <iostream> header file defines standard input/output stream objects like cout and cin."
    },
    {
      id: 102,
      contestant: 1,
      level: 2,
      topic: "RDBMS",
      text: "Which SQL command is used to retrieve data from a table?",
      question: "Which SQL command is used to retrieve data from a table?",
      options: {
        A: "GET",
        B: "FETCH",
        C: "SELECT",
        D: "EXTRACT"
      },
      correct: "C",
      answer: "C",
      description: "Level 2 | RDBMS\nAnswer: C (SELECT)\nThe SELECT command in SQL is used to query and fetch records from database tables."
    },
    {
      id: 103,
      contestant: 1,
      level: 3,
      topic: "Bollywood",
      text: "Who plays Bunny (Kabir) in Yeh Jawaani Hai Deewani (YJHD)?",
      question: "Who plays Bunny (Kabir) in Yeh Jawaani Hai Deewani (YJHD)?",
      options: {
        A: "Ranbir Kapoor",
        B: "Ranveer Singh",
        C: "Hrithik Roshan",
        D: "Varun Dhawan"
      },
      correct: "A",
      answer: "A",
      description: "Level 3 | Bollywood\nAnswer: A (Ranbir Kapoor)\nRanbir Kapoor starred as Kabir 'Bunny' Thapar alongside Deepika Padukone in Yeh Jawaani Hai Deewani (2013)."
    },
    {
      id: 104,
      contestant: 1,
      level: 4,
      topic: "Hollywood",
      text: "Which Avenger wields the hammer Mjolnir?",
      question: "Which Avenger wields the hammer Mjolnir?",
      options: {
        A: "Iron Man",
        B: "Captain America",
        C: "Thor",
        D: "Black Panther"
      },
      correct: "C",
      answer: "C",
      description: "Level 4 | Hollywood\nAnswer: C (Thor)\nThor Odinson, the Norse God of Thunder in the Marvel Cinematic Universe, is the true wielder of Mjolnir."
    },
    {
      id: 105,
      contestant: 1,
      level: 5,
      topic: "Gaming",
      text: "Which is Dhalsim's signature fireball move?",
      question: "Which is Dhalsim's signature fireball move?",
      options: {
        A: "Hadoken",
        B: "Sonic Boom",
        C: "Yoga Fire",
        D: "Tiger Shot"
      },
      correct: "C",
      answer: "C",
      description: "Level 5 | Gaming\nAnswer: C (Yoga Fire)\nYoga Fire is Dhalsim's iconic fireball attack in the Street Fighter series."
    },
    {
      id: 106,
      contestant: 1,
      level: 6,
      topic: "C++",
      text: "What does the new operator do?",
      question: "What does the new operator do?",
      options: {
        A: "Declares a variable",
        B: "Allocates memory dynamically",
        C: "Deletes an object",
        D: "Creates a namespace"
      },
      correct: "B",
      answer: "B",
      description: "Level 6 | C++\nAnswer: B (Allocates memory dynamically)\nThe 'new' operator in C++ dynamically allocates memory from the free store (heap) and returns a pointer."
    },
    {
      id: 107,
      contestant: 1,
      level: 7,
      topic: "RDBMS",
      text: "Which join returns all rows from the left table and matching rows from the right?",
      question: "Which join returns all rows from the left table and matching rows from the right?",
      options: {
        A: "INNER JOIN",
        B: "RIGHT JOIN",
        C: "LEFT JOIN",
        D: "CROSS JOIN"
      },
      correct: "C",
      answer: "C",
      description: "Level 7 | RDBMS\nAnswer: C (LEFT JOIN)\nA LEFT JOIN (or LEFT OUTER JOIN) returns all rows from the left table, with matched rows from the right table (NULL if no match)."
    },
    {
      id: 108,
      contestant: 1,
      level: 8,
      topic: "Bollywood",
      text: "Who composed the music of YJHD?",
      question: "Who composed the music of YJHD?",
      options: {
        A: "A.R. Rahman",
        B: "Pritam",
        C: "Vishal-Shekhar",
        D: "Amit Trivedi"
      },
      correct: "B",
      answer: "B",
      description: "Level 8 | Bollywood\nAnswer: B (Pritam)\nPritam Chakraborty composed the soundtrack of Yeh Jawaani Hai Deewani, featuring hits like 'Badtameez Dil', 'Ilahi', and 'Balam Pichkari'."
    },
    {
      id: 109,
      contestant: 1,
      level: 9,
      topic: "Hollywood",
      text: "Who composed the music score of Titanic?",
      question: "Who composed the music score of Titanic?",
      options: {
        A: "Hans Zimmer",
        B: "John Williams",
        C: "James Horner",
        D: "Alan Silvestri"
      },
      correct: "C",
      answer: "C",
      description: "Level 9 | Hollywood\nAnswer: C (James Horner)\nJames Horner composed Titanic's Oscar-winning score and co-wrote Celine Dion's 'My Heart Will Go On'."
    },
    {
      id: 110,
      contestant: 1,
      level: 10,
      topic: "Gaming",
      text: "According to Street Fighter lore, why does Dhalsim fight?",
      question: "According to Street Fighter lore, why does Dhalsim fight?",
      options: {
        A: "To become world champion",
        B: "To avenge his master",
        C: "To raise money for his poor village",
        D: "To destroy Shadaloo"
      },
      correct: "C",
      answer: "C",
      description: "Level 10 | Gaming\nAnswer: C (To raise money for his poor village)\nStreet Fighter Lore: Dhalsim is a pacifist yoga master who enters martial arts tournaments solely to raise money to help his impoverished village."
    }
  ],

  c2: [
    {
      id: 201,
      contestant: 2,
      level: 1,
      topic: "RDBMS",
      text: "What does SQL stand for?",
      question: "What does SQL stand for?",
      options: {
        A: "Structured Query Language",
        B: "Simple Query Logic",
        C: "Sequential Query Language",
        D: "Standard Queue List"
      },
      correct: "A",
      answer: "A",
      description: "Level 1 | RDBMS\nAnswer: A (Structured Query Language)\nSQL stands for Structured Query Language, the standard programming language for managing relational databases."
    },
    {
      id: 202,
      contestant: 2,
      level: 2,
      topic: "Bollywood",
      text: "Who plays the female lead in Dilwale Dulhania Le Jayenge (DDLJ)?",
      question: "Who plays the female lead in Dilwale Dulhania Le Jayenge (DDLJ)?",
      options: {
        A: "Kajol",
        B: "Madhuri Dixit",
        C: "Rani Mukerji",
        D: "Preity Zinta"
      },
      correct: "A",
      answer: "A",
      description: "Level 2 | Bollywood\nAnswer: A (Kajol)\nKajol played the iconic role of Simran Singh opposite Shah Rukh Khan's Raj Malhotra in DDLJ (1995)."
    },
    {
      id: 203,
      contestant: 2,
      level: 3,
      topic: "Hollywood",
      text: "Who directed Titanic (1997)?",
      question: "Who directed Titanic (1997)?",
      options: {
        A: "Steven Spielberg",
        B: "James Cameron",
        C: "Christopher Nolan",
        D: "Ridley Scott"
      },
      correct: "B",
      answer: "B",
      description: "Level 3 | Hollywood\nAnswer: B (James Cameron)\nJames Cameron directed, wrote, co-produced, and co-edited Titanic (1997)."
    },
    {
      id: 204,
      contestant: 2,
      level: 4,
      topic: "Gaming",
      text: "Which company developed Street Fighter?",
      question: "Which company developed Street Fighter?",
      options: {
        A: "Capcom",
        B: "Konami",
        C: "Namco",
        D: "Square Enix"
      },
      correct: "A",
      answer: "A",
      description: "Level 4 | Gaming\nAnswer: A (Capcom)\nStreet Fighter is developed and published by Capcom, first released in arcades in 1987."
    },
    {
      id: 205,
      contestant: 2,
      level: 5,
      topic: "C++",
      text: "What is the default access specifier for members of a class?",
      question: "What is the default access specifier for members of a class?",
      options: {
        A: "public",
        B: "private",
        C: "protected",
        D: "friend"
      },
      correct: "B",
      answer: "B",
      description: "Level 5 | C++\nAnswer: B (private)\nIn C++, all members of a class default to private access, unlike structs where members default to public."
    },
    {
      id: 206,
      contestant: 2,
      level: 6,
      topic: "RDBMS",
      text: "Which normal form removes partial dependency?",
      question: "Which normal form removes partial dependency?",
      options: {
        A: "1NF",
        B: "2NF",
        C: "3NF",
        D: "BCNF"
      },
      correct: "B",
      answer: "B",
      description: "Level 6 | RDBMS\nAnswer: B (2NF)\nSecond Normal Form (2NF) requires a relation to be in 1NF with no partial dependencies (no non-prime attribute dependent on a proper subset of candidate key)."
    },
    {
      id: 207,
      contestant: 2,
      level: 7,
      topic: "Bollywood",
      text: "Who directed YJHD?",
      question: "Who directed YJHD?",
      options: {
        A: "Karan Johar",
        B: "Ayan Mukerji",
        C: "Zoya Akhtar",
        D: "Imtiaz Ali"
      },
      correct: "B",
      answer: "B",
      description: "Level 7 | Bollywood\nAnswer: B (Ayan Mukerji)\nAyan Mukerji directed Yeh Jawaani Hai Deewani (2013), his second feature film after Wake Up Sid."
    },
    {
      id: 208,
      contestant: 2,
      level: 8,
      topic: "Hollywood",
      text: "Which Infinity Stone powers Vision?",
      question: "Which Infinity Stone powers Vision?",
      options: {
        A: "Soul Stone",
        B: "Time Stone",
        C: "Mind Stone",
        D: "Reality Stone"
      },
      correct: "C",
      answer: "C",
      description: "Level 8 | Hollywood\nAnswer: C (Mind Stone)\nVision is brought to life and powered by the yellow Mind Stone embedded in his forehead."
    },
    {
      id: 209,
      contestant: 2,
      level: 9,
      topic: "Gaming",
      text: "Which game first introduced the Super Combo gauge in the Street Fighter series?",
      question: "Which game first introduced the Super Combo gauge in the Street Fighter series?",
      options: {
        A: "Street Fighter II: Champion Edition",
        B: "Super Street Fighter II",
        C: "Super Street Fighter II Turbo",
        D: "Street Fighter Alpha"
      },
      correct: "C",
      answer: "C",
      description: "Level 9 | Gaming\nAnswer: C (Super Street Fighter II Turbo)\nSuper Street Fighter II Turbo (1994) introduced Super Combos and the Super Combo meter to fighting games."
    },
    {
      id: 210,
      contestant: 2,
      level: 10,
      topic: "C++",
      text: "What is the size of an empty class object (class A {};) in C++?",
      question: "What is the size of an empty class object (class A {};) in C++?",
      options: {
        A: "0 bytes",
        B: "1 byte",
        C: "4 bytes",
        D: "8 bytes"
      },
      correct: "B",
      answer: "B",
      description: "Level 10 | C++\nAnswer: B (1 byte)\nIn C++, sizeof(empty_class) is guaranteed to be non-zero (typically 1 byte) to ensure each object instance possesses a unique memory address."
    }
  ],

  c3: [
    {
      id: 301,
      contestant: 3,
      level: 1,
      topic: "Bollywood",
      text: "Which actor is called the \"Baadshah of Bollywood\"?",
      question: "Which actor is called the \"Baadshah of Bollywood\"?",
      options: {
        A: "Salman Khan",
        B: "Aamir Khan",
        C: "Shah Rukh Khan",
        D: "Akshay Kumar"
      },
      correct: "C",
      answer: "C",
      description: "Level 1 | Bollywood\nAnswer: C (Shah Rukh Khan)\nShah Rukh Khan is affectionately known as 'King Khan' and the 'Baadshah of Bollywood'."
    },
    {
      id: 302,
      contestant: 3,
      level: 2,
      topic: "Hollywood",
      text: "Which Avengers member turns into a giant green creature when angry?",
      question: "Which Avengers member turns into a giant green creature when angry?",
      options: {
        A: "Thor",
        B: "Hulk",
        C: "Hawkeye",
        D: "Vision"
      },
      correct: "B",
      answer: "B",
      description: "Level 2 | Hollywood\nAnswer: B (Hulk)\nDr. Bruce Banner transforms into the monstrous green superhero Hulk when agitated or enraged."
    },
    {
      id: 303,
      contestant: 3,
      level: 3,
      topic: "Gaming",
      text: "Which Street Fighter character is famous for the Hadoken?",
      question: "Which Street Fighter character is famous for the Hadoken?",
      options: {
        A: "Ryu",
        B: "Dhalsim",
        C: "Blanka",
        D: "Guile"
      },
      correct: "A",
      answer: "A",
      description: "Level 3 | Gaming\nAnswer: A (Ryu)\nRyu is the iconic master of the Hadoken wave motion fist. (Note: Ken also uses it, but Ryu is the option)."
    },
    {
      id: 304,
      contestant: 3,
      level: 4,
      topic: "C++",
      text: "What is the output of: int a = 10; cout << a / 3;",
      question: "What is the output of: int a = 10; cout << a / 3;",
      options: {
        A: "3.33",
        B: "3",
        C: "4",
        D: "3.0"
      },
      correct: "B",
      answer: "B",
      description: "Level 4 | C++\nAnswer: B (3)\nInteger division in C++ truncates any fractional decimal part, so 10 / 3 evaluates to 3."
    },
    {
      id: 305,
      contestant: 3,
      level: 5,
      topic: "RDBMS",
      text: "Which command removes a table's structure and data completely?",
      question: "Which command removes a table's structure and data completely?",
      options: {
        A: "DELETE",
        B: "REMOVE",
        C: "DROP",
        D: "CLEAR"
      },
      correct: "C",
      answer: "C",
      description: "Level 5 | RDBMS\nAnswer: C (DROP)\nDROP TABLE completely erases the table schema, constraints, data, and indexes from the database."
    },
    {
      id: 306,
      contestant: 3,
      level: 6,
      topic: "Bollywood",
      text: "In which year was DDLJ released?",
      question: "In which year was DDLJ released?",
      options: {
        A: "1993",
        B: "1995",
        C: "1997",
        D: "1999"
      },
      correct: "B",
      answer: "B",
      description: "Level 6 | Bollywood\nAnswer: B (1995)\nDilwale Dulhania Le Jayenge premiered on 20 October 1995."
    },
    {
      id: 307,
      contestant: 3,
      level: 7,
      topic: "Hollywood",
      text: "How many Academy Awards did Titanic win?",
      question: "How many Academy Awards did Titanic win?",
      options: {
        A: "7",
        B: "9",
        C: "11",
        D: "14"
      },
      correct: "C",
      answer: "C",
      description: "Level 7 | Hollywood\nAnswer: C (11)\nTitanic won 11 Oscars out of 14 nominations, tying Ben-Hur (and later joined by LOTR: Return of the King)."
    },
    {
      id: 308,
      contestant: 3,
      level: 8,
      topic: "Gaming",
      text: "What is the name of Dhalsim's wife in Street Fighter lore?",
      question: "What is the name of Dhalsim's wife in Street Fighter lore?",
      options: {
        A: "Sally",
        B: "Sakura",
        C: "Cammy",
        D: "Rose"
      },
      correct: "A",
      answer: "A",
      description: "Level 8 | Gaming\nAnswer: A (Sally)\nIn official Capcom lore, Dhalsim's wife is Sally (Sari), who often appears cheering in his background stages."
    },
    {
      id: 309,
      contestant: 3,
      level: 9,
      topic: "C++",
      text: "What is the output of: int a[5] = {1, 2, 3}; cout << a[4];",
      question: "What is the output of: int a[5] = {1, 2, 3}; cout << a[4];",
      options: {
        A: "0",
        B: "3",
        C: "Garbage value",
        D: "Compile error"
      },
      correct: "A",
      answer: "A",
      description: "Level 9 | C++\nAnswer: A (0)\nIn C++, when an array initializer provides fewer elements than the array size, all uninitialized elements are set to zero."
    },
    {
      id: 310,
      contestant: 3,
      level: 10,
      topic: "RDBMS",
      text: "Which isolation level prevents dirty reads but still allows non-repeatable reads?",
      question: "Which isolation level prevents dirty reads but still allows non-repeatable reads?",
      options: {
        A: "Read Uncommitted",
        B: "Read Committed",
        C: "Repeatable Read",
        D: "Serializable"
      },
      correct: "B",
      answer: "B",
      description: "Level 10 | RDBMS\nAnswer: B (Read Committed)\nRead Committed prevents dirty reads (reading uncommitted changes) but permits non-repeatable reads (re-reading a row may return different values)."
    }
  ],

  c4: [
    {
      id: 401,
      contestant: 4,
      level: 1,
      topic: "Hollywood",
      text: "In Titanic, what does the ship hit?",
      question: "In Titanic, what does the ship hit?",
      options: {
        A: "A rock",
        B: "An iceberg",
        C: "A whale",
        D: "Another ship"
      },
      correct: "B",
      answer: "B",
      description: "Level 1 | Hollywood\nAnswer: B (An iceberg)\nThe RMS Titanic collided with an iceberg in the North Atlantic on April 14, 1912."
    },
    {
      id: 402,
      contestant: 4,
      level: 2,
      topic: "Gaming",
      text: "Which company created Super Mario?",
      question: "Which company created Super Mario?",
      options: {
        A: "Sega",
        B: "Sony",
        C: "Nintendo",
        D: "Atari"
      },
      correct: "C",
      answer: "C",
      description: "Level 2 | Gaming\nAnswer: C (Nintendo)\nSuper Mario was created by Shigeru Miyamoto and published worldwide by Nintendo."
    },
    {
      id: 403,
      contestant: 4,
      level: 3,
      topic: "C++",
      text: "Which data type stores single-precision decimal numbers?",
      question: "Which data type stores single-precision decimal numbers?",
      options: {
        A: "int",
        B: "float",
        C: "char",
        D: "bool"
      },
      correct: "B",
      answer: "B",
      description: "Level 3 | C++\nAnswer: B (float)\nIn C++, 'float' represents a 32-bit single-precision floating point number, whereas 'double' provides double-precision."
    },
    {
      id: 404,
      contestant: 4,
      level: 4,
      topic: "RDBMS",
      text: "Which SQL clause filters rows based on a condition?",
      question: "Which SQL clause filters rows based on a condition?",
      options: {
        A: "ORDER BY",
        B: "GROUP BY",
        C: "WHERE",
        D: "HAVING"
      },
      correct: "C",
      answer: "C",
      description: "Level 4 | RDBMS\nAnswer: C (WHERE)\nThe WHERE clause filters rows from a query according to the provided Boolean condition."
    },
    {
      id: 405,
      contestant: 4,
      level: 5,
      topic: "Bollywood",
      text: "In YJHD, the friends go on a trek to which hill destination?",
      question: "In YJHD, the friends go on a trek to which hill destination?",
      options: {
        A: "Shimla",
        B: "Manali",
        C: "Ooty",
        D: "Darjeeling"
      },
      correct: "B",
      answer: "B",
      description: "Level 5 | Bollywood\nAnswer: B (Manali)\nIn Yeh Jawaani Hai Deewani, the group of friends heads to Manali, Himachal Pradesh for their adventurous trek."
    },
    {
      id: 406,
      contestant: 4,
      level: 6,
      topic: "Hollywood",
      text: "Who is the main villain of The Avengers (2012)?",
      question: "Who is the main villain of The Avengers (2012)?",
      options: {
        A: "Thanos",
        B: "Ultron",
        C: "Loki",
        D: "Red Skull"
      },
      correct: "C",
      answer: "C",
      description: "Level 6 | Hollywood\nAnswer: C (Loki)\nLoki, the God of Mischief, acts as the primary antagonist invading Earth with the Chitauri army."
    },
    {
      id: 407,
      contestant: 4,
      level: 7,
      topic: "Gaming",
      text: "Which Street Fighter character is a sumo wrestler from Japan?",
      question: "Which Street Fighter character is a sumo wrestler from Japan?",
      options: {
        A: "Zangief",
        B: "E. Honda",
        C: "Balrog",
        D: "Sagat"
      },
      correct: "B",
      answer: "B",
      description: "Level 7 | Gaming\nAnswer: B (E. Honda)\nEdmond Honda is a Japanese professional sumo wrestler famous for the Hundred Hand Slap."
    },
    {
      id: 408,
      contestant: 4,
      level: 8,
      topic: "C++",
      text: "What is the output of: int x = 5; int &r = x; r = 10; cout << x;",
      question: "What is the output of: int x = 5; int &r = x; r = 10; cout << x;",
      options: {
        A: "5",
        B: "10",
        C: "Garbage value",
        D: "Compile error"
      },
      correct: "B",
      answer: "B",
      description: "Level 8 | C++\nAnswer: B (10)\nBecause 'r' is a reference (alias) to 'x', assigning r = 10 directly modifies x, printing 10."
    },
    {
      id: 409,
      contestant: 4,
      level: 9,
      topic: "RDBMS",
      text: "Which normal form requires every determinant to be a candidate key?",
      question: "Which normal form requires every determinant to be a candidate key?",
      options: {
        A: "2NF",
        B: "3NF",
        C: "BCNF",
        D: "4NF"
      },
      correct: "C",
      answer: "C",
      description: "Level 9 | RDBMS\nAnswer: C (BCNF)\nBoyce-Codd Normal Form (BCNF) requires that for every functional dependency X -> Y, X must be a superkey/candidate key."
    },
    {
      id: 410,
      contestant: 4,
      level: 10,
      topic: "Bollywood",
      text: "Which Mumbai theatre ran DDLJ continuously for over 20 years?",
      question: "Which Mumbai theatre ran DDLJ continuously for over 20 years?",
      options: {
        A: "Liberty Cinema",
        B: "Regal Cinema",
        C: "Maratha Mandir",
        D: "Gaiety Galaxy"
      },
      correct: "C",
      answer: "C",
      description: "Level 10 | Bollywood\nAnswer: C (Maratha Mandir)\nMaratha Mandir theatre near Mumbai Central achieved a global cinematic milestone by screening DDLJ daily for over 25 years."
    }
  ],

  c5: [
    {
      id: 501,
      contestant: 5,
      level: 1,
      topic: "Gaming",
      text: "Dhalsim from Street Fighter represents which country?",
      question: "Dhalsim from Street Fighter represents which country?",
      options: {
        A: "Japan",
        B: "China",
        C: "India",
        D: "Brazil"
      },
      correct: "C",
      answer: "C",
      description: "Level 1 | Gaming\nAnswer: C (India)\nDhalsim is an Indian ascetic yoga master and one of the original World Warriors in Street Fighter II."
    },
    {
      id: 502,
      contestant: 5,
      level: 2,
      topic: "C++",
      text: "Which operator is used with cout to print output?",
      question: "Which operator is used with cout to print output?",
      options: {
        A: ">>",
        B: "<<",
        C: "==",
        D: "=>"
      },
      correct: "B",
      answer: "B",
      description: "Level 2 | C++\nAnswer: B (<<)\nThe stream insertion operator '<<' is used with std::cout to send formatted data to standard output."
    },
    {
      id: 503,
      contestant: 5,
      level: 3,
      topic: "RDBMS",
      text: "What does a primary key do?",
      question: "What does a primary key do?",
      options: {
        A: "Allows duplicate rows",
        B: "Uniquely identifies each row",
        C: "Always stores NULL",
        D: "Links two databases"
      },
      correct: "B",
      answer: "B",
      description: "Level 3 | RDBMS\nAnswer: B (Uniquely identifies each row)\nA primary key uniquely identifies every record in a table and cannot contain duplicate or NULL values."
    },
    {
      id: 504,
      contestant: 5,
      level: 4,
      topic: "Bollywood",
      text: "What is the name of Kajol's character in DDLJ?",
      question: "What is the name of Kajol's character in DDLJ?",
      options: {
        A: "Anjali",
        B: "Tina",
        C: "Simran",
        D: "Pooja"
      },
      correct: "C",
      answer: "C",
      description: "Level 4 | Bollywood\nAnswer: C (Simran)\nKajol played Simran Singh in Dilwale Dulhania Le Jayenge (1995)."
    },
    {
      id: 505,
      contestant: 5,
      level: 5,
      topic: "Hollywood",
      text: "What is Jack's surname in Titanic?",
      question: "What is Jack's surname in Titanic?",
      options: {
        A: "Dawson",
        B: "Hockley",
        C: "Calvert",
        D: "Murdoch"
      },
      correct: "A",
      answer: "A",
      description: "Level 5 | Hollywood\nAnswer: A (Dawson)\nLeonardo DiCaprio plays Jack Dawson, a free-spirited third-class artist aboard the RMS Titanic."
    },
    {
      id: 506,
      contestant: 5,
      level: 6,
      topic: "Gaming",
      text: "Street Fighter II was first released in arcades in which year?",
      question: "Street Fighter II was first released in arcades in which year?",
      options: {
        A: "1987",
        B: "1991",
        C: "1995",
        D: "1999"
      },
      correct: "B",
      answer: "B",
      description: "Level 6 | Gaming\nAnswer: B (1991)\nStreet Fighter II: The World Warrior revolutionized arcade fighting games upon its 1991 release."
    },
    {
      id: 507,
      contestant: 5,
      level: 7,
      topic: "C++",
      text: "Using the same function name with different parameter lists is called:",
      question: "Using the same function name with different parameter lists is called:",
      options: {
        A: "Overriding",
        B: "Overloading",
        C: "Inheritance",
        D: "Encapsulation"
      },
      correct: "B",
      answer: "B",
      description: "Level 7 | C++\nAnswer: B (Overloading)\nFunction overloading is compile-time polymorphism where functions share the same identifier with distinct parameter types or counts."
    },
    {
      id: 508,
      contestant: 5,
      level: 8,
      topic: "RDBMS",
      text: "Which ACID property ensures a transaction is \"all or nothing\"?",
      question: "Which ACID property ensures a transaction is \"all or nothing\"?",
      options: {
        A: "Atomicity",
        B: "Consistency",
        C: "Isolation",
        D: "Durability"
      },
      correct: "A",
      answer: "A",
      description: "Level 8 | RDBMS\nAnswer: A (Atomicity)\nAtomicity guarantees that all SQL operations within a database transaction succeed or the entire transaction is rolled back."
    },
    {
      id: 509,
      contestant: 5,
      level: 9,
      topic: "Bollywood",
      text: "Who played Chaudhry Baldev Singh in DDLJ?",
      question: "Who played Chaudhry Baldev Singh in DDLJ?",
      options: {
        A: "Anupam Kher",
        B: "Amrish Puri",
        C: "Om Puri",
        D: "Pran"
      },
      correct: "B",
      answer: "B",
      description: "Level 9 | Bollywood\nAnswer: B (Amrish Puri)\nVeteran actor Amrish Puri delivered an indelible portrayal of Simran's stern father Chaudhry Baldev Singh."
    },
    {
      id: 510,
      contestant: 5,
      level: 10,
      topic: "Hollywood",
      text: "Who directed The Avengers (2012)?",
      question: "Who directed The Avengers (2012)?",
      options: {
        A: "Joss Whedon",
        B: "Anthony and Joe Russo",
        C: "Jon Favreau",
        D: "Kenneth Branagh"
      },
      correct: "A",
      answer: "A",
      description: "Level 10 | Hollywood\nAnswer: A (Joss Whedon)\nJoss Whedon directed the ground-breaking ensemble superhero film Marvel's The Avengers (2012)."
    }
  ]
};

// Combine all 50 questions
quizSets.all = [
  ...quizSets.c1,
  ...quizSets.c2,
  ...quizSets.c3,
  ...quizSets.c4,
  ...quizSets.c5
];

// Compatibility aliases
quizSets.contestant1 = quizSets.c1;
quizSets.contestant2 = quizSets.c2;
quizSets.contestant3 = quizSets.c3;
quizSets.contestant4 = quizSets.c4;
quizSets.contestant5 = quizSets.c5;
quizSets.set1 = quizSets.c1;
quizSets.set2 = quizSets.c2;
quizSets.set3 = quizSets.c3;
quizSets.set4 = quizSets.c4;
quizSets.set5 = quizSets.c5;

// Answer key mapping
quizSets.answerKey = {
  contestant_1: ["B", "C", "A", "C", "C", "B", "C", "B", "C", "C"],
  contestant_2: ["A", "A", "B", "A", "B", "B", "B", "C", "C", "B"],
  contestant_3: ["C", "B", "A", "B", "C", "B", "C", "A", "A", "B"],
  contestant_4: ["B", "C", "B", "C", "B", "C", "B", "B", "C", "C"],
  contestant_5: ["C", "B", "B", "C", "A", "B", "B", "A", "B", "A"]
};

// Quizmaster Notes
quizSets.quizmasterNotes = [
  "Topic order per contestant rotates (C1 starts C++, C2 RDBMS, C3 Bollywood, C4 Hollywood, C5 Gaming), so each gets 2 questions per topic.",
  "Levels 1-3 easy, 4-6 medium, 7-8 hard, 9-10 tiebreaker-grade.",
  "Contestant 3 Level 3: Ken also uses the Hadoken but is not in the options.",
  "Contestant 3 Level 7: Titanic tied Ben-Hur for 11 Oscars; The Return of the King later matched it.",
  "Contestant 3 Level 8 and Contestant 1 Level 10 depend on official Street Fighter backstory."
];

// Export or assign to window for browser access
if (typeof window !== 'undefined') {
  window.quizSets = quizSets;
}
if (typeof module !== 'undefined') {
  module.exports = quizSets;
}
