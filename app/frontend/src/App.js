import logo from './logo.svg';
import './App.css';
mport {
	Grid,
	Box,
	Divider,
	Typography,
	IconButton,
	Button,
	Paper,
	Card
} from '@material-ui/core';

const courses = [
  {
    title: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    author: "Maximilian Schwarzmülller",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/react-complete-guide/"
  },
  {
    title: "Modern React with Redux",
    author: "Stephen Grider",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://codingthesmartway.com/courses/modern-react-with-redux/"
  },
  {
    title: "The Complete React Developer Course (w/ Hooks and Redux)",
    author: "Andrew Mead",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "http://codingthesmartway.net/courses/complete-react-web-app-developer/"
  }
];

function App() {
  const greetings = 'Hello My People'
  return (
    <div className="App">
      <h1>{greetings}</h1>
      <h1>List of tutorials</h1>
      <Grid
						container
						justify='center'
						alignItems='center'
						xs={12}
						sm={4}
						xl={4}
						style={{ miHeight: '100%' }}
					>
						{component === 'signin' && <Paper className={classes.paper} elevation={3}><SignIn changeState={changeComponent} /></Paper>}
						{component === 'signup' && <Paper className={classes.paper} elevation={3}><SignUp changeState={changeComponent} /></Paper>}
					</Grid>
      <hr />
      {courses.map((course) => {
        return <div>{course.title}</div>
      })}
    </div>
  );
}

export default App;
