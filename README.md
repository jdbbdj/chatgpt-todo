# Welcome to My First Chat GPT generated application!

# Description

- This Project will be **documented** using questions and answers by stackoverflow
- **Questions used** will be inserted on the readme through Q and A tags

# Q&A

> **1** Q: How to build an application using React Native?
> **A1**: Install the React Native CLI by running the following command:
> npm install -g react-native-cli
> **A2**: Create a new project using the React Native CLI by running the following command:
> react-native init ChatGPTTodo
> **A3**: Navigate to the project directory:
> cd ChatGPTTodo
> **A4**: Start the development server:
> react-native start
> **A5**: Run the app on an emulator or physical device:
> react-native run-android

# A1 Problem encountered TypeError: cli.init is not a function

> Troubleshooting:
> npm uninstall -g react-native
> npm uninstall -g react-native-cli
> npm -g list
> npm install -g react-native-cli
> npm install -g react-native
> npx react-native init ProjectName

# Disclaimer for A1:

> Follow up question: I am getting an error of TypeError: cli.init is not a function
> Chat GPT answers the same with the stack overflow
> **A1** Make sure that you have the latest version of the React Native CLI installed. You can check the installed version by running the following command:
> react-native -v
> **A2** If you have an older version of the React Native CLI installed, try uninstalling it and then installing the latest version:
> npm uninstall -g react-native-cli
> npm install -g react-native-cli
> **A3** If the issue persists, try deleting the node_modules directory and installing the dependencies again:
> rm -rf node_modules
> npm install

## Conclusion:

> Human interaction are much important in following ChatGPT instructions, I encountered a ERROR:EPERM operation not permitted error and tried to run the code
> in an administrative permission on the folder. and it worked.
