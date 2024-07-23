import React from 'react'


export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: "",
    };
  }

  render() {
    const { id, name, completed } = this.props.todo
    const { toggleCompleted } = this.props
    return (
      <div onClick={() => toggleCompleted(id)}>
        {name} {completed &&  '✔'}
      </div>
    )
  }
}
