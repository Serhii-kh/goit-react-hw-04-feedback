import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	onLeaveFeedback = (e) => {
		const name = e.target.name;
	
		this.setState(prevState => ({ [name]: prevState[name] + 1 }));

	};

	countTotalFeedback() {
		const { good, neutral, bad } = this.state;
		const totalFeedback = good + bad + neutral;

		return totalFeedback;
	}

	countPositiveFeedbackPercentage() {
		const { good } = this.state;
		const positivePercentage = Math.round(
			(good / this.countTotalFeedback()) * 100
		);

		return positivePercentage;
	}

	render() {
		const { good, neutral, bad } = this.state;
		const KEYS = Object.keys(this.state);
		const totalFeedback = this.countTotalFeedback();
		const positivePercentage = this.countPositiveFeedbackPercentage();

		return (
			<>
				<Section title={'Please leave feedback'}>
					<FeedbackOptions
						options={KEYS} onLeaveFeedback={this.onLeaveFeedback}
					/>
				</Section>

				{totalFeedback !== 0 ? (
					<Section title={'Statistics'}>
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={totalFeedback}
							positivePercentage={positivePercentage} />
					</Section>
				) : (
					<Notification message={'There is no feedback'} />
				)}
			</>
		);
	}
}
