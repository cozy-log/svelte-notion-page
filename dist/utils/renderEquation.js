import katex from 'katex';
const renderEquation = (expression) => katex.renderToString(expression, { throwOnError: false });
export default renderEquation;
