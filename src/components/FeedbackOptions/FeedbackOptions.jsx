import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
	<div className={css.controls}>
		{
			options.map((option) =>
				<button type="button" key={option} name={option} onClick={onLeaveFeedback}>{option}
				</button>
			)
		}
	</div>
);


FeedbackOptions.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string.isRequired),
	onLeaveFeedback: PropTypes.func.isRequired,
}