// |分隔符號創造規定的新型別聯集
function calculate(amount:number,format:boolean):number|string{
    const result=amount *1.5
    return format ? `${result.toFixed(2)}` : result
}

//as number型別斷言規範應為何型別
let taxNumber=calculate(100,false) as number
let taxString=calculate(100,true) as string
console.log(`${taxNumber.toFixed(2)}`)
console.log(`${taxString.charAt(0)}`)

//extraFees為其餘參數，視為一陣列
//記得做型別註記，避免null或undefined被當作引數使用
function calculateTax(amount:number,discount:number=0,...extraFees:number[]){
    return amount*1.2 - discount + extraFees.reduce((total,val)=>
        total+val,0)
}

let taxValue:number=calculateTax(100,0,20,30,1,7)
console.log(taxValue)