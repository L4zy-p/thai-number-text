const TEXT_NUM = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า']
const TEXT_DIGIT = ['หน่วย', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน', 'ล้าน']


export const getThaiNumberText = (number) => {
  const numberUnitArr = number.toString().split('.')
  const firstUnitArr = numberUnitArr[0].toString().split('').reverse()
  const secondUnitArr = numberUnitArr.length > 1 ? numberUnitArr[1].toString().split('').reverse() : []

  if (firstUnitArr.length > 7) {
    return 'กรุณากรอกตัวเลขไม่เกิน 7 หลัก'
  }

  let firstTextUnit = ''
  for (let i = 0; i < firstUnitArr.length; i++) {
    const num = Number(firstUnitArr[i])

    if (num !== 0) {
      if (i === 0) {
        if (num === 1) {
          firstTextUnit = `เอ็ด`
        } else {
          firstTextUnit = `${TEXT_NUM[Number(firstUnitArr[i])]}`
        }
      } else {
        if (i === 1 && num === 2) {
          firstTextUnit = `ยี่${TEXT_DIGIT[i]}` + firstTextUnit
        } else {
          firstTextUnit = `${TEXT_NUM[Number(firstUnitArr[i])]}${TEXT_DIGIT[i]}` + firstTextUnit
        }

      }
    }
  }

  let secondTextUnit = ''
  for (let i = 0; i < secondUnitArr.length; i++) {
    secondTextUnit = `${TEXT_NUM[Number(secondUnitArr[i])]}` + secondTextUnit
  }

  if (secondTextUnit) {
    return `${firstTextUnit}จุด${secondTextUnit}`
  } else {
    return `${firstTextUnit}`
  }
}