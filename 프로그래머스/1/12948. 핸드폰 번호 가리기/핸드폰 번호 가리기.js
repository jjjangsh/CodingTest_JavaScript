function solution(phone_number) {
    const phoneNumberLength = phone_number.length;
    const phoneNumberArr = phone_number.split('');
    const maskingNum = phoneNumberArr.fill('*', 0, phoneNumberLength - 4);
    
    return maskingNum.join('');
}