import React from "react";

const updatedComponent = (OriginalComponent, incrementNumber) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementHandler = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }


        render() {
            return <OriginalComponent count={this.state.count} incrementHandler={this.incrementHandler} {...this.props} />
        }
    }
    return NewComponent
}

export default updatedComponent
