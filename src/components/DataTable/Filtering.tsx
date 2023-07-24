import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Props } from '../..'

const TextField = styled.input`
	height: 48px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 48px;
	width: 48px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`
/**
 * Component for rendering a filter input field and clear button.
 */
const FilterComponent = ({ filterText, onFilter, onClear }: Props) : JSX.Element => (
	<>
		<TextField
			id="search"
			type="text"
			placeholder="Search by Name or City"
			aria-label="Search Input"
			value={filterText}
			onChange={onFilter}
		/>
		<ClearButton type="button" onClick={onClear}>
			X
		</ClearButton>
	</>
)

FilterComponent.propTypes = {
	filterText: PropTypes.string.isRequired,
	onFilter: PropTypes.func.isRequired,
	onClear: PropTypes.func.isRequired,
}

export default FilterComponent



