<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">DEVDISC</h1>
</p>
<p align="center">
    <em>`slogan`</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/GeekAbdou/DevDisc?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/GeekAbdou/DevDisc?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/GeekAbdou/DevDisc?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/GeekAbdou/DevDisc?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
	<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=flat&logo=MongoDB&logoColor=white" alt="MongoDB">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running DevDisc](#-running-DevDisc)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

 `overview`

---

## 📦 Features

 `features`

---

## 📂 Repository Structure

```sh
└── DevDisc/
    ├── README.md
    ├── app
    │   ├── (auth)
    │   │   └── sign-in
    │   │       └── [[...sign-in]]
    │   │           └── page.tsx
    │   ├── (root)
    │   │   ├── (home)
    │   │   │   └── page.tsx
    │   │   ├── ask-question
    │   │   │   └── page.tsx
    │   │   ├── community
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── profile
    │   │   │   ├── [id]
    │   │   │   │   └── page.tsx
    │   │   │   └── edit
    │   │   │       └── page.tsx
    │   │   ├── questions
    │   │   │   ├── [id]
    │   │   │   │   └── page.tsx
    │   │   │   └── edit
    │   │   │       └── [id]
    │   │   ├── saved
    │   │   │   └── page.tsx
    │   │   └── tags
    │   │       ├── [id]
    │   │       │   └── page.tsx
    │   │       └── page.tsx
    │   ├── api
    │   │   └── webhooks
    │   │       └── route.ts
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── sign-up
    │       └── [[...sign-up]]
    │           └── page.tsx
    ├── components
    │   ├── Actions
    │   │   └── EditDeleteActionToast.tsx
    │   ├── cards
    │   │   ├── ProfileAnswerCard.tsx
    │   │   ├── QuestionCard.tsx
    │   │   └── UserCard.tsx
    │   ├── forms
    │   │   ├── Answer.tsx
    │   │   ├── Profile.tsx
    │   │   ├── Question.tsx
    │   │   ├── QuestionEditor.tsx
    │   │   ├── QuestionTags.tsx
    │   │   └── QuestionTitle.tsx
    │   ├── shared
    │   │   ├── AllAnswers
    │   │   │   └── AllAnswers.tsx
    │   │   ├── Filters
    │   │   │   ├── Filters.tsx
    │   │   │   ├── GlobalFilters.tsx
    │   │   │   └── HomeFilters.tsx
    │   │   ├── LeftSidebar
    │   │   │   └── LeftSidebar.tsx
    │   │   ├── Metric
    │   │   │   └── Metric.tsx
    │   │   ├── NoResult
    │   │   │   └── NoResult.tsx
    │   │   ├── ParseHTML
    │   │   │   └── ParseHTML.tsx
    │   │   ├── Profile
    │   │   │   ├── ProfileAnswersTab.tsx
    │   │   │   ├── ProfileLink.tsx
    │   │   │   ├── ProfileQuestionTab.tsx
    │   │   │   └── ProfileStats.tsx
    │   │   ├── RightSidebar
    │   │   │   ├── RenderTag.tsx
    │   │   │   └── RightSidebar.tsx
    │   │   ├── Theme.tsx
    │   │   ├── Votes
    │   │   │   └── Votess.tsx
    │   │   ├── navbar
    │   │   │   ├── MobileNav.tsx
    │   │   │   ├── Navbar.tsx
    │   │   │   └── Theme.tsx
    │   │   └── search
    │   │       ├── GlobalResult.tsx
    │   │       ├── GlobalSearch.tsx
    │   │       └── LocalSearchBar.tsx
    │   └── ui
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── menubar.tsx
    │       ├── select.tsx
    │       ├── sheet.tsx
    │       ├── tabs.tsx
    │       ├── textarea.tsx
    │       ├── toast.tsx
    │       ├── toaster.tsx
    │       └── use-toast.ts
    ├── components.json
    ├── constants
    │   ├── filters.ts
    │   └── index.ts
    ├── context
    │   └── ThemeProvider.tsx
    ├── database
    │   ├── answer.model.ts
    │   ├── interaction.model.ts
    │   ├── question.model.ts
    │   ├── tag.model.ts
    │   └── user.model.ts
    ├── lib
    │   ├── actions
    │   │   ├── answer.action.ts
    │   │   ├── general.action.ts
    │   │   ├── interaction.action.ts
    │   │   ├── job.action.ts
    │   │   ├── question.action.ts
    │   │   ├── shared.types.d.ts
    │   │   ├── tag.action.ts
    │   │   └── user.action.ts
    │   ├── db
    │   │   └── mongoose.ts
    │   ├── utils.ts
    │   └── validation.ts
    ├── middleware.ts
    ├── next.config.js
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── assets
    │   │   ├── icons
    │   │   └── images
    │   ├── next.svg
    │   └── vercel.svg
    ├── styles
    │   └── theme.css
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── index.d.ts
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                      | Summary                                        |
| ---                                                                                       | ---                                            |
| [middleware.ts](https://github.com/GeekAbdou/DevDisc/blob/master/middleware.ts)           | HTTP error 404 for prompt `middleware.ts`      |
| [next.config.js](https://github.com/GeekAbdou/DevDisc/blob/master/next.config.js)         | HTTP error 404 for prompt `next.config.js`     |
| [tailwind.config.ts](https://github.com/GeekAbdou/DevDisc/blob/master/tailwind.config.ts) | HTTP error 404 for prompt `tailwind.config.ts` |
| [components.json](https://github.com/GeekAbdou/DevDisc/blob/master/components.json)       | HTTP error 404 for prompt `components.json`    |
| [tsconfig.json](https://github.com/GeekAbdou/DevDisc/blob/master/tsconfig.json)           | HTTP error 404 for prompt `tsconfig.json`      |
| [postcss.config.js](https://github.com/GeekAbdou/DevDisc/blob/master/postcss.config.js)   | HTTP error 404 for prompt `postcss.config.js`  |
| [package.json](https://github.com/GeekAbdou/DevDisc/blob/master/package.json)             | HTTP error 404 for prompt `package.json`       |
| [package-lock.json](https://github.com/GeekAbdou/DevDisc/blob/master/package-lock.json)   | HTTP error 404 for prompt `package-lock.json`  |

</details>

<details closed><summary>constants</summary>

| File                                                                                | Summary                                          |
| ---                                                                                 | ---                                              |
| [filters.ts](https://github.com/GeekAbdou/DevDisc/blob/master/constants/filters.ts) | HTTP error 404 for prompt `constants/filters.ts` |
| [index.ts](https://github.com/GeekAbdou/DevDisc/blob/master/constants/index.ts)     | HTTP error 404 for prompt `constants/index.ts`   |

</details>

<details closed><summary>styles</summary>

| File                                                                           | Summary                                      |
| ---                                                                            | ---                                          |
| [theme.css](https://github.com/GeekAbdou/DevDisc/blob/master/styles/theme.css) | HTTP error 404 for prompt `styles/theme.css` |

</details>

<details closed><summary>types</summary>

| File                                                                            | Summary                                      |
| ---                                                                             | ---                                          |
| [index.d.ts](https://github.com/GeekAbdou/DevDisc/blob/master/types/index.d.ts) | HTTP error 404 for prompt `types/index.d.ts` |

</details>

<details closed><summary>database</summary>

| File                                                                                                   | Summary                                                   |
| ---                                                                                                    | ---                                                       |
| [user.model.ts](https://github.com/GeekAbdou/DevDisc/blob/master/database/user.model.ts)               | HTTP error 404 for prompt `database/user.model.ts`        |
| [answer.model.ts](https://github.com/GeekAbdou/DevDisc/blob/master/database/answer.model.ts)           | HTTP error 404 for prompt `database/answer.model.ts`      |
| [question.model.ts](https://github.com/GeekAbdou/DevDisc/blob/master/database/question.model.ts)       | HTTP error 404 for prompt `database/question.model.ts`    |
| [interaction.model.ts](https://github.com/GeekAbdou/DevDisc/blob/master/database/interaction.model.ts) | HTTP error 404 for prompt `database/interaction.model.ts` |
| [tag.model.ts](https://github.com/GeekAbdou/DevDisc/blob/master/database/tag.model.ts)                 | HTTP error 404 for prompt `database/tag.model.ts`         |

</details>

<details closed><summary>components.forms</summary>

| File                                                                                                       | Summary                                                         |
| ---                                                                                                        | ---                                                             |
| [QuestionTags.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/forms/QuestionTags.tsx)     | HTTP error 404 for prompt `components/forms/QuestionTags.tsx`   |
| [Question.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/forms/Question.tsx)             | HTTP error 404 for prompt `components/forms/Question.tsx`       |
| [QuestionEditor.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/forms/QuestionEditor.tsx) | HTTP error 404 for prompt `components/forms/QuestionEditor.tsx` |
| [Answer.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/forms/Answer.tsx)                 | HTTP error 404 for prompt `components/forms/Answer.tsx`         |
| [Profile.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/forms/Profile.tsx)               | HTTP error 404 for prompt `components/forms/Profile.tsx`        |
| [QuestionTitle.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/forms/QuestionTitle.tsx)   | HTTP error 404 for prompt `components/forms/QuestionTitle.tsx`  |

</details>

<details closed><summary>components.Actions</summary>

| File                                                                                                                       | Summary                                                                  |
| ---                                                                                                                        | ---                                                                      |
| [EditDeleteActionToast.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/Actions/EditDeleteActionToast.tsx) | HTTP error 404 for prompt `components/Actions/EditDeleteActionToast.tsx` |

</details>

<details closed><summary>components.shared</summary>

| File                                                                                      | Summary                                                 |
| ---                                                                                       | ---                                                     |
| [Theme.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Theme.tsx) | HTTP error 404 for prompt `components/shared/Theme.tsx` |

</details>

<details closed><summary>components.shared.AllAnswers</summary>

| File                                                                                                           | Summary                                                                 |
| ---                                                                                                            | ---                                                                     |
| [AllAnswers.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/AllAnswers/AllAnswers.tsx) | HTTP error 404 for prompt `components/shared/AllAnswers/AllAnswers.tsx` |

</details>

<details closed><summary>components.shared.navbar</summary>

| File                                                                                                     | Summary                                                            |
| ---                                                                                                      | ---                                                                |
| [MobileNav.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/navbar/MobileNav.tsx) | HTTP error 404 for prompt `components/shared/navbar/MobileNav.tsx` |
| [Theme.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/navbar/Theme.tsx)         | HTTP error 404 for prompt `components/shared/navbar/Theme.tsx`     |
| [Navbar.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/navbar/Navbar.tsx)       | HTTP error 404 for prompt `components/shared/navbar/Navbar.tsx`    |

</details>

<details closed><summary>components.shared.Metric</summary>

| File                                                                                               | Summary                                                         |
| ---                                                                                                | ---                                                             |
| [Metric.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Metric/Metric.tsx) | HTTP error 404 for prompt `components/shared/Metric/Metric.tsx` |

</details>

<details closed><summary>components.shared.RightSidebar</summary>

| File                                                                                                                 | Summary                                                                     |
| ---                                                                                                                  | ---                                                                         |
| [RenderTag.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/RightSidebar/RenderTag.tsx)       | HTTP error 404 for prompt `components/shared/RightSidebar/RenderTag.tsx`    |
| [RightSidebar.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/RightSidebar/RightSidebar.tsx) | HTTP error 404 for prompt `components/shared/RightSidebar/RightSidebar.tsx` |

</details>

<details closed><summary>components.shared.Votes</summary>

| File                                                                                              | Summary                                                        |
| ---                                                                                               | ---                                                            |
| [Votess.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Votes/Votess.tsx) | HTTP error 404 for prompt `components/shared/Votes/Votess.tsx` |

</details>

<details closed><summary>components.shared.ParseHTML</summary>

| File                                                                                                        | Summary                                                               |
| ---                                                                                                         | ---                                                                   |
| [ParseHTML.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/ParseHTML/ParseHTML.tsx) | HTTP error 404 for prompt `components/shared/ParseHTML/ParseHTML.tsx` |

</details>

<details closed><summary>components.shared.LeftSidebar</summary>

| File                                                                                                              | Summary                                                                   |
| ---                                                                                                               | ---                                                                       |
| [LeftSidebar.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/LeftSidebar/LeftSidebar.tsx) | HTTP error 404 for prompt `components/shared/LeftSidebar/LeftSidebar.tsx` |

</details>

<details closed><summary>components.shared.Profile</summary>

| File                                                                                                                        | Summary                                                                      |
| ---                                                                                                                         | ---                                                                          |
| [ProfileQuestionTab.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Profile/ProfileQuestionTab.tsx) | HTTP error 404 for prompt `components/shared/Profile/ProfileQuestionTab.tsx` |
| [ProfileStats.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Profile/ProfileStats.tsx)             | HTTP error 404 for prompt `components/shared/Profile/ProfileStats.tsx`       |
| [ProfileAnswersTab.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Profile/ProfileAnswersTab.tsx)   | HTTP error 404 for prompt `components/shared/Profile/ProfileAnswersTab.tsx`  |
| [ProfileLink.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Profile/ProfileLink.tsx)               | HTTP error 404 for prompt `components/shared/Profile/ProfileLink.tsx`        |

</details>

<details closed><summary>components.shared.Filters</summary>

| File                                                                                                              | Summary                                                                 |
| ---                                                                                                               | ---                                                                     |
| [HomeFilters.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Filters/HomeFilters.tsx)     | HTTP error 404 for prompt `components/shared/Filters/HomeFilters.tsx`   |
| [Filters.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Filters/Filters.tsx)             | HTTP error 404 for prompt `components/shared/Filters/Filters.tsx`       |
| [GlobalFilters.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/Filters/GlobalFilters.tsx) | HTTP error 404 for prompt `components/shared/Filters/GlobalFilters.tsx` |

</details>

<details closed><summary>components.shared.NoResult</summary>

| File                                                                                                     | Summary                                                             |
| ---                                                                                                      | ---                                                                 |
| [NoResult.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/NoResult/NoResult.tsx) | HTTP error 404 for prompt `components/shared/NoResult/NoResult.tsx` |

</details>

<details closed><summary>components.shared.search</summary>

| File                                                                                                               | Summary                                                                 |
| ---                                                                                                                | ---                                                                     |
| [GlobalResult.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/search/GlobalResult.tsx)     | HTTP error 404 for prompt `components/shared/search/GlobalResult.tsx`   |
| [LocalSearchBar.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/search/LocalSearchBar.tsx) | HTTP error 404 for prompt `components/shared/search/LocalSearchBar.tsx` |
| [GlobalSearch.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/shared/search/GlobalSearch.tsx)     | HTTP error 404 for prompt `components/shared/search/GlobalSearch.tsx`   |

</details>

<details closed><summary>components.cards</summary>

| File                                                                                                             | Summary                                                            |
| ---                                                                                                              | ---                                                                |
| [ProfileAnswerCard.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/cards/ProfileAnswerCard.tsx) | HTTP error 404 for prompt `components/cards/ProfileAnswerCard.tsx` |
| [UserCard.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/cards/UserCard.tsx)                   | HTTP error 404 for prompt `components/cards/UserCard.tsx`          |
| [QuestionCard.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/cards/QuestionCard.tsx)           | HTTP error 404 for prompt `components/cards/QuestionCard.tsx`      |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                        | Summary                                                |
| ---                                                                                         | ---                                                    |
| [toaster.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/toaster.tsx)   | HTTP error 404 for prompt `components/ui/toaster.tsx`  |
| [tabs.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/tabs.tsx)         | HTTP error 404 for prompt `components/ui/tabs.tsx`     |
| [use-toast.ts](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/use-toast.ts) | HTTP error 404 for prompt `components/ui/use-toast.ts` |
| [menubar.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/menubar.tsx)   | HTTP error 404 for prompt `components/ui/menubar.tsx`  |
| [label.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/label.tsx)       | HTTP error 404 for prompt `components/ui/label.tsx`    |
| [textarea.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/textarea.tsx) | HTTP error 404 for prompt `components/ui/textarea.tsx` |
| [sheet.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/sheet.tsx)       | HTTP error 404 for prompt `components/ui/sheet.tsx`    |
| [badge.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/badge.tsx)       | HTTP error 404 for prompt `components/ui/badge.tsx`    |
| [toast.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/toast.tsx)       | HTTP error 404 for prompt `components/ui/toast.tsx`    |
| [select.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/select.tsx)     | HTTP error 404 for prompt `components/ui/select.tsx`   |
| [input.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/input.tsx)       | HTTP error 404 for prompt `components/ui/input.tsx`    |
| [button.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/button.tsx)     | HTTP error 404 for prompt `components/ui/button.tsx`   |
| [form.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/components/ui/form.tsx)         | HTTP error 404 for prompt `components/ui/form.tsx`     |

</details>

<details closed><summary>context</summary>

| File                                                                                            | Summary                                               |
| ---                                                                                             | ---                                                   |
| [ThemeProvider.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/context/ThemeProvider.tsx) | HTTP error 404 for prompt `context/ThemeProvider.tsx` |

</details>

<details closed><summary>lib</summary>

| File                                                                                | Summary                                       |
| ---                                                                                 | ---                                           |
| [utils.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/utils.ts)           | HTTP error 404 for prompt `lib/utils.ts`      |
| [validation.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/validation.ts) | HTTP error 404 for prompt `lib/validation.ts` |

</details>

<details closed><summary>lib.actions</summary>

| File                                                                                                        | Summary                                                       |
| ---                                                                                                         | ---                                                           |
| [tag.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/tag.action.ts)                 | HTTP error 404 for prompt `lib/actions/tag.action.ts`         |
| [shared.types.d.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/shared.types.d.ts)         | HTTP error 404 for prompt `lib/actions/shared.types.d.ts`     |
| [user.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/user.action.ts)               | HTTP error 404 for prompt `lib/actions/user.action.ts`        |
| [job.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/job.action.ts)                 | HTTP error 404 for prompt `lib/actions/job.action.ts`         |
| [general.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/general.action.ts)         | HTTP error 404 for prompt `lib/actions/general.action.ts`     |
| [question.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/question.action.ts)       | HTTP error 404 for prompt `lib/actions/question.action.ts`    |
| [interaction.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/interaction.action.ts) | HTTP error 404 for prompt `lib/actions/interaction.action.ts` |
| [answer.action.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/actions/answer.action.ts)           | HTTP error 404 for prompt `lib/actions/answer.action.ts`      |

</details>

<details closed><summary>lib.db</summary>

| File                                                                               | Summary                                        |
| ---                                                                                | ---                                            |
| [mongoose.ts](https://github.com/GeekAbdou/DevDisc/blob/master/lib/db/mongoose.ts) | HTTP error 404 for prompt `lib/db/mongoose.ts` |

</details>

<details closed><summary>app</summary>

| File                                                                            | Summary                                     |
| ---                                                                             | ---                                         |
| [globals.css](https://github.com/GeekAbdou/DevDisc/blob/master/app/globals.css) | HTTP error 404 for prompt `app/globals.css` |
| [layout.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/layout.tsx)   | HTTP error 404 for prompt `app/layout.tsx`  |

</details>

<details closed><summary>app.sign-up.[[...sign-up]]</summary>

| File                                                                                             | Summary                                                         |
| ---                                                                                              | ---                                                             |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/sign-up/[[...sign-up]]/page.tsx) | HTTP error 404 for prompt `app/sign-up/[[...sign-up]]/page.tsx` |

</details>

<details closed><summary>app.api.webhooks</summary>

| File                                                                                   | Summary                                               |
| ---                                                                                    | ---                                                   |
| [route.ts](https://github.com/GeekAbdou/DevDisc/blob/master/app/api/webhooks/route.ts) | HTTP error 404 for prompt `app/api/webhooks/route.ts` |

</details>

<details closed><summary>app.(auth).sign-in.[[...sign-in]]</summary>

| File                                                                                                    | Summary                                                                |
| ---                                                                                                     | ---                                                                    |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(auth)/sign-in/[[...sign-in]]/page.tsx) | HTTP error 404 for prompt `app/(auth)/sign-in/[[...sign-in]]/page.tsx` |

</details>

<details closed><summary>app.(root)</summary>

| File                                                                                 | Summary                                           |
| ---                                                                                  | ---                                               |
| [layout.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/layout.tsx) | HTTP error 404 for prompt `app/(root)/layout.tsx` |

</details>

<details closed><summary>app.(root).questions.[id]</summary>

| File                                                                                            | Summary                                                        |
| ---                                                                                             | ---                                                            |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/questions/[id]/page.tsx) | HTTP error 404 for prompt `app/(root)/questions/[id]/page.tsx` |

</details>

<details closed><summary>app.(root).questions.edit.[id]</summary>

| File                                                                                                 | Summary                                                             |
| ---                                                                                                  | ---                                                                 |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/questions/edit/[id]/page.tsx) | HTTP error 404 for prompt `app/(root)/questions/edit/[id]/page.tsx` |

</details>

<details closed><summary>app.(root).community</summary>

| File                                                                                       | Summary                                                   |
| ---                                                                                        | ---                                                       |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/community/page.tsx) | HTTP error 404 for prompt `app/(root)/community/page.tsx` |

</details>

<details closed><summary>app.(root).saved</summary>

| File                                                                                   | Summary                                               |
| ---                                                                                    | ---                                                   |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/saved/page.tsx) | HTTP error 404 for prompt `app/(root)/saved/page.tsx` |

</details>

<details closed><summary>app.(root).tags</summary>

| File                                                                                  | Summary                                              |
| ---                                                                                   | ---                                                  |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/tags/page.tsx) | HTTP error 404 for prompt `app/(root)/tags/page.tsx` |

</details>

<details closed><summary>app.(root).tags.[id]</summary>

| File                                                                                       | Summary                                                   |
| ---                                                                                        | ---                                                       |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/tags/[id]/page.tsx) | HTTP error 404 for prompt `app/(root)/tags/[id]/page.tsx` |

</details>

<details closed><summary>app.(root).profile.[id]</summary>

| File                                                                                          | Summary                                                      |
| ---                                                                                           | ---                                                          |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/profile/[id]/page.tsx) | HTTP error 404 for prompt `app/(root)/profile/[id]/page.tsx` |

</details>

<details closed><summary>app.(root).profile.edit</summary>

| File                                                                                          | Summary                                                      |
| ---                                                                                           | ---                                                          |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/profile/edit/page.tsx) | HTTP error 404 for prompt `app/(root)/profile/edit/page.tsx` |

</details>

<details closed><summary>app.(root).ask-question</summary>

| File                                                                                          | Summary                                                      |
| ---                                                                                           | ---                                                          |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/ask-question/page.tsx) | HTTP error 404 for prompt `app/(root)/ask-question/page.tsx` |

</details>

<details closed><summary>app.(root).(home)</summary>

| File                                                                                    | Summary                                                |
| ---                                                                                     | ---                                                    |
| [page.tsx](https://github.com/GeekAbdou/DevDisc/blob/master/app/(root)/(home)/page.tsx) | HTTP error 404 for prompt `app/(root)/(home)/page.tsx` |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the DevDisc repository:

```sh
git clone https://github.com/GeekAbdou/DevDisc
```

2. Change to the project directory:

```sh
cd DevDisc
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running DevDisc

Use the following command to run DevDisc:

```sh
npm run build && node dist/main.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🛠 Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/GeekAbdou/DevDisc/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/GeekAbdou/DevDisc/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/GeekAbdou/DevDisc/issues)**: Submit bugs found or log feature requests for Devdisc.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/GeekAbdou/DevDisc
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---