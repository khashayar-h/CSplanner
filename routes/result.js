var router = require('express').Router();

router.get('/', async (req, res) => {
    return res.render('form');
})

router.post('/plan', async (req, res) => {
    const acCount = req.body.acCount;
    const lcCount = req.body.lcCount;
    const doubleCcs2Count = req.body.doubleCcs2Count;
    const ccs2chCount = req.body.ccs2chCount;
    const ccs2Count = req.body.ccs2Count;
    const pantographCount = req.body.pantographCount;
    const cbCount = req.body.cbCount;
    const xTypeCount = req.body.xTypeCount;
    const chademoCount = req.body.chademoCount;
    const powerStation = req.body.gridRadios;
    const voltage = req.body.voltage;
    const power = req.body.power;
    const pdModule = req.body.pdModule;
    const branding = req.body.branding;
    const pSCount = req.body.pSCount;

    const chargingStation = req.body.cSgridRadios;
    const cSVoltage = req.body.cSVoltage
    const cSPower = req.body.cSPower;
    const cSConnectorType = req.body.cSConnectorType;
    const cSCount = req.body.cSCount;
    const cSCableLength = req.body.cSCableLength;
    const cSCurrent = req.body.cSCurrent;
    const cSUI = req.body.cSUI;
    const cSBranding = req.body.cSBranding;
    let cSType = chargingStation == "single"?1: chargingStation == "double"?2:null;
    let cSCode = "C" + cSVoltage + cSType + " " + "P" + cSPower + " N " + cSConnectorType + " " + cSCableLength + " " + cSCurrent + " " + cSUI + " D2 " + cSBranding;

    let psType = powerStation == "single"?1: powerStation == "double"?2: powerStation == "triple"?3:null;
    let psCode = "C" + voltage + psType + " " + "P" + power + " N " + pdModule + " " + branding;

    const doubleCcs2Length = req.body.doubleCcs2Length;
    const doubleCcs2Current = req.body.doubleCcs2Current;
    const doubleCcs2Ui = req.body.doubleCcs2Ui;
    const doubleCcs2Branding = req.body.doubleCcs2Branding;
    let doubleCcs2Code = "ST CC " + doubleCcs2Length + " " + doubleCcs2Current + " " + doubleCcs2Ui + " " + doubleCcs2Branding;

    const ccs2chLength = req.body.ccs2chLength;
    const ccs2chCurrent = req.body.ccs2chCurrent;
    const ccs2chUi = req.body.ccs2chUi;
    const ccs2chBranding = req.body.ccs2chBranding;
    let ccs2chCode = "ST CD " + ccs2chLength + " " + ccs2chCurrent + " " + ccs2chUi + " " + ccs2chBranding;

    const ccs2Length = req.body.ccs2Length;
    const ccs2Current = req.body.ccs2Current;
    const ccs2Ui = req.body.ccs2Ui;
    const ccs2Branding = req.body.ccs2Branding;
    let ccs2Code = "ST C " + ccs2Length + " " + ccs2Current + " " + ccs2Ui + " " + ccs2Branding;

    const xTypeLength = req.body.xTypeLength;
    const xTypeCurrent = req.body.xTypeCurrent;
    const xTypeUi = req.body.xTypeUi;
    const xTypeBranding = req.body.xTypeBranding;
    let xTypeCode = "ST X " + xTypeLength + " " + xTypeCurrent + " " + xTypeUi + " " + xTypeBranding;

    const chademoLength = req.body.chademoLength;
    const chademoCurrent = req.body.chademoCurrent;
    const chademoUi = req.body.chademoUi;
    const chademoBranding = req.body.chademoBranding;
    let chademoCode = "ST D " + chademoLength + " " + chademoCurrent + " " + chademoUi + " " + chademoBranding;

    const pantographHeight = req.body.pantographHeight;
    const pantographWidth = req.body.pantographWidth;
    let pantographCode = "PTUH" + pantographHeight/10 + "W" + pantographWidth/10;

    console.log(psCode);
    console.log(acCount , lcCount, doubleCcs2Count, ccs2chCount, ccs2Count, pantographCount, cbCount, powerStation);
    return res.render('result', {acCount: acCount, lcCount: lcCount, doubleCcs2Count: doubleCcs2Count, ccs2chCount: ccs2chCount, ccs2Count: ccs2Count, pantographCount: pantographCount, cbCount: cbCount, xTypeCount: xTypeCount, chademoCount: chademoCount, powerStation: powerStation, psCode: psCode, doubleCcs2Code: doubleCcs2Code, ccs2chCode: ccs2chCode, ccs2Code: ccs2Code, xTypeCode: xTypeCode, chademoCode: chademoCode, pantographCode: pantographCode, cSCount: cSCount, cSCode: cSCode, chargingStation: chargingStation, pSCount: pSCount});
})

module.exports = router;    