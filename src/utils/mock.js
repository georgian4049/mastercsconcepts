export const courseList = {
  core: [
    { name: "OS", displayName: "Operating System" },
    { name: "DS", displayName: "Data Sructures" },
    { name: "DAA", displayName: "Design and Analysis of Algorithms" },
  ],
  adv: [
    { name: "ML", displayName: "Machine Learning" },
    { name: "AI", displayName: "Artificial Intelligence" },
  ],
};

export const theoryData = {
  core: {},
  adv: {
    ML: {
      theory: [
        {
          cardInfo: {
            id: "1",
            rating: 5,
            title: "Python Pandas",
            imgUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
            description: "Basics of Pandas",
            publishedOn: "27 Jan 2021",
            data: {
              title: "Python Pandas:- Part 1",
              author: "Ayush Shekhar",
              date: "Feb 10, 2021",
              content: [
                {
                  type: "h5",
                  content: "Key Contents:-",
                },
                {
                  type: "olnumber",
                  content: [
                    "3 W’s of Pandas (What/ Why/ Where)",
                    "Installing Pandas",
                    "Data Structures (Data Frame, Series)- Basic",
                    "Important Questions",
                  ],
                },
                // {
                //   type: "img",
                //   src:
                //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
                //   caption: "pandas",
                //   alt: "pandas",
                // },
                {
                  type: "h5",
                  content: "3 W’s of Pandas:-",
                },
                {
                  type: "h6",
                  content: "What is Pandas?",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content: "Pandas is an",
                    },
                    {
                      type: "text",
                      fontWeight: "bold",
                      content: "open source,",
                    },
                    {
                      type: "link",
                      url:
                        "https://en.wikipedia.org/wiki/BSD_licenses#:~:text=BSD%20licenses%20are%20a%20family,and%20distribution%20of%20covered%20software.&text=The%20original%20BSD%20license%20was,a%20Unix%2Dlike%20operating%20system.",
                      content: "BSD-licensed",
                    },
                    {
                      type: "text",
                      fontweight: "normal",
                      content:
                        "library which provides easy to use data structures, data analysis, data manipulation tools for the python programming language. It’s built on top of two core libraries of Python — matplotlib (used for data visualization) and NumPy (used for mathematical Operations). Pandas is like excel of Python. Data Frame is analogous to a table and Series is analogous to rows and columns.",
                    },
                  ],
                },
                {
                  type: "h6",
                  content: "Why Pandas?",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content:
                        "As Pandas is built on top of other Python libraries, and some part of it is implemented in C, which makes it really smarter and faster while execution . In short you can say it’s “fast, flexible, and expressive data structures designed to make working with “relational” or “labeled” data both easy and intuitive.”(mentioned in Pandas docs). With the help of these features you can save some of your time of computation and invest it in analyzing data and building models.",
                    },
                  ],
                },
                //Simple para starts
                {
                  type: "h6",
                  content: "Where Pandas?",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content:
                        "You can use Pandas almost everywhere where you are dealing with data. If you are working on a project where you are going to visualize data, analyze it and perform some operations with it, you will most probably love to use Pandas.",
                    },
                  ],
                },
                //Simple para ends
                {
                  type: "h5",
                  content: "Installation:-",
                },
                {
                  type: "h6",
                  content:
                    "Note:- Officially it is supported by, Python 3.6.1 and above.",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content:
                        "There are multiple ways to install and use Pandas. The easiest and most recommended way to install pandas is to install it as part of the Anaconda distribution, a cross platform distribution for data analysis and scientific computing. Another widely used way to install Pandas is to create a virtual environment and install Pandas in it.",
                    },
                  ],
                },
                {
                  type: "h5",
                  content: "Key Contents:-",
                },
                {
                  type: "olnumber",
                  content: [
                    "3 W’s of Pandas (What/ Why/ Where)",
                    "Installing Pandas",
                    "Data Structures (Data Frame, Series)- Basic",
                    "Important Questions",
                  ],
                },
                // {
                //   type: "img",
                //   src:
                //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
                //   caption: "pandas",
                //   alt: "pandas",
                // },
                {
                  type: "h5",
                  content: "3 W’s of Pandas:-",
                },
                {
                  type: "h6",
                  content: "What is Pandas?",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content: "Pandas is an",
                    },
                    {
                      type: "text",
                      fontWeight: "bold",
                      content: "open source,",
                    },
                    {
                      type: "link",
                      url:
                        "https://en.wikipedia.org/wiki/BSD_licenses#:~:text=BSD%20licenses%20are%20a%20family,and%20distribution%20of%20covered%20software.&text=The%20original%20BSD%20license%20was,a%20Unix%2Dlike%20operating%20system.",
                      content: "BSD-licensed",
                    },
                    {
                      type: "text",
                      fontweight: "normal",
                      content:
                        "library which provides easy to use data structures, data analysis, data manipulation tools for the python programming language. It’s built on top of two core libraries of Python — matplotlib (used for data visualization) and NumPy (used for mathematical Operations). Pandas is like excel of Python. Data Frame is analogous to a table and Series is analogous to rows and columns.",
                    },
                  ],
                },
                {
                  type: "h6",
                  content: "Why Pandas?",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content:
                        "As Pandas is built on top of other Python libraries, and some part of it is implemented in C, which makes it really smarter and faster while execution . In short you can say it’s “fast, flexible, and expressive data structures designed to make working with “relational” or “labeled” data both easy and intuitive.”(mentioned in Pandas docs). With the help of these features you can save some of your time of computation and invest it in analyzing data and building models.",
                    },
                  ],
                },
                //Simple para starts
                {
                  type: "h6",
                  content: "Where Pandas?",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content:
                        "You can use Pandas almost everywhere where you are dealing with data. If you are working on a project where you are going to visualize data, analyze it and perform some operations with it, you will most probably love to use Pandas.",
                    },
                  ],
                },
                //Simple para ends
                {
                  type: "h5",
                  content: "Installation:-",
                },
                {
                  type: "h6",
                  content:
                    "Note:- Officially it is supported by, Python 3.6.1 and above.",
                },
                {
                  type: "p",
                  content: [
                    {
                      type: "text",
                      fontWeight: "normal",
                      content:
                        "There are multiple ways to install and use Pandas. The easiest and most recommended way to install pandas is to install it as part of the Anaconda distribution, a cross platform distribution for data analysis and scientific computing. Another widely used way to install Pandas is to create a virtual environment and install Pandas in it.",
                    },
                  ],
                },
                //ends
                //ends
              ],
            },
          },
        },
      ],
    },
  },
};
