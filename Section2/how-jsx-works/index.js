function getMood() {
    const moods = ['angry', 'hungry', 'silly', 'quiet', 'paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}
class JSXDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>My number is: {2 * 8.4}</h1>
                <h2>My current mood is: {getMood()}</h2>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'))