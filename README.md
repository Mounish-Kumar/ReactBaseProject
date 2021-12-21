# What problem does it solve?

While creating React backoffice applications from scratch, we've to

Install many commonly used external libraries such as node-sass, material-ui, axios, react-router-dom, redux, etc

Design and develop many reusable components for layout

Develop mock apis to test the UI independently

Making this setup ready for a traditional backoffice application takes its own sweet time. React Base Project aims at minimising this time by providing all the necessary setup.Now you might ask, "What's the use of creating all the components from scratch? We already have plenty of UI libraries like Material UI and React Bootstrap for that". The problem with these libraries is that, it's not customizable to a larger extent. Of course we can change the colour and theme, but changing the entire look and feel is not possible. Wouldn't it be nicer, if we've access to edit the source code of these common components as per our need? That's exactly what we (React Base Project) provide. All you've to do is, clone this project and start developing your business screens directly. In case you want to change the look and feel of a common component, feel free to do so, because everything is customizable now!


# How to setup the project?

Install NodeJS in your machine, if not available already

Clone the project from [GitHub](https://github.com/Mounish-Kumar/ReactBaseProject)

Navigate to /ReactBaseProject/react-app/

Open command prompt and execute the command "npm install" (Make sure you are connected to open internet without VPN or Proxy)

Navigate to /ReactBaseProject/mock-apis/ and execute the command "npm install"

Once the installation is complete, execute the command "npm run start" in /ReactBaseProject/react-app/ and /ReactBaseProject/mock-apis/

The application will be launched in the browser, else go to [http://localhost:3001](http://localhost:3001)

That's it! Now you will be able to see all the reusable components and its usage documentation by clicking on the components in Side Navigation


# What are the components available?

Header

SideNav

Breadcrumb

Loader

Popup

Table

Pagination

AlertMessage

Tabs

ExpandCollape


# How to use it?

### Menu:

If you want to add or modify menu in Side Navigation bar, you have to change in /ReactBaseProject/react-app/src/components/app/navOptions.js

### Routes:

If you want to configure additional routes other than menu navigation, you have to change in /ReactBaseProject/react-app/src/components/app/routes.js

### Components

Write your components (or business screens) inside /ReactBaseProject/react-app/src/components/ directory

### Shared Components

Write your reusable generic components inside /ReactBaseProject/react-app/src/components/shared/ directory

### API calls
Write your API calls by creating a new .api.js file inside /ReactBaseProject/react-app/src/services/api/ directory

### Utilities & Constants

Write all your reusable functions inside /ReactBaseProject/react-app/src/services/utils.js

Write all your constants inside /ReactBaseProject/react-app/src/services/consts.js

### Styles

Write your styles by creating a new .scss file inside /ReactBaseProject/react-app/src/styles/ directory and import it in styles.scss file

### Images & Fonts

You can add images inside /ReactBaseProject/react-app/src/assets/images/ directory

You can add fonts inside /ReactBaseProject/react-app/src/assets/fonts/ directory

### Redux Store

You can create Slice for your components inside /ReactBaseProject/react-app/src/store/ directory and add its reducer in store.js file

### Frequently Used Actions

You can make use of the below given frequently used actions from /ReactBaseProject/react-app/src/store/appSlice.js

Starting a breadcrumb trail or adding in existing breadcrumb trail

Adding success or error messageShowing or hiding full screen loader

### Delete Directories

Delete the below directories. They're just given as an example

/ReactBaseProject/react-app/src/components/employee/

/ReactBaseProject/react-app/src/components/dashboard/