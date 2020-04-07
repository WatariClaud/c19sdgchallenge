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

  const calculateEstimatedInfections = () => {
    let impactInfected = outputData.impact.currentlyInfected;
    let severeInfected = outputData.severeImpact.currentlyInfected;
    impactInfected = inputData.reportedCases * 10;
    severeInfected = inputData.reportedCases * 50;
    outputData.impact.infectionsByRequestedTimeDays = impactInfected * 1024;
    outputData.severeImpact.infectionsByRequestedTimeDays = severeInfected * 1024;
    outputData.impact.infectionsByRequestedTimeWeeks = outputData.impact.infectionsByRequestedTimeDays * 7;
    outputData.severeImpact.infectionsByRequestedTimeWeeks = outputData.severeImpact.infectionsByRequestedTimeDays * 7;
    outputData.impact.infectionsByRequestedTimeMonths= outputData.impact.infectionsByRequestedTimeWeeks * 4;
    outputData.severeImpact.infectionsByRequestedTimeMonths= outputData.severeImpact.infectionsByRequestedTimeWeeks* 4;

    return outputData;
  };
  calculateEstimatedInfections();
};

export default covid19ImpactEstimator;
