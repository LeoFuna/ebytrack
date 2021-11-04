const verifyCurrentMonth = (monthInNumber) => {
  const cases = {
    jan: 0,
    fev: 1,
    mar: 2,
    abr: 3,
    mai: 4,
    jun: 5,
    jul: 6,
    ago: 7,
    set: 8,
    out: 9,
    nov: 10,
    dez: 11 };
  switch (monthInNumber) {
  case cases.jan:
    return '1';
  case cases.fev:
    return '2';
  case cases.mar:
    return '3';
  case cases.abr:
    return '4';
  case cases.mai:
    return '5';
  case cases.jun:
    return '6';
  case cases.jul:
    return '7';
  case cases.ago:
    return '8';
  case cases.set:
    return '9';
  case cases.out:
    return '10';
  case cases.nov:
    return '11';
  default:
    return '12';
  }
};

export default verifyCurrentMonth;
