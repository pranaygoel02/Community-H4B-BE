const newData = [
  {
    title: "Home",
    items: [
      {
        title: "About Us",
        url: "https://example.com/about",
        type: "link",
        icon: "FaCircleInfo",
      },
      {
        title: "Products",
        type: "action",
        icon: "BsFillCartFill",
        items: [
          {
            title: "Product 1",
            type: "link",
            icon: "BsFillCartFill",
            url: "https://example.com/product/1",
          },
          {
            title: "Product 2",
            url: "https://example.com/product/2",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 3",
            url: "https://example.com/product/3",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 4",
            url: "https://example.com/product/4",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 5",
            url: "https://example.com/product/5",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 6",
            url: "https://example.com/product/6",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 7",
            url: "https://example.com/product/7",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 8",
            url: "https://example.com/product/8",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 9",
            url: "https://example.com/product/9",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 10",
            url: "https://example.com/product/10",
            type: "link",
            icon: "BsFillCartFill",
          },
        ],
      },
      {
        title: "Blog",
        url: "https://example.com/blog",
        type: "link",
        icon: "FaBlog",
      },
      {
        title: "FAQ",
        url: "https://example.com/faq",
        type: "link",
        icon: "FaQuestion",
      },
    ],
  },
  {
    title: "Help",
    items: [
      {
        title: "Contact",
        url: "https://example.com/contact",
        type: "link",
        icon: "IoMdMail",
      },
      {
        title: "Services",
        url: "https://example.com/services",
        type: "link",
        icon: "RiServiceFill",
      },
      {
        title: "Settings",
        type: "action",
        icon: "IoMdSettings",
        items: [
          {
            title: "Seeting Group 1",
            type: null,
            items: [
              {
                title: "Setting 1",
                type: "action",
                icon: "IoMdSettings",
                items: [
                  {
                    title: "Setting Temp 1",
                    url: "https://example.com/settings/1",
                    type: "link",
                    icon: "IoMdSettings",
                  },
                  {
                    title: "Setting Temp 2",
                    url: "https://example.com/settings/2",
                    type: "link",
                    icon: "IoMdSettings",
                  },
                  {
                    title: "Setting Temp 3",
                    url: "https://example.com/settings/3",
                    type: "link",
                    icon: "IoMdSettings",
                  },
                ],
              },
              {
                title: "Setting 2",
                url: "https://example.com/settings/2",
                type: "link",
                icon: "IoMdSettings",
              },
              {
                title: "Setting 3",
                url: "https://example.com/settings/3",
                type: "link",
                icon: "IoMdSettings",
              },
            ],
          },
          {
            title: "Seeting Group 2",
            type: null,
            items: [
              {
                title: "Setting 1",
                url: "https://example.com/settings/1",
                type: "link",
                icon: "IoMdSettings",
              },
              {
                title: "Setting 2",
                url: "https://example.com/settings/2",
                type: "link",
                icon: "IoMdSettings",
              },
              {
                title: "Setting 3",
                url: "https://example.com/settings/3",
                type: "link",
                icon: "IoMdSettings",
              },
            ],
          },
        ],
      },
    ],
  },
];

const realData = [
  {
    title: "Projects",
    items: [
      {
        title: "Search Projects",
        type: "action",
        icon: "SlGrid",
        cmd: { key: "Ctrl+P", onKeyPress: "push_to_action_stack" },
        items: [
          {
            title: "Project 1",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/1",
          },
          {
            title: "Project 2",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/2",
          },
          {
            title: "Project 3",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/3",
          },
          {
            title: "Project 4",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/4",
          },
          {
            title: "Project 5",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/5",
          },
          {
            title: "Project 6",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/6",
          },
          {
            title: "Project 7",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/7",
          },
          {
            title: "Project 8",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/8",
          },
          {
            title: "Project 9",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/9",
          },
          {
            title: "Project 10",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/project/10",
          },
        ],
      },
      {
        title: "Create Project",
        type: "link",
        icon: "FaPlus",
        url: "https://example.com/project/create",
      },
    ],
  },
  {
    title: "Teams",
    items: [
      {
        title: "Search Teams",
        type: "action",
        icon: "MdOutlineGroup",
        cmd: { key: "Shift+T", onKeyPress: "push_to_action_stack" },
        items: [
          {
            title: "Team 1",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/1",
          },
          {
            title: "Team 2",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/2",
          },
          {
            title: "Team 3",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/3",
          },
          {
            title: "Team 4",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/4",
          },
          {
            title: "Team 5",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/5",
          },
          {
            title: "Team 6",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/6",
          },
          {
            title: "Team 7",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/7",
          },
          {
            title: "Team 8",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/8",
          },
          {
            title: "Team 9",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/9",
          },
          {
            title: "Team 10",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/team/10",
          },
        ],
      },
      {
        title: "Create Team",
        type: "link",
        icon: "FaPlus",
        url: "https://example.com/team/create",
      },
    ],
  },
  {
    title: "Documentation",
    items: [
      {
        title: "Search Documentation",
        type: "action",
        icon: "IoMdDocument",
        cmd: { key: "Shift+D", onKeyPress: "push_to_action_stack" },
        items: [
          {
            title: "Doc 1",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/1",
          },
          {
            title: "Doc 2",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/2",
          },
          {
            title: "Doc 3",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/3",
          },
          {
            title: "Doc 4",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/4",
          },
          {
            title: "Doc 5",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/5",
          },
          {
            title: "Doc 6",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/6",
          },
          {
            title: "Doc 7",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/7",
          },
          {
            title: "Doc 8",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/8",
          },
          {
            title: "Doc 9",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/9",
          },
          {
            title: "Doc 10",
            type: "link",
            icon: "FaPlus",
            url: "https://example.com/doc/10",
          },
        ],
      },
    ],
  },
  {
    title: "Home",
    items: [
      {
        title: "About Us",
        url: "https://example.com/about",
        type: "link",
        icon: "FaCircleInfo",
      },
      {
        title: "Products",
        type: "action",
        icon: "BsFillCartFill",
        items: [
          {
            title: "Product 1",
            type: "link",
            icon: "BsFillCartFill",
            url: "https://example.com/product/1",
          },
          {
            title: "Product 2",
            url: "https://example.com/product/2",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 3",
            url: "https://example.com/product/3",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 4",
            url: "https://example.com/product/4",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 5",
            url: "https://example.com/product/5",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 6",
            url: "https://example.com/product/6",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 7",
            url: "https://example.com/product/7",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 8",
            url: "https://example.com/product/8",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 9",
            url: "https://example.com/product/9",
            type: "link",
            icon: "BsFillCartFill",
          },
          {
            title: "Product 10",
            url: "https://example.com/product/10",
            type: "link",
            icon: "BsFillCartFill",
          },
        ],
      },
      {
        title: "Blog",
        url: "https://example.com/blog",
        type: "link",
        icon: "FaBlog",
      },
      {
        title: "FAQ",
        url: "https://example.com/faq",
        type: "link",
        icon: "FaQuestion",
      },
    ],
  },
  {
    title: "Help",
    items: [
      {
        title: "Contact",
        url: "https://example.com/contact",
        type: "link",
        icon: "IoMdMail",
      },
      {
        title: "Services",
        url: "https://example.com/services",
        type: "link",
        icon: "RiServiceFill",
      },
      {
        title: "Settings",
        type: "action",
        icon: "IoMdSettings",
        cmd: { key: "Ctrl+S", onKeyPress: "push_to_action_stack" },
        items: [
          {
            title: "Seeting Group 1",
            type: null,
            items: [
              {
                title: "Setting 1",
                type: "action",
                icon: "IoMdSettings",
                items: [
                  {
                    title: "Setting Temp 1",
                    url: "https://example.com/settings/1",
                    type: "link",
                    icon: "IoMdSettings",
                  },
                  {
                    title: "Setting Temp 2",
                    url: "https://example.com/settings/2",
                    type: "link",
                    icon: "IoMdSettings",
                  },
                  {
                    title: "Setting Temp 3",
                    url: "https://example.com/settings/3",
                    type: "link",
                    icon: "IoMdSettings",
                  },
                ],
              },
              {
                title: "Setting 2",
                url: "https://example.com/settings/2",
                type: "link",
                icon: "IoMdSettings",
              },
              {
                title: "Setting 3",
                url: "https://example.com/settings/3",
                type: "link",
                icon: "IoMdSettings",
              },
            ],
          },
          {
            title: "Seeting Group 2",
            type: null,
            items: [
              {
                title: "Setting 1",
                url: "https://example.com/settings/1",
                type: "link",
                icon: "IoMdSettings",
              },
              {
                title: "Setting 2",
                url: "https://example.com/settings/2",
                type: "link",
                icon: "IoMdSettings",
              },
              {
                title: "Setting 3",
                url: "https://example.com/settings/3",
                type: "link",
                icon: "IoMdSettings",
              },
            ],
          },
        ],
      },
    ],
  },
];

const getCmdkConfiguration = async (req, res) => {
  try {
    res.status(200).json(realData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCmdkConfiguration,
};
