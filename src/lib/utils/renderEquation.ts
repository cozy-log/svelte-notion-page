import katex from 'katex';
const renderEquation = (expression: string) => katex.renderToString(expression, { throwOnError: false });
export default renderEquation
