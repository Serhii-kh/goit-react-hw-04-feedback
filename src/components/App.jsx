import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const onLeaveFeedback = (e) => {
		const name = e.target.name;

		switch (name) {
			case 'good':
				setGood(s => s + 1)
				break

			case 'neutral':
				setNeutral(s => s + 1)
				break

			case 'bad':
				setBad(s => s + 1)
				break

			default: return
		}
	};


	const countTotalFeedback = () => {
		const totalFeedback = good + bad + neutral;

		return totalFeedback;
	}

	const countPositiveFeedbackPercentage = () => {
		const positivePercentage = Math.round(
			(good / countTotalFeedback()) * 100
		);

		return positivePercentage;
	}

	const KEYS = [useState];
	const totalFeedback = countTotalFeedback();
	const positivePercentage = countPositiveFeedbackPercentage();

	console.log(KEYS)

	return (
		<>
			<Section title={'Please leave feedback'}>
				<FeedbackOptions
					options={KEYS} onLeaveFeedback={onLeaveFeedback}
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

