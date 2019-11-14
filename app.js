const ValidationMessage = (props) => <p>{props.txt}</p>

const ConfirmationForm = (props) => (
    <form onSubmit={props.submit}>
        <input type="checkbox" id="age" onChange={props.change} checked={props.isConfirmed} />
        <label htmlFor="age">Mam powyżej 18 lat</label>
        <br />
        <button type="submit">Odbierz zaproszenie</button>
    </form>
)

class Vineyard extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        if (!this.state.isFormSubmitted) {
            this.setState({
                isFormSubmitted: true
            })
        }
    }

    displayMessage = () => {
        if (this.state.isFormSubmitted) {
            if (this.state.isConfirmed) {
                return <ValidationMessage txt="Zapraszamy na degustację!" />
            } else {
                return <ValidationMessage txt="Osoby niepełnoletnie nie mogą pić alkoholu! Zapraszamy po ukończeniu 18 roku życia." />
            }
        } else { return null }
    }

    render() {
        const { isConfirmed, isFormSubmitted } = this.state

        return (
            <>
                <h1>Zapraszamy na degustację najlepszych win prosto z Chile!</h1>
                <ConfirmationForm
                    change={this.handleCheckboxChange}
                    submit={this.handleFormSubmit}
                    checked={isConfirmed}
                />
                {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<Vineyard />, document.getElementById("root"))