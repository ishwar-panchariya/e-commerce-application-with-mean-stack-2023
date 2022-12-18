import { Request, Response } from "express";
import { Category } from "../../models/category";
import { Product } from "../../models/product";
import mongoose from 'mongoose';

// save product
const createProduct = async (req: Request, res: Response) => {

    const data = req.body

    const category = await Category.findById(data.category)

    if(!category) return res.status(400).send('Invalid Category')

    let newProduct
    try {
        newProduct = new Product(data)
        newProduct = await newProduct.save()

        res.status(201).json({ s: true, m: `${newProduct.name} product added successfully!`, d: newProduct })
    }
    catch(err) {
        res.status(500).json({ s: false, m: err.message })
    }
}

// get products list
const getProductList = async (req: Request, res: Response) => {

    const products = await Product.find({})
    
    if(!products) {
        return res.status(404).json({ s: false, m: 'No products found!' })
    }
    
    res.status(200).json({ s: true, m: `Products List`, d: products })
}

// get product by id
const getProductById = async (req: Request, res: Response) => {

    const id = req.params.id

    const product = await Product.findById(id).populate('category')
    
    if(!product) {
        return res.status(500).json({ s: false, m: 'Product with the given ID was not found!' })
    }
    
    res.status(200).json({ s: true, m: `Product`, d: product })
}

// update product by id
const updateProduct = async (req: Request, res: Response) => {

    const id = req.params.id
    const data = req.body
    
    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).send('Invalid Product Id')
    }

    const category = await Category.findById(data.category)

    if(!category) return res.status(400).send('Invalid Category')

    const product = await Product.findByIdAndUpdate(id, data, { new : true })
    
    if(!product) {
        return res.status(500).json({ s: false, m: 'No product found!' })
    }
    
    res.status(200).json({ s: true, m: `Product is updated`, d: product })
}

// delete product by id
const deleteProduct = async (req: Request, res: Response) => {

    const id = req.params.id
    
    Product.findByIdAndRemove(id).then(product => {
        if(product) {
            return res.status(200).json({s: true, m: 'Product is deleted!'})
        } else {
            return res.status(404).json({s: true, m: 'Product not found!'})
        }
    }).catch((err) => { 
        return res.status(400).json({success: true, error: err})
    });
}

// get products count
const getProductCount = async (req: Request, res: Response) => {

    try {
        const productCount = await Product.countDocuments()
    
        if(!productCount) {
            return res.status(404).json({ s: false, m: 'No products found!' })
        }
        res.status(200).send({ productCount: productCount })    
    } 
    catch(err) {
        return res.status(400).json({success: true, error: err})
    }
}

export { createProduct, getProductList, getProductById, getProductCount, updateProduct, deleteProduct }