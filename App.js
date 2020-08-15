import React from 'react';
import SplashScreen from './src/component/SplashScreen';
import {AppRouter} from './src/route';
import {Provider} from 'react-redux';
import {store} from './src/reducers/store';
import ErrorBoundary from './src/component/ErrorBoundary';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {isLoading: true};
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({isLoading: false});
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <ErrorBoundary>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ErrorBoundary>
    );
  }
}
