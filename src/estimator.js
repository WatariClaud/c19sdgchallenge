const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
let impact = {};
let severeImpact = {};

const estimateCurrentlyInfected = () => {
  impact.currentlyInfected = input.reportedCases * 10;
  impact.infectionsByRequestedTime = impact.currentlyInfected * 1024;
  return impact;
};
const estimateExpectedToBeInfected = () => {
  severeImpact.currentlyInfected = input.reportedCases * 50;
  severeImpact.infectionsByRequestedTime = severeImpact.currentlyInfected * 1024;
  return severeImpact;
};

const covid19ImpactEstimator = (data) => {
  const estimator = chain (
    estimateCurrentlyInfected,
    estimateExpectedToBeInfected,
  );

  return estimator({
      data,
      impact: {},
      severeImpact: {}
  });
};

export default covid19ImpactEstimator;
