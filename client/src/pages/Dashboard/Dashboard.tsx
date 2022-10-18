import React from 'react';
// Class
type DashboardState = {
    user: string
}
class Dashboard extends React.Component<unknown, DashboardState> {
  constructor(props:unknown) {
    super(props);
    this.state = {user: "red"};
  }
  render() {
    return <h2>I am a {this.state.user} User!</h2>;
  }
}
export default Dashboard;