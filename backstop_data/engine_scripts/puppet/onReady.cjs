module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await import('./clickAndHoverHelper')(page, scenario);

  // add more ready handlers here...
};
