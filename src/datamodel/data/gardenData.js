/* Raw data regarding gardens. */

export const gardenData = [
  /*                  JENNA GARDEN          */
  {
    id: 'garden-01',
    name: '45ght3cf',
    size: '900 sq ft',
    climateVictoryGarden: true,
    lastUpdate: 'March 12, 2022',
    gardeners: [{ gardenerID: 'gardener-01', role: 'owner' }, { gardenerID: 'gardener-02', role: 'editor' }, { gardenerID: 'gardener-04', role: 'viewer' }],
    pictures: [
      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-007-birds-eye-view.jpg`, caption: 'Layout. Blue: 2018. Green: 2019. Purple: 2021. Orange: 2021.', date: 'March, 2022' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-001.jpg`, caption: 'Flowers at the heads of beds 4 and 5.', date: 'May, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-002.jpg`, caption: 'Bed 7 Carrots succession sowed. Bed 11 Sunflowers & amaranth.', date: 'August, 2019' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-003.jpg`, caption: 'Sunflowers hiding the winter squash in bed 11', date: 'June, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-004.jpg`, caption: 'Greens and herbs still growing right after the solstice', date: 'December, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-005.jpg`, caption: 'Bed 6 with zuchinni, herb boxes, and newly planted raspberries', date: 'May, 2020' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/garden-006.jpg`, caption: 'Nice view of beds 1-8 before the plants take over', date: 'March, 2020' },
    ],
    plantingData: [

      /* 2022 Data */

      { plantingID: 'planting-101', year: 2022, bedID: '01', plantID: 'plant-122', startDate: '1/1/2022', transplantDate: '', firstHarvestDate: '1/1/2022', endDate: '6/17/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-101.1', year: 2022, bedID: '01', plantID: 'plant-150', startDate: '4/8/2022', transplantDate: '5/22/2022', firstHarvestDate: '', endDate: '9/1/2022', outcomes: { germination: 3, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-101.2', year: 2022, bedID: '01', plantID: 'plant-150', startDate: '5/21/2022', transplantDate: '', firstHarvestDate: '', endDate: '9/1/2022', outcomes: { germination: 3, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-102', year: 2022, bedID: '02', plantID: 'plant-104', startDate: '3/26/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-103', year: 2022, bedID: '03', plantID: 'plant-101', startDate: '2/20/2022', transplantDate: '3/13/2022', firstHarvestDate: '', endDate: '7/20/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-103.1', year: 2022, bedID: '03', plantID: 'plant-153', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '7/1/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-103.2', year: 2022, bedID: '03', plantID: 'plant-153', startDate: '4/8/2022', transplantDate: '', firstHarvestDate: '', endDate: '5/1/2022', outcomes: { germination: 2, appearance: 1, resistance: 1, yield: 1 }, usedGreenhouse: false },

      { plantingID: 'planting-104', year: 2022, bedID: '04', plantID: 'plant-105', startDate: '2/20/2022', transplantDate: '3/19/2022', firstHarvestDate: '', endDate: '6/7/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-104.1', year: 2022, bedID: '04', plantID: 'plant-102', startDate: '2/20/2022', transplantDate: '3/19/2022', firstHarvestDate: '', endDate: '6/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-104.2', year: 2022, bedID: '04', plantID: 'plant-120', startDate: '2/20/2022', transplantDate: '3/19/2022', firstHarvestDate: '', endDate: '6/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-104.3', year: 2022, bedID: '04', plantID: 'plant-102', startDate: '2/27/2022', transplantDate: '4/17/2022', firstHarvestDate: '', endDate: '6/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-104.4', year: 2022, bedID: '04', plantID: 'plant-120', startDate: '2/27/2022', transplantDate: '4/17/2022', firstHarvestDate: '', endDate: '6/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-104.5', year: 2022, bedID: '04', plantID: 'plant-07', startDate: '4/16/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-104.6', year: 2022, bedID: '04', plantID: 'plant-141', startDate: '3/19/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-105', year: 2022, bedID: '05', plantID: 'plant-122', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '8/1/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-105.1', year: 2022, bedID: '05', plantID: 'plant-122', startDate: '4/30/2022', transplantDate: '', firstHarvestDate: '', endDate: '8/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-105.2', year: 2022, bedID: '05', plantID: 'plant-113', startDate: '4/30/2022', transplantDate: '', firstHarvestDate: '', endDate: '8/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-105.3', year: 2022, bedID: '05', plantID: 'plant-146', startDate: '4/30/2022', transplantDate: '', firstHarvestDate: '', endDate: '8/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-106', year: 2022, bedID: '06', plantID: 'plant-142', startDate: '3/6/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-106.1', year: 2022, bedID: '06', plantID: 'plant-155', startDate: '5/18/2022', transplantDate: '6/1/2022', firstHarvestDate: '', endDate: '8/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-107', year: 2022, bedID: '07', plantID: 'plant-108', startDate: '2/27/2022', transplantDate: '4/17/2022', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-107.1', year: 2022, bedID: '07', plantID: 'plant-108', startDate: '4/16/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-107.2', year: 2022, bedID: '07', plantID: 'plant-134', startDate: '4/16/2022', transplantDate: '', firstHarvestDate: '', endDate: '9/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-107.3', year: 2022, bedID: '07', plantID: 'plant-134', startDate: '4/30/2022', transplantDate: '', firstHarvestDate: '', endDate: '9/15/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-107.4', year: 2022, bedID: '07', plantID: 'plant-154', startDate: '4/16/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-107.5', year: 2022, bedID: '07', plantID: 'plant-154', startDate: '4/30/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/15/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-108', year: 2022, bedID: '08', plantID: 'plant-152', startDate: '4/9/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-108.1', year: 2022, bedID: '08', plantID: 'plant-156', startDate: '5/21/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-108.2', year: 2022, bedID: '08', plantID: 'plant-157', startDate: '5/21/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-108.3', year: 2022, bedID: '08', plantID: 'plant-152', startDate: '5/21/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-108.4', year: 2022, bedID: '08', plantID: 'plant-132', startDate: '5/21/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/30/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-108.5', year: 2022, bedID: '08', plantID: 'plant-137', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '7/15/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.05', year: 2022, bedID: '09', plantID: 'plant-138', startDate: '1/1/2022', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2022', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-110', year: 2022, bedID: '10', plantID: 'plant-135', startDate: '3/26/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111', year: 2022, bedID: '11', plantID: 'plant-103', startDate: '3/12/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111.1', year: 2022, bedID: '11', plantID: 'plant-123', startDate: '3/12/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111.2', year: 2022, bedID: '11', plantID: 'plant-121', startDate: '3/12/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111.3', year: 2022, bedID: '11', plantID: 'plant-149', startDate: '3/26/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111.4', year: 2022, bedID: '11', plantID: 'plant-103', startDate: '3/26/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111.5', year: 2022, bedID: '11', plantID: 'plant-121', startDate: '3/26/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-111.6', year: 2022, bedID: '11', plantID: 'plant-123', startDate: '3/26/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-022.4', year: 2022, bedID: '12', plantID: 'plant-01', startDate: '1/1/2022', transplantDate: '', firstHarvestDate: '4/14/2022', endDate: '12/31/2022', outcomes: { appearance: 5, resistance: 4, yield: 3, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-113', year: 2022, bedID: '13', plantID: 'plant-142', startDate: '3/6/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-113.1', year: 2022, bedID: '13', plantID: 'plant-130', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true }, // delicata

      { plantingID: 'planting-114', year: 2022, bedID: '14', plantID: 'plant-142', startDate: '3/6/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-114.1', year: 2022, bedID: '14', plantID: 'plant-151', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true }, // butternut

      { plantingID: 'planting-115', year: 2022, bedID: '15', plantID: 'plant-140', startDate: '1/1/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-115.1', year: 2022, bedID: '15', plantID: 'plant-107', startDate: '7/15/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-116', year: 2022, bedID: '16', plantID: 'plant-142', startDate: '3/6/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-116.1', year: 2022, bedID: '16', plantID: 'plant-133', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true }, // pumpkin

      { plantingID: 'planting-117', year: 2022, bedID: '17', plantID: 'plant-158', startDate: '4/8/2022', transplantDate: '', firstHarvestDate: '', endDate: '7/15/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-118', year: 2022, bedID: '18', plantID: 'plant-142', startDate: '3/6/2022', transplantDate: '', firstHarvestDate: '', endDate: '6/1/2022', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-118.1', year: 2022, bedID: '18', plantID: 'plant-131', startDate: '4/8/2022', transplantDate: '5/21/2022', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true }, // potimarron

      { plantingID: 'planting-120', year: 2022, bedID: 'GH', plantID: 'plant-110', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.1', year: 2022, bedID: 'GH', plantID: 'plant-125', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.2', year: 2022, bedID: 'GH', plantID: 'plant-126', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.3', year: 2022, bedID: 'GH', plantID: 'plant-127', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.4', year: 2022, bedID: 'GH', plantID: 'plant-128', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.5', year: 2022, bedID: 'GH', plantID: 'plant-148', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.6', year: 2022, bedID: 'GH', plantID: 'plant-106', startDate: '3/12/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.7', year: 2022, bedID: 'GH', plantID: 'plant-110', startDate: '3/26/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.8', year: 2022, bedID: 'GH', plantID: 'plant-126', startDate: '3/26/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.9', year: 2022, bedID: 'GH', plantID: 'plant-128', startDate: '3/26/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.10', year: 2022, bedID: 'GH', plantID: 'plant-127', startDate: '3/26/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.11', year: 2022, bedID: 'GH', plantID: 'plant-125', startDate: '3/26/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-120.12', year: 2022, bedID: 'GH', plantID: 'plant-106', startDate: '3/26/2022', transplantDate: '', firstHarvestDate: '', endDate: '10/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      /* 2021 Data */

      { plantingID: 'planting-001', year: 2021, bedID: '01', plantID: 'plant-101', startDate: '2/15/2021', transplantDate: '3/6/2021', firstHarvestDate: '6/3/2021', endDate: '7/15/2021', outcomes: { germination: 5, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-001.3', year: 2021, bedID: '01', plantID: 'plant-113', startDate: '8/3/2021', transplantDate: '', firstHarvestDate: '9/17/2021', endDate: '12/31/2021', outcomes: { germination: 3, appearance: 5, resistance: 3, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-001.4', year: 2021, bedID: '01', plantID: 'plant-122', startDate: '8/3/2021', transplantDate: '', firstHarvestDate: '9/17/2021', endDate: '12/31/2021', outcomes: { germination: 3, appearance: 5, resistance: 3, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-001.5', year: 2021, bedID: '01', plantID: 'plant-113', startDate: '8/19/2021', transplantDate: '', firstHarvestDate: '9/17/2021', endDate: '12/31/2021', outcomes: { germination: 3, appearance: 5, resistance: 3, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-001.6', year: 2021, bedID: '01', plantID: 'plant-122', startDate: '8/19/2021', transplantDate: '', firstHarvestDate: '9/17/2021', endDate: '12/31/2021', outcomes: { germination: 3, appearance: 5, resistance: 3, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-001.1', year: 2021, bedID: '02', plantID: 'plant-122', startDate: '2/21/2021', transplantDate: '3/27/2021', firstHarvestDate: '', endDate: '5/1/2021', outcomes: { germination: 3, appearance: 1, resistance: 1, yield: 1 }, usedGreenhouse: true },

      { plantingID: 'planting-001.2', year: 2021, bedID: '02', plantID: 'plant-139', startDate: '5/5/2021', transplantDate: '', firstHarvestDate: '6/5/2021', endDate: '9/5/2021', outcomes: { germination: 4, appearance: 4, resistance: 4, yield: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-002', year: 2021, bedID: '03', plantID: 'plant-140', startDate: '1/1/2021', transplantDate: '', firstHarvestDate: '7/5/2021', endDate: '7/5/2021', outcomes: { germination: 5, appearance: 5, resistance: 5, yield: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-002.1', year: 2021, bedID: '03', plantID: 'plant-107', startDate: '7/8/2021', transplantDate: '', firstHarvestDate: '9/5/2021', endDate: '10/17/2021', outcomes: { germination: 5, appearance: 5, resistance: 5, yield: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-003', year: 2021, bedID: '04', plantID: 'plant-108', startDate: '4/4/2021', transplantDate: '', firstHarvestDate: '5/18/2021', endDate: '8/2/2021', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-004', year: 2021, bedID: '04', plantID: 'plant-108', startDate: '4/29/2021', transplantDate: '', firstHarvestDate: '5/25/2021', endDate: '3/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-004.1', year: 2021, bedID: '04', plantID: 'plant-108', startDate: '5/7/2021', transplantDate: '6/20/2021', firstHarvestDate: '7/25/2021', endDate: '3/1/2022', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 4 }, usedGreenhouse: true },

      { plantingID: 'planting-004.2', year: 2021, bedID: '04', plantID: 'plant-129', startDate: '4/4/2021', transplantDate: '', firstHarvestDate: '6/25/2021', endDate: '7/9/2021', outcomes: { germination: 2, appearance: 5, resistance: 4, yield: 5, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-004.3', year: 2021, bedID: '04', plantID: 'plant-141', startDate: '8/3/2021', transplantDate: '', firstHarvestDate: '9/25/2021', endDate: '11/9/2021', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-005', year: 2021, bedID: '05', plantID: 'plant-107', startDate: '4/18/2021', transplantDate: '5/5/2021', firstHarvestDate: '7/10/2021', endDate: '9/1/2021', outcomes: { germination: 5, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-005.1', year: 2021, bedID: '05', plantID: 'plant-132', startDate: '4/4/2021', transplantDate: '5/5/2021', firstHarvestDate: '', endDate: '5/20/2021', outcomes: { germination: 2, appearance: 1, resistance: 1, yield: 1 }, usedGreenhouse: true },

      { plantingID: 'planting-005.2', year: 2021, bedID: '05', plantID: 'plant-135', startDate: '4/1/2021', transplantDate: '5/15/2021', firstHarvestDate: '7/25/2021', endDate: '10/1/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-005.3', year: 2021, bedID: '05', plantID: 'plant-137', startDate: '5/7/2021', transplantDate: '5/26/2021', firstHarvestDate: '6/25/2021', endDate: '10/1/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-006', year: 2021, bedID: '06', plantID: 'plant-102', startDate: '2/21/2021', transplantDate: '3/27/2021', firstHarvestDate: '6/3/2021', endDate: '9/15/2021', outcomes: { germination: 4, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-007', year: 2021, bedID: '06', plantID: 'plant-105', startDate: '4/4/2021', transplantDate: '', firstHarvestDate: '6/4/2021', endDate: '7/10/2021', outcomes: { germination: 5, appearance: 3, resistance: 3, yield: 3, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-011.01', year: 2021, bedID: '06', plantID: 'plant-120', startDate: '2/21/2021', transplantDate: '3/27/2021', firstHarvestDate: '5/2/2021', endDate: '9/15/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-008', year: 2021, bedID: '07', plantID: 'plant-103', startDate: '3/14/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/10/2021', endDate: '9/23/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-009', year: 2021, bedID: '07', plantID: 'plant-104', startDate: '3/28/2021', transplantDate: '5/8/2021', firstHarvestDate: '7/1/2021', endDate: '10/12/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-009.1', year: 2021, bedID: '07', plantID: 'plant-134', startDate: '4/12/2021', transplantDate: '', firstHarvestDate: '6/9/2021', endDate: '10/1/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-009.2', year: 2021, bedID: '07', plantID: 'plant-134', startDate: '4/17/2021', transplantDate: '', firstHarvestDate: '6/9/2021', endDate: '10/1/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-009.3', year: 2021, bedID: '07', plantID: 'plant-134', startDate: '4/29/2021', transplantDate: '', firstHarvestDate: '6/9/2021', endDate: '10/1/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-009.4', year: 2021, bedID: '07', plantID: 'plant-134', startDate: '5/6/2021', transplantDate: '', firstHarvestDate: '6/9/2021', endDate: '10/1/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-009.5', year: 2021, bedID: '07', plantID: 'plant-142', startDate: '9/24/2021', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-011.04', year: 2021, bedID: '08', plantID: 'plant-124', startDate: '3/14/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/20/2021', endDate: '9/23/2021', outcomes: { germination: 4, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.05', year: 2021, bedID: '09', plantID: 'plant-138', startDate: '1/1/2021', transplantDate: '', firstHarvestDate: '6/10/2021', endDate: '12/31/2021', outcomes: { appearance: 4, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-011.1', year: 2021, bedID: '10', plantID: 'plant-118', startDate: '4/4/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/16/2021', endDate: '9/15/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-022', year: 2021, bedID: '11', plantID: 'plant-130', startDate: '4/4/2021', transplantDate: '5/5/2021', firstHarvestDate: '7/15/2021', endDate: '9/14/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-022.1', year: 2021, bedID: '11', plantID: 'plant-131', startDate: '4/4/2021', transplantDate: '5/5/2021', firstHarvestDate: '7/15/2021', endDate: '9/7/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-022.2', year: 2021, bedID: '11', plantID: 'plant-136', startDate: '4/18/2021', transplantDate: '5/6/2021', firstHarvestDate: '6/29/2021', endDate: '9/15/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-022.3', year: 2021, bedID: '11', plantID: 'plant-115', startDate: '5/17/2021', transplantDate: '', firstHarvestDate: '10/1/2021', endDate: '10/1/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-022.4', year: 2021, bedID: '12', plantID: 'plant-01', startDate: '3/25/2021', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2021', outcomes: { appearance: 5, resistance: 4, yield: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-022.5', year: 2021, bedID: '15', plantID: 'plant-140', startDate: '10/18/2021', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2021', outcomes: { appearance: 5, resistance: 4, yield: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-010', year: 2021, bedID: 'GH', plantID: 'plant-106', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '7/02/2021', endDate: '10/31/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011', year: 2021, bedID: 'GH', plantID: 'plant-110', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '8/10/2021', endDate: '9/14/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.02', year: 2021, bedID: '08', plantID: 'plant-121', startDate: '3/14/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/15/2021', endDate: '9/23/2021', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.03', year: 2021, bedID: '08', plantID: 'plant-123', startDate: '3/14/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/25/2021', endDate: '8/15/2021', outcomes: { germination: 4, appearance: 1, resistance: 1, yield: 2, flavor: 4 }, usedGreenhouse: true },

      { plantingID: 'planting-011.00', year: 2021, bedID: '08', plantID: 'plant-103', startDate: '3/28/2021', transplantDate: '5/6/2021', firstHarvestDate: '7/1/2021', endDate: '9/23/2021', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.05', year: 2021, bedID: 'GH', plantID: 'plant-125', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '7/20/2021', endDate: '10/31/2021', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.06', year: 2021, bedID: 'GH', plantID: 'plant-126', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '7/20/2021', endDate: '10/31/2021', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.07', year: 2021, bedID: 'GH', plantID: 'plant-127', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '7/20/2021', endDate: '10/31/2021', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      { plantingID: 'planting-011.08', year: 2021, bedID: 'GH', plantID: 'plant-128', startDate: '3/28/2021', transplantDate: '', firstHarvestDate: '7/20/2021', endDate: '10/31/2021', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: true },

      /* 2020 Data */

      { plantingID: 'planting-012', year: 2020, bedID: '01', plantID: 'plant-116', fromStart: true, startDate: '3/30/2020', transplantDate: '', firstHarvestDate: '6/10/2020', endDate: '12/15/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-013', year: 2020, bedID: '02', plantID: 'plant-101', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '6/12/2020', endDate: '7/25/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-013.1', year: 2020, bedID: '02', plantID: 'plant-122', startDate: '8/19/2020', transplantDate: '', firstHarvestDate: '10/5/2020', endDate: '12/31/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-013.2', year: 2020, bedID: '02', plantID: 'plant-111', startDate: '8/19/2020', transplantDate: '', firstHarvestDate: '10/5/2020', endDate: '12/31/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-013.3', year: 2020, bedID: '02', plantID: 'plant-105', startDate: '8/19/2020', transplantDate: '', firstHarvestDate: '9/25/2020', endDate: '12/15/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-014', year: 2020, bedID: '03', plantID: 'plant-105', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '6/2/2020', endDate: '10/01/2020', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 4, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-015', year: 2020, bedID: '03', plantID: 'plant-111', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '7/14/2020', endDate: '10/01/2020', outcomes: { germination: 4, appearance: 5, resistance: 4, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-016', year: 2020, bedID: '03', plantID: 'plant-113', startDate: '3/24/2020', transplantDate: '', firstHarvestDate: '7/14/2020', endDate: '10/01/2020', outcomes: { germination: 3, appearance: 4, resistance: 4, yield: 3, flavor: 3 }, usedGreenhouse: false },

      { plantingID: 'planting-016.1', year: 2020, bedID: '03', plantID: 'plant-140', startDate: '10/17/2020', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2020', outcomes: { germination: 5, appearance: 4, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-017', year: 2020, bedID: '04', plantID: 'plant-114', fromStart: false, startDate: '4/26/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '10/1/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-017.1', year: 2020, bedID: '04', plantID: 'plant-143', fromStart: false, startDate: '10/1/2020', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2020', outcomes: { appearance: 3, resistance: 3, yield: 3, flavor: 1 }, usedGreenhouse: false },

      { plantingID: 'planting-018', year: 2020, bedID: '05', plantID: 'plant-112', fromStart: true, startDate: '5/6/2020', transplantDate: '', firstHarvestDate: '7/5/2020', endDate: '10/16/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-019', year: 2020, bedID: '05', plantID: 'plant-115', fromStart: false, startDate: '6/28/2020', transplantDate: '', firstHarvestDate: '8/5/2020', endDate: '9/1/2020', outcomes: { germination: 3, appearance: 2, resistance: 5, yield: 2, flavor: 2 }, usedGreenhouse: false },

      { plantingID: 'planting-020', year: 2020, bedID: '06', plantID: 'plant-117', startDate: '5/5/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '10/15/2020', outcomes: { germination: 4, appearance: 4, resistance: 4, yield: 3, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-020.1', year: 2020, bedID: '06', plantID: 'plant-119', fromStart: true, startDate: '5/6/2020', transplantDate: '', firstHarvestDate: '6/15/2020', endDate: '9/1/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-021', year: 2020, bedID: '07', plantID: 'plant-115', startDate: '4/18/2020', transplantDate: '', firstHarvestDate: '7/1/2020', endDate: '9/15/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-021.1', year: 2020, bedID: '07', plantID: 'plant-144', fromStart: true, startDate: '5/5/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '9/16/2020', outcomes: { appearance: 5, resistance: 5, yield: 5, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-022', year: 2020, bedID: '08', plantID: 'plant-145', fromStart: true, startDate: '4/26/2020', transplantDate: '', firstHarvestDate: '7/1/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 5, yield: 3, flavor: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-022.1', year: 2020, bedID: '08', plantID: 'plant-146', startDate: '4/26/2020', transplantDate: '', firstHarvestDate: '6/5/2020', endDate: '8/25/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-022.2', year: 2020, bedID: '08', plantID: 'plant-146', startDate: '4/26/2020', transplantDate: '', firstHarvestDate: '6/5/2020', endDate: '8/25/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-022.3', year: 2020, bedID: '08', plantID: 'plant-07', startDate: '5/5/2020', transplantDate: '', firstHarvestDate: '6/5/2020', endDate: '6/15/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4, flavor: 5 }, usedGreenhouse: false },

      { plantingID: 'planting-022.4', year: 2020, bedID: '08', plantID: 'plant-147', startDate: '5/5/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '8/1/2020', outcomes: { germination: 4, appearance: 5, resistance: 5, yield: 4 }, usedGreenhouse: false },

      { plantingID: 'planting-022.5', year: 2020, bedID: '08', plantID: 'plant-136', startDate: '5/5/2020', transplantDate: '', firstHarvestDate: '9/1/2020', endDate: '9/1/2020', outcomes: { germination: 5, appearance: 5, resistance: 5, yield: 5 }, usedGreenhouse: false },
    ],

    // For a taxonomy of Observation types, see: https://github.com/agilegardenclub/public-garden/issues/13
    observationData: [
      { observationID: 'observation-001', plantingID: 'planting-011.1', observationDate: '9/5/2021', tags: ['disease'], description: 'Powdery mildew found on zuchinni, but still ample flowers and fruit production.', picture: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/observation-001.jpg`, gardenerID: 'gardener-01', replies: [] },
      { observationID: 'observation-002', plantingID: 'planting-001.4', observationDate: '9/10/2021', tags: ['pest', 'help'], description: 'Two unknown caterpillar species on lettuce. What are these?', picture: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/observation-002.jpg`, gardenerID: 'gardener-01', replies: [{ gardenerID: 'gardener-02', date: '9/11/21', comment: 'I suspect some sort of Wooly Caterpillar, but not positive' }, { gardenerID: 'gardener-03', date: '9/11/21', comment: 'I had these and needed to apply Neem Oil and rotate my lettuce to a different bed in the following season.' }, { gardenerID: 'gardener-01', date: '9/22/21', comment: 'I ended up removing them manually. After one month, no harm to lettuce and no re-appearance.' }] },
      { observationID: 'observation-003', plantingID: 'planting-001.1', observationDate: '5/1/2021', tags: ['pest', 'help'], description: 'Lettuce died one by one after transplanted.  Wireworms?', picture: '', gardenerID: 'gardener-01', replies: [] },
      { observationID: 'observation-004', plantingID: 'planting-005.1', observationDate: '5/20/2021', tags: ['pest', 'help'], description: 'Cucumber died one by one after transplanted.  More wireworms or bad transplant?', picture: '', gardenerID: 'gardener-01', replies: [] },
      { observationID: 'observation-005', plantingID: 'planting-022.4', observationDate: '4/14/2022', tags: ['phenology', 'first stem'], description: 'First asparagus shoot!', picture: '', gardenerID: 'gardener-01', replies: [] },
      { observationID: 'observation-006', plantingID: 'planting-111.6', observationDate: '5/21/2022', tags: ['disease', 'help'], description: "Matina tomatoes showing leaf curl second year in a row.  Other tomatoes look fine.  Can they be saved?  Didn't transpant.", picture: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/observation-003.jpg`, gardenerID: 'gardener-01', replies: [] },
      { observationID: 'observation-007', plantingID: 'planting-103', observationDate: '5/20/2022', tags: ['phenology', 'first flower'], description: 'First pea flower!  Peas looking very happy.', picture: `${process.env.PUBLIC_URL}/img/gardens/45ght3cf/observation-004.jpg`, gardenerID: 'gardener-01', replies: [] },
    ],
  },
  /*                       JESSIE GARDEN               */
  {
    id: 'garden-02',
    name: '67abh39db',
    size: '1200 sq ft',
    climateVictoryGarden: false,
    lastUpdate: 'May 22, 2022',
    gardeners: [{ gardenerID: 'gardener-02', role: 'owner' }],
    pictures: [
      { url: `${process.env.PUBLIC_URL}/img/gardens/67abh39db/jessie-garden-map.jpg`, caption: "Bird's eye view.", date: 'May, 2022' },

      { url: `${process.env.PUBLIC_URL}/img/gardens/67abh39db/jessie-1.jpg`, caption: 'Garlic in April.', date: 'April, 2022' },
    ],
    plantingData: [
      /* 2021 Data */
      { plantingID: 'planting-3001', year: 2021, bedID: '1', plantID: 'plant-119', startDate: '5/6/2021', transplantDate: '', firstHarvestDate: '7/16/2021', endDate: '9/15/2021', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } }, // example observation notification

      /* 2020 Data */
      { plantingID: 'planting-2001', year: 2020, bedID: '1', plantID: 'plant-175', startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/30/2020', endDate: '8/15/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2001.1', year: 2020, bedID: '1', plantID: 'plant-03', startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/30/2020', endDate: '9/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2001.2', year: 2020, bedID: '1', plantID: 'plant-176', startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/30/2020', endDate: '7/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2001.3', year: 2020, bedID: '1', plantID: 'plant-167', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '6/30/2020', endDate: '7/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2001.4', year: 2020, bedID: '1', plantID: 'plant-184', startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/30/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2002', year: 2020, bedID: '2', plantID: 'plant-104', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/1/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2002.1', year: 2020, bedID: '2', plantID: 'plant-137', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/1/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2002.2', year: 2020, bedID: '2', plantID: 'plant-153', startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/25/2020', endDate: '7/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2002.3', year: 2020, bedID: '2', plantID: 'plant-170', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2002.4', year: 2020, bedID: '2', plantID: 'plant-172', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '8/1/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2003.1', year: 2020, bedID: '3', plantID: 'plant-182', startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/15/2020', endDate: '7/15/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2003.2', year: 2020, bedID: '3', plantID: 'plant-145', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '6/15/2020', endDate: '7/15/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2003.3', year: 2020, bedID: '3', plantID: 'plant-183', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/15/2020', endDate: '7/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2003.4', year: 2020, bedID: '3', plantID: 'plant-173', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/15/2020', endDate: '8/15/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2003.5', year: 2020, bedID: '3', plantID: 'plant-171', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/5/2020', endDate: '8/15/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004', year: 2020, bedID: '4', plantID: 'plant-194', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/24', endDate: '7/39/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.1', year: 2020, bedID: '4', plantID: 'plant-195', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/24/2020', endDate: '7/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.2', year: 2020, bedID: '4', plantID: 'plant-162', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/10/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.3', year: 2020, bedID: '4', plantID: 'plant-161', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/10/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.4', year: 2020, bedID: '4', plantID: 'plant-196', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/24/2020', endDate: '9/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.5', year: 2020, bedID: '4', plantID: 'plant-197', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/24/2020', endDate: '9/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.6', year: 2020, bedID: '4', plantID: 'plant-198', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/24/2020', endDate: '9/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2004.7', year: 2020, bedID: '4', plantID: 'plant-199', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/24/2020', endDate: '9/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2005', year: 2020, bedID: '5', plantID: 'plant-01', fromStart: false, startDate: '4/1/2020', transplantDate: '', firstHarvestDate: '', endDate: '12/31/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2006', year: 2020, bedID: '6', plantID: 'plant-160', startDate: '1/1/2020', transplantDate: '', firstHarvestDate: '6/1/2020', endDate: '12/31/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2006.1', year: 2020, bedID: '6', plantID: 'plant-140', startDate: '1/1/2020', transplantDate: '', firstHarvestDate: '7/15/2020', endDate: '7/20/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2006.2', year: 2020, bedID: '6', plantID: 'plant-167', startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2007', year: 2020, bedID: '7', plantID: 'plant-180', startDate: '6/1/2020', transplantDate: '', firstHarvestDate: '8/1/2020', endDate: '8/30/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2008', year: 2020, bedID: '8', plantID: 'plant-187', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2008.1', year: 2020, bedID: '8', plantID: 'plant-188', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2008.2', year: 2020, bedID: '8', plantID: 'plant-189', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2009', year: 2020, bedID: '9', plantID: 'plant-185', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2010', year: 2020, bedID: '10', plantID: 'plant-190', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '8/25/2020', endDate: '10/1/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2011', year: 2020, bedID: '11', plantID: 'plant-186', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '6/25/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2012', year: 2020, bedID: '12', plantID: 'plant-191', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/25/2020', endDate: '9/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2012.1', year: 2020, bedID: '12', plantID: 'plant-144', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/1/2020', endDate: '9/1/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2013', year: 2020, bedID: '13', plantID: 'plant-119', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '6/25/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2014', year: 2020, bedID: '14', plantID: 'plant-02', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/25/2020', endDate: '7/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2014.1', year: 2020, bedID: '14', plantID: 'plant-163', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/25/2020', endDate: '7/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2014.2', year: 2020, bedID: '14', plantID: 'plant-178', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/25/2020', endDate: '7/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2014.3', year: 2020, bedID: '14', plantID: 'plant-192', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '6/25/2020', endDate: '12/31/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2014.4', year: 2020, bedID: '14', plantID: 'plant-200', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '8/25/2020', endDate: '12/31/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2015', year: 2020, bedID: '15', plantID: 'plant-193', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/15/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2016', year: 2020, bedID: '16', plantID: 'plant-115', fromStart: false, startDate: '4/24/2020', transplantDate: '', firstHarvestDate: '7/25/2020', endDate: '8/15/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-2017', year: 2020, bedID: '17', plantID: 'plant-186', fromStart: true, startDate: '5/8/2020', transplantDate: '5/8/2020', firstHarvestDate: '7/15/2020', endDate: '8/25/2020', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      /* 2019 Data */
      { plantingID: 'planting-1001', year: 2019, bedID: '1', plantID: 'plant-167', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/20/2019', endDate: '9/1/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.1', year: 2019, bedID: '1', plantID: 'plant-145', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/20/2019', endDate: '9/1/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.2', year: 2019, bedID: '1', plantID: 'plant-168', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '8/15/2019', endDate: '10/1/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.3', year: 2019, bedID: '1', plantID: 'plant-169', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '8/15/2019', endDate: '10/1/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.4', year: 2019, bedID: '1', plantID: 'plant-118', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/15/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.5', year: 2019, bedID: '1', plantID: 'plant-170', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/15/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.6', year: 2019, bedID: '1', plantID: 'plant-171', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/1/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.7', year: 2019, bedID: '1', plantID: 'plant-172', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/15/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1001.8', year: 2019, bedID: '1', plantID: 'plant-173', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/15/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002', year: 2019, bedID: '2', plantID: 'plant-174', fromStart: false, startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/25/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.1', year: 2019, bedID: '2', plantID: 'plant-175', fromStart: false, startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/25/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.2', year: 2019, bedID: '2', plantID: 'plant-03', fromStart: false, startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/05/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.3', year: 2019, bedID: '2', plantID: 'plant-176', fromStart: false, startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/05/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.4', year: 2019, bedID: '2', plantID: 'plant-177', fromStart: false, startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/05/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.5', year: 2019, bedID: '2', plantID: 'plant-112', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/05/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.6', year: 2019, bedID: '2', plantID: 'plant-178', fromStart: false, startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/05/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1002.7', year: 2019, bedID: '2', plantID: 'plant-179', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/15/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1003', year: 2019, bedID: '3', plantID: 'plant-02', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '6/1/2019', endDate: '7/1/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1003.1', year: 2019, bedID: '3', plantID: 'plant-161', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/1/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1003.2', year: 2019, bedID: '3', plantID: 'plant-162', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/1/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1003.3', year: 2019, bedID: '3', plantID: 'plant-163', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/1/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1003.4', year: 2019, bedID: '3', plantID: 'plant-164', fromStart: true, startDate: '5/9/2019', transplantDate: '', firstHarvestDate: '7/1/2019', endDate: '9/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1004', year: 2019, bedID: '4', plantID: 'plant-101', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/1/2019', endDate: '8/1/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1004.1', year: 2019, bedID: '4', plantID: 'plant-107', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/10/2019', endDate: '8/10/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1004.2', year: 2019, bedID: '4', plantID: 'plant-165', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/30/2019', endDate: '8/30/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1004.3', year: 2019, bedID: '4', plantID: 'plant-166', startDate: '4/25/2019', transplantDate: '', firstHarvestDate: '7/30/2019', endDate: '8/30/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1005', year: 2019, bedID: '5', plantID: 'plant-159', startDate: '5/12/2019', transplantDate: '', firstHarvestDate: '7/16/2019', endDate: '8/15/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

      { plantingID: 'planting-1006', year: 2019, bedID: '6', plantID: 'plant-160', startDate: '5/12/2019', transplantDate: '', firstHarvestDate: '6/16/2019', endDate: '12/31/2019', outcomes: { appearance: 5, resistance: 4, yield: 5, flavor: 5 } },

    ],
  },
];
