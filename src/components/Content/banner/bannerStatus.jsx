import React from 'react'

class BannerStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })

    this.props.updateStatusThunk(this.state.status)
  }
  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status)
      this.setState({
        status: this.props.status,
      })
  }

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <span onClick={this.activateEditMode}>
            {this.state.status || 'no status'}
          </span>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              onBlur={this.deactivateEditMode}
              Value={this.props.status}
              autoFocus={true}
            ></input>
          </div>
        )}
      </div>
    )
  }
}

export default BannerStatus
