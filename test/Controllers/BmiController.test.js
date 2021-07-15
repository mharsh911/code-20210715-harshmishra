const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const faker = require("faker");
const BmiService = require("../../services/BmiService");
const BmiController = require("../../controllers/BmiController");

describe("BmiController", function () {
  describe("getBmiData", function () {
    let send, res;
    beforeEach(() => {
      send = sinon.stub();
      res = { send };
    });
    it("should get bmi data", async function () {
      await BmiController.getBmiData({}, res);
      expect(send.args[0][0].status).to.equal(200);
      expect(send.args[0][0].data[0]).to.be.an('Object');
      expect(send.args[0][0].data[0]).to.have.property('Gender');
      expect(send.args[0][0].data[0]).to.have.property('HeightCm');
      expect(send.args[0][0].data[0]).to.have.property('WeightKg');
      expect(send.args[0][0].data[0]).to.have.property('id');
      expect(send.args[0][0].data[0]).to.have.property('bmi');
      expect(send.args[0][0].data[0]).to.have.property('category');
      expect(send.args[0][0].data[0]).to.have.property('healthRisk');
    });
    it("should not get bmi data if BmiService.findBmi returns false success", async function () {
      const stub = sinon.stub(BmiService, "findBmi").returns({ success: false, message: "some error has occured!" });
      await BmiController.getBmiData({}, res);
      expect(send.args[0][0]).to.be.an('Object');
      expect(send.args[0][0].status).to.equal(500);
      expect(send.args[0][0].message).to.equal("some error has occured!");
      stub.restore();
    });
  });
  describe("getCategoryNumbers", function () {
    let send, res;
    beforeEach(() => {
      send = sinon.stub();
      res = { send };
    });
    it("should get category numbers", async function () {
      await BmiController.getCategoryNumbers({}, res);
      expect(send.args[0][0].status).to.equal(200);
      expect(send.args[0][0].data).to.be.an('Object');
      expect(send.args[0][0].data).to.have.property('underweightCount');
      expect(send.args[0][0].data).to.have.property('overweightCount');
      expect(send.args[0][0].data).to.have.property('normalweightCount');
      expect(send.args[0][0].data).to.have.property('moderatelyobeseCount');
      expect(send.args[0][0].data).to.have.property('severelyobeseCount');
      expect(send.args[0][0].data).to.have.property('veryseverelyobeseCount');
    });
    it("should not get category numbers if BmiService.categoryNumbers returns false success", async function () {
      const stub = sinon.stub(BmiService, "categoryNumbers").returns({ success: false, message: "some error has occured!" });
      await BmiController.getCategoryNumbers({}, res);
      expect(send.args[0][0]).to.be.an('Object');
      expect(send.args[0][0].status).to.equal(500);
      expect(send.args[0][0].message).to.equal("some error has occured!");
      stub.restore();
    });
  });
});