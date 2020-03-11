import React, { Component } from 'react';
import FeedbackStats from './feedback/feedbackStats/FeedbackStats'
import FeedbackForm from './feedback/feedbackForm/FeedbackForm'
import Notification from './feedback/notification/Notification'
import Section from './feedback/section/Section'


class App extends Component {
    state = { 
        good: 0,
        neutral: 0,
        bad: 0
     }
    func = (e) => {
            const val = e.target.value;
            this.setState({
              [val]: this.state[val] + 1
            });
          };
    
    getTotal = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
      };
        
    getPercentages = () => {
        return Math.round((this.state.good / this.getTotal()) * 100);
    };

    render() {
        return (
            <>
            <Section title="Please leave feedback">
                <FeedbackForm stats={this.state} func={this.func} />
            </Section>
                {this.getTotal() !== 0  ? (<FeedbackStats data={this.state} total={this.getTotal()}
            percentages={this.getPercentages()}/>) : 
                (<Notification message="No feedback given" />)
                }
            </>
        );
    }
}

export default App;

// good = (e) => {
    //     this.setState(prevState => {
    //         return {
    //             good: prevState.good + 1
    //         };
    // })}
    // neutral = (e) => {
    //     this.setState(prevState => {
    //         return {
    //             neutral: prevState.neutral + 1
    //         };
    // })}
    // bad = (e) => {
    //     this.setState(prevState => {
    //         return {
    //             bad: prevState.bad + 1
    //         };
    // })}