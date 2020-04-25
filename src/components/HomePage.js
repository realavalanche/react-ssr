import React from 'react'

class HomePage extends React.Component {

    onClick() {
        console.log('hey I am clicked !')
    }

    render() {

        return (
            <div>
                <h1>Hi I ma the Home page</h1>
                <p>
                    Here's my paragraph
                </p>
                <button onClick={() => this.onClick()}>My btn</button>
            </div>
        )
    }
}

export default HomePage