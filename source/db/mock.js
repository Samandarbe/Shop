/*
mahsulotlar

   nomi            banan
   kim tomonidan   Samandar
   narxi(sotilish)  445000
   vaqti(kirish)    2022 06 06  12:00
   maxsulot hajmi    10 kg
   qayerdan          Qoqon


   banan   olma    gilos
    
*/

export default async ({ sequelize }) => {
    await sequelize.models.Product.bulkCreate([
        {
            product_name: 'Salafan',
            from: "Oybek",
            where: "Sirdaryo",
            price:12000,
            quantity:100.5
        },
        {
            product_name: 'Paket',
            from: "Tohir",
            where: "Namangan",
            price:22000,
            quantity:200
        },
    ])
}

