# Minimalistic Academic Portfolio with React + AntD

This project (**minimal-academic-folio**) is a sleek-looking, highly customizable academic portfolio made with the popular [React](https://react.dev/) and [AntD](https://ant.design/) React UI libraries. It provides students and researchers with unified components to quickly construct and showcase their research work in a visually appealing way, as well as maintaining the diversity from the source code for them to embed customized items. 

You can find a live demo of this template here.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Because of that, you should have Node (tested on v16.16.0), and yarn (tested on 1.22.19, or npm) installed on your device.

If the conditions are met, you can get the code going by running `yarn` on the working folder.

(*Note: if `yarn` doesn't work, you should check if something is wrong with the .lock file. Generally, it will be fine to delete the lockfiles and the node-modules folder first and then run `yarn install` to override the previous erroneous installation* )

After installation, run `yarn start`. You will see the code running on your browser on localhost:3000.

## Specifying it with your own content

The structure of the **minimal-academic-folio** draws inspiration from Jekyll's projects. We attempt to make the content-filling process like using a declarative language and utilize the type check properties from TypeScript to prevent you from getting things wrong.

### The folder construction

Under **src** folder:

* **assets**: all your images and binary files you fancy putting on your portfolio. It should include your picture named "selfie.jpg" (preferably a square image, for aesthetic purposes). 

* **drafts**: all the content parts. It includes the menu, your introduction, your publication, etc. We cite pre-made modules to support an easy workflow to display all your content. More on the components below.

* **modules**: only look into it when you are unsure of the data structure, or you want to implement something new.

* **pages**: yes, **minimal-academic-folio** allows you to create multipage React applications. In this folder, you assemble the content from the **drafts** folder to a whole page.

* **App.tsx**: manages the overall .css specification and composes the application. You can change the header and footer here.

* **Router.tsx**: manages the routes here.

Under the root folder:

* **deploy.js**: list your routes again in this file.

### Components

1. **TimeEntry** and **TimedList**: refer to the definition below. Note that TimeEntry displays dynamically with the optional inputs and should suit well with every combination. However, if something looks weird, please notify us by leaving an issue. Check *updates.tsx* for implementation details.

   ```typescript
   interface TimeEntrySpec {
     startTime?: string;
     endTime?: string;
     content: JSX.Element;
     annotation?: JSX.Element;
   }
   
   interface TimedListSpec {
     itemList: JSX.Element[];
     displayLength: number;
   }
   ```

2. **PubEntry** and **PubList**: refer to the definition below. Note that PubEntry also displays dynamically with the optional inputs and should suit well with every combination. However, if something looks weird, please notify us by leaving an issue. Check *publications.tsx* for implementation details.

   ```typescript
   interface PubEntrySpec {
     paperTitle: string;
     authors: JSX.Element;
     venueType:
       | "Conference"
       | "Journal"
       | "Workshop"
       | "arXiv"
       | "Pending"
       | "Other"
       | "Competition"
       | "Course"
       | "Research";
     venueShort?: string;
     venueFull: string;
     affiliation?: string;
     awardName?: string;
     paperLink?: string;
     exploreLink?: string;
     codeLink?: string;
     videoLink?: string;
     presentationLink?: string;
     materialLink?: string;
     abstractContent?: JSX.Element;
   }
   
   interface PubListSpec {
     itemList: JSX.Element[]
   }
   ```

3. **PersonalInfo**: refer to the interface definition below. Check *introduction.tsx* for implementation details.

   ```typescript
   interface InfoSpec {
     portrait: string;
     name: string;
     affiliation: string;
     personalStatement: JSX.Element;
     googleScholar?: string;
     github?: string;
     linkedin?: string;
     email?: string;
     twitter?: string;
     weibo?: string;
     orcid?: string;
     location?: string;
   }
   ```

4. **Menu**: refer to Ant Design documents for details. A warning when creating hyper refs is always to remember to add `baseServerAddress` to your hyper ref. This allows the template to work consistently under both development and build environments. Check *menu.tsx* for implementation details.

5. **FreeCanvas**: pass the parameter **content** into the component. The **content** is any JSX element (i.e., supporting HTML inputs).  This functionality is rarely proper under the academic page context. However, this is perhaps very useful when building your features, and you can wrap it inside the **FreeCanvas**.

## Deployment

Before deployment, please go to the **deploy.js** file and register all the subpages under your academic page. This is a must-do step to deploy the project on GitHub pages. This file copies an index.html file to all the subpages folder to ensure GitHub Pages can find an index.html to show with browser routing.

```javascript
// if you have xxx/misc and xxx/publication, then specification looks like this
const routes = [
    'misc',
    'publication'
]
```

If you have successfully installed all the packages, you can directly publish your website on GitHub pages via `yarn deploy`. But before that, please ensure you have changed the "homepage" entry in **package.json** to your repository name. You can check the details on the Create-React-App document.

Another way to deploy is simply to run `yarn build`, and copy the build folder to your server (or Github Repo). It should be ready to go with what is inside the build folder.

## Contribution

**Minimal-academic-folio** is still very young, and we encourage you to suggest what functionalities should be added to this template. If you have any ideas, you can leave an issue or fork/clone the repository to implement your ideas.

Here are several things that are yet to be realized:

- [ ] SEO optimization for Google Analytics
- [ ] A better publications component to support both partial display (i.e., selected work) and a full publication display. My current idea is to compile it directly from Bibtex.
- [ ] Responsiveness optimization. The current compatibility to mobile devices is fine, but I think it sort of lost the sleekness on mobile devices.
- [ ] ... (possibly more)

