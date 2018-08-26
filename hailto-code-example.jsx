// Setting up the requirements, variations and defaults for an input
TextFormInputRow.propTypes = {
    validate: PropTypes.arrayOf(PropTypes.shape({})),
    required: PropTypes.bool,
    stacked: PropTypes.bool,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    component: PropTypes.func,
    optionalLabelOverride: PropTypes.bool,
};

FormInput.defaultProps = {
    validate: [],
    required: false,
    stacked: false,
    component: renderFieldFn(FormControl),
    addon: '',
    icon: '',
    size: '',
    maxLength: 200,
    optionalLabelOverride: false,
};

// Render an input
<FormInput
    name="url"
    label="URL"
    type="url"
    stacked
    required
/>
