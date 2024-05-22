const reception = {
  title: 'Рӯзҳои қабули мизоҷон',
  table: {
    head: [
      {
        id: 1,
        name: '№'
      },
      {
        id: 2,
        name: 'Ному насаб'
      },
      {
        id: 3,
        name: 'Мансаб'
      },
      {
        id: 4,
        name: 'Рӯзи қабул'
      },
      {
        id: 5,
        name: 'Вақти қабул'
      }
    ],
    body: [
      {
        id: 1,
        name: 'Ҳоқимшоҳ',
        surname: 'Бобозода',
        patronymic: 'Ҷурахон',
        post: 'Раиси Раёсат',
        reception: {
          days: ['Чоршанбе', 'Шанбе'],
          time: ['09:00-11:00', '09:00-11:00']
        }
      },
      {
        id: 2,
        name: 'Азизшо',
        surname: 'Ғарибшозода',
        patronymic: 'Қиматшо',
        post: 'Муовини якуми Раиси Раёсат',
        reception: {
          days: ['Сешанбе', 'Панҷшанбе'],
          time: ['09:00-11:00', '15:00-17:00']
        }
      },
      {
        id: 3,
        name: 'Шуҳрат',
        surname: 'Муҳиддинзода',
        patronymic: 'Фаридун',
        post: 'Муовини Раиси Раёсат',
        reception: {
          days: ['Душанбе', 'Ҷумъа'],
          time: ['15:00-17:00', '09:00-11:00']
        }
      }
    ]
  }
}
export default reception
