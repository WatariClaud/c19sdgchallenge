const covid19ImpactEstimator = (data) => {
  const inputData = {
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
  data.inputData = inputData;

  const outputData = {
    data,
    impact: {},
    severeImpact: {}
  };

  let impactInfected = outputData.impact.currentlyInfected;
  let severeInfected = outputData.severeImpact.currentlyInfected;
  impactInfected = inputData.reportedCases * 10;
  severeInfected = inputData.reportedCases * 50;

  outputData.impact.infectionsByRequestedTime = impactInfected * 1024;
  outputData.severeImpact.infectionsByRequestedTime = severeInfected * 1024;

  return outputData;
};

export default covid19ImpactEstimator;
