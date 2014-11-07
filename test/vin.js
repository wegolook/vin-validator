var expect = require('chai').expect;
var vinValidator = require('../');

describe('Given a 16 digit VIN', function() {
  var vin = 'WVWUK63B92P54681';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 18 digit VIN', function() {
  var vin = 'WVWUK63B92P5468188';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 17 digit VIN with an i', function() {
  var vin = 'WVWUK63B92P54681i';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 17 digit VIN with an I', function() {
  var vin = 'WVWUK63B92P54681I';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 17 digit VIN with an o', function() {
  var vin = 'WVWUK63B92P54681o';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 17 digit VIN with an O', function() {
  var vin = 'WVWUK63B92P54681O';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 17 digit VIN with an q', function() {
  var vin = 'WVWUK63B92P54681q';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a 17 digit VIN with an Q', function() {
  var vin = 'WVWUK63B92P54681Q';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a valid VIN with lowercase letters', function() {
  var vin = 'wvwuk63b92p546818';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should pass', function() {
      expect(valid).to.be.true;
    });
  });
});

describe('Given a VIN with an incorrect check digit', function() {
  var vin = 'WVWUK63B82P546818';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should fail', function() {
      expect(valid).to.be.false;
    });
  });
});

describe('Given a VIN with a correct check digit', function() {
  var vin = '11111111111111111';

  describe('When the VIN is validated', function() {
    var valid;
    beforeEach(function() { valid = vinValidator.validate(vin); })

    it('Then it should pass', function() {
      expect(valid).to.be.true;
    });
  });
});
