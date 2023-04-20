import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import ALink from './js/ALink';
// import Counter from './js/Counter';
// import EventButton from './js/EventButton';
// import Form from './js/Form';
// import FormOpt from './js/FormOpt';
// import Header from './js/Header';
// import Hello from './js/Hello';
// import Logo from './js/Logo';
// import MapList from './js/MapList';
// import Toggle from './js/Toggle';
import RefForm from './js/RefForm';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* <App /> */}

		{/* 
		<Header />
		<Hello />
		<Logo />
		<ALink />
		<EventButton />
		<Counter />
		<Toggle />
		<MapList />
		<Form />
		<FormOpt/>
 */}
		<RefForm />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
