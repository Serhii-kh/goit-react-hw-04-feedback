import css from '../Section/Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.section__title}>{title}</h2>
    {children}
  </section>
);


Section.propTypes = {
	title: PropTypes.string.isRequired,
}