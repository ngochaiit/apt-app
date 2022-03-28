Author: Ngoc Hai

1. Any extra works that you made and why it is important to.
   Unfortunately, I don't have time to make extra work event I wanted to. I have to work at the company and only do the test on Sunday and Monday night.
   Some extra work I will do when I have time:

- make pagination for table ( in case the employee list counld contain up to 1,000 data)
- spend more time for UI/ UX.

2. Setup instructions:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

This project uses React Hooks, CSS Preprocessor, Redux Toolkit, Typescript, tailwind Css

Why I choose those technologies:

Redux Toolkit:

- A lot lesser boilerplate code is required compared to Redux.
- Redux hooks like useSelector and useDispatch make things so short and easy to use.
- You don't need to do manual thunk setup as redux-toolkit comes with out of the box createAsyncThunk which enables you to perform async operations in very hastle free way.

tailwind Css:

- easy to use, tailwind is very popular for Web development these day.

3.  Overview of React components created and why you design them in such a way:
    This project has 3 React components created in components Folder including: "Modal, Table, Switch".

Table: common table allows displaying the list of employee in a table (actions included), easy extensibility.

Modal: Common Modal have a hook to control open/close modal. I design modal this way based on the design, and useModal hooks allow to import and use modal from anywhere.

Switch: Common Switch allows turn on/off a switch and change value.
