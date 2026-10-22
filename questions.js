// 50 Questions Bank (EASY EDITION): 5 Contestants x 10 Questions = 50 Total
// Levels 1 to 10 (easy, rising gently) with rotating topics: C++ Basics, India GK, Movies, Dialogue Fill-in, Meme Fill-in

const quizSets = {
  c1: [
    {
      id: 101,
      contestant: 1,
      level: 1,
      topic: "C++ Basics",
      text: "Which symbol is used to end most C++ statements?",
      question: "Which symbol is used to end most C++ statements?",
      options: {
        A: ":",
        B: ";",
        C: ".",
        D: ","
      },
      correct: "B",
      answer: "B",
      description: "Level 1 | C++ Basics\nAnswer: B (;)\nIn C++, a semicolon marks the end of a statement."
    },
    {
      id: 102,
      contestant: 1,
      level: 2,
      topic: "India GK",
      text: "Which is the national animal of India?",
      question: "Which is the national animal of India?",
      options: {
        A: "Lion",
        B: "Elephant",
        C: "Tiger",
        D: "Leopard"
      },
      correct: "C",
      answer: "C",
      description: "Level 2 | India GK\nAnswer: C (Tiger)\nThe Bengal tiger is India's national animal."
    },
    {
      id: 103,
      contestant: 1,
      level: 3,
      topic: "Movies",
      text: "In The Lion King, which lion cub grows up to be king?",
      question: "In The Lion King, which lion cub grows up to be king?",
      options: {
        A: "Mufasa",
        B: "Scar",
        C: "Simba",
        D: "Timon"
      },
      correct: "C",
      answer: "C",
      description: "Level 3 | Movies\nAnswer: C (Simba)\nSimba is the lion cub who grows up to become king in The Lion King."
    },
    {
      id: 104,
      contestant: 1,
      level: 4,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Mr. India): \"Mogambo ___ hua!\"",
      question: "Fill in the blank (Mr. India): \"Mogambo ___ hua!\"",
      options: {
        A: "naraz",
        B: "pareshan",
        C: "udaas",
        D: "khush"
      },
      correct: "D",
      answer: "D",
      description: "Level 4 | Dialogue Fill-in\nAnswer: D (khush)\nAmrish Puri's famous line as Mogambo in Mr. India: \"Mogambo khush hua\"."
    },
    {
      id: 105,
      contestant: 1,
      level: 5,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Dekh raha hai ___!\"",
      question: "Fill in the meme: \"Dekh raha hai ___!\"",
      options: {
        A: "Rahul",
        B: "Rohan",
        C: "Binod",
        D: "Mohan"
      },
      correct: "C",
      answer: "C",
      description: "Level 5 | Meme Fill-in\nAnswer: C (Binod)\n\"Dekh raha hai Binod\" is a viral Indian comment meme."
    },
    {
      id: 106,
      contestant: 1,
      level: 6,
      topic: "C++ Basics",
      text: "Which data type is used to store whole numbers?",
      question: "Which data type is used to store whole numbers?",
      options: {
        A: "float",
        B: "char",
        C: "int",
        D: "string"
      },
      correct: "C",
      answer: "C",
      description: "Level 6 | C++ Basics\nAnswer: C (int)\nThe int data type stores whole numbers such as 5 or -20."
    },
    {
      id: 107,
      contestant: 1,
      level: 7,
      topic: "India GK",
      text: "The Taj Mahal is located in which state?",
      question: "The Taj Mahal is located in which state?",
      options: {
        A: "Delhi",
        B: "Uttar Pradesh",
        C: "Rajasthan",
        D: "Bihar"
      },
      correct: "B",
      answer: "B",
      description: "Level 7 | India GK\nAnswer: B (Uttar Pradesh)\nThe Taj Mahal is in Agra, Uttar Pradesh."
    },
    {
      id: 108,
      contestant: 1,
      level: 8,
      topic: "Movies",
      text: "Who plays Chulbul Pandey in Dabangg?",
      question: "Who plays Chulbul Pandey in Dabangg?",
      options: {
        A: "Ajay Devgn",
        B: "Akshay Kumar",
        C: "Sunny Deol",
        D: "Salman Khan"
      },
      correct: "D",
      answer: "D",
      description: "Level 8 | Movies\nAnswer: D (Salman Khan)\nSalman Khan plays Chulbul Pandey in Dabangg (2010)."
    },
    {
      id: 109,
      contestant: 1,
      level: 9,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Dabangg): \"Thappad se darr nahi lagta sahab, ___ se lagta hai.\"",
      question: "Fill in the blank (Dabangg): \"Thappad se darr nahi lagta sahab, ___ se lagta hai.\"",
      options: {
        A: "gussa",
        B: "police",
        C: "pyaar",
        D: "bhookh"
      },
      correct: "C",
      answer: "C",
      description: "Level 9 | Dialogue Fill-in\nAnswer: C (pyaar)\nSalman Khan's line in Dabangg: \"Thappad se darr nahi lagta sahab, pyaar se lagta hai\"."
    },
    {
      id: 110,
      contestant: 1,
      level: 10,
      topic: "Meme Fill-in",
      text: "Fill in the meme (Among Us): \"That's kinda ___.\"",
      question: "Fill in the meme (Among Us): \"That's kinda ___.\"",
      options: {
        A: "sad",
        B: "cool",
        C: "funny",
        D: "sus"
      },
      correct: "D",
      answer: "D",
      description: "Level 10 | Meme Fill-in\nAnswer: D (sus)\n\"Sus\" is short for suspicious, popularised by the game Among Us."
    }
  ],

  c2: [
    {
      id: 201,
      contestant: 2,
      level: 1,
      topic: "India GK",
      text: "What is the capital of India?",
      question: "What is the capital of India?",
      options: {
        A: "Mumbai",
        B: "New Delhi",
        C: "Kolkata",
        D: "Chennai"
      },
      correct: "B",
      answer: "B",
      description: "Level 1 | India GK\nAnswer: B (New Delhi)\nNew Delhi is the capital of India."
    },
    {
      id: 202,
      contestant: 2,
      level: 2,
      topic: "Movies",
      text: "In Frozen, what is the name of the snowman?",
      question: "In Frozen, what is the name of the snowman?",
      options: {
        A: "Olaf",
        B: "Sven",
        C: "Kristoff",
        D: "Hans"
      },
      correct: "A",
      answer: "A",
      description: "Level 2 | Movies\nAnswer: A (Olaf)\nOlaf is the friendly snowman in Frozen."
    },
    {
      id: 203,
      contestant: 2,
      level: 3,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Sholay): \"Kitne ___ the?\"",
      question: "Fill in the blank (Sholay): \"Kitne ___ the?\"",
      options: {
        A: "log",
        B: "aadmi",
        C: "dost",
        D: "ladke"
      },
      correct: "B",
      answer: "B",
      description: "Level 3 | Dialogue Fill-in\nAnswer: B (aadmi)\nGabbar Singh's famous line from Sholay: \"Kitne aadmi the?\""
    },
    {
      id: 204,
      contestant: 2,
      level: 4,
      topic: "Meme Fill-in",
      text: "Fill in the meme (Hera Pheri): \"Utha le re ___, utha le!\"",
      question: "Fill in the meme (Hera Pheri): \"Utha le re ___, utha le!\"",
      options: {
        A: "bhai",
        B: "baba",
        C: "mama",
        D: "kaka"
      },
      correct: "B",
      answer: "B",
      description: "Level 4 | Meme Fill-in\nAnswer: B (baba)\n\"Utha le re baba\" is a Hera Pheri line that became a popular meme."
    },
    {
      id: 205,
      contestant: 2,
      level: 5,
      topic: "C++ Basics",
      text: "Every C++ program starts executing from which function?",
      question: "Every C++ program starts executing from which function?",
      options: {
        A: "start()",
        B: "begin()",
        C: "run()",
        D: "main()"
      },
      correct: "D",
      answer: "D",
      description: "Level 5 | C++ Basics\nAnswer: D (main())\nEvery C++ program starts executing from the main() function."
    },
    {
      id: 206,
      contestant: 2,
      level: 6,
      topic: "India GK",
      text: "What is the capital of Rajasthan?",
      question: "What is the capital of Rajasthan?",
      options: {
        A: "Jodhpur",
        B: "Udaipur",
        C: "Jaipur",
        D: "Ajmer"
      },
      correct: "C",
      answer: "C",
      description: "Level 6 | India GK\nAnswer: C (Jaipur)\nJaipur, the Pink City, is the capital of Rajasthan."
    },
    {
      id: 207,
      contestant: 2,
      level: 7,
      topic: "Movies",
      text: "Lagaan is based on which sport?",
      question: "Lagaan is based on which sport?",
      options: {
        A: "Football",
        B: "Cricket",
        C: "Kabaddi",
        D: "Hockey"
      },
      correct: "B",
      answer: "B",
      description: "Level 7 | Movies\nAnswer: B (Cricket)\nLagaan (2001) is about a cricket match against British officers."
    },
    {
      id: 208,
      contestant: 2,
      level: 8,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Jab We Met): \"Main apni ___ hoon!\"",
      question: "Fill in the blank (Jab We Met): \"Main apni ___ hoon!\"",
      options: {
        A: "favourite",
        B: "queen",
        C: "hero",
        D: "boss"
      },
      correct: "A",
      answer: "A",
      description: "Level 8 | Dialogue Fill-in\nAnswer: A (favourite)\nKareena Kapoor's line as Geet in Jab We Met: \"Main apni favourite hoon\"."
    },
    {
      id: 209,
      contestant: 2,
      level: 9,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Thala for a ___\"",
      question: "Fill in the meme: \"Thala for a ___\"",
      options: {
        A: "season",
        B: "reason",
        C: "reaction",
        D: "region"
      },
      correct: "B",
      answer: "B",
      description: "Level 9 | Meme Fill-in\nAnswer: B (reason)\n\"Thala for a reason\" is a meme about MS Dhoni, called Thala by CSK fans."
    },
    {
      id: 210,
      contestant: 2,
      level: 10,
      topic: "C++ Basics",
      text: "What is the output of: cout << 10 % 3;",
      question: "What is the output of: cout << 10 % 3;",
      options: {
        A: "3",
        B: "0",
        C: "1",
        D: "3.33"
      },
      correct: "C",
      answer: "C",
      description: "Level 10 | C++ Basics\nAnswer: C (1)\nThe % operator gives the remainder: 10 divided by 3 leaves 1."
    }
  ],

  c3: [
    {
      id: 301,
      contestant: 3,
      level: 1,
      topic: "Movies",
      text: "Who is called the \"King Khan\" of Bollywood?",
      question: "Who is called the \"King Khan\" of Bollywood?",
      options: {
        A: "Salman Khan",
        B: "Shah Rukh Khan",
        C: "Aamir Khan",
        D: "Saif Ali Khan"
      },
      correct: "B",
      answer: "B",
      description: "Level 1 | Movies\nAnswer: B (Shah Rukh Khan)\nShah Rukh Khan is known as King Khan and the Baadshah of Bollywood."
    },
    {
      id: 302,
      contestant: 3,
      level: 2,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Deewar): \"Mere paas ___ hai.\"",
      question: "Fill in the blank (Deewar): \"Mere paas ___ hai.\"",
      options: {
        A: "Paisa",
        B: "Gaadi",
        C: "Maa",
        D: "Bangla"
      },
      correct: "C",
      answer: "C",
      description: "Level 2 | Dialogue Fill-in\nAnswer: C (Maa)\nFamous line from Deewar (1975): \"Mere paas maa hai\"."
    },
    {
      id: 303,
      contestant: 3,
      level: 3,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Keep calm and ___ on.\"",
      question: "Fill in the meme: \"Keep calm and ___ on.\"",
      options: {
        A: "go",
        B: "stay",
        C: "carry",
        D: "move"
      },
      correct: "C",
      answer: "C",
      description: "Level 3 | Meme Fill-in\nAnswer: C (carry)\n\"Keep Calm and Carry On\" is a famous poster slogan turned meme template."
    },
    {
      id: 304,
      contestant: 3,
      level: 4,
      topic: "C++ Basics",
      text: "Which one is used to take input from the keyboard?",
      question: "Which one is used to take input from the keyboard?",
      options: {
        A: "cout",
        B: "cin",
        C: "print",
        D: "scan"
      },
      correct: "B",
      answer: "B",
      description: "Level 4 | C++ Basics\nAnswer: B (cin)\ncin reads input from the keyboard and is used with the >> operator."
    },
    {
      id: 305,
      contestant: 3,
      level: 5,
      topic: "India GK",
      text: "Which state is known as \"God's Own Country\"?",
      question: "Which state is known as \"God's Own Country\"?",
      options: {
        A: "Kerala",
        B: "Goa",
        C: "Sikkim",
        D: "Punjab"
      },
      correct: "A",
      answer: "A",
      description: "Level 5 | India GK\nAnswer: A (Kerala)\nKerala is famously called God's Own Country."
    },
    {
      id: 306,
      contestant: 3,
      level: 6,
      topic: "Movies",
      text: "Dangal is a movie about which sport?",
      question: "Dangal is a movie about which sport?",
      options: {
        A: "Cricket",
        B: "Boxing",
        C: "Wrestling",
        D: "Hockey"
      },
      correct: "C",
      answer: "C",
      description: "Level 6 | Movies\nAnswer: C (Wrestling)\nDangal (2016) is about wrestler Mahavir Singh Phogat and his daughters."
    },
    {
      id: 307,
      contestant: 3,
      level: 7,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Munna Bhai M.B.B.S.): \"Jadu ki ___!\"",
      question: "Fill in the blank (Munna Bhai M.B.B.S.): \"Jadu ki ___!\"",
      options: {
        A: "pappi",
        B: "jhappi",
        C: "taali",
        D: "goli"
      },
      correct: "B",
      answer: "B",
      description: "Level 7 | Dialogue Fill-in\nAnswer: B (jhappi)\nSanjay Dutt's \"Jadu ki jhappi\" from Munna Bhai M.B.B.S."
    },
    {
      id: 308,
      contestant: 3,
      level: 8,
      topic: "Meme Fill-in",
      text: "Fill in the meme (Saath Nibhana Saathiya): \"___ mein kaun tha?\"",
      question: "Fill in the meme (Saath Nibhana Saathiya): \"___ mein kaun tha?\"",
      options: {
        A: "Bathroom",
        B: "Bedroom",
        C: "Rasode",
        D: "Chhat"
      },
      correct: "C",
      answer: "C",
      description: "Level 8 | Meme Fill-in\nAnswer: C (Rasode)\n\"Rasode mein kaun tha?\" went viral from a Saath Nibhana Saathiya scene."
    },
    {
      id: 309,
      contestant: 3,
      level: 9,
      topic: "C++ Basics",
      text: "Which of these is a valid variable name?",
      question: "Which of these is a valid variable name?",
      options: {
        A: "2num",
        B: "int",
        C: "my-num",
        D: "my_num"
      },
      correct: "D",
      answer: "D",
      description: "Level 9 | C++ Basics\nAnswer: D (my_num)\nVariable names can use letters, digits and underscores, but cannot start with a digit or be a keyword."
    },
    {
      id: 310,
      contestant: 3,
      level: 10,
      topic: "India GK",
      text: "Which is the largest Indian state by area?",
      question: "Which is the largest Indian state by area?",
      options: {
        A: "Madhya Pradesh",
        B: "Maharashtra",
        C: "Rajasthan",
        D: "Uttar Pradesh"
      },
      correct: "C",
      answer: "C",
      description: "Level 10 | India GK\nAnswer: C (Rajasthan)\nRajasthan is the largest Indian state by area."
    }
  ],

  c4: [
    {
      id: 401,
      contestant: 4,
      level: 1,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (3 Idiots): \"Aal ___ well!\"",
      question: "Fill in the blank (3 Idiots): \"Aal ___ well!\"",
      options: {
        A: "izz",
        B: "is",
        C: "was",
        D: "all"
      },
      correct: "A",
      answer: "A",
      description: "Level 1 | Dialogue Fill-in\nAnswer: A (izz)\nFamous line from 3 Idiots: \"Aal izz well\"."
    },
    {
      id: 402,
      contestant: 4,
      level: 2,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Ok ___\"",
      question: "Fill in the meme: \"Ok ___\"",
      options: {
        A: "boomer",
        B: "bro",
        C: "sir",
        D: "cool"
      },
      correct: "A",
      answer: "A",
      description: "Level 2 | Meme Fill-in\nAnswer: A (boomer)\n\"Ok boomer\" is a popular internet reply."
    },
    {
      id: 403,
      contestant: 4,
      level: 3,
      topic: "C++ Basics",
      text: "Which operator is used with cout to print output?",
      question: "Which operator is used with cout to print output?",
      options: {
        A: ">>",
        B: "==",
        C: "<<",
        D: "=>"
      },
      correct: "C",
      answer: "C",
      description: "Level 3 | C++ Basics\nAnswer: C (<<)\nThe stream insertion operator << sends data to cout."
    },
    {
      id: 404,
      contestant: 4,
      level: 4,
      topic: "India GK",
      text: "Mumbai is the capital of which state?",
      question: "Mumbai is the capital of which state?",
      options: {
        A: "Gujarat",
        B: "Goa",
        C: "Karnataka",
        D: "Maharashtra"
      },
      correct: "D",
      answer: "D",
      description: "Level 4 | India GK\nAnswer: D (Maharashtra)\nMumbai is the capital of Maharashtra."
    },
    {
      id: 405,
      contestant: 4,
      level: 5,
      topic: "Movies",
      text: "Who plays Rancho in 3 Idiots?",
      question: "Who plays Rancho in 3 Idiots?",
      options: {
        A: "Aamir Khan",
        B: "R. Madhavan",
        C: "Sharman Joshi",
        D: "Ranbir Kapoor"
      },
      correct: "A",
      answer: "A",
      description: "Level 5 | Movies\nAnswer: A (Aamir Khan)\nAamir Khan plays Rancho (Phunsukh Wangdu) in 3 Idiots (2009)."
    },
    {
      id: 406,
      contestant: 4,
      level: 6,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Om Shanti Om): \"Picture abhi baaki hai mere ___!\"",
      question: "Fill in the blank (Om Shanti Om): \"Picture abhi baaki hai mere ___!\"",
      options: {
        A: "bhai",
        B: "dost",
        C: "beta",
        D: "sanam"
      },
      correct: "B",
      answer: "B",
      description: "Level 6 | Dialogue Fill-in\nAnswer: B (dost)\nShah Rukh Khan's line in Om Shanti Om: \"Picture abhi baaki hai mere dost\"."
    },
    {
      id: 407,
      contestant: 4,
      level: 7,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Beta tumse ___ ho payega.\"",
      question: "Fill in the meme: \"Beta tumse ___ ho payega.\"",
      options: {
        A: "kabhi",
        B: "sab",
        C: "kuch",
        D: "na"
      },
      correct: "D",
      answer: "D",
      description: "Level 7 | Meme Fill-in\nAnswer: D (na)\n\"Beta tumse na ho payega\" is a popular Indian meme line."
    },
    {
      id: 408,
      contestant: 4,
      level: 8,
      topic: "C++ Basics",
      text: "What is the output of: cout << 2 + 3;",
      question: "What is the output of: cout << 2 + 3;",
      options: {
        A: "23",
        B: "5",
        C: "2+3",
        D: "Error"
      },
      correct: "B",
      answer: "B",
      description: "Level 8 | C++ Basics\nAnswer: B (5)\n2 + 3 is calculated first, so cout prints 5."
    },
    {
      id: 409,
      contestant: 4,
      level: 9,
      topic: "India GK",
      text: "Which is the smallest Indian state by area?",
      question: "Which is the smallest Indian state by area?",
      options: {
        A: "Sikkim",
        B: "Goa",
        C: "Tripura",
        D: "Kerala"
      },
      correct: "B",
      answer: "B",
      description: "Level 9 | India GK\nAnswer: B (Goa)\nGoa is the smallest Indian state by area."
    },
    {
      id: 410,
      contestant: 4,
      level: 10,
      topic: "Movies",
      text: "Who played Baahubali in the film Baahubali?",
      question: "Who played Baahubali in the film Baahubali?",
      options: {
        A: "Rana Daggubati",
        B: "Prabhas",
        C: "Allu Arjun",
        D: "Ram Charan"
      },
      correct: "B",
      answer: "B",
      description: "Level 10 | Movies\nAnswer: B (Prabhas)\nPrabhas played the title role in Baahubali."
    }
  ],

  c5: [
    {
      id: 501,
      contestant: 5,
      level: 1,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Never gonna give you ___\"",
      question: "Fill in the meme: \"Never gonna give you ___\"",
      options: {
        A: "down",
        B: "up",
        C: "away",
        D: "in"
      },
      correct: "B",
      answer: "B",
      description: "Level 1 | Meme Fill-in\nAnswer: B (up)\nThe Rickroll meme comes from Rick Astley's song \"Never Gonna Give You Up\"."
    },
    {
      id: 502,
      contestant: 5,
      level: 2,
      topic: "C++ Basics",
      text: "Which header file is needed to use cout?",
      question: "Which header file is needed to use cout?",
      options: {
        A: "<iostream>",
        B: "<stdio.h>",
        C: "<math.h>",
        D: "<string.h>"
      },
      correct: "A",
      answer: "A",
      description: "Level 2 | C++ Basics\nAnswer: A (<iostream>)\nThe <iostream> header defines input/output objects like cout and cin."
    },
    {
      id: 503,
      contestant: 5,
      level: 3,
      topic: "India GK",
      text: "Which is the national bird of India?",
      question: "Which is the national bird of India?",
      options: {
        A: "Peacock",
        B: "Parrot",
        C: "Sparrow",
        D: "Eagle"
      },
      correct: "A",
      answer: "A",
      description: "Level 3 | India GK\nAnswer: A (Peacock)\nThe Indian peacock is the national bird of India."
    },
    {
      id: 504,
      contestant: 5,
      level: 4,
      topic: "Movies",
      text: "Who wrote the Harry Potter books?",
      question: "Who wrote the Harry Potter books?",
      options: {
        A: "J.R.R. Tolkien",
        B: "J.K. Rowling",
        C: "Roald Dahl",
        D: "Stephen King"
      },
      correct: "B",
      answer: "B",
      description: "Level 4 | Movies\nAnswer: B (J.K. Rowling)\nJ.K. Rowling wrote the Harry Potter books."
    },
    {
      id: 505,
      contestant: 5,
      level: 5,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Hera Pheri): \"Ye Baburao ka ___ hai!\"",
      question: "Fill in the blank (Hera Pheri): \"Ye Baburao ka ___ hai!\"",
      options: {
        A: "style",
        B: "gaana",
        C: "ghar",
        D: "dhandha"
      },
      correct: "A",
      answer: "A",
      description: "Level 5 | Dialogue Fill-in\nAnswer: A (style)\nParesh Rawal's famous line in Hera Pheri: \"Ye Baburao ka style hai\"."
    },
    {
      id: 506,
      contestant: 5,
      level: 6,
      topic: "Meme Fill-in",
      text: "Fill in the meme: \"Ye hamari car hai, ye hum hain, aur ye hamari ___ ho rahi hai.\"",
      question: "Fill in the meme: \"Ye hamari car hai, ye hum hain, aur ye hamari ___ ho rahi hai.\"",
      options: {
        A: "shaadi",
        B: "mehfil",
        C: "pawri",
        D: "pooja"
      },
      correct: "C",
      answer: "C",
      description: "Level 6 | Meme Fill-in\nAnswer: C (pawri)\n\"Pawri ho rahi hai\" went viral in 2021."
    },
    {
      id: 507,
      contestant: 5,
      level: 7,
      topic: "C++ Basics",
      text: "Which symbol starts a single-line comment in C++?",
      question: "Which symbol starts a single-line comment in C++?",
      options: {
        A: "//",
        B: "##",
        C: "**",
        D: "--"
      },
      correct: "A",
      answer: "A",
      description: "Level 7 | C++ Basics\nAnswer: A (//)\n// starts a single-line comment; the compiler ignores the rest of that line."
    },
    {
      id: 508,
      contestant: 5,
      level: 8,
      topic: "India GK",
      text: "What is the capital of Tamil Nadu?",
      question: "What is the capital of Tamil Nadu?",
      options: {
        A: "Chennai",
        B: "Madurai",
        C: "Coimbatore",
        D: "Hyderabad"
      },
      correct: "A",
      answer: "A",
      description: "Level 8 | India GK\nAnswer: A (Chennai)\nChennai is the capital of Tamil Nadu."
    },
    {
      id: 509,
      contestant: 5,
      level: 9,
      topic: "Movies",
      text: "Gabbar Singh is the villain of which movie?",
      question: "Gabbar Singh is the villain of which movie?",
      options: {
        A: "Sholay",
        B: "Deewar",
        C: "Don",
        D: "Karan Arjun"
      },
      correct: "A",
      answer: "A",
      description: "Level 9 | Movies\nAnswer: A (Sholay)\nGabbar Singh, played by Amjad Khan, is the villain of Sholay (1975)."
    },
    {
      id: 510,
      contestant: 5,
      level: 10,
      topic: "Dialogue Fill-in",
      text: "Fill in the blank (Pushpa): \"Pushpa, ___ nahi!\"",
      question: "Fill in the blank (Pushpa): \"Pushpa, ___ nahi!\"",
      options: {
        A: "rukega",
        B: "darega",
        C: "haarega",
        D: "jhukega"
      },
      correct: "D",
      answer: "D",
      description: "Level 10 | Dialogue Fill-in\nAnswer: D (jhukega)\nAllu Arjun's line in Pushpa: \"Pushpa, jhukega nahi saala\"."
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
  contestant_1: ["B", "C", "C", "D", "C", "C", "B", "D", "C", "D"],
  contestant_2: ["B", "A", "B", "B", "D", "C", "B", "A", "B", "C"],
  contestant_3: ["B", "C", "C", "B", "A", "C", "B", "C", "D", "C"],
  contestant_4: ["A", "A", "C", "D", "A", "B", "D", "B", "B", "B"],
  contestant_5: ["B", "A", "A", "B", "A", "C", "A", "A", "A", "D"]
};

// Quizmaster Notes
quizSets.quizmasterNotes = [
  "All questions are easy. Difficulty rises gently from Level 1 (easiest) to Level 10.",
  "Each contestant gets 2 questions from each of 5 topics: C++ Basics, India GK, Movies, Dialogue Fill-in, Meme Fill-in.",
  "The same level has the same difficulty rank for every contestant.",
  "Fill-in-the-blank answers follow the popular spelling of the dialogue or meme (e.g. Binod, pawri, Rasode).",
  "Accept the option letter or the word itself as the answer."
];

// Export or assign to window for browser access
if (typeof window !== 'undefined') {
  window.quizSets = quizSets;
}
if (typeof module !== 'undefined') {
  module.exports = quizSets;
}
