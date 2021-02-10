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
                {
                  type: "img",
                  src:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
                  caption: "pandas",
                  alt: "pandas",
                },
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
                // {
                //   type: "p",
                // },
              ],
            },
          },
        },
      ],
    },
  },
};
