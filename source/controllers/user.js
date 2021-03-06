import { Op } from "sequelize"
// Abduhosim tekshirish kerak
const GET = async (req, res) => {
    const users = await req.models.User.findAll()
    console.log(users);
    res.send(users)
}

const POST = async (req, res) => {
    const user = await req.models.User.create({
        username: req.body.username,
        address: req.body.address,
        contact: req.body.contact
    })

    return res.status(200).send(user)
}
// Abduhosim tekshirish kerak

const UPDATE = async (req, res) => {
    const user = await req.models.User.update(
        req.body,
        {
            where: {
                user_id: {
                    [Op.eq]: req.params.userId
                },
            }
        }
    )

    return res.status(200).send(user)
}
// Abduhosim tekshirish kerak

const DELETE = async (req, res) => {
    const deletedUser = await req.models.User.findOne({ 
        where: {
            user_id: {
                [Op.eq]: req.params.userId
            },
        },
    })

    const user = await req.models.User.destroy(
        {
            where: {
                user_id: {
                    [Op.eq]: req.params.userId
                },
            },
        }
    )
    return res.status(200).send(deletedUser)
}

export default {
    DELETE,
    UPDATE,
    POST,
    GET
}