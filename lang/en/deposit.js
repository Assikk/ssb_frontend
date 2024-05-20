const deposit = {
  deposits: 'Deposits',
  faqTitle: 'What does the client need to know ?',
  faq: {
    title: 'What does a client need to know before taking out a loan from a bank?',
    description: "A loan is a convenient and very necessary financial instrument. But it must be remembered that a loan is a big responsibility. Therefore, try to clearly assess your ability to pay. Count only on a steady source of income. If you have decided to get a loan, visit the bank or contact them. The bank's contacts can be found on the official website.",
    list: [
      {
        id: 1,
        title: 'Do not hesitate to ask questions to a bank employee:',
        isShow: false,
        list: [
          {
            id: 1,
            name: 'How much money can I get?'
          },
          {
            id: 2,
            name: 'What is the amount of the monthly payment?'
          },
          {
            id: 3,
            name: 'Specify the interest rate'
          },
          {
            id: 4,
            name: 'How is the loan repaid?'
          },
          {
            id: 5,
            name: 'In what time frame?'
          }
        ]
      },
      {
        id: 2,
        title: 'Penalties provided by the bank in case of violation of the terms of the loan agreement (delay):',
        isShow: false,
        description: 'In case of partial or complete non-fulfillment by the Borrower of its obligations under this Agreement, the Bank has the right to provide a certificate to the Credit Bureau as a measure of responsibility about the Borrower. If the proceeds from the sale of the mortgaged property are insufficient to meet the requirements of the Bank, the Bank has the right to demand other property of the Borrower to cover the missing amount of money without using the pre-emptive right in accordance with the legislation of the Republic of Tajikistan.'
      },
      {
        id: 3,
        title: 'Pay attention to the annual effective loan rate.',
        description: 'This is the total amount of all payments paid by the borrower under the loan agreement.',
        isShow: false,
        image: {
          src: '/image/credit/faq/1.png'
        }
      }
    ]
  },
}
export default deposit
