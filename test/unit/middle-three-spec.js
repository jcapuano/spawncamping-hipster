var chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    mt = require('../../lib/middle-three');

describe('Middle Three Digits', function() {

	describe('5 digit integer: 12345', function() {
        it('should find 234', function() {
    		var val = mt(12345);
            val.should.equal(234);
        });
    });

	describe('5 digit negative integer: -12345', function() {
        it('should find 234', function() {
    		var val = mt(-12345);
            val.should.equal(234);
        });
    });
    
	describe('3 digit integer: 123', function() {
        it('should find 123', function() {
    		var val = mt(123);
            val.should.equal(123);
        });
    });

	describe('3 digit negative integer: -123', function() {
        it('should find 234', function() {
    		var val = mt(-123);
            val.should.equal(123);
        });
    });
    
	describe('4 digit integer: 1234', function() {
        it('should error', function() {
        	expect(function() {
            	mt(1234);
            }).to.throw(/invalid input/);
        });
    });
    
    
	describe('8 digit integer: 12345678', function() {
        it('should error', function() {
        	expect(function() {
            	mt(12345678);
            }).to.throw(/invalid input/);
        });
    });
    
	describe('8 digit negative integer: -12345678', function() {
        it('should error', function() {
        	expect(function() {
            	mt(-12345678);
            }).to.throw(/invalid input/);
        });
    });
    
	describe('2 digit integer: 12', function() {
        it('should error', function() {
        	expect(function() {
            	mt(12);
            }).to.throw(/invalid input/);
        });
    });
    
	describe('2 digit negative integer: -12', function() {
        it('should error', function() {
        	expect(function() {
            	mt(-12);
            }).to.throw(/invalid input/);
        });
    });
    
	describe('5 digit decimal: 123.45', function() {
        it('should error', function() {
        	expect(function() {
            	mt(123.45);
            }).to.throw(/invalid input/);
        });
    });

	describe('5 digit negative decimal: -123.45', function() {
        it('should error', function() {
        	expect(function() {
            	mt(-123.45);
            }).to.throw(/invalid input/);
        });
    });
    
	describe('null', function() {
        it('should error', function() {
        	expect(function() {
            	mt();
            }).to.throw(/invalid input/);
        });
    });
    
});
