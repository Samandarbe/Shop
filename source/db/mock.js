export default async ({ sequelize }) => {
    await sequelize.models.User.bulkCreate([
        {
            username: 'Ali',
            address: "Oybek metro",
            contact: "998975661099"
        },
        {
            username: 'Halil',
            address: "Chorsu apteka",
            contact: "998975661099"
        },
        {
            username: 'Abbos',
            address: "Ko'kcha Sharof ota choyxonasi",
            contact: "998975661099"
        },
        {
            username: 'Temur',
            address: " Do'stlik metro",
            contact: "998975661099"
        }
    ])
}