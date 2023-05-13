import css from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <div className={css.notification}>
    <p>{message}</p>
  </div>
);

Notification.propTypes = {
	message: PropTypes.string.isRequired,
}