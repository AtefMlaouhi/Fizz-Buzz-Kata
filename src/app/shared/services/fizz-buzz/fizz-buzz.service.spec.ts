import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service).toBeTruthy();
  });

  it('getFizzBuzzFromNumber(0) should return `oops`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);

    service
      .getFizzBuzzFromNumber('0')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('oops');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(13) should return `Fizz`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('13')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('Fizz');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(12) should return `FIZZ`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('12')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('FIZZ');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(3) should return [`Fizz`,`FIZZ`]', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('3')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual('Fizz');
        expect(result[1]).toEqual('FIZZ');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(25) should return `Buzz`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('25')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual('Buzz');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(20) should return `BUZZ`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('20')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('BUZZ');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(53) should return [`Fizz`,`Buzz`]', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('53')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual('Fizz');
        expect(result[1]).toEqual('Buzz');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(53) should return [`Fizz`,`Buzz`]', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('53')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual('Fizz');
        expect(result[1]).toEqual('Buzz');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(53) should return [`Fizz`,`Buzz`]', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('53')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual('Fizz');
        expect(result[1]).toEqual('Buzz');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(375) should return [`Fizz`, `FIZZ`, `Buzz`, `BUZZ`]', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('375')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(4);
        expect(result[0]).toEqual('Fizz');
        expect(result[1]).toEqual('FIZZ');
        expect(result[2]).toEqual('Buzz');
        expect(result[3]).toEqual('BUZZ');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(6749) should return `oops`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('6749')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('oops');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(null) should return `oops`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber(null)
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('oops');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(``) should return `oops`', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(1);
        expect(result[0]).toEqual('oops');
      })
      .unsubscribe();
  });

  it('getFizzBuzzFromNumber(35) should return [`Fizz`, `Buzz`, `BUZZ`]', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    service
      .getFizzBuzzFromNumber('35')
      .subscribe((result: string[]) => {
        expect(result.length).toEqual(3);
        expect(result[0]).toEqual('Fizz');
        expect(result[1]).toEqual('Buzz');
        expect(result[2]).toEqual('BUZZ');
      })
      .unsubscribe();
  });

});
