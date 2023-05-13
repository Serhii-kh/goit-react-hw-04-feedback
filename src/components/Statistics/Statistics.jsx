import css from '../Statistics/Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
	<div className={css.statistics__list}>
		<p className={css.statistics__item}>Good: {good}</p>
		<p className={css.statistics__item}>Neutral: {neutral}</p>
		<p className={css.statistics__item}>Bad: {bad}</p>
		<p className={css.statistics__item}>Total: {total}</p>
		<p className={css.statistics__item}>Positive feedback: {positivePercentage} %</p>
	</div>
);
