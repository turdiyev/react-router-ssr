import React from "react"

export default class TsComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { name: this.props.defaultName }
  }

  render() {
    return <div>Hello {this.state.name} !</div>
  }
}
