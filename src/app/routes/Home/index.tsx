import * as React from 'react';
const { connect } = require('react-redux');

const s = require('./style.css');

@connect(
  state => ({ session: state.session })
)
class Home extends React.Component<any, any> {
  public render() {
    const { session } = this.props;
    return (
      <div className={s.home}>
        {session.id ? (
          <p>Hello, {session.first_name}!</p>
        ) : (
          <p>Hello, Guest!</p>
        )}
      </div>
    );
  }
}

export default Home;
