import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const GOOD = 'Good'
	const BAD = 'Bad'
	const NEUTRAL = 'Neutral'
	const KEYS = [GOOD, NEUTRAL, BAD];

	const onLeaveFeedback = (e) => {
		const name = e.target.name;

		switch (name) {
			case GOOD:
				setGood(s => s + 1)
				break

			case NEUTRAL:
				setNeutral(s => s + 1)
				break

			case BAD:
				setBad(s => s + 1)
				break

			default: return
		}
	};

	const countTotalFeedback = () => good + bad + neutral;

	const countPositiveFeedbackPercentage = () => Math.round((good / countTotalFeedback()) * 100)

	const totalFeedback = countTotalFeedback();
	
	const positivePercentage = countPositiveFeedbackPercentage();

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
				<Notification message={'There is no feedback :('} />
			)}
		</>
	);
}

