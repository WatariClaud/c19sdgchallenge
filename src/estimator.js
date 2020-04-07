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
  const outputData = {
    minputData,
    impact: {},
    severeImpact: {}
  };

  let impactInfected = outputData.impact.currentlyInfected;
  let severeInfected = outputData.severeImpact.currentlyInfected;
  impactInfected = reportedCases & 10;
  severeInfected = reportedCases * 50;

  let impactInfectionsByTime = outputData.impact.infectionsByRequestedTime;
  let severeInfectionsByTime = outputData.severeImpact.infectionsByRequestedTime;
  impactInfectionsByTime = impactInfected * 1024;
  severeInfectionsByTime = severeInfected * 1024;
  
  return outputData;
};

export default covid19ImpactEstimator;
