import { Op } from "sequelize"

const GET = async (req, res) => {
    const products = await req.models.Product.findAll()
    res.send(products)
}

const POST = async (req, res) => {
    const product = await req.models.Product.create({
        product_name: req.body.product_name,
        from: req.body.from,
        where: req.body.where,
        price: req.body.price,
        quantity: req.body.quantity

    })

    return res.status(200).send(product)
}

const UPDATE = async (req, res) => {
    const product = await req.models.Product.update(
        req.body,
        {
            where: {
                product_id: {
                    [Op.eq]: req.params.product_id
                },
            }
        }
    )

    return res.status(200).send(product)
}



export default {
    GET,
    POST,
    UPDATE
}