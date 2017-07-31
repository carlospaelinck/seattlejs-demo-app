import shortid from "shortid"
import { commerce, company, lorem } from "faker"

export const generateProduct = () => ({
  id: shortid(),
  name: commerce.productName(),
  price: commerce.price(),
  details: {
    company: company.companyName(),
    color: commerce.color(),
    description: lorem.paragraph()
  }
})

const iterator = Array(25).keys()
export const generateData = () => [...iterator].map(() => generateProduct())
